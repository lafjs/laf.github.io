import{_ as a,c as l,a as s,b as p,t as o,d as e,o as r}from"./app.310169e0.js";const m=JSON.parse('{"title":"\u5730\u7406\u4FE1\u606FAPI","description":"","frontmatter":{"title":"\u5730\u7406\u4FE1\u606FAPI"},"headers":[{"level":2,"title":"GEO \u6570\u636E\u7C7B\u578B","slug":"geo-\u6570\u636E\u7C7B\u578B"},{"level":3,"title":"Point","slug":"point"},{"level":3,"title":"LineString","slug":"linestring"},{"level":3,"title":"Polygon","slug":"polygon"},{"level":3,"title":"MultiPoint","slug":"multipoint"},{"level":3,"title":"MultiLineString","slug":"multilinestring"},{"level":3,"title":"MultiPolygon","slug":"multipolygon"},{"level":2,"title":"GEO \u64CD\u4F5C\u7B26","slug":"geo-\u64CD\u4F5C\u7B26"},{"level":3,"title":"geoNear","slug":"geonear"},{"level":3,"title":"geoWithin","slug":"geowithin"},{"level":3,"title":"geoIntersects","slug":"geointersects"}],"relativePath":"guide/db/geo.md"}'),c={name:"guide/db/geo.md"},t={id:"frontmatter-title",tabindex:"-1"},D=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),y=e(`<p>\u6CE8\u610F\uFF1A<strong>\u5982\u679C\u9700\u8981\u5BF9\u7C7B\u578B\u4E3A\u5730\u7406\u4F4D\u7F6E\u7684\u5B57\u6BB5\u8FDB\u884C\u641C\u7D22\uFF0C\u4E00\u5B9A\u8981\u5EFA\u7ACB\u5730\u7406\u4F4D\u7F6E\u7D22\u5F15</strong>\u3002</p><h2 id="geo-\u6570\u636E\u7C7B\u578B" tabindex="-1">GEO \u6570\u636E\u7C7B\u578B <a class="header-anchor" href="#geo-\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a></h2><h3 id="point" tabindex="-1">Point <a class="header-anchor" href="#point" aria-hidden="true">#</a></h3><p>\u7528\u4E8E\u8868\u793A\u5730\u7406\u4F4D\u7F6E\u70B9\uFF0C\u7528\u7ECF\u7EAC\u5EA6\u552F\u4E00\u6807\u8BB0\u4E00\u4E2A\u70B9\uFF0C\u8FD9\u662F\u4E00\u4E2A\u7279\u6B8A\u7684\u6570\u636E\u5B58\u50A8\u7C7B\u578B\u3002</p><p>\u7B7E\u540D\uFF1A<code>Point(longitude: number, latitude: number)</code></p><p>\u793A\u4F8B\uFF1A</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> db</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Geo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Point</span><span style="color:#A6ACCD;">(longitude</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> latitude)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="linestring" tabindex="-1">LineString <a class="header-anchor" href="#linestring" aria-hidden="true">#</a></h3><p>\u7528\u4E8E\u8868\u793A\u5730\u7406\u8DEF\u5F84\uFF0C\u662F\u7531\u4E24\u4E2A\u6216\u8005\u66F4\u591A\u7684 <code>Point</code> \u7EC4\u6210\u7684\u7EBF\u6BB5\u3002</p><p>\u7B7E\u540D\uFF1A<code>LineString(points: Point[])</code></p><p>\u793A\u4F8B\uFF1A</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> db</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Geo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">LineString</span><span style="color:#A6ACCD;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> db</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Geo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Point</span><span style="color:#A6ACCD;">(lngA</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> latA)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> db</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Geo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Point</span><span style="color:#A6ACCD;">(lngB</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> latB)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="polygon" tabindex="-1">Polygon <a class="header-anchor" href="#polygon" aria-hidden="true">#</a></h3><p>\u7528\u4E8E\u8868\u793A\u5730\u7406\u4E0A\u7684\u4E00\u4E2A\u591A\u8FB9\u5F62\uFF08\u6709\u6D1E\u6216\u65E0\u6D1E\u5747\u53EF\uFF09\uFF0C\u5B83\u662F\u7531\u4E00\u4E2A\u6216\u591A\u4E2A<strong>\u95ED\u73AF</strong> <code>LineString</code> \u7EC4\u6210\u7684\u51E0\u4F55\u56FE\u5F62\u3002</p><p>\u7531\u4E00\u4E2A\u73AF\u7EC4\u6210\u7684 <code>Polygon</code> \u662F\u6CA1\u6709\u6D1E\u7684\u591A\u8FB9\u5F62\uFF0C\u7531\u591A\u4E2A\u73AF\u7EC4\u6210\u7684\u662F\u6709\u6D1E\u7684\u591A\u8FB9\u5F62\u3002\u5BF9\u7531\u591A\u4E2A\u73AF\uFF08<code>LineString</code>\uFF09\u7EC4\u6210\u7684\u591A\u8FB9\u5F62\uFF08<code>Polygon</code>\uFF09\uFF0C\u7B2C\u4E00\u4E2A\u73AF\u662F\u5916\u73AF\uFF0C\u6240\u6709\u5176\u4ED6\u73AF\u662F\u5185\u73AF\uFF08\u6D1E\uFF09\u3002</p><p>\u7B7E\u540D\uFF1A<code>Polygon(lines: LineString[])</code></p><p>\u793A\u4F8B\uFF1A</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> db</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Geo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Polygon</span><span style="color:#A6ACCD;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> db</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Geo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">LineString</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> db</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Geo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">LineString</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="multipoint" tabindex="-1">MultiPoint <a class="header-anchor" href="#multipoint" aria-hidden="true">#</a></h3><p>\u7528\u4E8E\u8868\u793A\u591A\u4E2A\u70B9 <code>Point</code> \u7684\u96C6\u5408\u3002</p><p>\u7B7E\u540D\uFF1A<code>MultiPoint(points: Point[])</code></p><p>\u793A\u4F8B\uFF1A</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> db</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Geo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">MultiPoint</span><span style="color:#A6ACCD;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> db</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Geo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Point</span><span style="color:#A6ACCD;">(lngA</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> latA)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> db</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Geo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Point</span><span style="color:#A6ACCD;">(lngB</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> latB)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="multilinestring" tabindex="-1">MultiLineString <a class="header-anchor" href="#multilinestring" aria-hidden="true">#</a></h3><p>\u7528\u4E8E\u8868\u793A\u591A\u4E2A\u5730\u7406\u8DEF\u5F84 <code>LineString</code> \u7684\u96C6\u5408\u3002</p><p>\u7B7E\u540D\uFF1A<code>MultiLineString(lines: LineString[])</code></p><p>\u793A\u4F8B\uFF1A</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> db</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Geo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">MultiLineString</span><span style="color:#A6ACCD;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> db</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Geo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">LineString</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> db</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Geo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">LineString</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="multipolygon" tabindex="-1">MultiPolygon <a class="header-anchor" href="#multipolygon" aria-hidden="true">#</a></h3><p>\u7528\u4E8E\u8868\u793A\u591A\u4E2A\u5730\u7406\u591A\u8FB9\u5F62 <code>Polygon</code> \u7684\u96C6\u5408\u3002</p><p>\u7B7E\u540D\uFF1A<code>MultiPolygon(polygons: Polygon[])</code></p><p>\u793A\u4F8B\uFF1A</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> db</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Geo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">MultiPolygon</span><span style="color:#A6ACCD;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> db</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Geo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Polygon</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> db</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Geo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Polygon</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="geo-\u64CD\u4F5C\u7B26" tabindex="-1">GEO \u64CD\u4F5C\u7B26 <a class="header-anchor" href="#geo-\u64CD\u4F5C\u7B26" aria-hidden="true">#</a></h2><h3 id="geonear" tabindex="-1">geoNear <a class="header-anchor" href="#geonear" aria-hidden="true">#</a></h3><p>\u6309\u4ECE\u8FD1\u5230\u8FDC\u7684\u987A\u5E8F\uFF0C\u627E\u51FA\u5B57\u6BB5\u503C\u5728\u7ED9\u5B9A\u70B9\u7684\u9644\u8FD1\u7684\u8BB0\u5F55\u3002</p><p>\u7B7E\u540D\uFF1A</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">command</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">geoNear</span><span style="color:#A6ACCD;">(options: IOptions)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IOptions</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">geometry</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Point</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u70B9\u7684\u5730\u7406\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">maxDistance</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u9009\u586B\uFF0C\u6700\u5927\u8DDD\u79BB\uFF0C\u7C73\u4E3A\u5355\u4F4D</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">minDistance</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u9009\u586B\uFF0C\u6700\u5C0F\u8DDD\u79BB\uFF0C\u7C73\u4E3A\u5355\u4F4D</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u793A\u4F8B\uFF1A</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">collection</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">where</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">location</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> db</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">command</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">geoNear</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">geometry</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> db</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Geo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Point</span><span style="color:#A6ACCD;">(lngA</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> latA)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">maxDistance</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">minDistance</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="geowithin" tabindex="-1">geoWithin <a class="header-anchor" href="#geowithin" aria-hidden="true">#</a></h3><p>\u627E\u51FA\u5B57\u6BB5\u503C\u5728\u6307\u5B9A Polygon / MultiPolygon \u5185\u7684\u8BB0\u5F55\uFF0C\u65E0\u6392\u5E8F</p><p>\u7B7E\u540D\uFF1A</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">command</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">geoWithin</span><span style="color:#A6ACCD;">(IOptions)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IOptions</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">geometry</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Polygon</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MultiPolygon</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u5730\u7406\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u793A\u4F8B\uFF1A</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u4E00\u4E2A\u95ED\u5408\u7684\u533A\u57DF</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> area </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Polygon</span><span style="color:#A6ACCD;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">LineString</span><span style="color:#A6ACCD;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Point</span><span style="color:#A6ACCD;">(lngA</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> latA)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Point</span><span style="color:#A6ACCD;">(lngB</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> latB)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Point</span><span style="color:#A6ACCD;">(lngC</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> latC)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Point</span><span style="color:#A6ACCD;">(lngA</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> latA)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  ])</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u641C\u7D22 location \u5B57\u6BB5\u5728\u8FD9\u4E2A\u533A\u57DF\u4E2D\u7684 user</span></span>
<span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">collection</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">where</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">location</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> db</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">command</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">geoWithin</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">geometry</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> area</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="geointersects" tabindex="-1">geoIntersects <a class="header-anchor" href="#geointersects" aria-hidden="true">#</a></h3><p>\u627E\u51FA\u5B57\u6BB5\u503C\u548C\u7ED9\u5B9A\u7684\u5730\u7406\u4F4D\u7F6E\u56FE\u5F62\u76F8\u4EA4\u7684\u8BB0\u5F55</p><p>\u7B7E\u540D\uFF1A</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">command</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">geoIntersects</span><span style="color:#A6ACCD;">(IOptions)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IOptions</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">geometry</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Point</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">LineString</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">MultiPoint</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">MultiLineString</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">Polygon</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">MultiPolygon</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u5730\u7406\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u793A\u4F8B\uFF1A</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u4E00\u6761\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> line </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">LineString</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Point</span><span style="color:#A6ACCD;">(lngA</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> latA)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Point</span><span style="color:#A6ACCD;">(lngB</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> latB)])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u641C\u7D22 location \u4E0E\u8FD9\u6761\u8DEF\u5F84\u76F8\u4EA4\u7684 user</span></span>
<span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">collection</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">where</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">location</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> db</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">command</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">geoIntersects</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">geometry</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> line</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,52);function i(n,A,F,C,b,d){return r(),l("div",null,[s("h1",t,[p(o(n.$frontmatter.title)+" ",1),D]),y])}var g=a(c,[["render",i]]);export{m as __pageData,g as default};
