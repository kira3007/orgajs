webpackJsonp([0x846f7709830f],{404:function(n,s){n.exports={data:{orga:{html:'<div>This documentation explains how to use orga to parse org-mode content into AST. Find the complete definition of AST <a href="/ast">here</a>.</div><div class="section"><h1>Install</h1><pre><code class="language-sh">npm install orga</code></pre></div><div class="section"><h1>Examples</h1><div class="section"><h2>Getting Started</h2><div>Create a file <code>test.js</code>.</div><pre><code class="language-javascript">  <span class="token keyword">const</span> <span class="token punctuation">{</span> parse <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`orga`</span></span><span class="token punctuation">)</span>\n  <span class="token keyword">const</span> content <span class="token operator">=</span> <span class="token string">"* TODO Hello World"</span>\n  <span class="token keyword">const</span> ast <span class="token operator">=</span> <span class="token function">parse</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span></code></pre><div>The <code>ast</code> would look like this:</div><pre><code class="language-javascript"><span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'root\'</span><span class="token punctuation">,</span>\n  children<span class="token punctuation">:</span>\n   <span class="token punctuation">[</span> <span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'section\'</span><span class="token punctuation">,</span>\n       children<span class="token punctuation">:</span>\n        <span class="token punctuation">[</span> <span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'heading\'</span><span class="token punctuation">,</span>\n            children<span class="token punctuation">:</span>\n             <span class="token punctuation">[</span> <span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'text\'</span><span class="token punctuation">,</span>\n                 children<span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token punctuation">[</span>length<span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>\n                 value<span class="token punctuation">:</span> <span class="token string">\'Hello World\'</span><span class="token punctuation">,</span>\n                 parent<span class="token punctuation">:</span> <span class="token punctuation">[</span>Circular<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n               <span class="token punctuation">[</span>length<span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>\n            level<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n            keyword<span class="token punctuation">:</span> <span class="token string">\'TODO\'</span><span class="token punctuation">,</span>\n            priority<span class="token punctuation">:</span> undefined<span class="token punctuation">,</span>\n            tags<span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token punctuation">[</span>length<span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>\n            parent<span class="token punctuation">:</span> <span class="token punctuation">[</span>Circular<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">[</span>length<span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>\n       level<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n       parent<span class="token punctuation">:</span> <span class="token punctuation">[</span>Circular<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n     <span class="token punctuation">[</span>length<span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  settings<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span></code></pre></div><div class="section"><h2>Add Options</h2><div>You can customize the parser by sending in options.</div><pre><code class="language-javascript">  <span class="token keyword">const</span> <span class="token punctuation">{</span> parse <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`orga`</span></span><span class="token punctuation">)</span>\n  <span class="token keyword">const</span> content <span class="token operator">=</span> <span class="token string">"* NEXT Hello World"</span>\n  <span class="token keyword">const</span> ast <span class="token operator">=</span> <span class="token function">parse</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token punctuation">{</span> todos<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'TODO\'</span><span class="token punctuation">,</span> <span class="token string">\'NEXT\'</span><span class="token punctuation">,</span> <span class="token string">\'DONE\'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre></div><div class="section"><h2>User the <code>Parser</code></h2><pre><code class="language-javascript">  <span class="token keyword">const</span> <span class="token punctuation">{</span> Parser <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`orga`</span></span><span class="token punctuation">)</span>\n  <span class="token keyword">const</span> content <span class="token operator">=</span> <span class="token string">"* NEXT Hello World"</span>\n  <span class="token keyword">const</span> parser <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Parser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// the Parser accept options too</span>\n  <span class="token keyword">const</span> ast <span class="token operator">=</span> parser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span></code></pre></div></div><div class="section"><h1>Options</h1><table><tr><td>key</td><td>type</td><td>function</td><td>Default</td></tr><div></div><tr><td>todos</td><td>Array of Strings</td><td>TODO keywords</td><td>[\'TODO\', \'DONE\']</td></tr></table></div>',meta:{title:"Basic Usage",desc:"The basic usage of package orga. Explains how to parse org-mode string into AST."}}},pathContext:{slug:"/basics/"}}}});
//# sourceMappingURL=path---basics-9f4c107d8078fc784031.js.map