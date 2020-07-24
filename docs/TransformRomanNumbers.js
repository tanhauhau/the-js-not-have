/* generated by Svelte v3.24.0 */
import {
	SvelteComponent,
	attr,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	space
} from "/the-js-not-have/svelte/internal.js";

function create_fragment(ctx) {
	let h1;
	let t1;
	let h20;
	let t3;
	let blockquote;
	let t7;
	let h21;
	let t9;
	let p1;
	let t10;
	let p2;
	let t12;
	let p3;
	let t14;
	let pre0;

	let raw0_value = `
<code class="language-js"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token constant">II</span><span class="token punctuation">;</span>
<span class="token function">b</span><span class="token punctuation">(</span><span class="token constant">VI</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>` + "";

	let t15;
	let p4;
	let t19;
	let p5;
	let t23;
	let pre1;

	let raw1_value = `
<code class="language-js"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token function">b</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>` + "";

	let t24;
	let p6;
	let t26;
	let p7;
	let t28;
	let pre2;

	let raw2_value = `
<code class="language-js"><span class="token constant">II</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">III</span> <span class="token operator">=</span> <span class="token punctuation">&#123;</span> <span class="token constant">IV</span><span class="token operator">:</span> b <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">XI</span> <span class="token punctuation">&#123;</span>
  <span class="token constant">XC</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>` + "";

	let t29;
	let p8;
	let t31;
	let pre3;

	let raw3_value = `
<code class="language-js"><span class="token number">2</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token number">3</span> <span class="token operator">=</span> <span class="token punctuation">&#123;</span> <span class="token number">4</span><span class="token operator">:</span> b <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">11</span> <span class="token punctuation">&#123;</span>
  <span class="token number">90</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>` + "";

	let t32;
	let p9;
	let t36;
	let p10;
	let t38;
	let pre4;

	let raw4_value = `
<code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> isValidRoman<span class="token punctuation">,</span> romanToArab <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'roman-numbers'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">&#123;</span> types<span class="token operator">:</span> t <span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
    name<span class="token operator">:</span> <span class="token string">'roman-numbers'</span><span class="token punctuation">,</span>
    visitor<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      <span class="token function">Identifier</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">const</span> <span class="token punctuation">&#123;</span> parent<span class="token punctuation">,</span> node <span class="token punctuation">&#125;</span> <span class="token operator">=</span> path<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>
          <span class="token comment">// const a = II</span>
          <span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">isVariableDeclarator</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> parent<span class="token punctuation">.</span>init <span class="token operator">===</span> node<span class="token punctuation">)</span> <span class="token operator">||</span>
          <span class="token comment">// &#123; a: II &#125;</span>
          <span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">isObjectProperty</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>parent<span class="token punctuation">.</span>method<span class="token punctuation">)</span> <span class="token operator">||</span>
          <span class="token comment">// [II]</span>
          t<span class="token punctuation">.</span><span class="token function">isArrayExpression</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span> <span class="token operator">||</span>
          <span class="token comment">// const &#123; a: b = II &#125; = c</span>
          <span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">isAssignmentExpression</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> parent<span class="token punctuation">.</span>right <span class="token operator">===</span> node<span class="token punctuation">)</span> <span class="token operator">||</span>
          <span class="token comment">// function a(&#123; a: b = II &#125;) &#123;&#125;</span>
          <span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">isAssignmentPattern</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> parent<span class="token punctuation">.</span>right <span class="token operator">===</span> node<span class="token punctuation">)</span>
        <span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
          <span class="token keyword">const</span> name <span class="token operator">=</span> node<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isValidRoman</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>path<span class="token punctuation">.</span>scope<span class="token punctuation">.</span><span class="token function">hasBinding</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
            path<span class="token punctuation">.</span><span class="token function">replaceWith</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">numericLiteral</span><span class="token punctuation">(</span><span class="token function">romanToArab</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">&#125;</span>
        <span class="token punctuation">&#125;</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>` + "";

	return {
		c() {
			h1 = element("h1");
			h1.textContent = "transform-roman-numbers";
			t1 = space();
			h20 = element("h2");
			h20.textContent = "Inspiration";
			t3 = space();
			blockquote = element("blockquote");

			blockquote.innerHTML = `<p lang="en" dir="ltr">Roman numerals. Mandatory for floating point numbers.</p>
  — Bogdan Marinescu (@bogdanm78) <a href="https://twitter.com/bogdanm78/status/1285867389989552128?ref_src=twsrc%5Etfw">July 22, 2020</a>`;

			t7 = space();
			h21 = element("h2");
			h21.textContent = "Babel Plugin";
			t9 = space();
			p1 = element("p");
			p1.innerHTML = `<a href="https://badge.fury.io/js/%40lihautan%2Fbabel-plugin-transform-roman-numbers" rel="nofollow"><img src="https://badge.fury.io/js/%40lihautan%2Fbabel-plugin-transform-roman-numbers.svg" alt="npm version"></a>`;
			t10 = space();
			p2 = element("p");
			p2.textContent = "OK, I’m a bit lazy over here. I just going to support only integer roman numerals.";
			t12 = space();
			p3 = element("p");
			p3.textContent = "The following is a valid JavaScript syntax:";
			t14 = space();
			pre0 = element("pre");
			t15 = space();
			p4 = element("p");
			p4.innerHTML = `as <code>II</code> is just a normal variable.`;
			t19 = space();
			p5 = element("p");
			p5.innerHTML = `If the variable name is a roman numeric, we are going to transpile them into a <code>number</code>.`;
			t23 = space();
			pre1 = element("pre");
			t24 = space();
			p6 = element("p");
			p6.textContent = "So it would work like JavaScript supports roman numeric.";
			t26 = space();
			p7 = element("p");
			p7.textContent = "Of course not all variable name are free to modify:";
			t28 = space();
			pre2 = element("pre");
			t29 = space();
			p8 = element("p");
			p8.textContent = "The above is a valid JS, but it does not make sense to turn them into number, as function call expression, variable declaration, class name and method does not allow number as the sole variable name.";
			t31 = space();
			pre3 = element("pre");
			t32 = space();
			p9 = element("p");
			p9.innerHTML = `Although <code>{ 4: b }</code> looks valid. 🤔`;
			t36 = space();
			p10 = element("p");
			p10.textContent = "I realised that the places of a variable can be interpreted as roman numeric is limited, so it’s easier to whitelist those places rather than blacklist places it shouldn’t be appear.";
			t38 = space();
			pre4 = element("pre");
			attr(blockquote, "class", "twitter-tweet");
			attr(pre0, "class", "language-js");
			attr(pre1, "class", "language-js");
			attr(pre2, "class", "language-js");
			attr(pre3, "class", "language-js");
			attr(pre4, "class", "language-js");
		},
		m(target, anchor) {
			insert(target, h1, anchor);
			insert(target, t1, anchor);
			insert(target, h20, anchor);
			insert(target, t3, anchor);
			insert(target, blockquote, anchor);
			insert(target, t7, anchor);
			insert(target, h21, anchor);
			insert(target, t9, anchor);
			insert(target, p1, anchor);
			insert(target, t10, anchor);
			insert(target, p2, anchor);
			insert(target, t12, anchor);
			insert(target, p3, anchor);
			insert(target, t14, anchor);
			insert(target, pre0, anchor);
			pre0.innerHTML = raw0_value;
			insert(target, t15, anchor);
			insert(target, p4, anchor);
			insert(target, t19, anchor);
			insert(target, p5, anchor);
			insert(target, t23, anchor);
			insert(target, pre1, anchor);
			pre1.innerHTML = raw1_value;
			insert(target, t24, anchor);
			insert(target, p6, anchor);
			insert(target, t26, anchor);
			insert(target, p7, anchor);
			insert(target, t28, anchor);
			insert(target, pre2, anchor);
			pre2.innerHTML = raw2_value;
			insert(target, t29, anchor);
			insert(target, p8, anchor);
			insert(target, t31, anchor);
			insert(target, pre3, anchor);
			pre3.innerHTML = raw3_value;
			insert(target, t32, anchor);
			insert(target, p9, anchor);
			insert(target, t36, anchor);
			insert(target, p10, anchor);
			insert(target, t38, anchor);
			insert(target, pre4, anchor);
			pre4.innerHTML = raw4_value;
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
			if (detaching) detach(t7);
			if (detaching) detach(h21);
			if (detaching) detach(t9);
			if (detaching) detach(p1);
			if (detaching) detach(t10);
			if (detaching) detach(p2);
			if (detaching) detach(t12);
			if (detaching) detach(p3);
			if (detaching) detach(t14);
			if (detaching) detach(pre0);
			if (detaching) detach(t15);
			if (detaching) detach(p4);
			if (detaching) detach(t19);
			if (detaching) detach(p5);
			if (detaching) detach(t23);
			if (detaching) detach(pre1);
			if (detaching) detach(t24);
			if (detaching) detach(p6);
			if (detaching) detach(t26);
			if (detaching) detach(p7);
			if (detaching) detach(t28);
			if (detaching) detach(pre2);
			if (detaching) detach(t29);
			if (detaching) detach(p8);
			if (detaching) detach(t31);
			if (detaching) detach(pre3);
			if (detaching) detach(t32);
			if (detaching) detach(p9);
			if (detaching) detach(t36);
			if (detaching) detach(p10);
			if (detaching) detach(t38);
			if (detaching) detach(pre4);
		}
	};
}

class TransformRomanNumbers extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default TransformRomanNumbers;