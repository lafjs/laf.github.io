import{_ as n,c as e,a as s,b as l,t as p,d as i,o as r}from"./app.310169e0.js";const g=JSON.parse('{"title":"laf-cli \u547D\u4EE4\u884C\u5DE5\u5177","description":"","frontmatter":{"title":"laf-cli \u547D\u4EE4\u884C\u5DE5\u5177"},"headers":[{"level":2,"title":"\u7B80\u4ECB","slug":"\u7B80\u4ECB"},{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u767B\u5F55","slug":"\u767B\u5F55"},{"level":2,"title":"\u67E5\u770B\u5E94\u7528\u5217\u8868","slug":"\u67E5\u770B\u5E94\u7528\u5217\u8868"},{"level":2,"title":"\u542F\u505C\u5E94\u7528","slug":"\u542F\u505C\u5E94\u7528"},{"level":2,"title":"\u5728\u672C\u5730\u521D\u59CB\u5316\u5E94\u7528","slug":"\u5728\u672C\u5730\u521D\u59CB\u5316\u5E94\u7528"},{"level":2,"title":"\u62C9\u53D6\u4E91\u51FD\u6570","slug":"\u62C9\u53D6\u4E91\u51FD\u6570"},{"level":2,"title":"\u63A8\u9001\u4E91\u51FD\u6570","slug":"\u63A8\u9001\u4E91\u51FD\u6570"},{"level":2,"title":"\u8C03\u8BD5\u4E91\u51FD\u6570","slug":"\u8C03\u8BD5\u4E91\u51FD\u6570"},{"level":2,"title":"\u53D1\u5E03\u4E91\u51FD\u6570","slug":"\u53D1\u5E03\u4E91\u51FD\u6570"},{"level":2,"title":"\u4E0A\u4F20\u4E91\u5B58\u50A8\u6587\u4EF6","slug":"\u4E0A\u4F20\u4E91\u5B58\u50A8\u6587\u4EF6"},{"level":2,"title":"\u4E0B\u8F7D\u4E91\u5B58\u50A8\u6587\u4EF6","slug":"\u4E0B\u8F7D\u4E91\u5B58\u50A8\u6587\u4EF6"},{"level":2,"title":"\u5176\u5B83\u8BF4\u660E","slug":"\u5176\u5B83\u8BF4\u660E"}],"relativePath":"guide/cli/index.md"}'),c={name:"guide/cli/index.md"},d={id:"frontmatter-title",tabindex:"-1"},o=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),t=i(`<h2 id="\u7B80\u4ECB" tabindex="-1">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a></h2><p><code>laf-cli</code> \u63D0\u4F9B\u672C\u5730\u5F00\u53D1\u73AF\u5883\u76F8\u5173\u80FD\u529B\u7684\u652F\u6301\uFF1A</p><ul><li>\u4E91\u51FD\u6570\uFF1A\u652F\u6301\u5728\u672C\u5730\u8FD0\u884C\u3001\u62C9\u53D6\u3001\u90E8\u7F72\u4E91\u51FD\u6570</li><li>\u4E91\u5B58\u50A8\uFF1A\u652F\u6301\u4ECE\u672C\u5730\u4E0A\u4F20\u3001\u4E0B\u8F7D\u4E91\u5B58\u50A8\u6587\u4EF6</li><li>\u5E94\u7528\uFF1A\u521D\u59CB\u5316\u3001\u67E5\u770B\u3001\u542F\u52A8\u3001\u505C\u6B62\u5E94\u7528\u670D\u52A1</li></ul><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-bash line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u8981\u6C42  node \u7248\u672C &gt;= 16</span></span>
<span class="line"><span style="color:#A6ACCD;">npm i laf-cli -g</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u767B\u5F55" tabindex="-1">\u767B\u5F55 <a class="header-anchor" href="#\u767B\u5F55" aria-hidden="true">#</a></h2><div class="language-bash line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">laf login -u username -p password</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u9ED8\u8BA4\u767B\u5F55 <code>lafyun.com</code>\uFF0C\u5982\u679C\u8981\u767B\u5F55\u79C1\u6709\u90E8\u7F72\u7684 laf \u53EF\u901A\u8FC7 <code>-r</code> \u53C2\u6570\u6307\u5B9A\uFF1A</p><p><code>laf login -u username -p password -r https://console.lafyun.com</code></p><h2 id="\u67E5\u770B\u5E94\u7528\u5217\u8868" tabindex="-1">\u67E5\u770B\u5E94\u7528\u5217\u8868 <a class="header-anchor" href="#\u67E5\u770B\u5E94\u7528\u5217\u8868" aria-hidden="true">#</a></h2><div class="language-bash line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">laf list</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u542F\u505C\u5E94\u7528" tabindex="-1">\u542F\u505C\u5E94\u7528 <a class="header-anchor" href="#\u542F\u505C\u5E94\u7528" aria-hidden="true">#</a></h2><div class="language-bash line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u542F\u52A8\u5E94\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">laf start APPID</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u505C\u6B62\u5E94\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">laf stop APPID</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u91CD\u542F\u5E94\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">laf restart APPID</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u5728\u672C\u5730\u521D\u59CB\u5316\u5E94\u7528" tabindex="-1">\u5728\u672C\u5730\u521D\u59CB\u5316\u5E94\u7528 <a class="header-anchor" href="#\u5728\u672C\u5730\u521D\u59CB\u5316\u5E94\u7528" aria-hidden="true">#</a></h2><p>\u5728\u4F60\u7684\u672C\u5730\u9879\u76EE\u76EE\u5F55\u4E0B\u6267\u884C\uFF1A</p><div class="language-bash line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">laf init -s APPID</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u6267\u884C\u540E\u4F1A\u5728\u5F53\u524D\u76EE\u5F55\u751F\u6210\u4E00\u4E2A\u6587\u4EF6\u5939 <code>@laf</code>\uFF0C\u8BE5\u6587\u4EF6\u5939\u4E0B\u5305\u542B\u4E86 laf \u5E94\u7528\u7684\u4E91\u51FD\u6570\u4EE3\u7801\u7B49\u6587\u4EF6\u3002</p><p><code>-s</code> \u53C2\u6570\u6307\u5B9A\u521D\u59CB\u5316\u65F6\u4ECE\u8FDC\u7A0B\u62C9\u53D6\u4E91\u51FD\u6570\u4EE3\u7801\uFF0C\u5982\u679C\u4E0D\u6307\u5B9A\uFF0C\u5219\u53EA\u4F1A\u540C\u6B65\u5E94\u7528\u7684\u57FA\u672C\u4FE1\u606F\u3002</p><p><code>APPID</code> \u5E94\u662F\u4F60\u5DF2\u7ECF\u521B\u5EFA\u5E94\u7528\u7684 ID\uFF0C\u53EF\u901A\u8FC7 <code>laf list</code> \u67E5\u770B\u3002</p><h2 id="\u62C9\u53D6\u4E91\u51FD\u6570" tabindex="-1">\u62C9\u53D6\u4E91\u51FD\u6570 <a class="header-anchor" href="#\u62C9\u53D6\u4E91\u51FD\u6570" aria-hidden="true">#</a></h2><p>\u4ECE\u8FDC\u7A0B\u62C9\u53D6\u4E91\u51FD\u6570\u5230\u672C\u5730\uFF1A</p><div class="language-bash line-numbers-mode"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u62C9\u53D6\u6240\u6709\u4E91\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">laf fn pull </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u62C9\u53D6\u4E00\u4E2A\u4E91\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">laf fn pull FUNCTION_NAME</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u63A8\u9001\u4E91\u51FD\u6570" tabindex="-1">\u63A8\u9001\u4E91\u51FD\u6570 <a class="header-anchor" href="#\u63A8\u9001\u4E91\u51FD\u6570" aria-hidden="true">#</a></h2><p>\u63A8\u9001\u672C\u5730\u4E91\u51FD\u6570\u5230\u8FDC\u7A0B\uFF1A</p><div class="language-bash line-numbers-mode"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u63A8\u9001\u6240\u6709\u4E91\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">laf fn push</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u63A8\u9001\u4E00\u4E2A\u4E91\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">laf fn push FUNCTION_NAME</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u8C03\u8BD5\u4E91\u51FD\u6570" tabindex="-1">\u8C03\u8BD5\u4E91\u51FD\u6570 <a class="header-anchor" href="#\u8C03\u8BD5\u4E91\u51FD\u6570" aria-hidden="true">#</a></h2><p>\u7528\u4E8E\u8C03\u8BD5\u300C\u672A\u4FDD\u5B58\u300D\u300C\u672A\u53D1\u5E03\u300D\u7684\u4E91\u51FD\u6570\uFF1A</p><div class="language-bash line-numbers-mode"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"><span style="color:#89DDFF;">\`\`\`</span><span style="color:#C3E88D;">bash</span></span>
<span class="line"><span style="color:#C3E88D;">laf fn invoke FUNCTION_NAME --param </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{&quot;name&quot;: &quot;laf&quot;}</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u53D1\u5E03\u4E91\u51FD\u6570" tabindex="-1">\u53D1\u5E03\u4E91\u51FD\u6570 <a class="header-anchor" href="#\u53D1\u5E03\u4E91\u51FD\u6570" aria-hidden="true">#</a></h2><p>\u53D1\u5E03\u4E91\u51FD\u6570\uFF1A</p><div class="language-bash line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">laf fn publish FUNCTION_NAME</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u4E0A\u4F20\u4E91\u5B58\u50A8\u6587\u4EF6" tabindex="-1">\u4E0A\u4F20\u4E91\u5B58\u50A8\u6587\u4EF6 <a class="header-anchor" href="#\u4E0A\u4F20\u4E91\u5B58\u50A8\u6587\u4EF6" aria-hidden="true">#</a></h2><p>\u5C06\u672C\u5730\u76EE\u5F55 <code>./dist/</code> \u5185\u7684\u6587\u4EF6\u4E0A\u4F20\u5230 <code>www</code> Bucket \u4E2D\uFF1A</p><div class="language-bash line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">laf oss push ./dist/ www</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u4E0B\u8F7D\u4E91\u5B58\u50A8\u6587\u4EF6" tabindex="-1">\u4E0B\u8F7D\u4E91\u5B58\u50A8\u6587\u4EF6 <a class="header-anchor" href="#\u4E0B\u8F7D\u4E91\u5B58\u50A8\u6587\u4EF6" aria-hidden="true">#</a></h2><p>\u4E0B\u8F7D\u4E91\u5B58\u50A8 bucket \u5185\u7684\u6587\u4EF6\u5230\u672C\u5730\uFF1A</p><div class="language-bash line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">laf oss pull www ./dist/</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u5176\u5B83\u8BF4\u660E" tabindex="-1">\u5176\u5B83\u8BF4\u660E <a class="header-anchor" href="#\u5176\u5B83\u8BF4\u660E" aria-hidden="true">#</a></h2><ol><li>laf cli \u8FD8\u4E0D\u652F\u6301\u67E5\u770B\u5E94\u7528/\u4E91\u51FD\u6570\u65E5\u5FD7\uFF0C\u6B63\u5728\u5F00\u53D1\u4E2D\uFF1B</li><li>laf cli \u7248\u672C\u4E0D\u7A33\u5B9A\uFF0C\u4EE5\u4E0A\u6587\u6863\u53EF\u80FD\u66F4\u65B0\u5E76\u4E0D\u53CA\u65F6\uFF0C\u53EF\u901A\u8FC7 <code>laf -h</code> <code>laf fn pull -h</code> \u6765\u67E5\u770B\u5177\u4F53\u8BF4\u660E\uFF1B</li><li>laf cli \u4ECE laf 0.8.5 \u5F00\u59CB\u652F\u6301\uFF0C<code>system-server</code> \u670D\u52A1\u7248\u672C\u4F4E\u4E8E 0.8.5 \u4E0D\u652F\u6301 laf cli\uFF1B</li></ol>`,39);function u(a,b,h,m,f,v){return r(),e("div",null,[s("h1",d,[l(p(a.$frontmatter.title)+" ",1),o]),t])}var A=n(c,[["render",u]]);export{g as __pageData,A as default};
