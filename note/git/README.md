# git

1、查看用户名、邮箱
git config user.name
git config user.email

2、修改用户名、邮箱
git config --global user.name "tianjiao3240"
git config --global user.email "summer326717@foxmail.com"

3、推送代码
git push

fatal: unable to access 'https://github.com/tianjiao3240/tianjiao3240.github.io.git/': LibreSSL SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443

git remote set-url origin git@github.com:tianjiao3240/tianjiao3240.github.io.git
【SSH keys / Add new】添加公开权限

4、拉取代码
git pull

5、查看提交记录
git log