### ESLINT 跟prettier常見bug
由於ESLINT與prettier有時候設定會有衝突，
=> 在eslint rule中加入
"prettier/prettier": "off"

### git 已push上去的檔案要如何untrack: 以.env為例
https://stackoverflow.com/questions/38983153/git-ignore-env-files-not-working


### 如何把專案資料夾都更新到最新版本: yarn-upgrade-all
https://www.npmjs.com/package/yarn-upgrade-all

直接按照

### nth child


### 為何fromLine包在fromBlock中的nth-child(2) 不是第二個?
```css
  .fromBlock {
    margin-bottom: 20px;
  }
  
  .fromLine {
    &:nth-child(2) {
      width: 255px;
    }
  }
```


```css

    /* total width */
    /* &::-webkit-scrollbar {
        background-color: #fff;
        width: 12px;
    } */

    /* background of the scrollbar except button or resizer */
    /* &::-webkit-scrollbar-track {
        background-color: #fff;
    }
    &::-webkit-scrollbar-track:hover {
        background-color: #fff;
    } */

    /* scrollbar itself */
    /* &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.15);
        border-width: 0 4px;
        border-style: solid;
        border-color: #fff;
    } */

    /* set button(top and bottom of the scrollbar) */
    /* &::-webkit-scrollbar-button {
        display: none;
    } */


```

### next href導頁如何加判斷
> 在logout code === 200時才會導頁
除了用window.location.href之外有沒有其他方式?


### XinAdmin 
1. SideBar閃一下問題
2. console warning

### NextJS 
基本上import進來的元件會去吃index.tsx或index.ts, 因此如果是用module.tsx 命名必須要再多一個index.tsx

storybook的image問題


### Hooks CallBack after the state was update: useEffect
<a href="https://spectrum.chat/react/general/react-hooks-best-way-to-call-a-fn-after-setstate~da2e457d-4d26-4133-8910-44c66c247f7e"> React best Way to call a func after setState</a>

### setTimeout 會改變this指向，因此需要用()=> ?
如果包在function裡面就不要用()=>

### Next 改版後 static放在public裡面
<a href="https://github.com/zeit/next.js/blob/master/errors/static-dir-deprecated.md">static in public </a>



