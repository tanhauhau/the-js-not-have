/* generated by Svelte v3.24.0 */
import {
	SvelteComponent,
	append,
	attr,
	create_component,
	destroy_component,
	destroy_each,
	detach,
	element,
	init,
	insert,
	mount_component,
	noop,
	safe_not_equal,
	space,
	text,
	transition_in,
	transition_out
} from "/the-js-not-have/svelte/internal.js";

import Disclaimer from "./Disclaimer.js";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (3:0) {#each plugins as plugin}
function create_each_block(ctx) {
	let li;
	let a;
	let t_value = toPkgName(/*plugin*/ ctx[1]) + "";
	let t;
	let a_href_value;

	return {
		c() {
			li = element("li");
			a = element("a");
			t = text(t_value);
			attr(a, "href", a_href_value = "#" + /*plugin*/ ctx[1]);
		},
		m(target, anchor) {
			insert(target, li, anchor);
			append(li, a);
			append(a, t);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(li);
		}
	};
}

function create_fragment(ctx) {
	let h1;
	let t1;
	let ul;
	let t2;
	let disclaimer;
	let current;
	let each_value = /*plugins*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	disclaimer = new Disclaimer({});

	return {
		c() {
			h1 = element("h1");
			h1.textContent = "List of Babel plugins";
			t1 = space();
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t2 = space();
			create_component(disclaimer.$$.fragment);
		},
		m(target, anchor) {
			insert(target, h1, anchor);
			insert(target, t1, anchor);
			insert(target, ul, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}

			insert(target, t2, anchor);
			mount_component(disclaimer, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			if (dirty & /*plugins, toPkgName*/ 1) {
				each_value = /*plugins*/ ctx[0];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i(local) {
			if (current) return;
			transition_in(disclaimer.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(disclaimer.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(h1);
			if (detaching) detach(t1);
			if (detaching) detach(ul);
			destroy_each(each_blocks, detaching);
			if (detaching) detach(t2);
			destroy_component(disclaimer, detaching);
		}
	};
}

function toPkgName(str) {
	return "@lihautan/babel-plugin" + str.replace(/[A-Z]/g, char => "-" + char.toLowerCase());
}

function instance($$self) {
	const plugins = Array.from(window.DATA).filter(name => name.startsWith("Transform"));
	return [plugins];
}

class Plugins extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default Plugins;