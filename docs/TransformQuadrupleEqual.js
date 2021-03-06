/* generated by Svelte v3.24.0 */
import {
	SvelteComponent,
	append,
	attr,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	set_style,
	space,
	text
} from "/the-js-we-do-not-deserve/svelte/internal.js";

function create_fragment(ctx) {
	let h1;
	let t1;
	let h20;
	let t3;
	let blockquote;
	let p0;
	let t4;
	let t5_value = " " + "";
	let t5;
	let t6;
	let a0;
	let t8;
	let t9;
	let a1;
	let t11;
	let h21;
	let t13;
	let p1;
	let t15;
	let p2;
	let t17;
	let pre0;

	let raw0_value = `
<code class="language-js">a <span class="token operator">===</span><span class="token operator">=</span> b</code>` + "";

	let t18;
	let p3;
	let t20;
	let p4;
	let t24;
	let p5;
	let t28;
	let pre1;

	let raw1_value = `
<code class="language-diff-js">// filename: https://github.com/babel/babel/tree/master/packages/babel-parser/src/tokenizer/index.js

export default class Tokenizer extends ParserErrors &#123;
<span class="token unchanged language-js"><span class="token prefix unchanged"> </span> <span class="token comment">// ...</span>
<span class="token prefix unchanged"> </span> <span class="token function">readToken_eq_excl</span><span class="token punctuation">(</span>code<span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">&#123;</span>
<span class="token prefix unchanged"> </span>   <span class="token comment">// '=!'</span>
<span class="token prefix unchanged"> </span>   <span class="token keyword">const</span> next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>input<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>pos <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token prefix unchanged"> </span>   <span class="token keyword">if</span> <span class="token punctuation">(</span>next <span class="token operator">===</span> charCodes<span class="token punctuation">.</span>equalsTo<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
<span class="token prefix unchanged"> </span>     <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">finishOp</span><span class="token punctuation">(</span>
<span class="token prefix unchanged"> </span>       tt<span class="token punctuation">.</span>equality<span class="token punctuation">,</span>
</span><span class="token deleted-sign deleted language-js"><span class="token prefix deleted">-</span>        <span class="token keyword">this</span><span class="token punctuation">.</span>input<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>pos <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">===</span> charCodes<span class="token punctuation">.</span>equalsTo <span class="token operator">?</span> <span class="token number">3</span> <span class="token operator">:</span> <span class="token number">2</span>
</span><span class="token inserted-sign inserted language-js"><span class="token prefix inserted">+</span>        <span class="token keyword">this</span><span class="token punctuation">.</span>input<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>pos <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">===</span> charCodes<span class="token punctuation">.</span>equalsTo
<span class="token prefix inserted">+</span>          <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>input<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>pos <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">===</span> charCodes<span class="token punctuation">.</span>equalsTo
<span class="token prefix inserted">+</span>            <span class="token operator">?</span> <span class="token number">4</span>
<span class="token prefix inserted">+</span>            <span class="token operator">:</span> <span class="token number">3</span>
<span class="token prefix inserted">+</span>          <span class="token operator">:</span> <span class="token number">2</span>
</span><span class="token unchanged language-js"><span class="token prefix unchanged"> </span>     <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token prefix unchanged"> </span>     <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token prefix unchanged"> </span>   <span class="token punctuation">&#125;</span>
<span class="token prefix unchanged"> </span>   <span class="token comment">// ...</span>
<span class="token prefix unchanged"> </span> <span class="token punctuation">&#125;</span>
</span>&#125;</code>` + "";

	let t29;
	let p6;
	let t39;
	let p7;
	let t41;
	let p8;
	let t46;
	let pre2;

	let raw2_value = `
<code class="language-js">a <span class="token operator">===</span><span class="token operator">=</span> b<span class="token punctuation">;</span>
c <span class="token operator">!==</span><span class="token operator">=</span> d<span class="token punctuation">;</span>

<span class="token comment">// into</span>
Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">!</span>Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span></code>` + "";

	let t47;
	let h22;
	let t49;
	let pre3;

	let raw3_value = `
<code class="language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">&#123;</span> template <span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
    name<span class="token operator">:</span> <span class="token string">'transform-quadruple-equal'</span><span class="token punctuation">,</span>
    visitor<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      <span class="token function">BinaryExpression</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>path<span class="token punctuation">.</span>node<span class="token punctuation">.</span>operator <span class="token operator">===</span> <span class="token string">'===='</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
          path<span class="token punctuation">.</span><span class="token function">replaceWith</span><span class="token punctuation">(</span>
            template<span class="token punctuation">.</span>expression<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Object.is(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>path<span class="token punctuation">.</span>node<span class="token punctuation">.</span>left<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>path<span class="token punctuation">.</span>node<span class="token punctuation">.</span>right<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">)</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>path<span class="token punctuation">.</span>node<span class="token punctuation">.</span>operator <span class="token operator">===</span> <span class="token string">'!==='</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
          path<span class="token punctuation">.</span><span class="token function">replaceWith</span><span class="token punctuation">(</span>
            template<span class="token punctuation">.</span>expression<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">!Object.is(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>path<span class="token punctuation">.</span>node<span class="token punctuation">.</span>left<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>path<span class="token punctuation">.</span>node<span class="token punctuation">.</span>right<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">)</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>` + "";

	let t50;
	let p9;
	let t54;
	let h23;
	let t56;
	let iframe;
	let iframe_src_value;
	let t57;
	let h24;
	let t59;
	let a4;
	let t61;
	let h25;
	let t63;
	let p10;

	return {
		c() {
			h1 = element("h1");
			h1.textContent = "transform-quadruple-equal";
			t1 = space();
			h20 = element("h2");
			h20.textContent = "Inspiration";
			t3 = space();
			blockquote = element("blockquote");
			p0 = element("p");
			t4 = text("==== (\"really strict equals\", same as");
			t5 = text(t5_value);
			t6 = space();
			a0 = element("a");
			a0.textContent = "https://t.co/LMVvSIFdpx";
			t8 = text(")");
			t9 = text("\n  — getify (@getify) ");
			a1 = element("a");
			a1.textContent = "July 22, 2020";
			t11 = space();
			h21 = element("h2");
			h21.textContent = "💡 The Idea";
			t13 = space();
			p1 = element("p");
			p1.textContent = "This is something you can’t just do with babel transform plugin.";
			t15 = space();
			p2 = element("p");
			p2.textContent = "Because the following:";
			t17 = space();
			pre0 = element("pre");
			t18 = space();
			p3 = element("p");
			p3.textContent = "is not a valid JavaScript syntax.";
			t20 = space();
			p4 = element("p");
			p4.innerHTML = `So, we need to first <a href="https://lihautan.com/creating-custom-javascript-syntax-with-babel/" rel="nofollow">fork the babel parser</a>.`;
			t24 = space();
			p5 = element("p");
			p5.innerHTML = `To add support a new operator, we update the tokenizer to recognise one extra <code>=</code> character:`;
			t28 = space();
			pre1 = element("pre");
			t29 = space();
			p6 = element("p");
			p6.innerHTML = `Now as <code>====</code> and <code>!===</code> become a valid token, babel will it treat it the same way as <code>===</code> and <code>!==</code> token.`;
			t39 = space();
			p7 = element("p");
			p7.textContent = "The Babel plugin itself is straightforward.";
			t41 = space();
			p8 = element("p");
			p8.innerHTML = `<code>a ==== b</code> will form a binary expression, and we are going to transform it into <code>Object.is(a, b)</code>.`;
			t46 = space();
			pre2 = element("pre");
			t47 = space();
			h22 = element("h2");
			h22.textContent = "📘 The Code";
			t49 = space();
			pre3 = element("pre");
			t50 = space();
			p9 = element("p");
			p9.innerHTML = `Over here I used <a href="https://babeljs.io/docs/en/babel-template" rel="nofollow">babel.template</a> which provides utility functions to create Babel AST using tagged template literal.`;
			t54 = space();
			h23 = element("h2");
			h23.textContent = "🧪 Try it out";
			t56 = space();
			iframe = element("iframe");
			t57 = space();
			h24 = element("h2");
			h24.textContent = "🥰 Tweet";
			t59 = space();
			a4 = element("a");
			a4.textContent = "Tweet";
			t61 = space();
			h25 = element("h2");
			h25.textContent = "Babel Plugin";
			t63 = space();
			p10 = element("p");
			p10.innerHTML = `<a href="https://badge.fury.io/js/%40lihautan%2Fbabel-plugin-transform-quadruple-equal" rel="nofollow"><img src="https://badge.fury.io/js/%40lihautan%2Fbabel-plugin-transform-quadruple-equal.svg" alt="npm version"></a>`;
			attr(a0, "href", "https://t.co/LMVvSIFdpx");
			attr(p0, "lang", "en");
			attr(p0, "dir", "ltr");
			attr(a1, "href", "https://twitter.com/getify/status/1285825895249383424?ref_src=twsrc%5Etfw");
			attr(blockquote, "class", "twitter-tweet");
			attr(pre0, "class", "language-js");
			attr(pre1, "class", "language-diff-js");
			attr(pre2, "class", "language-js");
			attr(pre3, "class", "language-js");
			if (iframe.src !== (iframe_src_value = "https://codesandbox.io/embed/javascript--n0iic?expanddevtools=1&fontsize=14&hidenavigation=1&theme=light")) attr(iframe, "src", iframe_src_value);
			set_style(iframe, "width", "100%");
			set_style(iframe, "height", "500px");
			set_style(iframe, "border", "4px solid");
			set_style(iframe, "box-shadow", "5px 5px 0 #2aa3ef");
			set_style(iframe, "overflow", "hidden");
			attr(iframe, "sandbox", "allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts");
			attr(a4, "href", "https://twitter.com/share?ref_src=twsrc%5Etfw");
			attr(a4, "class", "twitter-share-button");
			attr(a4, "data-show-count", "false");
		},
		m(target, anchor) {
			insert(target, h1, anchor);
			insert(target, t1, anchor);
			insert(target, h20, anchor);
			insert(target, t3, anchor);
			insert(target, blockquote, anchor);
			append(blockquote, p0);
			append(p0, t4);
			append(p0, t5);
			append(p0, t6);
			append(p0, a0);
			append(p0, t8);
			append(blockquote, t9);
			append(blockquote, a1);
			insert(target, t11, anchor);
			insert(target, h21, anchor);
			insert(target, t13, anchor);
			insert(target, p1, anchor);
			insert(target, t15, anchor);
			insert(target, p2, anchor);
			insert(target, t17, anchor);
			insert(target, pre0, anchor);
			pre0.innerHTML = raw0_value;
			insert(target, t18, anchor);
			insert(target, p3, anchor);
			insert(target, t20, anchor);
			insert(target, p4, anchor);
			insert(target, t24, anchor);
			insert(target, p5, anchor);
			insert(target, t28, anchor);
			insert(target, pre1, anchor);
			pre1.innerHTML = raw1_value;
			insert(target, t29, anchor);
			insert(target, p6, anchor);
			insert(target, t39, anchor);
			insert(target, p7, anchor);
			insert(target, t41, anchor);
			insert(target, p8, anchor);
			insert(target, t46, anchor);
			insert(target, pre2, anchor);
			pre2.innerHTML = raw2_value;
			insert(target, t47, anchor);
			insert(target, h22, anchor);
			insert(target, t49, anchor);
			insert(target, pre3, anchor);
			pre3.innerHTML = raw3_value;
			insert(target, t50, anchor);
			insert(target, p9, anchor);
			insert(target, t54, anchor);
			insert(target, h23, anchor);
			insert(target, t56, anchor);
			insert(target, iframe, anchor);
			insert(target, t57, anchor);
			insert(target, h24, anchor);
			insert(target, t59, anchor);
			insert(target, a4, anchor);
			insert(target, t61, anchor);
			insert(target, h25, anchor);
			insert(target, t63, anchor);
			insert(target, p10, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(h1);
			if (detaching) detach(t1);
			if (detaching) detach(h20);
			if (detaching) detach(t3);
			if (detaching) detach(blockquote);
			if (detaching) detach(t11);
			if (detaching) detach(h21);
			if (detaching) detach(t13);
			if (detaching) detach(p1);
			if (detaching) detach(t15);
			if (detaching) detach(p2);
			if (detaching) detach(t17);
			if (detaching) detach(pre0);
			if (detaching) detach(t18);
			if (detaching) detach(p3);
			if (detaching) detach(t20);
			if (detaching) detach(p4);
			if (detaching) detach(t24);
			if (detaching) detach(p5);
			if (detaching) detach(t28);
			if (detaching) detach(pre1);
			if (detaching) detach(t29);
			if (detaching) detach(p6);
			if (detaching) detach(t39);
			if (detaching) detach(p7);
			if (detaching) detach(t41);
			if (detaching) detach(p8);
			if (detaching) detach(t46);
			if (detaching) detach(pre2);
			if (detaching) detach(t47);
			if (detaching) detach(h22);
			if (detaching) detach(t49);
			if (detaching) detach(pre3);
			if (detaching) detach(t50);
			if (detaching) detach(p9);
			if (detaching) detach(t54);
			if (detaching) detach(h23);
			if (detaching) detach(t56);
			if (detaching) detach(iframe);
			if (detaching) detach(t57);
			if (detaching) detach(h24);
			if (detaching) detach(t59);
			if (detaching) detach(a4);
			if (detaching) detach(t61);
			if (detaching) detach(h25);
			if (detaching) detach(t63);
			if (detaching) detach(p10);
		}
	};
}

class TransformQuadrupleEqual extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default TransformQuadrupleEqual;