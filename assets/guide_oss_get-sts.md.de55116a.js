import{_ as a,c as l,a as s,b as p,t as o,d as e,o as t}from"./app.310169e0.js";const m=JSON.parse('{"title":"\u751F\u6210\u4E91\u5B58\u50A8\u4E34\u65F6\u4EE4\u724C(STS)","description":"","frontmatter":{"title":"\u751F\u6210\u4E91\u5B58\u50A8\u4E34\u65F6\u4EE4\u724C(STS)"},"headers":[{"level":3,"title":"\u524D\u7AEF\u4F7F\u7528 STS \u4EE4\u724C\u8BBF\u95EE\u4E91\u5B58\u50A8","slug":"\u524D\u7AEF\u4F7F\u7528-sts-\u4EE4\u724C\u8BBF\u95EE\u4E91\u5B58\u50A8"}],"relativePath":"guide/oss/get-sts.md"}'),c={name:"guide/oss/get-sts.md"},r={id:"frontmatter-title",tabindex:"-1"},F=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),D=e(`<p>\u5728\u300C\u5F00\u53D1\u63A7\u5236\u53F0\u300D-&gt; \u300C\u4E91\u51FD\u6570\u300D -&gt; \u300C\u4F9D\u8D56\u7BA1\u7406\u300D\uFF0C\u6DFB\u52A0 <code>@aws-sdk/client-sts</code> \u4F9D\u8D56\uFF08\u9700\u91CD\u542F\u5E94\u7528\u751F\u6548\uFF09\u3002</p><p>\u521B\u5EFA\u4E91\u51FD\u6570 <code>get-oss-sts</code>\uFF0C\u6DFB\u52A0\u5982\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-ts line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> cloud </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@/cloud-sdk</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">STSClient</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">AssumeRoleCommand</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@aws-sdk/client-sts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">exports.</span><span style="color:#82AAFF;">main</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">FunctionContext</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sts</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">STSClient</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    region</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cloud</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">OSS_REGION</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    endpoint</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cloud</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">OSS_INTERNAL_ENDPOINT</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    credentials</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      accessKeyId</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cloud</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">OSS_ACCESS_KEY</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      secretAccessKey</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cloud</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">OSS_ACCESS_SECRET</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cmd</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">AssumeRoleCommand</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    DurationSeconds</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3600</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    Policy</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{&quot;Version&quot;:&quot;2012-10-17&quot;,&quot;Statement&quot;:[{&quot;Sid&quot;:&quot;Stmt1&quot;,&quot;Effect&quot;:&quot;Allow&quot;,&quot;Action&quot;:&quot;s3:*&quot;,&quot;Resource&quot;:&quot;arn:aws:s3:::*&quot;}]}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    RoleArn</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">arn:xxx:xxx:xxx:xxxx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    RoleSessionName</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cloud</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">appid</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sts</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">cmd</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    credentials</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Credentials</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    endpoint</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cloud</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">OSS_EXTERNAL_ENDPOINT</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    region</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cloud</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">OSS_REGION</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><blockquote><p>\u4FDD\u5B58 &amp; \u53D1\u5E03\u4E91\u51FD\u6570\uFF0C\u5373\u53EF\u8BBF\u95EE\u3002</p></blockquote><h3 id="\u524D\u7AEF\u4F7F\u7528-sts-\u4EE4\u724C\u8BBF\u95EE\u4E91\u5B58\u50A8" tabindex="-1">\u524D\u7AEF\u4F7F\u7528 STS \u4EE4\u724C\u8BBF\u95EE\u4E91\u5B58\u50A8 <a class="header-anchor" href="#\u524D\u7AEF\u4F7F\u7528-sts-\u4EE4\u724C\u8BBF\u95EE\u4E91\u5B58\u50A8" aria-hidden="true">#</a></h3><p>@see <a href="./use-sts-in-client.html">\u524D\u7AEF\u4F7F\u7528 STS \u4EE4\u724C\u8BBF\u95EE\u4E91\u5B58\u50A8</a></p>`,6);function y(n,i,A,C,u,b){return t(),l("div",null,[s("h1",r,[p(o(n.$frontmatter.title)+" ",1),F]),D])}var S=a(c,[["render",y]]);export{m as __pageData,S as default};