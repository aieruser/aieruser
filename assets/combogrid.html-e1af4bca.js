import{_ as t,p,q as e,s as n,G as s,t as o,J as l,n as c}from"./framework-d4dfb5a8.js";const i={},r={class:"custom-container tip"},u=n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])],-1),k=n("p",{class:"custom-container-title"},"说明",-1),d=n("p",null,[n("code",null,"combogrid"),s("是"),n("code",null,"easyUI"),s("的一个很实用的控件，功能完整，快速平台中没有做进一步封装，这里只做常用示例。")],-1),m={href:"http://www.jeasyui.net/demo/494.html",target:"_blank",rel:"noopener noreferrer"},v=l(`<h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码：</h2><p><strong>html方式初始化:</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form-control easyui-combogrid<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span>250px</span><span class="token punctuation">&quot;</span></span></span> <span class="token attr-name">data-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>
  panelWidth: 380,
  idField: &#39;userName&#39;,
  textField: &#39;realName&#39;,
  url: &#39;json/popgrid.js&#39;,
  method: &#39;get&#39;,
  columns: [[
    {field:&#39;userName&#39;,title:&#39;用户名&#39;,width:80},
    {field:&#39;realName&#39;,title:&#39;姓名&#39;,width:120},
    {field:&#39;mobile&#39;,title:&#39;手机&#39;,width:180}
  ]],
  fitColumns: true
<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>js方式初始化:</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#cc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">combogrid</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">delay</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span><span class="token comment">//用户输入请求间隙时间</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;remote&#39;</span><span class="token punctuation">,</span><span class="token comment">//根据输入向远端请求</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;get_data.php&#39;</span><span class="token punctuation">,</span><span class="token comment">//请求url</span>
    <span class="token literal-property property">idField</span><span class="token operator">:</span> <span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span><span class="token comment">//输入框返回value</span>
    <span class="token literal-property property">textField</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span><span class="token comment">//输入框返回字符</span>
    <span class="token literal-property property">columns</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token comment">//grid设置</span>
        <span class="token punctuation">{</span><span class="token literal-property property">field</span><span class="token operator">:</span><span class="token string">&#39;userName&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&#39;用户名&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">width</span><span class="token operator">:</span><span class="token number">80</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token literal-property property">field</span><span class="token operator">:</span><span class="token string">&#39;realName&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&#39;姓名&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">width</span><span class="token operator">:</span><span class="token number">120</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token literal-property property">field</span><span class="token operator">:</span><span class="token string">&#39;mobile&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&#39;手机&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">width</span><span class="token operator">:</span><span class="token number">180</span><span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>js方式赋值：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#cc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">combogrid</span><span class="token punctuation">(</span><span class="token string">&#39;setValue&#39;</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//setValue</span>

<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#cc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">combogrid</span><span class="token punctuation">(</span><span class="token string">&#39;setValues&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">21</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">73</span><span class="token punctuation">,</span><span class="token literal-property property">text</span><span class="token operator">:</span><span class="token string">&#39;text73&#39;</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//setValues</span>

<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#cc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">combogrid</span><span class="token punctuation">(</span><span class="token string">&#39;clear&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//清除赋值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>数据参考：</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    total<span class="token operator">:</span><span class="token number">54</span><span class="token punctuation">,</span>
    rows<span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span>
        userName<span class="token operator">:</span><span class="token string">&quot;lihua&quot;</span><span class="token punctuation">,</span>
        realName<span class="token operator">:</span><span class="token string">&quot;李华&quot;</span><span class="token punctuation">,</span>
        sex<span class="token operator">:</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        mobile<span class="token operator">:</span><span class="token string">&quot;13315113521&quot;</span><span class="token punctuation">,</span>
        qq<span class="token operator">:</span><span class="token string">&quot;2357028767&quot;</span>
        <span class="token punctuation">}</span> <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        userName<span class="token operator">:</span><span class="token string">&quot;raohui&quot;</span><span class="token punctuation">,</span>
        realName<span class="token operator">:</span><span class="token string">&quot;饶慧&quot;</span><span class="token punctuation">,</span>
        sex<span class="token operator">:</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
        mobile<span class="token operator">:</span><span class="token string">&quot;13975896807&quot;</span><span class="token punctuation">,</span>
        qq<span class="token operator">:</span><span class="token null keyword">null</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function b(g,h){const a=c("ExternalLinkIcon");return p(),e("div",null,[n("div",r,[u,k,d,n("p",null,[s("更多实例请 "),n("a",m,[s("参考这里"),o(a)])])]),v])}const q=t(i,[["render",b],["__file","combogrid.html.vue"]]);export{q as default};
