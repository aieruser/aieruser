import{_ as t,p,q as o,s as n,G as s,t as e,J as c,n as l}from"./framework-d4dfb5a8.js";const u={},i={class:"custom-container tip"},r=n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])],-1),k=n("p",{class:"custom-container-title"},"说明",-1),d=n("code",null,"combobox",-1),v={href:"http://www.jeasyui.net/demo/488.html",target:"_blank",rel:"noopener noreferrer"},m=c(`<h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码：</h2><p><strong>html方式初始化:</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col-xs-2 control-label<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>关联网站：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col-xs-4 control-cont<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>  <span class="token comment">&lt;!-- input添加class easyui-combobox来初始化combobox --&gt;</span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> 
   <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form-control easyui-combobox required<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> 
   <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userSites<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userSites<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>请选择关联组织<span class="token punctuation">&quot;</span></span> 
   <span class="token attr-name">data-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>valueField: &#39;id&#39;,textField: &#39;text&#39;,url: &#39;json/combo.js&#39;,multiple:true<span class="token punctuation">&quot;</span></span>
   <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>js方式初始化:</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#cc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">combobox</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">&#39;combobox_data.json&#39;</span><span class="token punctuation">,</span><span class="token comment">//请求地址</span>
    <span class="token literal-property property">valueField</span><span class="token operator">:</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span><span class="token comment">//value值</span>
    <span class="token literal-property property">textField</span><span class="token operator">:</span><span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span><span class="token comment">//text值</span>
    <span class="token punctuation">,</span><span class="token literal-property property">multiple</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token comment">//是否多选</span>
    <span class="token function-variable function">onSelect</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">rec</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//select事件</span>
        <span class="token keyword">var</span> url <span class="token operator">=</span> <span class="token string">&#39;get_data2.php?id=&#39;</span><span class="token operator">+</span>rec<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#cc2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">combobox</span><span class="token punctuation">(</span><span class="token string">&#39;reload&#39;</span><span class="token punctuation">,</span> url<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>&quot;
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>数据参考：</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;text&quot;</span><span class="token operator">:</span><span class="token string">&quot;text1&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;text&quot;</span><span class="token operator">:</span><span class="token string">&quot;text2&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token property">&quot;text&quot;</span><span class="token operator">:</span><span class="token string">&quot;text3&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;selected&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token comment">//是否选中</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token property">&quot;text&quot;</span><span class="token operator">:</span><span class="token string">&quot;text4&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token property">&quot;text&quot;</span><span class="token operator">:</span><span class="token string">&quot;text5&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function b(q,g){const a=l("ExternalLinkIcon");return p(),o("div",null,[n("div",i,[r,k,n("p",null,[d,s("是easyUI的一个很实用的控件，功能完整，快速平台中没有做进一步封装，这里只做常用示例。 更多实例请 "),n("a",v,[s("参考这里"),e(a)])])]),m])}const h=t(u,[["render",b],["__file","combobox.html.vue"]]);export{h as default};
