import * as localforage from "localforage";
import moment from "moment";
import fetch from "isomorphic-unfetch";
import * as DateUtil from "./DateUtil";

const myLF = localforage.createInstance({
  driver: localforage.INDEXEDDB, // LocalForage を使用する
  name: "qt", // 名前空間
  storeName: "trend-api", // 名前空間内のインスタンスの識別名
  version: 1 // バージョン
});

export const fetchData = async function() {
  const localRes = await myLF.getItem("res-api");
  let data;

  if (
    localRes == null ||
    moment(localRes.created).isBefore(
      DateUtil.momentJA().subtract("15", "minutes")
    )
  ) {
    const url =
      "https://us-central1-qiita-trend-web-scraping.cloudfunctions.net/qiitaScraiping/";
    let dailyFetch = await fetch(url + "daily/" + DateUtil.oneDayAgo);
    let weeklyFetch = await fetch(url + "weekly/" + DateUtil.oneDayAgo);
    console.log("fetched by API");
    try {
      data = {
        daily: await dailyFetch.json(),
        weekly: await weeklyFetch.json()
      };
    } catch (error) {
      dailyFetch = await fetch(url + "daily/" + DateUtil.twoDaysAgo);
      weeklyFetch = await fetch(url + "weekly/" + DateUtil.twoDaysAgo);
      console.log("fetched two days ago by API");

      data = {
        daily: await dailyFetch.json(),
        weekly: await weeklyFetch.json()
      };
    }
    myLF.setItem("res-api", {
      data: data,
      created: DateUtil.momentJA().format()
    });
  } else {
    const dataByLF = await myLF.getItem("res-api");
    console.log("fetched by IndexedDB");
    data = dataByLF.data;
  }

  return data;
};
