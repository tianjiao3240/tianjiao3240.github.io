# git

```
1、查看用户名、邮箱
git config user.name
git config user.email

2、修改用户名、邮箱
git config --global user.name "tianjiao3240"
git config --global user.email "summer326717@foxmail.com"

git config --global user.name "尹天姣"
git config --global user.email "ytj@servyyou.com.cn"

sudo git config --system --unset credential.helper
git config --global --replace-all user.password 'Servvyou2!'

3、推送代码
git push

fatal: unable to access 'https://github.com/tianjiao3240/tianjiao3240.github.io.git/': LibreSSL SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443
切换工具账号

4、拉取代码
git pull

5、查看提交记录
git log

6、查看
git remote -v

7、切换分支
```
