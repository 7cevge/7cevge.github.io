# 7cevge.github.io

Req: 
- `npm i react-icons`
- `npm i gh-pages`
- `npm i react-router-dom`

Redeploy:
1. push changes (technically option)
2. run `npx gh-pages-clean` to clean the cache
  1. prior to deploying, make sure in github pages, it is set to "Deploy from a branch" + "gh-pages" + "/(root)"
3. run `npm run deploy`