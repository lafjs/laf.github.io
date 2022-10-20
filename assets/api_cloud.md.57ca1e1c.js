import{_ as a,c as l,a as s,b as p,t as e,d as o,o as t}from"./app.310169e0.js";const d=JSON.parse('{"title":"\u4E91\u51FD\u6570Cloud SDK API\u6587\u6863","description":"","frontmatter":{"title":"\u4E91\u51FD\u6570Cloud SDK API\u6587\u6863"},"headers":[{"level":2,"title":"CloudSdkInterface","slug":"cloudsdkinterface"}],"relativePath":"api/cloud.md"}'),c={name:"api/cloud.md"},r={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),y=o(`<h2 id="cloudsdkinterface" tabindex="-1">CloudSdkInterface <a class="header-anchor" href="#cloudsdkinterface" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CloudSdkInterface</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * \u53D1\u9001 HTTP \u8BF7\u6C42\uFF0C\u5B9E\u4E3A Axios \u5B9E\u4F8B\uFF0C\u4F7F\u7528\u53EF\u76F4\u63A5\u53C2\u8003 axios \u6587\u6863</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">fetch</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AxiosStatic</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * \u83B7\u53D6 database ORM \u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">database</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Db</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * \u8C03\u7528\u4E91\u51FD\u6570</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">invoke</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">InvokeFunctionType</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * \u629B\u51FA\u4E91\u51FD\u6570\u4E8B\u4EF6\uFF0C\u5176\u5B83\u4E91\u51FD\u6570\u53EF\u8BBE\u7F6E\u89E6\u53D1\u5668\u76D1\u542C\u6B64\u7C7B\u4E8B\u4EF6</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">emit</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EmitFunctionType</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * \u4E91\u51FD\u6570\u5168\u5C40\u5185\u5B58\u5355\u4F8B\u5BF9\u8C61\uFF0C\u53EF\u8DE8\u591A\u6B21\u8C03\u7528\u3001\u4E0D\u540C\u4E91\u51FD\u6570\u4E4B\u95F4\u5171\u4EAB\u6570\u636E</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 1. \u53EF\u5C06\u4E00\u4E9B\u5168\u5C40\u914D\u7F6E\u521D\u59CB\u5316\u5230 shared \u4E2D\uFF0C\u5982\u5FAE\u4FE1\u5F00\u53D1\u4FE1\u606F\u3001\u77ED\u4FE1\u53D1\u9001\u914D\u7F6E</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 2. \u53EF\u5171\u4EAB\u4E00\u4E9B\u5E38\u7528\u65B9\u6CD5\uFF0C\u5982 checkPermission \u7B49\uFF0C\u4EE5\u63D0\u5347\u4E91\u51FD\u6570\u6027\u80FD</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 3. \u53EF\u505A\u70ED\u6570\u636E\u7684\u7F13\u5B58\uFF0C\u5EFA\u8BAE\u5C11\u91CF\u4F7F\u7528\uFF08\u6B64\u5BF9\u8C61\u662F\u5728 node vm \u5806\u4E2D\u5206\u914D\uFF0C\u56E0\u4E3A node vm \u5806\u5185\u5B58\u9650\u5236\uFF09</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">shared</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Map</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * \u83B7\u53D6 JWT Token\uFF0C\u82E5\u7F3A\u7701 \`secret\`\uFF0C\u5219\u4F7F\u7528\u5F53\u524D\u670D\u52A1\u5668\u7684\u5BC6\u94A5\u505A\u7B7E\u540D</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">getToken</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GetTokenFunctionType</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * \u89E3\u6790 JWT Token\uFF0C\u82E5\u7F3A\u7701 \`secret\`\uFF0C\u5219\u4F7F\u7528\u5F53\u524D\u670D\u52A1\u5668\u7684\u5BC6\u94A5\u505A\u7B7E\u540D</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">parseToken</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ParseTokenFunctionType</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * \u5F53\u524D\u5E94\u7528\u7684 MongoDb Node.js Driver \u5B9E\u4F8B\u5BF9\u8C61\u3002</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * \u7531\u4E8E Laf database ORM \u5BF9\u8C61\u53EA\u6709\u90E8\u5206\u6570\u636E\u64CD\u4F5C\u80FD\u529B\uFF0C\u6545\u66B4\u9732\u6B64\u5BF9\u8C61\u7ED9\u4E91\u51FD\u6570\uFF0C\u8BA9\u4E91\u51FD\u6570\u62E5\u6709\u5B8C\u6574\u7684\u6570\u636E\u5E93\u64CD\u4F5C\u80FD\u529B\uFF1A</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 1. \u4E8B\u52A1\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * \`\`\`js</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   *   const session = mongo.client.startSession()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   *   try {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   *     await session.withTransaction(async () =&gt; {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   *       await mongo.db.collection(&#39;xxx&#39;).updateOne({}, { session })</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   *       await mongo.db.collection(&#39;yyy&#39;).deleteMany({}, { session })</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   *       // ...</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   *     })</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   *   } finally {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   *     await session.endSession()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   *   }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * \`\`\`</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 2. \u7D22\u5F15\u7BA1\u7406</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * \`\`\`js</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   *    mongo.db.collection(&#39;admins&#39;).createIndex(&#39;username&#39;, { unique: true })</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * \`\`\`</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 3. \u805A\u5408\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mongo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MongoDriverObject</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div>`,2);function b(n,u,m,D,F,C){return t(),l("div",null,[s("h1",r,[p(e(n.$frontmatter.title)+" ",1),i]),y])}var A=a(c,[["render",b]]);export{d as __pageData,A as default};
