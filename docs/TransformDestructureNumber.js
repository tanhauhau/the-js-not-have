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
	set_style,
	space
} from "/the-js-we-do-not-deserve/svelte/internal.js";

function create_fragment(ctx) {
	let h1;
	let t1;
	let h20;
	let t3;
	let blockquote;
	let t10;
	let h21;
	let t12;
	let p1;
	let t16;
	let p2;
	let t18;
	let p3;
	let t20;
	let pre0;

	let raw0_value = `
<code class="language-js"><span class="token keyword">let</span> a<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">3.142</span><span class="token punctuation">;</span>
a <span class="token operator">===</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
b <span class="token operator">===</span> <span class="token number">142</span><span class="token punctuation">;</span> <span class="token comment">// true</span></code>` + "";

	let t21;
	let p4;
	let t25;
	let p5;
	let t27;
	let pre1;

	let raw1_value = `
<code class="language-diff-js">// filename: https://github.com/babel/babel/tree/master/packages/babel-parser/src/plugin-utils.js

import estree from "./plugins/estree";
<span class="token inserted-sign inserted language-js"><span class="token prefix inserted">+</span><span class="token keyword">import</span> jsWeDoNotDeserve <span class="token keyword">from</span> <span class="token string">"./plugins/jsWeDoNotDeserve"</span><span class="token punctuation">;</span>
</span>import flow from "./plugins/flow";
import jsx from "./plugins/jsx";
import typescript from "./plugins/typescript";

// ...

export const mixinPlugins: &#123; [name: string]: MixinPlugin &#125; = &#123;
<span class="token unchanged language-js"><span class="token prefix unchanged"> </span>  estree<span class="token punctuation">,</span>
</span><span class="token inserted-sign inserted language-js"><span class="token prefix inserted">+</span>  jsWeDoNotDeserve<span class="token punctuation">,</span>
</span><span class="token unchanged language-js"><span class="token prefix unchanged"> </span>  jsx<span class="token punctuation">,</span>
<span class="token prefix unchanged"> </span>  <span class="token comment">// ...</span></span></code>` + "";

	let t28;
	let p6;
	let t34;
	let p7;
	let t40;
	let pre2;

	let raw2_value = `
<code class="language-js"><span class="token keyword">const</span> a<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">1.3</span><span class="token punctuation">;</span>

<span class="token comment">// ...</span>
<span class="token punctuation">&#123;</span>
  type<span class="token operator">:</span> <span class="token string">"VariableDeclarator"</span><span class="token punctuation">,</span>
  id<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    type<span class="token operator">:</span> <span class="token string">"DestructureNumberPattern"</span><span class="token punctuation">,</span>
    left<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      type<span class="token operator">:</span> <span class="token string">"Identifier"</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">"a"</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    right<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      type<span class="token operator">:</span> <span class="token string">"Identifier"</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">"b"</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  init<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    type<span class="token operator">:</span> <span class="token string">"NumericLiteral"</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token number">1.3</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>` + "";

	let t41;
	let pre3;

	let raw3_value = `
<code class="language-diff-js">// filename: packages/babel-parser/src/plugins/jsNext.js
// @flow
import &#123; types as tt, type TokenType &#125; from '../tokenizer/types';
import type Parser from '../parser';
import * as N from '../types';
import &#123;
<span class="token unchanged language-js"><span class="token prefix unchanged"> </span> type BindingTypes<span class="token punctuation">,</span>
<span class="token prefix unchanged"> </span> <span class="token constant">BIND_NONE</span><span class="token punctuation">,</span>
<span class="token prefix unchanged"> </span> <span class="token constant">BIND_LEXICAL</span><span class="token punctuation">,</span>
<span class="token prefix unchanged"> </span> <span class="token constant">BIND_VAR</span><span class="token punctuation">,</span>
</span>&#125; from '../util/scopeflags';

export default (superClass: Class&lt;Parser>): Class&lt;Parser> =>
<span class="token unchanged language-js"><span class="token prefix unchanged"> </span> <span class="token keyword">class</span> <span class="token class-name">extends</span> superClass <span class="token punctuation">&#123;</span>
<span class="token prefix unchanged"> </span>   <span class="token function">parseVarId</span><span class="token punctuation">(</span>
<span class="token prefix unchanged"> </span>     decl<span class="token operator">:</span> <span class="token constant">N</span><span class="token punctuation">.</span>VariableDeclarator<span class="token punctuation">,</span>
<span class="token prefix unchanged"> </span>     kind<span class="token operator">:</span> <span class="token string">'var'</span> <span class="token operator">|</span> <span class="token string">'let'</span> <span class="token operator">|</span> <span class="token string">'const'</span>
<span class="token prefix unchanged"> </span>   <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">&#123;</span>
<span class="token prefix unchanged"> </span>     <span class="token keyword">const</span> startPos <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>start<span class="token punctuation">;</span>
<span class="token prefix unchanged"> </span>     <span class="token keyword">const</span> startLoc <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>startLoc<span class="token punctuation">;</span>
</span>
<span class="token inserted-sign inserted language-js"><span class="token prefix inserted">+</span>      decl<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">parseBindingAtom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token prefix inserted">+</span>      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span>tt<span class="token punctuation">.</span>dot<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> decl<span class="token punctuation">.</span>id<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">'Identifier'</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
<span class="token prefix inserted">+</span>        <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">startNodeAt</span><span class="token punctuation">(</span>startPos<span class="token punctuation">,</span> startLoc<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token prefix inserted">+</span>        node<span class="token punctuation">.</span>left <span class="token operator">=</span> decl<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
<span class="token prefix inserted">+</span>        node<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">parseIdentifier</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token prefix inserted">+</span>        decl<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">finishNode</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> <span class="token string">'DestructureNumberPattern'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token prefix inserted">+</span>      <span class="token punctuation">&#125;</span>
</span><span class="token unchanged language-js"><span class="token prefix unchanged"> </span>     <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">checkLVal</span><span class="token punctuation">(</span>
<span class="token prefix unchanged"> </span>       decl<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
<span class="token prefix unchanged"> </span>       kind <span class="token operator">===</span> <span class="token string">'var'</span> <span class="token operator">?</span> <span class="token constant">BIND_VAR</span> <span class="token operator">:</span> <span class="token constant">BIND_LEXICAL</span><span class="token punctuation">,</span>
<span class="token prefix unchanged"> </span>       <span class="token keyword">undefined</span><span class="token punctuation">,</span>
<span class="token prefix unchanged"> </span>       <span class="token string">'variable declaration'</span><span class="token punctuation">,</span>
<span class="token prefix unchanged"> </span>       kind <span class="token operator">!==</span> <span class="token string">'var'</span>
<span class="token prefix unchanged"> </span>     <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token prefix unchanged"> </span>   <span class="token punctuation">&#125;</span>
</span>
<span class="token unchanged language-js"><span class="token prefix unchanged"> </span>   <span class="token function">checkLVal</span><span class="token punctuation">(</span>
<span class="token prefix unchanged"> </span>     expr<span class="token operator">:</span> <span class="token constant">N</span><span class="token punctuation">.</span>Expression<span class="token punctuation">,</span>
<span class="token prefix unchanged"> </span>     bindingType<span class="token operator">:</span> BindingTypes <span class="token operator">=</span> <span class="token constant">BIND_NONE</span><span class="token punctuation">,</span>
<span class="token prefix unchanged"> </span>     checkClashes<span class="token operator">:</span> <span class="token operator">?</span><span class="token punctuation">&#123;</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> boolean <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token prefix unchanged"> </span>     contextDescription<span class="token operator">:</span> string<span class="token punctuation">,</span>
<span class="token prefix unchanged"> </span>     disallowLetBinding<span class="token operator">?</span><span class="token operator">:</span> boolean
<span class="token prefix unchanged"> </span>   <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">&#123;</span>
<span class="token prefix unchanged"> </span>     <span class="token keyword">switch</span> <span class="token punctuation">(</span>expr<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
<span class="token prefix unchanged"> </span>       <span class="token keyword">case</span> <span class="token string">'DestructureNumberPattern'</span><span class="token operator">:</span>
<span class="token prefix unchanged"> </span>         <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token prefix unchanged"> </span>       <span class="token keyword">default</span><span class="token operator">:</span>
<span class="token prefix unchanged"> </span>         <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">checkLVal</span><span class="token punctuation">(</span>
<span class="token prefix unchanged"> </span>           expr<span class="token punctuation">,</span>
<span class="token prefix unchanged"> </span>           bindingType<span class="token punctuation">,</span>
<span class="token prefix unchanged"> </span>           checkClashes<span class="token punctuation">,</span>
<span class="token prefix unchanged"> </span>           contextDescription<span class="token punctuation">,</span>
<span class="token prefix unchanged"> </span>           disallowLetBinding
<span class="token prefix unchanged"> </span>         <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token prefix unchanged"> </span>     <span class="token punctuation">&#125;</span>
<span class="token prefix unchanged"> </span>   <span class="token punctuation">&#125;</span>
<span class="token prefix unchanged"> </span> <span class="token punctuation">&#125;</span><span class="token punctuation">;</span></span></code>` + "";

	let t42;
	let p8;
	let t44;
	let p9;
	let t46;
	let pre4;

	let raw4_value = `
<code class="language-js"><span class="token keyword">let</span> a<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">3.142</span></code>` + "";

	let t47;
	let p10;
	let t49;
	let pre5;

	let raw5_value = `
<code class="language-js"><span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">142</span><span class="token punctuation">]</span></code>` + "";

	let t50;
	let p11;
	let t56;
	let pre6;

	let raw6_value = `
<code class="language-js"><span class="token keyword">let</span> c<span class="token punctuation">.</span>d <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> e<span class="token punctuation">.</span>f <span class="token operator">=</span> <span class="token number">.555</span><span class="token punctuation">;</span>

<span class="token comment">// into</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>c<span class="token punctuation">,</span> d<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>e<span class="token punctuation">,</span> f<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">555</span><span class="token punctuation">]</span><span class="token punctuation">;</span></code>` + "";

	let t57;
	let h22;
	let t59;
	let pre7;

	let raw7_value = `
<code class="language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">&#123;</span> types<span class="token operator">:</span> t<span class="token punctuation">,</span> template <span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
    name<span class="token operator">:</span> <span class="token string">'transform-destructure-number'</span><span class="token punctuation">,</span>
    visitor<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      <span class="token function">VariableDeclarator</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>path<span class="token punctuation">.</span>node<span class="token punctuation">.</span>id<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">'DestructureNumberPattern'</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">isNumericLiteral</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span>node<span class="token punctuation">.</span>init<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
            <span class="token keyword">const</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token operator">=</span> path<span class="token punctuation">.</span>node<span class="token punctuation">.</span>init<span class="token punctuation">.</span>extra<span class="token punctuation">.</span>raw<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            path<span class="token punctuation">.</span><span class="token function">replaceWith</span><span class="token punctuation">(</span>
              template<span class="token punctuation">.</span>statement<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">let [</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>path<span class="token punctuation">.</span>node<span class="token punctuation">.</span>id<span class="token punctuation">.</span>left<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>
                path<span class="token punctuation">.</span>node<span class="token punctuation">.</span>id<span class="token punctuation">.</span>right
              <span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">] = [</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a <span class="token operator">||</span> <span class="token string">'0'</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>b <span class="token operator">||</span> <span class="token string">'0'</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">]</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>declarations<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'Destructure number with number!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">&#125;</span>
        <span class="token punctuation">&#125;</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>` + "";

	let t60;
	let h23;
	let t62;
	let iframe;
	let iframe_src_value;
	let t63;
	let h24;
	let t65;
	let a2;
	let t67;
	let h25;
	let t69;
	let p12;

	return {
		c() {
			h1 = element("h1");
			h1.textContent = "transform-destructure-number";
			t1 = space();
			h20 = element("h2");
			h20.textContent = "Inspiration";
			t3 = space();
			blockquote = element("blockquote");
			blockquote.innerHTML = `<p lang="en" dir="ltr">Number destructuring.<br><br>let a.b = 3.142;<br><br>a === 3 // true<br>b === 142 // true</p>— 🌅 Iron Therapy 🌇 (@__Jonathanks) <a href="https://twitter.com/__Jonathanks/status/1285874999589576705?ref_src=twsrc%5Etfw">July 22, 2020</a>`;
			t10 = space();
			h21 = element("h2");
			h21.textContent = "💡 The Idea";
			t12 = space();
			p1 = element("p");
			p1.innerHTML = `Destructuring decimal number via <code>.</code>?`;
			t16 = space();
			p2 = element("p");
			p2.textContent = "Cool! 😎";
			t18 = space();
			p3 = element("p");
			p3.textContent = "Too bad it’s not a valid syntax:";
			t20 = space();
			pre0 = element("pre");
			t21 = space();
			p4 = element("p");
			p4.innerHTML = `Which means, this require us to <a href="https://lihautan.com/creating-custom-javascript-syntax-with-babel/" rel="nofollow">fork the babel parser</a>.`;
			t25 = space();
			p5 = element("p");
			p5.textContent = "We can create a parser plugin to extend the existing parsing method. This allow us to turn on / off the parser plugin from the transform plugin. This is just like how babel typescript plugin or flow plugin works.";
			t27 = space();
			pre1 = element("pre");
			t28 = space();
			p6 = element("p");
			p6.innerHTML = `We can first copy the original implementation of <code>parseVarId</code>, the method to parse variable name in a <code>VariableDeclarator</code>.`;
			t34 = space();
			p7 = element("p");
			p7.innerHTML = `If we encounter a <code>.</code> token after the variable name, we create a different AST node, <code>DestructureNumberPattern</code> instead.`;
			t40 = space();
			pre2 = element("pre");
			t41 = space();
			pre3 = element("pre");
			t42 = space();
			p8 = element("p");
			p8.textContent = "After we’ve make sure the parser can parse the code, now its time to figure out how we should transpile the code into.";
			t44 = space();
			p9 = element("p");
			p9.textContent = "We can use array destructuring, so,";
			t46 = space();
			pre4 = element("pre");
			t47 = space();
			p10 = element("p");
			p10.textContent = "gets transpiled into";
			t49 = space();
			pre5 = element("pre");
			t50 = space();
			p11 = element("p");
			p11.innerHTML = `If there’s no digit in front or behind the <code>.</code>, then we fallback to <code>0</code>:`;
			t56 = space();
			pre6 = element("pre");
			t57 = space();
			h22 = element("h2");
			h22.textContent = "📘 The Code";
			t59 = space();
			pre7 = element("pre");
			t60 = space();
			h23 = element("h2");
			h23.textContent = "🧪 Try it out";
			t62 = space();
			iframe = element("iframe");
			t63 = space();
			h24 = element("h2");
			h24.textContent = "🥰 Tweet";
			t65 = space();
			a2 = element("a");
			a2.textContent = "Tweet";
			t67 = space();
			h25 = element("h2");
			h25.textContent = "📦 Babel Plugin";
			t69 = space();
			p12 = element("p");
			p12.innerHTML = `<a href="https://badge.fury.io/js/%40lihautan%2Fbabel-plugin-transform-destructure-number" rel="nofollow"><img src="https://badge.fury.io/js/%40lihautan%2Fbabel-plugin-transform-destructure-number.svg" alt="npm version"></a>`;
			attr(blockquote, "class", "twitter-tweet");
			attr(pre0, "class", "language-js");
			attr(pre1, "class", "language-diff-js");
			attr(pre2, "class", "language-js");
			attr(pre3, "class", "language-diff-js");
			attr(pre4, "class", "language-js");
			attr(pre5, "class", "language-js");
			attr(pre6, "class", "language-js");
			attr(pre7, "class", "language-js");
			if (iframe.src !== (iframe_src_value = "https://codesandbox.io/embed/javascript--weskh?expanddevtools=1&fontsize=14&hidenavigation=1&theme=light")) attr(iframe, "src", iframe_src_value);
			set_style(iframe, "width", "100%");
			set_style(iframe, "height", "500px");
			set_style(iframe, "border", "4px solid");
			set_style(iframe, "box-shadow", "5px 5px 0 #2aa3ef");
			set_style(iframe, "overflow", "hidden");
			attr(iframe, "sandbox", "allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts");
			attr(a2, "href", "https://twitter.com/share?ref_src=twsrc%5Etfw");
			attr(a2, "class", "twitter-share-button");
			attr(a2, "data-show-count", "false");
		},
		m(target, anchor) {
			insert(target, h1, anchor);
			insert(target, t1, anchor);
			insert(target, h20, anchor);
			insert(target, t3, anchor);
			insert(target, blockquote, anchor);
			insert(target, t10, anchor);
			insert(target, h21, anchor);
			insert(target, t12, anchor);
			insert(target, p1, anchor);
			insert(target, t16, anchor);
			insert(target, p2, anchor);
			insert(target, t18, anchor);
			insert(target, p3, anchor);
			insert(target, t20, anchor);
			insert(target, pre0, anchor);
			pre0.innerHTML = raw0_value;
			insert(target, t21, anchor);
			insert(target, p4, anchor);
			insert(target, t25, anchor);
			insert(target, p5, anchor);
			insert(target, t27, anchor);
			insert(target, pre1, anchor);
			pre1.innerHTML = raw1_value;
			insert(target, t28, anchor);
			insert(target, p6, anchor);
			insert(target, t34, anchor);
			insert(target, p7, anchor);
			insert(target, t40, anchor);
			insert(target, pre2, anchor);
			pre2.innerHTML = raw2_value;
			insert(target, t41, anchor);
			insert(target, pre3, anchor);
			pre3.innerHTML = raw3_value;
			insert(target, t42, anchor);
			insert(target, p8, anchor);
			insert(target, t44, anchor);
			insert(target, p9, anchor);
			insert(target, t46, anchor);
			insert(target, pre4, anchor);
			pre4.innerHTML = raw4_value;
			insert(target, t47, anchor);
			insert(target, p10, anchor);
			insert(target, t49, anchor);
			insert(target, pre5, anchor);
			pre5.innerHTML = raw5_value;
			insert(target, t50, anchor);
			insert(target, p11, anchor);
			insert(target, t56, anchor);
			insert(target, pre6, anchor);
			pre6.innerHTML = raw6_value;
			insert(target, t57, anchor);
			insert(target, h22, anchor);
			insert(target, t59, anchor);
			insert(target, pre7, anchor);
			pre7.innerHTML = raw7_value;
			insert(target, t60, anchor);
			insert(target, h23, anchor);
			insert(target, t62, anchor);
			insert(target, iframe, anchor);
			insert(target, t63, anchor);
			insert(target, h24, anchor);
			insert(target, t65, anchor);
			insert(target, a2, anchor);
			insert(target, t67, anchor);
			insert(target, h25, anchor);
			insert(target, t69, anchor);
			insert(target, p12, anchor);
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
			if (detaching) detach(t10);
			if (detaching) detach(h21);
			if (detaching) detach(t12);
			if (detaching) detach(p1);
			if (detaching) detach(t16);
			if (detaching) detach(p2);
			if (detaching) detach(t18);
			if (detaching) detach(p3);
			if (detaching) detach(t20);
			if (detaching) detach(pre0);
			if (detaching) detach(t21);
			if (detaching) detach(p4);
			if (detaching) detach(t25);
			if (detaching) detach(p5);
			if (detaching) detach(t27);
			if (detaching) detach(pre1);
			if (detaching) detach(t28);
			if (detaching) detach(p6);
			if (detaching) detach(t34);
			if (detaching) detach(p7);
			if (detaching) detach(t40);
			if (detaching) detach(pre2);
			if (detaching) detach(t41);
			if (detaching) detach(pre3);
			if (detaching) detach(t42);
			if (detaching) detach(p8);
			if (detaching) detach(t44);
			if (detaching) detach(p9);
			if (detaching) detach(t46);
			if (detaching) detach(pre4);
			if (detaching) detach(t47);
			if (detaching) detach(p10);
			if (detaching) detach(t49);
			if (detaching) detach(pre5);
			if (detaching) detach(t50);
			if (detaching) detach(p11);
			if (detaching) detach(t56);
			if (detaching) detach(pre6);
			if (detaching) detach(t57);
			if (detaching) detach(h22);
			if (detaching) detach(t59);
			if (detaching) detach(pre7);
			if (detaching) detach(t60);
			if (detaching) detach(h23);
			if (detaching) detach(t62);
			if (detaching) detach(iframe);
			if (detaching) detach(t63);
			if (detaching) detach(h24);
			if (detaching) detach(t65);
			if (detaching) detach(a2);
			if (detaching) detach(t67);
			if (detaching) detach(h25);
			if (detaching) detach(t69);
			if (detaching) detach(p12);
		}
	};
}

class TransformDestructureNumber extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default TransformDestructureNumber;