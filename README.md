# qiita-trend-pwa

[![Lighthouse score: 98/100](https://lighthouse-badge.appspot.com/?score=98&category=Performance)](https://github.com/ebidel/lighthouse-badge)
[![Lighthouse score: 100/100](https://lighthouse-badge.appspot.com/?score=100&category=PWA)](https://github.com/ebidel/lighthouse-badge)
[![Lighthouse score: 100/100](https://lighthouse-badge.appspot.com/?score=100&category=SEO)](https://github.com/ebidel/lighthouse-badge)

[Qiita-Trend-PWA](https://qiita-trend-pwa.now.sh/)<br>
PWAを適用したQiitaのいいねランキング集計サイト。<br>
![screenshot](static/screenshot.png)

# Feature
![lighthouse-score](static/lighthouse-score.png)
- Progressive web app
    - offline
    - install prompts on supported platforms
- Server Side Rendering
- Next.js

# Contents
主に以下2つのランキングを掲載している。内容は2時間毎に最新化される。

- デイリーいいねランキング(前日投稿分のランキング)
- ウィークリーいいねランキング(直近1週間投稿分のランキング)

これらは[qiita-scraiping](https://github.com/zonbitamago/qiita-scraiping)の内容を取得し、表示している。

# Setting the project up locally
```
$ git clone https://github.com/zonbitamago/qiita-trend-pwa.git
$ cd qiita-trend-pwa.git
$ npm install
$ npm run dev
```

# Licence

This software is released under the MIT License, see LICENSE.

# Authors

[zonbitamago](https://github.com/zonbitamago)

# References

[trends](https://github.com/hanford/trends)<br>
[qiita-scraiping](https://github.com/zonbitamago/qiita-scraiping)
