import{_ as a,c as l,a as s,b as p,t as o,d as e,o as c}from"./app.310169e0.js";const m=JSON.parse('{"title":"\u4E91\u6570\u636E\u5E93\u64CD\u4F5C","description":"","frontmatter":{"title":"\u4E91\u6570\u636E\u5E93\u64CD\u4F5C"},"headers":[{"level":2,"title":"\u65B0\u589E\u6587\u6863","slug":"\u65B0\u589E\u6587\u6863"},{"level":3,"title":"\u65B9\u6CD5 1\uFF1A collection.add(data)","slug":"\u65B9\u6CD5-1\uFF1A-collection-add-data"},{"level":3,"title":"\u65B9\u6CD5 2\uFF1A collection.doc().set(data)","slug":"\u65B9\u6CD5-2\uFF1A-collection-doc-set-data"},{"level":2,"title":"\u5220\u9664\u6587\u6863","slug":"\u5220\u9664\u6587\u6863"},{"level":3,"title":"\u65B9\u5F0F 1 \u901A\u8FC7\u6307\u5B9A\u6587\u6863 ID","slug":"\u65B9\u5F0F-1-\u901A\u8FC7\u6307\u5B9A\u6587\u6863-id"},{"level":3,"title":"\u65B9\u5F0F 2 \u6761\u4EF6\u67E5\u627E\u6587\u6863\u7136\u540E\u76F4\u63A5\u6279\u91CF\u5220\u9664","slug":"\u65B9\u5F0F-2-\u6761\u4EF6\u67E5\u627E\u6587\u6863\u7136\u540E\u76F4\u63A5\u6279\u91CF\u5220\u9664"},{"level":2,"title":"\u66F4\u65B0\u6587\u6863","slug":"\u66F4\u65B0\u6587\u6863"},{"level":3,"title":"\u66F4\u65B0\u6307\u5B9A\u6587\u6863","slug":"\u66F4\u65B0\u6307\u5B9A\u6587\u6863"},{"level":3,"title":"\u66F4\u65B0\u6587\u6863\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\u5219\u521B\u5EFA","slug":"\u66F4\u65B0\u6587\u6863\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\u5219\u521B\u5EFA"},{"level":3,"title":"\u6279\u91CF\u66F4\u65B0\u6587\u6863","slug":"\u6279\u91CF\u66F4\u65B0\u6587\u6863"},{"level":2,"title":"\u66F4\u65B0\u6307\u4EE4","slug":"\u66F4\u65B0\u6307\u4EE4"},{"level":3,"title":"set","slug":"set"},{"level":3,"title":"inc","slug":"inc"},{"level":3,"title":"mul","slug":"mul"},{"level":3,"title":"remove","slug":"remove"},{"level":3,"title":"push","slug":"push"},{"level":3,"title":"pop","slug":"pop"},{"level":3,"title":"unshift","slug":"unshift"},{"level":3,"title":"shift","slug":"shift"}],"relativePath":"guide/db/actions.md"}'),r={name:"guide/db/actions.md"},t={id:"frontmatter-title",tabindex:"-1"},D=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),y=e(`<h2 id="\u65B0\u589E\u6587\u6863" tabindex="-1">\u65B0\u589E\u6587\u6863 <a class="header-anchor" href="#\u65B0\u589E\u6587\u6863" aria-hidden="true">#</a></h2><h3 id="\u65B9\u6CD5-1\uFF1A-collection-add-data" tabindex="-1">\u65B9\u6CD5 1\uFF1A <code>collection.add(data)</code> <a class="header-anchor" href="#\u65B9\u6CD5-1\uFF1A-collection-add-data" aria-hidden="true">#</a></h3><p>\u793A\u4F8B\uFF1A</p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>data</td><td>object</td><td>\u662F</td><td>{_id: &#39;10001&#39;, &#39;name&#39;: &#39;Ben&#39;} _id \u975E\u5FC5\u586B</td></tr></tbody></table><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">//promise</span></span>
<span class="line"><span style="color:#A6ACCD;">collection</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Ben</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u65B9\u6CD5-2\uFF1A-collection-doc-set-data" tabindex="-1">\u65B9\u6CD5 2\uFF1A <code>collection.doc().set(data)</code> <a class="header-anchor" href="#\u65B9\u6CD5-2\uFF1A-collection-doc-set-data" aria-hidden="true">#</a></h3><p>\u4E5F\u53EF\u901A\u8FC7 <code>set</code> \u65B9\u6CD5\u65B0\u589E\u4E00\u4E2A\u6587\u6863\uFF0C\u9700\u5148\u53D6\u5F97\u6587\u6863\u5F15\u7528\u518D\u8C03\u7528 <code>set</code> \u65B9\u6CD5\u3002 \u5982\u679C\u6587\u6863\u4E0D\u5B58\u5728\uFF0C<code>set</code> \u65B9\u6CD5\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u6587\u6863\u3002</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">//promise</span></span>
<span class="line"><span style="color:#A6ACCD;">collection</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">doc</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hey</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u5220\u9664\u6587\u6863" tabindex="-1">\u5220\u9664\u6587\u6863 <a class="header-anchor" href="#\u5220\u9664\u6587\u6863" aria-hidden="true">#</a></h2><h3 id="\u65B9\u5F0F-1-\u901A\u8FC7\u6307\u5B9A\u6587\u6863-id" tabindex="-1">\u65B9\u5F0F 1 \u901A\u8FC7\u6307\u5B9A\u6587\u6863 ID <a class="header-anchor" href="#\u65B9\u5F0F-1-\u901A\u8FC7\u6307\u5B9A\u6587\u6863-id" aria-hidden="true">#</a></h3><p><code>collection.doc(\\_id).remove()</code></p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u6E05\u7406\u5168\u90E8\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">collection</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">promiseList</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">collection</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">doc</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">all</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">promiseList</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">catch</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="\u65B9\u5F0F-2-\u6761\u4EF6\u67E5\u627E\u6587\u6863\u7136\u540E\u76F4\u63A5\u6279\u91CF\u5220\u9664" tabindex="-1">\u65B9\u5F0F 2 \u6761\u4EF6\u67E5\u627E\u6587\u6863\u7136\u540E\u76F4\u63A5\u6279\u91CF\u5220\u9664 <a class="header-anchor" href="#\u65B9\u5F0F-2-\u6761\u4EF6\u67E5\u627E\u6587\u6863\u7136\u540E\u76F4\u63A5\u6279\u91CF\u5220\u9664" aria-hidden="true">#</a></h3><p><code>collection.where().remove()</code></p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u5220\u9664\u5B57\u6BB5a\u7684\u503C\u5927\u4E8E2\u7684\u6587\u6863</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//promise</span></span>
<span class="line"><span style="color:#A6ACCD;">collection</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">where</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> _</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">gt</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u66F4\u65B0\u6587\u6863" tabindex="-1">\u66F4\u65B0\u6587\u6863 <a class="header-anchor" href="#\u66F4\u65B0\u6587\u6863" aria-hidden="true">#</a></h2><h3 id="\u66F4\u65B0\u6307\u5B9A\u6587\u6863" tabindex="-1">\u66F4\u65B0\u6307\u5B9A\u6587\u6863 <a class="header-anchor" href="#\u66F4\u65B0\u6307\u5B9A\u6587\u6863" aria-hidden="true">#</a></h3><p><code>collection.doc().update()</code></p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">collection</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">doc</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">doc-id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">update</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hey</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u66F4\u65B0\u6587\u6863\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\u5219\u521B\u5EFA" tabindex="-1">\u66F4\u65B0\u6587\u6863\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\u5219\u521B\u5EFA <a class="header-anchor" href="#\u66F4\u65B0\u6587\u6863\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\u5219\u521B\u5EFA" aria-hidden="true">#</a></h3><p><code>collection.doc().set()</code></p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">//promise</span></span>
<span class="line"><span style="color:#A6ACCD;">collection</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">doc</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">doc-id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hey</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="\u6279\u91CF\u66F4\u65B0\u6587\u6863" tabindex="-1">\u6279\u91CF\u66F4\u65B0\u6587\u6863 <a class="header-anchor" href="#\u6279\u91CF\u66F4\u65B0\u6587\u6863" aria-hidden="true">#</a></h3><p><code>collection.update()</code></p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">//promise</span></span>
<span class="line"><span style="color:#A6ACCD;">collection</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">where</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> _</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">eq</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hey</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">update</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u66F4\u65B0\u6307\u4EE4" tabindex="-1">\u66F4\u65B0\u6307\u4EE4 <a class="header-anchor" href="#\u66F4\u65B0\u6307\u4EE4" aria-hidden="true">#</a></h2><h3 id="set" tabindex="-1">set <a class="header-anchor" href="#set" aria-hidden="true">#</a></h3><p>\u66F4\u65B0\u6307\u4EE4\u3002\u7528\u4E8E\u8BBE\u5B9A\u5B57\u6BB5\u7B49\u4E8E\u6307\u5B9A\u503C\u3002\u8FD9\u79CD\u65B9\u6CD5\u76F8\u6BD4\u4F20\u5165\u7EAF JS \u5BF9\u8C61\u7684\u597D\u5904\u662F\u80FD\u591F\u6307\u5B9A\u5B57\u6BB5\u7B49\u4E8E\u4E00\u4E2A\u5BF9\u8C61\uFF1A</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u4EE5\u4E0B\u65B9\u6CD5\u53EA\u4F1A\u66F4\u65B0 property.location \u548C property.size\uFF0C\u5982\u679C property \u5BF9\u8C61\u4E2D\u6709</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//promise</span></span>
<span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">collection</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">photo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">doc</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">doc-id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">update</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">property</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">location</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">guangzhou</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="inc" tabindex="-1">inc <a class="header-anchor" href="#inc" aria-hidden="true">#</a></h3><p>\u66F4\u65B0\u6307\u4EE4\u3002\u7528\u4E8E\u6307\u793A\u5B57\u6BB5\u81EA\u589E\u67D0\u4E2A\u503C\uFF0C\u8FD9\u662F\u4E2A\u539F\u5B50\u64CD\u4F5C\uFF0C\u4F7F\u7528\u8FD9\u4E2A\u64CD\u4F5C\u6307\u4EE4\u800C\u4E0D\u662F\u5148\u8BFB\u6570\u636E\u3001\u518D\u52A0\u3001\u518D\u5199\u56DE\u7684\u597D\u5904\u662F\uFF1A</p><ol><li>\u539F\u5B50\u6027\uFF1A\u591A\u4E2A\u7528\u6237\u540C\u65F6\u5199\uFF0C\u5BF9\u6570\u636E\u5E93\u6765\u8BF4\u90FD\u662F\u5C06\u5B57\u6BB5\u52A0\u4E00\uFF0C\u4E0D\u4F1A\u6709\u540E\u6765\u8005\u8986\u5199\u524D\u8005\u7684\u60C5\u51B5</li><li>\u51CF\u5C11\u4E00\u6B21\u7F51\u7EDC\u8BF7\u6C42\uFF1A\u4E0D\u9700\u5148\u8BFB\u518D\u5199</li></ol><p>\u4E4B\u540E\u7684 mul \u6307\u4EE4\u540C\u7406\u3002</p><p>\u5982\u7ED9\u6536\u85CF\u7684\u5546\u54C1\u6570\u91CF\u52A0\u4E00\uFF1A</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> _ </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> db</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">command</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//promise</span></span>
<span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">collection</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">where</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">_openid</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">my-open-id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">update</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">favorites</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> _</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">inc</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="mul" tabindex="-1">mul <a class="header-anchor" href="#mul" aria-hidden="true">#</a></h3><p>\u66F4\u65B0\u6307\u4EE4\u3002\u7528\u4E8E\u6307\u793A\u5B57\u6BB5\u81EA\u4E58\u67D0\u4E2A\u503C\u3002</p><h3 id="remove" tabindex="-1">remove <a class="header-anchor" href="#remove" aria-hidden="true">#</a></h3><p>\u66F4\u65B0\u6307\u4EE4\u3002\u7528\u4E8E\u8868\u793A\u5220\u9664\u67D0\u4E2A\u5B57\u6BB5\u3002\u5982\u67D0\u4EBA\u5220\u9664\u4E86\u81EA\u5DF1\u4E00\u6761\u5546\u54C1\u8BC4\u4EF7\u4E2D\u7684\u8BC4\u5206\uFF1A</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">//promise</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> _ </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> db</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">command</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">collection</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">comments</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">doc</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">comment-id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">update</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">rating</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> _</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="push" tabindex="-1">push <a class="header-anchor" href="#push" aria-hidden="true">#</a></h3><p>\u5411\u6570\u7EC4\u5C3E\u90E8\u8FFD\u52A0\u5143\u7D20\uFF0C\u652F\u6301\u4F20\u5165\u5355\u4E2A\u5143\u7D20\u6216\u6570\u7EC4</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> _ </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> db</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">command</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//promise</span></span>
<span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">collection</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">comments</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">doc</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">comment-id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">update</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// users: _.push(&#39;aaa&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">users</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> _</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">aaa</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bbb</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="pop" tabindex="-1">pop <a class="header-anchor" href="#pop" aria-hidden="true">#</a></h3><p>\u5220\u9664\u6570\u7EC4\u5C3E\u90E8\u5143\u7D20</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> _ </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> db</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">command</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//promise</span></span>
<span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">collection</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">comments</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">doc</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">comment-id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">update</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">users</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> _</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pop</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="unshift" tabindex="-1">unshift <a class="header-anchor" href="#unshift" aria-hidden="true">#</a></h3><p>\u5411\u6570\u7EC4\u5934\u90E8\u6DFB\u52A0\u5143\u7D20\uFF0C\u652F\u6301\u4F20\u5165\u5355\u4E2A\u5143\u7D20\u6216\u6570\u7EC4\u3002\u4F7F\u7528\u540C push</p><h3 id="shift" tabindex="-1">shift <a class="header-anchor" href="#shift" aria-hidden="true">#</a></h3><p>\u5220\u9664\u6570\u7EC4\u5934\u90E8\u5143\u7D20\u3002\u4F7F\u7528\u540C pop</p>`,50);function F(n,A,i,C,d,u){return c(),l("div",null,[s("h1",t,[p(o(n.$frontmatter.title)+" ",1),D]),y])}var h=a(r,[["render",F]]);export{m as __pageData,h as default};