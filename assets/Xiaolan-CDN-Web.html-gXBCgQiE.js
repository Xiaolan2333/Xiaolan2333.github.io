import{_ as n,c as a,a as e,o as l}from"./app-CpHs93p6.js";const i={};function p(t,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="xiaolan-cdn-web" tabindex="-1"><a class="header-anchor" href="#xiaolan-cdn-web"><span>Xiaolan-CDN-Web</span></a></h1><h2 id="存储库" tabindex="-1"><a class="header-anchor" href="#存储库"><span>存储库</span></a></h2><ul><li>Gitee：<a href="https://gitee.com/Xiaolan23333/Xiaolan-CDN-Web" target="_blank" rel="noopener noreferrer">https://gitee.com/Xiaolan23333/Xiaolan-CDN-Web</a></li><li>GitHub：<a href="https://github.com/Xiaolan2333/Xiaolan-CDN-Web" target="_blank" rel="noopener noreferrer">https://github.com/Xiaolan2333/Xiaolan-CDN-Web</a></li></ul><blockquote><p>本面板，不包含系统主程序本体。</p></blockquote><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2><p>本面板鉴权较为简陋，不建议用于生产环境</p><p>必须修改默认密钥和密码，否则等于裸奔</p><h2 id="从v0-0-2更新" tabindex="-1"><a class="header-anchor" href="#从v0-0-2更新"><span>从V0.0.2更新</span></a></h2><p>由于V0.0.3在目录方面做了较多更改，所以需要使用单独的更新脚本</p><p>一键更新命令：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">wget</span> https://github.com/Xiaolan2333/Xiaolan-CDN-Web/releases/download/Xiaolan-CDN-Web-V0.0.3/web-update-to-0.0.3.sh <span class="token operator">&amp;&amp;</span> <span class="token function">chmod</span> <span class="token number">777</span> web-update-to-0.0.3.sh <span class="token operator">&amp;&amp;</span> ./web-update-to-0.0.3.sh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li><p>更新后需手动重新修改 server.js 和 index.html 中的配置项</p></li><li><p>此脚本仅支持V0.0.2更新至V0.0.3</p></li></ul><h2 id="从v0-0-3更新" tabindex="-1"><a class="header-anchor" href="#从v0-0-3更新"><span>从V0.0.3更新</span></a></h2><p>由于V0.0.4修改了配置的存储办法，所以需要使用单独的更新方式</p><p>写更新脚本太费事了，而且Web只有一台服务器需要配置，所以手动更新吧</p><ol><li><p>备份 cdn-config.json</p></li><li><p>停止后端进程</p></li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">systemctl stop xiaolan-cdn-web</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="3"><li>删除旧文件</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">rm</span> <span class="token parameter variable">-rf</span> /opt/xiaolan-cdn/xiaolan-cdn-web</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="4"><li>安装新版本</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">mkdir</span> /opt/xiaolan-cdn/xiaolan-cdn-web</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">wget</span> <span class="token parameter variable">-P</span> /opt/xiaolan-cdn/xiaolan-cdn-web https://github.com/Xiaolan2333/Xiaolan-CDN-Web/releases/latest/download/Xiaolan-CDN-Web.zip</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">unzip</span> /opt/xiaolan-cdn/xiaolan-cdn-web/Xiaolan-CDN-Web.zip <span class="token parameter variable">-d</span> /opt/xiaolan-cdn/xiaolan-cdn-web</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> /opt/xiaolan-cdn/xiaolan-cdn-web</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">rm</span> /opt/xiaolan-cdn/xiaolan-cdn-web/Xiaolan-CDN-Web.zip</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="5"><li><p>将备份的 cdn-config.json 覆盖到 /opt/xiaolan-cdn/xiaolan-cdn-web/cdn-config.json</p></li><li><p>设置变量</p></li></ol><p>编辑：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">vim</span> /opt/xiaolan-cdn/xiaolan-cdn-web/.env</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>修改以下内容：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token constant">JWT_SECRET</span><span class="token operator">=</span>新的<span class="token constant">JWT</span>密钥   <span class="token comment">// 建议使用复杂随机字符串</span></span>
<span class="line"><span class="token constant">ADMIN_PASSWORD</span><span class="token operator">=</span>新的密码</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>最好把用户名也改了</li></ul><p>编辑：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">vim</span> /opt/xiaolan-cdn/xiaolan-cdn-web/config.js</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>修改以下内容：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token constant">API_BASE</span><span class="token operator">:</span> <span class="token string">&#39;http://服务器的IP:3000/api&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="7"><li>访问更新前的地址，继续使用</li></ol><h3 id="更换web服务程序-可选" tabindex="-1"><a class="header-anchor" href="#更换web服务程序-可选"><span>更换Web服务程序（可选）</span></a></h3><p>从V0.0.4开始新安装的Web面板使用Python HTTP Server作为Web服务程序，您可以通过以下方式将宝塔+Nginx更换为Python HTTP Server</p><ol><li><p>删除宝塔面板中的站点</p></li><li><p>在左侧边栏--&gt;安全--&gt;添加端口规则添加以下规则或者关闭防火墙</p></li></ol><div class="language-宝塔面板 line-numbers-mode" data-highlighter="prismjs" data-ext="宝塔面板"><pre><code><span class="line">协议：TCP</span>
<span class="line">端口：8000</span>
<span class="line">其它默认</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>执行以下命令启动Python HTTP Server</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/systemd/system/xiaolan-cdn-web-http.service <span class="token operator">&lt;&lt;</span> <span class="token string">EOF</span>
<span class="line">[Unit]</span>
<span class="line">Description=Python HTTP Server</span>
<span class="line">After=network.target</span>
<span class="line"></span>
<span class="line">[Service]</span>
<span class="line">Type=simple</span>
<span class="line">User=root</span>
<span class="line">WorkingDirectory=/opt/xiaolan-cdn/xiaolan-cdn-web</span>
<span class="line">ExecStart=/usr/bin/python3 -m http.server 8000</span>
<span class="line">Restart=always</span>
<span class="line"></span>
<span class="line">[Install]</span>
<span class="line">WantedBy=multi-user.target</span>
<span class="line">EOF</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>访问面板</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">http://服务器的IP:8000</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>手动安装如果安装路径不是 /opt/xiaolan-cdn/xiaolan-cdn-web 的话请自行修改 WorkingDirectory 字段</li></ul><h2 id="必改配置-非常重要" tabindex="-1"><a class="header-anchor" href="#必改配置-非常重要"><span>必改配置（非常重要）</span></a></h2><p>编辑：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">vim</span> /opt/xiaolan-cdn/xiaolan-cdn-web/.env</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>修改以下内容：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token constant">JWT_SECRET</span><span class="token operator">=</span>新的<span class="token constant">JWT</span>密钥   <span class="token comment">// 建议使用复杂随机字符串</span></span>
<span class="line"><span class="token constant">ADMIN_PASSWORD</span><span class="token operator">=</span>新的密码</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>最好把用户名也改了</li></ul><p>编辑：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">vim</span> /opt/xiaolan-cdn/xiaolan-cdn-web/config.js</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>修改以下内容：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token constant">API_BASE</span><span class="token operator">:</span> <span class="token string">&#39;http://服务器的IP:3000/api&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="支持的环境" tabindex="-1"><a class="header-anchor" href="#支持的环境"><span>支持的环境</span></a></h2><ul><li>一键安装脚本仅支持 <strong>Deb 系</strong></li><li>理论支持所有可运行 Node.js 的 Linux 系统</li></ul><h3 id="环境要求" tabindex="-1"><a class="header-anchor" href="#环境要求"><span>环境要求</span></a></h3><ul><li>Nginx 或其它 Web 服务程序</li><li>Node.js（推荐 24 LTS）</li></ul><h2 id="半自动安装" tabindex="-1"><a class="header-anchor" href="#半自动安装"><span>半自动安装</span></a></h2><blockquote><p>需先安装 Xiaolan-CDN 主控</p></blockquote><ol><li>执行安装脚本</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">wget</span> https://raw.githubusercontent.com/Xiaolan2333/Xiaolan-CDN-Web/refs/heads/main/install-web.sh <span class="token operator">&amp;&amp;</span> <span class="token function">chmod</span> <span class="token number">777</span> install-web.sh <span class="token operator">&amp;&amp;</span> ./install-web.sh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>默认安装路径：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">/opt/xiaolan-cdn/xiaolan-cdn-web</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>修改程序参数</li></ol><p>编辑：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">vim</span> /opt/xiaolan-cdn/xiaolan-cdn-web/.env</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>修改以下内容：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token constant">JWT_SECRET</span><span class="token operator">=</span>新的<span class="token constant">JWT</span>密钥   <span class="token comment">// 建议使用复杂随机字符串</span></span>
<span class="line"><span class="token constant">ADMIN_PASSWORD</span><span class="token operator">=</span>新的密码</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>最好把用户名也改了</li></ul><p>编辑：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">vim</span> /opt/xiaolan-cdn/xiaolan-cdn-web/config.js</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>修改以下内容：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token constant">API_BASE</span><span class="token operator">:</span> <span class="token string">&#39;http://服务器的IP:3000/api&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>修改后执行：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">systemctl restart xiaolan-cdn-web.service</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>重启后端进程</p><ol start="3"><li>访问面板</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">http://服务器的IP:8000</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="手动安装" tabindex="-1"><a class="header-anchor" href="#手动安装"><span>手动安装</span></a></h2><ol><li>创建目录</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">mkdir</span> 文件夹路径 <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> 文件夹路径</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>下载文件</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">wget</span> https://github.com/Xiaolan2333/Xiaolan-CDN-Web/releases/latest/download/Xiaolan-CDN-Web.zip</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>解压</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">unzip</span> Xiaolan-CDN-Web.zip</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="4"><li>设置后端 Systemd 配置文件</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token assign-left variable">NODE_PATH</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">which</span> <span class="token function">node</span><span class="token variable">)</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/systemd/system/xiaolan-cdn-web.service <span class="token operator">&lt;&lt;</span> <span class="token string">EOF</span>
<span class="line">[Unit]</span>
<span class="line">Description=Xiaolan-CDN-Web</span>
<span class="line">After=network.target</span>
<span class="line"></span>
<span class="line">[Service]</span>
<span class="line">User=root</span>
<span class="line">Group=root</span>
<span class="line">WorkingDirectory=/opt/xiaolan-cdn/xiaolan-cdn-web</span>
<span class="line">ExecStart=<span class="token variable">$NODE_PATH</span> server.js</span>
<span class="line"></span>
<span class="line">[Install]</span>
<span class="line">WantedBy=multi-user.target</span>
<span class="line">EOF</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>修改程序参数</li></ol><p>编辑：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">vim</span> /opt/xiaolan-cdn/xiaolan-cdn-web/.env</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>修改以下内容：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token constant">JWT_SECRET</span><span class="token operator">=</span>新的<span class="token constant">JWT</span>密钥   <span class="token comment">// 建议使用复杂随机字符串</span></span>
<span class="line"><span class="token constant">ADMIN_PASSWORD</span><span class="token operator">=</span>新的密码</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>最好把用户名也改了</li></ul><p>编辑：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">vim</span> /opt/xiaolan-cdn/xiaolan-cdn-web/config.js</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>修改以下内容：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token constant">API_BASE</span><span class="token operator">:</span> <span class="token string">&#39;http://服务器的IP:3000/api&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="6"><li>设置 HTTP 服务</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/systemd/system/xiaolan-cdn-web-http.service <span class="token operator">&lt;&lt;</span> <span class="token string">EOF</span>
<span class="line">[Unit]</span>
<span class="line">Description=Python HTTP Server</span>
<span class="line">After=network.target</span>
<span class="line"></span>
<span class="line">[Service]</span>
<span class="line">Type=simple</span>
<span class="line">User=root</span>
<span class="line">WorkingDirectory=/opt/xiaolan-cdn/xiaolan-cdn-web</span>
<span class="line">ExecStart=/usr/bin/python3 -m http.server 8000</span>
<span class="line">Restart=always</span>
<span class="line"></span>
<span class="line">[Install]</span>
<span class="line">WantedBy=multi-user.target</span>
<span class="line">EOF</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>启动</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">systemctl daemon-reload</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">systemctl <span class="token builtin class-name">enable</span> xiaolan-cdn-web.service <span class="token parameter variable">--now</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">systemctl <span class="token builtin class-name">enable</span> xiaolan-cdn-web-http.service <span class="token parameter variable">--now</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="8"><li>访问面板</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">http://服务器的IP:8000</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="示例lua脚本" tabindex="-1"><a class="header-anchor" href="#示例lua脚本"><span>示例Lua脚本</span></a></h2><h3 id="_5秒盾" tabindex="-1"><a class="header-anchor" href="#_5秒盾"><span>5秒盾</span></a></h3><h4 id="说明" tabindex="-1"><a class="header-anchor" href="#说明"><span>说明：</span></a></h4><p>必须修改</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre><code><span class="line"><span class="token keyword">local</span> secret <span class="token operator">=</span> <span class="token string">&quot;Welcome-to-Xiaolan-CDN&quot;</span> <span class="token comment">-- 必须修改这个密钥，建议使用复杂随机字符串</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>下面是正文：</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre><code><span class="line"><span class="token comment">-- 配置项</span></span>
<span class="line"><span class="token keyword">local</span> secret <span class="token operator">=</span> <span class="token string">&quot;Welcome-to-Xiaolan-CDN&quot;</span> <span class="token comment">-- 必须修改这个密钥，建议使用复杂随机字符串</span></span>
<span class="line"><span class="token keyword">local</span> wait_time <span class="token operator">=</span> <span class="token number">5</span> <span class="token comment">-- 强制等待时间（秒）</span></span>
<span class="line"><span class="token keyword">local</span> valid_time <span class="token operator">=</span> <span class="token number">3600</span> <span class="token comment">-- Token 有效期（秒）</span></span>
<span class="line"><span class="token comment">-- 配置项结束</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">local</span> cookie_name <span class="token operator">=</span> <span class="token string">&quot;Xiaolan-CDN-Token&quot;</span></span>
<span class="line"><span class="token keyword">local</span> client_ip <span class="token operator">=</span> ngx<span class="token punctuation">.</span>var<span class="token punctuation">.</span>remote_addr</span>
<span class="line"><span class="token keyword">local</span> user_agent <span class="token operator">=</span> ngx<span class="token punctuation">.</span>var<span class="token punctuation">.</span>http_user_agent <span class="token keyword">or</span> <span class="token string">&quot;&quot;</span></span>
<span class="line"><span class="token keyword">local</span> token <span class="token operator">=</span> ngx<span class="token punctuation">.</span>var<span class="token punctuation">[</span><span class="token string">&quot;cookie_&quot;</span> <span class="token operator">..</span> cookie_name<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 签名函数</span></span>
<span class="line"><span class="token keyword">local</span> <span class="token keyword">function</span> <span class="token function">make_sign</span><span class="token punctuation">(</span>ip<span class="token punctuation">,</span> ua<span class="token punctuation">,</span> ts<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> ngx<span class="token punctuation">.</span><span class="token function">md5</span><span class="token punctuation">(</span>ip <span class="token operator">..</span> ua <span class="token operator">..</span> ts <span class="token operator">..</span> secret<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 检查 Cookie</span></span>
<span class="line"><span class="token keyword">if</span> token <span class="token keyword">then</span></span>
<span class="line">    <span class="token keyword">local</span> ts<span class="token punctuation">,</span> sign <span class="token operator">=</span> token<span class="token punctuation">:</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token string">&quot;^(%d+)%-(%w+)$&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">if</span> ts <span class="token keyword">and</span> sign <span class="token keyword">then</span></span>
<span class="line">        <span class="token keyword">local</span> now <span class="token operator">=</span> ngx<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        ts <span class="token operator">=</span> <span class="token function">tonumber</span><span class="token punctuation">(</span>ts<span class="token punctuation">)</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">-- 检查时间戳</span></span>
<span class="line">        <span class="token keyword">if</span> now <span class="token operator">&gt;=</span> ts <span class="token operator">+</span> wait_time <span class="token keyword">and</span> now <span class="token operator">&lt;=</span> ts <span class="token operator">+</span> valid_time <span class="token keyword">then</span></span>
<span class="line">            <span class="token keyword">local</span> expected_sign <span class="token operator">=</span> <span class="token function">make_sign</span><span class="token punctuation">(</span>client_ip<span class="token punctuation">,</span> user_agent<span class="token punctuation">,</span> ts<span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">if</span> sign <span class="token operator">==</span> expected_sign <span class="token keyword">then</span></span>
<span class="line">                <span class="token keyword">return</span></span>
<span class="line">            <span class="token keyword">end</span></span>
<span class="line">        <span class="token keyword">end</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 验证失败或首次访问</span></span>
<span class="line"><span class="token keyword">local</span> cur_ts <span class="token operator">=</span> ngx<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">local</span> cur_sign <span class="token operator">=</span> <span class="token function">make_sign</span><span class="token punctuation">(</span>client_ip<span class="token punctuation">,</span> user_agent<span class="token punctuation">,</span> cur_ts<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">local</span> new_token <span class="token operator">=</span> cur_ts <span class="token operator">..</span> <span class="token string">&quot;-&quot;</span> <span class="token operator">..</span> cur_sign</span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 渲染 HTML 页面</span></span>
<span class="line">ngx<span class="token punctuation">.</span>header<span class="token punctuation">.</span>content_type <span class="token operator">=</span> <span class="token string">&quot;text/html; charset=utf-8&quot;</span></span>
<span class="line"><span class="token keyword">local</span> html <span class="token operator">=</span> <span class="token string">[=[</span>
<span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html lang=&quot;en-US&quot; dir=&quot;ltr&quot;&gt;</span>
<span class="line">&lt;head&gt;</span>
<span class="line">	&lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=UTF-8&quot;&gt;</span>
<span class="line">	&lt;title&gt;请稍候…&lt;/title&gt;</span>
<span class="line">	&lt;style&gt;</span>
<span class="line">@keyframes dots {</span>
<span class="line">	0% {</span>
<span class="line">		content: &quot;&quot;</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	25% {</span>
<span class="line">		content: &quot;.&quot;</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	50% {</span>
<span class="line">		content: &quot;..&quot;</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	75% {</span>
<span class="line">		content: &quot;...&quot;</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	to {</span>
<span class="line">		content: &quot;&quot;</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">* {</span>
<span class="line">	box-sizing: border-box;</span>
<span class="line">	margin: 0;</span>
<span class="line">	padding: 0</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">button,html {</span>
<span class="line">	font-family: system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">body {</span>
<span class="line">	display: flex;</span>
<span class="line">	flex-direction: column;</span>
<span class="line">	height: 100vh;</span>
<span class="line">	min-height: 100vh</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">body.theme-dark a:active,body.theme-dark a:focus {</span>
<span class="line">	border-radius: 2px;</span>
<span class="line">	outline: 2px solid #4693ff;</span>
<span class="line">	outline-offset: 2px</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">body.theme-light .botnet-banner a:active,body.theme-light .botnet-banner a:focus {</span>
<span class="line">	border-radius: 2px;</span>
<span class="line">	outline: 2px solid #4693ff;</span>
<span class="line">	outline-offset: 2px</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">.main-content {</span>
<span class="line">	margin: 8rem auto;</span>
<span class="line">	max-width: 60rem;</span>
<span class="line">	padding-left: 2rem;</span>
<span class="line">	padding-right: 2rem;</span>
<span class="line">	width: 100%</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">.main-content .loading-verifying {</span>
<span class="line">	height: 76.391px</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">.main-wrapper {</span>
<span class="line">	align-items: center;</span>
<span class="line">	display: flex;</span>
<span class="line">	flex: 1;</span>
<span class="line">	flex-direction: column</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">h1 {</span>
<span class="line">	font-size: 2.5rem</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">h1,h2 {</span>
<span class="line">	font-weight: 600;</span>
<span class="line">	line-height: 125%</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">h2 {</span>
<span class="line">	font-size: 1.5rem</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">.ch-ordered-list {</span>
<span class="line">	padding-left: 1.5rem;</span>
<span class="line">	padding-right: 0</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">.ch-description {</span>
<span class="line">	font-weight: 400;</span>
<span class="line">	margin-bottom: 2rem;</span>
<span class="line">	margin-top: 0</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">.ch-title {</span>
<span class="line">	margin: 8px 0</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">.footer {</span>
<span class="line">	line-height: 1.125rem;</span>
<span class="line">	margin: 0 auto;</span>
<span class="line">	max-width: 60rem;</span>
<span class="line">	padding-left: 2rem;</span>
<span class="line">	padding-right: 2rem;</span>
<span class="line">	width: 100%</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">.footer,.footer a {</span>
<span class="line">	font-size: .75rem</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">.footer-inner {</span>
<span class="line">	border-top: 1px solid #d9d9d9;</span>
<span class="line">	display: flex;</span>
<span class="line">	justify-content: center;</span>
<span class="line">	padding-bottom: 1rem;</span>
<span class="line">	padding-top: 1rem</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">.footer-wrapper {</span>
<span class="line">	text-align: center</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">.footer-divider {</span>
<span class="line">	border: 1px solid #d9d9d9;</span>
<span class="line">	height: 12px</span>
<span class="line">}</span>
<span class="line">	&lt;/style&gt;</span>
<span class="line">&lt;/head&gt;</span>
<span class="line">&lt;body&gt;</span>
<span class="line">	&lt;div class=&quot;main-wrapper lang-zh-cn&quot; role=&quot;main&quot;&gt;</span>
<span class="line">		&lt;div class=&quot;main-content&quot;&gt;</span>
<span class="line">			&lt;h1 class=&quot;ch-title spacer-bottom&quot;&gt;执行安全验证&lt;/h1&gt;</span>
<span class="line">			&lt;h2 class=&quot;ch-description spacer-top&quot;&gt;正在验证您是否是真人，这可能需要几秒钟时间。&lt;/h2&gt;</span>
<span class="line">      &lt;h1&gt;请等待&lt;span class=&quot;ui-counter&quot;&gt;5&lt;/span&gt;秒&lt;/h1&gt;</span>
<span class="line">		&lt;/div&gt;</span>
<span class="line">	&lt;/div&gt;</span>
<span class="line">	&lt;div class=&quot;footer&quot; role=&quot;contentinfo&quot;&gt;</span>
<span class="line">		&lt;div class=&quot;footer-inner&quot;&gt;</span>
<span class="line">			&lt;div class=&quot;footer-wrapper&quot;&gt;</span>
<span class="line">				&lt;div class=&quot;clearfix diagnostic-wrapper&quot;&gt;</span>
<span class="line">				&lt;/div&gt;</span>
<span class="line">				&lt;div class=&quot;footer-link-wrapper&quot;&gt;&lt;span class=&quot;footer-text&quot;&gt;性能和安全由 &lt;a rel=&quot;noopener noreferrer&quot; href=&quot;https://www.xiaolan.xin&quot; target=&quot;_blank&quot;&gt;Xiaolan&lt;/a&gt; 提供&lt;/span&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">			&lt;/div&gt;</span>
<span class="line">		&lt;/div&gt;</span>
<span class="line">	&lt;/div&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line">]=]</span></span>
<span class="line"></span>
<span class="line">ngx<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">-- 中断请求，不再向下游传递</span></span>
<span class="line">ngx<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span>ngx<span class="token punctuation">.</span>HTTP_OK<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="许可证" tabindex="-1"><a class="header-anchor" href="#许可证"><span>许可证</span></a></h2><p>本项目基于 <strong>MIT License</strong> 开源</p>`,117)])])}const d=n(i,[["render",p]]),r=JSON.parse('{"path":"/Xiaolan-CDN-Web.html","title":"Xiaolan-CDN-Web","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"存储库","slug":"存储库","link":"#存储库","children":[]},{"level":2,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]},{"level":2,"title":"从V0.0.2更新","slug":"从v0-0-2更新","link":"#从v0-0-2更新","children":[]},{"level":2,"title":"从V0.0.3更新","slug":"从v0-0-3更新","link":"#从v0-0-3更新","children":[{"level":3,"title":"更换Web服务程序（可选）","slug":"更换web服务程序-可选","link":"#更换web服务程序-可选","children":[]}]},{"level":2,"title":"必改配置（非常重要）","slug":"必改配置-非常重要","link":"#必改配置-非常重要","children":[]},{"level":2,"title":"支持的环境","slug":"支持的环境","link":"#支持的环境","children":[{"level":3,"title":"环境要求","slug":"环境要求","link":"#环境要求","children":[]}]},{"level":2,"title":"半自动安装","slug":"半自动安装","link":"#半自动安装","children":[]},{"level":2,"title":"手动安装","slug":"手动安装","link":"#手动安装","children":[]},{"level":2,"title":"示例Lua脚本","slug":"示例lua脚本","link":"#示例lua脚本","children":[{"level":3,"title":"5秒盾","slug":"_5秒盾","link":"#_5秒盾","children":[]}]},{"level":2,"title":"许可证","slug":"许可证","link":"#许可证","children":[]}],"git":{},"filePathRelative":"Xiaolan-CDN-Web.md"}');export{d as comp,r as data};
