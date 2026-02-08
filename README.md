<!--
 * @Author: HencyCHEN
 * @Date: 2025-05-25 14:14:41
 * @LastEditTime: 2025-05-25 15:55:41
 * @LastEditors: HencyCHEN
 * @Description: 
 * @FilePath: /hency-727.github.io/README.md
 * @Email: hengxiangchen428@gamil.com
 * 可以输入预定的版权声明、个性签名、空行等
-->
this is my personal website, welcome to fork my repo and change something awaresome

## comment system - based on waline and leadcloud
1. [guideline](https://waline.js.org/guide/get-started/)
2. [video tutorial](https://www.bilibili.com/video/BV1Ft4y1A73f/?spm_id_from=333.788.top_right_bar_window_history.content.click&vd_source=5b39d805b5fe9e0f1d01372dc1131e46)
3. [my personal waline](https://vercel.com/hency-727s-projects/waline_hency/HGMwjMEU1Kea23DCfj6htgeua8W5)
4. [my personal leadcloud](https://console.leancloud.app/apps/wie9cdwsLqidHiEdaaQr6tTF-MdYXbMMI/settings/keys)
5. [failed to fetch?](https://github.com/orgs/walinejs/discussions/2654)
6. Template:
```bash
<head>
  <!-- ... -->
  <link
    rel="stylesheet"
    href="https://unpkg.com/@waline/client@v3/dist/waline.css"
  />
  <!-- ... -->
</head>
<body>
  <!-- ... -->
  <div id="waline"></div>
  <script type="module">
    import { init } from 'https://unpkg.com/@waline/client@v3/dist/waline.js';

    init({
      el: '#waline',
      serverURL: 'https://your-domain.vercel.app',
    });
  </script>
</body>
```
