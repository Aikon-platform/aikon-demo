var __create = Object.create, __defProp = Object.defineProperty, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropNames = Object.getOwnPropertyNames, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __commonJSMin = (e, n) => () => (n || e((n = { exports: {} }).exports, n), n.exports), __copyProps = (e, o, c, l) => {
	if (o && typeof o == "object" || typeof o == "function") for (var u = __getOwnPropNames(o), d = 0, f = u.length, p; d < f; d++) p = u[d], !__hasOwnProp.call(e, p) && p !== c && __defProp(e, p, {
		get: ((e) => o[e]).bind(null, p),
		enumerable: !(l = __getOwnPropDesc(o, p)) || l.enumerable
	});
	return e;
}, __toESM = (i, a, s) => (s = i == null ? {} : __create(__getProtoOf(i)), __copyProps(a || !i || !i.__esModule ? __defProp(s, "default", {
	value: i,
	enumerable: !0
}) : s, i)), __require = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, n) => (typeof require < "u" ? require : e)[n] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function.");
}), is_array = Array.isArray, index_of = Array.prototype.indexOf, array_from = Array.from;
Object.keys;
var define_property = Object.defineProperty, get_descriptor = Object.getOwnPropertyDescriptor, get_descriptors = Object.getOwnPropertyDescriptors, object_prototype = Object.prototype, array_prototype = Array.prototype, get_prototype_of = Object.getPrototypeOf, is_extensible = Object.isExtensible;
function is_function(e) {
	return typeof e == "function";
}
const noop$1 = () => {};
function run_all(e) {
	for (var n = 0; n < e.length; n++) e[n]();
}
function deferred() {
	var e, n;
	return {
		promise: new Promise((i, a) => {
			e = i, n = a;
		}),
		resolve: e,
		reject: n
	};
}
function to_array(e, n) {
	if (Array.isArray(e)) return e;
	if (n === void 0 || !(Symbol.iterator in e)) return Array.from(e);
	let i = [];
	for (let a of e) if (i.push(a), i.length === n) break;
	return i;
}
const STATE_SYMBOL = Symbol("$state"), LEGACY_PROPS = Symbol("legacy props"), LOADING_ATTR_SYMBOL = Symbol(""), STALE_REACTION = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function lifecycle_outside_component(e) {
	throw Error("https://svelte.dev/e/lifecycle_outside_component");
}
function async_derived_orphan() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function effect_in_teardown(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function effect_in_unowned_derived() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function effect_orphan(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function effect_update_depth_exceeded() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function props_invalid_value(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function state_descriptors_fixed() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function state_prototype_fixed() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function state_unsafe_mutation() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function svelte_boundary_reset_onerror() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const HYDRATION_ERROR = {}, UNINITIALIZED = Symbol();
function hydration_mismatch(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function select_multiple_invalid_value() {
	console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function svelte_boundary_reset_noop() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let hydrating = !1;
function set_hydrating(e) {
	hydrating = e;
}
let hydrate_node;
function set_hydrate_node(e) {
	if (e === null) throw hydration_mismatch(), HYDRATION_ERROR;
	return hydrate_node = e;
}
function hydrate_next() {
	return set_hydrate_node(/* @__PURE__ */ get_next_sibling(hydrate_node));
}
function reset(e) {
	if (hydrating) {
		if (/* @__PURE__ */ get_next_sibling(hydrate_node) !== null) throw hydration_mismatch(), HYDRATION_ERROR;
		hydrate_node = e;
	}
}
function next(e = 1) {
	if (hydrating) {
		for (var n = e, i = hydrate_node; n--;) i = /* @__PURE__ */ get_next_sibling(i);
		hydrate_node = i;
	}
}
function skip_nodes(e = !0) {
	for (var n = 0, i = hydrate_node;;) {
		if (i.nodeType === 8) {
			var a = i.data;
			if (a === "]") {
				if (n === 0) return i;
				--n;
			} else (a === "[" || a === "[!") && (n += 1);
		}
		var o = /* @__PURE__ */ get_next_sibling(i);
		e && i.remove(), i = o;
	}
}
function read_hydration_instruction(e) {
	if (!e || e.nodeType !== 8) throw hydration_mismatch(), HYDRATION_ERROR;
	return e.data;
}
function equals(e) {
	return e === this.v;
}
function safe_not_equal(e, n) {
	return e == e ? e !== n || typeof e == "object" && !!e || typeof e == "function" : n == n;
}
function not_equal(e, n) {
	return e !== n;
}
function safe_equals(e) {
	return !safe_not_equal(e, this.v);
}
let component_context = null;
function set_component_context(e) {
	component_context = e;
}
function getContext(e) {
	return get_or_init_context_map("getContext").get(e);
}
function setContext(e, n) {
	return get_or_init_context_map("setContext").set(e, n), n;
}
function hasContext(e) {
	return get_or_init_context_map("hasContext").has(e);
}
function getAllContexts() {
	return get_or_init_context_map("getAllContexts");
}
function push(e, n = !1, i) {
	component_context = {
		p: component_context,
		c: null,
		e: null,
		s: e,
		x: null,
		l: null
	};
}
function pop(e) {
	var n = component_context, i = n.e;
	if (i !== null) {
		n.e = null;
		for (var a of i) create_user_effect(a);
	}
	return e !== void 0 && (n.x = e), component_context = n.p, e ?? {};
}
function is_runes() {
	return !0;
}
function get_or_init_context_map(e) {
	return component_context === null && lifecycle_outside_component(e), component_context.c ??= new Map(get_parent_context(component_context) || void 0);
}
function get_parent_context(e) {
	let n = e.p;
	for (; n !== null;) {
		let e = n.c;
		if (e !== null) return e;
		n = n.p;
	}
	return null;
}
var request_idle_callback = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback, micro_tasks = [], idle_tasks = [];
function run_micro_tasks() {
	var e = micro_tasks;
	micro_tasks = [], run_all(e);
}
function run_idle_tasks() {
	var e = idle_tasks;
	idle_tasks = [], run_all(e);
}
function has_pending_tasks() {
	return micro_tasks.length > 0 || idle_tasks.length > 0;
}
function queue_micro_task(e) {
	if (micro_tasks.length === 0 && !is_flushing_sync) {
		var n = micro_tasks;
		queueMicrotask(() => {
			n === micro_tasks && run_micro_tasks();
		});
	}
	micro_tasks.push(e);
}
function queue_idle_task(e) {
	idle_tasks.length === 0 && request_idle_callback(run_idle_tasks), idle_tasks.push(e);
}
function flush_tasks() {
	micro_tasks.length > 0 && run_micro_tasks(), idle_tasks.length > 0 && run_idle_tasks();
}
var adjustments = /* @__PURE__ */ new WeakMap();
function handle_error(e) {
	var n = active_effect;
	if (n === null) return active_reaction.f |= 8388608, e;
	if (n.f & 32768) invoke_error_boundary(e, n);
	else {
		if (!(n.f & 128)) throw !n.parent && e instanceof Error && apply_adjustments(e), e;
		n.b.error(e);
	}
}
function invoke_error_boundary(e, n) {
	for (; n !== null;) {
		if (n.f & 128) try {
			n.b.error(e);
			return;
		} catch (n) {
			e = n;
		}
		n = n.parent;
	}
	throw e instanceof Error && apply_adjustments(e), e;
}
function apply_adjustments(e) {
	let n = adjustments.get(e);
	n && (define_property(e, "message", { value: n.message }), define_property(e, "stack", { value: n.stack }));
}
var batches = /* @__PURE__ */ new Set();
let current_batch = null, previous_batch = null, batch_deriveds = null, effect_pending_updates = /* @__PURE__ */ new Set();
var queued_root_effects = [], last_scheduled_effect = null, is_flushing = !1;
let is_flushing_sync = !1;
var Batch = class e {
	current = /* @__PURE__ */ new Map();
	#previous = /* @__PURE__ */ new Map();
	#callbacks = /* @__PURE__ */ new Set();
	#pending = 0;
	#deferred = null;
	#neutered = !1;
	#async_effects = [];
	#boundary_async_effects = [];
	#render_effects = [];
	#effects = [];
	#block_effects = [];
	#dirty_effects = [];
	#maybe_dirty_effects = [];
	skipped_effects = /* @__PURE__ */ new Set();
	process(e) {
		queued_root_effects = [], previous_batch = null;
		var n = null;
		for (let n of e) this.#traverse_effect_tree(n);
		if (this.#async_effects.length === 0 && this.#pending === 0) {
			this.#commit();
			var i = this.#render_effects, a = this.#effects;
			this.#render_effects = [], this.#effects = [], this.#block_effects = [], previous_batch = current_batch, current_batch = null, flush_queued_effects(i), flush_queued_effects(a), current_batch === null ? current_batch = this : batches.delete(this), this.#deferred?.resolve();
		} else this.#defer_effects(this.#render_effects), this.#defer_effects(this.#effects), this.#defer_effects(this.#block_effects);
		if (n) {
			for (let [e, { v: i, wv: a }] of n) e.wv <= a && (e.v = i);
			batch_deriveds = null;
		}
		for (let e of this.#async_effects) update_effect(e);
		for (let e of this.#boundary_async_effects) update_effect(e);
		this.#async_effects = [], this.#boundary_async_effects = [];
	}
	#traverse_effect_tree(e) {
		e.f ^= 1024;
		for (var n = e.first; n !== null;) {
			var i = n.f, a = (i & 96) != 0;
			if (!(a && i & 1024 || i & 8192 || this.skipped_effects.has(n)) && n.fn !== null) {
				a ? n.f ^= 1024 : i & 4 ? this.#effects.push(n) : i & 1024 || (i & 4194304 ? (n.b?.is_pending() ? this.#boundary_async_effects : this.#async_effects).push(n) : is_dirty(n) && (n.f & 16 && this.#block_effects.push(n), update_effect(n)));
				var o = n.first;
				if (o !== null) {
					n = o;
					continue;
				}
			}
			var s = n.parent;
			for (n = n.next; n === null && s !== null;) n = s.next, s = s.parent;
		}
	}
	#defer_effects(e) {
		for (let n of e) (n.f & 2048 ? this.#dirty_effects : this.#maybe_dirty_effects).push(n), set_signal_status(n, 1024);
		e.length = 0;
	}
	capture(e, n) {
		this.#previous.has(e) || this.#previous.set(e, n), this.current.set(e, e.v);
	}
	activate() {
		current_batch = this;
	}
	deactivate() {
		current_batch = null, previous_batch = null;
		for (let e of effect_pending_updates) if (effect_pending_updates.delete(e), e(), current_batch !== null) break;
	}
	neuter() {
		this.#neutered = !0;
	}
	flush() {
		queued_root_effects.length > 0 ? flush_effects() : this.#commit(), current_batch === this && (this.#pending === 0 && batches.delete(this), this.deactivate());
	}
	#commit() {
		if (!this.#neutered) for (let e of this.#callbacks) e();
		this.#callbacks.clear();
	}
	increment() {
		this.#pending += 1;
	}
	decrement() {
		if (--this.#pending, this.#pending === 0) {
			for (let e of this.#dirty_effects) set_signal_status(e, 2048), schedule_effect(e);
			for (let e of this.#maybe_dirty_effects) set_signal_status(e, 4096), schedule_effect(e);
			this.#render_effects = [], this.#effects = [], this.flush();
		} else this.deactivate();
	}
	add_callback(e) {
		this.#callbacks.add(e);
	}
	settled() {
		return (this.#deferred ??= deferred()).promise;
	}
	static ensure() {
		if (current_batch === null) {
			let n = current_batch = new e();
			batches.add(current_batch), is_flushing_sync || e.enqueue(() => {
				current_batch === n && n.flush();
			});
		}
		return current_batch;
	}
	static enqueue(e) {
		queue_micro_task(e);
	}
};
function flushSync(e) {
	var n = is_flushing_sync;
	is_flushing_sync = !0;
	try {
		var i;
		for (e && (flush_effects(), i = e());;) {
			if (flush_tasks(), queued_root_effects.length === 0 && !has_pending_tasks() && (current_batch?.flush(), queued_root_effects.length === 0)) return last_scheduled_effect = null, i;
			flush_effects();
		}
	} finally {
		is_flushing_sync = n;
	}
}
function flush_effects() {
	var e = is_updating_effect;
	is_flushing = !0;
	try {
		var n = 0;
		for (set_is_updating_effect(!0); queued_root_effects.length > 0;) {
			var i = Batch.ensure();
			n++ > 1e3 && infinite_loop_guard(), i.process(queued_root_effects), old_values.clear();
		}
	} finally {
		is_flushing = !1, set_is_updating_effect(e), last_scheduled_effect = null;
	}
}
function infinite_loop_guard() {
	try {
		effect_update_depth_exceeded();
	} catch (e) {
		invoke_error_boundary(e, last_scheduled_effect);
	}
}
let eager_block_effects = null;
function flush_queued_effects(e) {
	var n = e.length;
	if (n !== 0) {
		for (var i = 0; i < n;) {
			var a = e[i++];
			if (!(a.f & 24576) && is_dirty(a) && (eager_block_effects = [], update_effect(a), a.deps === null && a.first === null && a.nodes_start === null && (a.teardown === null && a.ac === null ? unlink_effect(a) : a.fn = null), eager_block_effects?.length > 0)) {
				old_values.clear();
				for (let e of eager_block_effects) update_effect(e);
				eager_block_effects = [];
			}
		}
		eager_block_effects = null;
	}
}
function schedule_effect(e) {
	for (var n = last_scheduled_effect = e; n.parent !== null;) {
		n = n.parent;
		var i = n.f;
		if (is_flushing && n === active_effect && i & 16) return;
		if (i & 96) {
			if (!(i & 1024)) return;
			n.f ^= 1024;
		}
	}
	queued_root_effects.push(n);
}
function createSubscriber(e) {
	let n = 0, i = source(0), a;
	return () => {
		effect_tracking() && (get$2(i), render_effect(() => (n === 0 && (a = untrack(() => e(() => increment(i)))), n += 1, () => {
			queue_micro_task(() => {
				--n, n === 0 && (a?.(), a = void 0, increment(i));
			});
		})));
	};
}
var flags = 589952;
function boundary(e, n, i) {
	new Boundary(e, n, i);
}
var Boundary = class {
	parent;
	#pending = !1;
	#anchor;
	#hydrate_open = hydrating ? hydrate_node : null;
	#props;
	#children;
	#effect;
	#main_effect = null;
	#pending_effect = null;
	#failed_effect = null;
	#offscreen_fragment = null;
	#local_pending_count = 0;
	#pending_count = 0;
	#is_creating_fallback = !1;
	#effect_pending = null;
	#effect_pending_update = () => {
		this.#effect_pending && internal_set(this.#effect_pending, this.#local_pending_count);
	};
	#effect_pending_subscriber = createSubscriber(() => (this.#effect_pending = source(this.#local_pending_count), () => {
		this.#effect_pending = null;
	}));
	constructor(e, n, i) {
		this.#anchor = e, this.#props = n, this.#children = i, this.parent = active_effect.b, this.#pending = !!this.#props.pending, this.#effect = block(() => {
			if (active_effect.b = this, hydrating) {
				let e = this.#hydrate_open;
				hydrate_next(), e.nodeType === 8 && e.data === "[!" ? this.#hydrate_pending_content() : this.#hydrate_resolved_content();
			} else {
				try {
					this.#main_effect = branch(() => i(this.#anchor));
				} catch (e) {
					this.error(e);
				}
				this.#pending_count > 0 ? this.#show_pending_snippet() : this.#pending = !1;
			}
		}, flags), hydrating && (this.#anchor = hydrate_node);
	}
	#hydrate_resolved_content() {
		try {
			this.#main_effect = branch(() => this.#children(this.#anchor));
		} catch (e) {
			this.error(e);
		}
		this.#pending = !1;
	}
	#hydrate_pending_content() {
		let e = this.#props.pending;
		e && (this.#pending_effect = branch(() => e(this.#anchor)), Batch.enqueue(() => {
			this.#main_effect = this.#run(() => (Batch.ensure(), branch(() => this.#children(this.#anchor)))), this.#pending_count > 0 ? this.#show_pending_snippet() : (pause_effect(this.#pending_effect, () => {
				this.#pending_effect = null;
			}), this.#pending = !1);
		}));
	}
	is_pending() {
		return this.#pending || !!this.parent && this.parent.is_pending();
	}
	has_pending_snippet() {
		return !!this.#props.pending;
	}
	#run(e) {
		var n = active_effect, i = active_reaction, a = component_context;
		set_active_effect(this.#effect), set_active_reaction(this.#effect), set_component_context(this.#effect.ctx);
		try {
			return e();
		} catch (e) {
			return handle_error(e), null;
		} finally {
			set_active_effect(n), set_active_reaction(i), set_component_context(a);
		}
	}
	#show_pending_snippet() {
		let e = this.#props.pending;
		this.#main_effect !== null && (this.#offscreen_fragment = document.createDocumentFragment(), move_effect(this.#main_effect, this.#offscreen_fragment)), this.#pending_effect === null && (this.#pending_effect = branch(() => e(this.#anchor)));
	}
	#update_pending_count(e) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#update_pending_count(e);
			return;
		}
		this.#pending_count += e, this.#pending_count === 0 && (this.#pending = !1, this.#pending_effect && pause_effect(this.#pending_effect, () => {
			this.#pending_effect = null;
		}), this.#offscreen_fragment &&= (this.#anchor.before(this.#offscreen_fragment), null));
	}
	update_pending_count(e) {
		this.#update_pending_count(e), this.#local_pending_count += e, effect_pending_updates.add(this.#effect_pending_update);
	}
	get_effect_pending() {
		return this.#effect_pending_subscriber(), get$2(this.#effect_pending);
	}
	error(e) {
		var n = this.#props.onerror;
		let i = this.#props.failed;
		if (this.#is_creating_fallback || !n && !i) throw e;
		this.#main_effect &&= (destroy_effect(this.#main_effect), null), this.#pending_effect &&= (destroy_effect(this.#pending_effect), null), this.#failed_effect &&= (destroy_effect(this.#failed_effect), null), hydrating && (set_hydrate_node(this.#hydrate_open), next(), set_hydrate_node(skip_nodes()));
		var a = !1, o = !1;
		let s = () => {
			if (a) {
				svelte_boundary_reset_noop();
				return;
			}
			a = !0, o && svelte_boundary_reset_onerror(), Batch.ensure(), this.#local_pending_count = 0, this.#failed_effect !== null && pause_effect(this.#failed_effect, () => {
				this.#failed_effect = null;
			}), this.#pending = this.has_pending_snippet(), this.#main_effect = this.#run(() => (this.#is_creating_fallback = !1, branch(() => this.#children(this.#anchor)))), this.#pending_count > 0 ? this.#show_pending_snippet() : this.#pending = !1;
		};
		var c = active_reaction;
		try {
			set_active_reaction(null), o = !0, n?.(e, s), o = !1;
		} catch (e) {
			invoke_error_boundary(e, this.#effect && this.#effect.parent);
		} finally {
			set_active_reaction(c);
		}
		i && queue_micro_task(() => {
			this.#failed_effect = this.#run(() => {
				this.#is_creating_fallback = !0;
				try {
					return branch(() => {
						i(this.#anchor, () => e, () => s);
					});
				} catch (e) {
					return invoke_error_boundary(e, this.#effect.parent), null;
				} finally {
					this.#is_creating_fallback = !1;
				}
			});
		});
	}
};
function move_effect(e, n) {
	for (var i = e.nodes_start, a = e.nodes_end; i !== null;) {
		var o = i === a ? null : /* @__PURE__ */ get_next_sibling(i);
		n.append(i), i = o;
	}
}
function flatten(e, n, i) {
	let a = is_runes() ? derived : derived_safe_equal;
	if (n.length === 0) {
		i(e.map(a));
		return;
	}
	var o = current_batch, s = active_effect, c = capture(), l = hydrating;
	Promise.all(n.map((e) => /* @__PURE__ */ async_derived(e))).then((n) => {
		o?.activate(), c();
		try {
			i([...e.map(a), ...n]);
		} catch (e) {
			s.f & 16384 || invoke_error_boundary(e, s);
		}
		l && set_hydrating(!1), o?.deactivate(), unset_context();
	}).catch((e) => {
		invoke_error_boundary(e, s);
	});
}
function capture() {
	var e = active_effect, n = active_reaction, i = component_context, a = current_batch, o = hydrating;
	if (o) var s = hydrate_node;
	return function() {
		set_active_effect(e), set_active_reaction(n), set_component_context(i), a?.activate(), o && (set_hydrating(!0), set_hydrate_node(s));
	};
}
function unset_context() {
	set_active_effect(null), set_active_reaction(null), set_component_context(null);
}
/* @__NO_SIDE_EFFECTS__ */
function derived(e) {
	var n = 2050, i = active_reaction !== null && active_reaction.f & 2 ? active_reaction : null;
	return active_effect === null || i !== null && i.f & 256 ? n |= 256 : active_effect.f |= 524288, {
		ctx: component_context,
		deps: null,
		effects: null,
		equals,
		f: n,
		fn: e,
		reactions: null,
		rv: 0,
		v: UNINITIALIZED,
		wv: 0,
		parent: i ?? active_effect,
		ac: null
	};
}
/* @__NO_SIDE_EFFECTS__ */
function async_derived(e, n) {
	let i = active_effect;
	i === null && async_derived_orphan();
	var a = i.b, o = void 0, s = source(UNINITIALIZED), c = null, l = !active_reaction;
	return async_effect(() => {
		try {
			var n = e();
			c && Promise.resolve(n).catch(() => {});
		} catch (e) {
			n = Promise.reject(e);
		}
		var i = () => n;
		o = c?.then(i, i) ?? Promise.resolve(n), c = o;
		var u = current_batch, d = a.is_pending();
		l && (a.update_pending_count(1), d || u.increment());
		let f = (e, n = void 0) => {
			c = null, d || u.activate(), n ? n !== STALE_REACTION && (s.f |= 8388608, internal_set(s, n)) : (s.f & 8388608 && (s.f ^= 8388608), internal_set(s, e)), l && (a.update_pending_count(-1), d || u.decrement()), unset_context();
		};
		if (o.then(f, (e) => f(null, e || "unknown")), u) return () => {
			queueMicrotask(() => u.neuter());
		};
	}), new Promise((e) => {
		function n(i) {
			function a() {
				i === o ? e(s) : n(o);
			}
			i.then(a, a);
		}
		n(o);
	});
}
/* @__NO_SIDE_EFFECTS__ */
function user_derived(e) {
	let n = /* @__PURE__ */ derived(e);
	return push_reaction_value(n), n;
}
/* @__NO_SIDE_EFFECTS__ */
function derived_safe_equal(e) {
	let n = /* @__PURE__ */ derived(e);
	return n.equals = safe_equals, n;
}
function destroy_derived_effects(e) {
	var n = e.effects;
	if (n !== null) {
		e.effects = null;
		for (var i = 0; i < n.length; i += 1) destroy_effect(n[i]);
	}
}
function get_derived_parent_effect(e) {
	for (var n = e.parent; n !== null;) {
		if (!(n.f & 2)) return n;
		n = n.parent;
	}
	return null;
}
function execute_derived(e) {
	var n, i = active_effect;
	set_active_effect(get_derived_parent_effect(e));
	try {
		destroy_derived_effects(e), n = update_reaction(e);
	} finally {
		set_active_effect(i);
	}
	return n;
}
function update_derived(e) {
	var n = execute_derived(e);
	if (e.equals(n) || (e.v = n, e.wv = increment_write_version()), !is_destroying_effect) if (batch_deriveds !== null) batch_deriveds.set(e, e.v);
	else {
		var i = (skip_reaction || e.f & 256) && e.deps !== null ? 4096 : 1024;
		set_signal_status(e, i);
	}
}
const old_values = /* @__PURE__ */ new Map();
function source(e, n) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals,
		rv: 0,
		wv: 0
	};
}
/* @__NO_SIDE_EFFECTS__ */
function state(e, n) {
	let i = source(e, n);
	return push_reaction_value(i), i;
}
/* @__NO_SIDE_EFFECTS__ */
function mutable_source(e, n = !1, i = !0) {
	let a = source(e);
	return n || (a.equals = safe_equals), a;
}
function set(e, n, i = !1) {
	active_reaction !== null && (!untracking || active_reaction.f & 131072) && is_runes() && active_reaction.f & 4325394 && !current_sources?.includes(e) && state_unsafe_mutation();
	let a = i ? proxy(n) : n;
	return internal_set(e, a);
}
function internal_set(e, n) {
	if (!e.equals(n)) {
		var i = e.v;
		is_destroying_effect ? old_values.set(e, n) : old_values.set(e, i), e.v = n, Batch.ensure().capture(e, i), e.f & 2 && (e.f & 2048 && execute_derived(e), set_signal_status(e, e.f & 256 ? 4096 : 1024)), e.wv = increment_write_version(), mark_reactions(e, 2048), is_runes() && active_effect !== null && active_effect.f & 1024 && !(active_effect.f & 96) && (untracked_writes === null ? set_untracked_writes([e]) : untracked_writes.push(e));
	}
	return n;
}
function update(e, n = 1) {
	var i = get$2(e), a = n === 1 ? i++ : i--;
	return set(e, i), a;
}
function increment(e) {
	set(e, e.v + 1);
}
function mark_reactions(e, n) {
	var i = e.reactions;
	if (i !== null) for (var a = is_runes(), o = i.length, s = 0; s < o; s++) {
		var c = i[s], l = c.f;
		if (!(!a && c === active_effect)) {
			var u = (l & 2048) == 0;
			u && set_signal_status(c, n), l & 2 ? mark_reactions(c, 4096) : u && (l & 16 && eager_block_effects !== null && eager_block_effects.push(c), schedule_effect(c));
		}
	}
}
function proxy(e) {
	if (typeof e != "object" || !e || STATE_SYMBOL in e) return e;
	let n = get_prototype_of(e);
	if (n !== object_prototype && n !== array_prototype) return e;
	var i = /* @__PURE__ */ new Map(), a = is_array(e), o = /* @__PURE__ */ state(0), s = null, c = update_version, l = (e) => {
		if (update_version === c) return e();
		var n = active_reaction, i = update_version;
		set_active_reaction(null), set_update_version(c);
		var a = e();
		return set_active_reaction(n), set_update_version(i), a;
	};
	return a && i.set("length", /* @__PURE__ */ state(e.length, s)), new Proxy(e, {
		defineProperty(e, n, a) {
			(!("value" in a) || a.configurable === !1 || a.enumerable === !1 || a.writable === !1) && state_descriptors_fixed();
			var o = i.get(n);
			return o === void 0 ? o = l(() => {
				var e = /* @__PURE__ */ state(a.value, s);
				return i.set(n, e), e;
			}) : set(o, a.value, !0), !0;
		},
		deleteProperty(e, n) {
			var a = i.get(n);
			if (a === void 0) {
				if (n in e) {
					let e = l(() => /* @__PURE__ */ state(UNINITIALIZED, s));
					i.set(n, e), increment(o);
				}
			} else set(a, UNINITIALIZED), increment(o);
			return !0;
		},
		get(n, a, o) {
			if (a === STATE_SYMBOL) return e;
			var c = i.get(a), u = a in n;
			if (c === void 0 && (!u || get_descriptor(n, a)?.writable) && (c = l(() => {
				var e = proxy(u ? n[a] : UNINITIALIZED);
				return /* @__PURE__ */ state(e, s);
			}), i.set(a, c)), c !== void 0) {
				var d = get$2(c);
				return d === UNINITIALIZED ? void 0 : d;
			}
			return Reflect.get(n, a, o);
		},
		getOwnPropertyDescriptor(e, n) {
			var a = Reflect.getOwnPropertyDescriptor(e, n);
			if (a && "value" in a) {
				var o = i.get(n);
				o && (a.value = get$2(o));
			} else if (a === void 0) {
				var s = i.get(n), c = s?.v;
				if (s !== void 0 && c !== UNINITIALIZED) return {
					enumerable: !0,
					configurable: !0,
					value: c,
					writable: !0
				};
			}
			return a;
		},
		has(e, n) {
			if (n === STATE_SYMBOL) return !0;
			var a = i.get(n), o = a !== void 0 && a.v !== UNINITIALIZED || Reflect.has(e, n);
			return (a !== void 0 || active_effect !== null && (!o || get_descriptor(e, n)?.writable)) && (a === void 0 && (a = l(() => {
				var i = o ? proxy(e[n]) : UNINITIALIZED;
				return /* @__PURE__ */ state(i, s);
			}), i.set(n, a)), get$2(a) === UNINITIALIZED) ? !1 : o;
		},
		set(e, n, c, u) {
			var d = i.get(n), f = n in e;
			if (a && n === "length") for (var p = c; p < d.v; p += 1) {
				var m = i.get(p + "");
				m === void 0 ? p in e && (m = l(() => /* @__PURE__ */ state(UNINITIALIZED, s)), i.set(p + "", m)) : set(m, UNINITIALIZED);
			}
			if (d === void 0) (!f || get_descriptor(e, n)?.writable) && (d = l(() => /* @__PURE__ */ state(void 0, s)), set(d, proxy(c)), i.set(n, d));
			else {
				f = d.v !== UNINITIALIZED;
				var h = l(() => proxy(c));
				set(d, h);
			}
			var _ = Reflect.getOwnPropertyDescriptor(e, n);
			if (_?.set && _.set.call(u, c), !f) {
				if (a && typeof n == "string") {
					var v = i.get("length"), y = Number(n);
					Number.isInteger(y) && y >= v.v && set(v, y + 1);
				}
				increment(o);
			}
			return !0;
		},
		ownKeys(e) {
			get$2(o);
			var n = Reflect.ownKeys(e).filter((e) => {
				var n = i.get(e);
				return n === void 0 || n.v !== UNINITIALIZED;
			});
			for (var [a, s] of i) s.v !== UNINITIALIZED && !(a in e) && n.push(a);
			return n;
		},
		setPrototypeOf() {
			state_prototype_fixed();
		}
	});
}
function get_proxied_value(e) {
	try {
		if (typeof e == "object" && e && STATE_SYMBOL in e) return e[STATE_SYMBOL];
	} catch {}
	return e;
}
function is(e, n) {
	return Object.is(get_proxied_value(e), get_proxied_value(n));
}
var $window, is_firefox, first_child_getter, next_sibling_getter;
function init_operations() {
	if ($window === void 0) {
		$window = window, document, is_firefox = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, n = Node.prototype, i = Text.prototype;
		first_child_getter = get_descriptor(n, "firstChild").get, next_sibling_getter = get_descriptor(n, "nextSibling").get, is_extensible(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), is_extensible(i) && (i.__t = void 0);
	}
}
function create_text(e = "") {
	return document.createTextNode(e);
}
/* @__NO_SIDE_EFFECTS__ */
function get_first_child(e) {
	return first_child_getter.call(e);
}
/* @__NO_SIDE_EFFECTS__ */
function get_next_sibling(e) {
	return next_sibling_getter.call(e);
}
function child(e, n) {
	if (!hydrating) return /* @__PURE__ */ get_first_child(e);
	var i = /* @__PURE__ */ get_first_child(hydrate_node);
	if (i === null) i = hydrate_node.appendChild(create_text());
	else if (n && i.nodeType !== 3) {
		var a = create_text();
		return i?.before(a), set_hydrate_node(a), a;
	}
	return set_hydrate_node(i), i;
}
function first_child(e, n = !1) {
	if (!hydrating) {
		var i = /* @__PURE__ */ get_first_child(e);
		return i instanceof Comment && i.data === "" ? /* @__PURE__ */ get_next_sibling(i) : i;
	}
	if (n && hydrate_node?.nodeType !== 3) {
		var a = create_text();
		return hydrate_node?.before(a), set_hydrate_node(a), a;
	}
	return hydrate_node;
}
function sibling(e, n = 1, i = !1) {
	let a = hydrating ? hydrate_node : e;
	for (var o; n--;) o = a, a = /* @__PURE__ */ get_next_sibling(a);
	if (!hydrating) return a;
	if (i && a?.nodeType !== 3) {
		var s = create_text();
		return a === null ? o?.after(s) : a.before(s), set_hydrate_node(s), s;
	}
	return set_hydrate_node(a), a;
}
function clear_text_content(e) {
	e.textContent = "";
}
function should_defer_append() {
	return !1;
}
function autofocus(e, n) {
	if (n) {
		let n = document.body;
		e.autofocus = !0, queue_micro_task(() => {
			document.activeElement === n && e.focus();
		});
	}
}
var listening_to_form_reset = !1;
function add_form_reset_listener() {
	listening_to_form_reset || (listening_to_form_reset = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let n of e.target.elements) n.__on_r?.();
		});
	}, { capture: !0 }));
}
function without_reactive_context(e) {
	var n = active_reaction, i = active_effect;
	set_active_reaction(null), set_active_effect(null);
	try {
		return e();
	} finally {
		set_active_reaction(n), set_active_effect(i);
	}
}
function listen_to_event_and_reset_event(e, n, i, a = i) {
	e.addEventListener(n, () => without_reactive_context(i));
	let o = e.__on_r;
	o ? e.__on_r = () => {
		o(), a(!0);
	} : e.__on_r = () => a(!0), add_form_reset_listener();
}
function validate_effect(e) {
	active_effect === null && active_reaction === null && effect_orphan(e), active_reaction !== null && active_reaction.f & 256 && active_effect === null && effect_in_unowned_derived(), is_destroying_effect && effect_in_teardown(e);
}
function push_effect(e, n) {
	var i = n.last;
	i === null ? n.last = n.first = e : (i.next = e, e.prev = i, n.last = e);
}
function create_effect(e, n, i, a = !0) {
	var o = active_effect;
	o !== null && o.f & 8192 && (e |= 8192);
	var s = {
		ctx: component_context,
		deps: null,
		nodes_start: null,
		nodes_end: null,
		f: e | 2048,
		first: null,
		fn: n,
		last: null,
		next: null,
		parent: o,
		b: o && o.b,
		prev: null,
		teardown: null,
		transitions: null,
		wv: 0,
		ac: null
	};
	if (i) try {
		update_effect(s), s.f |= 32768;
	} catch (e) {
		throw destroy_effect(s), e;
	}
	else n !== null && schedule_effect(s);
	if (a) {
		var c = s;
		if (i && c.deps === null && c.teardown === null && c.nodes_start === null && c.first === c.last && !(c.f & 524288) && (c = c.first), c !== null && (c.parent = o, o !== null && push_effect(c, o), active_reaction !== null && active_reaction.f & 2 && !(e & 64))) {
			var l = active_reaction;
			(l.effects ??= []).push(c);
		}
	}
	return s;
}
function effect_tracking() {
	return active_reaction !== null && !untracking;
}
function teardown(e) {
	let n = create_effect(8, null, !1);
	return set_signal_status(n, 1024), n.teardown = e, n;
}
function user_effect(e) {
	validate_effect("$effect");
	var n = active_effect.f;
	if (!active_reaction && n & 32 && !(n & 32768)) {
		var i = component_context;
		(i.e ??= []).push(e);
	} else return create_user_effect(e);
}
function create_user_effect(e) {
	return create_effect(1048580, e, !1);
}
function user_pre_effect(e) {
	return validate_effect("$effect.pre"), create_effect(1048584, e, !0);
}
function effect_root(e) {
	Batch.ensure();
	let n = create_effect(524352, e, !0);
	return () => {
		destroy_effect(n);
	};
}
function component_root(e) {
	Batch.ensure();
	let n = create_effect(524352, e, !0);
	return (e = {}) => new Promise((i) => {
		e.outro ? pause_effect(n, () => {
			destroy_effect(n), i(void 0);
		}) : (destroy_effect(n), i(void 0));
	});
}
function effect(e) {
	return create_effect(4, e, !1);
}
function async_effect(e) {
	return create_effect(4718592, e, !0);
}
function render_effect(e, n = 0) {
	return create_effect(8 | n, e, !0);
}
function template_effect(e, n = [], i = []) {
	flatten(n, i, (n) => {
		create_effect(8, () => e(...n.map(get$2)), !0);
	});
}
function block(e, n = 0) {
	return create_effect(16 | n, e, !0);
}
function branch(e, n = !0) {
	return create_effect(524320, e, !0, n);
}
function execute_effect_teardown(e) {
	var n = e.teardown;
	if (n !== null) {
		let e = is_destroying_effect, i = active_reaction;
		set_is_destroying_effect(!0), set_active_reaction(null);
		try {
			n.call(null);
		} finally {
			set_is_destroying_effect(e), set_active_reaction(i);
		}
	}
}
function destroy_effect_children(e, n = !1) {
	var i = e.first;
	for (e.first = e.last = null; i !== null;) {
		let e = i.ac;
		e !== null && without_reactive_context(() => {
			e.abort(STALE_REACTION);
		});
		var a = i.next;
		i.f & 64 ? i.parent = null : destroy_effect(i, n), i = a;
	}
}
function destroy_block_effect_children(e) {
	for (var n = e.first; n !== null;) {
		var i = n.next;
		n.f & 32 || destroy_effect(n), n = i;
	}
}
function destroy_effect(e, n = !0) {
	var i = !1;
	(n || e.f & 262144) && e.nodes_start !== null && e.nodes_end !== null && (remove_effect_dom(e.nodes_start, e.nodes_end), i = !0), destroy_effect_children(e, n && !i), remove_reactions(e, 0), set_signal_status(e, 16384);
	var a = e.transitions;
	if (a !== null) for (let e of a) e.stop();
	execute_effect_teardown(e);
	var o = e.parent;
	o !== null && o.first !== null && unlink_effect(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function remove_effect_dom(e, n) {
	for (; e !== null;) {
		var i = e === n ? null : /* @__PURE__ */ get_next_sibling(e);
		e.remove(), e = i;
	}
}
function unlink_effect(e) {
	var n = e.parent, i = e.prev, a = e.next;
	i !== null && (i.next = a), a !== null && (a.prev = i), n !== null && (n.first === e && (n.first = a), n.last === e && (n.last = i));
}
function pause_effect(e, n) {
	var i = [];
	pause_children(e, i, !0), run_out_transitions(i, () => {
		destroy_effect(e), n && n();
	});
}
function run_out_transitions(e, n) {
	var i = e.length;
	if (i > 0) {
		var a = () => --i || n();
		for (var o of e) o.out(a);
	} else n();
}
function pause_children(e, n, i) {
	if (!(e.f & 8192)) {
		if (e.f ^= 8192, e.transitions !== null) for (let a of e.transitions) (a.is_global || i) && n.push(a);
		for (var a = e.first; a !== null;) {
			var o = a.next, s = (a.f & 65536) != 0 || (a.f & 32) != 0;
			pause_children(a, n, s ? i : !1), a = o;
		}
	}
}
function resume_effect(e) {
	resume_children(e, !0);
}
function resume_children(e, n) {
	if (e.f & 8192) {
		e.f ^= 8192, e.f & 1024 || (set_signal_status(e, 2048), schedule_effect(e));
		for (var i = e.first; i !== null;) {
			var a = i.next, o = (i.f & 65536) != 0 || (i.f & 32) != 0;
			resume_children(i, o ? n : !1), i = a;
		}
		if (e.transitions !== null) for (let i of e.transitions) (i.is_global || n) && i.in();
	}
}
let is_updating_effect = !1;
function set_is_updating_effect(e) {
	is_updating_effect = e;
}
let is_destroying_effect = !1;
function set_is_destroying_effect(e) {
	is_destroying_effect = e;
}
let active_reaction = null, untracking = !1;
function set_active_reaction(e) {
	active_reaction = e;
}
let active_effect = null;
function set_active_effect(e) {
	active_effect = e;
}
let current_sources = null;
function push_reaction_value(e) {
	active_reaction !== null && (current_sources === null ? current_sources = [e] : current_sources.push(e));
}
var new_deps = null, skipped_deps = 0;
let untracked_writes = null;
function set_untracked_writes(e) {
	untracked_writes = e;
}
let write_version = 1;
var read_version = 0;
let update_version = read_version;
function set_update_version(e) {
	update_version = e;
}
let skip_reaction = !1;
function increment_write_version() {
	return ++write_version;
}
function is_dirty(e) {
	var n = e.f;
	if (n & 2048) return !0;
	if (n & 4096) {
		var i = e.deps, a = (n & 256) != 0;
		if (i !== null) {
			var o, s, c = (n & 512) != 0, l = a && active_effect !== null && !skip_reaction, u = i.length;
			if ((c || l) && (active_effect === null || !(active_effect.f & 16384))) {
				var d = e, f = d.parent;
				for (o = 0; o < u; o++) s = i[o], (c || !s?.reactions?.includes(d)) && (s.reactions ??= []).push(d);
				c && (d.f ^= 512), l && f !== null && !(f.f & 256) && (d.f ^= 256);
			}
			for (o = 0; o < u; o++) if (s = i[o], is_dirty(s) && update_derived(s), s.wv > e.wv) return !0;
		}
		(!a || active_effect !== null && !skip_reaction) && set_signal_status(e, 1024);
	}
	return !1;
}
function schedule_possible_effect_self_invalidation(e, n, i = !0) {
	var a = e.reactions;
	if (a !== null && !current_sources?.includes(e)) for (var o = 0; o < a.length; o++) {
		var s = a[o];
		s.f & 2 ? schedule_possible_effect_self_invalidation(s, n, !1) : n === s && (i ? set_signal_status(s, 2048) : s.f & 1024 && set_signal_status(s, 4096), schedule_effect(s));
	}
}
function update_reaction(e) {
	var n = new_deps, i = skipped_deps, a = untracked_writes, o = active_reaction, s = skip_reaction, c = current_sources, l = component_context, u = untracking, d = update_version, f = e.f;
	new_deps = null, skipped_deps = 0, untracked_writes = null, skip_reaction = (f & 256) != 0 && (untracking || !is_updating_effect || active_reaction === null), active_reaction = f & 96 ? null : e, current_sources = null, set_component_context(e.ctx), untracking = !1, update_version = ++read_version, e.ac !== null && (without_reactive_context(() => {
		e.ac.abort(STALE_REACTION);
	}), e.ac = null);
	try {
		e.f |= 2097152;
		var p = e.fn, m = p(), h = e.deps;
		if (new_deps !== null) {
			var g;
			if (remove_reactions(e, skipped_deps), h !== null && skipped_deps > 0) for (h.length = skipped_deps + new_deps.length, g = 0; g < new_deps.length; g++) h[skipped_deps + g] = new_deps[g];
			else e.deps = h = new_deps;
			if (!skip_reaction || f & 2 && e.reactions !== null) for (g = skipped_deps; g < h.length; g++) (h[g].reactions ??= []).push(e);
		} else h !== null && skipped_deps < h.length && (remove_reactions(e, skipped_deps), h.length = skipped_deps);
		if (is_runes() && untracked_writes !== null && !untracking && h !== null && !(e.f & 6146)) for (g = 0; g < untracked_writes.length; g++) schedule_possible_effect_self_invalidation(untracked_writes[g], e);
		return o !== null && o !== e && (read_version++, untracked_writes !== null && (a === null ? a = untracked_writes : a.push(...untracked_writes))), e.f & 8388608 && (e.f ^= 8388608), m;
	} catch (e) {
		return handle_error(e);
	} finally {
		e.f ^= 2097152, new_deps = n, skipped_deps = i, untracked_writes = a, active_reaction = o, skip_reaction = s, current_sources = c, set_component_context(l), untracking = u, update_version = d;
	}
}
function remove_reaction(e, n) {
	let i = n.reactions;
	if (i !== null) {
		var a = index_of.call(i, e);
		if (a !== -1) {
			var o = i.length - 1;
			o === 0 ? i = n.reactions = null : (i[a] = i[o], i.pop());
		}
	}
	i === null && n.f & 2 && (new_deps === null || !new_deps.includes(n)) && (set_signal_status(n, 4096), n.f & 768 || (n.f ^= 512), destroy_derived_effects(n), remove_reactions(n, 0));
}
function remove_reactions(e, n) {
	var i = e.deps;
	if (i !== null) for (var a = n; a < i.length; a++) remove_reaction(e, i[a]);
}
function update_effect(e) {
	var n = e.f;
	if (!(n & 16384)) {
		set_signal_status(e, 1024);
		var i = active_effect, a = is_updating_effect;
		active_effect = e, is_updating_effect = !0;
		try {
			n & 16 ? destroy_block_effect_children(e) : destroy_effect_children(e), execute_effect_teardown(e);
			var o = update_reaction(e);
			e.teardown = typeof o == "function" ? o : null, e.wv = write_version;
		} finally {
			is_updating_effect = a, active_effect = i;
		}
	}
}
async function tick() {
	await Promise.resolve(), flushSync();
}
function get$2(e) {
	var n = (e.f & 2) != 0;
	if (null?.add(e), active_reaction !== null && !untracking) {
		if (!(active_effect !== null && active_effect.f & 16384) && !current_sources?.includes(e)) {
			var i = active_reaction.deps;
			if (active_reaction.f & 2097152) e.rv < read_version && (e.rv = read_version, new_deps === null && i !== null && i[skipped_deps] === e ? skipped_deps++ : new_deps === null ? new_deps = [e] : (!skip_reaction || !new_deps.includes(e)) && new_deps.push(e));
			else {
				(active_reaction.deps ??= []).push(e);
				var a = e.reactions;
				a === null ? e.reactions = [active_reaction] : a.includes(active_reaction) || a.push(active_reaction);
			}
		}
	} else if (n && e.deps === null && e.effects === null) {
		var o = e, s = o.parent;
		s !== null && !(s.f & 256) && (o.f ^= 256);
	}
	if (is_destroying_effect) {
		if (old_values.has(e)) return old_values.get(e);
		if (n) {
			o = e;
			var c = o.v;
			return (!(o.f & 1024) && o.reactions !== null || depends_on_old_values(o)) && (c = execute_derived(o)), old_values.set(o, c), c;
		}
	} else if (n) {
		if (o = e, batch_deriveds?.has(o)) return batch_deriveds.get(o);
		is_dirty(o) && update_derived(o);
	}
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function depends_on_old_values(e) {
	if (e.v === UNINITIALIZED) return !0;
	if (e.deps === null) return !1;
	for (let n of e.deps) if (old_values.has(n) || n.f & 2 && depends_on_old_values(n)) return !0;
	return !1;
}
function untrack(e) {
	var n = untracking;
	try {
		return untracking = !0, e();
	} finally {
		untracking = n;
	}
}
var STATUS_MASK = -7169;
function set_signal_status(e, n) {
	e.f = e.f & STATUS_MASK | n;
}
function createAttachmentKey() {
	return Symbol("@attach");
}
function is_capture_event(e) {
	return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
var DELEGATED_EVENTS = [
	"beforeinput",
	"click",
	"change",
	"dblclick",
	"contextmenu",
	"focusin",
	"focusout",
	"input",
	"keydown",
	"keyup",
	"mousedown",
	"mousemove",
	"mouseout",
	"mouseover",
	"mouseup",
	"pointerdown",
	"pointermove",
	"pointerout",
	"pointerover",
	"pointerup",
	"touchend",
	"touchmove",
	"touchstart"
];
function is_delegated(e) {
	return DELEGATED_EVENTS.includes(e);
}
var DOM_BOOLEAN_ATTRIBUTES = /* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split("."), ATTRIBUTE_ALIASES = {
	formnovalidate: "formNoValidate",
	ismap: "isMap",
	nomodule: "noModule",
	playsinline: "playsInline",
	readonly: "readOnly",
	defaultvalue: "defaultValue",
	defaultchecked: "defaultChecked",
	srcobject: "srcObject",
	novalidate: "noValidate",
	allowfullscreen: "allowFullscreen",
	disablepictureinpicture: "disablePictureInPicture",
	disableremoteplayback: "disableRemotePlayback"
};
function normalize_attribute(e) {
	return e = e.toLowerCase(), ATTRIBUTE_ALIASES[e] ?? e;
}
[...DOM_BOOLEAN_ATTRIBUTES];
var PASSIVE_EVENTS = ["touchstart", "touchmove"];
function is_passive_event(e) {
	return PASSIVE_EVENTS.includes(e);
}
var RAW_TEXT_ELEMENTS = [
	"textarea",
	"script",
	"style",
	"title"
];
function is_raw_text_element(e) {
	return RAW_TEXT_ELEMENTS.includes(e);
}
const all_registered_events = /* @__PURE__ */ new Set(), root_event_handles = /* @__PURE__ */ new Set();
function create_event(e, n, i, a = {}) {
	function o(e) {
		if (a.capture || handle_event_propagation.call(n, e), !e.cancelBubble) return without_reactive_context(() => i?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? queue_micro_task(() => {
		n.addEventListener(e, o, a);
	}) : n.addEventListener(e, o, a), o;
}
function on(e, n, i, a = {}) {
	var o = create_event(n, e, i, a);
	return () => {
		e.removeEventListener(n, o, a);
	};
}
function event(e, n, i, a, o) {
	var s = {
		capture: a,
		passive: o
	}, c = create_event(e, n, i, s);
	(n === document.body || n === window || n === document || n instanceof HTMLMediaElement) && teardown(() => {
		n.removeEventListener(e, c, s);
	});
}
function delegate(e) {
	for (var n = 0; n < e.length; n++) all_registered_events.add(e[n]);
	for (var i of root_event_handles) i(e);
}
var last_propagated_event = null;
function handle_event_propagation(e) {
	var n = this, i = n.ownerDocument, a = e.type, o = e.composedPath?.() || [], s = o[0] || e.target;
	last_propagated_event = e;
	var c = 0, l = last_propagated_event === e && e.__root;
	if (l) {
		var u = o.indexOf(l);
		if (u !== -1 && (n === document || n === window)) {
			e.__root = n;
			return;
		}
		var d = o.indexOf(n);
		if (d === -1) return;
		u <= d && (c = u);
	}
	if (s = o[c] || e.target, s !== n) {
		define_property(e, "currentTarget", {
			configurable: !0,
			get() {
				return s || i;
			}
		});
		var p = active_reaction, m = active_effect;
		set_active_reaction(null), set_active_effect(null);
		try {
			for (var g, _ = []; s !== null;) {
				var v = s.assignedSlot || s.parentNode || s.host || null;
				try {
					var y = s["__" + a];
					if (y != null && (!s.disabled || e.target === s)) if (is_array(y)) {
						var [b, ...x] = y;
						b.apply(s, [e, ...x]);
					} else y.call(s, e);
				} catch (e) {
					g ? _.push(e) : g = e;
				}
				if (e.cancelBubble || v === n || v === null) break;
				s = v;
			}
			if (g) {
				for (let e of _) queueMicrotask(() => {
					throw e;
				});
				throw g;
			}
		} finally {
			e.__root = n, delete e.currentTarget, set_active_reaction(p), set_active_effect(m);
		}
	}
}
function create_fragment_from_html(e) {
	var n = document.createElement("template");
	return n.innerHTML = e.replaceAll("<!>", "<!---->"), n.content;
}
function assign_nodes(e, n) {
	var i = active_effect;
	i.nodes_start === null && (i.nodes_start = e, i.nodes_end = n);
}
/* @__NO_SIDE_EFFECTS__ */
function from_html(e, n) {
	var i = (n & 1) != 0, a = (n & 2) != 0, o, s = !e.startsWith("<!>");
	return () => {
		if (hydrating) return assign_nodes(hydrate_node, null), hydrate_node;
		o === void 0 && (o = create_fragment_from_html(s ? e : "<!>" + e), i || (o = /* @__PURE__ */ get_first_child(o)));
		var n = a || is_firefox ? document.importNode(o, !0) : o.cloneNode(!0);
		if (i) {
			var c = /* @__PURE__ */ get_first_child(n), l = n.lastChild;
			assign_nodes(c, l);
		} else assign_nodes(n, n);
		return n;
	};
}
/* @__NO_SIDE_EFFECTS__ */
function from_namespace(e, n, i = "svg") {
	var a = !e.startsWith("<!>"), o = (n & 1) != 0, s = `<${i}>${a ? e : "<!>" + e}</${i}>`, c;
	return () => {
		if (hydrating) return assign_nodes(hydrate_node, null), hydrate_node;
		if (!c) {
			var e = create_fragment_from_html(s), n = /* @__PURE__ */ get_first_child(e);
			if (o) for (c = document.createDocumentFragment(); /* @__PURE__ */ get_first_child(n);) c.appendChild(/* @__PURE__ */ get_first_child(n));
			else c = /* @__PURE__ */ get_first_child(n);
		}
		var i = c.cloneNode(!0);
		if (o) {
			var a = /* @__PURE__ */ get_first_child(i), l = i.lastChild;
			assign_nodes(a, l);
		} else assign_nodes(i, i);
		return i;
	};
}
/* @__NO_SIDE_EFFECTS__ */
function from_svg(e, n) {
	return /* @__PURE__ */ from_namespace(e, n, "svg");
}
function text(e = "") {
	if (!hydrating) {
		var n = create_text(e + "");
		return assign_nodes(n, n), n;
	}
	var i = hydrate_node;
	return i.nodeType !== 3 && (i.before(i = create_text()), set_hydrate_node(i)), assign_nodes(i, i), i;
}
function comment() {
	if (hydrating) return assign_nodes(hydrate_node, null), hydrate_node;
	var e = document.createDocumentFragment(), n = document.createComment(""), i = create_text();
	return e.append(n, i), assign_nodes(n, i), e;
}
function append(e, n) {
	if (hydrating) {
		active_effect.nodes_end = hydrate_node, hydrate_next();
		return;
	}
	e !== null && e.before(n);
}
function props_id() {
	if (hydrating && hydrate_node && hydrate_node.nodeType === 8 && hydrate_node.textContent?.startsWith("$")) {
		let e = hydrate_node.textContent.substring(1);
		return hydrate_next(), e;
	}
	return (window.__svelte ??= {}).uid ??= 1, `c${window.__svelte.uid++}`;
}
function set_text(e, n) {
	var i = n == null ? "" : typeof n == "object" ? n + "" : n;
	i !== (e.__t ??= e.nodeValue) && (e.__t = i, e.nodeValue = i + "");
}
function mount(e, n) {
	return _mount(e, n);
}
var document_listeners = /* @__PURE__ */ new Map();
function _mount(e, { target: n, anchor: i, props: a = {}, events: o, context: s, intro: c = !0 }) {
	init_operations();
	var l = /* @__PURE__ */ new Set(), u = (e) => {
		for (var i = 0; i < e.length; i++) {
			var a = e[i];
			if (!l.has(a)) {
				l.add(a);
				var o = is_passive_event(a);
				n.addEventListener(a, handle_event_propagation, { passive: o });
				var s = document_listeners.get(a);
				s === void 0 ? (document.addEventListener(a, handle_event_propagation, { passive: o }), document_listeners.set(a, 1)) : document_listeners.set(a, s + 1);
			}
		}
	};
	u(array_from(all_registered_events)), root_event_handles.add(u);
	var d = void 0, f = component_root(() => {
		var c = i ?? n.appendChild(create_text());
		return boundary(c, { pending: () => {} }, (n) => {
			if (s) {
				push({});
				var i = component_context;
				i.c = s;
			}
			if (o && (a.$$events = o), hydrating && assign_nodes(n, null), d = e(n, a) || {}, hydrating && (active_effect.nodes_end = hydrate_node, hydrate_node === null || hydrate_node.nodeType !== 8 || hydrate_node.data !== "]")) throw hydration_mismatch(), HYDRATION_ERROR;
			s && pop();
		}), () => {
			for (var e of l) {
				n.removeEventListener(e, handle_event_propagation);
				var a = document_listeners.get(e);
				--a === 0 ? (document.removeEventListener(e, handle_event_propagation), document_listeners.delete(e)) : document_listeners.set(e, a);
			}
			root_event_handles.delete(u), c !== i && c.parentNode?.removeChild(c);
		};
	});
	return mounted_components.set(d, f), d;
}
var mounted_components = /* @__PURE__ */ new WeakMap();
function unmount(e, n) {
	let i = mounted_components.get(e);
	return i ? (mounted_components.delete(e), i(n)) : Promise.resolve();
}
function if_block(e, n, i = !1) {
	hydrating && hydrate_next();
	var a = e, o = null, s = null, c = UNINITIALIZED, l = i ? 65536 : 0, u = !1;
	let d = (e, n = !0) => {
		u = !0, m(n, e);
	};
	var f = null;
	function p() {
		f !== null && (f.lastChild.remove(), a.before(f), f = null);
		var e = c ? o : s, n = c ? s : o;
		e && resume_effect(e), n && pause_effect(n, () => {
			c ? s = null : o = null;
		});
	}
	let m = (e, n) => {
		if (c === (c = e)) return;
		let i = !1;
		if (hydrating) {
			let e = read_hydration_instruction(a) === "[!";
			!!c === e && (a = skip_nodes(), set_hydrate_node(a), set_hydrating(!1), i = !0);
		}
		var l = should_defer_append(), u = a;
		if (l && (f = document.createDocumentFragment(), f.append(u = create_text())), c ? o ??= n && branch(() => n(u)) : s ??= n && branch(() => n(u)), l) {
			var d = current_batch, m = c ? o : s, h = c ? s : o;
			m && d.skipped_effects.delete(m), h && d.skipped_effects.add(h), d.add_callback(p);
		} else p();
		i && set_hydrating(!0);
	};
	block(() => {
		u = !1, n(d), u || m(null, null);
	}, l), hydrating && (a = hydrate_node);
}
function key(e, n, i) {
	hydrating && hydrate_next();
	var a = e, o = UNINITIALIZED, s, c, l = null, u = is_runes() ? not_equal : safe_not_equal;
	function d() {
		s && pause_effect(s), l !== null && (l.lastChild.remove(), a.before(l), l = null), s = c;
	}
	block(() => {
		if (u(o, o = n())) {
			var e = a, s = should_defer_append();
			s && (l = document.createDocumentFragment(), l.append(e = create_text())), c = branch(() => i(e)), s ? current_batch.add_callback(d) : d();
		}
	}), hydrating && (a = hydrate_node);
}
let current_each_item = null;
function set_current_each_item(e) {
	current_each_item = e;
}
function index(e, n) {
	return n;
}
function pause_effects(e, n, i) {
	for (var a = e.items, o = [], s = n.length, c = 0; c < s; c++) pause_children(n[c].e, o, !0);
	var l = s > 0 && o.length === 0 && i !== null;
	if (l) {
		var u = i.parentNode;
		clear_text_content(u), u.append(i), a.clear(), link(e, n[0].prev, n[s - 1].next);
	}
	run_out_transitions(o, () => {
		for (var i = 0; i < s; i++) {
			var o = n[i];
			l || (a.delete(o.k), link(e, o.prev, o.next)), destroy_effect(o.e, !l);
		}
	});
}
function each(e, n, i, a, o, s = null) {
	var c = e, l = {
		flags: n,
		items: /* @__PURE__ */ new Map(),
		first: null
	};
	if (n & 4) {
		var u = e;
		c = hydrating ? set_hydrate_node(/* @__PURE__ */ get_first_child(u)) : u.appendChild(create_text());
	}
	hydrating && hydrate_next();
	var d = null, p = !1, h = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ derived_safe_equal(() => {
		var e = i();
		return is_array(e) ? e : e == null ? [] : array_from(e);
	}), _, v;
	function y() {
		reconcile(v, _, l, h, c, o, n, a, i), s !== null && (_.length === 0 ? d ? resume_effect(d) : d = branch(() => s(c)) : d !== null && pause_effect(d, () => {
			d = null;
		}));
	}
	block(() => {
		v ??= active_effect, _ = get$2(g);
		var e = _.length;
		if (p && e === 0) return;
		p = e === 0;
		let u = !1;
		if (hydrating && read_hydration_instruction(c) === "[!" != (e === 0) && (c = skip_nodes(), set_hydrate_node(c), set_hydrating(!1), u = !0), hydrating) {
			for (var f = null, m, b = 0; b < e; b++) {
				if (hydrate_node.nodeType === 8 && hydrate_node.data === "]") {
					c = hydrate_node, u = !0, set_hydrating(!1);
					break;
				}
				var x = _[b], S = a(x, b);
				m = create_item(hydrate_node, l, f, null, x, S, b, o, n, i), l.items.set(S, m), f = m;
			}
			e > 0 && set_hydrate_node(skip_nodes());
		}
		if (hydrating) e === 0 && s && (d = branch(() => s(c)));
		else if (should_defer_append()) {
			var C = /* @__PURE__ */ new Set(), w = current_batch;
			for (b = 0; b < e; b += 1) {
				x = _[b], S = a(x, b);
				var T = l.items.get(S) ?? h.get(S);
				T ? n & 3 && update_item(T, x, b, n) : (m = create_item(null, l, null, null, x, S, b, o, n, i, !0), h.set(S, m)), C.add(S);
			}
			for (let [e, n] of l.items) C.has(e) || w.skipped_effects.add(n.e);
			w.add_callback(y);
		} else y();
		u && set_hydrating(!0), get$2(g);
	}), hydrating && (c = hydrate_node);
}
function reconcile(e, n, i, a, o, s, c, l, u) {
	var d = (c & 8) != 0, f = (c & 3) != 0, p = n.length, h = i.items, g = i.first, _, v = null, y, b = [], x = [], S, C, w, T;
	if (d) for (T = 0; T < p; T += 1) S = n[T], C = l(S, T), w = h.get(C), w !== void 0 && (w.a?.measure(), (y ??= /* @__PURE__ */ new Set()).add(w));
	for (T = 0; T < p; T += 1) {
		if (S = n[T], C = l(S, T), w = h.get(C), w === void 0) {
			var E = a.get(C);
			if (E !== void 0) {
				a.delete(C), h.set(C, E);
				var D = v ? v.next : g;
				link(i, v, E), link(i, E, D), move(E, D, o), v = E;
			} else {
				var O = g ? g.e.nodes_start : o;
				v = create_item(O, i, v, v === null ? i.first : v.next, S, C, T, s, c, u);
			}
			h.set(C, v), b = [], x = [], g = v.next;
			continue;
		}
		if (f && update_item(w, S, T, c), w.e.f & 8192 && (resume_effect(w.e), d && (w.a?.unfix(), (y ??= /* @__PURE__ */ new Set()).delete(w))), w !== g) {
			if (_ !== void 0 && _.has(w)) {
				if (b.length < x.length) {
					var k = x[0], A;
					v = k.prev;
					var j = b[0], M = b[b.length - 1];
					for (A = 0; A < b.length; A += 1) move(b[A], k, o);
					for (A = 0; A < x.length; A += 1) _.delete(x[A]);
					link(i, j.prev, M.next), link(i, v, j), link(i, M, k), g = k, v = M, --T, b = [], x = [];
				} else _.delete(w), move(w, g, o), link(i, w.prev, w.next), link(i, w, v === null ? i.first : v.next), link(i, v, w), v = w;
				continue;
			}
			for (b = [], x = []; g !== null && g.k !== C;) g.e.f & 8192 || (_ ??= /* @__PURE__ */ new Set()).add(g), x.push(g), g = g.next;
			if (g === null) continue;
			w = g;
		}
		b.push(w), v = w, g = w.next;
	}
	if (g !== null || _ !== void 0) {
		for (var N = _ === void 0 ? [] : array_from(_); g !== null;) g.e.f & 8192 || N.push(g), g = g.next;
		var P = N.length;
		if (P > 0) {
			var F = c & 4 && p === 0 ? o : null;
			if (d) {
				for (T = 0; T < P; T += 1) N[T].a?.measure();
				for (T = 0; T < P; T += 1) N[T].a?.fix();
			}
			pause_effects(i, N, F);
		}
	}
	d && queue_micro_task(() => {
		if (y !== void 0) for (w of y) w.a?.apply();
	}), e.first = i.first && i.first.e, e.last = v && v.e;
	for (var I of a.values()) destroy_effect(I.e);
	a.clear();
}
function update_item(e, n, i, a) {
	a & 1 && internal_set(e.v, n), a & 2 ? internal_set(e.i, i) : e.i = i;
}
function create_item(e, n, i, a, o, s, c, l, u, d, f) {
	var p = current_each_item, m = (u & 1) != 0, h = (u & 16) == 0, g = m ? h ? /* @__PURE__ */ mutable_source(o, !1, !1) : source(o) : o, _ = u & 2 ? source(c) : c, v = {
		i: _,
		v: g,
		k: s,
		a: null,
		e: null,
		prev: i,
		next: a
	};
	current_each_item = v;
	try {
		return e === null && document.createDocumentFragment().append(e = create_text()), v.e = branch(() => l(e, g, _, d), hydrating), v.e.prev = i && i.e, v.e.next = a && a.e, i === null ? f || (n.first = v) : (i.next = v, i.e.next = v.e), a !== null && (a.prev = v, a.e.prev = v.e), v;
	} finally {
		current_each_item = p;
	}
}
function move(e, n, i) {
	for (var a = e.next ? e.next.e.nodes_start : i, o = n ? n.e.nodes_start : i, s = e.e.nodes_start; s !== null && s !== a;) {
		var c = /* @__PURE__ */ get_next_sibling(s);
		o.before(s), s = c;
	}
}
function link(e, n, i) {
	n === null ? e.first = i : (n.next = i, n.e.next = i && i.e), i !== null && (i.prev = n, i.e.prev = n && n.e);
}
function html(e, n, i = !1, a = !1, o = !1) {
	var s = e, c = "";
	template_effect(() => {
		var e = active_effect;
		if (c === (c = n() ?? "")) {
			hydrating && hydrate_next();
			return;
		}
		if (e.nodes_start !== null && (remove_effect_dom(e.nodes_start, e.nodes_end), e.nodes_start = e.nodes_end = null), c !== "") {
			if (hydrating) {
				for (var o = hydrate_node.data, l = hydrate_next(), u = l; l !== null && (l.nodeType !== 8 || l.data !== "");) u = l, l = /* @__PURE__ */ get_next_sibling(l);
				if (l === null) throw hydration_mismatch(), HYDRATION_ERROR;
				assign_nodes(hydrate_node, u), s = set_hydrate_node(l);
				return;
			}
			var d = c + "";
			i ? d = `<svg>${d}</svg>` : a && (d = `<math>${d}</math>`);
			var f = create_fragment_from_html(d);
			if ((i || a) && (f = /* @__PURE__ */ get_first_child(f)), assign_nodes(/* @__PURE__ */ get_first_child(f), f.lastChild), i || a) for (; /* @__PURE__ */ get_first_child(f);) s.before(/* @__PURE__ */ get_first_child(f));
			else s.before(f);
		}
	});
}
function snippet(e, n, ...i) {
	var a = e, o = noop$1, s;
	block(() => {
		o !== (o = n()) && (s &&= (destroy_effect(s), null), s = branch(() => o(a, ...i)));
	}, 65536), hydrating && (a = hydrate_node);
}
function component(e, n, i) {
	hydrating && hydrate_next();
	var a = e, o, s, c = null, l = null;
	function u() {
		s &&= (pause_effect(s), null), c &&= (c.lastChild.remove(), a.before(c), null), s = l, l = null;
	}
	block(() => {
		if (o !== (o = n())) {
			var e = should_defer_append();
			if (o) {
				var d = a;
				e && (c = document.createDocumentFragment(), c.append(d = create_text()), s && current_batch.skipped_effects.add(s)), l = branch(() => i(d, o));
			}
			e ? current_batch.add_callback(u) : u();
		}
	}, 65536), hydrating && (a = hydrate_node);
}
function element(e, n, i, a, o, s) {
	let c = hydrating;
	hydrating && hydrate_next();
	var l, u, d = null;
	hydrating && hydrate_node.nodeType === 1 && (d = hydrate_node, hydrate_next());
	var f = hydrating ? hydrate_node : e, p, m = current_each_item;
	block(() => {
		let e = n() || null;
		var s = o ? o() : i || e === "svg" ? "http://www.w3.org/2000/svg" : null;
		if (e !== l) {
			var c = current_each_item;
			set_current_each_item(m), p && (e === null ? pause_effect(p, () => {
				p = null, u = null;
			}) : e === u ? resume_effect(p) : destroy_effect(p)), e && e !== u && (p = branch(() => {
				if (d = hydrating ? d : s ? document.createElementNS(s, e) : document.createElement(e), assign_nodes(d, d), a) {
					hydrating && is_raw_text_element(e) && d.append(document.createComment(""));
					var n = hydrating ? /* @__PURE__ */ get_first_child(d) : d.appendChild(create_text());
					hydrating && (n === null ? set_hydrating(!1) : set_hydrate_node(n)), a(d, n);
				}
				active_effect.nodes_end = d, f.before(d);
			})), l = e, l && (u = l), set_current_each_item(c);
		}
	}, 65536), c && (set_hydrating(!0), set_hydrate_node(f));
}
function attach(e, n) {
	var i = void 0, a;
	block(() => {
		i !== (i = n()) && (a &&= (destroy_effect(a), null), i && (a = branch(() => {
			effect(() => i(e));
		})));
	});
}
function r(e) {
	var n, i, a = "";
	if (typeof e == "string" || typeof e == "number") a += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var o = e.length;
		for (n = 0; n < o; n++) e[n] && (i = r(e[n])) && (a && (a += " "), a += i);
	} else for (i in e) e[i] && (a && (a += " "), a += i);
	return a;
}
function clsx() {
	for (var e, n, i = 0, a = "", o = arguments.length; i < o; i++) (e = arguments[i]) && (n = r(e)) && (a && (a += " "), a += n);
	return a;
}
function clsx$1(e) {
	return typeof e == "object" ? clsx(e) : e ?? "";
}
var whitespace = [..." 	\n\r\f\xA0\v﻿"];
function to_class(e, n, i) {
	var a = e == null ? "" : "" + e;
	if (n && (a = a ? a + " " + n : n), i) {
		for (var o in i) if (i[o]) a = a ? a + " " + o : o;
		else if (a.length) for (var s = o.length, c = 0; (c = a.indexOf(o, c)) >= 0;) {
			var l = c + s;
			(c === 0 || whitespace.includes(a[c - 1])) && (l === a.length || whitespace.includes(a[l])) ? a = (c === 0 ? "" : a.substring(0, c)) + a.substring(l + 1) : c = l;
		}
	}
	return a === "" ? null : a;
}
function append_styles(e, n = !1) {
	var i = n ? " !important;" : ";", a = "";
	for (var o in e) {
		var s = e[o];
		s != null && s !== "" && (a += " " + o + ": " + s + i);
	}
	return a;
}
function to_css_name(e) {
	return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function to_style(e, n) {
	if (n) {
		var i = "", a, o;
		if (Array.isArray(n) ? (a = n[0], o = n[1]) : a = n, e) {
			e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
			var s = !1, c = 0, l = !1, u = [];
			a && u.push(...Object.keys(a).map(to_css_name)), o && u.push(...Object.keys(o).map(to_css_name));
			var d = 0, f = -1;
			let n = e.length;
			for (var p = 0; p < n; p++) {
				var m = e[p];
				if (l ? m === "/" && e[p - 1] === "*" && (l = !1) : s ? s === m && (s = !1) : m === "/" && e[p + 1] === "*" ? l = !0 : m === "\"" || m === "'" ? s = m : m === "(" ? c++ : m === ")" && c--, !l && s === !1 && c === 0) {
					if (m === ":" && f === -1) f = p;
					else if (m === ";" || p === n - 1) {
						if (f !== -1) {
							var h = to_css_name(e.substring(d, f).trim());
							if (!u.includes(h)) {
								m !== ";" && p++;
								var g = e.substring(d, p).trim();
								i += " " + g + ";";
							}
						}
						d = p + 1, f = -1;
					}
				}
			}
		}
		return a && (i += append_styles(a)), o && (i += append_styles(o, !0)), i = i.trim(), i === "" ? null : i;
	}
	return e == null ? null : String(e);
}
function set_class(e, n, i, a, o, s) {
	var c = e.__className;
	if (hydrating || c !== i || c === void 0) {
		var l = to_class(i, a, s);
		(!hydrating || l !== e.getAttribute("class")) && (l == null ? e.removeAttribute("class") : n ? e.className = l : e.setAttribute("class", l)), e.__className = i;
	} else if (s && o !== s) for (var u in s) {
		var d = !!s[u];
		(o == null || d !== !!o[u]) && e.classList.toggle(u, d);
	}
	return s;
}
function update_styles(e, n = {}, i, a) {
	for (var o in i) {
		var s = i[o];
		n[o] !== s && (i[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, s, a));
	}
}
function set_style(e, n, i, a) {
	var o = e.__style;
	if (hydrating || o !== n) {
		var s = to_style(n, a);
		(!hydrating || s !== e.getAttribute("style")) && (s == null ? e.removeAttribute("style") : e.style.cssText = s), e.__style = n;
	} else a && (Array.isArray(a) ? (update_styles(e, i?.[0], a[0]), update_styles(e, i?.[1], a[1], "important")) : update_styles(e, i, a));
	return a;
}
function select_option(e, n, i = !1) {
	if (e.multiple) {
		if (n == null) return;
		if (!is_array(n)) return select_multiple_invalid_value();
		for (var a of e.options) a.selected = n.includes(get_option_value(a));
		return;
	}
	for (a of e.options) {
		var o = get_option_value(a);
		if (is(o, n)) {
			a.selected = !0;
			return;
		}
	}
	(!i || n !== void 0) && (e.selectedIndex = -1);
}
function init_select(e) {
	var n = new MutationObserver(() => {
		select_option(e, e.__value);
	});
	n.observe(e, {
		childList: !0,
		subtree: !0,
		attributes: !0,
		attributeFilter: ["value"]
	}), teardown(() => {
		n.disconnect();
	});
}
function bind_select_value(e, n, i = n) {
	var a = !0;
	listen_to_event_and_reset_event(e, "change", (n) => {
		var a = n ? "[selected]" : ":checked", o;
		if (e.multiple) o = [].map.call(e.querySelectorAll(a), get_option_value);
		else {
			var s = e.querySelector(a) ?? e.querySelector("option:not([disabled])");
			o = s && get_option_value(s);
		}
		i(o);
	}), effect(() => {
		var o = n();
		if (select_option(e, o, a), a && o === void 0) {
			var s = e.querySelector(":checked");
			s !== null && (o = get_option_value(s), i(o));
		}
		e.__value = o, a = !1;
	}), init_select(e);
}
function get_option_value(e) {
	return "__value" in e ? e.__value : e.value;
}
const CLASS = Symbol("class"), STYLE = Symbol("style");
var IS_CUSTOM_ELEMENT = Symbol("is custom element"), IS_HTML = Symbol("is html");
function remove_input_defaults(e) {
	if (hydrating) {
		var n = !1, i = () => {
			if (!n) {
				if (n = !0, e.hasAttribute("value")) {
					var i = e.value;
					set_attribute(e, "value", null), e.value = i;
				}
				if (e.hasAttribute("checked")) {
					var a = e.checked;
					set_attribute(e, "checked", null), e.checked = a;
				}
			}
		};
		e.__on_r = i, queue_idle_task(i), add_form_reset_listener();
	}
}
function set_value(e, n) {
	var i = get_attributes(e);
	i.value === (i.value = n ?? void 0) || e.value === n && (n !== 0 || e.nodeName !== "PROGRESS") || (e.value = n ?? "");
}
function set_selected(e, n) {
	n ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function set_attribute(e, n, i, a) {
	var o = get_attributes(e);
	hydrating && (o[n] = e.getAttribute(n), n === "src" || n === "srcset" || n === "href" && e.nodeName === "LINK") || o[n] !== (o[n] = i) && (n === "loading" && (e[LOADING_ATTR_SYMBOL] = i), i == null ? e.removeAttribute(n) : typeof i != "string" && get_setters(e).includes(n) ? e[n] = i : e.setAttribute(n, i));
}
function set_attributes(e, n, i, a, o = !1, s = !1) {
	if (hydrating && o && e.tagName === "INPUT") {
		var c = e;
		(c.type === "checkbox" ? "defaultChecked" : "defaultValue") in i || remove_input_defaults(c);
	}
	var l = get_attributes(e), u = l[IS_CUSTOM_ELEMENT], d = !l[IS_HTML];
	let f = hydrating && u;
	f && set_hydrating(!1);
	var p = n || {}, m = e.tagName === "OPTION";
	for (var h in n) h in i || (i[h] = null);
	i.class ? i.class = clsx$1(i.class) : (a || i[CLASS]) && (i.class = null), i[STYLE] && (i.style ??= null);
	var g = get_setters(e);
	for (let o in i) {
		let c = i[o];
		if (m && o === "value" && c == null) {
			e.value = e.__value = "", p[o] = c;
			continue;
		}
		if (o === "class") {
			var _ = e.namespaceURI === "http://www.w3.org/1999/xhtml";
			set_class(e, _, c, a, n?.[CLASS], i[CLASS]), p[o] = c, p[CLASS] = i[CLASS];
			continue;
		}
		if (o === "style") {
			set_style(e, c, n?.[STYLE], i[STYLE]), p[o] = c, p[STYLE] = i[STYLE];
			continue;
		}
		var v = p[o];
		if (c === v && !(c === void 0 && e.hasAttribute(o))) continue;
		p[o] = c;
		var y = o[0] + o[1];
		if (y === "$$") continue;
		if (y === "on") {
			let n = {}, i = "$$" + o, a = o.slice(2);
			var b = is_delegated(a);
			if (is_capture_event(a) && (a = a.slice(0, -7), n.capture = !0), !b && v) {
				if (c != null) continue;
				e.removeEventListener(a, p[i], n), p[i] = null;
			}
			if (c != null) if (b) e[`__${a}`] = c, delegate([a]);
			else {
				function s(e) {
					p[o].call(this, e);
				}
				p[i] = create_event(a, e, s, n);
			}
			else b && (e[`__${a}`] = void 0);
		} else if (o === "style") set_attribute(e, o, c);
		else if (o === "autofocus") autofocus(e, !!c);
		else if (!u && (o === "__value" || o === "value" && c != null)) e.value = e.__value = c;
		else if (o === "selected" && m) set_selected(e, c);
		else {
			var x = o;
			d || (x = normalize_attribute(x));
			var S = x === "defaultValue" || x === "defaultChecked";
			if (c == null && !u && !S) if (l[o] = null, x === "value" || x === "checked") {
				let i = e, a = n === void 0;
				if (x === "value") {
					let e = i.defaultValue;
					i.removeAttribute(x), i.defaultValue = e, i.value = i.__value = a ? e : null;
				} else {
					let e = i.defaultChecked;
					i.removeAttribute(x), i.defaultChecked = e, i.checked = a ? e : !1;
				}
			} else e.removeAttribute(o);
			else S || g.includes(x) && (u || typeof c != "string") ? (e[x] = c, x in l && (l[x] = UNINITIALIZED)) : typeof c != "function" && set_attribute(e, x, c, s);
		}
	}
	return f && set_hydrating(!0), p;
}
function attribute_effect(e, n, i = [], a = [], o, s = !1, c = !1) {
	flatten(i, a, (i) => {
		var a = void 0, l = {}, u = e.nodeName === "SELECT", d = !1;
		if (block(() => {
			var f = n(...i.map(get$2)), p = set_attributes(e, a, f, o, s, c);
			d && u && "value" in f && select_option(e, f.value);
			for (let e of Object.getOwnPropertySymbols(l)) f[e] || destroy_effect(l[e]);
			for (let n of Object.getOwnPropertySymbols(f)) {
				var m = f[n];
				n.description === "@attach" && (!a || m !== a[n]) && (l[n] && destroy_effect(l[n]), l[n] = branch(() => attach(e, () => m))), p[n] = m;
			}
			a = p;
		}), u) {
			var f = e;
			effect(() => {
				select_option(f, a.value, !0), init_select(f);
			});
		}
		d = !0;
	});
}
function get_attributes(e) {
	return e.__attributes ??= {
		[IS_CUSTOM_ELEMENT]: e.nodeName.includes("-"),
		[IS_HTML]: e.namespaceURI === "http://www.w3.org/1999/xhtml"
	};
}
var setters_cache = /* @__PURE__ */ new Map();
function get_setters(e) {
	var n = e.getAttribute("is") || e.nodeName, i = setters_cache.get(n);
	if (i) return i;
	setters_cache.set(n, i = []);
	for (var a, o = e, s = Element.prototype; s !== o;) {
		for (var c in a = get_descriptors(o), a) a[c].set && i.push(c);
		o = get_prototype_of(o);
	}
	return i;
}
function bind_value(e, n, i = n) {
	var a = /* @__PURE__ */ new WeakSet();
	listen_to_event_and_reset_event(e, "input", async (o) => {
		var s = o ? e.defaultValue : e.value;
		if (s = is_numberlike_input(e) ? to_number(s) : s, i(s), current_batch !== null && a.add(current_batch), await tick(), s !== (s = n())) {
			var c = e.selectionStart, l = e.selectionEnd;
			e.value = s ?? "", l !== null && (e.selectionStart = c, e.selectionEnd = Math.min(l, e.value.length));
		}
	}), (hydrating && e.defaultValue !== e.value || untrack(n) == null && e.value) && (i(is_numberlike_input(e) ? to_number(e.value) : e.value), current_batch !== null && a.add(current_batch)), render_effect(() => {
		var i = n();
		if (e === document.activeElement) {
			var o = previous_batch ?? current_batch;
			if (a.has(o)) return;
		}
		is_numberlike_input(e) && i === to_number(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
	});
}
function bind_checked(e, n, i = n) {
	listen_to_event_and_reset_event(e, "change", (n) => {
		var a = n ? e.defaultChecked : e.checked;
		i(a);
	}), (hydrating && e.defaultChecked !== e.checked || untrack(n) == null) && i(e.checked), render_effect(() => {
		e.checked = !!n();
	});
}
function is_numberlike_input(e) {
	var n = e.type;
	return n === "number" || n === "range";
}
function to_number(e) {
	return e === "" ? null : +e;
}
function is_bound_this(e, n) {
	return e === n || e?.[STATE_SYMBOL] === n;
}
function bind_this(e = {}, n, i, a) {
	return effect(() => {
		var o, s;
		return render_effect(() => {
			o = s, s = a?.() || [], untrack(() => {
				e !== i(...s) && (n(e, ...s), o && is_bound_this(i(...o), e) && n(null, ...o));
			});
		}), () => {
			queue_micro_task(() => {
				s && is_bound_this(i(...s), e) && n(null, ...s);
			});
		};
	}), e;
}
function bind_content_editable(e, n, i, a = i) {
	n.addEventListener("input", () => {
		a(n[e]);
	}), render_effect(() => {
		var o = i();
		if (n[e] !== o) if (o == null) {
			var s = n[e];
			a(s);
		} else n[e] = o + "";
	});
}
var is_store_binding = !1;
function capture_store_binding(e) {
	var n = is_store_binding;
	try {
		return is_store_binding = !1, [e(), is_store_binding];
	} finally {
		is_store_binding = n;
	}
}
var rest_props_handler = {
	get(e, n) {
		if (!e.exclude.includes(n)) return e.props[n];
	},
	set(e, n) {
		return !1;
	},
	getOwnPropertyDescriptor(e, n) {
		if (!e.exclude.includes(n) && n in e.props) return {
			enumerable: !0,
			configurable: !0,
			value: e.props[n]
		};
	},
	has(e, n) {
		return e.exclude.includes(n) ? !1 : n in e.props;
	},
	ownKeys(e) {
		return Reflect.ownKeys(e.props).filter((n) => !e.exclude.includes(n));
	}
};
/* @__NO_SIDE_EFFECTS__ */
function rest_props(e, n, i) {
	return new Proxy({
		props: e,
		exclude: n
	}, rest_props_handler);
}
var spread_props_handler = {
	get(e, n) {
		let i = e.props.length;
		for (; i--;) {
			let a = e.props[i];
			if (is_function(a) && (a = a()), typeof a == "object" && a && n in a) return a[n];
		}
	},
	set(e, n, i) {
		let a = e.props.length;
		for (; a--;) {
			let o = e.props[a];
			is_function(o) && (o = o());
			let s = get_descriptor(o, n);
			if (s && s.set) return s.set(i), !0;
		}
		return !1;
	},
	getOwnPropertyDescriptor(e, n) {
		let i = e.props.length;
		for (; i--;) {
			let a = e.props[i];
			if (is_function(a) && (a = a()), typeof a == "object" && a && n in a) {
				let e = get_descriptor(a, n);
				return e && !e.configurable && (e.configurable = !0), e;
			}
		}
	},
	has(e, n) {
		if (n === STATE_SYMBOL || n === LEGACY_PROPS) return !1;
		for (let i of e.props) if (is_function(i) && (i = i()), i != null && n in i) return !0;
		return !1;
	},
	ownKeys(e) {
		let n = [];
		for (let i of e.props) {
			if (is_function(i) && (i = i()), !i) continue;
			for (let e in i) n.includes(e) || n.push(e);
			for (let e of Object.getOwnPropertySymbols(i)) n.includes(e) || n.push(e);
		}
		return n;
	}
};
function spread_props(...e) {
	return new Proxy({ props: e }, spread_props_handler);
}
function prop(e, n, i, a) {
	var o = !0, s = (i & 8) != 0, c = (i & 16) != 0, l = a, u = !0, d = () => (u && (u = !1, l = c ? untrack(a) : a), l), f;
	if (s) {
		var p = STATE_SYMBOL in e || LEGACY_PROPS in e;
		f = get_descriptor(e, n)?.set ?? (p && n in e ? (i) => e[n] = i : void 0);
	}
	var m, h = !1;
	s ? [m, h] = capture_store_binding(() => e[n]) : m = e[n], m === void 0 && a !== void 0 && (m = d(), f && (o && props_invalid_value(n), f(m)));
	var _ = o ? () => {
		var i = e[n];
		return i === void 0 ? d() : (u = !0, i);
	} : () => {
		var i = e[n];
		return i !== void 0 && (l = void 0), i === void 0 ? l : i;
	};
	if (o && !(i & 4)) return _;
	if (f) {
		var v = e.$$legacy;
		return (function(e, n) {
			return arguments.length > 0 ? ((!o || !n || v || h) && f(n ? _() : e), e) : _();
		});
	}
	var y = !1, b = (i & 1 ? derived : derived_safe_equal)(() => (y = !1, _()));
	s && get$2(b);
	var x = active_effect;
	return (function(e, n) {
		if (arguments.length > 0) {
			let i = n ? get$2(b) : o && s ? proxy(e) : e;
			return set(b, i), y = !0, l !== void 0 && (l = i), e;
		}
		return is_destroying_effect && y || x.f & 16384 ? b.v : get$2(b);
	});
}
function onMount(e) {
	component_context === null && lifecycle_outside_component("onMount"), user_effect(() => {
		let n = untrack(e);
		if (typeof n == "function") return n;
	});
}
function onDestroy(e) {
	component_context === null && lifecycle_outside_component("onDestroy"), onMount(() => () => untrack(e));
}
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
var matchIconName = /^[a-z0-9]+(-[a-z0-9]+)*$/, stringToIcon = (e, n, i, a = "") => {
	let o = e.split(":");
	if (e.slice(0, 1) === "@") {
		if (o.length < 2 || o.length > 3) return null;
		a = o.shift().slice(1);
	}
	if (o.length > 3 || !o.length) return null;
	if (o.length > 1) {
		let e = o.pop(), i = o.pop(), s = {
			provider: o.length > 0 ? o[0] : a,
			prefix: i,
			name: e
		};
		return n && !validateIconName(s) ? null : s;
	}
	let s = o[0], c = s.split("-");
	if (c.length > 1) {
		let e = {
			provider: a,
			prefix: c.shift(),
			name: c.join("-")
		};
		return n && !validateIconName(e) ? null : e;
	}
	if (i && a === "") {
		let e = {
			provider: a,
			prefix: "",
			name: s
		};
		return n && !validateIconName(e, i) ? null : e;
	}
	return null;
}, validateIconName = (e, n) => e ? !!((n && e.prefix === "" || e.prefix) && e.name) : !1;
function getIconsTree(e, n) {
	let i = e.icons, a = e.aliases || Object.create(null), o = Object.create(null);
	function s(e) {
		if (i[e]) return o[e] = [];
		if (!(e in o)) {
			o[e] = null;
			let n = a[e] && a[e].parent, i = n && s(n);
			i && (o[e] = [n].concat(i));
		}
		return o[e];
	}
	return Object.keys(i).concat(Object.keys(a)).forEach(s), o;
}
var defaultIconDimensions = Object.freeze({
	left: 0,
	top: 0,
	width: 16,
	height: 16
}), defaultIconTransformations = Object.freeze({
	rotate: 0,
	vFlip: !1,
	hFlip: !1
}), defaultIconProps = Object.freeze({
	...defaultIconDimensions,
	...defaultIconTransformations
}), defaultExtendedIconProps = Object.freeze({
	...defaultIconProps,
	body: "",
	hidden: !1
});
function mergeIconTransformations(e, n) {
	let i = {};
	!e.hFlip != !n.hFlip && (i.hFlip = !0), !e.vFlip != !n.vFlip && (i.vFlip = !0);
	let a = ((e.rotate || 0) + (n.rotate || 0)) % 4;
	return a && (i.rotate = a), i;
}
function mergeIconData(e, n) {
	let i = mergeIconTransformations(e, n);
	for (let a in defaultExtendedIconProps) a in defaultIconTransformations ? a in e && !(a in i) && (i[a] = defaultIconTransformations[a]) : a in n ? i[a] = n[a] : a in e && (i[a] = e[a]);
	return i;
}
function internalGetIconData(e, n, i) {
	let a = e.icons, o = e.aliases || Object.create(null), s = {};
	function c(e) {
		s = mergeIconData(a[e] || o[e], s);
	}
	return c(n), i.forEach(c), mergeIconData(e, s);
}
function parseIconSet(e, n) {
	let i = [];
	if (typeof e != "object" || typeof e.icons != "object") return i;
	e.not_found instanceof Array && e.not_found.forEach((e) => {
		n(e, null), i.push(e);
	});
	let a = getIconsTree(e);
	for (let o in a) {
		let s = a[o];
		s && (n(o, internalGetIconData(e, o, s)), i.push(o));
	}
	return i;
}
var optionalPropertyDefaults = {
	provider: "",
	aliases: {},
	not_found: {},
	...defaultIconDimensions
};
function checkOptionalProps(e, n) {
	for (let i in n) if (i in e && typeof e[i] != typeof n[i]) return !1;
	return !0;
}
function quicklyValidateIconSet(e) {
	if (typeof e != "object" || !e) return null;
	let n = e;
	if (typeof n.prefix != "string" || !e.icons || typeof e.icons != "object" || !checkOptionalProps(e, optionalPropertyDefaults)) return null;
	let i = n.icons;
	for (let e in i) {
		let n = i[e];
		if (!e || typeof n.body != "string" || !checkOptionalProps(n, defaultExtendedIconProps)) return null;
	}
	let a = n.aliases || Object.create(null);
	for (let e in a) {
		let n = a[e], o = n.parent;
		if (!e || typeof o != "string" || !i[o] && !a[o] || !checkOptionalProps(n, defaultExtendedIconProps)) return null;
	}
	return n;
}
var dataStorage = Object.create(null);
function newStorage(e, n) {
	return {
		provider: e,
		prefix: n,
		icons: Object.create(null),
		missing: /* @__PURE__ */ new Set()
	};
}
function getStorage(e, n) {
	let i = dataStorage[e] || (dataStorage[e] = Object.create(null));
	return i[n] || (i[n] = newStorage(e, n));
}
function addIconSet(e, n) {
	return quicklyValidateIconSet(n) ? parseIconSet(n, (n, i) => {
		i ? e.icons[n] = i : e.missing.add(n);
	}) : [];
}
function addIconToStorage(e, n, i) {
	try {
		if (typeof i.body == "string") return e.icons[n] = { ...i }, !0;
	} catch {}
	return !1;
}
var simpleNames = !1;
function allowSimpleNames(e) {
	return typeof e == "boolean" && (simpleNames = e), simpleNames;
}
function getIconData(e) {
	let n = typeof e == "string" ? stringToIcon(e, !0, simpleNames) : e;
	if (n) {
		let e = getStorage(n.provider, n.prefix), i = n.name;
		return e.icons[i] || (e.missing.has(i) ? null : void 0);
	}
}
function addIcon(e, n) {
	let i = stringToIcon(e, !0, simpleNames);
	if (!i) return !1;
	let a = getStorage(i.provider, i.prefix);
	return n ? addIconToStorage(a, i.name, n) : (a.missing.add(i.name), !0);
}
function addCollection(e, n) {
	if (typeof e != "object") return !1;
	if (typeof n != "string" && (n = e.provider || ""), simpleNames && !n && !e.prefix) {
		let n = !1;
		return quicklyValidateIconSet(e) && (e.prefix = "", parseIconSet(e, (e, i) => {
			addIcon(e, i) && (n = !0);
		})), n;
	}
	let i = e.prefix;
	if (!validateIconName({
		prefix: i,
		name: "a"
	})) return !1;
	let a = getStorage(n, i);
	return !!addIconSet(a, e);
}
var defaultIconSizeCustomisations = Object.freeze({
	width: null,
	height: null
}), defaultIconCustomisations = Object.freeze({
	...defaultIconSizeCustomisations,
	...defaultIconTransformations
}), unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g, unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(e, n, i) {
	if (n === 1) return e;
	if (i ||= 100, typeof e == "number") return Math.ceil(e * n * i) / i;
	if (typeof e != "string") return e;
	let a = e.split(unitsSplit);
	if (a === null || !a.length) return e;
	let o = [], s = a.shift(), c = unitsTest.test(s);
	for (;;) {
		if (c) {
			let e = parseFloat(s);
			isNaN(e) ? o.push(s) : o.push(Math.ceil(e * n * i) / i);
		} else o.push(s);
		if (s = a.shift(), s === void 0) return o.join("");
		c = !c;
	}
}
function splitSVGDefs(e, n = "defs") {
	let i = "", a = e.indexOf("<" + n);
	for (; a >= 0;) {
		let o = e.indexOf(">", a), s = e.indexOf("</" + n);
		if (o === -1 || s === -1) break;
		let c = e.indexOf(">", s);
		if (c === -1) break;
		i += e.slice(o + 1, s).trim(), e = e.slice(0, a).trim() + e.slice(c + 1);
	}
	return {
		defs: i,
		content: e
	};
}
function mergeDefsAndContent(e, n) {
	return e ? "<defs>" + e + "</defs>" + n : n;
}
function wrapSVGContent(e, n, i) {
	let a = splitSVGDefs(e);
	return mergeDefsAndContent(a.defs, n + a.content + i);
}
var isUnsetKeyword = (e) => e === "unset" || e === "undefined" || e === "none";
function iconToSVG(e, n) {
	let i = {
		...defaultIconProps,
		...e
	}, a = {
		...defaultIconCustomisations,
		...n
	}, o = {
		left: i.left,
		top: i.top,
		width: i.width,
		height: i.height
	}, s = i.body;
	[i, a].forEach((e) => {
		let n = [], i = e.hFlip, a = e.vFlip, c = e.rotate;
		i ? a ? c += 2 : (n.push("translate(" + (o.width + o.left).toString() + " " + (0 - o.top).toString() + ")"), n.push("scale(-1 1)"), o.top = o.left = 0) : a && (n.push("translate(" + (0 - o.left).toString() + " " + (o.height + o.top).toString() + ")"), n.push("scale(1 -1)"), o.top = o.left = 0);
		let l;
		switch (c < 0 && (c -= Math.floor(c / 4) * 4), c %= 4, c) {
			case 1:
				l = o.height / 2 + o.top, n.unshift("rotate(90 " + l.toString() + " " + l.toString() + ")");
				break;
			case 2:
				n.unshift("rotate(180 " + (o.width / 2 + o.left).toString() + " " + (o.height / 2 + o.top).toString() + ")");
				break;
			case 3:
				l = o.width / 2 + o.left, n.unshift("rotate(-90 " + l.toString() + " " + l.toString() + ")");
				break;
		}
		c % 2 == 1 && (o.left !== o.top && (l = o.left, o.left = o.top, o.top = l), o.width !== o.height && (l = o.width, o.width = o.height, o.height = l)), n.length && (s = wrapSVGContent(s, "<g transform=\"" + n.join(" ") + "\">", "</g>"));
	});
	let c = a.width, l = a.height, u = o.width, d = o.height, f, p;
	c === null ? (p = l === null ? "1em" : l === "auto" ? d : l, f = calculateSize(p, u / d)) : (f = c === "auto" ? u : c, p = l === null ? calculateSize(f, d / u) : l === "auto" ? d : l);
	let m = {}, h = (e, n) => {
		isUnsetKeyword(n) || (m[e] = n.toString());
	};
	h("width", f), h("height", p);
	let g = [
		o.left,
		o.top,
		u,
		d
	];
	return m.viewBox = g.join(" "), {
		attributes: m,
		viewBox: g,
		body: s
	};
}
var regex = /\sid="(\S+)"/g, randomPrefix = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16), counter = 0;
function replaceIDs(e, n = randomPrefix) {
	let i = [], a;
	for (; a = regex.exec(e);) i.push(a[1]);
	if (!i.length) return e;
	let o = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
	return i.forEach((i) => {
		let a = typeof n == "function" ? n(i) : n + (counter++).toString(), s = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		e = e.replace(RegExp("([#;\"])(" + s + ")([\")]|\\.[a-z])", "g"), "$1" + a + o + "$3");
	}), e = e.replace(new RegExp(o, "g"), ""), e;
}
var storage = Object.create(null);
function setAPIModule(e, n) {
	storage[e] = n;
}
function getAPIModule(e) {
	return storage[e] || storage[""];
}
function createAPIConfig(e) {
	let n;
	if (typeof e.resources == "string") n = [e.resources];
	else if (n = e.resources, !(n instanceof Array) || !n.length) return null;
	return {
		resources: n,
		path: e.path || "/",
		maxURL: e.maxURL || 500,
		rotate: e.rotate || 750,
		timeout: e.timeout || 5e3,
		random: e.random === !0,
		index: e.index || 0,
		dataAfterTimeout: e.dataAfterTimeout !== !1
	};
}
for (var configStorage = Object.create(null), fallBackAPISources = ["https://api.simplesvg.com", "https://api.unisvg.com"], fallBackAPI = []; fallBackAPISources.length > 0;) fallBackAPISources.length === 1 || Math.random() > .5 ? fallBackAPI.push(fallBackAPISources.shift()) : fallBackAPI.push(fallBackAPISources.pop());
configStorage[""] = createAPIConfig({ resources: ["https://api.iconify.design"].concat(fallBackAPI) });
function addAPIProvider(e, n) {
	let i = createAPIConfig(n);
	return i === null ? !1 : (configStorage[e] = i, !0);
}
function getAPIConfig(e) {
	return configStorage[e];
}
var fetchModule = (() => {
	let e;
	try {
		if (e = fetch, typeof e == "function") return e;
	} catch {}
})();
function calculateMaxLength(e, n) {
	let i = getAPIConfig(e);
	if (!i) return 0;
	let a;
	if (!i.maxURL) a = 0;
	else {
		let e = 0;
		i.resources.forEach((n) => {
			let i = n;
			e = Math.max(e, i.length);
		});
		let o = n + ".json?icons=";
		a = i.maxURL - e - i.path.length - o.length;
	}
	return a;
}
function shouldAbort(e) {
	return e === 404;
}
var prepare = (e, n, i) => {
	let a = [], o = calculateMaxLength(e, n), s = "icons", c = {
		type: s,
		provider: e,
		prefix: n,
		icons: []
	}, l = 0;
	return i.forEach((i, u) => {
		l += i.length + 1, l >= o && u > 0 && (a.push(c), c = {
			type: s,
			provider: e,
			prefix: n,
			icons: []
		}, l = i.length), c.icons.push(i);
	}), a.push(c), a;
};
function getPath(e) {
	if (typeof e == "string") {
		let n = getAPIConfig(e);
		if (n) return n.path;
	}
	return "/";
}
var fetchAPIModule = {
	prepare,
	send: (e, n, i) => {
		if (!fetchModule) {
			i("abort", 424);
			return;
		}
		let a = getPath(n.provider);
		switch (n.type) {
			case "icons": {
				let e = n.prefix, i = n.icons.join(","), o = new URLSearchParams({ icons: i });
				a += e + ".json?" + o.toString();
				break;
			}
			case "custom": {
				let e = n.uri;
				a += e.slice(0, 1) === "/" ? e.slice(1) : e;
				break;
			}
			default:
				i("abort", 400);
				return;
		}
		let o = 503;
		fetchModule(e + a).then((e) => {
			let n = e.status;
			if (n !== 200) {
				setTimeout(() => {
					i(shouldAbort(n) ? "abort" : "next", n);
				});
				return;
			}
			return o = 501, e.json();
		}).then((e) => {
			if (typeof e != "object" || !e) {
				setTimeout(() => {
					e === 404 ? i("abort", e) : i("next", o);
				});
				return;
			}
			setTimeout(() => {
				i("success", e);
			});
		}).catch(() => {
			i("next", o);
		});
	}
};
function removeCallback(e, n) {
	e.forEach((e) => {
		let i = e.loaderCallbacks;
		i && (e.loaderCallbacks = i.filter((e) => e.id !== n));
	});
}
function updateCallbacks(e) {
	e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
		e.pendingCallbacksFlag = !1;
		let n = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
		if (!n.length) return;
		let i = !1, a = e.provider, o = e.prefix;
		n.forEach((n) => {
			let s = n.icons, c = s.pending.length;
			s.pending = s.pending.filter((n) => {
				if (n.prefix !== o) return !0;
				let c = n.name;
				if (e.icons[c]) s.loaded.push({
					provider: a,
					prefix: o,
					name: c
				});
				else if (e.missing.has(c)) s.missing.push({
					provider: a,
					prefix: o,
					name: c
				});
				else return i = !0, !0;
				return !1;
			}), s.pending.length !== c && (i || removeCallback([e], n.id), n.callback(s.loaded.slice(0), s.missing.slice(0), s.pending.slice(0), n.abort));
		});
	}));
}
var idCounter = 0;
function storeCallback(e, n, i) {
	let a = idCounter++, o = removeCallback.bind(null, i, a);
	if (!n.pending.length) return o;
	let s = {
		id: a,
		icons: n,
		callback: e,
		abort: o
	};
	return i.forEach((e) => {
		(e.loaderCallbacks ||= []).push(s);
	}), o;
}
function sortIcons(e) {
	let n = {
		loaded: [],
		missing: [],
		pending: []
	}, i = Object.create(null);
	e.sort((e, n) => e.provider === n.provider ? e.prefix === n.prefix ? e.name.localeCompare(n.name) : e.prefix.localeCompare(n.prefix) : e.provider.localeCompare(n.provider));
	let a = {
		provider: "",
		prefix: "",
		name: ""
	};
	return e.forEach((e) => {
		if (a.name === e.name && a.prefix === e.prefix && a.provider === e.provider) return;
		a = e;
		let o = e.provider, s = e.prefix, c = e.name, l = i[o] || (i[o] = Object.create(null)), u = l[s] || (l[s] = getStorage(o, s)), d;
		d = c in u.icons ? n.loaded : s === "" || u.missing.has(c) ? n.missing : n.pending;
		let f = {
			provider: o,
			prefix: s,
			name: c
		};
		d.push(f);
	}), n;
}
function listToIcons(e, n = !0, i = !1) {
	let a = [];
	return e.forEach((e) => {
		let o = typeof e == "string" ? stringToIcon(e, n, i) : e;
		o && a.push(o);
	}), a;
}
var defaultConfig = {
	resources: [],
	index: 0,
	timeout: 2e3,
	rotate: 750,
	random: !1,
	dataAfterTimeout: !1
};
function sendQuery(e, n, i, a) {
	let o = e.resources.length, s = e.random ? Math.floor(Math.random() * o) : e.index, c;
	if (e.random) {
		let n = e.resources.slice(0);
		for (c = []; n.length > 1;) {
			let e = Math.floor(Math.random() * n.length);
			c.push(n[e]), n = n.slice(0, e).concat(n.slice(e + 1));
		}
		c = c.concat(n);
	} else c = e.resources.slice(s).concat(e.resources.slice(0, s));
	let l = Date.now(), u = "pending", d = 0, f, p = null, m = [], h = [];
	typeof a == "function" && h.push(a);
	function g() {
		p &&= (clearTimeout(p), null);
	}
	function _() {
		u === "pending" && (u = "aborted"), g(), m.forEach((e) => {
			e.status === "pending" && (e.status = "aborted");
		}), m = [];
	}
	function v(e, n) {
		n && (h = []), typeof e == "function" && h.push(e);
	}
	function y() {
		return {
			startTime: l,
			payload: n,
			status: u,
			queriesSent: d,
			queriesPending: m.length,
			subscribe: v,
			abort: _
		};
	}
	function b() {
		u = "failed", h.forEach((e) => {
			e(void 0, f);
		});
	}
	function x() {
		m.forEach((e) => {
			e.status === "pending" && (e.status = "aborted");
		}), m = [];
	}
	function S(n, i, a) {
		let o = i !== "success";
		switch (m = m.filter((e) => e !== n), u) {
			case "pending": break;
			case "failed":
				if (o || !e.dataAfterTimeout) return;
				break;
			default: return;
		}
		if (i === "abort") {
			f = a, b();
			return;
		}
		if (o) {
			f = a, m.length || (c.length ? C() : b());
			return;
		}
		if (g(), x(), !e.random) {
			let i = e.resources.indexOf(n.resource);
			i !== -1 && i !== e.index && (e.index = i);
		}
		u = "completed", h.forEach((e) => {
			e(a);
		});
	}
	function C() {
		if (u !== "pending") return;
		g();
		let a = c.shift();
		if (a === void 0) {
			if (m.length) {
				p = setTimeout(() => {
					g(), u === "pending" && (x(), b());
				}, e.timeout);
				return;
			}
			b();
			return;
		}
		let o = {
			status: "pending",
			resource: a,
			callback: (e, n) => {
				S(o, e, n);
			}
		};
		m.push(o), d++, p = setTimeout(C, e.rotate), i(a, n, o.callback);
	}
	return setTimeout(C), y;
}
function initRedundancy(e) {
	let n = {
		...defaultConfig,
		...e
	}, i = [];
	function a() {
		i = i.filter((e) => e().status === "pending");
	}
	function o(e, o, s) {
		let c = sendQuery(n, e, o, (e, n) => {
			a(), s && s(e, n);
		});
		return i.push(c), c;
	}
	function s(e) {
		return i.find((n) => e(n)) || null;
	}
	return {
		query: o,
		find: s,
		setIndex: (e) => {
			n.index = e;
		},
		getIndex: () => n.index,
		cleanup: a
	};
}
function emptyCallback$1() {}
var redundancyCache = Object.create(null);
function getRedundancyCache(e) {
	if (!redundancyCache[e]) {
		let n = getAPIConfig(e);
		if (!n) return;
		let i = initRedundancy(n);
		redundancyCache[e] = {
			config: n,
			redundancy: i
		};
	}
	return redundancyCache[e];
}
function sendAPIQuery(e, n, i) {
	let a, o;
	if (typeof e == "string") {
		let n = getAPIModule(e);
		if (!n) return i(void 0, 424), emptyCallback$1;
		o = n.send;
		let s = getRedundancyCache(e);
		s && (a = s.redundancy);
	} else {
		let n = createAPIConfig(e);
		if (n) {
			a = initRedundancy(n);
			let i = e.resources ? e.resources[0] : "", s = getAPIModule(i);
			s && (o = s.send);
		}
	}
	return !a || !o ? (i(void 0, 424), emptyCallback$1) : a.query(n, o, i)().abort;
}
function emptyCallback() {}
function loadedNewIcons(e) {
	e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
		e.iconsLoaderFlag = !1, updateCallbacks(e);
	}));
}
function checkIconNamesForAPI(e) {
	let n = [], i = [];
	return e.forEach((e) => {
		(e.match(matchIconName) ? n : i).push(e);
	}), {
		valid: n,
		invalid: i
	};
}
function parseLoaderResponse(e, n, i) {
	function a() {
		let i = e.pendingIcons;
		n.forEach((n) => {
			i && i.delete(n), e.icons[n] || e.missing.add(n);
		});
	}
	if (i && typeof i == "object") try {
		if (!addIconSet(e, i).length) {
			a();
			return;
		}
	} catch (e) {
		console.error(e);
	}
	a(), loadedNewIcons(e);
}
function parsePossiblyAsyncResponse(e, n) {
	e instanceof Promise ? e.then((e) => {
		n(e);
	}).catch(() => {
		n(null);
	}) : n(e);
}
function loadNewIcons(e, n) {
	e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(n).sort() : e.iconsToLoad = n, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
		e.iconsQueueFlag = !1;
		let { provider: n, prefix: i } = e, a = e.iconsToLoad;
		if (delete e.iconsToLoad, !a || !a.length) return;
		let o = e.loadIcon;
		if (e.loadIcons && (a.length > 1 || !o)) {
			parsePossiblyAsyncResponse(e.loadIcons(a, i, n), (n) => {
				parseLoaderResponse(e, a, n);
			});
			return;
		}
		if (o) {
			a.forEach((a) => {
				let s = o(a, i, n);
				parsePossiblyAsyncResponse(s, (n) => {
					parseLoaderResponse(e, [a], n ? {
						prefix: i,
						icons: { [a]: n }
					} : null);
				});
			});
			return;
		}
		let { valid: s, invalid: c } = checkIconNamesForAPI(a);
		if (c.length && parseLoaderResponse(e, c, null), !s.length) return;
		let l = i.match(matchIconName) ? getAPIModule(n) : null;
		if (!l) {
			parseLoaderResponse(e, s, null);
			return;
		}
		l.prepare(n, i, s).forEach((i) => {
			sendAPIQuery(n, i, (n) => {
				parseLoaderResponse(e, i.icons, n);
			});
		});
	}));
}
var loadIcons = (e, n) => {
	let i = listToIcons(e, !0, allowSimpleNames()), a = sortIcons(i);
	if (!a.pending.length) {
		let e = !0;
		return n && setTimeout(() => {
			e && n(a.loaded, a.missing, a.pending, emptyCallback);
		}), () => {
			e = !1;
		};
	}
	let o = Object.create(null), s = [], c, l;
	return a.pending.forEach((e) => {
		let { provider: n, prefix: i } = e;
		if (i === l && n === c) return;
		c = n, l = i, s.push(getStorage(n, i));
		let a = o[n] || (o[n] = Object.create(null));
		a[i] || (a[i] = []);
	}), a.pending.forEach((e) => {
		let { provider: n, prefix: i, name: a } = e, s = getStorage(n, i), c = s.pendingIcons ||= /* @__PURE__ */ new Set();
		c.has(a) || (c.add(a), o[n][i].push(a));
	}), s.forEach((e) => {
		let n = o[e.provider][e.prefix];
		n.length && loadNewIcons(e, n);
	}), n ? storeCallback(n, a, s) : emptyCallback;
};
function mergeCustomisations(e, n) {
	let i = { ...e };
	for (let e in n) {
		let a = n[e], o = typeof a;
		e in defaultIconSizeCustomisations ? (a === null || a && (o === "string" || o === "number")) && (i[e] = a) : o === typeof i[e] && (i[e] = e === "rotate" ? a % 4 : a);
	}
	return i;
}
var separator = /[\s,]+/;
function flipFromString(e, n) {
	n.split(separator).forEach((n) => {
		switch (n.trim()) {
			case "horizontal":
				e.hFlip = !0;
				break;
			case "vertical":
				e.vFlip = !0;
				break;
		}
	});
}
function rotateFromString(e, n = 0) {
	let i = e.replace(/^-?[0-9.]*/, "");
	function a(e) {
		for (; e < 0;) e += 4;
		return e % 4;
	}
	if (i === "") {
		let n = parseInt(e);
		return isNaN(n) ? 0 : a(n);
	} else if (i !== e) {
		let n = 0;
		switch (i) {
			case "%":
				n = 25;
				break;
			case "deg": n = 90;
		}
		if (n) {
			let o = parseFloat(e.slice(0, e.length - i.length));
			return isNaN(o) ? 0 : (o /= n, o % 1 == 0 ? a(o) : 0);
		}
	}
	return n;
}
function iconToHTML(e, n) {
	let i = e.indexOf("xlink:") === -1 ? "" : " xmlns:xlink=\"http://www.w3.org/1999/xlink\"";
	for (let e in n) i += " " + e + "=\"" + n[e] + "\"";
	return "<svg xmlns=\"http://www.w3.org/2000/svg\"" + i + ">" + e + "</svg>";
}
function encodeSVGforURL(e) {
	return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function svgToData(e) {
	return "data:image/svg+xml," + encodeSVGforURL(e);
}
function svgToURL(e) {
	return "url(\"" + svgToData(e) + "\")";
}
var defaultExtendedIconCustomisations = {
	...defaultIconCustomisations,
	inline: !1
}, svgDefaults = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	"aria-hidden": !0,
	role: "img"
}, commonProps = { display: "inline-block" }, monotoneProps = { "background-color": "currentColor" }, coloredProps = { "background-color": "transparent" }, propsToAdd = {
	image: "var(--svg)",
	repeat: "no-repeat",
	size: "100% 100%"
}, propsToAddTo = {
	"-webkit-mask": monotoneProps,
	mask: monotoneProps,
	background: coloredProps
};
for (let e in propsToAddTo) {
	let n = propsToAddTo[e];
	for (let i in propsToAdd) n[e + "-" + i] = propsToAdd[i];
}
function fixSize(e) {
	return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
function render(e, n) {
	let i = mergeCustomisations(defaultExtendedIconCustomisations, n), a = n.mode || "svg", o = a === "svg" ? { ...svgDefaults } : {};
	e.body.indexOf("xlink:") === -1 && delete o["xmlns:xlink"];
	let s = typeof n.style == "string" ? n.style : "";
	for (let e in n) {
		let a = n[e];
		if (a === void 0) continue;
		switch (e) {
			case "icon":
			case "style":
			case "onLoad":
			case "mode":
			case "ssr": break;
			case "inline":
			case "hFlip":
			case "vFlip":
				i[e] = a === !0 || a === "true" || a === 1;
				break;
			case "flip":
				typeof a == "string" && flipFromString(i, a);
				break;
			case "color":
				s = s + (s.length > 0 && s.trim().slice(-1) !== ";" ? ";" : "") + "color: " + a + "; ";
				break;
			case "rotate":
				typeof a == "string" ? i[e] = rotateFromString(a) : typeof a == "number" && (i[e] = a);
				break;
			case "ariaHidden":
			case "aria-hidden":
				a !== !0 && a !== "true" && delete o["aria-hidden"];
				break;
			default:
				if (e.slice(0, 3) === "on:") break;
				defaultExtendedIconCustomisations[e] === void 0 && (o[e] = a);
		}
	}
	let c = iconToSVG(e, i), l = c.attributes;
	if (i.inline && (s = "vertical-align: -0.125em; " + s), a === "svg") {
		Object.assign(o, l), s !== "" && (o.style = s);
		let e = 0, i = n.id;
		return typeof i == "string" && (i = i.replace(/-/g, "_")), {
			svg: !0,
			attributes: o,
			body: replaceIDs(c.body, i ? () => i + "ID" + e++ : "iconifySvelte")
		};
	}
	let { body: u, width: d, height: f } = e, p = a === "mask" || (a === "bg" ? !1 : u.indexOf("currentColor") !== -1), m = iconToHTML(u, {
		...l,
		width: d + "",
		height: f + ""
	}), h = svgToURL(m), g = { "--svg": h }, _ = (e) => {
		let n = l[e];
		n && (g[e] = fixSize(n));
	};
	_("width"), _("height"), Object.assign(g, commonProps, p ? monotoneProps : coloredProps);
	let v = "";
	for (let e in g) v += e + ": " + g[e] + ";";
	return o.style = v + s, {
		svg: !1,
		attributes: o
	};
}
if (allowSimpleNames(!0), setAPIModule("", fetchAPIModule), typeof document < "u" && typeof window < "u") {
	let e = window;
	if (e.IconifyPreload !== void 0) {
		let n = e.IconifyPreload, i = "Invalid IconifyPreload syntax.";
		typeof n == "object" && n && (n instanceof Array ? n : [n]).forEach((e) => {
			try {
				(typeof e != "object" || !e || e instanceof Array || typeof e.icons != "object" || typeof e.prefix != "string" || !addCollection(e)) && console.error(i);
			} catch {
				console.error(i);
			}
		});
	}
	if (e.IconifyProviders !== void 0) {
		let n = e.IconifyProviders;
		if (typeof n == "object" && n) for (let e in n) {
			let i = "IconifyProviders[" + e + "] is invalid.";
			try {
				let a = n[e];
				if (typeof a != "object" || !a || a.resources === void 0) continue;
				addAPIProvider(e, a) || console.error(i);
			} catch {
				console.error(i);
			}
		}
	}
}
function checkIconState(e, n, i, a, o) {
	function s() {
		n.loading &&= (n.loading.abort(), null);
	}
	if (typeof e == "object" && e && typeof e.body == "string") return n.name = "", s(), { data: {
		...defaultIconProps,
		...e
	} };
	let c;
	if (typeof e != "string" || (c = stringToIcon(e, !1, !0)) === null) return s(), null;
	let l = getIconData(c);
	if (!l) return i && (!n.loading || n.loading.name !== e) && (s(), n.name = "", n.loading = {
		name: e,
		abort: loadIcons([c], a)
	}), null;
	s(), n.name !== e && (n.name = e, o && !n.destroyed && setTimeout(() => {
		o(e);
	}));
	let u = ["iconify"];
	return c.prefix !== "" && u.push("iconify--" + c.prefix), c.provider !== "" && u.push("iconify--" + c.provider), {
		data: l,
		classes: u
	};
}
function generateIcon(e, n) {
	return e ? render({
		...defaultIconProps,
		...e
	}, n) : null;
}
var root_2$27 = /* @__PURE__ */ from_svg("<svg><!></svg>"), root_3$14 = /* @__PURE__ */ from_html("<span></span>");
function Icon(e, n) {
	push(n, !0);
	let i = {
		name: "",
		loading: null,
		destroyed: !1
	}, a = /* @__PURE__ */ rest_props(n, [
		"$$slots",
		"$$events",
		"$$legacy"
	]), o = /* @__PURE__ */ state(!1), s = /* @__PURE__ */ state(0), c = /* @__PURE__ */ user_derived(() => !!n.ssr || get$2(o)), l = /* @__PURE__ */ user_derived(() => (get$2(s), checkIconState(n.icon, i, get$2(c), d, n.onload))), u = /* @__PURE__ */ user_derived(() => {
		let e = get$2(l) ? generateIcon(get$2(l).data, a) : null;
		return e && get$2(l).classes && (e.attributes.class = (typeof a.class == "string" ? a.class + " " : "") + get$2(l).classes.join(" ")), e;
	});
	function d() {
		update(s);
	}
	onMount(() => {
		set(o, !0);
	}), onDestroy(() => {
		i.destroyed = !0, i.loading &&= (i.loading.abort(), null);
	});
	var f = comment(), p = first_child(f), m = (e) => {
		var n = comment(), i = first_child(n), a = (e) => {
			var n = root_2$27();
			attribute_effect(n, () => ({ ...get$2(u).attributes }));
			var i = child(n);
			html(i, () => get$2(u).body, !0), reset(n), append(e, n);
		}, o = (e) => {
			var n = root_3$14();
			attribute_effect(n, () => ({ ...get$2(u).attributes })), append(e, n);
		};
		if_block(i, (e) => {
			get$2(u).svg ? e(a) : e(o, !1);
		}), append(e, n);
	};
	if_block(p, (e) => {
		get$2(u) && e(m);
	}), append(e, f), pop();
}
function isFunction$1(e) {
	return typeof e == "function";
}
function isObject(e) {
	return typeof e == "object" && !!e;
}
var CLASS_VALUE_PRIMITIVE_TYPES = [
	"string",
	"number",
	"bigint",
	"boolean"
];
function isClassValue(e) {
	return e == null || CLASS_VALUE_PRIMITIVE_TYPES.includes(typeof e) ? !0 : Array.isArray(e) ? e.every((e) => isClassValue(e)) : typeof e == "object" ? Object.getPrototypeOf(e) === Object.prototype : !1;
}
const BoxSymbol = Symbol("box"), isWritableSymbol = Symbol("is-writable");
function boxWith(e, n) {
	let i = /* @__PURE__ */ user_derived(e);
	return n ? {
		[BoxSymbol]: !0,
		[isWritableSymbol]: !0,
		get current() {
			return get$2(i);
		},
		set current(e) {
			n(e);
		}
	} : {
		[BoxSymbol]: !0,
		get current() {
			return e();
		}
	};
}
function isBox(e) {
	return isObject(e) && BoxSymbol in e;
}
function isWritableBox(e) {
	return isBox(e) && isWritableSymbol in e;
}
function boxFrom(e) {
	return isBox(e) ? e : isFunction$1(e) ? boxWith(e) : simpleBox(e);
}
function boxFlatten(e) {
	return Object.entries(e).reduce((e, [n, i]) => isBox(i) ? (isWritableBox(i) ? Object.defineProperty(e, n, {
		get() {
			return i.current;
		},
		set(e) {
			i.current = e;
		}
	}) : Object.defineProperty(e, n, { get() {
		return i.current;
	} }), e) : Object.assign(e, { [n]: i }), {});
}
function toReadonlyBox(e) {
	return isWritableBox(e) ? {
		[BoxSymbol]: !0,
		get current() {
			return e.current;
		}
	} : e;
}
function simpleBox(e) {
	let n = /* @__PURE__ */ state(proxy(e));
	return {
		[BoxSymbol]: !0,
		[isWritableSymbol]: !0,
		get current() {
			return get$2(n);
		},
		set current(e) {
			set(n, e, !0);
		}
	};
}
function box(e) {
	let n = /* @__PURE__ */ state(proxy(e));
	return {
		[BoxSymbol]: !0,
		[isWritableSymbol]: !0,
		get current() {
			return get$2(n);
		},
		set current(e) {
			set(n, e, !0);
		}
	};
}
box.from = boxFrom, box.with = boxWith, box.flatten = boxFlatten, box.readonly = toReadonlyBox, box.isBox = isBox, box.isWritableBox = isWritableBox;
function composeHandlers(...e) {
	return function(n) {
		for (let i of e) {
			if (!i) continue;
			if (n.defaultPrevented) return;
			typeof i == "function" ? i.call(this, n) : i.current?.call(this, n);
		}
	};
}
var require_inline_style_parser = /* @__PURE__ */ __commonJSMin(((exports, n) => {
	var i = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, a = /\n/g, o = /^\s*/, s = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, c = /^:\s*/, l = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, u = /^[;\s]*/, d = /^\s+|\s+$/g, f = "\n", p = "/", m = "*", h = "", g = "comment", _ = "declaration";
	n.exports = function(e, n) {
		if (typeof e != "string") throw TypeError("First argument must be a string");
		if (!e) return [];
		n ||= {};
		var d = 1, y = 1;
		function b(e) {
			var n = e.match(a);
			n && (d += n.length);
			var i = e.lastIndexOf(f);
			y = ~i ? e.length - i : y + e.length;
		}
		function x() {
			var e = {
				line: d,
				column: y
			};
			return function(n) {
				return n.position = new S(e), E(), n;
			};
		}
		function S(e) {
			this.start = e, this.end = {
				line: d,
				column: y
			}, this.source = n.source;
		}
		S.prototype.content = e;
		var C = [];
		function w(i) {
			var a = /* @__PURE__ */ Error(n.source + ":" + d + ":" + y + ": " + i);
			if (a.reason = i, a.filename = n.source, a.line = d, a.column = y, a.source = e, n.silent) C.push(a);
			else throw a;
		}
		function T(n) {
			var i = n.exec(e);
			if (i) {
				var a = i[0];
				return b(a), e = e.slice(a.length), i;
			}
		}
		function E() {
			T(o);
		}
		function D(e) {
			var n;
			for (e ||= []; n = O();) n !== !1 && e.push(n);
			return e;
		}
		function O() {
			var n = x();
			if (!(p != e.charAt(0) || m != e.charAt(1))) {
				for (var i = 2; h != e.charAt(i) && (m != e.charAt(i) || p != e.charAt(i + 1));) ++i;
				if (i += 2, h === e.charAt(i - 1)) return w("End of comment missing");
				var a = e.slice(2, i - 2);
				return y += 2, b(a), e = e.slice(i), y += 2, n({
					type: g,
					comment: a
				});
			}
		}
		function k() {
			var e = x(), n = T(s);
			if (n) {
				if (O(), !T(c)) return w("property missing ':'");
				var a = T(l), o = e({
					type: _,
					property: v(n[0].replace(i, h)),
					value: a ? v(a[0].replace(i, h)) : h
				});
				return T(u), o;
			}
		}
		function A() {
			var e = [];
			D(e);
			for (var n; n = k();) n !== !1 && (e.push(n), D(e));
			return e;
		}
		return E(), A();
	};
	function v(e) {
		return e ? e.replace(d, h) : h;
	}
})), import_cjs = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports) => {
	var n = exports && exports.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(exports, "__esModule", { value: !0 }), exports.default = a;
	var i = n(require_inline_style_parser());
	function a(e, n) {
		var a = null;
		if (!e || typeof e != "string") return a;
		var o = (0, i.default)(e), s = typeof n == "function";
		return o.forEach(function(e) {
			if (e.type === "declaration") {
				var i = e.property, o = e.value;
				s ? n(i, o, e) : o && (a ||= {}, a[i] = o);
			}
		}), a;
	}
})))(), 1), esm_default = import_cjs.default.default || import_cjs.default, NUMBER_CHAR_RE = /\d/, STR_SPLITTERS = [
	"-",
	"_",
	"/",
	"."
];
function isUppercase(e = "") {
	if (!NUMBER_CHAR_RE.test(e)) return e !== e.toLowerCase();
}
function splitByCase(e) {
	let n = [], i = "", a, o;
	for (let s of e) {
		let e = STR_SPLITTERS.includes(s);
		if (e === !0) {
			n.push(i), i = "", a = void 0;
			continue;
		}
		let c = isUppercase(s);
		if (o === !1) {
			if (a === !1 && c === !0) {
				n.push(i), i = s, a = c;
				continue;
			}
			if (a === !0 && c === !1 && i.length > 1) {
				let e = i.at(-1);
				n.push(i.slice(0, Math.max(0, i.length - 1))), i = e + s, a = c;
				continue;
			}
		}
		i += s, a = c, o = e;
	}
	return n.push(i), n;
}
function pascalCase(e) {
	return e ? splitByCase(e).map((e) => upperFirst(e)).join("") : "";
}
function camelCase(e) {
	return lowerFirst(pascalCase(e || ""));
}
function upperFirst(e) {
	return e ? e[0].toUpperCase() + e.slice(1) : "";
}
function lowerFirst(e) {
	return e ? e[0].toLowerCase() + e.slice(1) : "";
}
function cssToStyleObj(e) {
	if (!e) return {};
	let n = {};
	function i(e, i) {
		if (e.startsWith("-moz-") || e.startsWith("-webkit-") || e.startsWith("-ms-") || e.startsWith("-o-")) {
			n[pascalCase(e)] = i;
			return;
		}
		if (e.startsWith("--")) {
			n[e] = i;
			return;
		}
		n[camelCase(e)] = i;
	}
	return esm_default(e, i), n;
}
function executeCallbacks(...e) {
	return (...n) => {
		for (let i of e) typeof i == "function" && i(...n);
	};
}
function createParser(e, n) {
	let i = RegExp(e, "g");
	return (e) => {
		if (typeof e != "string") throw TypeError(`expected an argument of type string, but got ${typeof e}`);
		return e.match(i) ? e.replace(i, n) : e;
	};
}
var camelToKebab = createParser(/[A-Z]/, (e) => `-${e.toLowerCase()}`);
function styleToCSS(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError(`expected an argument of type object, but got ${typeof e}`);
	return Object.keys(e).map((n) => `${camelToKebab(n)}: ${e[n]};`).join("\n");
}
function styleToString(e = {}) {
	return styleToCSS(e).replace("\n", " ");
}
var EVENT_LIST = /* @__PURE__ */ "onabort.onanimationcancel.onanimationend.onanimationiteration.onanimationstart.onauxclick.onbeforeinput.onbeforetoggle.onblur.oncancel.oncanplay.oncanplaythrough.onchange.onclick.onclose.oncompositionend.oncompositionstart.oncompositionupdate.oncontextlost.oncontextmenu.oncontextrestored.oncopy.oncuechange.oncut.ondblclick.ondrag.ondragend.ondragenter.ondragleave.ondragover.ondragstart.ondrop.ondurationchange.onemptied.onended.onerror.onfocus.onfocusin.onfocusout.onformdata.ongotpointercapture.oninput.oninvalid.onkeydown.onkeypress.onkeyup.onload.onloadeddata.onloadedmetadata.onloadstart.onlostpointercapture.onmousedown.onmouseenter.onmouseleave.onmousemove.onmouseout.onmouseover.onmouseup.onpaste.onpause.onplay.onplaying.onpointercancel.onpointerdown.onpointerenter.onpointerleave.onpointermove.onpointerout.onpointerover.onpointerup.onprogress.onratechange.onreset.onresize.onscroll.onscrollend.onsecuritypolicyviolation.onseeked.onseeking.onselect.onselectionchange.onselectstart.onslotchange.onstalled.onsubmit.onsuspend.ontimeupdate.ontoggle.ontouchcancel.ontouchend.ontouchmove.ontouchstart.ontransitioncancel.ontransitionend.ontransitionrun.ontransitionstart.onvolumechange.onwaiting.onwebkitanimationend.onwebkitanimationiteration.onwebkitanimationstart.onwebkittransitionend.onwheel".split(".");
const EVENT_LIST_SET = new Set(EVENT_LIST);
function isEventHandler(e) {
	return EVENT_LIST_SET.has(e);
}
function mergeProps(...e) {
	let n = { ...e[0] };
	for (let i = 1; i < e.length; i++) {
		let a = e[i];
		if (a) {
			for (let e of Object.keys(a)) {
				let i = n[e], o = a[e], s = typeof i == "function", c = typeof o == "function";
				if (s && typeof c && isEventHandler(e)) n[e] = composeHandlers(i, o);
				else if (s && c) n[e] = executeCallbacks(i, o);
				else if (e === "class") {
					let a = isClassValue(i), s = isClassValue(o);
					a && s ? n[e] = clsx(i, o) : a ? n[e] = clsx(i) : s && (n[e] = clsx(o));
				} else if (e === "style") {
					let a = typeof i == "object", s = typeof o == "object", c = typeof i == "string", l = typeof o == "string";
					if (a && s) n[e] = {
						...i,
						...o
					};
					else if (a && l) {
						let a = cssToStyleObj(o);
						n[e] = {
							...i,
							...a
						};
					} else if (c && s) n[e] = {
						...cssToStyleObj(i),
						...o
					};
					else if (c && l) {
						let a = cssToStyleObj(i), s = cssToStyleObj(o);
						n[e] = {
							...a,
							...s
						};
					} else a ? n[e] = i : s ? n[e] = o : c ? n[e] = i : l && (n[e] = o);
				} else n[e] = o === void 0 ? i : o;
			}
			for (let e of Object.getOwnPropertySymbols(a)) {
				let i = n[e], o = a[e];
				n[e] = o === void 0 ? i : o;
			}
		}
	}
	return typeof n.style == "object" && (n.style = styleToString(n.style).replaceAll("\n", " ")), n.hidden === !1 && (n.hidden = void 0, delete n.hidden), n.disabled === !1 && (n.disabled = void 0, delete n.disabled), n;
}
var read_methods = [
	"forEach",
	"isDisjointFrom",
	"isSubsetOf",
	"isSupersetOf"
], set_like_methods = [
	"difference",
	"intersection",
	"symmetricDifference",
	"union"
], inited = !1, SvelteSet = class e extends Set {
	#sources = /* @__PURE__ */ new Map();
	#version = /* @__PURE__ */ state(0);
	#size = /* @__PURE__ */ state(0);
	#update_version = update_version || -1;
	constructor(e) {
		if (super(), e) {
			for (var n of e) super.add(n);
			this.#size.v = super.size;
		}
		inited || this.#init();
	}
	#source(e) {
		return update_version === this.#update_version ? /* @__PURE__ */ state(e) : source(e);
	}
	#init() {
		inited = !0;
		var n = e.prototype, i = Set.prototype;
		for (let e of read_methods) n[e] = function(...n) {
			return get$2(this.#version), i[e].apply(this, n);
		};
		for (let a of set_like_methods) n[a] = function(...n) {
			get$2(this.#version);
			var o = i[a].apply(this, n);
			return new e(o);
		};
	}
	has(e) {
		var n = super.has(e), i = this.#sources, a = i.get(e);
		if (a === void 0) {
			if (!n) return get$2(this.#version), !1;
			a = this.#source(!0), i.set(e, a);
		}
		return get$2(a), n;
	}
	add(e) {
		return super.has(e) || (super.add(e), set(this.#size, super.size), increment(this.#version)), this;
	}
	delete(e) {
		var n = super.delete(e), i = this.#sources, a = i.get(e);
		return a !== void 0 && (i.delete(e), set(a, !1)), n && (set(this.#size, super.size), increment(this.#version)), n;
	}
	clear() {
		if (super.size !== 0) {
			super.clear();
			var e = this.#sources;
			for (var n of e.values()) set(n, !1);
			e.clear(), set(this.#size, 0), increment(this.#version);
		}
	}
	keys() {
		return this.values();
	}
	values() {
		return get$2(this.#version), super.values();
	}
	entries() {
		return get$2(this.#version), super.entries();
	}
	[Symbol.iterator]() {
		return this.keys();
	}
	get size() {
		return get$2(this.#size);
	}
}, SvelteMap = class extends Map {
	#sources = /* @__PURE__ */ new Map();
	#version = /* @__PURE__ */ state(0);
	#size = /* @__PURE__ */ state(0);
	#update_version = update_version || -1;
	constructor(e) {
		if (super(), e) {
			for (var [n, i] of e) super.set(n, i);
			this.#size.v = super.size;
		}
	}
	#source(e) {
		return update_version === this.#update_version ? /* @__PURE__ */ state(e) : source(e);
	}
	has(e) {
		var n = this.#sources, i = n.get(e);
		if (i === void 0) if (super.get(e) !== void 0) i = this.#source(0), n.set(e, i);
		else return get$2(this.#version), !1;
		return get$2(i), !0;
	}
	forEach(e, n) {
		this.#read_all(), super.forEach(e, n);
	}
	get(e) {
		var n = this.#sources, i = n.get(e);
		if (i === void 0) if (super.get(e) !== void 0) i = this.#source(0), n.set(e, i);
		else {
			get$2(this.#version);
			return;
		}
		return get$2(i), super.get(e);
	}
	set(e, n) {
		var i = this.#sources, a = i.get(e), o = super.get(e), s = super.set(e, n), c = this.#version;
		if (a === void 0) a = this.#source(0), i.set(e, a), set(this.#size, super.size), increment(c);
		else if (o !== n) {
			increment(a);
			var l = c.reactions === null ? null : new Set(c.reactions);
			(l === null || !a.reactions?.every((e) => l.has(e))) && increment(c);
		}
		return s;
	}
	delete(e) {
		var n = this.#sources, i = n.get(e), a = super.delete(e);
		return i !== void 0 && (n.delete(e), set(this.#size, super.size), set(i, -1), increment(this.#version)), a;
	}
	clear() {
		if (super.size !== 0) {
			super.clear();
			var e = this.#sources;
			set(this.#size, 0);
			for (var n of e.values()) set(n, -1);
			increment(this.#version), e.clear();
		}
	}
	#read_all() {
		get$2(this.#version);
		var e = this.#sources;
		if (this.#size.v !== e.size) {
			for (var n of super.keys()) if (!e.has(n)) {
				var i = this.#source(0);
				e.set(n, i);
			}
		}
		for ([, i] of this.#sources) get$2(i);
	}
	keys() {
		return get$2(this.#version), super.keys();
	}
	values() {
		return this.#read_all(), super.values();
	}
	entries() {
		return this.#read_all(), super.entries();
	}
	[Symbol.iterator]() {
		return this.entries();
	}
	get size() {
		return get$2(this.#size), super.size;
	}
};
URLSearchParams, Symbol.iterator;
function onDestroyEffect(e) {
	user_effect(() => () => {
		e();
	});
}
function onMountEffect(e) {
	user_effect(() => untrack(() => e()));
}
function afterSleep(e, n) {
	return setTimeout(n, e);
}
function afterTick(e) {
	tick().then(e);
}
var ELEMENT_NODE = 1, DOCUMENT_NODE = 9, DOCUMENT_FRAGMENT_NODE = 11;
function isHTMLElement$2(e) {
	return isObject(e) && e.nodeType === ELEMENT_NODE && typeof e.nodeName == "string";
}
function isDocument(e) {
	return isObject(e) && e.nodeType === DOCUMENT_NODE;
}
function isWindow(e) {
	return isObject(e) && e.constructor?.name === "VisualViewport";
}
function isNode$1(e) {
	return isObject(e) && e.nodeType !== void 0;
}
function isShadowRoot$1(e) {
	return isNode$1(e) && e.nodeType === DOCUMENT_FRAGMENT_NODE && "host" in e;
}
function contains(e, n) {
	if (!e || !n || !isHTMLElement$2(e) || !isHTMLElement$2(n)) return !1;
	let i = n.getRootNode?.();
	if (e === n || e.contains(n)) return !0;
	if (i && isShadowRoot$1(i)) {
		let i = n;
		for (; i;) {
			if (e === i) return !0;
			i = i.parentNode || i.host;
		}
	}
	return !1;
}
function getDocument(e) {
	return isDocument(e) ? e : isWindow(e) ? e.document : e?.ownerDocument ?? document;
}
function getWindow(e) {
	return isShadowRoot$1(e) ? getWindow(e.host) : isDocument(e) ? e.defaultView ?? window : isHTMLElement$2(e) ? e.ownerDocument?.defaultView ?? window : window;
}
function getActiveElement$1(e) {
	let n = e.activeElement;
	for (; n?.shadowRoot;) {
		let e = n.shadowRoot.activeElement;
		if (e === n) break;
		n = e;
	}
	return n;
}
var DOMContext = class {
	element;
	#root = /* @__PURE__ */ user_derived(() => this.element.current ? this.element.current.getRootNode() ?? document : document);
	get root() {
		return get$2(this.#root);
	}
	set root(e) {
		set(this.#root, e);
	}
	constructor(e) {
		typeof e == "function" ? this.element = boxWith(e) : this.element = e;
	}
	getDocument = () => getDocument(this.root);
	getWindow = () => this.getDocument().defaultView ?? window;
	getActiveElement = () => getActiveElement$1(this.root);
	isActiveElement = (e) => e === this.getActiveElement();
	getElementById(e) {
		return this.root.getElementById(e);
	}
	querySelector = (e) => this.root ? this.root.querySelector(e) : null;
	querySelectorAll = (e) => this.root ? this.root.querySelectorAll(e) : [];
	setTimeout = (e, n) => this.getWindow().setTimeout(e, n);
	clearTimeout = (e) => this.getWindow().clearTimeout(e);
};
function attachRef(e, n) {
	return { [createAttachmentKey()]: (i) => isBox(e) ? (e.current = i, untrack(() => n?.(i)), () => {
		"isConnected" in i && i.isConnected || (e.current = null, n?.(null));
	}) : (e(i), untrack(() => n?.(i)), () => {
		"isConnected" in i && i.isConnected || (e(null), n?.(null));
	}) };
}
const defaultWindow = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
function getActiveElement(e) {
	let n = e.activeElement;
	for (; n?.shadowRoot;) {
		let e = n.shadowRoot.activeElement;
		if (e === n) break;
		n = e;
	}
	return n;
}
new class {
	#document;
	#subscribe;
	constructor(e = {}) {
		let { window: n = defaultWindow, document: i = n?.document } = e;
		n !== void 0 && (this.#document = i, this.#subscribe = createSubscriber((e) => {
			let i = on(n, "focusin", e), a = on(n, "focusout", e);
			return () => {
				i(), a();
			};
		}));
	}
	get current() {
		return this.#subscribe?.(), this.#document ? getActiveElement(this.#document) : null;
	}
}();
function isFunction(e) {
	return typeof e == "function";
}
var Context = class {
	#name;
	#key;
	constructor(e) {
		this.#name = e, this.#key = Symbol(e);
	}
	get key() {
		return this.#key;
	}
	exists() {
		return hasContext(this.#key);
	}
	get() {
		let e = getContext(this.#key);
		if (e === void 0) throw Error(`Context "${this.#name}" not found`);
		return e;
	}
	getOr(e) {
		let n = getContext(this.#key);
		return n === void 0 ? e : n;
	}
	set(e) {
		return setContext(this.#key, e);
	}
};
function runEffect(e, n) {
	switch (e) {
		case "post":
			user_effect(n);
			break;
		case "pre":
			user_pre_effect(n);
			break;
	}
}
function runWatcher(e, n, i, a = {}) {
	let { lazy: o = !1 } = a, s = !o, c = Array.isArray(e) ? [] : void 0;
	runEffect(n, () => {
		let n = Array.isArray(e) ? e.map((e) => e()) : e();
		if (!s) {
			s = !0, c = n;
			return;
		}
		let a = untrack(() => i(n, c));
		return c = n, a;
	});
}
function runWatcherOnce(e, n, i) {
	let a = effect_root(() => {
		let o = !1;
		runWatcher(e, n, (e, n) => {
			if (o) {
				a();
				return;
			}
			let s = i(e, n);
			return o = !0, s;
		}, { lazy: !0 });
	});
	user_effect(() => a);
}
function watch(e, n, i) {
	runWatcher(e, "post", n, i);
}
function watchPre(e, n, i) {
	runWatcher(e, "pre", n, i);
}
watch.pre = watchPre;
function watchOnce(e, n) {
	runWatcherOnce(e, "post", n);
}
function watchOncePre(e, n) {
	runWatcherOnce(e, "pre", n);
}
watchOnce.pre = watchOncePre;
function get$1(e) {
	return isFunction(e) ? e() : e;
}
var ElementSize = class {
	#size = {
		width: 0,
		height: 0
	};
	#observed = !1;
	#options;
	#node;
	#window;
	#width = /* @__PURE__ */ user_derived(() => (get$2(this.#subscribe)?.(), this.getSize().width));
	#height = /* @__PURE__ */ user_derived(() => (get$2(this.#subscribe)?.(), this.getSize().height));
	#subscribe = /* @__PURE__ */ user_derived(() => {
		let e = get$1(this.#node);
		if (e) return createSubscriber((n) => {
			if (!this.#window) return;
			let i = new this.#window.ResizeObserver((e) => {
				this.#observed = !0;
				for (let n of e) {
					let e = this.#options.box === "content-box" ? n.contentBoxSize : n.borderBoxSize, i = Array.isArray(e) ? e : [e];
					this.#size.width = i.reduce((e, n) => Math.max(e, n.inlineSize), 0), this.#size.height = i.reduce((e, n) => Math.max(e, n.blockSize), 0);
				}
				n();
			});
			return i.observe(e), () => {
				this.#observed = !1, i.disconnect();
			};
		});
	});
	constructor(e, n = { box: "border-box" }) {
		this.#window = n.window ?? defaultWindow, this.#options = n, this.#node = e, this.#size = {
			width: 0,
			height: 0
		};
	}
	calculateSize() {
		let e = get$1(this.#node);
		if (!e || !this.#window) return;
		let n = e.offsetWidth, i = e.offsetHeight;
		if (this.#options.box === "border-box") return {
			width: n,
			height: i
		};
		let a = this.#window.getComputedStyle(e), o = parseFloat(a.paddingLeft) + parseFloat(a.paddingRight), s = parseFloat(a.paddingTop) + parseFloat(a.paddingBottom), c = parseFloat(a.borderLeftWidth) + parseFloat(a.borderRightWidth), l = parseFloat(a.borderTopWidth) + parseFloat(a.borderBottomWidth), u = n - o - c, d = i - s - l;
		return {
			width: u,
			height: d
		};
	}
	getSize() {
		return this.#observed ? this.#size : this.calculateSize() ?? this.#size;
	}
	get current() {
		return get$2(this.#subscribe)?.(), this.getSize();
	}
	get width() {
		return get$2(this.#width);
	}
	get height() {
		return get$2(this.#height);
	}
}, Previous = class {
	#previous = /* @__PURE__ */ state(void 0);
	constructor(e, n) {
		n !== void 0 && set(this.#previous, n, !0), watch(() => e(), (e, n) => {
			set(this.#previous, n, !0);
		});
	}
	get current() {
		return get$2(this.#previous);
	}
};
function debounce$1(e, n) {
	let i, a = null;
	return (...o) => new Promise((s) => {
		a && a(void 0), a = s, clearTimeout(i), i = setTimeout(async () => {
			let n = await e(...o);
			a &&= (a(n), null);
		}, n);
	});
}
function throttle(e, n) {
	let i = 0, a = null;
	return (...o) => {
		let s = Date.now();
		return i && s - i < n ? a ?? Promise.resolve(void 0) : (i = s, a = e(...o), a);
	};
}
function runResource(e, n, i = {}, a) {
	let { lazy: o = !1, once: s = !1, initialValue: c, debounce: l, throttle: u } = i, d = /* @__PURE__ */ state(proxy(c)), f = /* @__PURE__ */ state(!1), p = /* @__PURE__ */ state(void 0), m = /* @__PURE__ */ state(proxy([])), h = () => {
		get$2(m).forEach((e) => e()), set(m, [], !0);
	}, g = (e) => {
		set(m, [...get$2(m), e], !0);
	}, _ = async (e, i, a = !1) => {
		try {
			set(f, !0), set(p, void 0), h();
			let o = new AbortController();
			g(() => o.abort());
			let s = await n(e, i, {
				data: get$2(d),
				refetching: a,
				onCleanup: g,
				signal: o.signal
			});
			return set(d, s, !0), s;
		} catch (e) {
			e instanceof DOMException && e.name === "AbortError" || set(p, e, !0);
			return;
		} finally {
			set(f, !1);
		}
	}, v = l ? debounce$1(_, l) : u ? throttle(_, u) : _, y = Array.isArray(e) ? e : [e], b;
	return a((n, i) => {
		s && b || (b = n, v(Array.isArray(e) ? n : n[0], Array.isArray(e) ? i : i?.[0]));
	}, { lazy: o }), {
		get current() {
			return get$2(d);
		},
		get loading() {
			return get$2(f);
		},
		get error() {
			return get$2(p);
		},
		mutate: (e) => {
			set(d, e, !0);
		},
		refetch: (n) => {
			let i = y.map((e) => e());
			return v(Array.isArray(e) ? i : i[0], Array.isArray(e) ? i : i[0], n ?? !0);
		}
	};
}
function resource(e, n, i) {
	return runResource(e, n, i, (n, i) => {
		let a = Array.isArray(e) ? e : [e];
		watch(() => a.map((e) => e()), (e, i) => {
			n(e, i ?? []);
		}, i);
	});
}
function resourcePre(e, n, i) {
	return runResource(e, n, i, (n, i) => {
		let a = Array.isArray(e) ? e : [e];
		watch.pre(() => a.map((e) => e()), (e, i) => {
			n(e, i ?? []);
		}, i);
	});
}
resource.pre = resourcePre;
function boolToStr(e) {
	return e ? "true" : "false";
}
function boolToEmptyStrOrUndef(e) {
	return e ? "" : void 0;
}
function boolToTrueOrUndef(e) {
	return e ? !0 : void 0;
}
function getDataOpenClosed(e) {
	return e ? "open" : "closed";
}
function getAriaChecked(e, n) {
	return n ? "mixed" : e ? "true" : "false";
}
var BitsAttrs = class {
	#variant;
	#prefix;
	attrs;
	constructor(e) {
		this.#variant = e.getVariant ? e.getVariant() : null, this.#prefix = this.#variant ? `data-${this.#variant}-` : `data-${e.component}-`, this.getAttr = this.getAttr.bind(this), this.selector = this.selector.bind(this), this.attrs = Object.fromEntries(e.parts.map((e) => [e, this.getAttr(e)]));
	}
	getAttr(e, n) {
		return n ? `data-${n}-${e}` : `${this.#prefix}${e}`;
	}
	selector(e, n) {
		return `[${this.getAttr(e, n)}]`;
	}
};
function createBitsAttrs(e) {
	let n = new BitsAttrs(e);
	return {
		...n.attrs,
		selector: n.selector,
		getAttr: n.getAttr
	};
}
function getElemDirection(e) {
	return window.getComputedStyle(e).getPropertyValue("direction");
}
const FIRST_KEYS = [
	"ArrowDown",
	"PageUp",
	"Home"
], LAST_KEYS = [
	"ArrowUp",
	"PageDown",
	"End"
];
[...FIRST_KEYS, ...LAST_KEYS];
function getNextKey(e = "ltr", n = "horizontal") {
	return {
		horizontal: e === "rtl" ? "ArrowLeft" : "ArrowRight",
		vertical: "ArrowDown"
	}[n];
}
function getPrevKey(e = "ltr", n = "horizontal") {
	return {
		horizontal: e === "rtl" ? "ArrowRight" : "ArrowLeft",
		vertical: "ArrowUp"
	}[n];
}
function getDirectionalKeys(e = "ltr", n = "horizontal") {
	return ["ltr", "rtl"].includes(e) || (e = "ltr"), ["horizontal", "vertical"].includes(n) || (n = "horizontal"), {
		nextKey: getNextKey(e, n),
		prevKey: getPrevKey(e, n)
	};
}
const isBrowser = typeof document < "u", isIOS = getIsIOS();
function getIsIOS() {
	return isBrowser && window?.navigator?.userAgent && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || window?.navigator?.maxTouchPoints > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function isHTMLElement(e) {
	return e instanceof HTMLElement;
}
function isElement(e) {
	return e instanceof Element;
}
function isFocusVisible(e) {
	return e.matches(":focus-visible");
}
function isNotNull(e) {
	return e !== null;
}
var RovingFocusGroup = class {
	#opts;
	#currentTabStopId = box(null);
	constructor(e) {
		this.#opts = e;
	}
	getCandidateNodes() {
		return this.#opts.rootNode.current ? this.#opts.candidateSelector ? Array.from(this.#opts.rootNode.current.querySelectorAll(this.#opts.candidateSelector)) : this.#opts.candidateAttr ? Array.from(this.#opts.rootNode.current.querySelectorAll(`[${this.#opts.candidateAttr}]:not([data-disabled])`)) : [] : [];
	}
	focusFirstCandidate() {
		let e = this.getCandidateNodes();
		e.length && e[0]?.focus();
	}
	handleKeydown(e, n, i = !1) {
		let a = this.#opts.rootNode.current;
		if (!a || !e) return;
		let o = this.getCandidateNodes();
		if (!o.length) return;
		let s = o.indexOf(e), c = getElemDirection(a), { nextKey: l, prevKey: u } = getDirectionalKeys(c, this.#opts.orientation.current), d = this.#opts.loop.current, f = {
			[l]: s + 1,
			[u]: s - 1,
			Home: 0,
			End: o.length - 1
		};
		if (i) {
			let e = l === "ArrowDown" ? "ArrowRight" : "ArrowDown", n = u === "ArrowUp" ? "ArrowLeft" : "ArrowUp";
			f[e] = s + 1, f[n] = s - 1;
		}
		let p = f[n.key];
		if (p === void 0) return;
		n.preventDefault(), p < 0 && d ? p = o.length - 1 : p === o.length && d && (p = 0);
		let m = o[p];
		if (m) return m.focus(), this.#currentTabStopId.current = m.id, this.#opts.onCandidateFocus?.(m), m;
	}
	getTabIndex(e) {
		let n = this.getCandidateNodes(), i = this.#currentTabStopId.current !== null;
		return e && !i && n[0] === e ? (this.#currentTabStopId.current = e.id, 0) : e?.id === this.#currentTabStopId.current ? 0 : -1;
	}
	setCurrentTabStopId(e) {
		this.#currentTabStopId.current = e;
	}
	focusCurrentTabStop() {
		let e = this.#currentTabStopId.current;
		if (!e) return;
		let n = this.#opts.rootNode.current?.querySelector(`#${e}`);
		!n || !isHTMLElement(n) || n.focus();
	}
};
function noop() {}
function createId(e, n) {
	return n === void 0 ? `bits-${e}` : `bits-${e}-${n}`;
}
var StateMachine = class {
	state;
	#machine;
	constructor(e, n) {
		this.state = simpleBox(e), this.#machine = n, this.dispatch = this.dispatch.bind(this);
	}
	#reducer(e) {
		return this.#machine[this.state.current][e] ?? this.state.current;
	}
	dispatch(e) {
		this.state.current = this.#reducer(e);
	}
}, presenceMachine = {
	mounted: {
		UNMOUNT: "unmounted",
		ANIMATION_OUT: "unmountSuspended"
	},
	unmountSuspended: {
		MOUNT: "mounted",
		ANIMATION_END: "unmounted"
	},
	unmounted: { MOUNT: "mounted" }
}, Presence = class {
	opts;
	#prevAnimationNameState = /* @__PURE__ */ state("none");
	get prevAnimationNameState() {
		return get$2(this.#prevAnimationNameState);
	}
	set prevAnimationNameState(e) {
		set(this.#prevAnimationNameState, e, !0);
	}
	#styles = /* @__PURE__ */ state(proxy({}));
	get styles() {
		return get$2(this.#styles);
	}
	set styles(e) {
		set(this.#styles, e, !0);
	}
	initialStatus;
	previousPresent;
	machine;
	present;
	constructor(e) {
		this.opts = e, this.present = this.opts.open, this.initialStatus = e.open.current ? "mounted" : "unmounted", this.previousPresent = new Previous(() => this.present.current), this.machine = new StateMachine(this.initialStatus, presenceMachine), this.handleAnimationEnd = this.handleAnimationEnd.bind(this), this.handleAnimationStart = this.handleAnimationStart.bind(this), watchPresenceChange(this), watchStatusChange(this), watchRefChange(this);
	}
	handleAnimationEnd(e) {
		if (!this.opts.ref.current) return;
		let n = getAnimationName(this.opts.ref.current), i = n.includes(e.animationName) || n === "none";
		e.target === this.opts.ref.current && i && this.machine.dispatch("ANIMATION_END");
	}
	handleAnimationStart(e) {
		this.opts.ref.current && e.target === this.opts.ref.current && (this.prevAnimationNameState = getAnimationName(this.opts.ref.current));
	}
	#isPresent = /* @__PURE__ */ user_derived(() => ["mounted", "unmountSuspended"].includes(this.machine.state.current));
	get isPresent() {
		return get$2(this.#isPresent);
	}
	set isPresent(e) {
		set(this.#isPresent, e);
	}
};
function watchPresenceChange(e) {
	watch(() => e.present.current, () => {
		if (!e.opts.ref.current || e.present.current === e.previousPresent.current) return;
		let n = e.prevAnimationNameState, i = getAnimationName(e.opts.ref.current);
		if (e.present.current) e.machine.dispatch("MOUNT");
		else if (i === "none" || e.styles.display === "none") e.machine.dispatch("UNMOUNT");
		else {
			let a = n !== i;
			e.previousPresent.current && a ? e.machine.dispatch("ANIMATION_OUT") : e.machine.dispatch("UNMOUNT");
		}
	});
}
function watchStatusChange(e) {
	watch(() => e.machine.state.current, () => {
		if (!e.opts.ref.current) return;
		let n = getAnimationName(e.opts.ref.current);
		e.prevAnimationNameState = e.machine.state.current === "mounted" ? n : "none";
	});
}
function watchRefChange(e) {
	watch(() => e.opts.ref.current, () => {
		if (e.opts.ref.current) return e.styles = getComputedStyle(e.opts.ref.current), executeCallbacks(on(e.opts.ref.current, "animationstart", e.handleAnimationStart), on(e.opts.ref.current, "animationcancel", e.handleAnimationEnd), on(e.opts.ref.current, "animationend", e.handleAnimationEnd));
	});
}
function getAnimationName(e) {
	return e && getComputedStyle(e).animationName || "none";
}
function Presence_layer(e, n) {
	push(n, !0);
	let i = new Presence({
		open: boxWith(() => n.open),
		ref: n.ref
	});
	var a = comment(), o = first_child(a), s = (e) => {
		var a = comment(), o = first_child(a);
		snippet(o, () => n.presence ?? noop$1, () => ({ present: i.isPresent })), append(e, a);
	};
	if_block(o, (e) => {
		(n.forceMount || n.open || i.isPresent) && e(s);
	}), append(e, a), pop();
}
var AnimationsComplete = class {
	#opts;
	#currentFrame = void 0;
	#isRunning = !1;
	constructor(e) {
		this.#opts = e, onDestroyEffect(() => this.#cleanup());
	}
	#cleanup() {
		this.#currentFrame &&= (window.cancelAnimationFrame(this.#currentFrame), void 0), this.#isRunning = !1;
	}
	run(e) {
		if (this.#isRunning) return;
		this.#cleanup(), this.#isRunning = !0;
		let n = this.#opts.ref.current;
		if (!n) {
			this.#isRunning = !1;
			return;
		}
		if (typeof n.getAnimations != "function") {
			this.#executeCallback(e);
			return;
		}
		this.#currentFrame = window.requestAnimationFrame(() => {
			let i = n.getAnimations();
			if (i.length === 0) {
				this.#executeCallback(e);
				return;
			}
			Promise.allSettled(i.map((e) => e.finished)).then(() => {
				this.#executeCallback(e);
			});
		});
	}
	#executeCallback(e) {
		let n = () => {
			e(), this.#isRunning = !1;
		};
		this.#opts.afterTick ? afterTick(n) : n();
	}
}, OpenChangeComplete = class {
	#opts;
	#enabled;
	#afterAnimations;
	constructor(e) {
		this.#opts = e, this.#enabled = e.enabled ?? !0, this.#afterAnimations = new AnimationsComplete({
			ref: this.#opts.ref,
			afterTick: this.#opts.open
		}), watch([() => this.#opts.open.current], ([e]) => {
			this.#enabled && this.#afterAnimations.run(() => {
				e === this.#opts.open.current && this.#opts.onComplete();
			});
		});
	}
}, dialogAttrs = createBitsAttrs({
	component: "dialog",
	parts: [
		"content",
		"trigger",
		"overlay",
		"title",
		"description",
		"close",
		"cancel",
		"action"
	]
}), DialogRootContext = new Context("Dialog.Root | AlertDialog.Root"), DialogRootState = class e {
	static create(n) {
		return DialogRootContext.set(new e(n));
	}
	opts;
	#triggerNode = /* @__PURE__ */ state(null);
	get triggerNode() {
		return get$2(this.#triggerNode);
	}
	set triggerNode(e) {
		set(this.#triggerNode, e, !0);
	}
	#contentNode = /* @__PURE__ */ state(null);
	get contentNode() {
		return get$2(this.#contentNode);
	}
	set contentNode(e) {
		set(this.#contentNode, e, !0);
	}
	#descriptionNode = /* @__PURE__ */ state(null);
	get descriptionNode() {
		return get$2(this.#descriptionNode);
	}
	set descriptionNode(e) {
		set(this.#descriptionNode, e, !0);
	}
	#contentId = /* @__PURE__ */ state(void 0);
	get contentId() {
		return get$2(this.#contentId);
	}
	set contentId(e) {
		set(this.#contentId, e, !0);
	}
	#titleId = /* @__PURE__ */ state(void 0);
	get titleId() {
		return get$2(this.#titleId);
	}
	set titleId(e) {
		set(this.#titleId, e, !0);
	}
	#triggerId = /* @__PURE__ */ state(void 0);
	get triggerId() {
		return get$2(this.#triggerId);
	}
	set triggerId(e) {
		set(this.#triggerId, e, !0);
	}
	#descriptionId = /* @__PURE__ */ state(void 0);
	get descriptionId() {
		return get$2(this.#descriptionId);
	}
	set descriptionId(e) {
		set(this.#descriptionId, e, !0);
	}
	#cancelNode = /* @__PURE__ */ state(null);
	get cancelNode() {
		return get$2(this.#cancelNode);
	}
	set cancelNode(e) {
		set(this.#cancelNode, e, !0);
	}
	constructor(e) {
		this.opts = e, this.handleOpen = this.handleOpen.bind(this), this.handleClose = this.handleClose.bind(this), new OpenChangeComplete({
			ref: boxWith(() => this.contentNode),
			open: this.opts.open,
			enabled: !0,
			onComplete: () => {
				this.opts.onOpenChangeComplete.current(this.opts.open.current);
			}
		});
	}
	handleOpen() {
		this.opts.open.current || (this.opts.open.current = !0);
	}
	handleClose() {
		this.opts.open.current && (this.opts.open.current = !1);
	}
	getBitsAttr = (e) => dialogAttrs.getAttr(e, this.opts.variant.current);
	#sharedProps = /* @__PURE__ */ user_derived(() => ({ "data-state": getDataOpenClosed(this.opts.open.current) }));
	get sharedProps() {
		return get$2(this.#sharedProps);
	}
	set sharedProps(e) {
		set(this.#sharedProps, e);
	}
}, DialogCloseState = class e {
	static create(n) {
		return new e(n, DialogRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(e, n) {
		this.opts = e, this.root = n, this.attachment = attachRef(this.opts.ref), this.onclick = this.onclick.bind(this), this.onkeydown = this.onkeydown.bind(this);
	}
	onclick(e) {
		this.opts.disabled.current || e.button > 0 || this.root.handleClose();
	}
	onkeydown(e) {
		this.opts.disabled.current || (e.key === " " || e.key === "Enter") && (e.preventDefault(), this.root.handleClose());
	}
	#props = /* @__PURE__ */ user_derived(() => ({
		id: this.opts.id.current,
		[this.root.getBitsAttr(this.opts.variant.current)]: "",
		onclick: this.onclick,
		onkeydown: this.onkeydown,
		disabled: this.opts.disabled.current ? !0 : void 0,
		tabindex: 0,
		...this.root.sharedProps,
		...this.attachment
	}));
	get props() {
		return get$2(this.#props);
	}
	set props(e) {
		set(this.#props, e);
	}
}, DialogTitleState = class e {
	static create(n) {
		return new e(n, DialogRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(e, n) {
		this.opts = e, this.root = n, this.root.titleId = this.opts.id.current, this.attachment = attachRef(this.opts.ref), watch.pre(() => this.opts.id.current, (e) => {
			this.root.titleId = e;
		});
	}
	#props = /* @__PURE__ */ user_derived(() => ({
		id: this.opts.id.current,
		role: "heading",
		"aria-level": this.opts.level.current,
		[this.root.getBitsAttr("title")]: "",
		...this.root.sharedProps,
		...this.attachment
	}));
	get props() {
		return get$2(this.#props);
	}
	set props(e) {
		set(this.#props, e);
	}
}, DialogContentState = class e {
	static create(n) {
		return new e(n, DialogRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(e, n) {
		this.opts = e, this.root = n, this.attachment = attachRef(this.opts.ref, (e) => {
			this.root.contentNode = e, this.root.contentId = e?.id;
		});
	}
	#snippetProps = /* @__PURE__ */ user_derived(() => ({ open: this.root.opts.open.current }));
	get snippetProps() {
		return get$2(this.#snippetProps);
	}
	set snippetProps(e) {
		set(this.#snippetProps, e);
	}
	#props = /* @__PURE__ */ user_derived(() => ({
		id: this.opts.id.current,
		role: this.root.opts.variant.current === "alert-dialog" ? "alertdialog" : "dialog",
		"aria-modal": "true",
		"aria-describedby": this.root.descriptionId,
		"aria-labelledby": this.root.titleId,
		[this.root.getBitsAttr("content")]: "",
		style: {
			pointerEvents: "auto",
			outline: this.root.opts.variant.current === "alert-dialog" ? "none" : void 0
		},
		tabindex: this.root.opts.variant.current === "alert-dialog" ? -1 : void 0,
		...this.root.sharedProps,
		...this.attachment
	}));
	get props() {
		return get$2(this.#props);
	}
	set props(e) {
		set(this.#props, e);
	}
}, DialogOverlayState = class e {
	static create(n) {
		return new e(n, DialogRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(e, n) {
		this.opts = e, this.root = n, this.attachment = attachRef(this.opts.ref);
	}
	#snippetProps = /* @__PURE__ */ user_derived(() => ({ open: this.root.opts.open.current }));
	get snippetProps() {
		return get$2(this.#snippetProps);
	}
	set snippetProps(e) {
		set(this.#snippetProps, e);
	}
	#props = /* @__PURE__ */ user_derived(() => ({
		id: this.opts.id.current,
		[this.root.getBitsAttr("overlay")]: "",
		style: { pointerEvents: "auto" },
		...this.root.sharedProps,
		...this.attachment
	}));
	get props() {
		return get$2(this.#props);
	}
	set props(e) {
		set(this.#props, e);
	}
}, root_2$26 = /* @__PURE__ */ from_html("<div><!></div>");
function Dialog_title(e, n) {
	let i = props_id();
	push(n, !0);
	let a = prop(n, "id", 19, () => createId(i)), o = prop(n, "ref", 15, null), s = prop(n, "level", 3, 2), c = /* @__PURE__ */ rest_props(n, [
		"$$slots",
		"$$events",
		"$$legacy",
		"id",
		"ref",
		"child",
		"children",
		"level"
	]), l = DialogTitleState.create({
		id: boxWith(() => a()),
		level: boxWith(() => s()),
		ref: boxWith(() => o(), (e) => o(e))
	}), u = /* @__PURE__ */ user_derived(() => mergeProps(c, l.props));
	var d = comment(), f = first_child(d), p = (e) => {
		var i = comment(), a = first_child(i);
		snippet(a, () => n.child, () => ({ props: get$2(u) })), append(e, i);
	}, m = (e) => {
		var i = root_2$26();
		attribute_effect(i, () => ({ ...get$2(u) }));
		var a = child(i);
		snippet(a, () => n.children ?? noop$1), reset(i), append(e, i);
	};
	if_block(f, (e) => {
		n.child ? e(p) : e(m, !1);
	}), append(e, d), pop();
}
function Portal_consumer(e, n) {
	var i = comment(), a = first_child(i);
	key(a, () => n.children, (e) => {
		var i = comment(), a = first_child(i);
		snippet(a, () => n.children ?? noop$1), append(e, i);
	}), append(e, i);
}
const BitsConfigContext = new Context("BitsConfig");
function getBitsConfig() {
	let e = new BitsConfigState(null, {});
	return BitsConfigContext.getOr(e).opts;
}
var BitsConfigState = class {
	opts;
	constructor(e, n) {
		let i = createConfigResolver(e, n);
		this.opts = {
			defaultPortalTo: i((e) => e.defaultPortalTo),
			defaultLocale: i((e) => e.defaultLocale)
		};
	}
};
function createConfigResolver(e, n) {
	return (i) => boxWith(() => {
		let a = i(n)?.current;
		if (a !== void 0) return a;
		if (e !== null) return i(e.opts)?.current;
	});
}
function createPropResolver(e, n) {
	return (i) => {
		let a = getBitsConfig();
		return boxWith(() => {
			let o = i();
			if (o !== void 0) return o;
			let s = e(a).current;
			return s === void 0 ? n : s;
		});
	};
}
const resolvePortalToProp = createPropResolver((e) => e.defaultPortalTo, "body");
function Portal(e, n) {
	push(n, !0);
	let i = resolvePortalToProp(() => n.to), a = getAllContexts(), o = /* @__PURE__ */ user_derived(s);
	function s() {
		if (!isBrowser || n.disabled) return null;
		let e = null;
		return e = typeof i.current == "string" ? document.querySelector(i.current) : i.current, e;
	}
	let c;
	function l() {
		c &&= (unmount(c), null);
	}
	watch([() => get$2(o), () => n.disabled], ([e, i]) => {
		if (!e || i) {
			l();
			return;
		}
		return c = mount(Portal_consumer, {
			target: e,
			props: { children: n.children },
			context: a
		}), () => {
			l();
		};
	});
	var u = comment(), d = first_child(u), f = (e) => {
		var i = comment(), a = first_child(i);
		snippet(a, () => n.children ?? noop$1), append(e, i);
	};
	if_block(d, (e) => {
		n.disabled && e(f);
	}), append(e, u), pop();
}
function debounce(e, n = 500) {
	let i = null, a = (...a) => {
		i !== null && clearTimeout(i), i = setTimeout(() => {
			e(...a);
		}, n);
	};
	return a.destroy = () => {
		i !== null && (clearTimeout(i), i = null);
	}, a;
}
function isOrContainsTarget(e, n) {
	return e === n || e.contains(n);
}
function getOwnerDocument(e) {
	return e?.ownerDocument ?? document;
}
function isClickTrulyOutside(e, n) {
	let { clientX: i, clientY: a } = e, o = n.getBoundingClientRect();
	return i < o.left || i > o.right || a < o.top || a > o.bottom;
}
globalThis.bitsDismissableLayers ??= /* @__PURE__ */ new Map();
var DismissibleLayerState = class e {
	static create(n) {
		return new e(n);
	}
	opts;
	#interactOutsideProp;
	#behaviorType;
	#interceptedEvents = { pointerdown: !1 };
	#isResponsibleLayer = !1;
	#isFocusInsideDOMTree = !1;
	#documentObj = void 0;
	#onFocusOutside;
	#unsubClickListener = noop;
	constructor(e) {
		this.opts = e, this.#behaviorType = e.interactOutsideBehavior, this.#interactOutsideProp = e.onInteractOutside, this.#onFocusOutside = e.onFocusOutside, user_effect(() => {
			this.#documentObj = getOwnerDocument(this.opts.ref.current);
		});
		let n = noop, i = () => {
			this.#resetState(), globalThis.bitsDismissableLayers.delete(this), this.#handleInteractOutside.destroy(), n();
		};
		watch([() => this.opts.enabled.current, () => this.opts.ref.current], () => {
			if (!(!this.opts.enabled.current || !this.opts.ref.current)) return afterSleep(1, () => {
				this.opts.ref.current && (globalThis.bitsDismissableLayers.set(this, this.#behaviorType), n(), n = this.#addEventListeners());
			}), i;
		}), onDestroyEffect(() => {
			this.#resetState.destroy(), globalThis.bitsDismissableLayers.delete(this), this.#handleInteractOutside.destroy(), this.#unsubClickListener(), n();
		});
	}
	#handleFocus = (e) => {
		e.defaultPrevented || this.opts.ref.current && afterTick(() => {
			!this.opts.ref.current || this.#isTargetWithinLayer(e.target) || e.target && !this.#isFocusInsideDOMTree && this.#onFocusOutside.current?.(e);
		});
	};
	#addEventListeners() {
		return executeCallbacks(on(this.#documentObj, "pointerdown", executeCallbacks(this.#markInterceptedEvent, this.#markResponsibleLayer), { capture: !0 }), on(this.#documentObj, "pointerdown", executeCallbacks(this.#markNonInterceptedEvent, this.#handleInteractOutside)), on(this.#documentObj, "focusin", this.#handleFocus));
	}
	#handleDismiss = (e) => {
		let n = e;
		n.defaultPrevented && (n = createWrappedEvent(e)), this.#interactOutsideProp.current(e);
	};
	#handleInteractOutside = debounce((e) => {
		if (!this.opts.ref.current) {
			this.#unsubClickListener();
			return;
		}
		let n = this.opts.isValidEvent.current(e, this.opts.ref.current) || isValidEvent(e, this.opts.ref.current);
		if (!this.#isResponsibleLayer || this.#isAnyEventIntercepted() || !n) {
			this.#unsubClickListener();
			return;
		}
		let i = e;
		if (i.defaultPrevented && (i = createWrappedEvent(i)), this.#behaviorType.current !== "close" && this.#behaviorType.current !== "defer-otherwise-close") {
			this.#unsubClickListener();
			return;
		}
		e.pointerType === "touch" ? (this.#unsubClickListener(), this.#unsubClickListener = on(this.#documentObj, "click", this.#handleDismiss, { once: !0 })) : this.#interactOutsideProp.current(i);
	}, 10);
	#markInterceptedEvent = (e) => {
		this.#interceptedEvents[e.type] = !0;
	};
	#markNonInterceptedEvent = (e) => {
		this.#interceptedEvents[e.type] = !1;
	};
	#markResponsibleLayer = () => {
		this.opts.ref.current && (this.#isResponsibleLayer = isResponsibleLayer(this.opts.ref.current));
	};
	#isTargetWithinLayer = (e) => this.opts.ref.current ? isOrContainsTarget(this.opts.ref.current, e) : !1;
	#resetState = debounce(() => {
		for (let e in this.#interceptedEvents) this.#interceptedEvents[e] = !1;
		this.#isResponsibleLayer = !1;
	}, 20);
	#isAnyEventIntercepted() {
		return Object.values(this.#interceptedEvents).some(Boolean);
	}
	#onfocuscapture = () => {
		this.#isFocusInsideDOMTree = !0;
	};
	#onblurcapture = () => {
		this.#isFocusInsideDOMTree = !1;
	};
	props = {
		onfocuscapture: this.#onfocuscapture,
		onblurcapture: this.#onblurcapture
	};
};
function getTopMostDismissableLayer(e = [...globalThis.bitsDismissableLayers]) {
	return e.findLast(([e, { current: n }]) => n === "close" || n === "ignore");
}
function isResponsibleLayer(e) {
	let n = [...globalThis.bitsDismissableLayers], i = getTopMostDismissableLayer(n);
	if (i) return i[0].opts.ref.current === e;
	let [a] = n[0];
	return a.opts.ref.current === e;
}
function isValidEvent(e, n) {
	if ("button" in e && e.button > 0) return !1;
	let i = e.target;
	return isElement(i) ? getOwnerDocument(i).documentElement.contains(i) && !isOrContainsTarget(n, i) && isClickTrulyOutside(e, n) : !1;
}
function createWrappedEvent(e) {
	let n = e.currentTarget, i = e.target, a;
	a = e instanceof PointerEvent ? new PointerEvent(e.type, e) : new PointerEvent("pointerdown", e);
	let o = !1;
	return new Proxy(a, { get: (a, s) => s === "currentTarget" ? n : s === "target" ? i : s === "preventDefault" ? () => {
		o = !0, typeof a.preventDefault == "function" && a.preventDefault();
	} : s === "defaultPrevented" ? o : s in a ? a[s] : e[s] });
}
function Dismissible_layer(e, n) {
	push(n, !0);
	let i = prop(n, "interactOutsideBehavior", 3, "close"), a = prop(n, "onInteractOutside", 3, noop), o = prop(n, "onFocusOutside", 3, noop), s = prop(n, "isValidEvent", 3, () => !1), c = DismissibleLayerState.create({
		id: boxWith(() => n.id),
		interactOutsideBehavior: boxWith(() => i()),
		onInteractOutside: boxWith(() => a()),
		enabled: boxWith(() => n.enabled),
		onFocusOutside: boxWith(() => o()),
		isValidEvent: boxWith(() => s()),
		ref: n.ref
	});
	var l = comment(), u = first_child(l);
	snippet(u, () => n.children ?? noop$1, () => ({ props: c.props })), append(e, l), pop();
}
globalThis.bitsEscapeLayers ??= /* @__PURE__ */ new Map();
var EscapeLayerState = class e {
	static create(n) {
		return new e(n);
	}
	opts;
	domContext;
	constructor(e) {
		this.opts = e, this.domContext = new DOMContext(this.opts.ref);
		let n = noop;
		watch(() => e.enabled.current, (i) => (i && (globalThis.bitsEscapeLayers.set(this, e.escapeKeydownBehavior), n = this.#addEventListener()), () => {
			n(), globalThis.bitsEscapeLayers.delete(this);
		}));
	}
	#addEventListener = () => on(this.domContext.getDocument(), "keydown", this.#onkeydown, { passive: !1 });
	#onkeydown = (e) => {
		if (e.key !== "Escape" || !isResponsibleEscapeLayer(this)) return;
		let n = new KeyboardEvent(e.type, e);
		e.preventDefault();
		let i = this.opts.escapeKeydownBehavior.current;
		i !== "close" && i !== "defer-otherwise-close" || this.opts.onEscapeKeydown.current(n);
	};
};
function isResponsibleEscapeLayer(e) {
	let n = [...globalThis.bitsEscapeLayers], i = n.findLast(([e, { current: n }]) => n === "close" || n === "ignore");
	if (i) return i[0] === e;
	let [a] = n[0];
	return a === e;
}
function Escape_layer(e, n) {
	push(n, !0);
	let i = prop(n, "escapeKeydownBehavior", 3, "close"), a = prop(n, "onEscapeKeydown", 3, noop);
	EscapeLayerState.create({
		escapeKeydownBehavior: boxWith(() => i()),
		onEscapeKeydown: boxWith(() => a()),
		enabled: boxWith(() => n.enabled),
		ref: n.ref
	});
	var o = comment(), s = first_child(o);
	snippet(s, () => n.children ?? noop$1), append(e, o), pop();
}
var FocusScopeManager = class e {
	static instance;
	#scopeStack = simpleBox([]);
	#focusHistory = /* @__PURE__ */ new WeakMap();
	#preFocusHistory = /* @__PURE__ */ new WeakMap();
	static getInstance() {
		return this.instance ||= new e(), this.instance;
	}
	register(e) {
		let n = this.getActive();
		n && n !== e && n.pause();
		let i = document.activeElement;
		i && i !== document.body && this.#preFocusHistory.set(e, i), this.#scopeStack.current = this.#scopeStack.current.filter((n) => n !== e), this.#scopeStack.current.unshift(e);
	}
	unregister(e) {
		this.#scopeStack.current = this.#scopeStack.current.filter((n) => n !== e);
		let n = this.getActive();
		n && n.resume();
	}
	getActive() {
		return this.#scopeStack.current[0];
	}
	setFocusMemory(e, n) {
		this.#focusHistory.set(e, n);
	}
	getFocusMemory(e) {
		return this.#focusHistory.get(e);
	}
	isActiveScope(e) {
		return this.getActive() === e;
	}
	setPreFocusMemory(e, n) {
		this.#preFocusHistory.set(e, n);
	}
	getPreFocusMemory(e) {
		return this.#preFocusHistory.get(e);
	}
	clearPreFocusMemory(e) {
		this.#preFocusHistory.delete(e);
	}
}, candidateSelectors = [
	"input:not([inert])",
	"select:not([inert])",
	"textarea:not([inert])",
	"a[href]:not([inert])",
	"button:not([inert])",
	"[tabindex]:not(slot):not([inert])",
	"audio[controls]:not([inert])",
	"video[controls]:not([inert])",
	"[contenteditable]:not([contenteditable=\"false\"]):not([inert])",
	"details>summary:first-of-type:not([inert])",
	"details:not([inert])"
], candidateSelector = /* @__PURE__ */ candidateSelectors.join(","), NoElement = typeof Element > "u", matches = NoElement ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, getRootNode = !NoElement && Element.prototype.getRootNode ? function(e) {
	return e?.getRootNode?.call(e);
} : function(e) {
	return e?.ownerDocument;
}, isInert = function e(n, i) {
	i === void 0 && (i = !0);
	var a = n?.getAttribute?.call(n, "inert");
	return a === "" || a === "true" || i && n && e(n.parentNode);
}, isContentEditable = function(e) {
	var n = e?.getAttribute?.call(e, "contenteditable");
	return n === "" || n === "true";
}, getCandidates = function(e, n, i) {
	if (isInert(e)) return [];
	var a = Array.prototype.slice.apply(e.querySelectorAll(candidateSelector));
	return n && matches.call(e, candidateSelector) && a.unshift(e), a = a.filter(i), a;
}, getCandidatesIteratively = function e(n, i, a) {
	for (var o = [], s = Array.from(n); s.length;) {
		var c = s.shift();
		if (!isInert(c, !1)) if (c.tagName === "SLOT") {
			var l = c.assignedElements(), u = l.length ? l : c.children, d = e(u, !0, a);
			a.flatten ? o.push.apply(o, d) : o.push({
				scopeParent: c,
				candidates: d
			});
		} else {
			matches.call(c, candidateSelector) && a.filter(c) && (i || !n.includes(c)) && o.push(c);
			var f = c.shadowRoot || typeof a.getShadowRoot == "function" && a.getShadowRoot(c), p = !isInert(f, !1) && (!a.shadowRootFilter || a.shadowRootFilter(c));
			if (f && p) {
				var m = e(f === !0 ? c.children : f.children, !0, a);
				a.flatten ? o.push.apply(o, m) : o.push({
					scopeParent: c,
					candidates: m
				});
			} else s.unshift.apply(s, c.children);
		}
	}
	return o;
}, hasTabIndex = function(e) {
	return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, getTabIndex = function(e) {
	if (!e) throw Error("No node provided");
	return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || isContentEditable(e)) && !hasTabIndex(e) ? 0 : e.tabIndex;
}, getSortOrderTabIndex = function(e, n) {
	var i = getTabIndex(e);
	return i < 0 && n && !hasTabIndex(e) ? 0 : i;
}, sortOrderedTabbables = function(e, n) {
	return e.tabIndex === n.tabIndex ? e.documentOrder - n.documentOrder : e.tabIndex - n.tabIndex;
}, isInput = function(e) {
	return e.tagName === "INPUT";
}, isHiddenInput = function(e) {
	return isInput(e) && e.type === "hidden";
}, isDetailsWithSummary = function(e) {
	return e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(e) {
		return e.tagName === "SUMMARY";
	});
}, getCheckedRadio = function(e, n) {
	for (var i = 0; i < e.length; i++) if (e[i].checked && e[i].form === n) return e[i];
}, isTabbableRadio = function(e) {
	if (!e.name) return !0;
	var n = e.form || getRootNode(e), i = function(e) {
		return n.querySelectorAll("input[type=\"radio\"][name=\"" + e + "\"]");
	}, a;
	if (typeof window < "u" && window.CSS !== void 0 && typeof window.CSS.escape == "function") a = i(window.CSS.escape(e.name));
	else try {
		a = i(e.name);
	} catch (e) {
		return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message), !1;
	}
	var o = getCheckedRadio(a, e.form);
	return !o || o === e;
}, isRadio = function(e) {
	return isInput(e) && e.type === "radio";
}, isNonTabbableRadio = function(e) {
	return isRadio(e) && !isTabbableRadio(e);
}, isNodeAttached = function(e) {
	var n = e && getRootNode(e), i = n?.host, a = !1;
	if (n && n !== e) {
		var o, s, c;
		for (a = !!((o = i) != null && (s = o.ownerDocument) != null && s.contains(i) || e != null && (c = e.ownerDocument) != null && c.contains(e)); !a && i;) {
			var l, u;
			n = getRootNode(i), i = n?.host, a = !!((l = i) != null && (u = l.ownerDocument) != null && u.contains(i));
		}
	}
	return a;
}, isZeroArea = function(e) {
	var n = e.getBoundingClientRect(), i = n.width, a = n.height;
	return i === 0 && a === 0;
}, isHidden = function(e, n) {
	var i = n.displayCheck, a = n.getShadowRoot;
	if (getComputedStyle(e).visibility === "hidden") return !0;
	var o = matches.call(e, "details>summary:first-of-type") ? e.parentElement : e;
	if (matches.call(o, "details:not([open]) *")) return !0;
	if (!i || i === "full" || i === "legacy-full") {
		if (typeof a == "function") {
			for (var s = e; e;) {
				var c = e.parentElement, l = getRootNode(e);
				if (c && !c.shadowRoot && a(c) === !0) return isZeroArea(e);
				e = e.assignedSlot ? e.assignedSlot : !c && l !== e.ownerDocument ? l.host : c;
			}
			e = s;
		}
		if (isNodeAttached(e)) return !e.getClientRects().length;
		if (i !== "legacy-full") return !0;
	} else if (i === "non-zero-area") return isZeroArea(e);
	return !1;
}, isDisabledFromFieldset = function(e) {
	if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName)) for (var n = e.parentElement; n;) {
		if (n.tagName === "FIELDSET" && n.disabled) {
			for (var i = 0; i < n.children.length; i++) {
				var a = n.children.item(i);
				if (a.tagName === "LEGEND") return matches.call(n, "fieldset[disabled] *") ? !0 : !a.contains(e);
			}
			return !0;
		}
		n = n.parentElement;
	}
	return !1;
}, isNodeMatchingSelectorFocusable = function(e, n) {
	return !(n.disabled || isInert(n) || isHiddenInput(n) || isHidden(n, e) || isDetailsWithSummary(n) || isDisabledFromFieldset(n));
}, isNodeMatchingSelectorTabbable = function(e, n) {
	return !(isNonTabbableRadio(n) || getTabIndex(n) < 0 || !isNodeMatchingSelectorFocusable(e, n));
}, isValidShadowRootTabbable = function(e) {
	var n = parseInt(e.getAttribute("tabindex"), 10);
	return !!(isNaN(n) || n >= 0);
}, sortByOrder = function e(n) {
	var i = [], a = [];
	return n.forEach(function(n, o) {
		var s = !!n.scopeParent, c = s ? n.scopeParent : n, l = getSortOrderTabIndex(c, s), u = s ? e(n.candidates) : c;
		l === 0 ? s ? i.push.apply(i, u) : i.push(c) : a.push({
			documentOrder: o,
			tabIndex: l,
			item: n,
			isScope: s,
			content: u
		});
	}), a.sort(sortOrderedTabbables).reduce(function(e, n) {
		return n.isScope ? e.push.apply(e, n.content) : e.push(n.content), e;
	}, []).concat(i);
}, tabbable = function(e, n) {
	n ||= {};
	var i = n.getShadowRoot ? getCandidatesIteratively([e], n.includeContainer, {
		filter: isNodeMatchingSelectorTabbable.bind(null, n),
		flatten: !1,
		getShadowRoot: n.getShadowRoot,
		shadowRootFilter: isValidShadowRootTabbable
	}) : getCandidates(e, n.includeContainer, isNodeMatchingSelectorTabbable.bind(null, n));
	return sortByOrder(i);
}, focusable = function(e, n) {
	return n ||= {}, n.getShadowRoot ? getCandidatesIteratively([e], n.includeContainer, {
		filter: isNodeMatchingSelectorFocusable.bind(null, n),
		flatten: !0,
		getShadowRoot: n.getShadowRoot
	}) : getCandidates(e, n.includeContainer, isNodeMatchingSelectorFocusable.bind(null, n));
}, focusableCandidateSelector = /* @__PURE__ */ candidateSelectors.concat("iframe").join(","), isFocusable = function(e, n) {
	if (n ||= {}, !e) throw Error("No node provided");
	return matches.call(e, focusableCandidateSelector) === !1 ? !1 : isNodeMatchingSelectorFocusable(n, e);
}, FocusScope = class e {
	#paused = !1;
	#container = null;
	#manager = FocusScopeManager.getInstance();
	#cleanupFns = [];
	#opts;
	constructor(e) {
		this.#opts = e;
	}
	get paused() {
		return this.#paused;
	}
	pause() {
		this.#paused = !0;
	}
	resume() {
		this.#paused = !1;
	}
	#cleanup() {
		for (let e of this.#cleanupFns) e();
		this.#cleanupFns = [];
	}
	mount(e) {
		this.#container && this.unmount(), this.#container = e, this.#manager.register(this), this.#setupEventListeners(), this.#handleOpenAutoFocus();
	}
	unmount() {
		this.#container &&= (this.#cleanup(), this.#handleCloseAutoFocus(), this.#manager.unregister(this), this.#manager.clearPreFocusMemory(this), null);
	}
	#handleOpenAutoFocus() {
		if (!this.#container) return;
		let e = new CustomEvent("focusScope.onOpenAutoFocus", {
			bubbles: !1,
			cancelable: !0
		});
		this.#opts.onOpenAutoFocus.current(e), e.defaultPrevented || requestAnimationFrame(() => {
			if (!this.#container) return;
			let e = this.#getFirstTabbable();
			e ? (e.focus(), this.#manager.setFocusMemory(this, e)) : this.#container.focus();
		});
	}
	#handleCloseAutoFocus() {
		let e = new CustomEvent("focusScope.onCloseAutoFocus", {
			bubbles: !1,
			cancelable: !0
		});
		if (this.#opts.onCloseAutoFocus.current?.(e), !e.defaultPrevented) {
			let e = this.#manager.getPreFocusMemory(this);
			if (e && document.contains(e)) try {
				e.focus();
			} catch {
				document.body.focus();
			}
		}
	}
	#setupEventListeners() {
		if (!this.#container || !this.#opts.trap.current) return;
		let e = this.#container, n = e.ownerDocument;
		this.#cleanupFns.push(on(n, "focusin", (n) => {
			if (this.#paused || !this.#manager.isActiveScope(this)) return;
			let i = n.target;
			if (i) if (e.contains(i)) this.#manager.setFocusMemory(this, i);
			else {
				let i = this.#manager.getFocusMemory(this);
				if (i && e.contains(i) && isFocusable(i)) n.preventDefault(), i.focus();
				else {
					let n = this.#getFirstTabbable(), i = this.#getAllFocusables()[0];
					(n || i || e).focus();
				}
			}
		}, { capture: !0 }), on(e, "keydown", (e) => {
			if (!this.#opts.loop || this.#paused || e.key !== "Tab" || !this.#manager.isActiveScope(this)) return;
			let i = this.#getTabbables();
			if (i.length < 2) return;
			let a = i[0], o = i[i.length - 1];
			!e.shiftKey && n.activeElement === o ? (e.preventDefault(), a.focus()) : e.shiftKey && n.activeElement === a && (e.preventDefault(), o.focus());
		}));
		let i = new MutationObserver(() => {
			let n = this.#manager.getFocusMemory(this);
			if (n && !e.contains(n)) {
				let n = this.#getFirstTabbable(), i = this.#getAllFocusables()[0], a = n || i;
				a ? (a.focus(), this.#manager.setFocusMemory(this, a)) : e.focus();
			}
		});
		i.observe(e, {
			childList: !0,
			subtree: !0
		}), this.#cleanupFns.push(() => i.disconnect());
	}
	#getTabbables() {
		return this.#container ? tabbable(this.#container, {
			includeContainer: !1,
			getShadowRoot: !0
		}) : [];
	}
	#getFirstTabbable() {
		return this.#getTabbables()[0] || null;
	}
	#getAllFocusables() {
		return this.#container ? focusable(this.#container, {
			includeContainer: !1,
			getShadowRoot: !0
		}) : [];
	}
	static use(n) {
		let i = null;
		return watch([() => n.ref.current, () => n.enabled.current], ([a, o]) => {
			a && o ? (i ||= new e(n), i.mount(a)) : i &&= (i.unmount(), null);
		}), onDestroyEffect(() => {
			i?.unmount();
		}), { get props() {
			return { tabindex: -1 };
		} };
	}
};
function Focus_scope(e, n) {
	push(n, !0);
	let i = prop(n, "enabled", 3, !1), a = prop(n, "trapFocus", 3, !1), o = prop(n, "loop", 3, !1), s = prop(n, "onCloseAutoFocus", 3, noop), c = prop(n, "onOpenAutoFocus", 3, noop), l = FocusScope.use({
		enabled: boxWith(() => i()),
		trap: boxWith(() => a()),
		loop: o(),
		onCloseAutoFocus: boxWith(() => s()),
		onOpenAutoFocus: boxWith(() => c()),
		ref: n.ref
	});
	var u = comment(), d = first_child(u);
	snippet(d, () => n.focusScope ?? noop$1, () => ({ props: l.props })), append(e, u), pop();
}
globalThis.bitsTextSelectionLayers ??= /* @__PURE__ */ new Map();
var TextSelectionLayerState = class e {
	static create(n) {
		return new e(n);
	}
	opts;
	domContext;
	#unsubSelectionLock = noop;
	constructor(e) {
		this.opts = e, this.domContext = new DOMContext(e.ref);
		let n = noop;
		watch(() => this.opts.enabled.current, (e) => (e && (globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled), n(), n = this.#addEventListeners()), () => {
			n(), this.#resetSelectionLock(), globalThis.bitsTextSelectionLayers.delete(this);
		}));
	}
	#addEventListeners() {
		return executeCallbacks(on(this.domContext.getDocument(), "pointerdown", this.#pointerdown), on(this.domContext.getDocument(), "pointerup", composeHandlers(this.#resetSelectionLock, this.opts.onPointerUp.current)));
	}
	#pointerdown = (e) => {
		let n = this.opts.ref.current, i = e.target;
		!isHTMLElement(n) || !isHTMLElement(i) || !this.opts.enabled.current || !isHighestLayer(this) || !contains(n, i) || (this.opts.onPointerDown.current(e), !e.defaultPrevented && (this.#unsubSelectionLock = preventTextSelectionOverflow(n, this.domContext.getDocument().body)));
	};
	#resetSelectionLock = () => {
		this.#unsubSelectionLock(), this.#unsubSelectionLock = noop;
	};
}, getUserSelect = (e) => e.style.userSelect || e.style.webkitUserSelect;
function preventTextSelectionOverflow(e, n) {
	let i = getUserSelect(n), a = getUserSelect(e);
	return setUserSelect(n, "none"), setUserSelect(e, "text"), () => {
		setUserSelect(n, i), setUserSelect(e, a);
	};
}
function setUserSelect(e, n) {
	e.style.userSelect = n, e.style.webkitUserSelect = n;
}
function isHighestLayer(e) {
	let n = [...globalThis.bitsTextSelectionLayers];
	if (!n.length) return !1;
	let i = n.at(-1);
	return i ? i[0] === e : !1;
}
function Text_selection_layer(e, n) {
	push(n, !0);
	let i = prop(n, "preventOverflowTextSelection", 3, !0), a = prop(n, "onPointerDown", 3, noop), o = prop(n, "onPointerUp", 3, noop);
	TextSelectionLayerState.create({
		id: boxWith(() => n.id),
		onPointerDown: boxWith(() => a()),
		onPointerUp: boxWith(() => o()),
		enabled: boxWith(() => n.enabled && i()),
		ref: n.ref
	});
	var s = comment(), c = first_child(s);
	snippet(c, () => n.children ?? noop$1), append(e, s), pop();
}
globalThis.bitsIdCounter ??= { current: 0 };
function useId(e = "bits") {
	return globalThis.bitsIdCounter.current++, `${e}-${globalThis.bitsIdCounter.current}`;
}
var SharedState = class {
	#factory;
	#subscribers = 0;
	#state = /* @__PURE__ */ state();
	#scope;
	constructor(e) {
		this.#factory = e;
	}
	#dispose() {
		--this.#subscribers, this.#scope && this.#subscribers <= 0 && (this.#scope(), set(this.#state, void 0), this.#scope = void 0);
	}
	get(...e) {
		return this.#subscribers += 1, get$2(this.#state) === void 0 && (this.#scope = effect_root(() => {
			set(this.#state, this.#factory(...e), !0);
		})), user_effect(() => () => {
			this.#dispose();
		}), get$2(this.#state);
	}
}, lockMap = new SvelteMap(), initialBodyStyle = /* @__PURE__ */ state(null), stopTouchMoveListener = null, cleanupTimeoutId = null, isInCleanupTransition = !1, anyLocked = boxWith(() => {
	for (let e of lockMap.values()) if (e) return !0;
	return !1;
}), cleanupScheduledAt = null, bodyLockStackCount = new SharedState(() => {
	function e() {
		document.body.setAttribute("style", get$2(initialBodyStyle) ?? ""), document.body.style.removeProperty("--scrollbar-width"), isIOS && stopTouchMoveListener?.(), set(initialBodyStyle, null);
	}
	function n() {
		cleanupTimeoutId !== null && (window.clearTimeout(cleanupTimeoutId), cleanupTimeoutId = null);
	}
	function i(e, i) {
		n(), isInCleanupTransition = !0, cleanupScheduledAt = Date.now();
		let a = cleanupScheduledAt, o = () => {
			cleanupTimeoutId = null, cleanupScheduledAt === a && (isAnyLocked(lockMap) ? isInCleanupTransition = !1 : (isInCleanupTransition = !1, i()));
		}, s = e === null ? 24 : e;
		cleanupTimeoutId = window.setTimeout(o, s);
	}
	function a() {
		get$2(initialBodyStyle) === null && lockMap.size === 0 && !isInCleanupTransition && set(initialBodyStyle, document.body.getAttribute("style"), !0);
	}
	return watch(() => anyLocked.current, () => {
		if (!anyLocked.current) return;
		a(), isInCleanupTransition = !1;
		let e = getComputedStyle(document.body), n = window.innerWidth - document.documentElement.clientWidth, i = {
			padding: Number.parseInt(e.paddingRight ?? "0", 10) + n,
			margin: Number.parseInt(e.marginRight ?? "0", 10)
		};
		n > 0 && (document.body.style.paddingRight = `${i.padding}px`, document.body.style.marginRight = `${i.margin}px`, document.body.style.setProperty("--scrollbar-width", `${n}px`), document.body.style.overflow = "hidden"), isIOS && (stopTouchMoveListener = on(document, "touchmove", (e) => {
			e.target === document.documentElement && (e.touches.length > 1 || e.preventDefault());
		}, { passive: !1 })), afterTick(() => {
			document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
		});
	}), onDestroyEffect(() => () => {
		stopTouchMoveListener?.();
	}), {
		get lockMap() {
			return lockMap;
		},
		resetBodyStyle: e,
		scheduleCleanupIfNoNewLocks: i,
		cancelPendingCleanup: n,
		ensureInitialStyleCaptured: a
	};
}), BodyScrollLock = class {
	#id = useId();
	#initialState;
	#restoreScrollDelay = () => null;
	#countState;
	locked;
	constructor(e, n = () => null) {
		this.#initialState = e, this.#restoreScrollDelay = n, this.#countState = bodyLockStackCount.get(), this.#countState && (this.#countState.cancelPendingCleanup(), this.#countState.ensureInitialStyleCaptured(), this.#countState.lockMap.set(this.#id, this.#initialState ?? !1), this.locked = boxWith(() => this.#countState.lockMap.get(this.#id) ?? !1, (e) => this.#countState.lockMap.set(this.#id, e)), onDestroyEffect(() => {
			if (this.#countState.lockMap.delete(this.#id), isAnyLocked(this.#countState.lockMap)) return;
			let e = this.#restoreScrollDelay();
			this.#countState.scheduleCleanupIfNoNewLocks(e, () => {
				this.#countState.resetBodyStyle();
			});
		}));
	}
};
function isAnyLocked(e) {
	for (let [n, i] of e) if (i) return !0;
	return !1;
}
function Scroll_lock(e, n) {
	push(n, !0);
	let i = prop(n, "preventScroll", 3, !0), a = prop(n, "restoreScrollDelay", 3, null);
	i() && new BodyScrollLock(i(), () => a()), pop();
}
function shouldEnableFocusTrap({ forceMount: e, present: n, open: i }) {
	return (e || n) && i;
}
var root_3$13 = /* @__PURE__ */ from_html("<div><!></div>");
function Dialog_overlay(e, n) {
	let i = props_id();
	push(n, !0);
	let a = prop(n, "id", 19, () => createId(i)), o = prop(n, "forceMount", 3, !1), s = prop(n, "ref", 15, null), c = /* @__PURE__ */ rest_props(n, [
		"$$slots",
		"$$events",
		"$$legacy",
		"id",
		"forceMount",
		"child",
		"children",
		"ref"
	]), l = DialogOverlayState.create({
		id: boxWith(() => a()),
		ref: boxWith(() => s(), (e) => s(e))
	}), u = /* @__PURE__ */ user_derived(() => mergeProps(c, l.props));
	{
		let i = (e) => {
			var i = comment(), a = first_child(i), o = (e) => {
				var i = comment(), a = first_child(i);
				{
					let e = /* @__PURE__ */ user_derived(() => ({
						props: mergeProps(get$2(u)),
						...l.snippetProps
					}));
					snippet(a, () => n.child, () => get$2(e));
				}
				append(e, i);
			}, s = (e) => {
				var i = root_3$13();
				attribute_effect(i, (e) => ({ ...e }), [() => mergeProps(get$2(u))]);
				var a = child(i);
				snippet(a, () => n.children ?? noop$1, () => l.snippetProps), reset(i), append(e, i);
			};
			if_block(a, (e) => {
				n.child ? e(o) : e(s, !1);
			}), append(e, i);
		}, a = /* @__PURE__ */ user_derived(() => l.root.opts.open.current || o());
		Presence_layer(e, {
			get open() {
				return get$2(a);
			},
			get ref() {
				return l.opts.ref;
			},
			presence: i,
			$$slots: { presence: !0 }
		});
	}
	pop();
}
function Button(e, n) {
	push(n, !0);
	let i = prop(n, "disabled", 3, !1), a = prop(n, "ref", 15, null), o = /* @__PURE__ */ rest_props(n, [
		"$$slots",
		"$$events",
		"$$legacy",
		"href",
		"type",
		"children",
		"disabled",
		"ref"
	]);
	var s = comment(), c = first_child(s);
	element(c, () => n.href ? "a" : "button", !1, (e, s) => {
		bind_this(e, (e) => a(e), () => a()), attribute_effect(e, () => ({
			"data-button-root": !0,
			type: n.href ? void 0 : n.type,
			href: n.href && !i() ? n.href : void 0,
			disabled: n.href ? void 0 : i(),
			"aria-disabled": n.href ? i() : void 0,
			role: n.href && i() ? "link" : void 0,
			tabindex: n.href && i() ? -1 : 0,
			...o
		}));
		var c = comment(), l = first_child(c);
		snippet(l, () => n.children ?? noop$1), append(s, c);
	}), append(e, s), pop();
}
var sides = [
	"top",
	"right",
	"bottom",
	"left"
], min = Math.min, max = Math.max, round = Math.round, floor = Math.floor, createCoords = (e) => ({
	x: e,
	y: e
}), oppositeSideMap = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
}, oppositeAlignmentMap = {
	start: "end",
	end: "start"
};
function clamp(e, n, i) {
	return max(e, min(n, i));
}
function evaluate(e, n) {
	return typeof e == "function" ? e(n) : e;
}
function getSide(e) {
	return e.split("-")[0];
}
function getAlignment(e) {
	return e.split("-")[1];
}
function getOppositeAxis(e) {
	return e === "x" ? "y" : "x";
}
function getAxisLength(e) {
	return e === "y" ? "height" : "width";
}
var yAxisSides = /* @__PURE__ */ new Set(["top", "bottom"]);
function getSideAxis(e) {
	return yAxisSides.has(getSide(e)) ? "y" : "x";
}
function getAlignmentAxis(e) {
	return getOppositeAxis(getSideAxis(e));
}
function getAlignmentSides(e, n, i) {
	i === void 0 && (i = !1);
	let a = getAlignment(e), o = getAlignmentAxis(e), s = getAxisLength(o), c = o === "x" ? a === (i ? "end" : "start") ? "right" : "left" : a === "start" ? "bottom" : "top";
	return n.reference[s] > n.floating[s] && (c = getOppositePlacement(c)), [c, getOppositePlacement(c)];
}
function getExpandedPlacements(e) {
	let n = getOppositePlacement(e);
	return [
		getOppositeAlignmentPlacement(e),
		n,
		getOppositeAlignmentPlacement(n)
	];
}
function getOppositeAlignmentPlacement(e) {
	return e.replace(/start|end/g, (e) => oppositeAlignmentMap[e]);
}
var lrPlacement = ["left", "right"], rlPlacement = ["right", "left"], tbPlacement = ["top", "bottom"], btPlacement = ["bottom", "top"];
function getSideList(e, n, i) {
	switch (e) {
		case "top":
		case "bottom": return i ? n ? rlPlacement : lrPlacement : n ? lrPlacement : rlPlacement;
		case "left":
		case "right": return n ? tbPlacement : btPlacement;
		default: return [];
	}
}
function getOppositeAxisPlacements(e, n, i, a) {
	let o = getAlignment(e), s = getSideList(getSide(e), i === "start", a);
	return o && (s = s.map((e) => e + "-" + o), n && (s = s.concat(s.map(getOppositeAlignmentPlacement)))), s;
}
function getOppositePlacement(e) {
	return e.replace(/left|right|bottom|top/g, (e) => oppositeSideMap[e]);
}
function expandPaddingObject(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	};
}
function getPaddingObject(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : expandPaddingObject(e);
}
function rectToClientRect(e) {
	let { x: n, y: i, width: a, height: o } = e;
	return {
		width: a,
		height: o,
		top: i,
		left: n,
		right: n + a,
		bottom: i + o,
		x: n,
		y: i
	};
}
function computeCoordsFromPlacement(e, n, i) {
	let { reference: a, floating: o } = e, s = getSideAxis(n), c = getAlignmentAxis(n), l = getAxisLength(c), u = getSide(n), d = s === "y", f = a.x + a.width / 2 - o.width / 2, p = a.y + a.height / 2 - o.height / 2, m = a[l] / 2 - o[l] / 2, h;
	switch (u) {
		case "top":
			h = {
				x: f,
				y: a.y - o.height
			};
			break;
		case "bottom":
			h = {
				x: f,
				y: a.y + a.height
			};
			break;
		case "right":
			h = {
				x: a.x + a.width,
				y: p
			};
			break;
		case "left":
			h = {
				x: a.x - o.width,
				y: p
			};
			break;
		default: h = {
			x: a.x,
			y: a.y
		};
	}
	switch (getAlignment(n)) {
		case "start":
			h[c] -= m * (i && d ? -1 : 1);
			break;
		case "end":
			h[c] += m * (i && d ? -1 : 1);
			break;
	}
	return h;
}
var computePosition$1 = async (e, n, i) => {
	let { placement: a = "bottom", strategy: o = "absolute", middleware: s = [], platform: c } = i, l = s.filter(Boolean), u = await (c.isRTL == null ? void 0 : c.isRTL(n)), d = await c.getElementRects({
		reference: e,
		floating: n,
		strategy: o
	}), { x: f, y: p } = computeCoordsFromPlacement(d, a, u), m = a, h = {}, g = 0;
	for (let i = 0; i < l.length; i++) {
		let { name: s, fn: _ } = l[i], { x: v, y, data: b, reset: x } = await _({
			x: f,
			y: p,
			initialPlacement: a,
			placement: m,
			strategy: o,
			middlewareData: h,
			rects: d,
			platform: c,
			elements: {
				reference: e,
				floating: n
			}
		});
		f = v ?? f, p = y ?? p, h = {
			...h,
			[s]: {
				...h[s],
				...b
			}
		}, x && g <= 50 && (g++, typeof x == "object" && (x.placement && (m = x.placement), x.rects && (d = x.rects === !0 ? await c.getElementRects({
			reference: e,
			floating: n,
			strategy: o
		}) : x.rects), {x: f, y: p} = computeCoordsFromPlacement(d, m, u)), i = -1);
	}
	return {
		x: f,
		y: p,
		placement: m,
		strategy: o,
		middlewareData: h
	};
};
async function detectOverflow(e, n) {
	n === void 0 && (n = {});
	let { x: i, y: a, platform: o, rects: s, elements: c, strategy: l } = e, { boundary: u = "clippingAncestors", rootBoundary: d = "viewport", elementContext: f = "floating", altBoundary: p = !1, padding: m = 0 } = evaluate(n, e), h = getPaddingObject(m), g = c[p ? f === "floating" ? "reference" : "floating" : f], _ = rectToClientRect(await o.getClippingRect({
		element: await (o.isElement == null ? void 0 : o.isElement(g)) ?? !0 ? g : g.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(c.floating)),
		boundary: u,
		rootBoundary: d,
		strategy: l
	})), v = f === "floating" ? {
		x: i,
		y: a,
		width: s.floating.width,
		height: s.floating.height
	} : s.reference, y = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c.floating)), b = await (o.isElement == null ? void 0 : o.isElement(y)) && await (o.getScale == null ? void 0 : o.getScale(y)) || {
		x: 1,
		y: 1
	}, x = rectToClientRect(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: c,
		rect: v,
		offsetParent: y,
		strategy: l
	}) : v);
	return {
		top: (_.top - x.top + h.top) / b.y,
		bottom: (x.bottom - _.bottom + h.bottom) / b.y,
		left: (_.left - x.left + h.left) / b.x,
		right: (x.right - _.right + h.right) / b.x
	};
}
var arrow$1 = (e) => ({
	name: "arrow",
	options: e,
	async fn(n) {
		let { x: i, y: a, placement: o, rects: s, platform: c, elements: l, middlewareData: u } = n, { element: d, padding: f = 0 } = evaluate(e, n) || {};
		if (d == null) return {};
		let p = getPaddingObject(f), m = {
			x: i,
			y: a
		}, h = getAlignmentAxis(o), g = getAxisLength(h), _ = await c.getDimensions(d), v = h === "y", y = v ? "top" : "left", b = v ? "bottom" : "right", x = v ? "clientHeight" : "clientWidth", S = s.reference[g] + s.reference[h] - m[h] - s.floating[g], C = m[h] - s.reference[h], w = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(d)), T = w ? w[x] : 0;
		(!T || !await (c.isElement == null ? void 0 : c.isElement(w))) && (T = l.floating[x] || s.floating[g]);
		let E = S / 2 - C / 2, D = T / 2 - _[g] / 2 - 1, O = min(p[y], D), k = min(p[b], D), A = O, j = T - _[g] - k, M = T / 2 - _[g] / 2 + E, N = clamp(A, M, j), P = !u.arrow && getAlignment(o) != null && M !== N && s.reference[g] / 2 - (M < A ? O : k) - _[g] / 2 < 0, F = P ? M < A ? M - A : M - j : 0;
		return {
			[h]: m[h] + F,
			data: {
				[h]: N,
				centerOffset: M - N - F,
				...P && { alignmentOffset: F }
			},
			reset: P
		};
	}
}), flip$1 = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(n) {
			var i;
			let { placement: a, middlewareData: o, rects: s, initialPlacement: c, platform: l, elements: u } = n, { mainAxis: d = !0, crossAxis: f = !0, fallbackPlacements: p, fallbackStrategy: m = "bestFit", fallbackAxisSideDirection: h = "none", flipAlignment: g = !0,..._ } = evaluate(e, n);
			if ((i = o.arrow) != null && i.alignmentOffset) return {};
			let v = getSide(a), y = getSideAxis(c), b = getSide(c) === c, x = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), S = p || (b || !g ? [getOppositePlacement(c)] : getExpandedPlacements(c)), C = h !== "none";
			!p && C && S.push(...getOppositeAxisPlacements(c, g, h, x));
			let w = [c, ...S], T = await detectOverflow(n, _), E = [], D = o.flip?.overflows || [];
			if (d && E.push(T[v]), f) {
				let e = getAlignmentSides(a, s, x);
				E.push(T[e[0]], T[e[1]]);
			}
			if (D = [...D, {
				placement: a,
				overflows: E
			}], !E.every((e) => e <= 0)) {
				let e = (o.flip?.index || 0) + 1, n = w[e];
				if (n && (!(f === "alignment" && y !== getSideAxis(n)) || D.every((e) => getSideAxis(e.placement) === y ? e.overflows[0] > 0 : !0))) return {
					data: {
						index: e,
						overflows: D
					},
					reset: { placement: n }
				};
				let i = D.filter((e) => e.overflows[0] <= 0).sort((e, n) => e.overflows[1] - n.overflows[1])[0]?.placement;
				if (!i) switch (m) {
					case "bestFit": {
						let e = D.filter((e) => {
							if (C) {
								let n = getSideAxis(e.placement);
								return n === y || n === "y";
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, n) => e + n, 0)]).sort((e, n) => e[1] - n[1])[0]?.[0];
						e && (i = e);
						break;
					}
					case "initialPlacement":
						i = c;
						break;
				}
				if (a !== i) return { reset: { placement: i } };
			}
			return {};
		}
	};
};
function getSideOffsets(e, n) {
	return {
		top: e.top - n.height,
		right: e.right - n.width,
		bottom: e.bottom - n.height,
		left: e.left - n.width
	};
}
function isAnySideFullyClipped(e) {
	return sides.some((n) => e[n] >= 0);
}
var hide$1 = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(n) {
			let { rects: i } = n, { strategy: a = "referenceHidden",...o } = evaluate(e, n);
			switch (a) {
				case "referenceHidden": {
					let e = await detectOverflow(n, {
						...o,
						elementContext: "reference"
					}), a = getSideOffsets(e, i.reference);
					return { data: {
						referenceHiddenOffsets: a,
						referenceHidden: isAnySideFullyClipped(a)
					} };
				}
				case "escaped": {
					let e = await detectOverflow(n, {
						...o,
						altBoundary: !0
					}), a = getSideOffsets(e, i.floating);
					return { data: {
						escapedOffsets: a,
						escaped: isAnySideFullyClipped(a)
					} };
				}
				default: return {};
			}
		}
	};
}, originSides = /* @__PURE__ */ new Set(["left", "top"]);
async function convertValueToCoords(e, n) {
	let { placement: i, platform: a, elements: o } = e, s = await (a.isRTL == null ? void 0 : a.isRTL(o.floating)), c = getSide(i), l = getAlignment(i), u = getSideAxis(i) === "y", d = originSides.has(c) ? -1 : 1, f = s && u ? -1 : 1, p = evaluate(n, e), { mainAxis: m, crossAxis: h, alignmentAxis: g } = typeof p == "number" ? {
		mainAxis: p,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: p.mainAxis || 0,
		crossAxis: p.crossAxis || 0,
		alignmentAxis: p.alignmentAxis
	};
	return l && typeof g == "number" && (h = l === "end" ? g * -1 : g), u ? {
		x: h * f,
		y: m * d
	} : {
		x: m * d,
		y: h * f
	};
}
var offset$1 = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(n) {
			var i;
			let { x: a, y: o, placement: s, middlewareData: c } = n, l = await convertValueToCoords(n, e);
			return s === c.offset?.placement && (i = c.arrow) != null && i.alignmentOffset ? {} : {
				x: a + l.x,
				y: o + l.y,
				data: {
					...l,
					placement: s
				}
			};
		}
	};
}, shift$1 = function(e) {
	return e === void 0 && (e = {}), {
		name: "shift",
		options: e,
		async fn(n) {
			let { x: i, y: a, placement: o } = n, { mainAxis: s = !0, crossAxis: c = !1, limiter: l = { fn: (e) => {
				let { x: n, y: i } = e;
				return {
					x: n,
					y: i
				};
			} },...u } = evaluate(e, n), d = {
				x: i,
				y: a
			}, f = await detectOverflow(n, u), p = getSideAxis(getSide(o)), m = getOppositeAxis(p), h = d[m], g = d[p];
			if (s) {
				let e = m === "y" ? "top" : "left", n = m === "y" ? "bottom" : "right", i = h + f[e], a = h - f[n];
				h = clamp(i, h, a);
			}
			if (c) {
				let e = p === "y" ? "top" : "left", n = p === "y" ? "bottom" : "right", i = g + f[e], a = g - f[n];
				g = clamp(i, g, a);
			}
			let _ = l.fn({
				...n,
				[m]: h,
				[p]: g
			});
			return {
				..._,
				data: {
					x: _.x - i,
					y: _.y - a,
					enabled: {
						[m]: s,
						[p]: c
					}
				}
			};
		}
	};
}, limitShift$1 = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(n) {
			let { x: i, y: a, placement: o, rects: s, middlewareData: c } = n, { offset: l = 0, mainAxis: u = !0, crossAxis: d = !0 } = evaluate(e, n), f = {
				x: i,
				y: a
			}, p = getSideAxis(o), m = getOppositeAxis(p), h = f[m], g = f[p], _ = evaluate(l, n), v = typeof _ == "number" ? {
				mainAxis: _,
				crossAxis: 0
			} : {
				mainAxis: 0,
				crossAxis: 0,
				..._
			};
			if (u) {
				let e = m === "y" ? "height" : "width", n = s.reference[m] - s.floating[e] + v.mainAxis, i = s.reference[m] + s.reference[e] - v.mainAxis;
				h < n ? h = n : h > i && (h = i);
			}
			if (d) {
				let e = m === "y" ? "width" : "height", n = originSides.has(getSide(o)), i = s.reference[p] - s.floating[e] + (n && c.offset?.[p] || 0) + (n ? 0 : v.crossAxis), a = s.reference[p] + s.reference[e] + (n ? 0 : c.offset?.[p] || 0) - (n ? v.crossAxis : 0);
				g < i ? g = i : g > a && (g = a);
			}
			return {
				[m]: h,
				[p]: g
			};
		}
	};
}, size$1 = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(n) {
			var i, a;
			let { placement: o, rects: s, platform: c, elements: l } = n, { apply: u = () => {},...d } = evaluate(e, n), f = await detectOverflow(n, d), p = getSide(o), m = getAlignment(o), h = getSideAxis(o) === "y", { width: g, height: _ } = s.floating, v, y;
			p === "top" || p === "bottom" ? (v = p, y = m === (await (c.isRTL == null ? void 0 : c.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (y = p, v = m === "end" ? "top" : "bottom");
			let b = _ - f.top - f.bottom, x = g - f.left - f.right, S = min(_ - f[v], b), C = min(g - f[y], x), w = !n.middlewareData.shift, T = S, E = C;
			if ((i = n.middlewareData.shift) != null && i.enabled.x && (E = x), (a = n.middlewareData.shift) != null && a.enabled.y && (T = b), w && !m) {
				let e = max(f.left, 0), n = max(f.right, 0), i = max(f.top, 0), a = max(f.bottom, 0);
				h ? E = g - 2 * (e !== 0 || n !== 0 ? e + n : max(f.left, f.right)) : T = _ - 2 * (i !== 0 || a !== 0 ? i + a : max(f.top, f.bottom));
			}
			await u({
				...n,
				availableWidth: E,
				availableHeight: T
			});
			let D = await c.getDimensions(l.floating);
			return g !== D.width || _ !== D.height ? { reset: { rects: !0 } } : {};
		}
	};
};
function hasWindow() {
	return typeof window < "u";
}
function getNodeName(e) {
	return isNode(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function getWindow$1(e) {
	var n;
	return (e == null || (n = e.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function getDocumentElement(e) {
	return ((isNode(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function isNode(e) {
	return hasWindow() ? e instanceof Node || e instanceof getWindow$1(e).Node : !1;
}
function isElement$1(e) {
	return hasWindow() ? e instanceof Element || e instanceof getWindow$1(e).Element : !1;
}
function isHTMLElement$1(e) {
	return hasWindow() ? e instanceof HTMLElement || e instanceof getWindow$1(e).HTMLElement : !1;
}
function isShadowRoot(e) {
	return !hasWindow() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof getWindow$1(e).ShadowRoot;
}
var invalidOverflowDisplayValues = /* @__PURE__ */ new Set(["inline", "contents"]);
function isOverflowElement(e) {
	let { overflow: n, overflowX: i, overflowY: a, display: o } = getComputedStyle$1(e);
	return /auto|scroll|overlay|hidden|clip/.test(n + a + i) && !invalidOverflowDisplayValues.has(o);
}
var tableElements = /* @__PURE__ */ new Set([
	"table",
	"td",
	"th"
]);
function isTableElement(e) {
	return tableElements.has(getNodeName(e));
}
var topLayerSelectors = [":popover-open", ":modal"];
function isTopLayer(e) {
	return topLayerSelectors.some((n) => {
		try {
			return e.matches(n);
		} catch {
			return !1;
		}
	});
}
var transformProperties = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective"
], willChangeValues = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective",
	"filter"
], containValues = [
	"paint",
	"layout",
	"strict",
	"content"
];
function isContainingBlock(e) {
	let n = isWebKit(), i = isElement$1(e) ? getComputedStyle$1(e) : e;
	return transformProperties.some((e) => i[e] ? i[e] !== "none" : !1) || (i.containerType ? i.containerType !== "normal" : !1) || !n && (i.backdropFilter ? i.backdropFilter !== "none" : !1) || !n && (i.filter ? i.filter !== "none" : !1) || willChangeValues.some((e) => (i.willChange || "").includes(e)) || containValues.some((e) => (i.contain || "").includes(e));
}
function getContainingBlock(e) {
	let n = getParentNode(e);
	for (; isHTMLElement$1(n) && !isLastTraversableNode(n);) {
		if (isContainingBlock(n)) return n;
		if (isTopLayer(n)) return null;
		n = getParentNode(n);
	}
	return null;
}
function isWebKit() {
	return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
var lastTraversableNodeNames = /* @__PURE__ */ new Set([
	"html",
	"body",
	"#document"
]);
function isLastTraversableNode(e) {
	return lastTraversableNodeNames.has(getNodeName(e));
}
function getComputedStyle$1(e) {
	return getWindow$1(e).getComputedStyle(e);
}
function getNodeScroll(e) {
	return isElement$1(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function getParentNode(e) {
	if (getNodeName(e) === "html") return e;
	let n = e.assignedSlot || e.parentNode || isShadowRoot(e) && e.host || getDocumentElement(e);
	return isShadowRoot(n) ? n.host : n;
}
function getNearestOverflowAncestor(e) {
	let n = getParentNode(e);
	return isLastTraversableNode(n) ? e.ownerDocument ? e.ownerDocument.body : e.body : isHTMLElement$1(n) && isOverflowElement(n) ? n : getNearestOverflowAncestor(n);
}
function getOverflowAncestors(e, n, i) {
	n === void 0 && (n = []), i === void 0 && (i = !0);
	let a = getNearestOverflowAncestor(e), o = a === e.ownerDocument?.body, s = getWindow$1(a);
	if (o) {
		let e = getFrameElement(s);
		return n.concat(s, s.visualViewport || [], isOverflowElement(a) ? a : [], e && i ? getOverflowAncestors(e) : []);
	}
	return n.concat(a, getOverflowAncestors(a, [], i));
}
function getFrameElement(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function getCssDimensions(e) {
	let n = getComputedStyle$1(e), i = parseFloat(n.width) || 0, a = parseFloat(n.height) || 0, o = isHTMLElement$1(e), s = o ? e.offsetWidth : i, c = o ? e.offsetHeight : a, l = round(i) !== s || round(a) !== c;
	return l && (i = s, a = c), {
		width: i,
		height: a,
		$: l
	};
}
function unwrapElement(e) {
	return isElement$1(e) ? e : e.contextElement;
}
function getScale(e) {
	let n = unwrapElement(e);
	if (!isHTMLElement$1(n)) return createCoords(1);
	let i = n.getBoundingClientRect(), { width: a, height: o, $: s } = getCssDimensions(n), c = (s ? round(i.width) : i.width) / a, l = (s ? round(i.height) : i.height) / o;
	return (!c || !Number.isFinite(c)) && (c = 1), (!l || !Number.isFinite(l)) && (l = 1), {
		x: c,
		y: l
	};
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(e) {
	let n = getWindow$1(e);
	return !isWebKit() || !n.visualViewport ? noOffsets : {
		x: n.visualViewport.offsetLeft,
		y: n.visualViewport.offsetTop
	};
}
function shouldAddVisualOffsets(e, n, i) {
	return n === void 0 && (n = !1), !i || n && i !== getWindow$1(e) ? !1 : n;
}
function getBoundingClientRect(e, n, i, a) {
	n === void 0 && (n = !1), i === void 0 && (i = !1);
	let o = e.getBoundingClientRect(), s = unwrapElement(e), c = createCoords(1);
	n && (a ? isElement$1(a) && (c = getScale(a)) : c = getScale(e));
	let l = shouldAddVisualOffsets(s, i, a) ? getVisualOffsets(s) : createCoords(0), u = (o.left + l.x) / c.x, d = (o.top + l.y) / c.y, f = o.width / c.x, p = o.height / c.y;
	if (s) {
		let e = getWindow$1(s), n = a && isElement$1(a) ? getWindow$1(a) : a, i = e, o = getFrameElement(i);
		for (; o && a && n !== i;) {
			let e = getScale(o), n = o.getBoundingClientRect(), a = getComputedStyle$1(o), s = n.left + (o.clientLeft + parseFloat(a.paddingLeft)) * e.x, c = n.top + (o.clientTop + parseFloat(a.paddingTop)) * e.y;
			u *= e.x, d *= e.y, f *= e.x, p *= e.y, u += s, d += c, i = getWindow$1(o), o = getFrameElement(i);
		}
	}
	return rectToClientRect({
		width: f,
		height: p,
		x: u,
		y: d
	});
}
function getWindowScrollBarX(e, n) {
	let i = getNodeScroll(e).scrollLeft;
	return n ? n.left + i : getBoundingClientRect(getDocumentElement(e)).left + i;
}
function getHTMLOffset(e, n) {
	let i = e.getBoundingClientRect(), a = i.left + n.scrollLeft - getWindowScrollBarX(e, i), o = i.top + n.scrollTop;
	return {
		x: a,
		y: o
	};
}
function convertOffsetParentRelativeRectToViewportRelativeRect(e) {
	let { elements: n, rect: i, offsetParent: a, strategy: o } = e, s = o === "fixed", c = getDocumentElement(a), l = n ? isTopLayer(n.floating) : !1;
	if (a === c || l && s) return i;
	let u = {
		scrollLeft: 0,
		scrollTop: 0
	}, d = createCoords(1), f = createCoords(0), p = isHTMLElement$1(a);
	if ((p || !p && !s) && ((getNodeName(a) !== "body" || isOverflowElement(c)) && (u = getNodeScroll(a)), isHTMLElement$1(a))) {
		let e = getBoundingClientRect(a);
		d = getScale(a), f.x = e.x + a.clientLeft, f.y = e.y + a.clientTop;
	}
	let m = c && !p && !s ? getHTMLOffset(c, u) : createCoords(0);
	return {
		width: i.width * d.x,
		height: i.height * d.y,
		x: i.x * d.x - u.scrollLeft * d.x + f.x + m.x,
		y: i.y * d.y - u.scrollTop * d.y + f.y + m.y
	};
}
function getClientRects(e) {
	return Array.from(e.getClientRects());
}
function getDocumentRect(e) {
	let n = getDocumentElement(e), i = getNodeScroll(e), a = e.ownerDocument.body, o = max(n.scrollWidth, n.clientWidth, a.scrollWidth, a.clientWidth), s = max(n.scrollHeight, n.clientHeight, a.scrollHeight, a.clientHeight), c = -i.scrollLeft + getWindowScrollBarX(e), l = -i.scrollTop;
	return getComputedStyle$1(a).direction === "rtl" && (c += max(n.clientWidth, a.clientWidth) - o), {
		width: o,
		height: s,
		x: c,
		y: l
	};
}
var SCROLLBAR_MAX = 25;
function getViewportRect(e, n) {
	let i = getWindow$1(e), a = getDocumentElement(e), o = i.visualViewport, s = a.clientWidth, c = a.clientHeight, l = 0, u = 0;
	if (o) {
		s = o.width, c = o.height;
		let e = isWebKit();
		(!e || e && n === "fixed") && (l = o.offsetLeft, u = o.offsetTop);
	}
	let d = getWindowScrollBarX(a);
	if (d <= 0) {
		let e = a.ownerDocument, n = e.body, i = getComputedStyle(n), o = e.compatMode === "CSS1Compat" && parseFloat(i.marginLeft) + parseFloat(i.marginRight) || 0, c = Math.abs(a.clientWidth - n.clientWidth - o);
		c <= SCROLLBAR_MAX && (s -= c);
	} else d <= SCROLLBAR_MAX && (s += d);
	return {
		width: s,
		height: c,
		x: l,
		y: u
	};
}
var absoluteOrFixed = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function getInnerBoundingClientRect(e, n) {
	let i = getBoundingClientRect(e, !0, n === "fixed"), a = i.top + e.clientTop, o = i.left + e.clientLeft, s = isHTMLElement$1(e) ? getScale(e) : createCoords(1), c = e.clientWidth * s.x, l = e.clientHeight * s.y, u = o * s.x, d = a * s.y;
	return {
		width: c,
		height: l,
		x: u,
		y: d
	};
}
function getClientRectFromClippingAncestor(e, n, i) {
	let a;
	if (n === "viewport") a = getViewportRect(e, i);
	else if (n === "document") a = getDocumentRect(getDocumentElement(e));
	else if (isElement$1(n)) a = getInnerBoundingClientRect(n, i);
	else {
		let i = getVisualOffsets(e);
		a = {
			x: n.x - i.x,
			y: n.y - i.y,
			width: n.width,
			height: n.height
		};
	}
	return rectToClientRect(a);
}
function hasFixedPositionAncestor(e, n) {
	let i = getParentNode(e);
	return i === n || !isElement$1(i) || isLastTraversableNode(i) ? !1 : getComputedStyle$1(i).position === "fixed" || hasFixedPositionAncestor(i, n);
}
function getClippingElementAncestors(e, n) {
	let i = n.get(e);
	if (i) return i;
	let a = getOverflowAncestors(e, [], !1).filter((e) => isElement$1(e) && getNodeName(e) !== "body"), o = null, s = getComputedStyle$1(e).position === "fixed", c = s ? getParentNode(e) : e;
	for (; isElement$1(c) && !isLastTraversableNode(c);) {
		let n = getComputedStyle$1(c), i = isContainingBlock(c);
		!i && n.position === "fixed" && (o = null), (s ? !i && !o : !i && n.position === "static" && o && absoluteOrFixed.has(o.position) || isOverflowElement(c) && !i && hasFixedPositionAncestor(e, c)) ? a = a.filter((e) => e !== c) : o = n, c = getParentNode(c);
	}
	return n.set(e, a), a;
}
function getClippingRect(e) {
	let { element: n, boundary: i, rootBoundary: a, strategy: o } = e, s = [...i === "clippingAncestors" ? isTopLayer(n) ? [] : getClippingElementAncestors(n, this._c) : [].concat(i), a], c = s[0], l = s.reduce((e, i) => {
		let a = getClientRectFromClippingAncestor(n, i, o);
		return e.top = max(a.top, e.top), e.right = min(a.right, e.right), e.bottom = min(a.bottom, e.bottom), e.left = max(a.left, e.left), e;
	}, getClientRectFromClippingAncestor(n, c, o));
	return {
		width: l.right - l.left,
		height: l.bottom - l.top,
		x: l.left,
		y: l.top
	};
}
function getDimensions(e) {
	let { width: n, height: i } = getCssDimensions(e);
	return {
		width: n,
		height: i
	};
}
function getRectRelativeToOffsetParent(e, n, i) {
	let a = isHTMLElement$1(n), o = getDocumentElement(n), s = i === "fixed", c = getBoundingClientRect(e, !0, s, n), l = {
		scrollLeft: 0,
		scrollTop: 0
	}, u = createCoords(0);
	function d() {
		u.x = getWindowScrollBarX(o);
	}
	if (a || !a && !s) if ((getNodeName(n) !== "body" || isOverflowElement(o)) && (l = getNodeScroll(n)), a) {
		let e = getBoundingClientRect(n, !0, s, n);
		u.x = e.x + n.clientLeft, u.y = e.y + n.clientTop;
	} else o && d();
	s && !a && o && d();
	let f = o && !a && !s ? getHTMLOffset(o, l) : createCoords(0), p = c.left + l.scrollLeft - u.x - f.x, m = c.top + l.scrollTop - u.y - f.y;
	return {
		x: p,
		y: m,
		width: c.width,
		height: c.height
	};
}
function isStaticPositioned(e) {
	return getComputedStyle$1(e).position === "static";
}
function getTrueOffsetParent(e, n) {
	if (!isHTMLElement$1(e) || getComputedStyle$1(e).position === "fixed") return null;
	if (n) return n(e);
	let i = e.offsetParent;
	return getDocumentElement(e) === i && (i = i.ownerDocument.body), i;
}
function getOffsetParent(e, n) {
	let i = getWindow$1(e);
	if (isTopLayer(e)) return i;
	if (!isHTMLElement$1(e)) {
		let n = getParentNode(e);
		for (; n && !isLastTraversableNode(n);) {
			if (isElement$1(n) && !isStaticPositioned(n)) return n;
			n = getParentNode(n);
		}
		return i;
	}
	let a = getTrueOffsetParent(e, n);
	for (; a && isTableElement(a) && isStaticPositioned(a);) a = getTrueOffsetParent(a, n);
	return a && isLastTraversableNode(a) && isStaticPositioned(a) && !isContainingBlock(a) ? i : a || getContainingBlock(e) || i;
}
var getElementRects = async function(e) {
	let n = this.getOffsetParent || getOffsetParent, i = this.getDimensions, a = await i(e.floating);
	return {
		reference: getRectRelativeToOffsetParent(e.reference, await n(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: a.width,
			height: a.height
		}
	};
};
function isRTL(e) {
	return getComputedStyle$1(e).direction === "rtl";
}
var platform = {
	convertOffsetParentRelativeRectToViewportRelativeRect,
	getDocumentElement,
	getClippingRect,
	getOffsetParent,
	getElementRects,
	getClientRects,
	getDimensions,
	getScale,
	isElement: isElement$1,
	isRTL
};
function rectsAreEqual(e, n) {
	return e.x === n.x && e.y === n.y && e.width === n.width && e.height === n.height;
}
function observeMove(e, n) {
	let i = null, a, o = getDocumentElement(e);
	function s() {
		var e;
		clearTimeout(a), (e = i) == null || e.disconnect(), i = null;
	}
	function c(l, u) {
		l === void 0 && (l = !1), u === void 0 && (u = 1), s();
		let d = e.getBoundingClientRect(), { left: f, top: p, width: m, height: h } = d;
		if (l || n(), !m || !h) return;
		let g = floor(p), _ = floor(o.clientWidth - (f + m)), v = floor(o.clientHeight - (p + h)), y = floor(f), b = {
			rootMargin: -g + "px " + -_ + "px " + -v + "px " + -y + "px",
			threshold: max(0, min(1, u)) || 1
		}, x = !0;
		function S(n) {
			let i = n[0].intersectionRatio;
			if (i !== u) {
				if (!x) return c();
				i ? c(!1, i) : a = setTimeout(() => {
					c(!1, 1e-7);
				}, 1e3);
			}
			i === 1 && !rectsAreEqual(d, e.getBoundingClientRect()) && c(), x = !1;
		}
		try {
			i = new IntersectionObserver(S, {
				...b,
				root: o.ownerDocument
			});
		} catch {
			i = new IntersectionObserver(S, b);
		}
		i.observe(e);
	}
	return c(!0), s;
}
function autoUpdate(e, n, i, a) {
	a === void 0 && (a = {});
	let { ancestorScroll: o = !0, ancestorResize: s = !0, elementResize: c = typeof ResizeObserver == "function", layoutShift: l = typeof IntersectionObserver == "function", animationFrame: u = !1 } = a, d = unwrapElement(e), f = o || s ? [...d ? getOverflowAncestors(d) : [], ...getOverflowAncestors(n)] : [];
	f.forEach((e) => {
		o && e.addEventListener("scroll", i, { passive: !0 }), s && e.addEventListener("resize", i);
	});
	let p = d && l ? observeMove(d, i) : null, m = -1, h = null;
	c && (h = new ResizeObserver((e) => {
		let [a] = e;
		a && a.target === d && h && (h.unobserve(n), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
			var e;
			(e = h) == null || e.observe(n);
		})), i();
	}), d && !u && h.observe(d), h.observe(n));
	let g, _ = u ? getBoundingClientRect(e) : null;
	u && v();
	function v() {
		let n = getBoundingClientRect(e);
		_ && !rectsAreEqual(_, n) && i(), _ = n, g = requestAnimationFrame(v);
	}
	return i(), () => {
		var e;
		f.forEach((e) => {
			o && e.removeEventListener("scroll", i), s && e.removeEventListener("resize", i);
		}), p?.(), (e = h) == null || e.disconnect(), h = null, u && cancelAnimationFrame(g);
	};
}
var offset = offset$1, shift = shift$1, flip = flip$1, size = size$1, hide = hide$1, arrow = arrow$1, limitShift = limitShift$1, computePosition = (e, n, i) => {
	let a = /* @__PURE__ */ new Map(), o = {
		platform,
		...i
	}, s = {
		...o.platform,
		_c: a
	};
	return computePosition$1(e, n, {
		...o,
		platform: s
	});
};
function get(e) {
	return typeof e == "function" ? e() : e;
}
function getDPR(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function roundByDPR(e, n) {
	let i = getDPR(e);
	return Math.round(n * i) / i;
}
function getFloatingContentCSSVars(e) {
	return {
		[`--bits-${e}-content-transform-origin`]: "var(--bits-floating-transform-origin)",
		[`--bits-${e}-content-available-width`]: "var(--bits-floating-available-width)",
		[`--bits-${e}-content-available-height`]: "var(--bits-floating-available-height)",
		[`--bits-${e}-anchor-width`]: "var(--bits-floating-anchor-width)",
		[`--bits-${e}-anchor-height`]: "var(--bits-floating-anchor-height)"
	};
}
function useFloating(e) {
	let n = e.whileElementsMounted, i = /* @__PURE__ */ user_derived(() => get(e.open) ?? !0), a = /* @__PURE__ */ user_derived(() => get(e.middleware)), o = /* @__PURE__ */ user_derived(() => get(e.transform) ?? !0), s = /* @__PURE__ */ user_derived(() => get(e.placement) ?? "bottom"), c = /* @__PURE__ */ user_derived(() => get(e.strategy) ?? "absolute"), l = /* @__PURE__ */ user_derived(() => get(e.sideOffset) ?? 0), u = /* @__PURE__ */ user_derived(() => get(e.alignOffset) ?? 0), d = e.reference, f = /* @__PURE__ */ state(0), p = /* @__PURE__ */ state(0), m = simpleBox(null), h = /* @__PURE__ */ state(proxy(get$2(c))), g = /* @__PURE__ */ state(proxy(get$2(s))), _ = /* @__PURE__ */ state(proxy({})), v = /* @__PURE__ */ state(!1), y = /* @__PURE__ */ user_derived(() => {
		let e = m.current ? roundByDPR(m.current, get$2(f)) : get$2(f), n = m.current ? roundByDPR(m.current, get$2(p)) : get$2(p);
		return get$2(o) ? {
			position: get$2(h),
			left: "0",
			top: "0",
			transform: `translate(${e}px, ${n}px)`,
			...m.current && getDPR(m.current) >= 1.5 && { willChange: "transform" }
		} : {
			position: get$2(h),
			left: `${e}px`,
			top: `${n}px`
		};
	}), b;
	function x() {
		d.current === null || m.current === null || computePosition(d.current, m.current, {
			middleware: get$2(a),
			placement: get$2(s),
			strategy: get$2(c)
		}).then((e) => {
			if (!get$2(i) && get$2(f) !== 0 && get$2(p) !== 0) {
				let n = Math.max(Math.abs(get$2(l)), Math.abs(get$2(u)), 15);
				if (e.x <= n && e.y <= n) return;
			}
			set(f, e.x, !0), set(p, e.y, !0), set(h, e.strategy, !0), set(g, e.placement, !0), set(_, e.middlewareData, !0), set(v, !0);
		});
	}
	function S() {
		typeof b == "function" && (b(), b = void 0);
	}
	function C() {
		if (S(), n === void 0) {
			x();
			return;
		}
		d.current === null || m.current === null || (b = n(d.current, m.current, x));
	}
	function w() {
		get$2(i) || set(v, !1);
	}
	return user_effect(x), user_effect(C), user_effect(w), user_effect(() => S), {
		floating: m,
		reference: d,
		get strategy() {
			return get$2(h);
		},
		get placement() {
			return get$2(g);
		},
		get middlewareData() {
			return get$2(_);
		},
		get isPositioned() {
			return get$2(v);
		},
		get floatingStyles() {
			return get$2(y);
		},
		get update() {
			return x;
		}
	};
}
var OPPOSITE_SIDE = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, FloatingRootContext = new Context("Floating.Root"), FloatingContentContext = new Context("Floating.Content"), FloatingTooltipRootContext = new Context("Floating.Root"), FloatingRootState = class e {
	static create(n = !1) {
		return n ? FloatingTooltipRootContext.set(new e()) : FloatingRootContext.set(new e());
	}
	anchorNode = simpleBox(null);
	customAnchorNode = simpleBox(null);
	triggerNode = simpleBox(null);
	constructor() {
		user_effect(() => {
			this.customAnchorNode.current ? typeof this.customAnchorNode.current == "string" ? this.anchorNode.current = document.querySelector(this.customAnchorNode.current) : this.anchorNode.current = this.customAnchorNode.current : this.anchorNode.current = this.triggerNode.current;
		});
	}
}, FloatingContentState = class e {
	static create(n, i = !1) {
		return i ? FloatingContentContext.set(new e(n, FloatingTooltipRootContext.get())) : FloatingContentContext.set(new e(n, FloatingRootContext.get()));
	}
	opts;
	root;
	contentRef = simpleBox(null);
	wrapperRef = simpleBox(null);
	arrowRef = simpleBox(null);
	contentAttachment = attachRef(this.contentRef);
	wrapperAttachment = attachRef(this.wrapperRef);
	arrowAttachment = attachRef(this.arrowRef);
	arrowId = simpleBox(useId());
	#transformedStyle = /* @__PURE__ */ user_derived(() => {
		if (typeof this.opts.style == "string") return cssToStyleObj(this.opts.style);
		if (!this.opts.style) return {};
	});
	#updatePositionStrategy = void 0;
	#arrowSize = new ElementSize(() => this.arrowRef.current ?? void 0);
	#arrowWidth = /* @__PURE__ */ user_derived(() => this.#arrowSize?.width ?? 0);
	#arrowHeight = /* @__PURE__ */ user_derived(() => this.#arrowSize?.height ?? 0);
	#desiredPlacement = /* @__PURE__ */ user_derived(() => this.opts.side?.current + (this.opts.align.current === "center" ? "" : `-${this.opts.align.current}`));
	#boundary = /* @__PURE__ */ user_derived(() => Array.isArray(this.opts.collisionBoundary.current) ? this.opts.collisionBoundary.current : [this.opts.collisionBoundary.current]);
	#hasExplicitBoundaries = /* @__PURE__ */ user_derived(() => get$2(this.#boundary).length > 0);
	get hasExplicitBoundaries() {
		return get$2(this.#hasExplicitBoundaries);
	}
	set hasExplicitBoundaries(e) {
		set(this.#hasExplicitBoundaries, e);
	}
	#detectOverflowOptions = /* @__PURE__ */ user_derived(() => ({
		padding: this.opts.collisionPadding.current,
		boundary: get$2(this.#boundary).filter(isNotNull),
		altBoundary: this.hasExplicitBoundaries
	}));
	get detectOverflowOptions() {
		return get$2(this.#detectOverflowOptions);
	}
	set detectOverflowOptions(e) {
		set(this.#detectOverflowOptions, e);
	}
	#availableWidth = /* @__PURE__ */ state(void 0);
	#availableHeight = /* @__PURE__ */ state(void 0);
	#anchorWidth = /* @__PURE__ */ state(void 0);
	#anchorHeight = /* @__PURE__ */ state(void 0);
	#middleware = /* @__PURE__ */ user_derived(() => [
		offset({
			mainAxis: this.opts.sideOffset.current + get$2(this.#arrowHeight),
			alignmentAxis: this.opts.alignOffset.current
		}),
		this.opts.avoidCollisions.current && shift({
			mainAxis: !0,
			crossAxis: !1,
			limiter: this.opts.sticky.current === "partial" ? limitShift() : void 0,
			...this.detectOverflowOptions
		}),
		this.opts.avoidCollisions.current && flip({ ...this.detectOverflowOptions }),
		size({
			...this.detectOverflowOptions,
			apply: ({ rects: e, availableWidth: n, availableHeight: i }) => {
				let { width: a, height: o } = e.reference;
				set(this.#availableWidth, n, !0), set(this.#availableHeight, i, !0), set(this.#anchorWidth, a, !0), set(this.#anchorHeight, o, !0);
			}
		}),
		this.arrowRef.current && arrow({
			element: this.arrowRef.current,
			padding: this.opts.arrowPadding.current
		}),
		transformOrigin({
			arrowWidth: get$2(this.#arrowWidth),
			arrowHeight: get$2(this.#arrowHeight)
		}),
		this.opts.hideWhenDetached.current && hide({
			strategy: "referenceHidden",
			...this.detectOverflowOptions
		})
	].filter(Boolean));
	get middleware() {
		return get$2(this.#middleware);
	}
	set middleware(e) {
		set(this.#middleware, e);
	}
	floating;
	#placedSide = /* @__PURE__ */ user_derived(() => getSideFromPlacement(this.floating.placement));
	get placedSide() {
		return get$2(this.#placedSide);
	}
	set placedSide(e) {
		set(this.#placedSide, e);
	}
	#placedAlign = /* @__PURE__ */ user_derived(() => getAlignFromPlacement(this.floating.placement));
	get placedAlign() {
		return get$2(this.#placedAlign);
	}
	set placedAlign(e) {
		set(this.#placedAlign, e);
	}
	#arrowX = /* @__PURE__ */ user_derived(() => this.floating.middlewareData.arrow?.x ?? 0);
	get arrowX() {
		return get$2(this.#arrowX);
	}
	set arrowX(e) {
		set(this.#arrowX, e);
	}
	#arrowY = /* @__PURE__ */ user_derived(() => this.floating.middlewareData.arrow?.y ?? 0);
	get arrowY() {
		return get$2(this.#arrowY);
	}
	set arrowY(e) {
		set(this.#arrowY, e);
	}
	#cannotCenterArrow = /* @__PURE__ */ user_derived(() => this.floating.middlewareData.arrow?.centerOffset !== 0);
	get cannotCenterArrow() {
		return get$2(this.#cannotCenterArrow);
	}
	set cannotCenterArrow(e) {
		set(this.#cannotCenterArrow, e);
	}
	#contentZIndex = /* @__PURE__ */ state();
	get contentZIndex() {
		return get$2(this.#contentZIndex);
	}
	set contentZIndex(e) {
		set(this.#contentZIndex, e, !0);
	}
	#arrowBaseSide = /* @__PURE__ */ user_derived(() => OPPOSITE_SIDE[this.placedSide]);
	get arrowBaseSide() {
		return get$2(this.#arrowBaseSide);
	}
	set arrowBaseSide(e) {
		set(this.#arrowBaseSide, e);
	}
	#wrapperProps = /* @__PURE__ */ user_derived(() => ({
		id: this.opts.wrapperId.current,
		"data-bits-floating-content-wrapper": "",
		style: {
			...this.floating.floatingStyles,
			transform: this.floating.isPositioned ? this.floating.floatingStyles.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: this.contentZIndex,
			"--bits-floating-transform-origin": `${this.floating.middlewareData.transformOrigin?.x} ${this.floating.middlewareData.transformOrigin?.y}`,
			"--bits-floating-available-width": `${get$2(this.#availableWidth)}px`,
			"--bits-floating-available-height": `${get$2(this.#availableHeight)}px`,
			"--bits-floating-anchor-width": `${get$2(this.#anchorWidth)}px`,
			"--bits-floating-anchor-height": `${get$2(this.#anchorHeight)}px`,
			...this.floating.middlewareData.hide?.referenceHidden && {
				visibility: "hidden",
				"pointer-events": "none"
			},
			...get$2(this.#transformedStyle)
		},
		dir: this.opts.dir.current,
		...this.wrapperAttachment
	}));
	get wrapperProps() {
		return get$2(this.#wrapperProps);
	}
	set wrapperProps(e) {
		set(this.#wrapperProps, e);
	}
	#props = /* @__PURE__ */ user_derived(() => ({
		"data-side": this.placedSide,
		"data-align": this.placedAlign,
		style: styleToString({ ...get$2(this.#transformedStyle) }),
		...this.contentAttachment
	}));
	get props() {
		return get$2(this.#props);
	}
	set props(e) {
		set(this.#props, e);
	}
	#arrowStyle = /* @__PURE__ */ user_derived(() => ({
		position: "absolute",
		left: this.arrowX ? `${this.arrowX}px` : void 0,
		top: this.arrowY ? `${this.arrowY}px` : void 0,
		[this.arrowBaseSide]: 0,
		"transform-origin": {
			top: "",
			right: "0 0",
			bottom: "center 0",
			left: "100% 0"
		}[this.placedSide],
		transform: {
			top: "translateY(100%)",
			right: "translateY(50%) rotate(90deg) translateX(-50%)",
			bottom: "rotate(180deg)",
			left: "translateY(50%) rotate(-90deg) translateX(50%)"
		}[this.placedSide],
		visibility: this.cannotCenterArrow ? "hidden" : void 0
	}));
	get arrowStyle() {
		return get$2(this.#arrowStyle);
	}
	set arrowStyle(e) {
		set(this.#arrowStyle, e);
	}
	constructor(e, n) {
		this.opts = e, this.root = n, e.customAnchor && (this.root.customAnchorNode.current = e.customAnchor.current), watch(() => e.customAnchor.current, (e) => {
			this.root.customAnchorNode.current = e;
		}), this.floating = useFloating({
			strategy: () => this.opts.strategy.current,
			placement: () => get$2(this.#desiredPlacement),
			middleware: () => this.middleware,
			reference: this.root.anchorNode,
			whileElementsMounted: (...e) => autoUpdate(...e, { animationFrame: this.#updatePositionStrategy?.current === "always" }),
			open: () => this.opts.enabled.current,
			sideOffset: () => this.opts.sideOffset.current,
			alignOffset: () => this.opts.alignOffset.current
		}), user_effect(() => {
			this.floating.isPositioned && this.opts.onPlaced?.current();
		}), watch(() => this.contentRef.current, (e) => {
			e && (this.contentZIndex = getWindow(e).getComputedStyle(e).zIndex);
		}), user_effect(() => {
			this.floating.floating.current = this.wrapperRef.current;
		});
	}
}, FloatingAnchorState = class e {
	static create(n, i = !1) {
		return i ? new e(n, FloatingTooltipRootContext.get()) : new e(n, FloatingRootContext.get());
	}
	opts;
	root;
	constructor(e, n) {
		this.opts = e, this.root = n, e.virtualEl && e.virtualEl.current ? n.triggerNode = boxFrom(e.virtualEl.current) : n.triggerNode = e.ref;
	}
};
function transformOrigin(e) {
	return {
		name: "transformOrigin",
		options: e,
		fn(n) {
			let { placement: i, rects: a, middlewareData: o } = n, s = o.arrow?.centerOffset !== 0, c = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [u, d] = getSideAndAlignFromPlacement(i), f = {
				start: "0%",
				center: "50%",
				end: "100%"
			}[d], p = (o.arrow?.x ?? 0) + c / 2, m = (o.arrow?.y ?? 0) + l / 2, h = "", g = "";
			return u === "bottom" ? (h = s ? f : `${p}px`, g = `${-l}px`) : u === "top" ? (h = s ? f : `${p}px`, g = `${a.floating.height + l}px`) : u === "right" ? (h = `${-l}px`, g = s ? f : `${m}px`) : u === "left" && (h = `${a.floating.width + l}px`, g = s ? f : `${m}px`), { data: {
				x: h,
				y: g
			} };
		}
	};
}
function getSideAndAlignFromPlacement(e) {
	let [n, i = "center"] = e.split("-");
	return [n, i];
}
function getSideFromPlacement(e) {
	return getSideAndAlignFromPlacement(e)[0];
}
function getAlignFromPlacement(e) {
	return getSideAndAlignFromPlacement(e)[1];
}
function Floating_layer(e, n) {
	push(n, !0);
	let i = prop(n, "tooltip", 3, !1);
	FloatingRootState.create(i());
	var a = comment(), o = first_child(a);
	snippet(o, () => n.children ?? noop$1), append(e, a), pop();
}
var defaultOptions = {
	afterMs: 1e4,
	onChange: noop
};
function boxAutoReset(e, n) {
	let { afterMs: i, onChange: a, getWindow: o } = {
		...defaultOptions,
		...n
	}, s = null, c = /* @__PURE__ */ state(proxy(e));
	function l() {
		return o().setTimeout(() => {
			set(c, e, !0), a?.(e);
		}, i);
	}
	return user_effect(() => () => {
		s && o().clearTimeout(s);
	}), boxWith(() => get$2(c), (e) => {
		set(c, e, !0), a?.(e), s && o().clearTimeout(s), s = l();
	});
}
function Floating_layer_anchor(e, n) {
	push(n, !0);
	let i = prop(n, "tooltip", 3, !1);
	FloatingAnchorState.create({
		id: boxWith(() => n.id),
		virtualEl: boxWith(() => n.virtualEl),
		ref: n.ref
	}, i());
	var a = comment(), o = first_child(a);
	snippet(o, () => n.children ?? noop$1), append(e, a), pop();
}
function Floating_layer_content(e, n) {
	push(n, !0);
	let i = prop(n, "side", 3, "bottom"), a = prop(n, "sideOffset", 3, 0), o = prop(n, "align", 3, "center"), s = prop(n, "alignOffset", 3, 0), c = prop(n, "arrowPadding", 3, 0), l = prop(n, "avoidCollisions", 3, !0), u = prop(n, "collisionBoundary", 19, () => []), d = prop(n, "collisionPadding", 3, 0), f = prop(n, "hideWhenDetached", 3, !1), p = prop(n, "onPlaced", 3, () => {}), m = prop(n, "sticky", 3, "partial"), h = prop(n, "updatePositionStrategy", 3, "optimized"), g = prop(n, "strategy", 3, "fixed"), _ = prop(n, "dir", 3, "ltr"), v = prop(n, "style", 19, () => ({})), y = prop(n, "wrapperId", 19, useId), b = prop(n, "customAnchor", 3, null), x = prop(n, "tooltip", 3, !1), S = FloatingContentState.create({
		side: boxWith(() => i()),
		sideOffset: boxWith(() => a()),
		align: boxWith(() => o()),
		alignOffset: boxWith(() => s()),
		id: boxWith(() => n.id),
		arrowPadding: boxWith(() => c()),
		avoidCollisions: boxWith(() => l()),
		collisionBoundary: boxWith(() => u()),
		collisionPadding: boxWith(() => d()),
		hideWhenDetached: boxWith(() => f()),
		onPlaced: boxWith(() => p()),
		sticky: boxWith(() => m()),
		updatePositionStrategy: boxWith(() => h()),
		strategy: boxWith(() => g()),
		dir: boxWith(() => _()),
		style: boxWith(() => v()),
		enabled: boxWith(() => n.enabled),
		wrapperId: boxWith(() => y()),
		customAnchor: boxWith(() => b())
	}, x()), w = /* @__PURE__ */ user_derived(() => mergeProps(S.wrapperProps, { style: { pointerEvents: "auto" } }));
	var T = comment(), E = first_child(T);
	snippet(E, () => n.content ?? noop$1, () => ({
		props: S.props,
		wrapperProps: get$2(w)
	})), append(e, T), pop();
}
function Floating_layer_content_static(e, n) {
	push(n, !0), onMount(() => {
		n.onPlaced?.();
	});
	var i = comment(), a = first_child(i);
	snippet(a, () => n.content ?? noop$1, () => ({
		props: {},
		wrapperProps: {}
	})), append(e, i), pop();
}
function Popper_content(e, n) {
	let i = prop(n, "isStatic", 3, !1), a = /* @__PURE__ */ rest_props(n, [
		"$$slots",
		"$$events",
		"$$legacy",
		"content",
		"isStatic",
		"onPlaced"
	]);
	var o = comment(), s = first_child(o), c = (e) => {
		Floating_layer_content_static(e, {
			get content() {
				return n.content;
			},
			get onPlaced() {
				return n.onPlaced;
			}
		});
	}, l = (e) => {
		Floating_layer_content(e, spread_props({
			get content() {
				return n.content;
			},
			get onPlaced() {
				return n.onPlaced;
			}
		}, () => a));
	};
	if_block(s, (e) => {
		i() ? e(c) : e(l, !1);
	}), append(e, o);
}
var root_1$19 = /* @__PURE__ */ from_html("<!> <!>", 1);
function Popper_layer_inner(e, n) {
	push(n, !0);
	let i = prop(n, "interactOutsideBehavior", 3, "close"), a = prop(n, "trapFocus", 3, !0), o = prop(n, "isValidEvent", 3, () => !1), s = prop(n, "customAnchor", 3, null), c = prop(n, "isStatic", 3, !1), l = prop(n, "tooltip", 3, !1), u = /* @__PURE__ */ rest_props(n, /* @__PURE__ */ "$$slots.$$events.$$legacy.popper.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.enabled.ref.tooltip".split("."));
	Popper_content(e, {
		get isStatic() {
			return c();
		},
		get id() {
			return n.id;
		},
		get side() {
			return n.side;
		},
		get sideOffset() {
			return n.sideOffset;
		},
		get align() {
			return n.align;
		},
		get alignOffset() {
			return n.alignOffset;
		},
		get arrowPadding() {
			return n.arrowPadding;
		},
		get avoidCollisions() {
			return n.avoidCollisions;
		},
		get collisionBoundary() {
			return n.collisionBoundary;
		},
		get collisionPadding() {
			return n.collisionPadding;
		},
		get sticky() {
			return n.sticky;
		},
		get hideWhenDetached() {
			return n.hideWhenDetached;
		},
		get updatePositionStrategy() {
			return n.updatePositionStrategy;
		},
		get strategy() {
			return n.strategy;
		},
		get dir() {
			return n.dir;
		},
		get wrapperId() {
			return n.wrapperId;
		},
		get style() {
			return n.style;
		},
		get onPlaced() {
			return n.onPlaced;
		},
		get customAnchor() {
			return s();
		},
		get enabled() {
			return n.enabled;
		},
		get tooltip() {
			return l();
		},
		content: (e, s) => {
			let c = () => s?.().props, l = () => s?.().wrapperProps;
			var d = root_1$19(), f = first_child(d), p = (e) => {
				Scroll_lock(e, { get preventScroll() {
					return n.preventScroll;
				} });
			}, m = (e) => {
				var i = comment(), a = first_child(i), o = (e) => {
					Scroll_lock(e, { get preventScroll() {
						return n.preventScroll;
					} });
				};
				if_block(a, (e) => {
					n.forceMount || e(o);
				}, !0), append(e, i);
			};
			if_block(f, (e) => {
				n.forceMount && n.enabled ? e(p) : e(m, !1);
			});
			var h = sibling(f, 2);
			Focus_scope(h, {
				get onOpenAutoFocus() {
					return n.onOpenAutoFocus;
				},
				get onCloseAutoFocus() {
					return n.onCloseAutoFocus;
				},
				get loop() {
					return n.loop;
				},
				get enabled() {
					return n.enabled;
				},
				get trapFocus() {
					return a();
				},
				get forceMount() {
					return n.forceMount;
				},
				get ref() {
					return n.ref;
				},
				focusScope: (e, a) => {
					let s = () => a?.().props;
					Escape_layer(e, {
						get onEscapeKeydown() {
							return n.onEscapeKeydown;
						},
						get escapeKeydownBehavior() {
							return n.escapeKeydownBehavior;
						},
						get enabled() {
							return n.enabled;
						},
						get ref() {
							return n.ref;
						},
						children: (e, a) => {
							Dismissible_layer(e, {
								get id() {
									return n.id;
								},
								get onInteractOutside() {
									return n.onInteractOutside;
								},
								get onFocusOutside() {
									return n.onFocusOutside;
								},
								get interactOutsideBehavior() {
									return i();
								},
								get isValidEvent() {
									return o();
								},
								get enabled() {
									return n.enabled;
								},
								get ref() {
									return n.ref;
								},
								children: (e, i) => {
									let a = () => i?.().props;
									Text_selection_layer(e, {
										get id() {
											return n.id;
										},
										get preventOverflowTextSelection() {
											return n.preventOverflowTextSelection;
										},
										get onPointerDown() {
											return n.onPointerDown;
										},
										get onPointerUp() {
											return n.onPointerUp;
										},
										get enabled() {
											return n.enabled;
										},
										get ref() {
											return n.ref;
										},
										children: (e, i) => {
											var o = comment(), d = first_child(o);
											{
												let e = /* @__PURE__ */ user_derived(() => ({
													props: mergeProps(u, c(), a(), s(), { style: { pointerEvents: "auto" } }),
													wrapperProps: l()
												}));
												snippet(d, () => n.popper ?? noop$1, () => get$2(e));
											}
											append(e, o);
										},
										$$slots: { default: !0 }
									});
								},
								$$slots: { default: !0 }
							});
						},
						$$slots: { default: !0 }
					});
				},
				$$slots: { focusScope: !0 }
			}), append(e, d);
		},
		$$slots: { content: !0 }
	}), pop();
}
function Popper_layer(e, n) {
	let i = prop(n, "interactOutsideBehavior", 3, "close"), a = prop(n, "trapFocus", 3, !0), o = prop(n, "isValidEvent", 3, () => !1), s = prop(n, "customAnchor", 3, null), c = prop(n, "isStatic", 3, !1), l = /* @__PURE__ */ rest_props(n, /* @__PURE__ */ "$$slots.$$events.$$legacy.popper.open.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.ref".split("."));
	Presence_layer(e, {
		get open() {
			return n.open;
		},
		get ref() {
			return n.ref;
		},
		presence: (e) => {
			Popper_layer_inner(e, spread_props({
				get popper() {
					return n.popper;
				},
				get onEscapeKeydown() {
					return n.onEscapeKeydown;
				},
				get escapeKeydownBehavior() {
					return n.escapeKeydownBehavior;
				},
				get preventOverflowTextSelection() {
					return n.preventOverflowTextSelection;
				},
				get id() {
					return n.id;
				},
				get onPointerDown() {
					return n.onPointerDown;
				},
				get onPointerUp() {
					return n.onPointerUp;
				},
				get side() {
					return n.side;
				},
				get sideOffset() {
					return n.sideOffset;
				},
				get align() {
					return n.align;
				},
				get alignOffset() {
					return n.alignOffset;
				},
				get arrowPadding() {
					return n.arrowPadding;
				},
				get avoidCollisions() {
					return n.avoidCollisions;
				},
				get collisionBoundary() {
					return n.collisionBoundary;
				},
				get collisionPadding() {
					return n.collisionPadding;
				},
				get sticky() {
					return n.sticky;
				},
				get hideWhenDetached() {
					return n.hideWhenDetached;
				},
				get updatePositionStrategy() {
					return n.updatePositionStrategy;
				},
				get strategy() {
					return n.strategy;
				},
				get dir() {
					return n.dir;
				},
				get preventScroll() {
					return n.preventScroll;
				},
				get wrapperId() {
					return n.wrapperId;
				},
				get style() {
					return n.style;
				},
				get onPlaced() {
					return n.onPlaced;
				},
				get customAnchor() {
					return s();
				},
				get isStatic() {
					return c();
				},
				get enabled() {
					return n.open;
				},
				get onInteractOutside() {
					return n.onInteractOutside;
				},
				get onCloseAutoFocus() {
					return n.onCloseAutoFocus;
				},
				get onOpenAutoFocus() {
					return n.onOpenAutoFocus;
				},
				get interactOutsideBehavior() {
					return i();
				},
				get loop() {
					return n.loop;
				},
				get trapFocus() {
					return a();
				},
				get isValidEvent() {
					return o();
				},
				get onFocusOutside() {
					return n.onFocusOutside;
				},
				forceMount: !1,
				get ref() {
					return n.ref;
				}
			}, () => l));
		},
		$$slots: { presence: !0 }
	});
}
function Popper_layer_force_mount(e, n) {
	let i = prop(n, "interactOutsideBehavior", 3, "close"), a = prop(n, "trapFocus", 3, !0), o = prop(n, "isValidEvent", 3, () => !1), s = prop(n, "customAnchor", 3, null), c = prop(n, "isStatic", 3, !1), l = /* @__PURE__ */ rest_props(n, /* @__PURE__ */ "$$slots.$$events.$$legacy.popper.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.enabled".split("."));
	Popper_layer_inner(e, spread_props({
		get popper() {
			return n.popper;
		},
		get onEscapeKeydown() {
			return n.onEscapeKeydown;
		},
		get escapeKeydownBehavior() {
			return n.escapeKeydownBehavior;
		},
		get preventOverflowTextSelection() {
			return n.preventOverflowTextSelection;
		},
		get id() {
			return n.id;
		},
		get onPointerDown() {
			return n.onPointerDown;
		},
		get onPointerUp() {
			return n.onPointerUp;
		},
		get side() {
			return n.side;
		},
		get sideOffset() {
			return n.sideOffset;
		},
		get align() {
			return n.align;
		},
		get alignOffset() {
			return n.alignOffset;
		},
		get arrowPadding() {
			return n.arrowPadding;
		},
		get avoidCollisions() {
			return n.avoidCollisions;
		},
		get collisionBoundary() {
			return n.collisionBoundary;
		},
		get collisionPadding() {
			return n.collisionPadding;
		},
		get sticky() {
			return n.sticky;
		},
		get hideWhenDetached() {
			return n.hideWhenDetached;
		},
		get updatePositionStrategy() {
			return n.updatePositionStrategy;
		},
		get strategy() {
			return n.strategy;
		},
		get dir() {
			return n.dir;
		},
		get preventScroll() {
			return n.preventScroll;
		},
		get wrapperId() {
			return n.wrapperId;
		},
		get style() {
			return n.style;
		},
		get onPlaced() {
			return n.onPlaced;
		},
		get customAnchor() {
			return s();
		},
		get isStatic() {
			return c();
		},
		get enabled() {
			return n.enabled;
		},
		get onInteractOutside() {
			return n.onInteractOutside;
		},
		get onCloseAutoFocus() {
			return n.onCloseAutoFocus;
		},
		get onOpenAutoFocus() {
			return n.onOpenAutoFocus;
		},
		get interactOutsideBehavior() {
			return i();
		},
		get loop() {
			return n.loop;
		},
		get trapFocus() {
			return a();
		},
		get isValidEvent() {
			return o();
		},
		get onFocusOutside() {
			return n.onFocusOutside;
		}
	}, () => l, { forceMount: !0 }));
}
var GraceArea = class {
	#opts;
	#enabled;
	#isPointerInTransit;
	#pointerGraceArea = /* @__PURE__ */ state(null);
	constructor(e) {
		this.#opts = e, this.#enabled = /* @__PURE__ */ user_derived(() => this.#opts.enabled()), this.#isPointerInTransit = boxAutoReset(!1, {
			afterMs: e.transitTimeout ?? 300,
			onChange: (e) => {
				get$2(this.#enabled) && this.#opts.setIsPointerInTransit?.(e);
			},
			getWindow: () => getWindow(this.#opts.triggerNode())
		}), watch([
			e.triggerNode,
			e.contentNode,
			e.enabled
		], ([e, n, i]) => !e || !n || !i ? void 0 : executeCallbacks(on(e, "pointerleave", (e) => {
			this.#createGraceArea(e, n);
		}), on(n, "pointerleave", (n) => {
			this.#createGraceArea(n, e);
		}))), watch(() => get$2(this.#pointerGraceArea), () => {
			let n = (n) => {
				if (!get$2(this.#pointerGraceArea)) return;
				let i = n.target;
				if (!isElement(i)) return;
				let a = {
					x: n.clientX,
					y: n.clientY
				}, o = e.triggerNode()?.contains(i) || e.contentNode()?.contains(i), s = !isPointInPolygon(a, get$2(this.#pointerGraceArea));
				o ? this.#removeGraceArea() : s && (this.#removeGraceArea(), e.onPointerExit());
			}, i = getDocument(e.triggerNode() ?? e.contentNode());
			if (i) return on(i, "pointermove", n);
		});
	}
	#removeGraceArea() {
		set(this.#pointerGraceArea, null), this.#isPointerInTransit.current = !1;
	}
	#createGraceArea(e, n) {
		let i = e.currentTarget;
		if (!isHTMLElement(i)) return;
		let a = {
			x: e.clientX,
			y: e.clientY
		}, o = getExitSideFromRect(a, i.getBoundingClientRect()), s = getPaddedExitPoints(a, o), c = getPointsFromRect(n.getBoundingClientRect()), l = getHull([...s, ...c]);
		set(this.#pointerGraceArea, l, !0), this.#isPointerInTransit.current = !0;
	}
};
function getExitSideFromRect(e, n) {
	let i = Math.abs(n.top - e.y), a = Math.abs(n.bottom - e.y), o = Math.abs(n.right - e.x), s = Math.abs(n.left - e.x);
	switch (Math.min(i, a, o, s)) {
		case s: return "left";
		case o: return "right";
		case i: return "top";
		case a: return "bottom";
		default: throw Error("unreachable");
	}
}
function getPaddedExitPoints(e, n, i = 5) {
	let a = i * 1.5;
	switch (n) {
		case "top": return [
			{
				x: e.x - i,
				y: e.y + i
			},
			{
				x: e.x,
				y: e.y - a
			},
			{
				x: e.x + i,
				y: e.y + i
			}
		];
		case "bottom": return [
			{
				x: e.x - i,
				y: e.y - i
			},
			{
				x: e.x,
				y: e.y + a
			},
			{
				x: e.x + i,
				y: e.y - i
			}
		];
		case "left": return [
			{
				x: e.x + i,
				y: e.y - i
			},
			{
				x: e.x - a,
				y: e.y
			},
			{
				x: e.x + i,
				y: e.y + i
			}
		];
		case "right": return [
			{
				x: e.x - i,
				y: e.y - i
			},
			{
				x: e.x + a,
				y: e.y
			},
			{
				x: e.x - i,
				y: e.y + i
			}
		];
	}
}
function getPointsFromRect(e) {
	let { top: n, right: i, bottom: a, left: o } = e;
	return [
		{
			x: o,
			y: n
		},
		{
			x: i,
			y: n
		},
		{
			x: i,
			y: a
		},
		{
			x: o,
			y: a
		}
	];
}
function isPointInPolygon(e, n) {
	let { x: i, y: a } = e, o = !1;
	for (let e = 0, s = n.length - 1; e < n.length; s = e++) {
		let c = n[e].x, l = n[e].y, u = n[s].x, d = n[s].y;
		l > a != d > a && i < (u - c) * (a - l) / (d - l) + c && (o = !o);
	}
	return o;
}
function getHull(e) {
	let n = e.slice();
	return n.sort((e, n) => e.x < n.x ? -1 : e.x > n.x ? 1 : e.y < n.y ? -1 : e.y > n.y ? 1 : 0), getHullPresorted(n);
}
function getHullPresorted(e) {
	if (e.length <= 1) return e.slice();
	let n = [];
	for (let i = 0; i < e.length; i++) {
		let a = e[i];
		for (; n.length >= 2;) {
			let e = n[n.length - 1], i = n[n.length - 2];
			if ((e.x - i.x) * (a.y - i.y) >= (e.y - i.y) * (a.x - i.x)) n.pop();
			else break;
		}
		n.push(a);
	}
	n.pop();
	let i = [];
	for (let n = e.length - 1; n >= 0; n--) {
		let a = e[n];
		for (; i.length >= 2;) {
			let e = i[i.length - 1], n = i[i.length - 2];
			if ((e.x - n.x) * (a.y - n.y) >= (e.y - n.y) * (a.x - n.x)) i.pop();
			else break;
		}
		i.push(a);
	}
	return i.pop(), n.length === 1 && i.length === 1 && n[0].x === i[0].x && n[0].y === i[0].y ? n : n.concat(i);
}
function Dialog(e, n) {
	push(n, !0);
	let i = prop(n, "open", 15, !1), a = prop(n, "onOpenChange", 3, noop), o = prop(n, "onOpenChangeComplete", 3, noop);
	DialogRootState.create({
		variant: boxWith(() => "dialog"),
		open: boxWith(() => i(), (e) => {
			i(e), a()(e);
		}),
		onOpenChangeComplete: boxWith(() => o())
	});
	var s = comment(), c = first_child(s);
	snippet(c, () => n.children ?? noop$1), append(e, s), pop();
}
var root_2$25 = /* @__PURE__ */ from_html("<button><!></button>");
function Dialog_close(e, n) {
	let i = props_id();
	push(n, !0);
	let a = prop(n, "id", 19, () => createId(i)), o = prop(n, "ref", 15, null), s = prop(n, "disabled", 3, !1), c = /* @__PURE__ */ rest_props(n, [
		"$$slots",
		"$$events",
		"$$legacy",
		"children",
		"child",
		"id",
		"ref",
		"disabled"
	]), l = DialogCloseState.create({
		variant: boxWith(() => "close"),
		id: boxWith(() => a()),
		ref: boxWith(() => o(), (e) => o(e)),
		disabled: boxWith(() => !!s())
	}), u = /* @__PURE__ */ user_derived(() => mergeProps(c, l.props));
	var d = comment(), f = first_child(d), p = (e) => {
		var i = comment(), a = first_child(i);
		snippet(a, () => n.child, () => ({ props: get$2(u) })), append(e, i);
	}, m = (e) => {
		var i = root_2$25();
		attribute_effect(i, () => ({ ...get$2(u) }));
		var a = child(i);
		snippet(a, () => n.children ?? noop$1), reset(i), append(e, i);
	};
	if_block(f, (e) => {
		n.child ? e(p) : e(m, !1);
	}), append(e, d), pop();
}
var root_6$5 = /* @__PURE__ */ from_html("<!> <!>", 1), root_8$5 = /* @__PURE__ */ from_html("<!> <div><!></div>", 1);
function Dialog_content(e, n) {
	let i = props_id();
	push(n, !0);
	let a = prop(n, "id", 19, () => createId(i)), o = prop(n, "ref", 15, null), s = prop(n, "forceMount", 3, !1), c = prop(n, "onCloseAutoFocus", 3, noop), l = prop(n, "onOpenAutoFocus", 3, noop), u = prop(n, "onEscapeKeydown", 3, noop), d = prop(n, "onInteractOutside", 3, noop), f = prop(n, "trapFocus", 3, !0), p = prop(n, "preventScroll", 3, !0), m = prop(n, "restoreScrollDelay", 3, null), h = /* @__PURE__ */ rest_props(n, [
		"$$slots",
		"$$events",
		"$$legacy",
		"id",
		"children",
		"child",
		"ref",
		"forceMount",
		"onCloseAutoFocus",
		"onOpenAutoFocus",
		"onEscapeKeydown",
		"onInteractOutside",
		"trapFocus",
		"preventScroll",
		"restoreScrollDelay"
	]), g = DialogContentState.create({
		id: boxWith(() => a()),
		ref: boxWith(() => o(), (e) => o(e))
	}), _ = /* @__PURE__ */ user_derived(() => mergeProps(h, g.props));
	{
		let i = (e) => {
			{
				let i = (e, i) => {
					let a = () => i?.().props;
					Escape_layer(e, spread_props(() => get$2(_), {
						get enabled() {
							return g.root.opts.open.current;
						},
						get ref() {
							return g.opts.ref;
						},
						onEscapeKeydown: (e) => {
							u()(e), !e.defaultPrevented && g.root.handleClose();
						},
						children: (e, i) => {
							Dismissible_layer(e, spread_props(() => get$2(_), {
								get ref() {
									return g.opts.ref;
								},
								get enabled() {
									return g.root.opts.open.current;
								},
								onInteractOutside: (e) => {
									d()(e), !e.defaultPrevented && g.root.handleClose();
								},
								children: (e, i) => {
									Text_selection_layer(e, spread_props(() => get$2(_), {
										get ref() {
											return g.opts.ref;
										},
										get enabled() {
											return g.root.opts.open.current;
										},
										children: (e, i) => {
											var o = comment(), s = first_child(o), c = (e) => {
												var i = root_6$5(), o = first_child(i), s = (e) => {
													Scroll_lock(e, {
														get preventScroll() {
															return p();
														},
														get restoreScrollDelay() {
															return m();
														}
													});
												};
												if_block(o, (e) => {
													g.root.opts.open.current && e(s);
												});
												var c = sibling(o, 2);
												{
													let e = /* @__PURE__ */ user_derived(() => ({
														props: mergeProps(get$2(_), a()),
														...g.snippetProps
													}));
													snippet(c, () => n.child, () => get$2(e));
												}
												append(e, i);
											}, l = (e) => {
												var i = root_8$5(), o = first_child(i);
												Scroll_lock(o, { get preventScroll() {
													return p();
												} });
												var s = sibling(o, 2);
												attribute_effect(s, (e) => ({ ...e }), [() => mergeProps(get$2(_), a())]);
												var c = child(s);
												snippet(c, () => n.children ?? noop$1), reset(s), append(e, i);
											};
											if_block(s, (e) => {
												n.child ? e(c) : e(l, !1);
											}), append(e, o);
										},
										$$slots: { default: !0 }
									}));
								},
								$$slots: { default: !0 }
							}));
						},
						$$slots: { default: !0 }
					}));
				}, a = /* @__PURE__ */ user_derived(() => shouldEnableFocusTrap({
					forceMount: s(),
					present: g.root.opts.open.current,
					open: g.root.opts.open.current
				}));
				Focus_scope(e, {
					get ref() {
						return g.opts.ref;
					},
					loop: !0,
					get trapFocus() {
						return f();
					},
					get enabled() {
						return get$2(a);
					},
					get onOpenAutoFocus() {
						return l();
					},
					get onCloseAutoFocus() {
						return c();
					},
					focusScope: i,
					$$slots: { focusScope: !0 }
				});
			}
		}, a = /* @__PURE__ */ user_derived(() => g.root.opts.open.current || s());
		Presence_layer(e, spread_props(() => get$2(_), {
			get forceMount() {
				return s();
			},
			get open() {
				return get$2(a);
			},
			get ref() {
				return g.opts.ref;
			},
			presence: i,
			$$slots: { presence: !0 }
		}));
	}
	pop();
}
var paginationAttrs = createBitsAttrs({
	component: "pagination",
	parts: [
		"root",
		"page",
		"prev",
		"next"
	]
}), PaginationRootContext = new Context("Pagination.Root"), PaginationRootState = class e {
	static create(n) {
		return PaginationRootContext.set(new e(n));
	}
	opts;
	attachment;
	#totalPages = /* @__PURE__ */ user_derived(() => this.opts.count.current === 0 ? 1 : Math.ceil(this.opts.count.current / this.opts.perPage.current));
	get totalPages() {
		return get$2(this.#totalPages);
	}
	set totalPages(e) {
		set(this.#totalPages, e);
	}
	#range = /* @__PURE__ */ user_derived(() => {
		let e = (this.opts.page.current - 1) * this.opts.perPage.current, n = Math.min(e + this.opts.perPage.current, this.opts.count.current);
		return {
			start: e + 1,
			end: n
		};
	});
	get range() {
		return get$2(this.#range);
	}
	set range(e) {
		set(this.#range, e);
	}
	#pages = /* @__PURE__ */ user_derived(() => getPageItems({
		page: this.opts.page.current,
		totalPages: this.totalPages,
		siblingCount: this.opts.siblingCount.current
	}));
	get pages() {
		return get$2(this.#pages);
	}
	set pages(e) {
		set(this.#pages, e);
	}
	#hasPrevPage = /* @__PURE__ */ user_derived(() => this.opts.page.current > 1);
	get hasPrevPage() {
		return get$2(this.#hasPrevPage);
	}
	set hasPrevPage(e) {
		set(this.#hasPrevPage, e);
	}
	#hasNextPage = /* @__PURE__ */ user_derived(() => this.opts.page.current < this.totalPages);
	get hasNextPage() {
		return get$2(this.#hasNextPage);
	}
	set hasNextPage(e) {
		set(this.#hasNextPage, e);
	}
	constructor(e) {
		this.opts = e, this.attachment = attachRef(this.opts.ref);
	}
	setPage(e) {
		this.opts.page.current = e;
	}
	getPageTriggerNodes() {
		let e = this.opts.ref.current;
		return e ? Array.from(e.querySelectorAll("[data-pagination-page]")) : [];
	}
	getButtonNode(e) {
		let n = this.opts.ref.current;
		if (n) return n.querySelector(paginationAttrs.selector(e));
	}
	prevPage() {
		this.opts.page.current = Math.max(this.opts.page.current - 1, 1);
	}
	nextPage() {
		this.opts.page.current = Math.min(this.opts.page.current + 1, this.totalPages);
	}
	#snippetProps = /* @__PURE__ */ user_derived(() => ({
		pages: this.pages,
		range: this.range,
		currentPage: this.opts.page.current
	}));
	get snippetProps() {
		return get$2(this.#snippetProps);
	}
	set snippetProps(e) {
		set(this.#snippetProps, e);
	}
	#props = /* @__PURE__ */ user_derived(() => ({
		id: this.opts.id.current,
		"data-orientation": this.opts.orientation.current,
		[paginationAttrs.root]: "",
		...this.attachment
	}));
	get props() {
		return get$2(this.#props);
	}
	set props(e) {
		set(this.#props, e);
	}
}, PaginationPageState = class e {
	static create(n) {
		return new e(n, PaginationRootContext.get());
	}
	opts;
	root;
	attachment;
	#isSelected = /* @__PURE__ */ user_derived(() => this.opts.page.current.value === this.root.opts.page.current);
	constructor(e, n) {
		this.opts = e, this.root = n, this.attachment = attachRef(this.opts.ref), this.onclick = this.onclick.bind(this), this.onkeydown = this.onkeydown.bind(this);
	}
	onclick(e) {
		this.opts.disabled.current || e.button === 0 && this.root.setPage(this.opts.page.current.value);
	}
	onkeydown(e) {
		e.key === " " || e.key === "Enter" ? (e.preventDefault(), this.root.setPage(this.opts.page.current.value)) : handleTriggerKeydown(e, this.opts.ref.current, this.root);
	}
	#props = /* @__PURE__ */ user_derived(() => ({
		id: this.opts.id.current,
		"aria-label": `Page ${this.opts.page.current.value}`,
		"data-value": `${this.opts.page.current.value}`,
		"data-selected": get$2(this.#isSelected) ? "" : void 0,
		[paginationAttrs.page]: "",
		onclick: this.onclick,
		onkeydown: this.onkeydown,
		...this.attachment
	}));
	get props() {
		return get$2(this.#props);
	}
	set props(e) {
		set(this.#props, e);
	}
}, PaginationButtonState = class e {
	static create(n) {
		return new e(n, PaginationRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(e, n) {
		this.opts = e, this.root = n, this.attachment = attachRef(this.opts.ref), this.onclick = this.onclick.bind(this), this.onkeydown = this.onkeydown.bind(this);
	}
	#action() {
		this.opts.type === "prev" ? this.root.prevPage() : this.root.nextPage();
	}
	#isDisabled = /* @__PURE__ */ user_derived(() => this.opts.disabled.current ? !0 : this.opts.type === "prev" ? !this.root.hasPrevPage : this.opts.type === "next" ? !this.root.hasNextPage : !1);
	onclick(e) {
		this.opts.disabled.current || e.button === 0 && this.#action();
	}
	onkeydown(e) {
		e.key === " " || e.key === "Enter" ? (e.preventDefault(), this.#action()) : handleTriggerKeydown(e, this.opts.ref.current, this.root);
	}
	#props = /* @__PURE__ */ user_derived(() => ({
		id: this.opts.id.current,
		[paginationAttrs[this.opts.type]]: "",
		disabled: get$2(this.#isDisabled),
		onclick: this.onclick,
		onkeydown: this.onkeydown,
		...this.attachment
	}));
	get props() {
		return get$2(this.#props);
	}
	set props(e) {
		set(this.#props, e);
	}
};
function handleTriggerKeydown(e, n, i) {
	if (!n || !i.opts.ref.current) return;
	let a = i.getPageTriggerNodes(), o = i.getButtonNode("next"), s = i.getButtonNode("prev");
	s && a.unshift(s), o && a.push(o);
	let c = a.indexOf(n), l = getElemDirection(i.opts.ref.current), { nextKey: u, prevKey: d } = getDirectionalKeys(l, i.opts.orientation.current), f = i.opts.loop.current, p = {
		[u]: c + 1,
		[d]: c - 1,
		Home: 0,
		End: a.length - 1
	}[e.key];
	if (p === void 0) return;
	e.preventDefault(), p < 0 && f ? p = a.length - 1 : p === a.length && f && (p = 0);
	let m = a[p];
	m && m.focus();
}
function getPageItems({ page: e = 1, totalPages: n, siblingCount: i = 1 }) {
	let a = [], o = new Set([1, n]), s = 3 + i, c = n - 2 - i;
	if (s > c) for (let e = 2; e <= n - 1; e++) o.add(e);
	else if (e < s) for (let e = 2; e <= Math.min(s, n); e++) o.add(e);
	else if (e > c) for (let e = n - 1; e >= Math.max(c, 2); e--) o.add(e);
	else for (let a = Math.max(e - i, 2); a <= Math.min(e + i, n); a++) o.add(a);
	function l(e) {
		a.push({
			type: "page",
			value: e,
			key: `page-${e}`
		});
	}
	function u() {
		let e = useId();
		a.push({
			type: "ellipsis",
			key: `ellipsis-${e}`
		});
	}
	let d = 0;
	for (let e of Array.from(o).sort((e, n) => e - n)) e - d > 1 && u(), l(e), d = e;
	return a;
}
var root_2$24 = /* @__PURE__ */ from_html("<div><!></div>");
function Pagination(e, n) {
	let i = props_id();
	push(n, !0);
	let a = prop(n, "id", 19, () => createId(i)), o = prop(n, "perPage", 3, 1), s = prop(n, "page", 15, 1), c = prop(n, "ref", 15, null), l = prop(n, "siblingCount", 3, 1), u = prop(n, "onPageChange", 3, noop), d = prop(n, "loop", 3, !1), f = prop(n, "orientation", 3, "horizontal"), p = /* @__PURE__ */ rest_props(n, [
		"$$slots",
		"$$events",
		"$$legacy",
		"id",
		"count",
		"perPage",
		"page",
		"ref",
		"siblingCount",
		"onPageChange",
		"loop",
		"orientation",
		"child",
		"children"
	]), m = PaginationRootState.create({
		id: boxWith(() => a()),
		count: boxWith(() => n.count),
		perPage: boxWith(() => o()),
		page: boxWith(() => s(), (e) => {
			s(e), u()?.(e);
		}),
		loop: boxWith(() => d()),
		siblingCount: boxWith(() => l()),
		orientation: boxWith(() => f()),
		ref: boxWith(() => c(), (e) => c(e))
	}), h = /* @__PURE__ */ user_derived(() => mergeProps(p, m.props));
	var g = comment(), _ = first_child(g), v = (e) => {
		var i = comment(), a = first_child(i);
		{
			let e = /* @__PURE__ */ user_derived(() => ({
				props: get$2(h),
				...m.snippetProps
			}));
			snippet(a, () => n.child, () => get$2(e));
		}
		append(e, i);
	}, y = (e) => {
		var i = root_2$24();
		attribute_effect(i, () => ({ ...get$2(h) }));
		var a = child(i);
		snippet(a, () => n.children ?? noop$1, () => m.snippetProps), reset(i), append(e, i);
	};
	if_block(_, (e) => {
		n.child ? e(v) : e(y, !1);
	}), append(e, g), pop();
}
var root_2$23 = /* @__PURE__ */ from_html("<button><!></button>");
function Pagination_prev_button(e, n) {
	let i = props_id();
	push(n, !0);
	let a = prop(n, "id", 19, () => createId(i)), o = prop(n, "ref", 15, null), s = prop(n, "type", 3, "button"), c = prop(n, "disabled", 3, !1), l = /* @__PURE__ */ rest_props(n, [
		"$$slots",
		"$$events",
		"$$legacy",
		"id",
		"child",
		"children",
		"ref",
		"type",
		"disabled"
	]), u = PaginationButtonState.create({
		type: "prev",
		id: boxWith(() => a()),
		ref: boxWith(() => o(), (e) => o(e)),
		disabled: boxWith(() => !!c())
	}), d = /* @__PURE__ */ user_derived(() => mergeProps(l, u.props, { type: s() }));
	var f = comment(), p = first_child(f), m = (e) => {
		var i = comment(), a = first_child(i);
		snippet(a, () => n.child, () => ({ props: get$2(d) })), append(e, i);
	}, h = (e) => {
		var i = root_2$23();
		attribute_effect(i, () => ({ ...get$2(d) }));
		var a = child(i);
		snippet(a, () => n.children ?? noop$1), reset(i), append(e, i);
	};
	if_block(p, (e) => {
		n.child ? e(m) : e(h, !1);
	}), append(e, f), pop();
}
var root_2$22 = /* @__PURE__ */ from_html("<button><!></button>");
function Pagination_next_button(e, n) {
	let i = props_id();
	push(n, !0);
	let a = prop(n, "id", 19, () => createId(i)), o = prop(n, "ref", 15, null), s = prop(n, "type", 3, "button"), c = prop(n, "disabled", 3, !1), l = /* @__PURE__ */ rest_props(n, [
		"$$slots",
		"$$events",
		"$$legacy",
		"id",
		"child",
		"children",
		"ref",
		"type",
		"disabled"
	]), u = PaginationButtonState.create({
		type: "next",
		id: boxWith(() => a()),
		ref: boxWith(() => o(), (e) => o(e)),
		disabled: boxWith(() => !!c())
	}), d = /* @__PURE__ */ user_derived(() => mergeProps(l, u.props, { type: s() }));
	var f = comment(), p = first_child(f), m = (e) => {
		var i = comment(), a = first_child(i);
		snippet(a, () => n.child, () => ({ props: get$2(d) })), append(e, i);
	}, h = (e) => {
		var i = root_2$22();
		attribute_effect(i, () => ({ ...get$2(d) }));
		var a = child(i);
		snippet(a, () => n.children ?? noop$1), reset(i), append(e, i);
	};
	if_block(p, (e) => {
		n.child ? e(m) : e(h, !1);
	}), append(e, f), pop();
}
var root_2$21 = /* @__PURE__ */ from_html("<button><!></button>");
function Pagination_page(e, n) {
	let i = props_id();
	push(n, !0);
	let a = prop(n, "id", 19, () => createId(i)), o = prop(n, "type", 3, "button"), s = prop(n, "ref", 15, null), c = prop(n, "disabled", 3, !1), l = /* @__PURE__ */ rest_props(n, [
		"$$slots",
		"$$events",
		"$$legacy",
		"id",
		"page",
		"child",
		"children",
		"type",
		"ref",
		"disabled"
	]), u = PaginationPageState.create({
		id: boxWith(() => a()),
		page: boxWith(() => n.page),
		ref: boxWith(() => s(), (e) => s(e)),
		disabled: boxWith(() => !!c())
	}), d = /* @__PURE__ */ user_derived(() => mergeProps(l, u.props, { type: o() }));
	var f = comment(), p = first_child(f), m = (e) => {
		var i = comment(), a = first_child(i);
		snippet(a, () => n.child, () => ({ props: get$2(d) })), append(e, i);
	}, h = (e) => {
		var i = root_2$21();
		attribute_effect(i, () => ({ ...get$2(d) }));
		var a = child(i), o = (e) => {
			var i = comment(), a = first_child(i);
			snippet(a, () => n.children ?? noop$1), append(e, i);
		}, s = (e) => {
			var i = text();
			template_effect(() => set_text(i, n.page.value)), append(e, i);
		};
		if_block(a, (e) => {
			n.children ? e(o) : e(s, !1);
		}), reset(i), append(e, i);
	};
	if_block(p, (e) => {
		n.child ? e(m) : e(h, !1);
	}), append(e, f), pop();
}
var tabsAttrs = createBitsAttrs({
	component: "tabs",
	parts: [
		"root",
		"list",
		"trigger",
		"content"
	]
}), TabsRootContext = new Context("Tabs.Root"), TabsRootState = class e {
	static create(n) {
		return TabsRootContext.set(new e(n));
	}
	opts;
	attachment;
	rovingFocusGroup;
	#triggerIds = /* @__PURE__ */ state(proxy([]));
	get triggerIds() {
		return get$2(this.#triggerIds);
	}
	set triggerIds(e) {
		set(this.#triggerIds, e, !0);
	}
	valueToTriggerId = new SvelteMap();
	valueToContentId = new SvelteMap();
	constructor(e) {
		this.opts = e, this.attachment = attachRef(e.ref), this.rovingFocusGroup = new RovingFocusGroup({
			candidateAttr: tabsAttrs.trigger,
			rootNode: this.opts.ref,
			loop: this.opts.loop,
			orientation: this.opts.orientation
		});
	}
	registerTrigger(e, n) {
		return this.triggerIds.push(e), this.valueToTriggerId.set(n, e), () => {
			this.triggerIds = this.triggerIds.filter((n) => n !== e), this.valueToTriggerId.delete(n);
		};
	}
	registerContent(e, n) {
		return this.valueToContentId.set(n, e), () => {
			this.valueToContentId.delete(n);
		};
	}
	setValue(e) {
		this.opts.value.current = e;
	}
	#props = /* @__PURE__ */ user_derived(() => ({
		id: this.opts.id.current,
		"data-orientation": this.opts.orientation.current,
		[tabsAttrs.root]: "",
		...this.attachment
	}));
	get props() {
		return get$2(this.#props);
	}
	set props(e) {
		set(this.#props, e);
	}
}, TabsListState = class e {
	static create(n) {
		return new e(n, TabsRootContext.get());
	}
	opts;
	root;
	attachment;
	#isDisabled = /* @__PURE__ */ user_derived(() => this.root.opts.disabled.current);
	constructor(e, n) {
		this.opts = e, this.root = n, this.attachment = attachRef(e.ref);
	}
	#props = /* @__PURE__ */ user_derived(() => ({
		id: this.opts.id.current,
		role: "tablist",
		"aria-orientation": this.root.opts.orientation.current,
		"data-orientation": this.root.opts.orientation.current,
		[tabsAttrs.list]: "",
		"data-disabled": boolToEmptyStrOrUndef(get$2(this.#isDisabled)),
		...this.attachment
	}));
	get props() {
		return get$2(this.#props);
	}
	set props(e) {
		set(this.#props, e);
	}
}, TabsTriggerState = class e {
	static create(n) {
		return new e(n, TabsRootContext.get());
	}
	opts;
	root;
	attachment;
	#tabIndex = /* @__PURE__ */ state(0);
	#isActive = /* @__PURE__ */ user_derived(() => this.root.opts.value.current === this.opts.value.current);
	#isDisabled = /* @__PURE__ */ user_derived(() => this.opts.disabled.current || this.root.opts.disabled.current);
	#ariaControls = /* @__PURE__ */ user_derived(() => this.root.valueToContentId.get(this.opts.value.current));
	constructor(e, n) {
		this.opts = e, this.root = n, this.attachment = attachRef(e.ref), watch([() => this.opts.id.current, () => this.opts.value.current], ([e, n]) => this.root.registerTrigger(e, n)), user_effect(() => {
			this.root.triggerIds.length, get$2(this.#isActive) || !this.root.opts.value.current ? set(this.#tabIndex, 0) : set(this.#tabIndex, -1);
		}), this.onfocus = this.onfocus.bind(this), this.onclick = this.onclick.bind(this), this.onkeydown = this.onkeydown.bind(this);
	}
	#activate() {
		this.root.opts.value.current !== this.opts.value.current && this.root.setValue(this.opts.value.current);
	}
	onfocus(e) {
		this.root.opts.activationMode.current !== "automatic" || get$2(this.#isDisabled) || this.#activate();
	}
	onclick(e) {
		get$2(this.#isDisabled) || this.#activate();
	}
	onkeydown(e) {
		if (!get$2(this.#isDisabled)) {
			if (e.key === " " || e.key === "Enter") {
				e.preventDefault(), this.#activate();
				return;
			}
			this.root.rovingFocusGroup.handleKeydown(this.opts.ref.current, e);
		}
	}
	#props = /* @__PURE__ */ user_derived(() => ({
		id: this.opts.id.current,
		role: "tab",
		"data-state": getTabDataState(get$2(this.#isActive)),
		"data-value": this.opts.value.current,
		"data-orientation": this.root.opts.orientation.current,
		"data-disabled": boolToEmptyStrOrUndef(get$2(this.#isDisabled)),
		"aria-selected": boolToStr(get$2(this.#isActive)),
		"aria-controls": get$2(this.#ariaControls),
		[tabsAttrs.trigger]: "",
		disabled: boolToTrueOrUndef(get$2(this.#isDisabled)),
		tabindex: get$2(this.#tabIndex),
		onclick: this.onclick,
		onfocus: this.onfocus,
		onkeydown: this.onkeydown,
		...this.attachment
	}));
	get props() {
		return get$2(this.#props);
	}
	set props(e) {
		set(this.#props, e);
	}
}, TabsContentState = class e {
	static create(n) {
		return new e(n, TabsRootContext.get());
	}
	opts;
	root;
	attachment;
	#isActive = /* @__PURE__ */ user_derived(() => this.root.opts.value.current === this.opts.value.current);
	#ariaLabelledBy = /* @__PURE__ */ user_derived(() => this.root.valueToTriggerId.get(this.opts.value.current));
	constructor(e, n) {
		this.opts = e, this.root = n, this.attachment = attachRef(e.ref), watch([() => this.opts.id.current, () => this.opts.value.current], ([e, n]) => this.root.registerContent(e, n));
	}
	#props = /* @__PURE__ */ user_derived(() => ({
		id: this.opts.id.current,
		role: "tabpanel",
		hidden: boolToTrueOrUndef(!get$2(this.#isActive)),
		tabindex: 0,
		"data-value": this.opts.value.current,
		"data-state": getTabDataState(get$2(this.#isActive)),
		"aria-labelledby": get$2(this.#ariaLabelledBy),
		"data-orientation": this.root.opts.orientation.current,
		[tabsAttrs.content]: "",
		...this.attachment
	}));
	get props() {
		return get$2(this.#props);
	}
	set props(e) {
		set(this.#props, e);
	}
};
function getTabDataState(e) {
	return e ? "active" : "inactive";
}
var root_2$20 = /* @__PURE__ */ from_html("<div><!></div>");
function Tabs(e, n) {
	let i = props_id();
	push(n, !0);
	let a = prop(n, "id", 19, () => createId(i)), o = prop(n, "ref", 15, null), s = prop(n, "value", 15, ""), c = prop(n, "onValueChange", 3, noop), l = prop(n, "orientation", 3, "horizontal"), u = prop(n, "loop", 3, !0), d = prop(n, "activationMode", 3, "automatic"), f = prop(n, "disabled", 3, !1), p = /* @__PURE__ */ rest_props(n, [
		"$$slots",
		"$$events",
		"$$legacy",
		"id",
		"ref",
		"value",
		"onValueChange",
		"orientation",
		"loop",
		"activationMode",
		"disabled",
		"children",
		"child"
	]), m = TabsRootState.create({
		id: boxWith(() => a()),
		value: boxWith(() => s(), (e) => {
			s(e), c()(e);
		}),
		orientation: boxWith(() => l()),
		loop: boxWith(() => u()),
		activationMode: boxWith(() => d()),
		disabled: boxWith(() => f()),
		ref: boxWith(() => o(), (e) => o(e))
	}), h = /* @__PURE__ */ user_derived(() => mergeProps(p, m.props));
	var g = comment(), _ = first_child(g), v = (e) => {
		var i = comment(), a = first_child(i);
		snippet(a, () => n.child, () => ({ props: get$2(h) })), append(e, i);
	}, y = (e) => {
		var i = root_2$20();
		attribute_effect(i, () => ({ ...get$2(h) }));
		var a = child(i);
		snippet(a, () => n.children ?? noop$1), reset(i), append(e, i);
	};
	if_block(_, (e) => {
		n.child ? e(v) : e(y, !1);
	}), append(e, g), pop();
}
var root_2$19 = /* @__PURE__ */ from_html("<div><!></div>");
function Tabs_content(e, n) {
	let i = props_id();
	push(n, !0);
	let a = prop(n, "id", 19, () => createId(i)), o = prop(n, "ref", 15, null), s = /* @__PURE__ */ rest_props(n, [
		"$$slots",
		"$$events",
		"$$legacy",
		"children",
		"child",
		"id",
		"ref",
		"value"
	]), c = TabsContentState.create({
		value: boxWith(() => n.value),
		id: boxWith(() => a()),
		ref: boxWith(() => o(), (e) => o(e))
	}), l = /* @__PURE__ */ user_derived(() => mergeProps(s, c.props));
	var u = comment(), d = first_child(u), f = (e) => {
		var i = comment(), a = first_child(i);
		snippet(a, () => n.child, () => ({ props: get$2(l) })), append(e, i);
	}, p = (e) => {
		var i = root_2$19();
		attribute_effect(i, () => ({ ...get$2(l) }));
		var a = child(i);
		snippet(a, () => n.children ?? noop$1), reset(i), append(e, i);
	};
	if_block(d, (e) => {
		n.child ? e(f) : e(p, !1);
	}), append(e, u), pop();
}
var root_2$18 = /* @__PURE__ */ from_html("<div><!></div>");
function Tabs_list(e, n) {
	let i = props_id();
	push(n, !0);
	let a = prop(n, "id", 19, () => createId(i)), o = prop(n, "ref", 15, null), s = /* @__PURE__ */ rest_props(n, [
		"$$slots",
		"$$events",
		"$$legacy",
		"child",
		"children",
		"id",
		"ref"
	]), c = TabsListState.create({
		id: boxWith(() => a()),
		ref: boxWith(() => o(), (e) => o(e))
	}), l = /* @__PURE__ */ user_derived(() => mergeProps(s, c.props));
	var u = comment(), d = first_child(u), f = (e) => {
		var i = comment(), a = first_child(i);
		snippet(a, () => n.child, () => ({ props: get$2(l) })), append(e, i);
	}, p = (e) => {
		var i = root_2$18();
		attribute_effect(i, () => ({ ...get$2(l) }));
		var a = child(i);
		snippet(a, () => n.children ?? noop$1), reset(i), append(e, i);
	};
	if_block(d, (e) => {
		n.child ? e(f) : e(p, !1);
	}), append(e, u), pop();
}
var root_2$17 = /* @__PURE__ */ from_html("<button><!></button>");
function Tabs_trigger(e, n) {
	let i = props_id();
	push(n, !0);
	let a = prop(n, "disabled", 3, !1), o = prop(n, "id", 19, () => createId(i)), s = prop(n, "type", 3, "button"), c = prop(n, "ref", 15, null), l = /* @__PURE__ */ rest_props(n, [
		"$$slots",
		"$$events",
		"$$legacy",
		"child",
		"children",
		"disabled",
		"id",
		"type",
		"value",
		"ref"
	]), u = TabsTriggerState.create({
		id: boxWith(() => o()),
		disabled: boxWith(() => a() ?? !1),
		value: boxWith(() => n.value),
		ref: boxWith(() => c(), (e) => c(e))
	}), d = /* @__PURE__ */ user_derived(() => mergeProps(l, u.props, { type: s() }));
	var f = comment(), p = first_child(f), m = (e) => {
		var i = comment(), a = first_child(i);
		snippet(a, () => n.child, () => ({ props: get$2(d) })), append(e, i);
	}, h = (e) => {
		var i = root_2$17();
		attribute_effect(i, () => ({ ...get$2(d) }));
		var a = child(i);
		snippet(a, () => n.children ?? noop$1), reset(i), append(e, i);
	};
	if_block(p, (e) => {
		n.child ? e(m) : e(h, !1);
	}), append(e, f), pop();
}
const toggleAttrs = createBitsAttrs({
	component: "toggle",
	parts: ["root"]
});
var ToggleRootState = class e {
	static create(n) {
		return new e(n);
	}
	opts;
	attachment;
	constructor(e) {
		this.opts = e, this.attachment = attachRef(this.opts.ref), this.onclick = this.onclick.bind(this);
	}
	onclick(e) {
		this.opts.disabled.current || (this.opts.pressed.current = !this.opts.pressed.current);
	}
	#snippetProps = /* @__PURE__ */ user_derived(() => ({ pressed: this.opts.pressed.current }));
	get snippetProps() {
		return get$2(this.#snippetProps);
	}
	set snippetProps(e) {
		set(this.#snippetProps, e);
	}
	#props = /* @__PURE__ */ user_derived(() => ({
		[toggleAttrs.root]: "",
		id: this.opts.id.current,
		"data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current),
		"aria-pressed": boolToStr(this.opts.pressed.current),
		"data-state": getToggleDataState(this.opts.pressed.current),
		disabled: boolToTrueOrUndef(this.opts.disabled.current),
		onclick: this.onclick,
		...this.attachment
	}));
	get props() {
		return get$2(this.#props);
	}
	set props(e) {
		set(this.#props, e);
	}
};
function getToggleDataState(e) {
	return e ? "on" : "off";
}
var root_2$16 = /* @__PURE__ */ from_html("<button><!></button>");
function Toggle(e, n) {
	let i = props_id();
	push(n, !0);
	let a = prop(n, "ref", 15, null), o = prop(n, "id", 19, () => createId(i)), s = prop(n, "pressed", 15, !1), c = prop(n, "onPressedChange", 3, noop), l = prop(n, "disabled", 3, !1), u = prop(n, "type", 3, "button"), d = /* @__PURE__ */ rest_props(n, [
		"$$slots",
		"$$events",
		"$$legacy",
		"ref",
		"id",
		"pressed",
		"onPressedChange",
		"disabled",
		"type",
		"children",
		"child"
	]), f = ToggleRootState.create({
		pressed: boxWith(() => s(), (e) => {
			s(e), c()(e);
		}),
		disabled: boxWith(() => l() ?? !1),
		id: boxWith(() => o()),
		ref: boxWith(() => a(), (e) => a(e))
	}), p = /* @__PURE__ */ user_derived(() => mergeProps(d, f.props, { type: u() }));
	var m = comment(), h = first_child(m), g = (e) => {
		var i = comment(), a = first_child(i);
		{
			let e = /* @__PURE__ */ user_derived(() => ({
				props: get$2(p),
				...f.snippetProps
			}));
			snippet(a, () => n.child, () => get$2(e));
		}
		append(e, i);
	}, _ = (e) => {
		var i = root_2$16();
		attribute_effect(i, () => ({ ...get$2(p) }));
		var a = child(i);
		snippet(a, () => n.children ?? noop$1, () => f.snippetProps), reset(i), append(e, i);
	};
	if_block(h, (e) => {
		n.child ? e(g) : e(_, !1);
	}), append(e, m), pop();
}
const toggleGroupAttrs = createBitsAttrs({
	component: "toggle-group",
	parts: ["root", "item"]
});
var ToggleGroupRootContext = new Context("ToggleGroup.Root"), ToggleGroupBaseState = class {
	opts;
	rovingFocusGroup;
	attachment;
	constructor(e) {
		this.opts = e, this.attachment = attachRef(this.opts.ref), this.rovingFocusGroup = new RovingFocusGroup({
			candidateAttr: toggleGroupAttrs.item,
			rootNode: e.ref,
			loop: e.loop,
			orientation: e.orientation
		});
	}
	#props = /* @__PURE__ */ user_derived(() => ({
		id: this.opts.id.current,
		[toggleGroupAttrs.root]: "",
		role: "group",
		"data-orientation": this.opts.orientation.current,
		"data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current),
		...this.attachment
	}));
	get props() {
		return get$2(this.#props);
	}
	set props(e) {
		set(this.#props, e);
	}
}, ToggleGroupSingleState = class extends ToggleGroupBaseState {
	opts;
	isMulti = !1;
	#anyPressed = /* @__PURE__ */ user_derived(() => this.opts.value.current !== "");
	get anyPressed() {
		return get$2(this.#anyPressed);
	}
	set anyPressed(e) {
		set(this.#anyPressed, e);
	}
	constructor(e) {
		super(e), this.opts = e;
	}
	includesItem(e) {
		return this.opts.value.current === e;
	}
	toggleItem(e, n) {
		this.includesItem(e) ? this.opts.value.current = "" : (this.opts.value.current = e, this.rovingFocusGroup.setCurrentTabStopId(n));
	}
}, ToggleGroupMultipleState = class extends ToggleGroupBaseState {
	opts;
	isMulti = !0;
	#anyPressed = /* @__PURE__ */ user_derived(() => this.opts.value.current.length > 0);
	get anyPressed() {
		return get$2(this.#anyPressed);
	}
	set anyPressed(e) {
		set(this.#anyPressed, e);
	}
	constructor(e) {
		super(e), this.opts = e;
	}
	includesItem(e) {
		return this.opts.value.current.includes(e);
	}
	toggleItem(e, n) {
		this.includesItem(e) ? this.opts.value.current = this.opts.value.current.filter((n) => n !== e) : (this.opts.value.current = [...this.opts.value.current, e], this.rovingFocusGroup.setCurrentTabStopId(n));
	}
}, ToggleGroupRootState = class {
	static create(e) {
		let { type: n,...i } = e, a = n === "single" ? new ToggleGroupSingleState(i) : new ToggleGroupMultipleState(i);
		return ToggleGroupRootContext.set(a);
	}
}, ToggleGroupItemState = class e {
	static create(n) {
		return new e(n, ToggleGroupRootContext.get());
	}
	opts;
	root;
	attachment;
	#isDisabled = /* @__PURE__ */ user_derived(() => this.opts.disabled.current || this.root.opts.disabled.current);
	#isPressed = /* @__PURE__ */ user_derived(() => this.root.includesItem(this.opts.value.current));
	get isPressed() {
		return get$2(this.#isPressed);
	}
	set isPressed(e) {
		set(this.#isPressed, e);
	}
	#ariaChecked = /* @__PURE__ */ user_derived(() => this.root.isMulti ? void 0 : getAriaChecked(this.isPressed, !1));
	#ariaPressed = /* @__PURE__ */ user_derived(() => this.root.isMulti ? boolToStr(this.isPressed) : void 0);
	constructor(e, n) {
		this.opts = e, this.root = n, this.attachment = attachRef(this.opts.ref), user_effect(() => {
			this.root.opts.rovingFocus.current ? set(this.#tabIndex, this.root.rovingFocusGroup.getTabIndex(this.opts.ref.current), !0) : set(this.#tabIndex, 0);
		}), this.onclick = this.onclick.bind(this), this.onkeydown = this.onkeydown.bind(this);
	}
	#toggleItem() {
		get$2(this.#isDisabled) || this.root.toggleItem(this.opts.value.current, this.opts.id.current);
	}
	onclick(e) {
		get$2(this.#isDisabled) || this.root.toggleItem(this.opts.value.current, this.opts.id.current);
	}
	onkeydown(e) {
		if (!get$2(this.#isDisabled)) {
			if (e.key === "Enter" || e.key === " ") {
				e.preventDefault(), this.#toggleItem();
				return;
			}
			this.root.opts.rovingFocus.current && this.root.rovingFocusGroup.handleKeydown(this.opts.ref.current, e);
		}
	}
	#tabIndex = /* @__PURE__ */ state(0);
	#snippetProps = /* @__PURE__ */ user_derived(() => ({ pressed: this.isPressed }));
	get snippetProps() {
		return get$2(this.#snippetProps);
	}
	set snippetProps(e) {
		set(this.#snippetProps, e);
	}
	#props = /* @__PURE__ */ user_derived(() => ({
		id: this.opts.id.current,
		role: this.root.isMulti ? void 0 : "radio",
		tabindex: get$2(this.#tabIndex),
		"data-orientation": this.root.opts.orientation.current,
		"data-disabled": boolToEmptyStrOrUndef(get$2(this.#isDisabled)),
		"data-state": getToggleItemDataState(this.isPressed),
		"data-value": this.opts.value.current,
		"aria-pressed": get$2(this.#ariaPressed),
		"aria-checked": get$2(this.#ariaChecked),
		disabled: boolToTrueOrUndef(get$2(this.#isDisabled)),
		[toggleGroupAttrs.item]: "",
		onclick: this.onclick,
		onkeydown: this.onkeydown,
		...this.attachment
	}));
	get props() {
		return get$2(this.#props);
	}
	set props(e) {
		set(this.#props, e);
	}
};
function getToggleItemDataState(e) {
	return e ? "on" : "off";
}
var root_2$15 = /* @__PURE__ */ from_html("<div><!></div>");
function Toggle_group(e, n) {
	let i = props_id();
	push(n, !0);
	let a = prop(n, "id", 19, () => createId(i)), o = prop(n, "ref", 15, null), s = prop(n, "value", 15), c = prop(n, "onValueChange", 3, noop), l = prop(n, "disabled", 3, !1), u = prop(n, "loop", 3, !0), d = prop(n, "orientation", 3, "horizontal"), f = prop(n, "rovingFocus", 3, !0), p = /* @__PURE__ */ rest_props(n, [
		"$$slots",
		"$$events",
		"$$legacy",
		"id",
		"ref",
		"value",
		"onValueChange",
		"type",
		"disabled",
		"loop",
		"orientation",
		"rovingFocus",
		"child",
		"children"
	]);
	function m() {
		s() === void 0 && s(n.type === "single" ? "" : []);
	}
	m(), watch.pre(() => s(), () => {
		m();
	});
	let h = ToggleGroupRootState.create({
		id: boxWith(() => a()),
		value: boxWith(() => s(), (e) => {
			s(e), c()(e);
		}),
		disabled: boxWith(() => l()),
		loop: boxWith(() => u()),
		orientation: boxWith(() => d()),
		rovingFocus: boxWith(() => f()),
		type: n.type,
		ref: boxWith(() => o(), (e) => o(e))
	}), g = /* @__PURE__ */ user_derived(() => mergeProps(p, h.props));
	var _ = comment(), v = first_child(_), y = (e) => {
		var i = comment(), a = first_child(i);
		snippet(a, () => n.child, () => ({ props: get$2(g) })), append(e, i);
	}, b = (e) => {
		var i = root_2$15();
		attribute_effect(i, () => ({ ...get$2(g) }));
		var a = child(i);
		snippet(a, () => n.children ?? noop$1), reset(i), append(e, i);
	};
	if_block(v, (e) => {
		n.child ? e(y) : e(b, !1);
	}), append(e, _), pop();
}
var root_2$14 = /* @__PURE__ */ from_html("<button><!></button>");
function Toggle_group_item(e, n) {
	let i = props_id();
	push(n, !0);
	let a = prop(n, "ref", 15, null), o = prop(n, "disabled", 3, !1), s = prop(n, "id", 19, () => createId(i)), c = prop(n, "type", 3, "button"), l = /* @__PURE__ */ rest_props(n, [
		"$$slots",
		"$$events",
		"$$legacy",
		"children",
		"child",
		"ref",
		"value",
		"disabled",
		"id",
		"type"
	]), u = ToggleGroupItemState.create({
		id: boxWith(() => s()),
		value: boxWith(() => n.value),
		disabled: boxWith(() => o() ?? !1),
		ref: boxWith(() => a(), (e) => a(e))
	}), d = /* @__PURE__ */ user_derived(() => mergeProps(l, u.props, { type: c() }));
	var f = comment(), p = first_child(f), m = (e) => {
		var i = comment(), a = first_child(i);
		{
			let e = /* @__PURE__ */ user_derived(() => ({
				props: get$2(d),
				...u.snippetProps
			}));
			snippet(a, () => n.child, () => get$2(e));
		}
		append(e, i);
	}, h = (e) => {
		var i = root_2$14();
		attribute_effect(i, () => ({ ...get$2(d) }));
		var a = child(i);
		snippet(a, () => n.children ?? noop$1, () => u.snippetProps), reset(i), append(e, i);
	};
	if_block(p, (e) => {
		n.child ? e(m) : e(h, !1);
	}), append(e, f), pop();
}
var defaultOpts = { immediate: !0 }, TimeoutFn = class {
	#opts;
	#interval;
	#cb;
	#timer = null;
	constructor(e, n, i = {}) {
		this.#cb = e, this.#interval = n, this.#opts = {
			...defaultOpts,
			...i
		}, this.stop = this.stop.bind(this), this.start = this.start.bind(this), this.#opts.immediate && this.start(), onDestroyEffect(this.stop);
	}
	#clear() {
		this.#timer !== null && (window.clearTimeout(this.#timer), this.#timer = null);
	}
	stop() {
		this.#clear();
	}
	start(...e) {
		this.#clear(), this.#timer = window.setTimeout(() => {
			this.#timer = null, this.#cb(...e);
		}, this.#interval);
	}
};
const tooltipAttrs = createBitsAttrs({
	component: "tooltip",
	parts: ["content", "trigger"]
});
var TooltipProviderContext = new Context("Tooltip.Provider"), TooltipRootContext = new Context("Tooltip.Root"), TooltipProviderState = class e {
	static create(n) {
		return TooltipProviderContext.set(new e(n));
	}
	opts;
	#isOpenDelayed = /* @__PURE__ */ state(!0);
	get isOpenDelayed() {
		return get$2(this.#isOpenDelayed);
	}
	set isOpenDelayed(e) {
		set(this.#isOpenDelayed, e, !0);
	}
	isPointerInTransit = simpleBox(!1);
	#timerFn;
	#openTooltip = /* @__PURE__ */ state(null);
	constructor(e) {
		this.opts = e, this.#timerFn = new TimeoutFn(() => {
			this.isOpenDelayed = !0;
		}, this.opts.skipDelayDuration.current, { immediate: !1 });
	}
	#startTimer = () => {
		this.opts.skipDelayDuration.current !== 0 && this.#timerFn.start();
	};
	#clearTimer = () => {
		this.#timerFn.stop();
	};
	onOpen = (e) => {
		get$2(this.#openTooltip) && get$2(this.#openTooltip) !== e && get$2(this.#openTooltip).handleClose(), this.#clearTimer(), this.isOpenDelayed = !1, set(this.#openTooltip, e, !0);
	};
	onClose = (e) => {
		get$2(this.#openTooltip) === e && set(this.#openTooltip, null), this.#startTimer();
	};
	isTooltipOpen = (e) => get$2(this.#openTooltip) === e;
}, TooltipRootState = class e {
	static create(n) {
		return TooltipRootContext.set(new e(n, TooltipProviderContext.get()));
	}
	opts;
	provider;
	#delayDuration = /* @__PURE__ */ user_derived(() => this.opts.delayDuration.current ?? this.provider.opts.delayDuration.current);
	get delayDuration() {
		return get$2(this.#delayDuration);
	}
	set delayDuration(e) {
		set(this.#delayDuration, e);
	}
	#disableHoverableContent = /* @__PURE__ */ user_derived(() => this.opts.disableHoverableContent.current ?? this.provider.opts.disableHoverableContent.current);
	get disableHoverableContent() {
		return get$2(this.#disableHoverableContent);
	}
	set disableHoverableContent(e) {
		set(this.#disableHoverableContent, e);
	}
	#disableCloseOnTriggerClick = /* @__PURE__ */ user_derived(() => this.opts.disableCloseOnTriggerClick.current ?? this.provider.opts.disableCloseOnTriggerClick.current);
	get disableCloseOnTriggerClick() {
		return get$2(this.#disableCloseOnTriggerClick);
	}
	set disableCloseOnTriggerClick(e) {
		set(this.#disableCloseOnTriggerClick, e);
	}
	#disabled = /* @__PURE__ */ user_derived(() => this.opts.disabled.current ?? this.provider.opts.disabled.current);
	get disabled() {
		return get$2(this.#disabled);
	}
	set disabled(e) {
		set(this.#disabled, e);
	}
	#ignoreNonKeyboardFocus = /* @__PURE__ */ user_derived(() => this.opts.ignoreNonKeyboardFocus.current ?? this.provider.opts.ignoreNonKeyboardFocus.current);
	get ignoreNonKeyboardFocus() {
		return get$2(this.#ignoreNonKeyboardFocus);
	}
	set ignoreNonKeyboardFocus(e) {
		set(this.#ignoreNonKeyboardFocus, e);
	}
	#contentNode = /* @__PURE__ */ state(null);
	get contentNode() {
		return get$2(this.#contentNode);
	}
	set contentNode(e) {
		set(this.#contentNode, e, !0);
	}
	#triggerNode = /* @__PURE__ */ state(null);
	get triggerNode() {
		return get$2(this.#triggerNode);
	}
	set triggerNode(e) {
		set(this.#triggerNode, e, !0);
	}
	#wasOpenDelayed = /* @__PURE__ */ state(!1);
	#timerFn;
	#stateAttr = /* @__PURE__ */ user_derived(() => this.opts.open.current ? get$2(this.#wasOpenDelayed) ? "delayed-open" : "instant-open" : "closed");
	get stateAttr() {
		return get$2(this.#stateAttr);
	}
	set stateAttr(e) {
		set(this.#stateAttr, e);
	}
	constructor(e, n) {
		this.opts = e, this.provider = n, this.#timerFn = new TimeoutFn(() => {
			set(this.#wasOpenDelayed, !0), this.opts.open.current = !0;
		}, this.delayDuration ?? 0, { immediate: !1 }), new OpenChangeComplete({
			open: this.opts.open,
			ref: boxWith(() => this.contentNode),
			onComplete: () => {
				this.opts.onOpenChangeComplete.current(this.opts.open.current);
			}
		}), watch(() => this.delayDuration, () => {
			this.delayDuration !== void 0 && (this.#timerFn = new TimeoutFn(() => {
				set(this.#wasOpenDelayed, !0), this.opts.open.current = !0;
			}, this.delayDuration, { immediate: !1 }));
		}), watch(() => this.opts.open.current, (e) => {
			e ? this.provider.onOpen(this) : this.provider.onClose(this);
		});
	}
	handleOpen = () => {
		this.#timerFn.stop(), set(this.#wasOpenDelayed, !1), this.opts.open.current = !0;
	};
	handleClose = () => {
		this.#timerFn.stop(), this.opts.open.current = !1;
	};
	#handleDelayedOpen = () => {
		this.#timerFn.stop();
		let e = !this.provider.isOpenDelayed, n = this.delayDuration ?? 0;
		e || n === 0 ? (set(this.#wasOpenDelayed, n > 0 && e, !0), this.opts.open.current = !0) : this.#timerFn.start();
	};
	onTriggerEnter = () => {
		this.#handleDelayedOpen();
	};
	onTriggerLeave = () => {
		this.disableHoverableContent ? this.handleClose() : this.#timerFn.stop();
	};
}, TooltipTriggerState = class e {
	static create(n) {
		return new e(n, TooltipRootContext.get());
	}
	opts;
	root;
	attachment;
	#isPointerDown = simpleBox(!1);
	#hasPointerMoveOpened = /* @__PURE__ */ state(!1);
	#isDisabled = /* @__PURE__ */ user_derived(() => this.opts.disabled.current || this.root.disabled);
	domContext;
	constructor(e, n) {
		this.opts = e, this.root = n, this.domContext = new DOMContext(e.ref), this.attachment = attachRef(this.opts.ref, (e) => this.root.triggerNode = e);
	}
	handlePointerUp = () => {
		this.#isPointerDown.current = !1;
	};
	#onpointerup = () => {
		get$2(this.#isDisabled) || (this.#isPointerDown.current = !1);
	};
	#onpointerdown = () => {
		get$2(this.#isDisabled) || (this.#isPointerDown.current = !0, this.domContext.getDocument().addEventListener("pointerup", () => {
			this.handlePointerUp();
		}, { once: !0 }));
	};
	#onpointermove = (e) => {
		get$2(this.#isDisabled) || e.pointerType !== "touch" && (get$2(this.#hasPointerMoveOpened) || this.root.provider.isPointerInTransit.current || (this.root.onTriggerEnter(), set(this.#hasPointerMoveOpened, !0)));
	};
	#onpointerleave = () => {
		get$2(this.#isDisabled) || (this.root.onTriggerLeave(), set(this.#hasPointerMoveOpened, !1));
	};
	#onfocus = (e) => {
		this.#isPointerDown.current || get$2(this.#isDisabled) || this.root.ignoreNonKeyboardFocus && !isFocusVisible(e.currentTarget) || this.root.handleOpen();
	};
	#onblur = () => {
		get$2(this.#isDisabled) || this.root.handleClose();
	};
	#onclick = () => {
		this.root.disableCloseOnTriggerClick || get$2(this.#isDisabled) || this.root.handleClose();
	};
	#props = /* @__PURE__ */ user_derived(() => ({
		id: this.opts.id.current,
		"aria-describedby": this.root.opts.open.current ? this.root.contentNode?.id : void 0,
		"data-state": this.root.stateAttr,
		"data-disabled": boolToEmptyStrOrUndef(get$2(this.#isDisabled)),
		"data-delay-duration": `${this.root.delayDuration}`,
		[tooltipAttrs.trigger]: "",
		tabindex: get$2(this.#isDisabled) ? void 0 : 0,
		disabled: this.opts.disabled.current,
		onpointerup: this.#onpointerup,
		onpointerdown: this.#onpointerdown,
		onpointermove: this.#onpointermove,
		onpointerleave: this.#onpointerleave,
		onfocus: this.#onfocus,
		onblur: this.#onblur,
		onclick: this.#onclick,
		...this.attachment
	}));
	get props() {
		return get$2(this.#props);
	}
	set props(e) {
		set(this.#props, e);
	}
}, TooltipContentState = class e {
	static create(n) {
		return new e(n, TooltipRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(e, n) {
		this.opts = e, this.root = n, this.attachment = attachRef(this.opts.ref, (e) => this.root.contentNode = e), new GraceArea({
			triggerNode: () => this.root.triggerNode,
			contentNode: () => this.root.contentNode,
			enabled: () => this.root.opts.open.current && !this.root.disableHoverableContent,
			onPointerExit: () => {
				this.root.provider.isTooltipOpen(this.root) && this.root.handleClose();
			},
			setIsPointerInTransit: (e) => {
				this.root.provider.isPointerInTransit.current = e;
			},
			transitTimeout: this.root.provider.opts.skipDelayDuration.current
		}), onMountEffect(() => on(window, "scroll", (e) => {
			let n = e.target;
			n && n.contains(this.root.triggerNode) && this.root.handleClose();
		}));
	}
	onInteractOutside = (e) => {
		if (isElement(e.target) && this.root.triggerNode?.contains(e.target) && this.root.disableCloseOnTriggerClick) {
			e.preventDefault();
			return;
		}
		this.opts.onInteractOutside.current(e), !e.defaultPrevented && this.root.handleClose();
	};
	onEscapeKeydown = (e) => {
		this.opts.onEscapeKeydown.current?.(e), !e.defaultPrevented && this.root.handleClose();
	};
	onOpenAutoFocus = (e) => {
		e.preventDefault();
	};
	onCloseAutoFocus = (e) => {
		e.preventDefault();
	};
	#snippetProps = /* @__PURE__ */ user_derived(() => ({ open: this.root.opts.open.current }));
	get snippetProps() {
		return get$2(this.#snippetProps);
	}
	set snippetProps(e) {
		set(this.#snippetProps, e);
	}
	#props = /* @__PURE__ */ user_derived(() => ({
		id: this.opts.id.current,
		"data-state": this.root.stateAttr,
		"data-disabled": boolToEmptyStrOrUndef(this.root.disabled),
		style: {
			pointerEvents: "auto",
			outline: "none"
		},
		[tooltipAttrs.content]: "",
		...this.attachment
	}));
	get props() {
		return get$2(this.#props);
	}
	set props(e) {
		set(this.#props, e);
	}
	popperProps = {
		onInteractOutside: this.onInteractOutside,
		onEscapeKeydown: this.onEscapeKeydown,
		onOpenAutoFocus: this.onOpenAutoFocus,
		onCloseAutoFocus: this.onCloseAutoFocus
	};
};
function Tooltip(e, n) {
	push(n, !0);
	let i = prop(n, "open", 15, !1), a = prop(n, "onOpenChange", 3, noop), o = prop(n, "onOpenChangeComplete", 3, noop);
	TooltipRootState.create({
		open: boxWith(() => i(), (e) => {
			i(e), a()(e);
		}),
		delayDuration: boxWith(() => n.delayDuration),
		disableCloseOnTriggerClick: boxWith(() => n.disableCloseOnTriggerClick),
		disableHoverableContent: boxWith(() => n.disableHoverableContent),
		ignoreNonKeyboardFocus: boxWith(() => n.ignoreNonKeyboardFocus),
		disabled: boxWith(() => n.disabled),
		onOpenChangeComplete: boxWith(() => o())
	}), Floating_layer(e, {
		tooltip: !0,
		children: (e, i) => {
			var a = comment(), o = first_child(a);
			snippet(o, () => n.children ?? noop$1), append(e, a);
		},
		$$slots: { default: !0 }
	}), pop();
}
var root_4$9 = /* @__PURE__ */ from_html("<div><div><!></div></div>"), root_9$1 = /* @__PURE__ */ from_html("<div><div><!></div></div>");
function Tooltip_content(e, n) {
	let i = props_id();
	push(n, !0);
	let a = prop(n, "id", 19, () => createId(i)), o = prop(n, "ref", 15, null), s = prop(n, "side", 3, "top"), c = prop(n, "sideOffset", 3, 0), l = prop(n, "align", 3, "center"), u = prop(n, "avoidCollisions", 3, !0), d = prop(n, "arrowPadding", 3, 0), f = prop(n, "sticky", 3, "partial"), p = prop(n, "hideWhenDetached", 3, !1), m = prop(n, "collisionPadding", 3, 0), h = prop(n, "onInteractOutside", 3, noop), g = prop(n, "onEscapeKeydown", 3, noop), _ = prop(n, "forceMount", 3, !1), v = /* @__PURE__ */ rest_props(n, [
		"$$slots",
		"$$events",
		"$$legacy",
		"children",
		"child",
		"id",
		"ref",
		"side",
		"sideOffset",
		"align",
		"avoidCollisions",
		"arrowPadding",
		"sticky",
		"strategy",
		"hideWhenDetached",
		"collisionPadding",
		"onInteractOutside",
		"onEscapeKeydown",
		"forceMount"
	]), y = TooltipContentState.create({
		id: boxWith(() => a()),
		ref: boxWith(() => o(), (e) => o(e)),
		onInteractOutside: boxWith(() => h()),
		onEscapeKeydown: boxWith(() => g())
	}), b = /* @__PURE__ */ user_derived(() => ({
		side: s(),
		sideOffset: c(),
		align: l(),
		avoidCollisions: u(),
		arrowPadding: d(),
		sticky: f(),
		hideWhenDetached: p(),
		collisionPadding: m(),
		strategy: n.strategy
	})), x = /* @__PURE__ */ user_derived(() => mergeProps(v, get$2(b), y.props));
	var S = comment(), w = first_child(S), T = (e) => {
		Popper_layer_force_mount(e, spread_props(() => get$2(x), () => y.popperProps, {
			get enabled() {
				return y.root.opts.open.current;
			},
			get id() {
				return a();
			},
			trapFocus: !1,
			loop: !1,
			preventScroll: !1,
			forceMount: !0,
			get ref() {
				return y.opts.ref;
			},
			tooltip: !0,
			popper: (e, i) => {
				let a = () => i?.().props, o = () => i?.().wrapperProps, s = /* @__PURE__ */ user_derived(() => mergeProps(a(), { style: getFloatingContentCSSVars("tooltip") }));
				var c = comment(), l = first_child(c), u = (e) => {
					var i = comment(), a = first_child(i);
					{
						let e = /* @__PURE__ */ user_derived(() => ({
							props: get$2(s),
							wrapperProps: o(),
							...y.snippetProps
						}));
						snippet(a, () => n.child, () => get$2(e));
					}
					append(e, i);
				}, d = (e) => {
					var i = root_4$9();
					attribute_effect(i, () => ({ ...o() }));
					var a = child(i);
					attribute_effect(a, () => ({ ...get$2(s) }));
					var c = child(a);
					snippet(c, () => n.children ?? noop$1), reset(a), reset(i), append(e, i);
				};
				if_block(l, (e) => {
					n.child ? e(u) : e(d, !1);
				}), append(e, c);
			},
			$$slots: { popper: !0 }
		}));
	}, E = (e) => {
		var i = comment(), o = first_child(i), s = (e) => {
			Popper_layer(e, spread_props(() => get$2(x), () => y.popperProps, {
				get open() {
					return y.root.opts.open.current;
				},
				get id() {
					return a();
				},
				trapFocus: !1,
				loop: !1,
				preventScroll: !1,
				forceMount: !1,
				get ref() {
					return y.opts.ref;
				},
				tooltip: !0,
				popper: (e, i) => {
					let a = () => i?.().props, o = () => i?.().wrapperProps, s = /* @__PURE__ */ user_derived(() => mergeProps(a(), { style: getFloatingContentCSSVars("tooltip") }));
					var c = comment(), l = first_child(c), u = (e) => {
						var i = comment(), a = first_child(i);
						{
							let e = /* @__PURE__ */ user_derived(() => ({
								props: get$2(s),
								wrapperProps: o(),
								...y.snippetProps
							}));
							snippet(a, () => n.child, () => get$2(e));
						}
						append(e, i);
					}, d = (e) => {
						var i = root_9$1();
						attribute_effect(i, () => ({ ...o() }));
						var a = child(i);
						attribute_effect(a, () => ({ ...get$2(s) }));
						var c = child(a);
						snippet(c, () => n.children ?? noop$1), reset(a), reset(i), append(e, i);
					};
					if_block(l, (e) => {
						n.child ? e(u) : e(d, !1);
					}), append(e, c);
				},
				$$slots: { popper: !0 }
			}));
		};
		if_block(o, (e) => {
			_() || e(s);
		}, !0), append(e, i);
	};
	if_block(w, (e) => {
		_() ? e(T) : e(E, !1);
	}), append(e, S), pop();
}
var root_3$12 = /* @__PURE__ */ from_html("<button><!></button>");
function Tooltip_trigger(e, n) {
	let i = props_id();
	push(n, !0);
	let a = prop(n, "id", 19, () => createId(i)), o = prop(n, "disabled", 3, !1), s = prop(n, "type", 3, "button"), c = prop(n, "ref", 15, null), l = /* @__PURE__ */ rest_props(n, [
		"$$slots",
		"$$events",
		"$$legacy",
		"children",
		"child",
		"id",
		"disabled",
		"type",
		"ref"
	]), u = TooltipTriggerState.create({
		id: boxWith(() => a()),
		disabled: boxWith(() => o() ?? !1),
		ref: boxWith(() => c(), (e) => c(e))
	}), d = /* @__PURE__ */ user_derived(() => mergeProps(l, u.props, { type: s() }));
	Floating_layer_anchor(e, {
		get id() {
			return a();
		},
		get ref() {
			return u.opts.ref;
		},
		tooltip: !0,
		children: (e, i) => {
			var a = comment(), o = first_child(a), s = (e) => {
				var i = comment(), a = first_child(i);
				snippet(a, () => n.child, () => ({ props: get$2(d) })), append(e, i);
			}, c = (e) => {
				var i = root_3$12();
				attribute_effect(i, () => ({ ...get$2(d) }));
				var a = child(i);
				snippet(a, () => n.children ?? noop$1), reset(i), append(e, i);
			};
			if_block(o, (e) => {
				n.child ? e(s) : e(c, !1);
			}), append(e, a);
		},
		$$slots: { default: !0 }
	}), pop();
}
function Tooltip_provider(e, n) {
	push(n, !0);
	let i = prop(n, "delayDuration", 3, 700), a = prop(n, "disableCloseOnTriggerClick", 3, !1), o = prop(n, "disableHoverableContent", 3, !1), s = prop(n, "disabled", 3, !1), c = prop(n, "ignoreNonKeyboardFocus", 3, !1), l = prop(n, "skipDelayDuration", 3, 300);
	TooltipProviderState.create({
		delayDuration: boxWith(() => i()),
		disableCloseOnTriggerClick: boxWith(() => a()),
		disableHoverableContent: boxWith(() => o()),
		disabled: boxWith(() => s()),
		ignoreNonKeyboardFocus: boxWith(() => c()),
		skipDelayDuration: boxWith(() => l())
	});
	var u = comment(), d = first_child(u);
	snippet(d, () => n.children ?? noop$1), append(e, u), pop();
}
var root_2$13 = /* @__PURE__ */ from_html("<span> </span>"), root_1$18 = /* @__PURE__ */ from_html("<!> <!>", 1);
function IconBtn(e, n) {
	var i = comment(), a = first_child(i);
	{
		let e = /* @__PURE__ */ user_derived(() => [
			n.class || "is-link is-light mr-2",
			"button",
			n.disabled ? "disabled" : ""
		]);
		component(a, () => Button, (i, a) => {
			a(i, {
				get class() {
					return get$2(e);
				},
				get onclick() {
					return n.onclick;
				},
				get disabled() {
					return n.disabled;
				},
				children: (e, i) => {
					var a = root_1$18(), o = first_child(a);
					Icon(o, { get icon() {
						return n.icon;
					} });
					var s = sibling(o, 2), c = (e) => {
						var i = root_2$13(), a = child(i, !0);
						reset(i), template_effect(() => set_text(a, n.label)), append(e, i);
					};
					if_block(s, (e) => {
						n.label && e(c);
					}), append(e, a);
				},
				$$slots: { default: !0 }
			});
		});
	}
	append(e, i);
}
var NameProvider = class {
	#mapping;
	get mapping() {
		return get$2(this.#mapping);
	}
	set mapping(e) {
		set(this.#mapping, e);
	}
	#sources;
	get sources() {
		return get$2(this.#sources);
	}
	set sources(e) {
		set(this.#sources, e);
	}
	constructor(e, n) {
		this.#mapping = /* @__PURE__ */ state({}), this.#sources = /* @__PURE__ */ state({}), this.sources = e || {}, this.mapping = n || {};
	}
	resolveKey(e) {
		return this.mapping[e.src || e.id] || this.mapping[e.id] || e.src || e.id;
	}
	resolveField(e, n) {
		return this.sources[e]?.[n] ? this.sources[e][n] : "";
	}
	getImageTitle(e, n = !1) {
		let i = this.resolveKey(e), a = this.resolveField(i, "name") || i;
		return n && (a = a.split(".").slice(0, -1).join("."), a.length >= 16 && (a = a.slice(0, 5) + "..." + a.slice(-10))), a;
	}
	getImageDescription(e) {
		return e === void 0 ? "" : this.resolveField(this.resolveKey(e), "description") || e.document && this.resolveField(e.document.uid, "name") || "";
	}
	fetchIIIFNames(e) {
		return new Promise(async (n, i) => {
			for (let n of e) {
				if (this.sources[n.uid]) continue;
				fetch(n.src).then((e) => e.json()).then((e) => {
					if (e.metadata === void 0) return n;
					let i = Object.fromEntries(e.metadata.map(({ label: e, value: n }) => [e.toLowerCase(), n]));
					i.title === void 0 && (i.title = n.name), i.classmark !== void 0 && (i.title = i.classmark + " " + i.title);
					let a = e.sequences && e.sequences[0]?.canvases, o = a && Object.fromEntries(a.map((e) => {
						let n = e.label || e.title || e.images && e.images[0].label || e["@id"] || e.id;
						return [e.images && e.images[0].resource && e.images[0].resource["@id"] || e["@id"] || e.id, n];
					})), s = {
						description: i.title,
						metadata: i,
						images: o
					}, c = Object.fromEntries(Object.entries(o).map(([e, n]) => [e, {
						name: n,
						metadata: i,
						source: s
					}]));
					this.sources = {
						...this.sources,
						...c
					}, this.sources[n.uid] = s;
				}), await new Promise((e) => setTimeout(e, 300));
			}
		});
	}
	fetchMetadataNames(e) {
		return fetch(e).then((e) => e.json()).then((e) => {
			let n = e.sources, i = e.mapping;
			this.sources = {
				...this.sources,
				...n
			}, this.mapping = {
				...this.mapping,
				...i
			};
		});
	}
	sortImages(e) {
		return e.sort((e, n) => {
			let i = this.getImageDescription(e), a = this.getImageDescription(n);
			return i === a ? this.getImageTitle(e).localeCompare(this.getImageTitle(n)) : (i || "").localeCompare(a || "");
		});
	}
}, no_name_provider = {
	sortImages: (e) => e,
	getImageTitle: (e) => e.name || e.id,
	getImageDescription: (e) => e?.document?.name || e?.document?.uid || "",
	fetchIIIFNames: async (e) => {},
	fetchMetadataNames: async (e) => {}
};
function getNameProvider() {
	return getContext("name_provider") || no_name_provider;
}
function setNameProvider(e) {
	setContext("name_provider", e);
}
function eraseImagesMetadata(e) {
	return e.map((e) => {
		let { tsf_url: n,...i } = e;
		return {
			...i,
			distance: e.num + 10
		};
	});
}
var ClusterEditorState = class {
	#editing;
	get editing() {
		return get$2(this.#editing);
	}
	set editing(e) {
		set(this.#editing, e, !0);
	}
	#editingCluster;
	get editingCluster() {
		return get$2(this.#editingCluster);
	}
	set editingCluster(e) {
		set(this.#editingCluster, e, !0);
	}
	#askingCluster;
	get askingCluster() {
		return get$2(this.#askingCluster);
	}
	set askingCluster(e) {
		set(this.#askingCluster, e, !0);
	}
	#image_selection;
	get image_selection() {
		return get$2(this.#image_selection);
	}
	set image_selection(e) {
		set(this.#image_selection, e, !0);
	}
	#viewer_sort;
	get viewer_sort() {
		return get$2(this.#viewer_sort);
	}
	set viewer_sort(e) {
		set(this.#viewer_sort, e, !0);
	}
	#viewer_display;
	get viewer_display() {
		return get$2(this.#viewer_display);
	}
	set viewer_display(e) {
		set(this.#viewer_display, e, !0);
	}
	#content;
	get content() {
		return get$2(this.#content);
	}
	set content(e) {
		set(this.#content, e, !0);
	}
	constructor(e, n) {
		this.#editing = /* @__PURE__ */ state(!1), this.#editingCluster = /* @__PURE__ */ state(null), this.#askingCluster = /* @__PURE__ */ state(null), this.#image_selection = /* @__PURE__ */ state(proxy(new SvelteSet())), this.#viewer_sort = /* @__PURE__ */ state("id"), this.#viewer_display = /* @__PURE__ */ state("grid"), this.#content = /* @__PURE__ */ state(proxy({
			clusters: e.clusters,
			background_urls: e.background_urls
		})), this.name_provider = new NameProvider(), this.base_url = n || "";
	}
	select_images(e, n) {
		switch (e) {
			case "all":
				this.image_selection = new SvelteSet(this.content.clusters[this.editingCluster].images.map((e) => e.id));
				break;
			case "none":
				this.image_selection.clear();
				break;
			case "invert":
				this.image_selection = new SvelteSet(this.content.clusters[this.editingCluster].images.filter((e) => !this.image_selection.has(e.id)).map((e) => e.id));
				break;
			case "toggle":
				n && (this.image_selection.has(n.id) ? this.image_selection.delete(n.id) : this.image_selection.add(n.id));
				break;
		}
	}
	ask_cluster(e, n) {
		this.askingCluster = {
			exclude_cluster_id: n,
			for_action: e
		};
	}
	ask_cluster_choice(e) {
		switch (this.askingCluster?.for_action) {
			case "cluster_merge":
				this.merge_clusters(this.askingCluster.exclude_cluster_id, e);
				break;
			case "selection_move":
				this.move_images(this.askingCluster.exclude_cluster_id, e);
				break;
		}
		this.askingCluster = null;
	}
	merge_clusters(e, n) {
		let i = this.content.clusters[e], a = this.content.clusters[n], o = {
			...i,
			images: [...i.images, ...eraseImagesMetadata(a.images)]
		};
		delete this.content.clusters[n], this.content.clusters[e] = o, this.editingCluster = e;
	}
	move_images(e, n) {
		let i = this.content.clusters[e], a = eraseImagesMetadata(i.images.filter((e) => this.image_selection.has(e.id)));
		i.images = i.images.filter((e) => !this.image_selection.has(e.id));
		let o;
		if (n == -1) {
			let e = Math.max(...Object.keys(this.content.clusters).map(Number)) + 1;
			o = {
				id: e,
				name: "Cluster " + e,
				images: a
			};
		} else o = { ...this.content.clusters[n] }, o.images.push(...a);
		this.content.clusters = {
			...this.content.clusters,
			[o.id]: o
		}, this.editingCluster = null, this.image_selection.clear(), this.askingCluster = null;
	}
};
function getEditorState() {
	return getContext("editor_state");
}
function setEditorState(e) {
	setContext("editor_state", e);
}
var root_1$17 = /* @__PURE__ */ from_html("<span class=\"has-text-danger\"> </span>"), root$19 = /* @__PURE__ */ from_html("<div class=\"match-exporter\"><!> <!></div>");
function CSVExporter(e, n) {
	push(n, !0);
	let i = /* @__PURE__ */ state(!1), a = /* @__PURE__ */ state(null);
	function o(e) {
		return e ? e.toString().replace(/"/g, "\"\"") : "";
	}
	async function s() {
		let e = n.iterRows(), i = [];
		for await (let n of e) i.push(n.map((e) => `"${o(e)}"`).join(","));
		return i.join("\n");
	}
	let c = async () => {
		set(i, !0);
		try {
			let e = await s(), i = new Blob([e], { type: "text/csv" }), a = URL.createObjectURL(i), o = document.createElement("a");
			o.href = a, o.download = n.filename, o.click();
		} catch (e) {
			set(a, e.toString(), !0);
		} finally {
			set(i, !1);
		}
	};
	var l = root$19(), u = child(l);
	IconBtn(u, {
		icon: "mdi:download",
		onclick: c,
		get disabled() {
			return get$2(i);
		},
		label: "Export to CSV"
	});
	var d = sibling(u, 2), f = (e) => {
		var n = root_1$17(), i = child(n, !0);
		reset(n), template_effect(() => set_text(i, get$2(a))), append(e, n);
	};
	if_block(d, (e) => {
		get$2(a) && e(f);
	}), reset(l), append(e, l), pop();
}
function ClusterCSVExporter(e, n) {
	push(n, !0);
	let i = getNameProvider();
	async function* a() {
		let e = /* @__PURE__ */ new Set();
		n.clusters.forEach((n) => {
			n.images.forEach((n) => {
				Object.keys(n.document?.metadata || {}).forEach((n) => e.add(n)), Object.keys(n.metadata || {}).forEach((n) => e.add(n));
			});
		}), yield [
			"Cluster",
			"Cluster Name",
			"Image",
			"Source",
			"Document",
			"Document URL",
			...Array.from(e).map((e) => (e.charAt(0).toUpperCase() + e.slice(1)).replace(/[^\w\s]/g, ""))
		];
		for (let a of n.clusters) for (let n of a.images) {
			let o = Array.from(e).map((e) => (n.metadata || n.document?.metadata || {})[e] || "");
			yield [
				a.id,
				a.name,
				i.getImageTitle(n),
				n.src || n.id,
				i.getImageDescription(n.document),
				n.document?.src || "",
				...o
			];
		}
	}
	CSVExporter(e, {
		iterRows: a,
		filename: "cluster.csv"
	}), pop();
}
function guessImageLink(e) {
	if (e.link) return e.link;
	if (e.metadata?.page && e.document?.name.startsWith("cudllibcamacuk")) return `${e.document.src.replace("/iiif/", "/view/")}/${e.metadata.page}`;
}
function ellipsis(e, n) {
	return n < 0 || e.length <= n ? e : n < 12 ? e.slice(0, n) + "..." : e.slice(0, Math.max(5, n - 12)) + "..." + e.slice(-Math.min(9, n - 5));
}
var root_2$12 = /* @__PURE__ */ from_html("<br/> <span> </span>", 1), root_1$16 = /* @__PURE__ */ from_html("<span class=\"tag is-light is-bold mb-3\"> </span> <!>", 1), root_3$11 = /* @__PURE__ */ from_html("<p> </p>"), root$18 = /* @__PURE__ */ from_html("<!> <!>", 1);
function ImageInfos(e, n) {
	push(n, !0);
	let i = prop(n, "isTitle", 3, !1), a = prop(n, "prefix", 3, ""), o = prop(n, "filenameDisplay", 3, !0), s = /* @__PURE__ */ user_derived(() => i() ? "h4" : "span"), c = getNameProvider();
	var l = root$18(), u = first_child(l);
	element(u, () => get$2(s), !1, (e, s) => {
		attribute_effect(e, (e, n) => ({
			class: "title-identification",
			title: e,
			[CLASS]: n
		}), [() => c.getImageTitle(n.image), () => ({ "mt-2": i() })]);
		var l = root_1$16(), u = first_child(l), d = child(u);
		reset(u);
		var f = sibling(u, 2), p = (e) => {
			var i = root_2$12(), a = sibling(first_child(i), 2), o = child(a, !0);
			reset(a), template_effect((e) => set_text(o, e), [() => ellipsis(c.getImageTitle(n.image), 16)]), append(e, i);
		};
		if_block(f, (e) => {
			o() && e(p);
		}), template_effect(() => set_text(d, `${(a() || "") ?? ""}
        Image #${n.image.num ?? ""}`)), append(s, l);
	});
	var d = sibling(u, 2), f = (e) => {
		var i = root_3$11(), a = child(i, !0);
		reset(i), template_effect((e) => set_text(a, e), [() => c.getImageDescription(n.image) || n.image.document?.name || n.image.subtitle || ""]), append(e, i);
	};
	if_block(d, (e) => {
		i() && e(f);
	}), append(e, l), pop();
}
function getMagnifyingContext() {
	return getContext("magnify");
}
function setMagnifyingContext(e) {
	setContext("magnify", e);
}
var on_click$6 = (e) => e.stopPropagation(), root_6$4 = /* @__PURE__ */ from_html("<p><a target=\"_blank\">See in context</a></p>"), root_5$5 = /* @__PURE__ */ from_html("<div class=\"magnifying-item\"><div class=\"display-image\"><img class=\"display-img\"/></div> <div class=\"magnifying-info\"><!> <!></div></div>"), on_click_1$2 = (e) => e.stopPropagation(), root_7$6 = /* @__PURE__ */ from_html("<p><a target=\"_blank\">See in context</a></p>"), root_4$8 = /* @__PURE__ */ from_html("<div class=\"magnifying-content\"><!>  <div class=\"magnifying-item\"><div class=\"display-image\"><img/></div> <div class=\"magnifying-info\"><!> <p class=\"actions my-2\"><!> <!> <!></p> <!></div></div></div>"), root_3$10 = /* @__PURE__ */ from_html("<div><!> <!> <!></div>");
function ImageMagnifier(e, n) {
	push(n, !0);
	let i = /* @__PURE__ */ user_derived(getMagnifyingContext), a = /* @__PURE__ */ user_derived(() => get$2(i).image), o = /* @__PURE__ */ user_derived(() => get$2(i).comparison), s = /* @__PURE__ */ user_derived(() => get$2(i).transpositions), c = /* @__PURE__ */ user_derived(() => get$2(s) || []), l = /* @__PURE__ */ user_derived(() => get$2(a) && guessImageLink(get$2(a))), u = /* @__PURE__ */ user_derived(() => get$2(o) && guessImageLink(get$2(o)));
	function d() {
		return get$2(a) !== void 0;
	}
	function f(e) {
		e || (get$2(i).image = void 0);
	}
	function p(e, n) {
		let i = get$2(c).find((e) => e && e.startsWith("rot")), a = get$2(c).includes("hflip"), o = i ? parseInt(i.slice(3)) : 0, s = o;
		n && o % 180 && (s += 180), s = (s + e + 360) % 360;
		let l = [];
		s && l.push(`rot${s}`), n !== a && l.push("hflip"), set(c, l);
	}
	var m = comment(), h = first_child(m), g = (e) => {
		var n = comment(), i = first_child(n), s = d, m = f;
		component(i, () => Dialog, (e, n) => {
			n(e, {
				get open() {
					return s();
				},
				set open(e) {
					m(e);
				},
				onOpenChange: f,
				children: (e, n) => {
					var i = comment(), s = first_child(i);
					component(s, () => Portal, (e, n) => {
						n(e, {
							children: (e, n) => {
								var i = root_3$10();
								let s;
								var m = child(i);
								component(m, () => Dialog_overlay, (e, n) => {
									n(e, { class: "modal-background" });
								});
								var h = sibling(m, 2);
								IconBtn(h, {
									icon: "mdi:close",
									class: "dialog-close",
									onclick: () => f(!1)
								});
								var g = sibling(h, 2);
								component(g, () => Dialog_content, (e, n) => {
									n(e, {
										class: "magnifier modal-content",
										children: (e, n) => {
											var i = root_4$8(), s = child(i), d = (e) => {
												var n = root_5$5();
												n.__click = [on_click$6];
												var i = child(n), a = child(i);
												reset(i);
												var s = sibling(i, 2), c = child(s);
												ImageInfos(c, {
													get image() {
														return get$2(o);
													},
													isTitle: !0,
													prefix: "Query"
												});
												var l = sibling(c, 2), d = (e) => {
													var n = root_6$4(), i = child(n);
													reset(n), template_effect(() => set_attribute(i, "href", get$2(u))), append(e, n);
												};
												if_block(l, (e) => {
													get$2(u) && e(d);
												}), reset(s), reset(n), template_effect(() => {
													set_attribute(a, "src", get$2(o).url), set_attribute(a, "alt", get$2(o).id);
												}), append(e, n);
											};
											if_block(s, (e) => {
												get$2(o) && e(d);
											});
											var f = sibling(s, 2);
											f.__click = [on_click_1$2];
											var m = child(f), h = child(m);
											reset(m);
											var g = sibling(m, 2), _ = child(g);
											ImageInfos(_, {
												get image() {
													return get$2(a);
												},
												isTitle: !0
											});
											var v = sibling(_, 2), y = child(v);
											IconBtn(y, {
												icon: "mdi:rotate-left",
												onclick: () => p(-90, !1)
											});
											var b = sibling(y, 2);
											IconBtn(b, {
												icon: "mdi:rotate-right",
												onclick: () => p(90, !1)
											});
											var x = sibling(b, 2);
											IconBtn(x, {
												icon: "mdi:flip-horizontal",
												onclick: () => p(0, !0)
											}), reset(v);
											var S = sibling(v, 2), C = (e) => {
												var n = root_7$6(), i = child(n);
												reset(n), template_effect(() => set_attribute(i, "href", get$2(l))), append(e, n);
											};
											if_block(S, (e) => {
												get$2(l) && e(C);
											}), reset(g), reset(f), reset(i), template_effect((e) => {
												set_attribute(h, "src", get$2(a).url), set_attribute(h, "alt", get$2(a).id), set_class(h, 1, e);
											}, [() => "display-img " + get$2(c).join(" ")]), append(e, i);
										},
										$$slots: { default: !0 }
									});
								}), reset(i), template_effect((e) => s = set_class(i, 1, "modal content", null, s, e), [() => ({ "is-active": d() })]), append(e, i);
							},
							$$slots: { default: !0 }
						});
					}), append(e, i);
				},
				$$slots: { default: !0 }
			});
		}), append(e, n);
	};
	if_block(h, (e) => {
		get$2(a) && e(g);
	}), append(e, m), pop();
}
delegate(["click"]);
var on_click$5 = (e) => e.stopPropagation(), root_5$4 = /* @__PURE__ */ from_html("<a class=\"image-source\" target=\"_blank\" title=\"See in context\"><!></a>"), root_7$5 = /* @__PURE__ */ from_html("<a href=\"javascript:void(0)\" class=\"image-pin\" title=\"Pin as comparison\"><!></a>"), root_8$4 = /* @__PURE__ */ from_html("<a href=\"javascript:void(0)\" class=\"image-pin always-visible\" title=\"Pin as comparison\"><!></a>"), root_9 = /* @__PURE__ */ from_html("<a href=\"javascript:void(0)\" class=\"image-magnify\" title=\"Magnify\"><!></a>"), root_10$1 = /* @__PURE__ */ from_html("<a class=\"image-focus\" title=\"Show detail\"><!></a>"), root_4$7 = /* @__PURE__ */ from_html("<div class=\"display-tools\"><!> <!> <!> <!></div>"), root_11$1 = /* @__PURE__ */ from_html("<span class=\"similarity\"> </span>"), root_3$9 = /* @__PURE__ */ from_html("<div class=\"display-image\"><img/></div> <!> <!>", 1), root_12 = /* @__PURE__ */ from_html("<div class=\"display-image\"><img/></div> <!>", 1), root_2$11 = /* @__PURE__ */ from_html("<!> <!>", 1);
function ImageFileDisplay(e, n) {
	push(n, !0);
	let i = getMagnifyingContext(), a = /* @__PURE__ */ user_derived(() => i.comparison?.id === n.image.id);
	function o() {
		i.comparison = get$2(a) ? void 0 : n.image;
	}
	function s() {
		i.image = n.image, i.transpositions = n.transpositions, n.comparison && (i.comparison = n.comparison);
	}
	var c = comment(), l = first_child(c);
	component(l, () => Tooltip_provider, (e, c) => {
		c(e, {
			delayDuration: 0,
			children: (e, c) => {
				var l = comment(), u = first_child(l);
				component(u, () => Tooltip, (e, c) => {
					c(e, {
						children: (e, c) => {
							var l = root_2$11(), u = first_child(l);
							component(u, () => Tooltip_trigger, (e, c) => {
								c(e, {
									class: "not-button display-item",
									children: (e, c) => {
										var l = root_3$9(), u = first_child(l), d = child(u);
										d.__click = function(...e) {
											(!n.disable_magnify && !n.disable_all ? s : void 0)?.apply(this, e);
										}, reset(u);
										var f = sibling(u, 2), p = (e) => {
											var c = root_4$7();
											c.__click = [on_click$5];
											var l = child(c), u = (e) => {
												var i = root_5$4(), a = child(i);
												Icon(a, { icon: "mdi:book-open-blank-variant" }), reset(i), template_effect(() => set_attribute(i, "href", n.image.link)), append(e, i);
											};
											if_block(l, (e) => {
												n.image.link && e(u);
											});
											var d = sibling(l, 2), f = (e) => {
												var n = comment(), i = first_child(n), s = (e) => {
													var n = root_7$5(), i = child(n);
													Icon(i, {
														icon: "mdi:pin",
														onclick: o
													}), reset(n), append(e, n);
												}, c = (e) => {
													var n = root_8$4(), i = child(n);
													Icon(i, {
														icon: "mdi:pin-off",
														onclick: o
													}), reset(n), append(e, n);
												};
												if_block(i, (e) => {
													get$2(a) ? e(c, !1) : e(s);
												}), append(e, n);
											};
											if_block(d, (e) => {
												i && !n.disable_pin && e(f);
											});
											var p = sibling(d, 2), m = (e) => {
												var n = root_9();
												n.__click = s;
												var i = child(n);
												Icon(i, { icon: "mdi:arrow-expand" }), reset(n), append(e, n);
											};
											if_block(p, (e) => {
												i && e(m);
											});
											var h = sibling(p, 2), g = (e) => {
												var i = root_10$1(), a = child(i);
												Icon(a, { icon: "mdi:image-search" }), reset(i), template_effect(() => set_attribute(i, "href", n.href)), append(e, i);
											};
											if_block(h, (e) => {
												n.href && e(g);
											}), reset(c), append(e, c);
										};
										if_block(f, (e) => {
											n.disable_all || e(p);
										});
										var m = sibling(f, 2), h = (e) => {
											var i = root_11$1(), a = child(i, !0);
											reset(i), template_effect(() => set_text(a, n.similarity)), append(e, i);
										};
										if_block(m, (e) => {
											n.similarity && e(h);
										}), template_effect((e) => {
											set_attribute(d, "src", n.image.url), set_attribute(d, "alt", n.image.id), set_class(d, 1, e);
										}, [() => "image display-img " + (n.transpositions || []).join(" ")]), append(e, l);
									},
									$$slots: { default: !0 }
								});
							});
							var d = sibling(u, 2);
							component(d, () => Tooltip_content, (e, i) => {
								i(e, {
									class: "tooltip",
									children: (e, i) => {
										var a = root_12(), o = first_child(a), s = child(o);
										reset(o);
										var c = sibling(o, 2);
										ImageInfos(c, {
											get image() {
												return n.image;
											},
											isTitle: !0
										}), template_effect((e) => {
											set_attribute(s, "src", n.image.url), set_attribute(s, "alt", n.image.id), set_class(s, 1, e);
										}, [() => clsx$1(["display-img", ...n.transpositions || []])]), append(e, a);
									},
									$$slots: { default: !0 }
								});
							}), append(e, l);
						},
						$$slots: { default: !0 }
					});
				}), append(e, l);
			},
			$$slots: { default: !0 }
		});
	}), append(e, c), pop();
}
delegate(["click"]);
var on_click$4 = (e, n, i) => n(get$2(i)), root_2$10 = /* @__PURE__ */ from_html("<a href=\"javascript:void(0)\" class=\"cl-selecter\" aria-label=\"Select image\"></a>"), root_1$15 = /* @__PURE__ */ from_html("<div><!> <!></div>"), root_3$8 = /* @__PURE__ */ from_html("<p>∅</p>"), on_click_1$1 = (e, n, i) => {
	n(!n()), n() && i.onexpand?.();
}, root_4$6 = /* @__PURE__ */ from_html("<a class=\"cl-more card cl-placeholder\" href=\"javascript:void(0)\"> </a>"), root$17 = /* @__PURE__ */ from_html("<div><!> <!></div>");
function ImageList(e, n) {
	push(n, !0);
	let i = prop(n, "selectable", 3, !1), a = prop(n, "expanded", 15, !1), o = getEditorState();
	function s(e) {
		o.select_images("toggle", e);
	}
	var c = root$17();
	let l;
	var u = child(c);
	each(u, 17, () => n.images.slice(0, n.limit), (e) => e.id, (e, a) => {
		var c = root_1$15();
		let l;
		var u = child(c);
		{
			let e = /* @__PURE__ */ user_derived(() => ({
				...get$2(a),
				id: get$2(a).num.toString(),
				url: (o.base_url || "") + (n.dti_transformed && get$2(a).tsf_url ? get$2(a).tsf_url : get$2(a).url)
			}));
			ImageFileDisplay(u, {
				get image() {
					return get$2(e);
				},
				get disable_magnify() {
					return i();
				},
				get disable_all() {
					return n.disable_all;
				}
			});
		}
		var d = sibling(u, 2), f = (e) => {
			var n = root_2$10();
			n.__click = [
				on_click$4,
				s,
				a
			], append(e, n);
		};
		if_block(d, (e) => {
			i() && e(f);
		}), reset(c), template_effect((e) => l = set_class(c, 1, "cl-image card", null, l, e), [() => ({ "cl-selected": i() && o.image_selection.has(get$2(a).id) })]), append(e, c);
	}, (e) => {
		var n = root_3$8();
		append(e, n);
	});
	var d = sibling(u, 2), f = (e) => {
		var i = root_4$6();
		i.__click = [
			on_click_1$1,
			a,
			n
		];
		var o = child(i);
		reset(i), template_effect(() => set_text(o, `${a() ? "–" : "+"}${n.images.length - n.limit}`)), append(e, i);
	};
	if_block(d, (e) => {
		i() && n.limit && n.images.length > n.limit && e(f);
	}), reset(c), template_effect((e) => l = set_class(c, 1, "cl-images", null, l, e), [() => ({ "cl-selectable": i() })]), append(e, c), pop();
}
delegate(["click"]);
var root_1$14 = /* @__PURE__ */ from_html("<h3> </h3> <p><!></p>", 1), root_4$5 = /* @__PURE__ */ from_html("<form><input type=\"text\"/> <a href=\"javascript:void(0)\" class=\"btn\"><!></a></form>"), on_click$3 = (e, n) => {
	set(n, !0);
}, root_6$3 = /* @__PURE__ */ from_html("<a href=\"javascript:void(0)\" class=\"btn is-edit\" title=\"Rename\"><!></a>"), root_5$3 = /* @__PURE__ */ from_html("<span> </span> <!>", 1), root_8$3 = /* @__PURE__ */ from_html("<!> <!>", 1), root_7$4 = /* @__PURE__ */ from_html("<p><!></p>"), root_10 = /* @__PURE__ */ from_html("<p><!></p>"), root_3$7 = /* @__PURE__ */ from_html("<div class=\"cl-propinfo\"><div class=\"cl-cluster-title\"><!></div> <p> </p> <!></div>"), root_11 = /* @__PURE__ */ from_html("<div class=\"cl-protoinfo\"><p><!></p> <div class=\"cl-proto\"><img alt=\"cl-proto\" class=\"prototype\"/></div></div>"), on_click_1 = (e, n) => n(!0), root_14$1 = /* @__PURE__ */ from_html("<a class=\"cl-overlay cl-hoveroptions\" href=\"javascript:void(0)\"><!> <!></a>"), root$16 = /* @__PURE__ */ from_html("<div><div class=\"cl-anchor\"></div> <div class=\"cl-props\"><div class=\"cl-propcontent\"><!> <!></div> <!></div> <div class=\"cl-samples\"><!></div></div>");
function ClusterElement(e, n) {
	push(n, !0);
	let i = prop(n, "cluster", 7), a = prop(n, "expanded", 7, !1), o = prop(n, "editing", 15, !1), s = prop(n, "editable", 3, !1), c = prop(n, "dti_transformed", 15, !1), l = prop(n, "thumbnail", 3, !1), u = prop(n, "selected", 3, !1), d = /* @__PURE__ */ state(!1), f = /* @__PURE__ */ state(void 0), p = /* @__PURE__ */ state(void 0), m = getEditorState(), h = getNameProvider(), g = {
		grid: 8,
		rows: 18
	}, _ = /* @__PURE__ */ user_derived(() => g[m.viewer_display]), v = /* @__PURE__ */ state(proxy([]));
	function y(e) {
		e.preventDefault();
		let n = get$2(p)?.value;
		n && (i().name = n), set(d, !1);
	}
	function b() {
		m.ask_cluster("cluster_merge", i().id);
	}
	let x = () => {
		setTimeout(() => get$2(f)?.scrollIntoView({
			behavior: "smooth",
			block: "center"
		}), 100);
	};
	user_effect(() => {
		o() && x();
	}), user_effect(() => {
		i().images.length, set(v, h.sortImages(i().images), !0);
	});
	var S = root$16();
	let C;
	var w = child(S);
	bind_this(w, (e) => set(f, e), () => get$2(f));
	var T = sibling(w, 2), E = child(T), D = child(E), O = (e) => {
		var n = root_1$14(), a = first_child(n), o = child(a, !0);
		reset(a);
		var s = sibling(a, 2), c = child(s), l = (e) => {
			var n = text();
			template_effect(() => set_text(n, `Cluster #${i().id ?? ""}, ${i().images.length ?? ""} images`)), append(e, n);
		};
		if_block(c, (e) => {
			i().id >= 0 && e(l);
		}), reset(s), template_effect(() => set_text(o, i().name)), append(e, n);
	}, k = (e) => {
		var n = root_3$7(), a = child(n), c = child(a), l = (e) => {
			var n = root_4$5(), a = child(n);
			autofocus(a, !0), bind_this(a, (e) => set(p, e), () => get$2(p));
			var o = sibling(a, 2);
			o.__click = y;
			var s = child(o);
			Icon(s, { icon: "mdi:check-bold" }), reset(o), reset(n), template_effect(() => a.defaultValue = i().name), event("submit", n, y), append(e, n);
		}, u = (e) => {
			var n = root_5$3(), a = first_child(n), s = child(a, !0);
			reset(a);
			var c = sibling(a, 2), l = (e) => {
				var n = root_6$3();
				n.__click = [on_click$3, d];
				var i = child(n);
				Icon(i, { icon: "mdi:edit" }), reset(n), append(e, n);
			};
			if_block(c, (e) => {
				o() && e(l);
			}), template_effect(() => set_text(s, i().name)), append(e, n);
		};
		if_block(c, (e) => {
			get$2(d) && o() ? e(l) : e(u, !1);
		}), reset(a);
		var f = sibling(a, 2), m = child(f, !0);
		reset(f);
		var h = sibling(f, 2), g = (e) => {
			var n = root_7$4(), i = child(n), a = (e) => {
				var n = root_8$3(), i = first_child(n);
				IconBtn(i, {
					icon: "mdi:merge",
					label: "Merge cluster with...",
					onclick: b
				});
				var a = sibling(i, 2);
				IconBtn(a, {
					icon: "mdi:check-bold",
					label: "End edition",
					onclick: () => o(!1)
				}), append(e, n);
			}, s = (e) => {
				IconBtn(e, {
					icon: "mdi:edit",
					label: "Edit cluster",
					onclick: () => o(!0)
				});
			};
			if_block(i, (e) => {
				o() ? e(a) : e(s, !1);
			}), reset(n), append(e, n);
		}, _ = (e) => {
			var n = root_10(), a = child(n);
			{
				let e = /* @__PURE__ */ user_derived(() => [i()]);
				ClusterCSVExporter(a, { get clusters() {
					return get$2(e);
				} });
			}
			reset(n), append(e, n);
		};
		if_block(h, (e) => {
			s() ? e(g) : e(_, !1);
		}), reset(n), template_effect(() => set_text(m, i().id >= 0 && `Cluster #${i().id}, ${i().images.length} images`)), append(e, n);
	};
	if_block(D, (e) => {
		l() ? e(O) : e(k, !1);
	});
	var A = sibling(D, 2), j = (e) => {
		var n = root_11(), a = child(n), o = child(a), s = (e) => {
			IconBtn(e, {
				icon: "mdi:image",
				class: "is-outline",
				label: "Show images",
				onclick: () => {
					c(!1);
				}
			});
		}, l = (e) => {
			IconBtn(e, {
				icon: "mdi:panorama-variant",
				class: "is-outline",
				label: "Show protos",
				onclick: () => {
					c(!0);
				}
			});
		};
		if_block(o, (e) => {
			c() ? e(s) : e(l, !1);
		}), reset(a);
		var u = sibling(a, 2), d = child(u);
		reset(u), reset(n), template_effect(() => set_attribute(d, "src", (m.base_url || "") + i().proto_url)), append(e, n);
	};
	if_block(A, (e) => {
		!l() && i().proto_url && e(j);
	}), reset(E);
	var M = sibling(E, 2), N = (e) => {
		var n = root_14$1();
		n.__click = [on_click_1, o];
		var i = child(n);
		IconBtn(i, {
			icon: "mdi:edit",
			label: "Edit cluster"
		});
		var a = sibling(i, 2);
		IconBtn(a, {
			icon: "mdi:merge",
			label: "Merge with...",
			onclick: (e) => {
				e.stopPropagation(), b();
			}
		}), reset(n), append(e, n);
	};
	if_block(M, (e) => {
		s() && !o() && e(N);
	}), reset(T);
	var P = sibling(T, 2), F = child(P);
	{
		let e = /* @__PURE__ */ user_derived(() => a() && !o() ? void 0 : get$2(_));
		ImageList(F, {
			get selectable() {
				return o();
			},
			get images() {
				return get$2(v);
			},
			get dti_transformed() {
				return c();
			},
			get limit() {
				return get$2(e);
			},
			onexpand: () => x(),
			get disable_all() {
				return l();
			},
			get expanded() {
				return a();
			},
			set expanded(e) {
				a(e);
			}
		});
	}
	reset(P), reset(S), template_effect((e) => C = set_class(S, 1, "cl-cluster box", null, C, e), [() => ({
		"cl-expanded": a() || o(),
		"cl-selected": u() || o()
	})]), append(e, S), pop();
}
delegate(["click"]);
var on_click$2 = (e, n, i) => set(n, get$2(i), !0), root_7$3 = /* @__PURE__ */ from_html("<div class=\"cl-ask-cluster\"><a href=\"javascript:void(0)\"><!></a></div>"), root_3$6 = /* @__PURE__ */ from_html("<div class=\"modal-card-head\"><!> <!></div> <div class=\"modal-card-body\"><div class=\"cl-ask-cluster\"><!></div> <div class=\"cl-ask-select\"><div class=\"cl-ask-list\"></div></div></div> <div class=\"modal-card-foot cl-modale-actions\"><p><!> <!></p></div>", 1), root_2$9 = /* @__PURE__ */ from_html("<div><!> <!></div>");
function ClusterAskModale(e, n) {
	push(n, !0);
	let i = /* @__PURE__ */ state(null), a = /* @__PURE__ */ state(!0), o = getEditorState(), s = /* @__PURE__ */ user_derived(() => o.content.clusters[n.exclude_cluster_id]), c = /* @__PURE__ */ user_derived(() => n.for_action == "cluster_merge" ? {
		action_icon: "mdi:merge",
		action_label: "Merge whole clusters",
		action_title: "Select target cluster to merge with:",
		action_cluster: {
			...get$2(s),
			name: "Selected cluster: " + get$2(s)?.name
		}
	} : {
		action_icon: "mdi:folder-move",
		action_label: "Move selected images to...",
		action_title: "Select target cluster to move images:",
		action_cluster: {
			id: -1,
			name: "Selected images",
			images: o.content.clusters[n.exclude_cluster_id]?.images.filter((e) => o.image_selection.has(e.id)) ?? []
		}
	}), l = /* @__PURE__ */ user_derived(() => get$2(c).action_icon), u = /* @__PURE__ */ user_derived(() => get$2(c).action_label), d = /* @__PURE__ */ user_derived(() => get$2(c).action_title), f = /* @__PURE__ */ user_derived(() => get$2(c).action_cluster), p = /* @__PURE__ */ user_derived(() => [...n.clusters.filter((e) => e.id != n.exclude_cluster_id), ...n.for_action == "selection_move" ? [{
		id: -1,
		name: "New cluster",
		images: []
	}] : []]);
	function m() {
		o.ask_cluster_choice(get$2(i).id);
	}
	function h() {
		return o.askingCluster !== null;
	}
	function g(e) {
		o.askingCluster = e ? o.askingCluster : null;
	}
	var _ = comment(), v = first_child(_), y = h, b = g;
	component(v, () => Dialog, (e, n) => {
		n(e, {
			get open() {
				return y();
			},
			set open(e) {
				b(e);
			},
			children: (e, n) => {
				var s = comment(), c = first_child(s);
				component(c, () => Portal, (e, n) => {
					n(e, {
						children: (e, n) => {
							var s = root_2$9();
							let c;
							var g = child(s);
							component(g, () => Dialog_overlay, (e, n) => {
								n(e, { class: "modal-background" });
							});
							var _ = sibling(g, 2);
							component(_, () => Dialog_content, (e, n) => {
								n(e, {
									class: "modal-card cl-ask-modal",
									children: (e, n) => {
										var s = root_3$6(), c = first_child(s), h = child(c);
										component(h, () => Dialog_title, (e, n) => {
											n(e, {
												class: "modal-card-title",
												children: (e, n) => {
													next();
													var i = text();
													template_effect(() => set_text(i, get$2(d))), append(e, i);
												},
												$$slots: { default: !0 }
											});
										});
										var g = sibling(h, 2);
										component(g, () => Dialog_close, (e, n) => {
											n(e, {
												class: "modal-card-close",
												children: (e, n) => {
													Icon(e, {
														icon: "mdi:close",
														onclick: () => set(a, !1)
													});
												},
												$$slots: { default: !0 }
											});
										}), reset(c);
										var _ = sibling(c, 2), v = child(_), y = child(v), b = (e) => {
											ClusterElement(e, {
												thumbnail: !0,
												get cluster() {
													return get$2(f);
												},
												selected: !0
											});
										};
										if_block(y, (e) => {
											get$2(f).id !== void 0 && e(b);
										}), reset(v);
										var x = sibling(v, 2), S = child(x);
										each(S, 21, () => get$2(p), (e) => e.id, (e, n, a, o) => {
											var s = root_7$3(), c = child(s);
											c.__click = [
												on_click$2,
												i,
												n
											];
											var l = child(c);
											{
												let e = /* @__PURE__ */ user_derived(() => get$2(i)?.id == get$2(n).id);
												ClusterElement(l, {
													thumbnail: !0,
													get cluster() {
														return get$2(n);
													},
													get selected() {
														return get$2(e);
													}
												});
											}
											reset(c), reset(s), append(e, s);
										}), reset(S), reset(x), reset(_);
										var C = sibling(_, 2), w = child(C), T = child(w);
										IconBtn(T, {
											onclick: () => {
												o.askingCluster = null;
											},
											icon: "mdi:close",
											label: "Cancel",
											class: "is-outline"
										});
										var E = sibling(T, 2);
										{
											let e = /* @__PURE__ */ user_derived(() => get$2(i) === null);
											IconBtn(E, {
												onclick: m,
												get icon() {
													return get$2(l);
												},
												get label() {
													return get$2(u);
												},
												get disabled() {
													return get$2(e);
												}
											});
										}
										reset(w), reset(C), append(e, s);
									},
									$$slots: { default: !0 }
								});
							}), reset(s), template_effect((e) => c = set_class(s, 1, "modal", null, c, e), [() => ({ "is-active": h() })]), append(e, s);
						},
						$$slots: { default: !0 }
					});
				}), append(e, s);
			},
			$$slots: { default: !0 }
		});
	}), append(e, _), pop();
}
delegate(["click"]);
var root_4$4 = /* @__PURE__ */ from_html("<!> <!>", 1), root_5$2 = /* @__PURE__ */ from_html("<div class=\"toolbar-item toolbar-btn\"><label class=\"label\">Actions on selection:</label> <!></div>"), root_2$8 = /* @__PURE__ */ from_html("<div class=\"toolbar-item cl-select-tools\"><label class=\"label\"> </label> <div class=\"field\"><!></div></div> <!>", 1), root_1$13 = /* @__PURE__ */ from_html("<div class=\"toolbar-content cl-editor-tools\"><!> <div class=\"toolbar-item toolbar-btn\"><!></div> <div class=\"toolbar-item toolbar-btn\"><!></div></div>"), root$15 = /* @__PURE__ */ from_html("<div><div class=\"toolbar cl-editor-toolbar\"><div class=\"toolbar-content\"><h2> </h2> <div class=\"toolbar-item\"><label class=\"label\">Sort by:</label> <div class=\"field is-narrow\"><div class=\"select\"><select><option>Size</option><option>ID</option><option>Name</option></select></div></div></div> <div class=\"toolbar-item\"><label class=\"label\">Display:</label> <div class=\"field is-narrow\"><div class=\"select\"><select><option>Grid</option><option>Rows</option></select></div></div></div> <!></div></div> <div><!> <div class=\"cl-cluster box cl-filler\"></div> <div class=\"cl-cluster box cl-filler\"></div> <div class=\"cl-cluster box cl-filler\"></div> <div class=\"cl-cluster box cl-filler\"></div> <div class=\"cl-cluster box cl-filler\"></div></div> <!></div> <!>", 1);
function ClusterApp(e, n) {
	push(n, !0);
	let i = prop(n, "formfield", 7), a = proxy(new ClusterEditorState(n.clustering_data, n.base_url));
	setEditorState(a);
	let o = proxy({});
	getMagnifyingContext() || setMagnifyingContext(o);
	let s = /* @__PURE__ */ user_derived(() => ({
		size: (e, n) => n.images.length - e.images.length,
		id: (e, n) => e.id - n.id,
		name: (e, n) => e.name.localeCompare(n.name)
	})[a.viewer_sort]), c = /* @__PURE__ */ user_derived(() => Object.values(a.content.clusters).sort(get$2(s)));
	function l() {
		i() && (i().value = JSON.stringify(a.content), i().form?.submit()), a.editing = !1;
	}
	var u = root$15(), d = first_child(u);
	let f;
	var p = child(d), m = child(p), h = child(m), g = child(h);
	reset(h);
	var _ = sibling(h, 2), v = sibling(child(_), 2), y = child(v), b = child(y), x = child(b);
	x.value = x.__value = "size";
	var S = sibling(x);
	S.value = S.__value = "id";
	var C = sibling(S);
	C.value = C.__value = "name", reset(b), reset(y), reset(v), reset(_);
	var w = sibling(_, 2), T = sibling(child(w), 2), E = child(T), D = child(E), O = child(D);
	O.value = O.__value = "grid";
	var k = sibling(O);
	k.value = k.__value = "rows", reset(D), reset(E), reset(T), reset(w);
	var A = sibling(w, 2), j = (e) => {
		var n = root_1$13(), o = child(n), s = (e) => {
			var n = root_2$8(), i = first_child(n), o = child(i), s = child(o);
			reset(o);
			var c = sibling(o, 2), l = child(c), u = (e) => {
				IconBtn(e, {
					onclick: () => {
						a.select_images("all");
					},
					icon: "mdi:select-all",
					label: "All"
				});
			}, d = (e) => {
				var n = root_4$4(), i = first_child(n);
				IconBtn(i, {
					onclick: () => {
						a.select_images("none");
					},
					icon: "mdi:close",
					label: "Clear"
				});
				var o = sibling(i, 2);
				IconBtn(o, {
					onclick: () => {
						a.select_images("invert");
					},
					icon: "mdi:select-inverse",
					label: "Invert"
				}), append(e, n);
			};
			if_block(l, (e) => {
				a.image_selection.size == 0 ? e(u) : e(d, !1);
			}), reset(c), reset(i);
			var f = sibling(i, 2), p = (e) => {
				var n = root_5$2(), i = sibling(child(n), 2);
				IconBtn(i, {
					onclick: () => {
						a.ask_cluster("selection_move", a.editingCluster);
					},
					icon: "mdi:folder-move",
					label: "Move to cluster..."
				}), reset(n), append(e, n);
			};
			if_block(f, (e) => {
				a.image_selection.size > 0 && e(p);
			}), template_effect(() => set_text(s, `Selection (${a.image_selection.size ?? ""}):`)), append(e, n);
		};
		if_block(o, (e) => {
			a.editingCluster !== null && e(s);
		});
		var u = sibling(o, 2), d = child(u), f = (e) => {
			{
				let n = /* @__PURE__ */ user_derived(() => i() ? "Save" : "Apply");
				IconBtn(e, {
					onclick: l,
					icon: "mdi:content-save",
					class: "big is-link",
					get label() {
						return get$2(n);
					}
				});
			}
		}, p = (e) => {
			IconBtn(e, {
				onclick: () => {
					a.editing = !0;
				},
				class: "big is-link",
				icon: "mdi:edit",
				label: "Edit"
			});
		};
		if_block(d, (e) => {
			a.editing ? e(f) : e(p, !1);
		}), reset(u);
		var m = sibling(u, 2), h = child(m);
		ClusterCSVExporter(h, { get clusters() {
			return get$2(c);
		} }), reset(m), reset(n), append(e, n);
	};
	if_block(A, (e) => {
		n.editable && e(j);
	}), reset(m), reset(p);
	var M = sibling(p, 2), N = child(M);
	each(N, 17, () => get$2(c), (e) => e.id, (e, n) => {
		var i = () => a.editingCluster == get$2(n).id, o = (e) => a.editingCluster = e ? get$2(n).id : null;
		ClusterElement(e, {
			get editing() {
				return i();
			},
			set editing(e) {
				o(e);
			},
			get cluster() {
				return get$2(n);
			},
			get editable() {
				return a.editing;
			}
		});
	}), next(10), reset(M);
	var P = sibling(M, 2), F = (e) => {
		ClusterAskModale(e, spread_props(() => a.askingCluster, { get clusters() {
			return get$2(c);
		} }));
	};
	if_block(P, (e) => {
		a.askingCluster !== null && e(F);
	}), reset(d);
	var I = sibling(d, 2);
	ImageMagnifier(I, {}), template_effect((e) => {
		f = set_class(d, 1, "", null, f, e), set_text(g, `Cluster ${a.editing ? "Editor" : "Viewer"}`), set_class(M, 1, "cl-cluster-list cl-display-" + a.viewer_display);
	}, [() => ({ "cl-editor": a.editing })]), bind_select_value(b, () => a.viewer_sort, (e) => a.viewer_sort = e), bind_select_value(D, () => a.viewer_display, (e) => a.viewer_display = e), append(e, u), pop();
}
function unserializeImageInfo(e) {
	return {
		...e,
		id: e.path,
		num: e.id,
		url: e.raw_url
	};
}
function unserializeClusterFile(e) {
	return {
		clusters: Object.fromEntries(Object.entries(e.clusters).map(([e, n]) => [parseInt(e), {
			...n,
			images: n.images.map(unserializeImageInfo)
		}])),
		background_urls: e.background_urls
	};
}
var root_8$2 = /* @__PURE__ */ from_html("<div><span class=\"label\"> </span> <progress class=\"progress is-link bar\"></progress></div>"), root_7$2 = /* @__PURE__ */ from_html("<div class=\"tck-bar-list\"></div>"), root_6$2 = /* @__PURE__ */ from_html("<span> </span> <!> <pre> </pre>", 1), root$14 = /* @__PURE__ */ from_html("<div class=\"tck-progress\"><!></div>");
function ProgressTracker(e, n) {
	push(n, !0);
	let i = /* @__PURE__ */ state(null), a = /* @__PURE__ */ user_derived(() => get$2(i)?.log?.errors?.join("\n")), o;
	function s() {
		fetch(n.tracking_url).then((e) => e.json()).then((e) => {
			set(i, e, !0), get$2(i).is_finished ? window.location.reload() : o = setTimeout(s, 1e3);
		}).catch((e) => {
			e = e.toString(), o = setTimeout(s, 1e3);
		});
	}
	user_effect(() => (s(), () => clearTimeout(o)));
	var c = root$14(), l = child(c), u = (e) => {
		var n = text();
		template_effect(() => set_text(n, get$2(a))), append(e, n);
	}, d = (e) => {
		var n = comment(), a = first_child(n), o = (e) => {
			var n = text("Done!");
			append(e, n);
		}, s = (e) => {
			var n = comment(), a = first_child(n), o = (e) => {
				var n = text("Loading...");
				append(e, n);
			}, s = (e) => {
				var n = root_6$2(), a = first_child(n), o = child(a, !0);
				reset(a);
				var s = sibling(a, 2), c = (e) => {
					var n = root_7$2();
					each(n, 21, () => get$2(i).log.progress, index, (e, n) => {
						var i = root_8$2(), a = child(i), o = child(a);
						reset(a);
						var s = sibling(a, 2);
						reset(i), template_effect(() => {
							set_text(o, `${get$2(n).context ?? ""} ${get$2(n).current ?? ""}/${get$2(n).total ?? ""}`), set_value(s, get$2(n).current), set_attribute(s, "max", get$2(n).total);
						}), append(e, i);
					}), reset(n), append(e, n);
				};
				if_block(s, (e) => {
					get$2(i).log?.progress && e(c);
				});
				var l = sibling(s, 2), u = child(l, !0);
				reset(l), template_effect((e) => {
					set_class(a, 1, `mb-3 tag status status-${get$2(i).status ?? ""}`), set_text(o, get$2(i).status), set_text(u, e);
				}, [() => get$2(i).status == "PENDING" ? "Waiting for worker..." : get$2(i).log?.infos?.join("\n")]), append(e, n);
			};
			if_block(a, (e) => {
				get$2(i) === null ? e(o) : e(s, !1);
			}, !0), append(e, n);
		};
		if_block(a, (e) => {
			get$2(i)?.is_finished ? e(o) : e(s, !1);
		}, !0), append(e, n);
	};
	if_block(l, (e) => {
		get$2(a) ? e(u) : e(d, !1);
	}), reset(c), append(e, c), pop();
}
function unserializeSimilarityIndex(e) {
	let n = Object.fromEntries(Object.entries(e.sources).map(([e, n]) => [e, {
		name: n.metadata?.name || n.uid,
		...n
	}])), i = e.images.map((e, i) => ({
		id: e.id,
		num: i,
		src: e.src,
		url: e.url,
		document: n[e.doc_uid],
		metadata: e.metadata || {}
	}));
	return {
		sources: Object.values(n),
		images: i,
		transpositions: e.transpositions || ["none"]
	};
}
function unserializeSimilarityMatrix(e, n) {
	let i = unserializeSimilarityIndex(n), a = i.images.map(() => []);
	return e.forEach(([e, n, i]) => {
		a[n].push({
			similarity: i,
			best_source_flip: 0,
			best_query_flip: 0,
			query_index: n,
			source_index: e
		}), a[e].push({
			similarity: i,
			best_source_flip: 0,
			best_query_flip: 0,
			query_index: e,
			source_index: n
		});
	}), {
		matches: unserializeImageMatches(a, i, i),
		index: i
	};
}
function unserializeImageMatches(e, n, i) {
	let a = [];
	for (let o = 0; o < e.length; o++) {
		let s = i.images[o], c = e[o].map((e) => ({
			image: n.images[e.source_index],
			similarity: e.similarity,
			q_transposition: i.transpositions[e.best_query_flip],
			m_transposition: n.transpositions[e.best_source_flip]
		})).sort((e, n) => n.similarity - e.similarity), l = {}, u = [];
		c.forEach((e) => {
			if (!l[e.image.document.uid]) {
				let n = [];
				l[e.image.document.uid] = n, u.push(n);
			}
			l[e.image.document.uid].push(e);
		}), a.push({
			query: s,
			matches: c,
			matches_by_document: u
		});
	}
	return a.sort((e, n) => n.matches[0].similarity - e.matches[0].similarity);
}
function unserializeSearchResults(e, n) {
	console.log(n, e);
	let i = unserializeSimilarityIndex(e), a = unserializeSimilarityIndex(n.query), o = a.images.map(() => []);
	n.pairs.forEach(([e, n, i]) => {
		o[n].push({
			similarity: i,
			best_source_flip: 0,
			best_query_flip: 0,
			query_index: n,
			source_index: e
		});
	});
	let s = unserializeImageMatches(o, i, a);
	return {
		source_index: i,
		query_index: a,
		matches: s
	};
}
async function connectedComponents(e, n, i) {
	let a = /* @__PURE__ */ new Map();
	for (let i of e.edges) {
		if (i.weight < n) continue;
		let e = a.get(i.source) || a.get(i.target) || { id: i.source };
		for (; e?.merged;) e = e.merged;
		let o = a.get(i.target);
		for (; o?.merged;) o = o.merged;
		o && e !== o && (o.merged = e), a.set(i.source, e), a.set(i.target, e);
	}
	let o = /* @__PURE__ */ new Map(), s = [];
	for (let e = 0; e < i; e++) {
		let n = a.get(e);
		for (; n?.merged;) n = n.merged;
		if (!n) {
			s.push(e);
			continue;
		}
		o.has(n.id) || o.set(n.id, {
			id: o.size,
			members: []
		}), o.get(n.id).members.push(e);
	}
	return s.length > 0 && o.set(-1, {
		id: -1,
		members: s
	}), Array.from(o.values());
}
function graphFromSimilarityMatches(e, n) {
	let i = [], a = /* @__PURE__ */ new Map();
	for (let [n, i] of e.images.entries()) a.set(i.id, n);
	for (let e of n) {
		let n = a.get(e.query.id);
		for (let o of e.matches) {
			let e = a.get(o.image.id);
			i.push({
				source: n,
				target: e,
				weight: o.similarity
			});
		}
	}
	return { edges: i };
}
function convertToClusteringFile(e, n, i) {
	let a = /* @__PURE__ */ new Map();
	for (let e of i) a.set(e.id, e);
	let o = /* @__PURE__ */ new Map();
	for (let [n, i] of a) {
		let s = i.members.map((n) => {
			let i = e.images[n];
			return {
				...i,
				raw_url: i.url,
				path: i.url,
				name: i.name || ""
			};
		}), c = n >= 0 ? n + 1 : a.size + 1;
		o.set(c, {
			id: c,
			name: n >= 0 ? `Cluster ${n + 1}` : "Unclustered",
			images: s
		});
	}
	return {
		clusters: Object.fromEntries(o),
		background_urls: e.sources.map((e) => e.src)
	};
}
var root_1$12 = /* @__PURE__ */ from_html("<div class=\"cl-image card\"><!></div>"), root_2$7 = /* @__PURE__ */ from_html("<p>∅</p>"), root$13 = /* @__PURE__ */ from_html("<div class=\"cl-cluster box\"><div class=\"cl-anchor\"></div> <div class=\"cl-props\"><div class=\"cl-propcontent\"><div class=\"cl-propinfo\"><p class=\"cl-cluster-title\"><span> </span></p></div></div></div> <div class=\"cl-samples\"><div class=\"cl-images cl-limitheight\"></div></div></div>");
function ClusterPreviewBlock(e, n) {
	push(n, !0);
	var i = root$13(), a = sibling(child(i), 2), o = child(a), s = child(o), c = child(s), l = child(c), u = child(l);
	reset(l), reset(c), reset(s), reset(o), reset(a);
	var d = sibling(a, 2), f = child(d);
	each(f, 20, () => n.cluster.members, (e) => e, (e, i) => {
		var a = root_1$12(), o = child(a);
		ImageFileDisplay(o, { get image() {
			return n.index.images[i];
		} }), reset(a), append(e, a);
	}, (e) => {
		var n = root_2$7();
		append(e, n);
	}), reset(f), reset(d), reset(i), template_effect(() => set_text(u, `${n.cluster.id >= 0 ? `Cluster ${n.cluster.id}` : "Unclustered"} (${n.cluster.members.length ?? ""})`)), append(e, i), pop();
}
var root_3$5 = /* @__PURE__ */ from_html("<div class=\"toolbar-item\"><label class=\"label is-expanded\" for=\"clustering-threshold\">Clustering threshold:</label> <div class=\"field\"><div class=\"control\"><input type=\"range\"/></div> <div class=\"control\"><input type=\"number\" class=\"input\" id=\"clustering-threshold\"/></div></div></div>"), root_1$11 = /* @__PURE__ */ from_html("<div class=\"toolbar\"><div class=\"toolbar-content\"><!> <!> <div class=\"toolbar-item toolbar-btn\"><!></div></div></div>"), root_8$1 = /* @__PURE__ */ from_html("<p>Clustering in progress...</p>"), root_7$1 = /* @__PURE__ */ from_html("<!> <div><!> <div class=\"cl-cluster box cl-filler\"></div> <div class=\"cl-cluster box cl-filler\"></div> <div class=\"cl-cluster box cl-filler\"></div> <div class=\"cl-cluster box cl-filler\"></div> <div class=\"cl-cluster box cl-filler\"></div></div>", 1), root$12 = /* @__PURE__ */ from_html("<!> <div><!></div> <div class=\"mt-4\"></div>", 1);
function ClusteringTool(e, n) {
	push(n, !0);
	let i = /* @__PURE__ */ state(!1), a = /* @__PURE__ */ user_derived(() => Math.min(...n.matches.map((e) => Math.min(...e.matches.map((e) => e.similarity))))), o = /* @__PURE__ */ user_derived(() => Math.max(...n.matches.map((e) => Math.max(...e.matches.map((e) => e.similarity))))), s = /* @__PURE__ */ state(get$2(a) + .8 * (get$2(o) - get$2(a))), c = graphFromSimilarityMatches(n.index, n.matches), l = /* @__PURE__ */ state(proxy([])), u = /* @__PURE__ */ state(null);
	user_effect(() => {
		get$2(s), untrack(() => {
			get$2(u) && clearTimeout(get$2(u)), set(u, setTimeout(() => {
				connectedComponents(c, get$2(s), n.index.images.length).then((e) => {
					set(l, e, !0), set(u, null);
				});
			}, 300), !0);
		});
	});
	var d = root$12(), f = first_child(d), p = (e) => {
		var c = root_1$11(), l = child(c), u = child(l), d = (e) => {
			var i = comment(), a = first_child(i);
			snippet(a, () => n.extra_toolbar_items), append(e, i);
		};
		if_block(u, (e) => {
			n.extra_toolbar_items && e(d);
		});
		var f = sibling(u, 2), p = (e) => {
			var n = root_3$5(), i = sibling(child(n), 2), c = child(i), l = child(c);
			remove_input_defaults(l), set_attribute(l, "step", .001), reset(c);
			var u = sibling(c, 2), d = child(u);
			remove_input_defaults(d), reset(u), reset(i), reset(n), template_effect(() => {
				set_attribute(l, "min", get$2(a)), set_attribute(l, "max", get$2(o));
			}), bind_value(l, () => get$2(s), (e) => set(s, e)), bind_value(d, () => get$2(s), (e) => set(s, e)), append(e, n);
		};
		if_block(f, (e) => {
			get$2(i) || e(p);
		});
		var m = sibling(f, 2), h = child(m), g = (e) => {
			IconBtn(e, {
				icon: "mdi:autorenew",
				onclick: () => set(i, !1),
				label: "Redo automatic clustering"
			});
		}, _ = (e) => {
			IconBtn(e, {
				class: "is-link",
				icon: "mdi:check-bold",
				onclick: () => set(i, !0),
				label: "Apply clustering"
			});
		};
		if_block(h, (e) => {
			get$2(i) ? e(g) : e(_, !1);
		}), reset(m), reset(l), reset(c), append(e, c);
	};
	if_block(f, (e) => {
		n.visible && e(p);
	});
	var m = sibling(f, 2);
	let h;
	var g = child(m), _ = (e) => {
		{
			let i = /* @__PURE__ */ user_derived(() => convertToClusteringFile(n.index, n.matches, get$2(l)));
			ClusterApp(e, {
				get clustering_data() {
					return get$2(i);
				},
				editable: !0
			});
		}
	}, v = (e) => {
		var i = root_7$1(), a = first_child(i), o = (e) => {
			var n = root_8$1();
			append(e, n);
		};
		if_block(a, (e) => {
			get$2(u) && e(o);
		});
		var s = sibling(a, 2);
		set_class(s, 1, "cl-cluster-list cl-display-grid");
		var c = child(s);
		each(c, 17, () => get$2(l), (e) => e.id, (e, i) => {
			ClusterPreviewBlock(e, {
				get cluster() {
					return get$2(i);
				},
				get index() {
					return n.index;
				}
			});
		}), next(10), reset(s), append(e, i);
	};
	if_block(g, (e) => {
		get$2(i) ? e(_) : e(v, !1);
	}), reset(m), next(2), template_effect((e) => h = set_class(m, 1, "cluster-viewer", null, h, e), [() => ({
		"viewer-table": !get$2(i),
		hidden: !n.visible
	})]), append(e, d), pop();
}
var root_5$1 = /* @__PURE__ */ from_html("<div>...</div>"), root_3$4 = /* @__PURE__ */ from_html("<!> <!>", 1), root_1$10 = /* @__PURE__ */ from_html("<!> <!> <!>", 1);
function Pagination_1(e, n) {
	push(n, !0);
	let i = prop(n, "page", 15);
	var a = comment(), o = first_child(a);
	{
		let e = (e, n) => {
			let i = () => n?.().pages;
			var a = root_1$10(), o = first_child(a);
			component(o, () => Pagination_prev_button, (e, n) => {
				n(e, {
					class: "pagination-ctrl button",
					children: (e, n) => {
						Icon(e, { icon: "mdi:chevron-left" });
					},
					$$slots: { default: !0 }
				});
			});
			var s = sibling(o, 2);
			each(s, 17, i, (e) => e.key, (e, n, i, a) => {
				var o = root_3$4(), s = first_child(o), c = (e) => {
					var i = comment(), a = first_child(i);
					component(a, () => Pagination_page, (e, i) => {
						i(e, {
							get page() {
								return get$2(n);
							},
							class: "pagination-ctrl button"
						});
					}), append(e, i);
				};
				if_block(s, (e) => {
					get$2(n).type === "page" && e(c);
				});
				var l = sibling(s, 2), u = (e) => {
					var n = root_5$1();
					append(e, n);
				};
				if_block(l, (e) => {
					get$2(n).type === "ellipsis" && e(u);
				}), append(e, o);
			});
			var c = sibling(s, 2);
			component(c, () => Pagination_next_button, (e, n) => {
				n(e, {
					class: "pagination-ctrl button",
					children: (e, n) => {
						Icon(e, { icon: "mdi:chevron-right" });
					},
					$$slots: { default: !0 }
				});
			}), append(e, a);
		};
		component(o, () => Pagination, (a, o) => {
			o(a, {
				get count() {
					return n.total_pages;
				},
				class: "pagination",
				get page() {
					return i();
				},
				set page(e) {
					i(e);
				},
				children: e,
				$$slots: { default: !0 }
			});
		});
	}
	append(e, a), pop();
}
function MatchCSVExporter(e, n) {
	push(n, !0);
	let i = getNameProvider();
	async function* a() {
		let e = /* @__PURE__ */ new Set(), a = n.matches.matches.filter((e) => !n.threshold || e.similarity >= n.threshold);
		a.unshift({
			image: n.matches.query,
			similarity: 1,
			q_transposition: "none",
			m_transposition: "none"
		}), a.forEach((n) => {
			Object.keys(n.image.document?.metadata || {}).forEach((n) => e.add(n)), Object.keys(n.image.metadata || {}).forEach((n) => e.add(n));
		}), yield [
			"Image",
			"Source",
			"Similarity",
			"Document",
			"Document URL",
			...Array.from(e).map((e) => (e.charAt(0).toUpperCase() + e.slice(1)).replace(/[^\w\s]/g, " "))
		];
		for (let n of a) {
			let a = Array.from(e).map((e) => (n.image.metadata || n.image.document?.metadata || {})[e] || "");
			yield [
				i.getImageTitle(n.image),
				n.image.src || n.image.id,
				n.similarity,
				i.getImageDescription(n.image.document),
				n.image.document?.src || "",
				...a
			];
		}
	}
	CSVExporter(e, {
		iterRows: a,
		filename: "similarity-matches.csv"
	}), pop();
}
var root_2$6 = /* @__PURE__ */ from_html("<!> ", 1), root_1$9 = /* @__PURE__ */ from_html("<div class=\"match-group\"><div><p><!></p> <div class=\"columns is-multiline match-items\"></div> <!></div></div>");
function MatchGroup(e, n) {
	push(n, !0);
	let i = /* @__PURE__ */ state(!1);
	var a = comment(), o = first_child(a), s = (e) => {
		var a = root_1$9(), o = child(a), s = child(o), c = child(s), l = (e) => {
			var i = root_2$6(), a = first_child(i);
			Icon(a, { icon: "mdi:folder" });
			var o = sibling(a);
			template_effect(() => set_text(o, ` ${(n.matches[0].image.document?.name || n.matches[0].image.document?.uid) ?? ""}`)), append(e, i);
		}, u = (e) => {
			ImageInfos(e, { get image() {
				return n.matches[0].image;
			} });
		};
		if_block(c, (e) => {
			n.grouped ? e(l) : e(u, !1);
		}), reset(s);
		var d = sibling(s, 2);
		each(d, 23, () => n.matches, (e) => e.image.id, (e, a, o) => {
			var s = comment(), c = first_child(s), l = (e) => {
				{
					let i = /* @__PURE__ */ user_derived(() => matchesHRef(get$2(a).image));
					ImageFileDisplay(e, spread_props({
						get comparison() {
							return n.wref;
						},
						get href() {
							return get$2(i);
						}
					}, () => get$2(a), { disable_pin: !0 }));
				}
			};
			if_block(c, (e) => {
				(get$2(i) || get$2(o) == 0) && (!n.threshold || get$2(a).similarity >= n.threshold) && e(l);
			}), append(e, s);
		}), reset(d);
		var f = sibling(d, 2), p = (e) => {
			{
				let a = /* @__PURE__ */ user_derived(() => get$2(i) ? "mdi:close" : "mdi:animation-plus"), o = /* @__PURE__ */ user_derived(() => get$2(i) ? "Collapse" : `+${n.matches.length - 1}`);
				IconBtn(e, {
					get icon() {
						return get$2(a);
					},
					onclick: () => set(i, !get$2(i)),
					get label() {
						return get$2(o);
					}
				});
			}
		};
		if_block(f, (e) => {
			n.matches.length > 1 && e(p);
		}), reset(o), reset(a), template_effect(() => set_class(o, 1, clsx$1(get$2(i) ? "match-expanded" : "match-excerpt"))), append(e, a);
	};
	if_block(o, (e) => {
		(!n.threshold || n.matches[0].similarity >= n.threshold) && e(s);
	}), append(e, a), pop();
}
var on_click$1 = (e, n) => set(n, !get$2(n)), root_1$8 = /* @__PURE__ */ from_html("<p><a href=\"javascript:void(0)\"> </a></p>"), root$11 = /* @__PURE__ */ from_html("<div><div class=\"column match-query\"><!> <div class=\"columns is-multiline match-items is-centered\"><!></div> <!> <!></div> <div class=\"column columns match-results\"></div></div>");
function MatchRow(e, n) {
	push(n, !0);
	let i = /* @__PURE__ */ user_derived(() => n.group_by_source ? n.matches.matches_by_document : n.matches.matches.map((e) => [e])), a = /* @__PURE__ */ state(!1), o = /* @__PURE__ */ state(null);
	function s() {
		setTimeout(() => {
			get$2(o) && get$2(o).scrollIntoView({
				behavior: "smooth",
				block: "center"
			});
		}, 500);
	}
	user_effect(() => {
		n.highlit && untrack(s);
	});
	var c = root$11();
	let l;
	var u = child(c), d = child(u);
	ImageInfos(d, { get image() {
		return n.matches.query;
	} });
	var f = sibling(d, 2), p = child(f);
	ImageFileDisplay(p, {
		get image() {
			return n.matches.query;
		},
		disable_pin: !0
	}), reset(f);
	var m = sibling(f, 2), h = (e) => {
		var n = root_1$8(), i = child(n);
		i.__click = [on_click$1, a];
		var o = child(i, !0);
		reset(i), reset(n), template_effect(() => set_text(o, get$2(a) ? "Show only 5 best" : "Show all results")), append(e, n);
	};
	if_block(m, (e) => {
		get$2(i).length > 5 && e(h);
	});
	var g = sibling(m, 2);
	MatchCSVExporter(g, {
		get matches() {
			return n.matches;
		},
		get threshold() {
			return n.threshold;
		}
	}), reset(u);
	var _ = sibling(u, 2);
	each(_, 21, () => get$2(i).slice(0, get$2(a) ? get$2(i).length : 5), index, (e, i) => {
		MatchGroup(e, {
			get matches() {
				return get$2(i);
			},
			get grouped() {
				return n.group_by_source;
			},
			get threshold() {
				return n.threshold;
			},
			get wref() {
				return n.matches.query;
			}
		});
	}), reset(_), reset(c), bind_this(c, (e) => set(o, e), () => get$2(o)), template_effect((e) => l = set_class(c, 1, "match-row columns", null, l, e), [() => ({ highlit: n.highlit })]), append(e, c), pop();
}
delegate(["click"]);
function matchesHRef(e) {
	return `#match-${e.id}`;
}
var root_3$3 = /* @__PURE__ */ from_html("<option> </option>"), root_2$5 = /* @__PURE__ */ from_html("<div class=\"toolbar-item\"><label class=\"checkbox is-normal\"><input type=\"checkbox\" class=\"checkbox mr-2\" name=\"group-by-source\" id=\"group-by-source\"/> Group by source document</label></div> <div class=\"toolbar-item\"><label class=\"label\">Filter by document:</label> <div class=\"field is-narrow\"><div class=\"select is-fullwidth\"><select><option>All</option><!></select></div></div></div>", 1), root$10 = /* @__PURE__ */ from_html("<div class=\"toolbar\"><div class=\"toolbar-content\"><!> <div class=\"toolbar-item\"><label class=\"label is-expanded\">Similarity threshold:</label> <div class=\"field\"><input type=\"range\"/> <span class=\"m-3\"> </span></div></div> <!></div> <!></div> <div class=\"viewer-table\"></div> <div class=\"mt-4\"></div> <!>", 1);
function SimBrowser(e, n) {
	push(n, !0);
	let i = /* @__PURE__ */ state(!1), a = /* @__PURE__ */ state(null), o = /* @__PURE__ */ user_derived(() => get$2(a) ? n.matches.filter((e) => e.query.document === get$2(a)) : n.matches), s = /* @__PURE__ */ state(1), c = /* @__PURE__ */ user_derived(() => Math.ceil(n.matches.length / 30)), l = /* @__PURE__ */ user_derived(() => Math.min(...n.matches.map((e) => Math.min(...e.matches.map((e) => e.similarity))))), u = /* @__PURE__ */ user_derived(() => Math.max(...n.matches.map((e) => Math.max(...e.matches.map((e) => e.similarity))))), d = /* @__PURE__ */ state(get$2(l) + .5 * (get$2(u) - get$2(l))), f = /* @__PURE__ */ state(null);
	function p() {
		let e = window.location.hash;
		if (e.startsWith("#match-")) {
			let i = e.slice(7);
			set(f, i, !0);
			let a = n.matches.findIndex((e) => e.query.id === i);
			a !== -1 && set(s, Math.floor(a / 30) + 1);
			return;
		}
		set(f, null), e.startsWith("#page-") && set(s, parseInt(e.slice(6)), !0);
	}
	user_effect(() => (window.addEventListener("hashchange", p), p(), () => {
		window.removeEventListener("hashchange", p);
	}));
	var m = root$10(), h = first_child(m), g = child(h), _ = child(g), v = (e) => {
		var i = comment(), a = first_child(i);
		snippet(a, () => n.extra_toolbar_items), append(e, i);
	};
	if_block(_, (e) => {
		n.extra_toolbar_items && e(v);
	});
	var y = sibling(_, 2), b = sibling(child(y), 2), x = child(b);
	remove_input_defaults(x), set_attribute(x, "step", .01);
	var S = sibling(x, 2), C = child(S, !0);
	reset(S), reset(b), reset(y);
	var w = sibling(y, 2), T = (e) => {
		var o = root_2$5(), s = first_child(o), c = child(s), l = child(c);
		remove_input_defaults(l), next(), reset(c), reset(s);
		var u = sibling(s, 2), d = sibling(child(u), 2), f = child(d), p = child(f), m = child(p);
		m.value = m.__value = "";
		var h = sibling(m);
		each(h, 17, () => n.index.sources, (e) => e.uid, (e, n) => {
			var i = root_3$3(), a = child(i, !0);
			reset(i);
			var o = {};
			template_effect(() => {
				set_text(a, get$2(n).name || get$2(n).uid), o !== (o = get$2(n).uid) && (i.value = (i.__value = get$2(n).uid) ?? "");
			}), append(e, i);
		}), reset(p), reset(f), reset(d), reset(u), bind_checked(l, () => get$2(i), (e) => set(i, e)), bind_select_value(p, () => get$2(a)?.uid || "", (e) => set(a, n.index.sources.find((n) => n.uid === e) || null, !0)), append(e, o);
	};
	if_block(w, (e) => {
		n.index.sources.length > 1 && e(T);
	}), reset(g);
	var E = sibling(g, 2);
	Pagination_1(E, {
		get total_pages() {
			return get$2(c);
		},
		get page() {
			return get$2(s);
		},
		set page(e) {
			set(s, e, !0);
		}
	}), reset(h);
	var D = sibling(h, 2);
	each(D, 21, () => get$2(o).slice((get$2(s) - 1) * 30, get$2(s) * 30), (e) => e.query.id, (e, n, a, o) => {
		{
			let a = /* @__PURE__ */ user_derived(() => get$2(f) == get$2(n).query.id);
			MatchRow(e, {
				get matches() {
					return get$2(n);
				},
				get group_by_source() {
					return get$2(i);
				},
				get highlit() {
					return get$2(a);
				},
				get threshold() {
					return get$2(d);
				}
			});
		}
	}), reset(D);
	var O = sibling(D, 4);
	Pagination_1(O, {
		get total_pages() {
			return get$2(c);
		},
		get page() {
			return get$2(s);
		},
		set page(e) {
			set(s, e, !0);
		}
	}), template_effect((e) => {
		set_attribute(x, "min", get$2(l)), set_attribute(x, "max", get$2(u)), set_text(C, e);
	}, [() => get$2(d).toPrecision(4)]), bind_value(x, () => get$2(d), (e) => set(d, e)), append(e, m), pop();
}
var root_1$7 = /* @__PURE__ */ from_html("<p>Loading...</p>"), root_4$3 = /* @__PURE__ */ from_html("<div class=\"toolbar-item toolbar-btn\"><!></div>"), root_6$1 = /* @__PURE__ */ from_html("<div class=\"toolbar-item toolbar-btn\"><!></div>"), root_2$4 = /* @__PURE__ */ from_html("<!> <!>", 1), root$9 = /* @__PURE__ */ from_html("<!> <!>", 1);
function SimilarityApp(e, n) {
	push(n, !0);
	let i = prop(n, "mode", 7), a = /* @__PURE__ */ state({
		sources: [],
		images: [],
		transpositions: []
	}), o = /* @__PURE__ */ state([]), s = /* @__PURE__ */ state(!0), c = /* @__PURE__ */ state(i() == "cluster"), l = proxy({});
	setMagnifyingContext(l);
	let u = new NameProvider();
	setNameProvider(u), onMount(() => {
		Promise.all([fetch(n.source_index_url).then((e) => e.json()), fetch(n.sim_matrix_url).then((e) => e.json())]).then(([e, n]) => {
			let i = unserializeSimilarityMatrix(n, e);
			((e) => {
				var n = to_array(e, 2);
				set(a, n[0]), set(o, n[1]);
			})([i.index, i.matches]), u.fetchIIIFNames(get$2(a).sources), set(s, !1);
		}), n.metadata_url && n.metadata_url !== "" && n.metadata_url != "None" && u.fetchMetadataNames(n.metadata_url);
	}), user_effect(() => {
		i() == "cluster" && set(c, !0);
	});
	var d = root$9(), f = first_child(d), p = (e) => {
		var n = root_1$7();
		append(e, n);
	}, m = (e) => {
		var n = root_2$4(), s = first_child(n), l = (e) => {
			{
				let n = (e) => {
					var n = root_4$3(), a = child(n);
					IconBtn(a, {
						icon: "mdi:folder",
						onclick: () => i("browse"),
						label: "Switch to Browse Mode"
					}), reset(n), append(e, n);
				}, s = /* @__PURE__ */ user_derived(() => i() == "cluster");
				ClusteringTool(e, {
					get index() {
						return get$2(a);
					},
					get matches() {
						return get$2(o);
					},
					get visible() {
						return get$2(s);
					},
					extra_toolbar_items: n,
					$$slots: { extra_toolbar_items: !0 }
				});
			}
		};
		if_block(s, (e) => {
			get$2(c) && e(l);
		});
		var u = sibling(s, 2), d = (e) => {
			SimBrowser(e, {
				get index() {
					return get$2(a);
				},
				get matches() {
					return get$2(o);
				},
				extra_toolbar_items: (e) => {
					var n = root_6$1(), a = child(n);
					IconBtn(a, {
						icon: "mdi:graph",
						onclick: () => i("cluster"),
						label: "Cluster the results"
					}), reset(n), append(e, n);
				},
				$$slots: { extra_toolbar_items: !0 }
			});
		};
		if_block(u, (e) => {
			i() == "browse" && e(d);
		}), append(e, n);
	};
	if_block(f, (e) => {
		get$2(s) ? e(p) : e(m, !1);
	});
	var h = sibling(f, 2);
	ImageMagnifier(h, spread_props(() => l)), append(e, d), pop();
}
var root$8 = /* @__PURE__ */ from_html("<div class=\"image-generic-outer-wrapper svelte-1xln4oe\"><div class=\"image-generic-inner-wrapper\"><div class=\"image-generic-title\"><!></div> <div class=\"image-generic-content mb-1\"><!></div></div></div>");
function ImageGeneric(e, n) {
	push(n, !0);
	let i = /* @__PURE__ */ state(!1);
	user_effect(() => {
		set(i, !0);
	});
	var a = root$8();
	let o;
	var s = child(a), c = child(s), l = child(c);
	ImageInfos(l, {
		get image() {
			return n.image;
		},
		filenameDisplay: !1
	}), reset(c);
	var u = sibling(c, 2), d = child(u);
	ImageFileDisplay(d, { get image() {
		return n.image;
	} }), reset(u), reset(s), reset(a), template_effect((e) => o = set_style(a, "", o, e), [() => ({ opacity: get$2(i) ? 1 : 0 })]), append(e, a), pop();
}
var root_1$6 = /* @__PURE__ */ from_html("<li class=\"column is-one-fourth is-flex\"><!></li>"), root$7 = /* @__PURE__ */ from_html("<ul class=\"columns is-mobile is-multiline list-invisible\"></ul>");
function ImageGenericList(e, n) {
	var i = root$7();
	each(i, 21, () => n.image_array, (e) => e.id, (e, n) => {
		var i = root_1$6(), a = child(i);
		ImageGeneric(a, { get image() {
			return get$2(n);
		} }), reset(i), append(e, i);
	}), reset(i), append(e, i);
}
function toImageInfo(e, n) {
	return {
		id: e.id,
		num: n,
		url: e.url,
		src: e.src
	};
}
function nonIIIFToDatasetContentsItemInterface(e) {
	let n = (e) => e.split("/").slice(0, -1).join("/"), i = Object.values(e)[0];
	return [...new Set(Object.entries(i).map(([e, i]) => n(i.url)))].map((e) => ({
		name: e,
		images: Object.entries(i).filter(([i, a]) => n(a.url) === e).map(([e, n], i) => toImageInfo(n, i))
	}));
}
function IIIFToDatasetContentsItemInterface(e) {
	return Object.entries(e).map(([e, n]) => ({
		name: e,
		images: Object.entries(n).map(([e, n], i) => toImageInfo(n, i))
	}));
}
function toDatasetImageBrowserInterface(e, n) {
	return {
		datasetFormat: n,
		datasetHierarchy: n === "iiif" ? "document" : "folder",
		datasetContents: n === "iiif" ? IIIFToDatasetContentsItemInterface(e) : nonIIIFToDatasetContentsItemInterface(e)
	};
}
var root$6 = /* @__PURE__ */ from_html("<div class=\"dci-wrapper\"><div class=\"dci-title is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center\"><h3 class=\"id-suffix m-0\"> </h3> <!></div> <!></div>");
function DatasetContentItem(e, n) {
	push(n, !0);
	let i = /* @__PURE__ */ state(4), a = () => set(i, get$2(i) === 4 ? n.datasetContentsItem.images.length : 4, !0);
	function o(e) {
		return e.split("/").slice(5).join("/") + "/";
	}
	var s = root$6(), c = child(s), l = child(c), u = child(l);
	reset(l);
	var d = sibling(l, 2), f = (e) => {
		{
			let n = /* @__PURE__ */ user_derived(() => get$2(i) === 4 ? "mdi:plus" : "mdi:minus"), o = /* @__PURE__ */ user_derived(() => get$2(i) === 4 ? "See more items" : "See less items");
			IconBtn(e, {
				get icon() {
					return get$2(n);
				},
				get label() {
					return get$2(o);
				},
				onclick: () => a()
			});
		}
	};
	if_block(d, (e) => {
		n.datasetContentsItem.images.length > 4 && e(f);
	}), reset(c);
	var p = sibling(c, 2);
	{
		let e = /* @__PURE__ */ user_derived(() => n.datasetContentsItem.images.slice(0, get$2(i)));
		ImageGenericList(p, { get image_array() {
			return get$2(e);
		} });
	}
	reset(s), template_effect((e) => set_text(u, `Images in ${e ?? ""}`), [() => n.datasetFormat === "iiif" ? `document #${n.itemIndex + 1}` : `folder ${o(n.datasetContentsItem.name)}`]), append(e, s), pop();
}
var root$5 = /* @__PURE__ */ from_html("<div></div> <!>", 1);
function DatasetImageBrowser(e, n) {
	push(n, !0);
	let i = new NameProvider();
	setNameProvider(i);
	let a = toDatasetImageBrowserInterface(n.dataset, n.datasetFormat), o = proxy({});
	setMagnifyingContext(o), onMount(() => {
		n.metadataURL && n.metadataURL !== "" && n.metadataURL != "None" && i.fetchMetadataNames(n.metadataURL);
	});
	var s = root$5(), c = first_child(s);
	each(c, 21, () => a.datasetContents, index, (e, i, a) => {
		DatasetContentItem(e, {
			get datasetContentsItem() {
				return get$2(i);
			},
			get datasetFormat() {
				return n.datasetFormat;
			},
			itemIndex: a
		});
	}), reset(c);
	var l = sibling(c, 2);
	ImageMagnifier(l, {}), append(e, s), pop();
}
var root_1$5 = /* @__PURE__ */ from_html("<p>Loading...</p>"), root$4 = /* @__PURE__ */ from_html("<!> <!>", 1);
function SearchResults(e, n) {
	push(n, !0);
	let i = /* @__PURE__ */ state(proxy({
		sources: [],
		images: [],
		transpositions: []
	})), a = /* @__PURE__ */ state(proxy({
		sources: [],
		images: [],
		transpositions: []
	})), o = /* @__PURE__ */ state(proxy([])), s = /* @__PURE__ */ state(!0), c = proxy({});
	setMagnifyingContext(c);
	let l = new NameProvider();
	setNameProvider(l), onMount(() => {
		Promise.all([fetch(n.source_index_url).then((e) => e.json()), fetch(n.query_result_url).then((e) => e.json())]).then(([e, n]) => {
			console.log(e, n);
			let c = unserializeSearchResults(e, n);
			((e) => {
				var n = to_array(e, 3);
				set(i, n[0], !0), set(a, n[1], !0), set(o, n[2], !0);
			})([
				c.source_index,
				c.query_index,
				c.matches
			]), l.fetchIIIFNames(get$2(i).sources), set(s, !1);
		}), n.metadata_url && n.metadata_url !== "" && n.metadata_url != "None" && l.fetchMetadataNames(n.metadata_url);
	});
	var u = root$4(), d = first_child(u), f = (e) => {
		var n = root_1$5();
		append(e, n);
	}, p = (e) => {
		SimBrowser(e, {
			get index() {
				return get$2(i);
			},
			get matches() {
				return get$2(o);
			}
		});
	};
	if_block(d, (e) => {
		get$2(s) ? e(f) : e(p, !1);
	});
	var m = sibling(d, 2);
	ImageMagnifier(m, spread_props(() => c)), append(e, u), pop();
}
function startEditing(e, n) {
	set(n, !0);
}
var root_1$4 = /* @__PURE__ */ from_html("<span contenteditable=\"true\" role=\"textbox\" tabindex=\"0\"></span>"), root_2$3 = /* @__PURE__ */ from_html("<span> </span>");
function EditableSpan(e, n) {
	push(n, !0);
	let i = prop(n, "value", 15), a = prop(n, "placeholder", 7), o = prop(n, "required", 3, !1), s = prop(n, "editable", 3, !0), c = /* @__PURE__ */ state(proxy(n.editing || !1)), l = /* @__PURE__ */ state(null), u = /* @__PURE__ */ state(proxy(i()));
	user_effect(() => {
		set(u, i(), !0);
	}), o() && a("*" + a());
	function d() {
		i((i() || "").trim()), set(u, (get$2(u) || "").trim(), !0);
	}
	function f(e) {
		e.key === "Enter" && (e.preventDefault(), set(c, !1), n.onenter && n.onenter());
	}
	function p() {
		set(c, !1), d(), i(get$2(u)), n.onblur && n.onblur();
	}
	function m() {
		set(c, !0);
	}
	let h = /* @__PURE__ */ user_derived(() => !get$2(u) || get$2(u).trim() == "");
	user_effect(() => {
		n.focus && get$2(l) && setTimeout(() => {
			if (!get$2(l)) return;
			let e = window.getSelection();
			if (e) {
				let n = document.createRange();
				n.setStart(get$2(l), 0), n.collapse(!0), e.removeAllRanges(), e.addRange(n);
			}
		}, 100);
	});
	var g = comment(), _ = first_child(g), v = (e) => {
		var i = root_1$4();
		let s;
		i.__click = [startEditing, c], bind_this(i, (e) => set(l, e), () => get$2(l)), template_effect((e) => {
			s = set_class(i, 1, clsx$1(n.class), "svelte-1vvgwho", s, e), set_attribute(i, "placeholder", a()), set_attribute(i, "spellcheck", get$2(c));
		}, [() => ({
			"editable-clickable": !get$2(c),
			empty: get$2(h),
			required: o()
		})]), event("blur", i, p), event("focus", i, m), event("keypress", i, f), bind_content_editable("innerText", i, () => get$2(u), (e) => set(u, e)), append(e, i);
	}, y = (e) => {
		var i = root_2$3();
		let s;
		var c = child(i, !0);
		reset(i), template_effect((e) => {
			s = set_class(i, 1, clsx$1(n.class), "svelte-1vvgwho", s, e), set_attribute(i, "placeholder", a()), set_text(c, get$2(u));
		}, [() => ({
			empty: get$2(h),
			required: o()
		})]), append(e, i);
	};
	if_block(_, (e) => {
		s() ? e(v) : e(y, !1);
	}), append(e, g), pop();
}
delegate(["click"]);
var on_click = (e, n) => {
	n.onChange(""), e.preventDefault();
}, root$3 = /* @__PURE__ */ from_html("<div><!> <div class=\"actions\"><button class=\"delete\"></button></div></div>");
function IIIFURLItem(e, n) {
	push(n, !0);
	let i = prop(n, "url", 7), a = () => {
		console.log(i()), n.onChange(i());
	}, o = /* @__PURE__ */ user_derived(() => i().startsWith("http://") || i().startsWith("https://"));
	var s = root$3();
	let c;
	var l = child(s);
	EditableSpan(l, {
		placeholder: "URL",
		onblur: a,
		onenter: a,
		class: "urllist-item-content",
		get value() {
			return i();
		},
		set value(e) {
			i(e);
		}
	});
	var u = sibling(l, 2), d = child(u);
	d.__click = [on_click, n], reset(u), reset(s), template_effect((e) => c = set_class(s, 1, "urllist-item mb-2 svelte-95nsll", null, c, e), [() => ({ valid: get$2(o) })]), append(e, s), pop();
}
delegate(["click"]);
var root$2 = /* @__PURE__ */ from_html("<div><!> <input class=\"input\" type=\"text\" placeholder=\"Type or paste URLs to append to the list above\"/></div>");
function IIIFURLListInput(e, n) {
	push(n, !0);
	let i = prop(n, "field", 7), a = prop(n, "value", 31, () => proxy([]));
	onMount(() => {
		a(JSON.parse(i().value));
	});
	function o(e) {
		return (n) => {
			n == "" ? a().splice(e, 1) : a(a()[e] = [n], !0), i().value = JSON.stringify(a());
		};
	}
	function s(e) {
		e.key == "Enter" && (e.preventDefault(), e.currentTarget.value != "" && (a().push([e.currentTarget.value.trim()]), i().value = JSON.stringify(a())), e.currentTarget.value = "");
	}
	function c(e) {
		let n = (e.clipboardData?.getData("text/plain"))?.split(/\s+/);
		n && (a().push(...n.map((e) => [e.trim()]).filter((e) => e[0] != "")), i().value = JSON.stringify(a()));
	}
	var l = root$2(), u = child(l);
	each(u, 17, a, index, (e, n, i) => {
		{
			let a = /* @__PURE__ */ user_derived(() => o(i));
			IIIFURLItem(e, {
				get url() {
					return get$2(n)[0];
				},
				get onChange() {
					return get$2(a);
				}
			});
		}
	});
	var d = sibling(u, 2);
	d.__keydown = s, reset(l), event("paste", d, c), append(e, l), pop();
}
delegate(["keydown"]);
var import_jszip_min = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, n) => {
	/*!
	
	JSZip v3.10.1 - A JavaScript class for generating and reading zip files
	<http://stuartk.com/jszip>
	
	(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
	Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.
	
	JSZip uses the library pako released under the MIT license :
	https://github.com/nodeca/pako/blob/main/LICENSE
	*/
	(function(i) {
		typeof exports == "object" && n !== void 0 ? n.exports = i() : typeof define == "function" && define.amd ? define([], i) : (typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : this).JSZip = i();
	})(function() {
		return function e(n, i, a) {
			function o(c, l) {
				if (!i[c]) {
					if (!n[c]) {
						var u = typeof __require == "function" && __require;
						if (!l && u) return u(c, !0);
						if (s) return s(c, !0);
						var f = /* @__PURE__ */ Error("Cannot find module '" + c + "'");
						throw f.code = "MODULE_NOT_FOUND", f;
					}
					var p = i[c] = { exports: {} };
					n[c][0].call(p.exports, function(e) {
						var i = n[c][1][e];
						return o(i || e);
					}, p, p.exports, e, n, i, a);
				}
				return i[c].exports;
			}
			for (var s = typeof __require == "function" && __require, c = 0; c < a.length; c++) o(a[c]);
			return o;
		}({
			1: [function(e, n, i) {
				var a = e("./utils"), o = e("./support"), s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
				i.encode = function(e) {
					for (var n, i, o, c, l, u, d, f = [], p = 0, m = e.length, h = m, g = a.getTypeOf(e) !== "string"; p < e.length;) h = m - p, o = g ? (n = e[p++], i = p < m ? e[p++] : 0, p < m ? e[p++] : 0) : (n = e.charCodeAt(p++), i = p < m ? e.charCodeAt(p++) : 0, p < m ? e.charCodeAt(p++) : 0), c = n >> 2, l = (3 & n) << 4 | i >> 4, u = 1 < h ? (15 & i) << 2 | o >> 6 : 64, d = 2 < h ? 63 & o : 64, f.push(s.charAt(c) + s.charAt(l) + s.charAt(u) + s.charAt(d));
					return f.join("");
				}, i.decode = function(e) {
					var n, i, a, c, l, u, d = 0, f = 0, p = "data:";
					if (e.substr(0, p.length) === p) throw Error("Invalid base64 input, it looks like a data url.");
					var m, h = 3 * (e = e.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
					if (e.charAt(e.length - 1) === s.charAt(64) && h--, e.charAt(e.length - 2) === s.charAt(64) && h--, h % 1 != 0) throw Error("Invalid base64 input, bad content length.");
					for (m = o.uint8array ? new Uint8Array(0 | h) : Array(0 | h); d < e.length;) n = s.indexOf(e.charAt(d++)) << 2 | (c = s.indexOf(e.charAt(d++))) >> 4, i = (15 & c) << 4 | (l = s.indexOf(e.charAt(d++))) >> 2, a = (3 & l) << 6 | (u = s.indexOf(e.charAt(d++))), m[f++] = n, l !== 64 && (m[f++] = i), u !== 64 && (m[f++] = a);
					return m;
				};
			}, {
				"./support": 30,
				"./utils": 32
			}],
			2: [function(e, n, i) {
				var a = e("./external"), o = e("./stream/DataWorker"), s = e("./stream/Crc32Probe"), c = e("./stream/DataLengthProbe");
				function l(e, n, i, a, o) {
					this.compressedSize = e, this.uncompressedSize = n, this.crc32 = i, this.compression = a, this.compressedContent = o;
				}
				l.prototype = {
					getContentWorker: function() {
						var e = new o(a.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new c("data_length")), n = this;
						return e.on("end", function() {
							if (this.streamInfo.data_length !== n.uncompressedSize) throw Error("Bug : uncompressed data size mismatch");
						}), e;
					},
					getCompressedWorker: function() {
						return new o(a.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
					}
				}, l.createWorkerFrom = function(e, n, i) {
					return e.pipe(new s()).pipe(new c("uncompressedSize")).pipe(n.compressWorker(i)).pipe(new c("compressedSize")).withStreamInfo("compression", n);
				}, n.exports = l;
			}, {
				"./external": 6,
				"./stream/Crc32Probe": 25,
				"./stream/DataLengthProbe": 26,
				"./stream/DataWorker": 27
			}],
			3: [function(e, n, i) {
				var a = e("./stream/GenericWorker");
				i.STORE = {
					magic: "\0\0",
					compressWorker: function() {
						return new a("STORE compression");
					},
					uncompressWorker: function() {
						return new a("STORE decompression");
					}
				}, i.DEFLATE = e("./flate");
			}, {
				"./flate": 7,
				"./stream/GenericWorker": 28
			}],
			4: [function(e, n, i) {
				var a = e("./utils"), o = function() {
					for (var e, n = [], i = 0; i < 256; i++) {
						e = i;
						for (var a = 0; a < 8; a++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
						n[i] = e;
					}
					return n;
				}();
				n.exports = function(e, n) {
					return e !== void 0 && e.length ? a.getTypeOf(e) === "string" ? function(e, n, i, a) {
						var s = o, c = a + i;
						e ^= -1;
						for (var l = a; l < c; l++) e = e >>> 8 ^ s[255 & (e ^ n.charCodeAt(l))];
						return -1 ^ e;
					}(0 | n, e, e.length, 0) : function(e, n, i, a) {
						var s = o, c = a + i;
						e ^= -1;
						for (var l = a; l < c; l++) e = e >>> 8 ^ s[255 & (e ^ n[l])];
						return -1 ^ e;
					}(0 | n, e, e.length, 0) : 0;
				};
			}, { "./utils": 32 }],
			5: [function(e, n, i) {
				i.base64 = !1, i.binary = !1, i.dir = !1, i.createFolders = !0, i.date = null, i.compression = null, i.compressionOptions = null, i.comment = null, i.unixPermissions = null, i.dosPermissions = null;
			}, {}],
			6: [function(e, n, i) {
				var a = null;
				a = typeof Promise < "u" ? Promise : e("lie"), n.exports = { Promise: a };
			}, { lie: 37 }],
			7: [function(e, n, i) {
				var a = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", o = e("pako"), s = e("./utils"), c = e("./stream/GenericWorker"), l = a ? "uint8array" : "array";
				function u(e, n) {
					c.call(this, "FlateWorker/" + e), this._pako = null, this._pakoAction = e, this._pakoOptions = n, this.meta = {};
				}
				i.magic = "\b\0", s.inherits(u, c), u.prototype.processChunk = function(e) {
					this.meta = e.meta, this._pako === null && this._createPako(), this._pako.push(s.transformTo(l, e.data), !1);
				}, u.prototype.flush = function() {
					c.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
				}, u.prototype.cleanUp = function() {
					c.prototype.cleanUp.call(this), this._pako = null;
				}, u.prototype._createPako = function() {
					this._pako = new o[this._pakoAction]({
						raw: !0,
						level: this._pakoOptions.level || -1
					});
					var e = this;
					this._pako.onData = function(n) {
						e.push({
							data: n,
							meta: e.meta
						});
					};
				}, i.compressWorker = function(e) {
					return new u("Deflate", e);
				}, i.uncompressWorker = function() {
					return new u("Inflate", {});
				};
			}, {
				"./stream/GenericWorker": 28,
				"./utils": 32,
				pako: 38
			}],
			8: [function(e, n, i) {
				function a(e, n) {
					var i, a = "";
					for (i = 0; i < n; i++) a += String.fromCharCode(255 & e), e >>>= 8;
					return a;
				}
				function o(e, n, i, o, c, f) {
					var p, m, h = e.file, g = e.compression, _ = f !== l.utf8encode, v = s.transformTo("string", f(h.name)), y = s.transformTo("string", l.utf8encode(h.name)), b = h.comment, x = s.transformTo("string", f(b)), S = s.transformTo("string", l.utf8encode(b)), C = y.length !== h.name.length, w = S.length !== b.length, T = "", E = "", D = "", O = h.dir, k = h.date, A = {
						crc32: 0,
						compressedSize: 0,
						uncompressedSize: 0
					};
					n && !i || (A.crc32 = e.crc32, A.compressedSize = e.compressedSize, A.uncompressedSize = e.uncompressedSize);
					var j = 0;
					n && (j |= 8), _ || !C && !w || (j |= 2048);
					var M = 0, N = 0;
					O && (M |= 16), c === "UNIX" ? (N = 798, M |= function(e, n) {
						var i = e;
						return e || (i = n ? 16893 : 33204), (65535 & i) << 16;
					}(h.unixPermissions, O)) : (N = 20, M |= function(e) {
						return 63 & (e || 0);
					}(h.dosPermissions)), p = k.getUTCHours(), p <<= 6, p |= k.getUTCMinutes(), p <<= 5, p |= k.getUTCSeconds() / 2, m = k.getUTCFullYear() - 1980, m <<= 4, m |= k.getUTCMonth() + 1, m <<= 5, m |= k.getUTCDate(), C && (E = a(1, 1) + a(u(v), 4) + y, T += "up" + a(E.length, 2) + E), w && (D = a(1, 1) + a(u(x), 4) + S, T += "uc" + a(D.length, 2) + D);
					var P = "";
					return P += "\n\0", P += a(j, 2), P += g.magic, P += a(p, 2), P += a(m, 2), P += a(A.crc32, 4), P += a(A.compressedSize, 4), P += a(A.uncompressedSize, 4), P += a(v.length, 2), P += a(T.length, 2), {
						fileRecord: d.LOCAL_FILE_HEADER + P + v + T,
						dirRecord: d.CENTRAL_FILE_HEADER + a(N, 2) + P + a(x.length, 2) + "\0\0\0\0" + a(M, 4) + a(o, 4) + v + T + x
					};
				}
				var s = e("../utils"), c = e("../stream/GenericWorker"), l = e("../utf8"), u = e("../crc32"), d = e("../signature");
				function f(e, n, i, a) {
					c.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = n, this.zipPlatform = i, this.encodeFileName = a, this.streamFiles = e, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
				}
				s.inherits(f, c), f.prototype.push = function(e) {
					var n = e.meta.percent || 0, i = this.entriesCount, a = this._sources.length;
					this.accumulate ? this.contentBuffer.push(e) : (this.bytesWritten += e.data.length, c.prototype.push.call(this, {
						data: e.data,
						meta: {
							currentFile: this.currentFile,
							percent: i ? (n + 100 * (i - a - 1)) / i : 100
						}
					}));
				}, f.prototype.openedSource = function(e) {
					this.currentSourceOffset = this.bytesWritten, this.currentFile = e.file.name;
					var n = this.streamFiles && !e.file.dir;
					if (n) {
						var i = o(e, n, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
						this.push({
							data: i.fileRecord,
							meta: { percent: 0 }
						});
					} else this.accumulate = !0;
				}, f.prototype.closedSource = function(e) {
					this.accumulate = !1;
					var n = this.streamFiles && !e.file.dir, i = o(e, n, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
					if (this.dirRecords.push(i.dirRecord), n) this.push({
						data: function(e) {
							return d.DATA_DESCRIPTOR + a(e.crc32, 4) + a(e.compressedSize, 4) + a(e.uncompressedSize, 4);
						}(e),
						meta: { percent: 100 }
					});
					else for (this.push({
						data: i.fileRecord,
						meta: { percent: 0 }
					}); this.contentBuffer.length;) this.push(this.contentBuffer.shift());
					this.currentFile = null;
				}, f.prototype.flush = function() {
					for (var e = this.bytesWritten, n = 0; n < this.dirRecords.length; n++) this.push({
						data: this.dirRecords[n],
						meta: { percent: 100 }
					});
					var i = this.bytesWritten - e, o = function(e, n, i, o, c) {
						var l = s.transformTo("string", c(o));
						return d.CENTRAL_DIRECTORY_END + "\0\0\0\0" + a(e, 2) + a(e, 2) + a(n, 4) + a(i, 4) + a(l.length, 2) + l;
					}(this.dirRecords.length, i, e, this.zipComment, this.encodeFileName);
					this.push({
						data: o,
						meta: { percent: 100 }
					});
				}, f.prototype.prepareNextSource = function() {
					this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
				}, f.prototype.registerPrevious = function(e) {
					this._sources.push(e);
					var n = this;
					return e.on("data", function(e) {
						n.processChunk(e);
					}), e.on("end", function() {
						n.closedSource(n.previous.streamInfo), n._sources.length ? n.prepareNextSource() : n.end();
					}), e.on("error", function(e) {
						n.error(e);
					}), this;
				}, f.prototype.resume = function() {
					return !!c.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
				}, f.prototype.error = function(e) {
					var n = this._sources;
					if (!c.prototype.error.call(this, e)) return !1;
					for (var i = 0; i < n.length; i++) try {
						n[i].error(e);
					} catch {}
					return !0;
				}, f.prototype.lock = function() {
					c.prototype.lock.call(this);
					for (var e = this._sources, n = 0; n < e.length; n++) e[n].lock();
				}, n.exports = f;
			}, {
				"../crc32": 4,
				"../signature": 23,
				"../stream/GenericWorker": 28,
				"../utf8": 31,
				"../utils": 32
			}],
			9: [function(e, n, i) {
				var a = e("../compressions"), o = e("./ZipFileWorker");
				i.generateWorker = function(e, n, i) {
					var s = new o(n.streamFiles, i, n.platform, n.encodeFileName), c = 0;
					try {
						e.forEach(function(e, i) {
							c++;
							var o = function(e, n) {
								var i = e || n, o = a[i];
								if (!o) throw Error(i + " is not a valid compression method !");
								return o;
							}(i.options.compression, n.compression), l = i.options.compressionOptions || n.compressionOptions || {}, u = i.dir, d = i.date;
							i._compressWorker(o, l).withStreamInfo("file", {
								name: e,
								dir: u,
								date: d,
								comment: i.comment || "",
								unixPermissions: i.unixPermissions,
								dosPermissions: i.dosPermissions
							}).pipe(s);
						}), s.entriesCount = c;
					} catch (e) {
						s.error(e);
					}
					return s;
				};
			}, {
				"../compressions": 3,
				"./ZipFileWorker": 8
			}],
			10: [function(e, n, i) {
				function a() {
					if (!(this instanceof a)) return new a();
					if (arguments.length) throw Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
					this.files = Object.create(null), this.comment = null, this.root = "", this.clone = function() {
						var e = new a();
						for (var n in this) typeof this[n] != "function" && (e[n] = this[n]);
						return e;
					};
				}
				(a.prototype = e("./object")).loadAsync = e("./load"), a.support = e("./support"), a.defaults = e("./defaults"), a.version = "3.10.1", a.loadAsync = function(e, n) {
					return new a().loadAsync(e, n);
				}, a.external = e("./external"), n.exports = a;
			}, {
				"./defaults": 5,
				"./external": 6,
				"./load": 11,
				"./object": 15,
				"./support": 30
			}],
			11: [function(e, n, i) {
				var a = e("./utils"), o = e("./external"), s = e("./utf8"), c = e("./zipEntries"), l = e("./stream/Crc32Probe"), u = e("./nodejsUtils");
				function d(e) {
					return new o.Promise(function(n, i) {
						var a = e.decompressed.getContentWorker().pipe(new l());
						a.on("error", function(e) {
							i(e);
						}).on("end", function() {
							a.streamInfo.crc32 === e.decompressed.crc32 ? n() : i(/* @__PURE__ */ Error("Corrupted zip : CRC32 mismatch"));
						}).resume();
					});
				}
				n.exports = function(e, n) {
					var i = this;
					return n = a.extend(n || {}, {
						base64: !1,
						checkCRC32: !1,
						optimizedBinaryString: !1,
						createFolders: !1,
						decodeFileName: s.utf8decode
					}), u.isNode && u.isStream(e) ? o.Promise.reject(/* @__PURE__ */ Error("JSZip can't accept a stream when loading a zip file.")) : a.prepareContent("the loaded zip file", e, !0, n.optimizedBinaryString, n.base64).then(function(e) {
						var i = new c(n);
						return i.load(e), i;
					}).then(function(e) {
						var i = [o.Promise.resolve(e)], a = e.files;
						if (n.checkCRC32) for (var s = 0; s < a.length; s++) i.push(d(a[s]));
						return o.Promise.all(i);
					}).then(function(e) {
						for (var o = e.shift(), s = o.files, c = 0; c < s.length; c++) {
							var l = s[c], u = l.fileNameStr, d = a.resolve(l.fileNameStr);
							i.file(d, l.decompressed, {
								binary: !0,
								optimizedBinaryString: !0,
								date: l.date,
								dir: l.dir,
								comment: l.fileCommentStr.length ? l.fileCommentStr : null,
								unixPermissions: l.unixPermissions,
								dosPermissions: l.dosPermissions,
								createFolders: n.createFolders
							}), l.dir || (i.file(d).unsafeOriginalName = u);
						}
						return o.zipComment.length && (i.comment = o.zipComment), i;
					});
				};
			}, {
				"./external": 6,
				"./nodejsUtils": 14,
				"./stream/Crc32Probe": 25,
				"./utf8": 31,
				"./utils": 32,
				"./zipEntries": 33
			}],
			12: [function(e, n, i) {
				var a = e("../utils"), o = e("../stream/GenericWorker");
				function s(e, n) {
					o.call(this, "Nodejs stream input adapter for " + e), this._upstreamEnded = !1, this._bindStream(n);
				}
				a.inherits(s, o), s.prototype._bindStream = function(e) {
					var n = this;
					(this._stream = e).pause(), e.on("data", function(e) {
						n.push({
							data: e,
							meta: { percent: 0 }
						});
					}).on("error", function(e) {
						n.isPaused ? this.generatedError = e : n.error(e);
					}).on("end", function() {
						n.isPaused ? n._upstreamEnded = !0 : n.end();
					});
				}, s.prototype.pause = function() {
					return !!o.prototype.pause.call(this) && (this._stream.pause(), !0);
				}, s.prototype.resume = function() {
					return !!o.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
				}, n.exports = s;
			}, {
				"../stream/GenericWorker": 28,
				"../utils": 32
			}],
			13: [function(e, n, i) {
				var a = e("readable-stream").Readable;
				function o(e, n, i) {
					a.call(this, n), this._helper = e;
					var o = this;
					e.on("data", function(e, n) {
						o.push(e) || o._helper.pause(), i && i(n);
					}).on("error", function(e) {
						o.emit("error", e);
					}).on("end", function() {
						o.push(null);
					});
				}
				e("../utils").inherits(o, a), o.prototype._read = function() {
					this._helper.resume();
				}, n.exports = o;
			}, {
				"../utils": 32,
				"readable-stream": 16
			}],
			14: [function(e, n, i) {
				n.exports = {
					isNode: typeof Buffer < "u",
					newBufferFrom: function(e, n) {
						if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(e, n);
						if (typeof e == "number") throw Error("The \"data\" argument must not be a number");
						return new Buffer(e, n);
					},
					allocBuffer: function(e) {
						if (Buffer.alloc) return Buffer.alloc(e);
						var n = new Buffer(e);
						return n.fill(0), n;
					},
					isBuffer: function(e) {
						return Buffer.isBuffer(e);
					},
					isStream: function(e) {
						return e && typeof e.on == "function" && typeof e.pause == "function" && typeof e.resume == "function";
					}
				};
			}, {}],
			15: [function(e, n, i) {
				function a(e, n, i) {
					var a, o = s.getTypeOf(n), l = s.extend(i || {}, u);
					l.date = l.date || /* @__PURE__ */ new Date(), l.compression !== null && (l.compression = l.compression.toUpperCase()), typeof l.unixPermissions == "string" && (l.unixPermissions = parseInt(l.unixPermissions, 8)), l.unixPermissions && 16384 & l.unixPermissions && (l.dir = !0), l.dosPermissions && 16 & l.dosPermissions && (l.dir = !0), l.dir && (e = _(e)), l.createFolders && (a = g(e)) && v.call(this, a, !0);
					var p = o === "string" && !1 === l.binary && !1 === l.base64;
					i && i.binary !== void 0 || (l.binary = !p), (n instanceof d && n.uncompressedSize === 0 || l.dir || !n || n.length === 0) && (l.base64 = !1, l.binary = !0, n = "", l.compression = "STORE", o = "string");
					var y = null;
					y = n instanceof d || n instanceof c ? n : m.isNode && m.isStream(n) ? new h(e, n) : s.prepareContent(e, n, l.binary, l.optimizedBinaryString, l.base64);
					var b = new f(e, y, l);
					this.files[e] = b;
				}
				var o = e("./utf8"), s = e("./utils"), c = e("./stream/GenericWorker"), l = e("./stream/StreamHelper"), u = e("./defaults"), d = e("./compressedObject"), f = e("./zipObject"), p = e("./generate"), m = e("./nodejsUtils"), h = e("./nodejs/NodejsStreamInputAdapter"), g = function(e) {
					e.slice(-1) === "/" && (e = e.substring(0, e.length - 1));
					var n = e.lastIndexOf("/");
					return 0 < n ? e.substring(0, n) : "";
				}, _ = function(e) {
					return e.slice(-1) !== "/" && (e += "/"), e;
				}, v = function(e, n) {
					return n = n === void 0 ? u.createFolders : n, e = _(e), this.files[e] || a.call(this, e, null, {
						dir: !0,
						createFolders: n
					}), this.files[e];
				};
				function y(e) {
					return Object.prototype.toString.call(e) === "[object RegExp]";
				}
				n.exports = {
					load: function() {
						throw Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
					},
					forEach: function(e) {
						var n, i, a;
						for (n in this.files) a = this.files[n], (i = n.slice(this.root.length, n.length)) && n.slice(0, this.root.length) === this.root && e(i, a);
					},
					filter: function(e) {
						var n = [];
						return this.forEach(function(i, a) {
							e(i, a) && n.push(a);
						}), n;
					},
					file: function(e, n, i) {
						if (arguments.length !== 1) return e = this.root + e, a.call(this, e, n, i), this;
						if (y(e)) {
							var o = e;
							return this.filter(function(e, n) {
								return !n.dir && o.test(e);
							});
						}
						var s = this.files[this.root + e];
						return s && !s.dir ? s : null;
					},
					folder: function(e) {
						if (!e) return this;
						if (y(e)) return this.filter(function(n, i) {
							return i.dir && e.test(n);
						});
						var n = this.root + e, i = v.call(this, n), a = this.clone();
						return a.root = i.name, a;
					},
					remove: function(e) {
						e = this.root + e;
						var n = this.files[e];
						if (n ||= (e.slice(-1) !== "/" && (e += "/"), this.files[e]), n && !n.dir) delete this.files[e];
						else for (var i = this.filter(function(n, i) {
							return i.name.slice(0, e.length) === e;
						}), a = 0; a < i.length; a++) delete this.files[i[a].name];
						return this;
					},
					generate: function() {
						throw Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
					},
					generateInternalStream: function(e) {
						var n, i = {};
						try {
							if ((i = s.extend(e || {}, {
								streamFiles: !1,
								compression: "STORE",
								compressionOptions: null,
								type: "",
								platform: "DOS",
								comment: null,
								mimeType: "application/zip",
								encodeFileName: o.utf8encode
							})).type = i.type.toLowerCase(), i.compression = i.compression.toUpperCase(), i.type === "binarystring" && (i.type = "string"), !i.type) throw Error("No output type specified.");
							s.checkSupport(i.type), i.platform !== "darwin" && i.platform !== "freebsd" && i.platform !== "linux" && i.platform !== "sunos" || (i.platform = "UNIX"), i.platform === "win32" && (i.platform = "DOS");
							var a = i.comment || this.comment || "";
							n = p.generateWorker(this, i, a);
						} catch (e) {
							(n = new c("error")).error(e);
						}
						return new l(n, i.type || "string", i.mimeType);
					},
					generateAsync: function(e, n) {
						return this.generateInternalStream(e).accumulate(n);
					},
					generateNodeStream: function(e, n) {
						return (e ||= {}).type || (e.type = "nodebuffer"), this.generateInternalStream(e).toNodejsStream(n);
					}
				};
			}, {
				"./compressedObject": 2,
				"./defaults": 5,
				"./generate": 9,
				"./nodejs/NodejsStreamInputAdapter": 12,
				"./nodejsUtils": 14,
				"./stream/GenericWorker": 28,
				"./stream/StreamHelper": 29,
				"./utf8": 31,
				"./utils": 32,
				"./zipObject": 35
			}],
			16: [function(e, n, i) {
				n.exports = e("stream");
			}, { stream: void 0 }],
			17: [function(e, n, i) {
				var a = e("./DataReader");
				function o(e) {
					a.call(this, e);
					for (var n = 0; n < this.data.length; n++) e[n] = 255 & e[n];
				}
				e("../utils").inherits(o, a), o.prototype.byteAt = function(e) {
					return this.data[this.zero + e];
				}, o.prototype.lastIndexOfSignature = function(e) {
					for (var n = e.charCodeAt(0), i = e.charCodeAt(1), a = e.charCodeAt(2), o = e.charCodeAt(3), s = this.length - 4; 0 <= s; --s) if (this.data[s] === n && this.data[s + 1] === i && this.data[s + 2] === a && this.data[s + 3] === o) return s - this.zero;
					return -1;
				}, o.prototype.readAndCheckSignature = function(e) {
					var n = e.charCodeAt(0), i = e.charCodeAt(1), a = e.charCodeAt(2), o = e.charCodeAt(3), s = this.readData(4);
					return n === s[0] && i === s[1] && a === s[2] && o === s[3];
				}, o.prototype.readData = function(e) {
					if (this.checkOffset(e), e === 0) return [];
					var n = this.data.slice(this.zero + this.index, this.zero + this.index + e);
					return this.index += e, n;
				}, n.exports = o;
			}, {
				"../utils": 32,
				"./DataReader": 18
			}],
			18: [function(e, n, i) {
				var a = e("../utils");
				function o(e) {
					this.data = e, this.length = e.length, this.index = 0, this.zero = 0;
				}
				o.prototype = {
					checkOffset: function(e) {
						this.checkIndex(this.index + e);
					},
					checkIndex: function(e) {
						if (this.length < this.zero + e || e < 0) throw Error("End of data reached (data length = " + this.length + ", asked index = " + e + "). Corrupted zip ?");
					},
					setIndex: function(e) {
						this.checkIndex(e), this.index = e;
					},
					skip: function(e) {
						this.setIndex(this.index + e);
					},
					byteAt: function() {},
					readInt: function(e) {
						var n, i = 0;
						for (this.checkOffset(e), n = this.index + e - 1; n >= this.index; n--) i = (i << 8) + this.byteAt(n);
						return this.index += e, i;
					},
					readString: function(e) {
						return a.transformTo("string", this.readData(e));
					},
					readData: function() {},
					lastIndexOfSignature: function() {},
					readAndCheckSignature: function() {},
					readDate: function() {
						var e = this.readInt(4);
						return new Date(Date.UTC(1980 + (e >> 25 & 127), (e >> 21 & 15) - 1, e >> 16 & 31, e >> 11 & 31, e >> 5 & 63, (31 & e) << 1));
					}
				}, n.exports = o;
			}, { "../utils": 32 }],
			19: [function(e, n, i) {
				var a = e("./Uint8ArrayReader");
				function o(e) {
					a.call(this, e);
				}
				e("../utils").inherits(o, a), o.prototype.readData = function(e) {
					this.checkOffset(e);
					var n = this.data.slice(this.zero + this.index, this.zero + this.index + e);
					return this.index += e, n;
				}, n.exports = o;
			}, {
				"../utils": 32,
				"./Uint8ArrayReader": 21
			}],
			20: [function(e, n, i) {
				var a = e("./DataReader");
				function o(e) {
					a.call(this, e);
				}
				e("../utils").inherits(o, a), o.prototype.byteAt = function(e) {
					return this.data.charCodeAt(this.zero + e);
				}, o.prototype.lastIndexOfSignature = function(e) {
					return this.data.lastIndexOf(e) - this.zero;
				}, o.prototype.readAndCheckSignature = function(e) {
					return e === this.readData(4);
				}, o.prototype.readData = function(e) {
					this.checkOffset(e);
					var n = this.data.slice(this.zero + this.index, this.zero + this.index + e);
					return this.index += e, n;
				}, n.exports = o;
			}, {
				"../utils": 32,
				"./DataReader": 18
			}],
			21: [function(e, n, i) {
				var a = e("./ArrayReader");
				function o(e) {
					a.call(this, e);
				}
				e("../utils").inherits(o, a), o.prototype.readData = function(e) {
					if (this.checkOffset(e), e === 0) return new Uint8Array();
					var n = this.data.subarray(this.zero + this.index, this.zero + this.index + e);
					return this.index += e, n;
				}, n.exports = o;
			}, {
				"../utils": 32,
				"./ArrayReader": 17
			}],
			22: [function(e, n, i) {
				var a = e("../utils"), o = e("../support"), s = e("./ArrayReader"), c = e("./StringReader"), l = e("./NodeBufferReader"), u = e("./Uint8ArrayReader");
				n.exports = function(e) {
					var n = a.getTypeOf(e);
					return a.checkSupport(n), n !== "string" || o.uint8array ? n === "nodebuffer" ? new l(e) : o.uint8array ? new u(a.transformTo("uint8array", e)) : new s(a.transformTo("array", e)) : new c(e);
				};
			}, {
				"../support": 30,
				"../utils": 32,
				"./ArrayReader": 17,
				"./NodeBufferReader": 19,
				"./StringReader": 20,
				"./Uint8ArrayReader": 21
			}],
			23: [function(e, n, i) {
				i.LOCAL_FILE_HEADER = "PK", i.CENTRAL_FILE_HEADER = "PK", i.CENTRAL_DIRECTORY_END = "PK", i.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", i.ZIP64_CENTRAL_DIRECTORY_END = "PK", i.DATA_DESCRIPTOR = "PK\x07\b";
			}, {}],
			24: [function(e, n, i) {
				var a = e("./GenericWorker"), o = e("../utils");
				function s(e) {
					a.call(this, "ConvertWorker to " + e), this.destType = e;
				}
				o.inherits(s, a), s.prototype.processChunk = function(e) {
					this.push({
						data: o.transformTo(this.destType, e.data),
						meta: e.meta
					});
				}, n.exports = s;
			}, {
				"../utils": 32,
				"./GenericWorker": 28
			}],
			25: [function(e, n, i) {
				var a = e("./GenericWorker"), o = e("../crc32");
				function s() {
					a.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
				}
				e("../utils").inherits(s, a), s.prototype.processChunk = function(e) {
					this.streamInfo.crc32 = o(e.data, this.streamInfo.crc32 || 0), this.push(e);
				}, n.exports = s;
			}, {
				"../crc32": 4,
				"../utils": 32,
				"./GenericWorker": 28
			}],
			26: [function(e, n, i) {
				var a = e("../utils"), o = e("./GenericWorker");
				function s(e) {
					o.call(this, "DataLengthProbe for " + e), this.propName = e, this.withStreamInfo(e, 0);
				}
				a.inherits(s, o), s.prototype.processChunk = function(e) {
					if (e) {
						var n = this.streamInfo[this.propName] || 0;
						this.streamInfo[this.propName] = n + e.data.length;
					}
					o.prototype.processChunk.call(this, e);
				}, n.exports = s;
			}, {
				"../utils": 32,
				"./GenericWorker": 28
			}],
			27: [function(e, n, i) {
				var a = e("../utils"), o = e("./GenericWorker");
				function s(e) {
					o.call(this, "DataWorker");
					var n = this;
					this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, e.then(function(e) {
						n.dataIsReady = !0, n.data = e, n.max = e && e.length || 0, n.type = a.getTypeOf(e), n.isPaused || n._tickAndRepeat();
					}, function(e) {
						n.error(e);
					});
				}
				a.inherits(s, o), s.prototype.cleanUp = function() {
					o.prototype.cleanUp.call(this), this.data = null;
				}, s.prototype.resume = function() {
					return !!o.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, a.delay(this._tickAndRepeat, [], this)), !0);
				}, s.prototype._tickAndRepeat = function() {
					this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (a.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
				}, s.prototype._tick = function() {
					if (this.isPaused || this.isFinished) return !1;
					var e = null, n = Math.min(this.max, this.index + 16384);
					if (this.index >= this.max) return this.end();
					switch (this.type) {
						case "string":
							e = this.data.substring(this.index, n);
							break;
						case "uint8array":
							e = this.data.subarray(this.index, n);
							break;
						case "array":
						case "nodebuffer": e = this.data.slice(this.index, n);
					}
					return this.index = n, this.push({
						data: e,
						meta: { percent: this.max ? this.index / this.max * 100 : 0 }
					});
				}, n.exports = s;
			}, {
				"../utils": 32,
				"./GenericWorker": 28
			}],
			28: [function(e, n, i) {
				function a(e) {
					this.name = e || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = {
						data: [],
						end: [],
						error: []
					}, this.previous = null;
				}
				a.prototype = {
					push: function(e) {
						this.emit("data", e);
					},
					end: function() {
						if (this.isFinished) return !1;
						this.flush();
						try {
							this.emit("end"), this.cleanUp(), this.isFinished = !0;
						} catch (e) {
							this.emit("error", e);
						}
						return !0;
					},
					error: function(e) {
						return !this.isFinished && (this.isPaused ? this.generatedError = e : (this.isFinished = !0, this.emit("error", e), this.previous && this.previous.error(e), this.cleanUp()), !0);
					},
					on: function(e, n) {
						return this._listeners[e].push(n), this;
					},
					cleanUp: function() {
						this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
					},
					emit: function(e, n) {
						if (this._listeners[e]) for (var i = 0; i < this._listeners[e].length; i++) this._listeners[e][i].call(this, n);
					},
					pipe: function(e) {
						return e.registerPrevious(this);
					},
					registerPrevious: function(e) {
						if (this.isLocked) throw Error("The stream '" + this + "' has already been used.");
						this.streamInfo = e.streamInfo, this.mergeStreamInfo(), this.previous = e;
						var n = this;
						return e.on("data", function(e) {
							n.processChunk(e);
						}), e.on("end", function() {
							n.end();
						}), e.on("error", function(e) {
							n.error(e);
						}), this;
					},
					pause: function() {
						return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
					},
					resume: function() {
						if (!this.isPaused || this.isFinished) return !1;
						var e = this.isPaused = !1;
						return this.generatedError && (this.error(this.generatedError), e = !0), this.previous && this.previous.resume(), !e;
					},
					flush: function() {},
					processChunk: function(e) {
						this.push(e);
					},
					withStreamInfo: function(e, n) {
						return this.extraStreamInfo[e] = n, this.mergeStreamInfo(), this;
					},
					mergeStreamInfo: function() {
						for (var e in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, e) && (this.streamInfo[e] = this.extraStreamInfo[e]);
					},
					lock: function() {
						if (this.isLocked) throw Error("The stream '" + this + "' has already been used.");
						this.isLocked = !0, this.previous && this.previous.lock();
					},
					toString: function() {
						var e = "Worker " + this.name;
						return this.previous ? this.previous + " -> " + e : e;
					}
				}, n.exports = a;
			}, {}],
			29: [function(e, n, i) {
				var a = e("../utils"), o = e("./ConvertWorker"), s = e("./GenericWorker"), c = e("../base64"), l = e("../support"), u = e("../external"), d = null;
				if (l.nodestream) try {
					d = e("../nodejs/NodejsStreamOutputAdapter");
				} catch {}
				function f(e, n) {
					return new u.Promise(function(i, o) {
						var s = [], l = e._internalType, u = e._outputType, d = e._mimeType;
						e.on("data", function(e, i) {
							s.push(e), n && n(i);
						}).on("error", function(e) {
							s = [], o(e);
						}).on("end", function() {
							try {
								var e = function(e, n, i) {
									switch (e) {
										case "blob": return a.newBlob(a.transformTo("arraybuffer", n), i);
										case "base64": return c.encode(n);
										default: return a.transformTo(e, n);
									}
								}(u, function(e, n) {
									var i, a = 0, o = null, s = 0;
									for (i = 0; i < n.length; i++) s += n[i].length;
									switch (e) {
										case "string": return n.join("");
										case "array": return Array.prototype.concat.apply([], n);
										case "uint8array":
											for (o = new Uint8Array(s), i = 0; i < n.length; i++) o.set(n[i], a), a += n[i].length;
											return o;
										case "nodebuffer": return Buffer.concat(n);
										default: throw Error("concat : unsupported type '" + e + "'");
									}
								}(l, s), d);
								i(e);
							} catch (e) {
								o(e);
							}
							s = [];
						}).resume();
					});
				}
				function p(e, n, i) {
					var c = n;
					switch (n) {
						case "blob":
						case "arraybuffer":
							c = "uint8array";
							break;
						case "base64": c = "string";
					}
					try {
						this._internalType = c, this._outputType = n, this._mimeType = i, a.checkSupport(c), this._worker = e.pipe(new o(c)), e.lock();
					} catch (e) {
						this._worker = new s("error"), this._worker.error(e);
					}
				}
				p.prototype = {
					accumulate: function(e) {
						return f(this, e);
					},
					on: function(e, n) {
						var i = this;
						return e === "data" ? this._worker.on(e, function(e) {
							n.call(i, e.data, e.meta);
						}) : this._worker.on(e, function() {
							a.delay(n, arguments, i);
						}), this;
					},
					resume: function() {
						return a.delay(this._worker.resume, [], this._worker), this;
					},
					pause: function() {
						return this._worker.pause(), this;
					},
					toNodejsStream: function(e) {
						if (a.checkSupport("nodestream"), this._outputType !== "nodebuffer") throw Error(this._outputType + " is not supported by this method");
						return new d(this, { objectMode: this._outputType !== "nodebuffer" }, e);
					}
				}, n.exports = p;
			}, {
				"../base64": 1,
				"../external": 6,
				"../nodejs/NodejsStreamOutputAdapter": 13,
				"../support": 30,
				"../utils": 32,
				"./ConvertWorker": 24,
				"./GenericWorker": 28
			}],
			30: [function(e, n, i) {
				if (i.base64 = !0, i.array = !0, i.string = !0, i.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", i.nodebuffer = typeof Buffer < "u", i.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u") i.blob = !1;
				else {
					var a = /* @__PURE__ */ new ArrayBuffer(0);
					try {
						i.blob = new Blob([a], { type: "application/zip" }).size === 0;
					} catch {
						try {
							var o = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
							o.append(a), i.blob = o.getBlob("application/zip").size === 0;
						} catch {
							i.blob = !1;
						}
					}
				}
				try {
					i.nodestream = !!e("readable-stream").Readable;
				} catch {
					i.nodestream = !1;
				}
			}, { "readable-stream": 16 }],
			31: [function(e, n, i) {
				for (var a = e("./utils"), o = e("./support"), s = e("./nodejsUtils"), c = e("./stream/GenericWorker"), l = Array(256), u = 0; u < 256; u++) l[u] = 252 <= u ? 6 : 248 <= u ? 5 : 240 <= u ? 4 : 224 <= u ? 3 : 192 <= u ? 2 : 1;
				l[254] = l[254] = 1;
				function d() {
					c.call(this, "utf-8 decode"), this.leftOver = null;
				}
				function f() {
					c.call(this, "utf-8 encode");
				}
				i.utf8encode = function(e) {
					return o.nodebuffer ? s.newBufferFrom(e, "utf-8") : function(e) {
						var n, i, a, s, c, l = e.length, u = 0;
						for (s = 0; s < l; s++) (64512 & (i = e.charCodeAt(s))) == 55296 && s + 1 < l && (64512 & (a = e.charCodeAt(s + 1))) == 56320 && (i = 65536 + (i - 55296 << 10) + (a - 56320), s++), u += i < 128 ? 1 : i < 2048 ? 2 : i < 65536 ? 3 : 4;
						for (n = o.uint8array ? new Uint8Array(u) : Array(u), s = c = 0; c < u; s++) (64512 & (i = e.charCodeAt(s))) == 55296 && s + 1 < l && (64512 & (a = e.charCodeAt(s + 1))) == 56320 && (i = 65536 + (i - 55296 << 10) + (a - 56320), s++), i < 128 ? n[c++] = i : (i < 2048 ? n[c++] = 192 | i >>> 6 : (i < 65536 ? n[c++] = 224 | i >>> 12 : (n[c++] = 240 | i >>> 18, n[c++] = 128 | i >>> 12 & 63), n[c++] = 128 | i >>> 6 & 63), n[c++] = 128 | 63 & i);
						return n;
					}(e);
				}, i.utf8decode = function(e) {
					return o.nodebuffer ? a.transformTo("nodebuffer", e).toString("utf-8") : function(e) {
						var n, i, o, s, c = e.length, u = Array(2 * c);
						for (n = i = 0; n < c;) if ((o = e[n++]) < 128) u[i++] = o;
						else if (4 < (s = l[o])) u[i++] = 65533, n += s - 1;
						else {
							for (o &= s === 2 ? 31 : s === 3 ? 15 : 7; 1 < s && n < c;) o = o << 6 | 63 & e[n++], s--;
							1 < s ? u[i++] = 65533 : o < 65536 ? u[i++] = o : (o -= 65536, u[i++] = 55296 | o >> 10 & 1023, u[i++] = 56320 | 1023 & o);
						}
						return u.length !== i && (u.subarray ? u = u.subarray(0, i) : u.length = i), a.applyFromCharCode(u);
					}(e = a.transformTo(o.uint8array ? "uint8array" : "array", e));
				}, a.inherits(d, c), d.prototype.processChunk = function(e) {
					var n = a.transformTo(o.uint8array ? "uint8array" : "array", e.data);
					if (this.leftOver && this.leftOver.length) {
						if (o.uint8array) {
							var s = n;
							(n = new Uint8Array(s.length + this.leftOver.length)).set(this.leftOver, 0), n.set(s, this.leftOver.length);
						} else n = this.leftOver.concat(n);
						this.leftOver = null;
					}
					var c = function(e, n) {
						var i;
						for ((n ||= e.length) > e.length && (n = e.length), i = n - 1; 0 <= i && (192 & e[i]) == 128;) i--;
						return i < 0 || i === 0 ? n : i + l[e[i]] > n ? i : n;
					}(n), u = n;
					c !== n.length && (o.uint8array ? (u = n.subarray(0, c), this.leftOver = n.subarray(c, n.length)) : (u = n.slice(0, c), this.leftOver = n.slice(c, n.length))), this.push({
						data: i.utf8decode(u),
						meta: e.meta
					});
				}, d.prototype.flush = function() {
					this.leftOver && this.leftOver.length && (this.push({
						data: i.utf8decode(this.leftOver),
						meta: {}
					}), this.leftOver = null);
				}, i.Utf8DecodeWorker = d, a.inherits(f, c), f.prototype.processChunk = function(e) {
					this.push({
						data: i.utf8encode(e.data),
						meta: e.meta
					});
				}, i.Utf8EncodeWorker = f;
			}, {
				"./nodejsUtils": 14,
				"./stream/GenericWorker": 28,
				"./support": 30,
				"./utils": 32
			}],
			32: [function(e, n, i) {
				var a = e("./support"), o = e("./base64"), s = e("./nodejsUtils"), c = e("./external");
				function l(e) {
					return e;
				}
				function u(e, n) {
					for (var i = 0; i < e.length; ++i) n[i] = 255 & e.charCodeAt(i);
					return n;
				}
				e("setimmediate"), i.newBlob = function(e, n) {
					i.checkSupport("blob");
					try {
						return new Blob([e], { type: n });
					} catch {
						try {
							var a = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
							return a.append(e), a.getBlob(n);
						} catch {
							throw Error("Bug : can't construct the Blob.");
						}
					}
				};
				var d = {
					stringifyByChunk: function(e, n, i) {
						var a = [], o = 0, s = e.length;
						if (s <= i) return String.fromCharCode.apply(null, e);
						for (; o < s;) n === "array" || n === "nodebuffer" ? a.push(String.fromCharCode.apply(null, e.slice(o, Math.min(o + i, s)))) : a.push(String.fromCharCode.apply(null, e.subarray(o, Math.min(o + i, s)))), o += i;
						return a.join("");
					},
					stringifyByChar: function(e) {
						for (var n = "", i = 0; i < e.length; i++) n += String.fromCharCode(e[i]);
						return n;
					},
					applyCanBeUsed: {
						uint8array: function() {
							try {
								return a.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
							} catch {
								return !1;
							}
						}(),
						nodebuffer: function() {
							try {
								return a.nodebuffer && String.fromCharCode.apply(null, s.allocBuffer(1)).length === 1;
							} catch {
								return !1;
							}
						}()
					}
				};
				function f(e) {
					var n = 65536, a = i.getTypeOf(e), o = !0;
					if (a === "uint8array" ? o = d.applyCanBeUsed.uint8array : a === "nodebuffer" && (o = d.applyCanBeUsed.nodebuffer), o) for (; 1 < n;) try {
						return d.stringifyByChunk(e, a, n);
					} catch {
						n = Math.floor(n / 2);
					}
					return d.stringifyByChar(e);
				}
				function p(e, n) {
					for (var i = 0; i < e.length; i++) n[i] = e[i];
					return n;
				}
				i.applyFromCharCode = f;
				var m = {};
				m.string = {
					string: l,
					array: function(e) {
						return u(e, Array(e.length));
					},
					arraybuffer: function(e) {
						return m.string.uint8array(e).buffer;
					},
					uint8array: function(e) {
						return u(e, new Uint8Array(e.length));
					},
					nodebuffer: function(e) {
						return u(e, s.allocBuffer(e.length));
					}
				}, m.array = {
					string: f,
					array: l,
					arraybuffer: function(e) {
						return new Uint8Array(e).buffer;
					},
					uint8array: function(e) {
						return new Uint8Array(e);
					},
					nodebuffer: function(e) {
						return s.newBufferFrom(e);
					}
				}, m.arraybuffer = {
					string: function(e) {
						return f(new Uint8Array(e));
					},
					array: function(e) {
						return p(new Uint8Array(e), Array(e.byteLength));
					},
					arraybuffer: l,
					uint8array: function(e) {
						return new Uint8Array(e);
					},
					nodebuffer: function(e) {
						return s.newBufferFrom(new Uint8Array(e));
					}
				}, m.uint8array = {
					string: f,
					array: function(e) {
						return p(e, Array(e.length));
					},
					arraybuffer: function(e) {
						return e.buffer;
					},
					uint8array: l,
					nodebuffer: function(e) {
						return s.newBufferFrom(e);
					}
				}, m.nodebuffer = {
					string: f,
					array: function(e) {
						return p(e, Array(e.length));
					},
					arraybuffer: function(e) {
						return m.nodebuffer.uint8array(e).buffer;
					},
					uint8array: function(e) {
						return p(e, new Uint8Array(e.length));
					},
					nodebuffer: l
				}, i.transformTo = function(e, n) {
					if (n ||= "", !e) return n;
					i.checkSupport(e);
					var a = i.getTypeOf(n);
					return m[a][e](n);
				}, i.resolve = function(e) {
					for (var n = e.split("/"), i = [], a = 0; a < n.length; a++) {
						var o = n[a];
						o === "." || o === "" && a !== 0 && a !== n.length - 1 || (o === ".." ? i.pop() : i.push(o));
					}
					return i.join("/");
				}, i.getTypeOf = function(e) {
					return typeof e == "string" ? "string" : Object.prototype.toString.call(e) === "[object Array]" ? "array" : a.nodebuffer && s.isBuffer(e) ? "nodebuffer" : a.uint8array && e instanceof Uint8Array ? "uint8array" : a.arraybuffer && e instanceof ArrayBuffer ? "arraybuffer" : void 0;
				}, i.checkSupport = function(e) {
					if (!a[e.toLowerCase()]) throw Error(e + " is not supported by this platform");
				}, i.MAX_VALUE_16BITS = 65535, i.MAX_VALUE_32BITS = -1, i.pretty = function(e) {
					var n, i, a = "";
					for (i = 0; i < (e || "").length; i++) a += "\\x" + ((n = e.charCodeAt(i)) < 16 ? "0" : "") + n.toString(16).toUpperCase();
					return a;
				}, i.delay = function(e, n, i) {
					setImmediate(function() {
						e.apply(i || null, n || []);
					});
				}, i.inherits = function(e, n) {
					function i() {}
					i.prototype = n.prototype, e.prototype = new i();
				}, i.extend = function() {
					var e, n, i = {};
					for (e = 0; e < arguments.length; e++) for (n in arguments[e]) Object.prototype.hasOwnProperty.call(arguments[e], n) && i[n] === void 0 && (i[n] = arguments[e][n]);
					return i;
				}, i.prepareContent = function(e, n, s, l, d) {
					return c.Promise.resolve(n).then(function(e) {
						return a.blob && (e instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(e)) !== -1) && typeof FileReader < "u" ? new c.Promise(function(n, i) {
							var a = new FileReader();
							a.onload = function(e) {
								n(e.target.result);
							}, a.onerror = function(e) {
								i(e.target.error);
							}, a.readAsArrayBuffer(e);
						}) : e;
					}).then(function(n) {
						var f = i.getTypeOf(n);
						return f ? (f === "arraybuffer" ? n = i.transformTo("uint8array", n) : f === "string" && (d ? n = o.decode(n) : s && !0 !== l && (n = function(e) {
							return u(e, a.uint8array ? new Uint8Array(e.length) : Array(e.length));
						}(n))), n) : c.Promise.reject(/* @__PURE__ */ Error("Can't read the data of '" + e + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
					});
				};
			}, {
				"./base64": 1,
				"./external": 6,
				"./nodejsUtils": 14,
				"./support": 30,
				setimmediate: 54
			}],
			33: [function(e, n, i) {
				var a = e("./reader/readerFor"), o = e("./utils"), s = e("./signature"), c = e("./zipEntry"), l = e("./support");
				function u(e) {
					this.files = [], this.loadOptions = e;
				}
				u.prototype = {
					checkSignature: function(e) {
						if (!this.reader.readAndCheckSignature(e)) {
							this.reader.index -= 4;
							var n = this.reader.readString(4);
							throw Error("Corrupted zip or bug: unexpected signature (" + o.pretty(n) + ", expected " + o.pretty(e) + ")");
						}
					},
					isSignature: function(e, n) {
						var i = this.reader.index;
						this.reader.setIndex(e);
						var a = this.reader.readString(4) === n;
						return this.reader.setIndex(i), a;
					},
					readBlockEndOfCentral: function() {
						this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
						var e = this.reader.readData(this.zipCommentLength), n = l.uint8array ? "uint8array" : "array", i = o.transformTo(n, e);
						this.zipComment = this.loadOptions.decodeFileName(i);
					},
					readBlockZip64EndOfCentral: function() {
						this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
						for (var e, n, i, a = this.zip64EndOfCentralSize - 44; 0 < a;) e = this.reader.readInt(2), n = this.reader.readInt(4), i = this.reader.readData(n), this.zip64ExtensibleData[e] = {
							id: e,
							length: n,
							value: i
						};
					},
					readBlockZip64EndOfCentralLocator: function() {
						if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw Error("Multi-volumes zip are not supported");
					},
					readLocalFiles: function() {
						var e, n;
						for (e = 0; e < this.files.length; e++) n = this.files[e], this.reader.setIndex(n.localHeaderOffset), this.checkSignature(s.LOCAL_FILE_HEADER), n.readLocalPart(this.reader), n.handleUTF8(), n.processAttributes();
					},
					readCentralDir: function() {
						var e;
						for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);) (e = new c({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(e);
						if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0) throw Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
					},
					readEndOfCentral: function() {
						var e = this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);
						if (e < 0) throw this.isSignature(0, s.LOCAL_FILE_HEADER) ? /* @__PURE__ */ Error("Corrupted zip: can't find end of central directory") : /* @__PURE__ */ Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
						this.reader.setIndex(e);
						var n = e;
						if (this.checkSignature(s.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === o.MAX_VALUE_16BITS || this.diskWithCentralDirStart === o.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === o.MAX_VALUE_16BITS || this.centralDirRecords === o.MAX_VALUE_16BITS || this.centralDirSize === o.MAX_VALUE_32BITS || this.centralDirOffset === o.MAX_VALUE_32BITS) {
							if (this.zip64 = !0, (e = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
							if (this.reader.setIndex(e), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, s.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw Error("Corrupted zip: can't find the ZIP64 end of central directory");
							this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
						}
						var i = this.centralDirOffset + this.centralDirSize;
						this.zip64 && (i += 20, i += 12 + this.zip64EndOfCentralSize);
						var a = n - i;
						if (0 < a) this.isSignature(n, s.CENTRAL_FILE_HEADER) || (this.reader.zero = a);
						else if (a < 0) throw Error("Corrupted zip: missing " + Math.abs(a) + " bytes.");
					},
					prepareReader: function(e) {
						this.reader = a(e);
					},
					load: function(e) {
						this.prepareReader(e), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
					}
				}, n.exports = u;
			}, {
				"./reader/readerFor": 22,
				"./signature": 23,
				"./support": 30,
				"./utils": 32,
				"./zipEntry": 34
			}],
			34: [function(e, n, i) {
				var a = e("./reader/readerFor"), o = e("./utils"), s = e("./compressedObject"), c = e("./crc32"), l = e("./utf8"), u = e("./compressions"), d = e("./support");
				function f(e, n) {
					this.options = e, this.loadOptions = n;
				}
				f.prototype = {
					isEncrypted: function() {
						return (1 & this.bitFlag) == 1;
					},
					useUTF8: function() {
						return (2048 & this.bitFlag) == 2048;
					},
					readLocalPart: function(e) {
						var n, i;
						if (e.skip(22), this.fileNameLength = e.readInt(2), i = e.readInt(2), this.fileName = e.readData(this.fileNameLength), e.skip(i), this.compressedSize === -1 || this.uncompressedSize === -1) throw Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
						if ((n = function(e) {
							for (var n in u) if (Object.prototype.hasOwnProperty.call(u, n) && u[n].magic === e) return u[n];
							return null;
						}(this.compressionMethod)) === null) throw Error("Corrupted zip : compression " + o.pretty(this.compressionMethod) + " unknown (inner file : " + o.transformTo("string", this.fileName) + ")");
						this.decompressed = new s(this.compressedSize, this.uncompressedSize, this.crc32, n, e.readData(this.compressedSize));
					},
					readCentralPart: function(e) {
						this.versionMadeBy = e.readInt(2), e.skip(2), this.bitFlag = e.readInt(2), this.compressionMethod = e.readString(2), this.date = e.readDate(), this.crc32 = e.readInt(4), this.compressedSize = e.readInt(4), this.uncompressedSize = e.readInt(4);
						var n = e.readInt(2);
						if (this.extraFieldsLength = e.readInt(2), this.fileCommentLength = e.readInt(2), this.diskNumberStart = e.readInt(2), this.internalFileAttributes = e.readInt(2), this.externalFileAttributes = e.readInt(4), this.localHeaderOffset = e.readInt(4), this.isEncrypted()) throw Error("Encrypted zip are not supported");
						e.skip(n), this.readExtraFields(e), this.parseZIP64ExtraField(e), this.fileComment = e.readData(this.fileCommentLength);
					},
					processAttributes: function() {
						this.unixPermissions = null, this.dosPermissions = null;
						var e = this.versionMadeBy >> 8;
						this.dir = !!(16 & this.externalFileAttributes), e == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), e == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0);
					},
					parseZIP64ExtraField: function() {
						if (this.extraFields[1]) {
							var e = a(this.extraFields[1].value);
							this.uncompressedSize === o.MAX_VALUE_32BITS && (this.uncompressedSize = e.readInt(8)), this.compressedSize === o.MAX_VALUE_32BITS && (this.compressedSize = e.readInt(8)), this.localHeaderOffset === o.MAX_VALUE_32BITS && (this.localHeaderOffset = e.readInt(8)), this.diskNumberStart === o.MAX_VALUE_32BITS && (this.diskNumberStart = e.readInt(4));
						}
					},
					readExtraFields: function(e) {
						var n, i, a, o = e.index + this.extraFieldsLength;
						for (this.extraFields ||= {}; e.index + 4 < o;) n = e.readInt(2), i = e.readInt(2), a = e.readData(i), this.extraFields[n] = {
							id: n,
							length: i,
							value: a
						};
						e.setIndex(o);
					},
					handleUTF8: function() {
						var e = d.uint8array ? "uint8array" : "array";
						if (this.useUTF8()) this.fileNameStr = l.utf8decode(this.fileName), this.fileCommentStr = l.utf8decode(this.fileComment);
						else {
							var n = this.findExtraFieldUnicodePath();
							if (n !== null) this.fileNameStr = n;
							else {
								var i = o.transformTo(e, this.fileName);
								this.fileNameStr = this.loadOptions.decodeFileName(i);
							}
							var a = this.findExtraFieldUnicodeComment();
							if (a !== null) this.fileCommentStr = a;
							else {
								var s = o.transformTo(e, this.fileComment);
								this.fileCommentStr = this.loadOptions.decodeFileName(s);
							}
						}
					},
					findExtraFieldUnicodePath: function() {
						var e = this.extraFields[28789];
						if (e) {
							var n = a(e.value);
							return n.readInt(1) === 1 && c(this.fileName) === n.readInt(4) ? l.utf8decode(n.readData(e.length - 5)) : null;
						}
						return null;
					},
					findExtraFieldUnicodeComment: function() {
						var e = this.extraFields[25461];
						if (e) {
							var n = a(e.value);
							return n.readInt(1) === 1 && c(this.fileComment) === n.readInt(4) ? l.utf8decode(n.readData(e.length - 5)) : null;
						}
						return null;
					}
				}, n.exports = f;
			}, {
				"./compressedObject": 2,
				"./compressions": 3,
				"./crc32": 4,
				"./reader/readerFor": 22,
				"./support": 30,
				"./utf8": 31,
				"./utils": 32
			}],
			35: [function(e, n, i) {
				function a(e, n, i) {
					this.name = e, this.dir = i.dir, this.date = i.date, this.comment = i.comment, this.unixPermissions = i.unixPermissions, this.dosPermissions = i.dosPermissions, this._data = n, this._dataBinary = i.binary, this.options = {
						compression: i.compression,
						compressionOptions: i.compressionOptions
					};
				}
				var o = e("./stream/StreamHelper"), s = e("./stream/DataWorker"), c = e("./utf8"), l = e("./compressedObject"), u = e("./stream/GenericWorker");
				a.prototype = {
					internalStream: function(e) {
						var n = null, i = "string";
						try {
							if (!e) throw Error("No output type specified.");
							var a = (i = e.toLowerCase()) === "string" || i === "text";
							i !== "binarystring" && i !== "text" || (i = "string"), n = this._decompressWorker();
							var s = !this._dataBinary;
							s && !a && (n = n.pipe(new c.Utf8EncodeWorker())), !s && a && (n = n.pipe(new c.Utf8DecodeWorker()));
						} catch (e) {
							(n = new u("error")).error(e);
						}
						return new o(n, i, "");
					},
					async: function(e, n) {
						return this.internalStream(e).accumulate(n);
					},
					nodeStream: function(e, n) {
						return this.internalStream(e || "nodebuffer").toNodejsStream(n);
					},
					_compressWorker: function(e, n) {
						if (this._data instanceof l && this._data.compression.magic === e.magic) return this._data.getCompressedWorker();
						var i = this._decompressWorker();
						return this._dataBinary || (i = i.pipe(new c.Utf8EncodeWorker())), l.createWorkerFrom(i, e, n);
					},
					_decompressWorker: function() {
						return this._data instanceof l ? this._data.getContentWorker() : this._data instanceof u ? this._data : new s(this._data);
					}
				};
				for (var d = [
					"asText",
					"asBinary",
					"asNodeBuffer",
					"asUint8Array",
					"asArrayBuffer"
				], f = function() {
					throw Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
				}, p = 0; p < d.length; p++) a.prototype[d[p]] = f;
				n.exports = a;
			}, {
				"./compressedObject": 2,
				"./stream/DataWorker": 27,
				"./stream/GenericWorker": 28,
				"./stream/StreamHelper": 29,
				"./utf8": 31
			}],
			36: [function(e, n, i) {
				(function(e) {
					var i, a, o = e.MutationObserver || e.WebKitMutationObserver;
					if (o) {
						var s = 0, c = new o(f), l = e.document.createTextNode("");
						c.observe(l, { characterData: !0 }), i = function() {
							l.data = s = ++s % 2;
						};
					} else if (e.setImmediate || e.MessageChannel === void 0) i = "document" in e && "onreadystatechange" in e.document.createElement("script") ? function() {
						var n = e.document.createElement("script");
						n.onreadystatechange = function() {
							f(), n.onreadystatechange = null, n.parentNode.removeChild(n), n = null;
						}, e.document.documentElement.appendChild(n);
					} : function() {
						setTimeout(f, 0);
					};
					else {
						var u = new e.MessageChannel();
						u.port1.onmessage = f, i = function() {
							u.port2.postMessage(0);
						};
					}
					var d = [];
					function f() {
						var e, n;
						a = !0;
						for (var i = d.length; i;) {
							for (n = d, d = [], e = -1; ++e < i;) n[e]();
							i = d.length;
						}
						a = !1;
					}
					n.exports = function(e) {
						d.push(e) !== 1 || a || i();
					};
				}).call(this, typeof global < "u" ? global : typeof self < "u" ? self : typeof window < "u" ? window : {});
			}, {}],
			37: [function(e, n, i) {
				var a = e("immediate");
				function o() {}
				var s = {}, c = ["REJECTED"], l = ["FULFILLED"], u = ["PENDING"];
				function d(e) {
					if (typeof e != "function") throw TypeError("resolver must be a function");
					this.state = u, this.queue = [], this.outcome = void 0, e !== o && h(this, e);
				}
				function f(e, n, i) {
					this.promise = e, typeof n == "function" && (this.onFulfilled = n, this.callFulfilled = this.otherCallFulfilled), typeof i == "function" && (this.onRejected = i, this.callRejected = this.otherCallRejected);
				}
				function p(e, n, i) {
					a(function() {
						var a;
						try {
							a = n(i);
						} catch (n) {
							return s.reject(e, n);
						}
						a === e ? s.reject(e, /* @__PURE__ */ TypeError("Cannot resolve promise with itself")) : s.resolve(e, a);
					});
				}
				function m(e) {
					var n = e && e.then;
					if (e && (typeof e == "object" || typeof e == "function") && typeof n == "function") return function() {
						n.apply(e, arguments);
					};
				}
				function h(e, n) {
					var i = !1;
					function a(n) {
						i || (i = !0, s.reject(e, n));
					}
					function o(n) {
						i || (i = !0, s.resolve(e, n));
					}
					var c = g(function() {
						n(o, a);
					});
					c.status === "error" && a(c.value);
				}
				function g(e, n) {
					var i = {};
					try {
						i.value = e(n), i.status = "success";
					} catch (e) {
						i.status = "error", i.value = e;
					}
					return i;
				}
				(n.exports = d).prototype.finally = function(e) {
					if (typeof e != "function") return this;
					var n = this.constructor;
					return this.then(function(i) {
						return n.resolve(e()).then(function() {
							return i;
						});
					}, function(i) {
						return n.resolve(e()).then(function() {
							throw i;
						});
					});
				}, d.prototype.catch = function(e) {
					return this.then(null, e);
				}, d.prototype.then = function(e, n) {
					if (typeof e != "function" && this.state === l || typeof n != "function" && this.state === c) return this;
					var i = new this.constructor(o);
					return this.state === u ? this.queue.push(new f(i, e, n)) : p(i, this.state === l ? e : n, this.outcome), i;
				}, f.prototype.callFulfilled = function(e) {
					s.resolve(this.promise, e);
				}, f.prototype.otherCallFulfilled = function(e) {
					p(this.promise, this.onFulfilled, e);
				}, f.prototype.callRejected = function(e) {
					s.reject(this.promise, e);
				}, f.prototype.otherCallRejected = function(e) {
					p(this.promise, this.onRejected, e);
				}, s.resolve = function(e, n) {
					var i = g(m, n);
					if (i.status === "error") return s.reject(e, i.value);
					var a = i.value;
					if (a) h(e, a);
					else {
						e.state = l, e.outcome = n;
						for (var o = -1, c = e.queue.length; ++o < c;) e.queue[o].callFulfilled(n);
					}
					return e;
				}, s.reject = function(e, n) {
					e.state = c, e.outcome = n;
					for (var i = -1, a = e.queue.length; ++i < a;) e.queue[i].callRejected(n);
					return e;
				}, d.resolve = function(e) {
					return e instanceof this ? e : s.resolve(new this(o), e);
				}, d.reject = function(e) {
					var n = new this(o);
					return s.reject(n, e);
				}, d.all = function(e) {
					var n = this;
					if (Object.prototype.toString.call(e) !== "[object Array]") return this.reject(/* @__PURE__ */ TypeError("must be an array"));
					var i = e.length, a = !1;
					if (!i) return this.resolve([]);
					for (var c = Array(i), l = 0, u = -1, d = new this(o); ++u < i;) f(e[u], u);
					return d;
					function f(e, o) {
						n.resolve(e).then(function(e) {
							c[o] = e, ++l !== i || a || (a = !0, s.resolve(d, c));
						}, function(e) {
							a || (a = !0, s.reject(d, e));
						});
					}
				}, d.race = function(e) {
					var n = this;
					if (Object.prototype.toString.call(e) !== "[object Array]") return this.reject(/* @__PURE__ */ TypeError("must be an array"));
					var i = e.length, a = !1;
					if (!i) return this.resolve([]);
					for (var c = -1, l = new this(o); ++c < i;) u = e[c], n.resolve(u).then(function(e) {
						a || (a = !0, s.resolve(l, e));
					}, function(e) {
						a || (a = !0, s.reject(l, e));
					});
					var u;
					return l;
				};
			}, { immediate: 36 }],
			38: [function(e, n, i) {
				var a = {};
				(0, e("./lib/utils/common").assign)(a, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), n.exports = a;
			}, {
				"./lib/deflate": 39,
				"./lib/inflate": 40,
				"./lib/utils/common": 41,
				"./lib/zlib/constants": 44
			}],
			39: [function(e, n, i) {
				var a = e("./zlib/deflate"), o = e("./utils/common"), s = e("./utils/strings"), c = e("./zlib/messages"), l = e("./zlib/zstream"), u = Object.prototype.toString, d = 0, f = -1, p = 0, m = 8;
				function h(e) {
					if (!(this instanceof h)) return new h(e);
					this.options = o.assign({
						level: f,
						method: m,
						chunkSize: 16384,
						windowBits: 15,
						memLevel: 8,
						strategy: p,
						to: ""
					}, e || {});
					var n = this.options;
					n.raw && 0 < n.windowBits ? n.windowBits = -n.windowBits : n.gzip && 0 < n.windowBits && n.windowBits < 16 && (n.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new l(), this.strm.avail_out = 0;
					var i = a.deflateInit2(this.strm, n.level, n.method, n.windowBits, n.memLevel, n.strategy);
					if (i !== d) throw Error(c[i]);
					if (n.header && a.deflateSetHeader(this.strm, n.header), n.dictionary) {
						var g;
						if (g = typeof n.dictionary == "string" ? s.string2buf(n.dictionary) : u.call(n.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(n.dictionary) : n.dictionary, (i = a.deflateSetDictionary(this.strm, g)) !== d) throw Error(c[i]);
						this._dict_set = !0;
					}
				}
				function g(e, n) {
					var i = new h(n);
					if (i.push(e, !0), i.err) throw i.msg || c[i.err];
					return i.result;
				}
				h.prototype.push = function(e, n) {
					var i, c, l = this.strm, f = this.options.chunkSize;
					if (this.ended) return !1;
					c = n === ~~n ? n : !0 === n ? 4 : 0, typeof e == "string" ? l.input = s.string2buf(e) : u.call(e) === "[object ArrayBuffer]" ? l.input = new Uint8Array(e) : l.input = e, l.next_in = 0, l.avail_in = l.input.length;
					do {
						if (l.avail_out === 0 && (l.output = new o.Buf8(f), l.next_out = 0, l.avail_out = f), (i = a.deflate(l, c)) !== 1 && i !== d) return this.onEnd(i), !(this.ended = !0);
						l.avail_out !== 0 && (l.avail_in !== 0 || c !== 4 && c !== 2) || (this.options.to === "string" ? this.onData(s.buf2binstring(o.shrinkBuf(l.output, l.next_out))) : this.onData(o.shrinkBuf(l.output, l.next_out)));
					} while ((0 < l.avail_in || l.avail_out === 0) && i !== 1);
					return c === 4 ? (i = a.deflateEnd(this.strm), this.onEnd(i), this.ended = !0, i === d) : c !== 2 || (this.onEnd(d), !(l.avail_out = 0));
				}, h.prototype.onData = function(e) {
					this.chunks.push(e);
				}, h.prototype.onEnd = function(e) {
					e === d && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
				}, i.Deflate = h, i.deflate = g, i.deflateRaw = function(e, n) {
					return (n ||= {}).raw = !0, g(e, n);
				}, i.gzip = function(e, n) {
					return (n ||= {}).gzip = !0, g(e, n);
				};
			}, {
				"./utils/common": 41,
				"./utils/strings": 42,
				"./zlib/deflate": 46,
				"./zlib/messages": 51,
				"./zlib/zstream": 53
			}],
			40: [function(e, n, i) {
				var a = e("./zlib/inflate"), o = e("./utils/common"), s = e("./utils/strings"), c = e("./zlib/constants"), l = e("./zlib/messages"), u = e("./zlib/zstream"), d = e("./zlib/gzheader"), f = Object.prototype.toString;
				function p(e) {
					if (!(this instanceof p)) return new p(e);
					this.options = o.assign({
						chunkSize: 16384,
						windowBits: 0,
						to: ""
					}, e || {});
					var n = this.options;
					n.raw && 0 <= n.windowBits && n.windowBits < 16 && (n.windowBits = -n.windowBits, n.windowBits === 0 && (n.windowBits = -15)), !(0 <= n.windowBits && n.windowBits < 16) || e && e.windowBits || (n.windowBits += 32), 15 < n.windowBits && n.windowBits < 48 && !(15 & n.windowBits) && (n.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new u(), this.strm.avail_out = 0;
					var i = a.inflateInit2(this.strm, n.windowBits);
					if (i !== c.Z_OK) throw Error(l[i]);
					this.header = new d(), a.inflateGetHeader(this.strm, this.header);
				}
				function m(e, n) {
					var i = new p(n);
					if (i.push(e, !0), i.err) throw i.msg || l[i.err];
					return i.result;
				}
				p.prototype.push = function(e, n) {
					var i, l, u, d, p, m, h = this.strm, g = this.options.chunkSize, _ = this.options.dictionary, v = !1;
					if (this.ended) return !1;
					l = n === ~~n ? n : !0 === n ? c.Z_FINISH : c.Z_NO_FLUSH, typeof e == "string" ? h.input = s.binstring2buf(e) : f.call(e) === "[object ArrayBuffer]" ? h.input = new Uint8Array(e) : h.input = e, h.next_in = 0, h.avail_in = h.input.length;
					do {
						if (h.avail_out === 0 && (h.output = new o.Buf8(g), h.next_out = 0, h.avail_out = g), (i = a.inflate(h, c.Z_NO_FLUSH)) === c.Z_NEED_DICT && _ && (m = typeof _ == "string" ? s.string2buf(_) : f.call(_) === "[object ArrayBuffer]" ? new Uint8Array(_) : _, i = a.inflateSetDictionary(this.strm, m)), i === c.Z_BUF_ERROR && !0 === v && (i = c.Z_OK, v = !1), i !== c.Z_STREAM_END && i !== c.Z_OK) return this.onEnd(i), !(this.ended = !0);
						h.next_out && (h.avail_out !== 0 && i !== c.Z_STREAM_END && (h.avail_in !== 0 || l !== c.Z_FINISH && l !== c.Z_SYNC_FLUSH) || (this.options.to === "string" ? (u = s.utf8border(h.output, h.next_out), d = h.next_out - u, p = s.buf2string(h.output, u), h.next_out = d, h.avail_out = g - d, d && o.arraySet(h.output, h.output, u, d, 0), this.onData(p)) : this.onData(o.shrinkBuf(h.output, h.next_out)))), h.avail_in === 0 && h.avail_out === 0 && (v = !0);
					} while ((0 < h.avail_in || h.avail_out === 0) && i !== c.Z_STREAM_END);
					return i === c.Z_STREAM_END && (l = c.Z_FINISH), l === c.Z_FINISH ? (i = a.inflateEnd(this.strm), this.onEnd(i), this.ended = !0, i === c.Z_OK) : l !== c.Z_SYNC_FLUSH || (this.onEnd(c.Z_OK), !(h.avail_out = 0));
				}, p.prototype.onData = function(e) {
					this.chunks.push(e);
				}, p.prototype.onEnd = function(e) {
					e === c.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
				}, i.Inflate = p, i.inflate = m, i.inflateRaw = function(e, n) {
					return (n ||= {}).raw = !0, m(e, n);
				}, i.ungzip = m;
			}, {
				"./utils/common": 41,
				"./utils/strings": 42,
				"./zlib/constants": 44,
				"./zlib/gzheader": 47,
				"./zlib/inflate": 49,
				"./zlib/messages": 51,
				"./zlib/zstream": 53
			}],
			41: [function(e, n, i) {
				var a = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
				i.assign = function(e) {
					for (var n = Array.prototype.slice.call(arguments, 1); n.length;) {
						var i = n.shift();
						if (i) {
							if (typeof i != "object") throw TypeError(i + "must be non-object");
							for (var a in i) i.hasOwnProperty(a) && (e[a] = i[a]);
						}
					}
					return e;
				}, i.shrinkBuf = function(e, n) {
					return e.length === n ? e : e.subarray ? e.subarray(0, n) : (e.length = n, e);
				};
				var o = {
					arraySet: function(e, n, i, a, o) {
						if (n.subarray && e.subarray) e.set(n.subarray(i, i + a), o);
						else for (var s = 0; s < a; s++) e[o + s] = n[i + s];
					},
					flattenChunks: function(e) {
						var n, i, a, o, s, c;
						for (n = a = 0, i = e.length; n < i; n++) a += e[n].length;
						for (c = new Uint8Array(a), n = o = 0, i = e.length; n < i; n++) s = e[n], c.set(s, o), o += s.length;
						return c;
					}
				}, s = {
					arraySet: function(e, n, i, a, o) {
						for (var s = 0; s < a; s++) e[o + s] = n[i + s];
					},
					flattenChunks: function(e) {
						return [].concat.apply([], e);
					}
				};
				i.setTyped = function(e) {
					e ? (i.Buf8 = Uint8Array, i.Buf16 = Uint16Array, i.Buf32 = Int32Array, i.assign(i, o)) : (i.Buf8 = Array, i.Buf16 = Array, i.Buf32 = Array, i.assign(i, s));
				}, i.setTyped(a);
			}, {}],
			42: [function(e, n, i) {
				var a = e("./common"), o = !0, s = !0;
				try {
					String.fromCharCode.apply(null, [0]);
				} catch {
					o = !1;
				}
				try {
					String.fromCharCode.apply(null, new Uint8Array(1));
				} catch {
					s = !1;
				}
				for (var c = new a.Buf8(256), l = 0; l < 256; l++) c[l] = 252 <= l ? 6 : 248 <= l ? 5 : 240 <= l ? 4 : 224 <= l ? 3 : 192 <= l ? 2 : 1;
				function u(e, n) {
					if (n < 65537 && (e.subarray && s || !e.subarray && o)) return String.fromCharCode.apply(null, a.shrinkBuf(e, n));
					for (var i = "", c = 0; c < n; c++) i += String.fromCharCode(e[c]);
					return i;
				}
				c[254] = c[254] = 1, i.string2buf = function(e) {
					var n, i, o, s, c, l = e.length, u = 0;
					for (s = 0; s < l; s++) (64512 & (i = e.charCodeAt(s))) == 55296 && s + 1 < l && (64512 & (o = e.charCodeAt(s + 1))) == 56320 && (i = 65536 + (i - 55296 << 10) + (o - 56320), s++), u += i < 128 ? 1 : i < 2048 ? 2 : i < 65536 ? 3 : 4;
					for (n = new a.Buf8(u), s = c = 0; c < u; s++) (64512 & (i = e.charCodeAt(s))) == 55296 && s + 1 < l && (64512 & (o = e.charCodeAt(s + 1))) == 56320 && (i = 65536 + (i - 55296 << 10) + (o - 56320), s++), i < 128 ? n[c++] = i : (i < 2048 ? n[c++] = 192 | i >>> 6 : (i < 65536 ? n[c++] = 224 | i >>> 12 : (n[c++] = 240 | i >>> 18, n[c++] = 128 | i >>> 12 & 63), n[c++] = 128 | i >>> 6 & 63), n[c++] = 128 | 63 & i);
					return n;
				}, i.buf2binstring = function(e) {
					return u(e, e.length);
				}, i.binstring2buf = function(e) {
					for (var n = new a.Buf8(e.length), i = 0, o = n.length; i < o; i++) n[i] = e.charCodeAt(i);
					return n;
				}, i.buf2string = function(e, n) {
					var i, a, o, s, l = n || e.length, d = Array(2 * l);
					for (i = a = 0; i < l;) if ((o = e[i++]) < 128) d[a++] = o;
					else if (4 < (s = c[o])) d[a++] = 65533, i += s - 1;
					else {
						for (o &= s === 2 ? 31 : s === 3 ? 15 : 7; 1 < s && i < l;) o = o << 6 | 63 & e[i++], s--;
						1 < s ? d[a++] = 65533 : o < 65536 ? d[a++] = o : (o -= 65536, d[a++] = 55296 | o >> 10 & 1023, d[a++] = 56320 | 1023 & o);
					}
					return u(d, a);
				}, i.utf8border = function(e, n) {
					var i;
					for ((n ||= e.length) > e.length && (n = e.length), i = n - 1; 0 <= i && (192 & e[i]) == 128;) i--;
					return i < 0 || i === 0 ? n : i + c[e[i]] > n ? i : n;
				};
			}, { "./common": 41 }],
			43: [function(e, n, i) {
				n.exports = function(e, n, i, a) {
					for (var o = 65535 & e | 0, s = e >>> 16 & 65535 | 0, c = 0; i !== 0;) {
						for (i -= c = 2e3 < i ? 2e3 : i; s = s + (o = o + n[a++] | 0) | 0, --c;);
						o %= 65521, s %= 65521;
					}
					return o | s << 16 | 0;
				};
			}, {}],
			44: [function(e, n, i) {
				n.exports = {
					Z_NO_FLUSH: 0,
					Z_PARTIAL_FLUSH: 1,
					Z_SYNC_FLUSH: 2,
					Z_FULL_FLUSH: 3,
					Z_FINISH: 4,
					Z_BLOCK: 5,
					Z_TREES: 6,
					Z_OK: 0,
					Z_STREAM_END: 1,
					Z_NEED_DICT: 2,
					Z_ERRNO: -1,
					Z_STREAM_ERROR: -2,
					Z_DATA_ERROR: -3,
					Z_BUF_ERROR: -5,
					Z_NO_COMPRESSION: 0,
					Z_BEST_SPEED: 1,
					Z_BEST_COMPRESSION: 9,
					Z_DEFAULT_COMPRESSION: -1,
					Z_FILTERED: 1,
					Z_HUFFMAN_ONLY: 2,
					Z_RLE: 3,
					Z_FIXED: 4,
					Z_DEFAULT_STRATEGY: 0,
					Z_BINARY: 0,
					Z_TEXT: 1,
					Z_UNKNOWN: 2,
					Z_DEFLATED: 8
				};
			}, {}],
			45: [function(e, n, i) {
				var a = function() {
					for (var e, n = [], i = 0; i < 256; i++) {
						e = i;
						for (var a = 0; a < 8; a++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
						n[i] = e;
					}
					return n;
				}();
				n.exports = function(e, n, i, o) {
					var s = a, c = o + i;
					e ^= -1;
					for (var l = o; l < c; l++) e = e >>> 8 ^ s[255 & (e ^ n[l])];
					return -1 ^ e;
				};
			}, {}],
			46: [function(e, n, i) {
				var a, o = e("../utils/common"), s = e("./trees"), c = e("./adler32"), l = e("./crc32"), u = e("./messages"), d = 0, f = 4, p = 0, m = -2, h = -1, g = 4, _ = 2, v = 8, y = 9, b = 286, x = 30, S = 19, C = 2 * b + 1, w = 15, T = 3, E = 258, D = E + T + 1, O = 42, k = 113, A = 1, j = 2, M = 3, N = 4;
				function P(e, n) {
					return e.msg = u[n], n;
				}
				function F(e) {
					return (e << 1) - (4 < e ? 9 : 0);
				}
				function I(e) {
					for (var n = e.length; 0 <= --n;) e[n] = 0;
				}
				function L(e) {
					var n = e.state, i = n.pending;
					i > e.avail_out && (i = e.avail_out), i !== 0 && (o.arraySet(e.output, n.pending_buf, n.pending_out, i, e.next_out), e.next_out += i, n.pending_out += i, e.total_out += i, e.avail_out -= i, n.pending -= i, n.pending === 0 && (n.pending_out = 0));
				}
				function R(e, n) {
					s._tr_flush_block(e, 0 <= e.block_start ? e.block_start : -1, e.strstart - e.block_start, n), e.block_start = e.strstart, L(e.strm);
				}
				function z(e, n) {
					e.pending_buf[e.pending++] = n;
				}
				function B(e, n) {
					e.pending_buf[e.pending++] = n >>> 8 & 255, e.pending_buf[e.pending++] = 255 & n;
				}
				function V(e, n) {
					var i, a, o = e.max_chain_length, s = e.strstart, c = e.prev_length, l = e.nice_match, u = e.strstart > e.w_size - D ? e.strstart - (e.w_size - D) : 0, d = e.window, f = e.w_mask, p = e.prev, m = e.strstart + E, h = d[s + c - 1], g = d[s + c];
					e.prev_length >= e.good_match && (o >>= 2), l > e.lookahead && (l = e.lookahead);
					do
						if (d[(i = n) + c] === g && d[i + c - 1] === h && d[i] === d[s] && d[++i] === d[s + 1]) {
							s += 2, i++;
							do							;
while (d[++s] === d[++i] && d[++s] === d[++i] && d[++s] === d[++i] && d[++s] === d[++i] && d[++s] === d[++i] && d[++s] === d[++i] && d[++s] === d[++i] && d[++s] === d[++i] && s < m);
							if (a = E - (m - s), s = m - E, c < a) {
								if (e.match_start = n, l <= (c = a)) break;
								h = d[s + c - 1], g = d[s + c];
							}
						}
					while ((n = p[n & f]) > u && --o != 0);
					return c <= e.lookahead ? c : e.lookahead;
				}
				function H(e) {
					var n, i, a, s, u, d, f, p, m, h, g = e.w_size;
					do {
						if (s = e.window_size - e.lookahead - e.strstart, e.strstart >= g + (g - D)) {
							for (o.arraySet(e.window, e.window, g, g, 0), e.match_start -= g, e.strstart -= g, e.block_start -= g, n = i = e.hash_size; a = e.head[--n], e.head[n] = g <= a ? a - g : 0, --i;);
							for (n = i = g; a = e.prev[--n], e.prev[n] = g <= a ? a - g : 0, --i;);
							s += g;
						}
						if (e.strm.avail_in === 0) break;
						if (d = e.strm, f = e.window, p = e.strstart + e.lookahead, m = s, h = void 0, h = d.avail_in, m < h && (h = m), i = h === 0 ? 0 : (d.avail_in -= h, o.arraySet(f, d.input, d.next_in, h, p), d.state.wrap === 1 ? d.adler = c(d.adler, f, h, p) : d.state.wrap === 2 && (d.adler = l(d.adler, f, h, p)), d.next_in += h, d.total_in += h, h), e.lookahead += i, e.lookahead + e.insert >= T) for (u = e.strstart - e.insert, e.ins_h = e.window[u], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[u + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[u + T - 1]) & e.hash_mask, e.prev[u & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = u, u++, e.insert--, !(e.lookahead + e.insert < T)););
					} while (e.lookahead < D && e.strm.avail_in !== 0);
				}
				function U(e, n) {
					for (var i, a;;) {
						if (e.lookahead < D) {
							if (H(e), e.lookahead < D && n === d) return A;
							if (e.lookahead === 0) break;
						}
						if (i = 0, e.lookahead >= T && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + T - 1]) & e.hash_mask, i = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), i !== 0 && e.strstart - i <= e.w_size - D && (e.match_length = V(e, i)), e.match_length >= T) if (a = s._tr_tally(e, e.strstart - e.match_start, e.match_length - T), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= T) {
							for (e.match_length--; e.strstart++, e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + T - 1]) & e.hash_mask, i = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart, --e.match_length != 0;);
							e.strstart++;
						} else e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
						else a = s._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
						if (a && (R(e, !1), e.strm.avail_out === 0)) return A;
					}
					return e.insert = e.strstart < T - 1 ? e.strstart : T - 1, n === f ? (R(e, !0), e.strm.avail_out === 0 ? M : N) : e.last_lit && (R(e, !1), e.strm.avail_out === 0) ? A : j;
				}
				function W(e, n) {
					for (var i, a, o;;) {
						if (e.lookahead < D) {
							if (H(e), e.lookahead < D && n === d) return A;
							if (e.lookahead === 0) break;
						}
						if (i = 0, e.lookahead >= T && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + T - 1]) & e.hash_mask, i = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = T - 1, i !== 0 && e.prev_length < e.max_lazy_match && e.strstart - i <= e.w_size - D && (e.match_length = V(e, i), e.match_length <= 5 && (e.strategy === 1 || e.match_length === T && 4096 < e.strstart - e.match_start) && (e.match_length = T - 1)), e.prev_length >= T && e.match_length <= e.prev_length) {
							for (o = e.strstart + e.lookahead - T, a = s._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - T), e.lookahead -= e.prev_length - 1, e.prev_length -= 2; ++e.strstart <= o && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + T - 1]) & e.hash_mask, i = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), --e.prev_length != 0;);
							if (e.match_available = 0, e.match_length = T - 1, e.strstart++, a && (R(e, !1), e.strm.avail_out === 0)) return A;
						} else if (e.match_available) {
							if ((a = s._tr_tally(e, 0, e.window[e.strstart - 1])) && R(e, !1), e.strstart++, e.lookahead--, e.strm.avail_out === 0) return A;
						} else e.match_available = 1, e.strstart++, e.lookahead--;
					}
					return e.match_available &&= (a = s._tr_tally(e, 0, e.window[e.strstart - 1]), 0), e.insert = e.strstart < T - 1 ? e.strstart : T - 1, n === f ? (R(e, !0), e.strm.avail_out === 0 ? M : N) : e.last_lit && (R(e, !1), e.strm.avail_out === 0) ? A : j;
				}
				function G(e, n, i, a, o) {
					this.good_length = e, this.max_lazy = n, this.nice_length = i, this.max_chain = a, this.func = o;
				}
				function K() {
					this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = v, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new o.Buf16(2 * C), this.dyn_dtree = new o.Buf16(2 * (2 * x + 1)), this.bl_tree = new o.Buf16(2 * (2 * S + 1)), I(this.dyn_ltree), I(this.dyn_dtree), I(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new o.Buf16(w + 1), this.heap = new o.Buf16(2 * b + 1), I(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new o.Buf16(2 * b + 1), I(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
				}
				function q(e) {
					var n;
					return e && e.state ? (e.total_in = e.total_out = 0, e.data_type = _, (n = e.state).pending = 0, n.pending_out = 0, n.wrap < 0 && (n.wrap = -n.wrap), n.status = n.wrap ? O : k, e.adler = n.wrap === 2 ? 0 : 1, n.last_flush = d, s._tr_init(n), p) : P(e, m);
				}
				function J(e) {
					var n = q(e);
					return n === p && function(e) {
						e.window_size = 2 * e.w_size, I(e.head), e.max_lazy_match = a[e.level].max_lazy, e.good_match = a[e.level].good_length, e.nice_match = a[e.level].nice_length, e.max_chain_length = a[e.level].max_chain, e.strstart = 0, e.block_start = 0, e.lookahead = 0, e.insert = 0, e.match_length = e.prev_length = T - 1, e.match_available = 0, e.ins_h = 0;
					}(e.state), n;
				}
				function Y(e, n, i, a, s, c) {
					if (!e) return m;
					var l = 1;
					if (n === h && (n = 6), a < 0 ? (l = 0, a = -a) : 15 < a && (l = 2, a -= 16), s < 1 || y < s || i !== v || a < 8 || 15 < a || n < 0 || 9 < n || c < 0 || g < c) return P(e, m);
					a === 8 && (a = 9);
					var u = new K();
					return (e.state = u).strm = e, u.wrap = l, u.gzhead = null, u.w_bits = a, u.w_size = 1 << u.w_bits, u.w_mask = u.w_size - 1, u.hash_bits = s + 7, u.hash_size = 1 << u.hash_bits, u.hash_mask = u.hash_size - 1, u.hash_shift = ~~((u.hash_bits + T - 1) / T), u.window = new o.Buf8(2 * u.w_size), u.head = new o.Buf16(u.hash_size), u.prev = new o.Buf16(u.w_size), u.lit_bufsize = 1 << s + 6, u.pending_buf_size = 4 * u.lit_bufsize, u.pending_buf = new o.Buf8(u.pending_buf_size), u.d_buf = 1 * u.lit_bufsize, u.l_buf = 3 * u.lit_bufsize, u.level = n, u.strategy = c, u.method = i, J(e);
				}
				a = [
					new G(0, 0, 0, 0, function(e, n) {
						var i = 65535;
						for (i > e.pending_buf_size - 5 && (i = e.pending_buf_size - 5);;) {
							if (e.lookahead <= 1) {
								if (H(e), e.lookahead === 0 && n === d) return A;
								if (e.lookahead === 0) break;
							}
							e.strstart += e.lookahead, e.lookahead = 0;
							var a = e.block_start + i;
							if ((e.strstart === 0 || e.strstart >= a) && (e.lookahead = e.strstart - a, e.strstart = a, R(e, !1), e.strm.avail_out === 0) || e.strstart - e.block_start >= e.w_size - D && (R(e, !1), e.strm.avail_out === 0)) return A;
						}
						return e.insert = 0, n === f ? (R(e, !0), e.strm.avail_out === 0 ? M : N) : (e.strstart > e.block_start && (R(e, !1), e.strm.avail_out), A);
					}),
					new G(4, 4, 8, 4, U),
					new G(4, 5, 16, 8, U),
					new G(4, 6, 32, 32, U),
					new G(4, 4, 16, 16, W),
					new G(8, 16, 32, 32, W),
					new G(8, 16, 128, 128, W),
					new G(8, 32, 128, 256, W),
					new G(32, 128, 258, 1024, W),
					new G(32, 258, 258, 4096, W)
				], i.deflateInit = function(e, n) {
					return Y(e, n, v, 15, 8, 0);
				}, i.deflateInit2 = Y, i.deflateReset = J, i.deflateResetKeep = q, i.deflateSetHeader = function(e, n) {
					return e && e.state && e.state.wrap === 2 ? (e.state.gzhead = n, p) : m;
				}, i.deflate = function(e, n) {
					var i, o, c, u;
					if (!e || !e.state || 5 < n || n < 0) return e ? P(e, m) : m;
					if (o = e.state, !e.output || !e.input && e.avail_in !== 0 || o.status === 666 && n !== f) return P(e, e.avail_out === 0 ? -5 : m);
					if (o.strm = e, i = o.last_flush, o.last_flush = n, o.status === O) if (o.wrap === 2) e.adler = 0, z(o, 31), z(o, 139), z(o, 8), o.gzhead ? (z(o, (o.gzhead.text ? 1 : 0) + (o.gzhead.hcrc ? 2 : 0) + (o.gzhead.extra ? 4 : 0) + (o.gzhead.name ? 8 : 0) + (o.gzhead.comment ? 16 : 0)), z(o, 255 & o.gzhead.time), z(o, o.gzhead.time >> 8 & 255), z(o, o.gzhead.time >> 16 & 255), z(o, o.gzhead.time >> 24 & 255), z(o, o.level === 9 ? 2 : 2 <= o.strategy || o.level < 2 ? 4 : 0), z(o, 255 & o.gzhead.os), o.gzhead.extra && o.gzhead.extra.length && (z(o, 255 & o.gzhead.extra.length), z(o, o.gzhead.extra.length >> 8 & 255)), o.gzhead.hcrc && (e.adler = l(e.adler, o.pending_buf, o.pending, 0)), o.gzindex = 0, o.status = 69) : (z(o, 0), z(o, 0), z(o, 0), z(o, 0), z(o, 0), z(o, o.level === 9 ? 2 : 2 <= o.strategy || o.level < 2 ? 4 : 0), z(o, 3), o.status = k);
					else {
						var h = v + (o.w_bits - 8 << 4) << 8;
						h |= (2 <= o.strategy || o.level < 2 ? 0 : o.level < 6 ? 1 : o.level === 6 ? 2 : 3) << 6, o.strstart !== 0 && (h |= 32), h += 31 - h % 31, o.status = k, B(o, h), o.strstart !== 0 && (B(o, e.adler >>> 16), B(o, 65535 & e.adler)), e.adler = 1;
					}
					if (o.status === 69) if (o.gzhead.extra) {
						for (c = o.pending; o.gzindex < (65535 & o.gzhead.extra.length) && (o.pending !== o.pending_buf_size || (o.gzhead.hcrc && o.pending > c && (e.adler = l(e.adler, o.pending_buf, o.pending - c, c)), L(e), c = o.pending, o.pending !== o.pending_buf_size));) z(o, 255 & o.gzhead.extra[o.gzindex]), o.gzindex++;
						o.gzhead.hcrc && o.pending > c && (e.adler = l(e.adler, o.pending_buf, o.pending - c, c)), o.gzindex === o.gzhead.extra.length && (o.gzindex = 0, o.status = 73);
					} else o.status = 73;
					if (o.status === 73) if (o.gzhead.name) {
						c = o.pending;
						do {
							if (o.pending === o.pending_buf_size && (o.gzhead.hcrc && o.pending > c && (e.adler = l(e.adler, o.pending_buf, o.pending - c, c)), L(e), c = o.pending, o.pending === o.pending_buf_size)) {
								u = 1;
								break;
							}
							u = o.gzindex < o.gzhead.name.length ? 255 & o.gzhead.name.charCodeAt(o.gzindex++) : 0, z(o, u);
						} while (u !== 0);
						o.gzhead.hcrc && o.pending > c && (e.adler = l(e.adler, o.pending_buf, o.pending - c, c)), u === 0 && (o.gzindex = 0, o.status = 91);
					} else o.status = 91;
					if (o.status === 91) if (o.gzhead.comment) {
						c = o.pending;
						do {
							if (o.pending === o.pending_buf_size && (o.gzhead.hcrc && o.pending > c && (e.adler = l(e.adler, o.pending_buf, o.pending - c, c)), L(e), c = o.pending, o.pending === o.pending_buf_size)) {
								u = 1;
								break;
							}
							u = o.gzindex < o.gzhead.comment.length ? 255 & o.gzhead.comment.charCodeAt(o.gzindex++) : 0, z(o, u);
						} while (u !== 0);
						o.gzhead.hcrc && o.pending > c && (e.adler = l(e.adler, o.pending_buf, o.pending - c, c)), u === 0 && (o.status = 103);
					} else o.status = 103;
					if (o.status === 103 && (o.gzhead.hcrc ? (o.pending + 2 > o.pending_buf_size && L(e), o.pending + 2 <= o.pending_buf_size && (z(o, 255 & e.adler), z(o, e.adler >> 8 & 255), e.adler = 0, o.status = k)) : o.status = k), o.pending !== 0) {
						if (L(e), e.avail_out === 0) return o.last_flush = -1, p;
					} else if (e.avail_in === 0 && F(n) <= F(i) && n !== f) return P(e, -5);
					if (o.status === 666 && e.avail_in !== 0) return P(e, -5);
					if (e.avail_in !== 0 || o.lookahead !== 0 || n !== d && o.status !== 666) {
						var g = o.strategy === 2 ? function(e, n) {
							for (var i;;) {
								if (e.lookahead === 0 && (H(e), e.lookahead === 0)) {
									if (n === d) return A;
									break;
								}
								if (e.match_length = 0, i = s._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, i && (R(e, !1), e.strm.avail_out === 0)) return A;
							}
							return e.insert = 0, n === f ? (R(e, !0), e.strm.avail_out === 0 ? M : N) : e.last_lit && (R(e, !1), e.strm.avail_out === 0) ? A : j;
						}(o, n) : o.strategy === 3 ? function(e, n) {
							for (var i, a, o, c, l = e.window;;) {
								if (e.lookahead <= E) {
									if (H(e), e.lookahead <= E && n === d) return A;
									if (e.lookahead === 0) break;
								}
								if (e.match_length = 0, e.lookahead >= T && 0 < e.strstart && (a = l[o = e.strstart - 1]) === l[++o] && a === l[++o] && a === l[++o]) {
									c = e.strstart + E;
									do									;
while (a === l[++o] && a === l[++o] && a === l[++o] && a === l[++o] && a === l[++o] && a === l[++o] && a === l[++o] && a === l[++o] && o < c);
									e.match_length = E - (c - o), e.match_length > e.lookahead && (e.match_length = e.lookahead);
								}
								if (e.match_length >= T ? (i = s._tr_tally(e, 1, e.match_length - T), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (i = s._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), i && (R(e, !1), e.strm.avail_out === 0)) return A;
							}
							return e.insert = 0, n === f ? (R(e, !0), e.strm.avail_out === 0 ? M : N) : e.last_lit && (R(e, !1), e.strm.avail_out === 0) ? A : j;
						}(o, n) : a[o.level].func(o, n);
						if (g !== M && g !== N || (o.status = 666), g === A || g === M) return e.avail_out === 0 && (o.last_flush = -1), p;
						if (g === j && (n === 1 ? s._tr_align(o) : n !== 5 && (s._tr_stored_block(o, 0, 0, !1), n === 3 && (I(o.head), o.lookahead === 0 && (o.strstart = 0, o.block_start = 0, o.insert = 0))), L(e), e.avail_out === 0)) return o.last_flush = -1, p;
					}
					return n === f ? o.wrap <= 0 ? 1 : (o.wrap === 2 ? (z(o, 255 & e.adler), z(o, e.adler >> 8 & 255), z(o, e.adler >> 16 & 255), z(o, e.adler >> 24 & 255), z(o, 255 & e.total_in), z(o, e.total_in >> 8 & 255), z(o, e.total_in >> 16 & 255), z(o, e.total_in >> 24 & 255)) : (B(o, e.adler >>> 16), B(o, 65535 & e.adler)), L(e), 0 < o.wrap && (o.wrap = -o.wrap), o.pending === 0 ? 1 : p) : p;
				}, i.deflateEnd = function(e) {
					var n;
					return e && e.state ? (n = e.state.status) !== O && n !== 69 && n !== 73 && n !== 91 && n !== 103 && n !== k && n !== 666 ? P(e, m) : (e.state = null, n === k ? P(e, -3) : p) : m;
				}, i.deflateSetDictionary = function(e, n) {
					var i, a, s, l, u, d, f, h, g = n.length;
					if (!e || !e.state || (l = (i = e.state).wrap) === 2 || l === 1 && i.status !== O || i.lookahead) return m;
					for (l === 1 && (e.adler = c(e.adler, n, g, 0)), i.wrap = 0, g >= i.w_size && (l === 0 && (I(i.head), i.strstart = 0, i.block_start = 0, i.insert = 0), h = new o.Buf8(i.w_size), o.arraySet(h, n, g - i.w_size, i.w_size, 0), n = h, g = i.w_size), u = e.avail_in, d = e.next_in, f = e.input, e.avail_in = g, e.next_in = 0, e.input = n, H(i); i.lookahead >= T;) {
						for (a = i.strstart, s = i.lookahead - (T - 1); i.ins_h = (i.ins_h << i.hash_shift ^ i.window[a + T - 1]) & i.hash_mask, i.prev[a & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = a, a++, --s;);
						i.strstart = a, i.lookahead = T - 1, H(i);
					}
					return i.strstart += i.lookahead, i.block_start = i.strstart, i.insert = i.lookahead, i.lookahead = 0, i.match_length = i.prev_length = T - 1, i.match_available = 0, e.next_in = d, e.input = f, e.avail_in = u, i.wrap = l, p;
				}, i.deflateInfo = "pako deflate (from Nodeca project)";
			}, {
				"../utils/common": 41,
				"./adler32": 43,
				"./crc32": 45,
				"./messages": 51,
				"./trees": 52
			}],
			47: [function(e, n, i) {
				n.exports = function() {
					this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
				};
			}, {}],
			48: [function(e, n, i) {
				n.exports = function(e, n) {
					var i = e.state, a = e.next_in, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T, E, D = e.input, O;
					o = a + (e.avail_in - 5), s = e.next_out, O = e.output, c = s - (n - e.avail_out), l = s + (e.avail_out - 257), u = i.dmax, d = i.wsize, f = i.whave, p = i.wnext, m = i.window, h = i.hold, g = i.bits, _ = i.lencode, v = i.distcode, y = (1 << i.lenbits) - 1, b = (1 << i.distbits) - 1;
					e: do {
						g < 15 && (h += D[a++] << g, g += 8, h += D[a++] << g, g += 8), x = _[h & y];
						t: for (;;) {
							if (h >>>= S = x >>> 24, g -= S, (S = x >>> 16 & 255) == 0) O[s++] = 65535 & x;
							else {
								if (!(16 & S)) {
									if (!(64 & S)) {
										x = _[(65535 & x) + (h & (1 << S) - 1)];
										continue t;
									}
									if (32 & S) {
										i.mode = 12;
										break e;
									}
									e.msg = "invalid literal/length code", i.mode = 30;
									break e;
								}
								C = 65535 & x, (S &= 15) && (g < S && (h += D[a++] << g, g += 8), C += h & (1 << S) - 1, h >>>= S, g -= S), g < 15 && (h += D[a++] << g, g += 8, h += D[a++] << g, g += 8), x = v[h & b];
								r: for (;;) {
									if (h >>>= S = x >>> 24, g -= S, !(16 & (S = x >>> 16 & 255))) {
										if (!(64 & S)) {
											x = v[(65535 & x) + (h & (1 << S) - 1)];
											continue r;
										}
										e.msg = "invalid distance code", i.mode = 30;
										break e;
									}
									if (w = 65535 & x, g < (S &= 15) && (h += D[a++] << g, (g += 8) < S && (h += D[a++] << g, g += 8)), u < (w += h & (1 << S) - 1)) {
										e.msg = "invalid distance too far back", i.mode = 30;
										break e;
									}
									if (h >>>= S, g -= S, (S = s - c) < w) {
										if (f < (S = w - S) && i.sane) {
											e.msg = "invalid distance too far back", i.mode = 30;
											break e;
										}
										if (E = m, (T = 0) === p) {
											if (T += d - S, S < C) {
												for (C -= S; O[s++] = m[T++], --S;);
												T = s - w, E = O;
											}
										} else if (p < S) {
											if (T += d + p - S, (S -= p) < C) {
												for (C -= S; O[s++] = m[T++], --S;);
												if (T = 0, p < C) {
													for (C -= S = p; O[s++] = m[T++], --S;);
													T = s - w, E = O;
												}
											}
										} else if (T += p - S, S < C) {
											for (C -= S; O[s++] = m[T++], --S;);
											T = s - w, E = O;
										}
										for (; 2 < C;) O[s++] = E[T++], O[s++] = E[T++], O[s++] = E[T++], C -= 3;
										C && (O[s++] = E[T++], 1 < C && (O[s++] = E[T++]));
									} else {
										for (T = s - w; O[s++] = O[T++], O[s++] = O[T++], O[s++] = O[T++], 2 < (C -= 3););
										C && (O[s++] = O[T++], 1 < C && (O[s++] = O[T++]));
									}
									break;
								}
							}
							break;
						}
					} while (a < o && s < l);
					a -= C = g >> 3, h &= (1 << (g -= C << 3)) - 1, e.next_in = a, e.next_out = s, e.avail_in = a < o ? o - a + 5 : 5 - (a - o), e.avail_out = s < l ? l - s + 257 : 257 - (s - l), i.hold = h, i.bits = g;
				};
			}, {}],
			49: [function(e, n, i) {
				var a = e("../utils/common"), o = e("./adler32"), s = e("./crc32"), c = e("./inffast"), l = e("./inftrees"), u = 1, d = 2, f = 0, p = -2, m = 1, h = 852, g = 592;
				function _(e) {
					return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24);
				}
				function v() {
					this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new a.Buf16(320), this.work = new a.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
				}
				function y(e) {
					var n;
					return e && e.state ? (n = e.state, e.total_in = e.total_out = n.total = 0, e.msg = "", n.wrap && (e.adler = 1 & n.wrap), n.mode = m, n.last = 0, n.havedict = 0, n.dmax = 32768, n.head = null, n.hold = 0, n.bits = 0, n.lencode = n.lendyn = new a.Buf32(h), n.distcode = n.distdyn = new a.Buf32(g), n.sane = 1, n.back = -1, f) : p;
				}
				function b(e) {
					var n;
					return e && e.state ? ((n = e.state).wsize = 0, n.whave = 0, n.wnext = 0, y(e)) : p;
				}
				function x(e, n) {
					var i, a;
					return e && e.state ? (a = e.state, n < 0 ? (i = 0, n = -n) : (i = 1 + (n >> 4), n < 48 && (n &= 15)), n && (n < 8 || 15 < n) ? p : (a.window !== null && a.wbits !== n && (a.window = null), a.wrap = i, a.wbits = n, b(e))) : p;
				}
				function S(e, n) {
					var i, a;
					return e ? (a = new v(), (e.state = a).window = null, (i = x(e, n)) !== f && (e.state = null), i) : p;
				}
				var C, w, T = !0;
				function E(e) {
					if (T) {
						var n;
						for (C = new a.Buf32(512), w = new a.Buf32(32), n = 0; n < 144;) e.lens[n++] = 8;
						for (; n < 256;) e.lens[n++] = 9;
						for (; n < 280;) e.lens[n++] = 7;
						for (; n < 288;) e.lens[n++] = 8;
						for (l(u, e.lens, 0, 288, C, 0, e.work, { bits: 9 }), n = 0; n < 32;) e.lens[n++] = 5;
						l(d, e.lens, 0, 32, w, 0, e.work, { bits: 5 }), T = !1;
					}
					e.lencode = C, e.lenbits = 9, e.distcode = w, e.distbits = 5;
				}
				function D(e, n, i, o) {
					var s, c = e.state;
					return c.window === null && (c.wsize = 1 << c.wbits, c.wnext = 0, c.whave = 0, c.window = new a.Buf8(c.wsize)), o >= c.wsize ? (a.arraySet(c.window, n, i - c.wsize, c.wsize, 0), c.wnext = 0, c.whave = c.wsize) : (o < (s = c.wsize - c.wnext) && (s = o), a.arraySet(c.window, n, i - o, s, c.wnext), (o -= s) ? (a.arraySet(c.window, n, i - o, o, 0), c.wnext = o, c.whave = c.wsize) : (c.wnext += s, c.wnext === c.wsize && (c.wnext = 0), c.whave < c.wsize && (c.whave += s))), 0;
				}
				i.inflateReset = b, i.inflateReset2 = x, i.inflateResetKeep = y, i.inflateInit = function(e) {
					return S(e, 15);
				}, i.inflateInit2 = S, i.inflate = function(e, n) {
					var i, h, g, v, y, b, x, S, C, w, T, O, k, A, j, M, N, P, F, I, L, R, z, B, V = 0, H = new a.Buf8(4), U = [
						16,
						17,
						18,
						0,
						8,
						7,
						9,
						6,
						10,
						5,
						11,
						4,
						12,
						3,
						13,
						2,
						14,
						1,
						15
					];
					if (!e || !e.state || !e.output || !e.input && e.avail_in !== 0) return p;
					(i = e.state).mode === 12 && (i.mode = 13), y = e.next_out, g = e.output, x = e.avail_out, v = e.next_in, h = e.input, b = e.avail_in, S = i.hold, C = i.bits, w = b, T = x, R = f;
					e: for (;;) switch (i.mode) {
						case m:
							if (i.wrap === 0) {
								i.mode = 13;
								break;
							}
							for (; C < 16;) {
								if (b === 0) break e;
								b--, S += h[v++] << C, C += 8;
							}
							if (2 & i.wrap && S === 35615) {
								H[i.check = 0] = 255 & S, H[1] = S >>> 8 & 255, i.check = s(i.check, H, 2, 0), C = S = 0, i.mode = 2;
								break;
							}
							if (i.flags = 0, i.head && (i.head.done = !1), !(1 & i.wrap) || (((255 & S) << 8) + (S >> 8)) % 31) {
								e.msg = "incorrect header check", i.mode = 30;
								break;
							}
							if ((15 & S) != 8) {
								e.msg = "unknown compression method", i.mode = 30;
								break;
							}
							if (C -= 4, L = 8 + (15 & (S >>>= 4)), i.wbits === 0) i.wbits = L;
							else if (L > i.wbits) {
								e.msg = "invalid window size", i.mode = 30;
								break;
							}
							i.dmax = 1 << L, e.adler = i.check = 1, i.mode = 512 & S ? 10 : 12, C = S = 0;
							break;
						case 2:
							for (; C < 16;) {
								if (b === 0) break e;
								b--, S += h[v++] << C, C += 8;
							}
							if (i.flags = S, (255 & i.flags) != 8) {
								e.msg = "unknown compression method", i.mode = 30;
								break;
							}
							if (57344 & i.flags) {
								e.msg = "unknown header flags set", i.mode = 30;
								break;
							}
							i.head && (i.head.text = S >> 8 & 1), 512 & i.flags && (H[0] = 255 & S, H[1] = S >>> 8 & 255, i.check = s(i.check, H, 2, 0)), C = S = 0, i.mode = 3;
						case 3:
							for (; C < 32;) {
								if (b === 0) break e;
								b--, S += h[v++] << C, C += 8;
							}
							i.head && (i.head.time = S), 512 & i.flags && (H[0] = 255 & S, H[1] = S >>> 8 & 255, H[2] = S >>> 16 & 255, H[3] = S >>> 24 & 255, i.check = s(i.check, H, 4, 0)), C = S = 0, i.mode = 4;
						case 4:
							for (; C < 16;) {
								if (b === 0) break e;
								b--, S += h[v++] << C, C += 8;
							}
							i.head && (i.head.xflags = 255 & S, i.head.os = S >> 8), 512 & i.flags && (H[0] = 255 & S, H[1] = S >>> 8 & 255, i.check = s(i.check, H, 2, 0)), C = S = 0, i.mode = 5;
						case 5:
							if (1024 & i.flags) {
								for (; C < 16;) {
									if (b === 0) break e;
									b--, S += h[v++] << C, C += 8;
								}
								i.length = S, i.head && (i.head.extra_len = S), 512 & i.flags && (H[0] = 255 & S, H[1] = S >>> 8 & 255, i.check = s(i.check, H, 2, 0)), C = S = 0;
							} else i.head && (i.head.extra = null);
							i.mode = 6;
						case 6:
							if (1024 & i.flags && (b < (O = i.length) && (O = b), O && (i.head && (L = i.head.extra_len - i.length, i.head.extra || (i.head.extra = Array(i.head.extra_len)), a.arraySet(i.head.extra, h, v, O, L)), 512 & i.flags && (i.check = s(i.check, h, O, v)), b -= O, v += O, i.length -= O), i.length)) break e;
							i.length = 0, i.mode = 7;
						case 7:
							if (2048 & i.flags) {
								if (b === 0) break e;
								for (O = 0; L = h[v + O++], i.head && L && i.length < 65536 && (i.head.name += String.fromCharCode(L)), L && O < b;);
								if (512 & i.flags && (i.check = s(i.check, h, O, v)), b -= O, v += O, L) break e;
							} else i.head && (i.head.name = null);
							i.length = 0, i.mode = 8;
						case 8:
							if (4096 & i.flags) {
								if (b === 0) break e;
								for (O = 0; L = h[v + O++], i.head && L && i.length < 65536 && (i.head.comment += String.fromCharCode(L)), L && O < b;);
								if (512 & i.flags && (i.check = s(i.check, h, O, v)), b -= O, v += O, L) break e;
							} else i.head && (i.head.comment = null);
							i.mode = 9;
						case 9:
							if (512 & i.flags) {
								for (; C < 16;) {
									if (b === 0) break e;
									b--, S += h[v++] << C, C += 8;
								}
								if (S !== (65535 & i.check)) {
									e.msg = "header crc mismatch", i.mode = 30;
									break;
								}
								C = S = 0;
							}
							i.head && (i.head.hcrc = i.flags >> 9 & 1, i.head.done = !0), e.adler = i.check = 0, i.mode = 12;
							break;
						case 10:
							for (; C < 32;) {
								if (b === 0) break e;
								b--, S += h[v++] << C, C += 8;
							}
							e.adler = i.check = _(S), C = S = 0, i.mode = 11;
						case 11:
							if (i.havedict === 0) return e.next_out = y, e.avail_out = x, e.next_in = v, e.avail_in = b, i.hold = S, i.bits = C, 2;
							e.adler = i.check = 1, i.mode = 12;
						case 12: if (n === 5 || n === 6) break e;
						case 13:
							if (i.last) {
								S >>>= 7 & C, C -= 7 & C, i.mode = 27;
								break;
							}
							for (; C < 3;) {
								if (b === 0) break e;
								b--, S += h[v++] << C, C += 8;
							}
							switch (i.last = 1 & S, --C, 3 & (S >>>= 1)) {
								case 0:
									i.mode = 14;
									break;
								case 1:
									if (E(i), i.mode = 20, n !== 6) break;
									S >>>= 2, C -= 2;
									break e;
								case 2:
									i.mode = 17;
									break;
								case 3: e.msg = "invalid block type", i.mode = 30;
							}
							S >>>= 2, C -= 2;
							break;
						case 14:
							for (S >>>= 7 & C, C -= 7 & C; C < 32;) {
								if (b === 0) break e;
								b--, S += h[v++] << C, C += 8;
							}
							if ((65535 & S) != (S >>> 16 ^ 65535)) {
								e.msg = "invalid stored block lengths", i.mode = 30;
								break;
							}
							if (i.length = 65535 & S, C = S = 0, i.mode = 15, n === 6) break e;
						case 15: i.mode = 16;
						case 16:
							if (O = i.length) {
								if (b < O && (O = b), x < O && (O = x), O === 0) break e;
								a.arraySet(g, h, v, O, y), b -= O, v += O, x -= O, y += O, i.length -= O;
								break;
							}
							i.mode = 12;
							break;
						case 17:
							for (; C < 14;) {
								if (b === 0) break e;
								b--, S += h[v++] << C, C += 8;
							}
							if (i.nlen = 257 + (31 & S), S >>>= 5, C -= 5, i.ndist = 1 + (31 & S), S >>>= 5, C -= 5, i.ncode = 4 + (15 & S), S >>>= 4, C -= 4, 286 < i.nlen || 30 < i.ndist) {
								e.msg = "too many length or distance symbols", i.mode = 30;
								break;
							}
							i.have = 0, i.mode = 18;
						case 18:
							for (; i.have < i.ncode;) {
								for (; C < 3;) {
									if (b === 0) break e;
									b--, S += h[v++] << C, C += 8;
								}
								i.lens[U[i.have++]] = 7 & S, S >>>= 3, C -= 3;
							}
							for (; i.have < 19;) i.lens[U[i.have++]] = 0;
							if (i.lencode = i.lendyn, i.lenbits = 7, z = { bits: i.lenbits }, R = l(0, i.lens, 0, 19, i.lencode, 0, i.work, z), i.lenbits = z.bits, R) {
								e.msg = "invalid code lengths set", i.mode = 30;
								break;
							}
							i.have = 0, i.mode = 19;
						case 19:
							for (; i.have < i.nlen + i.ndist;) {
								for (; M = (V = i.lencode[S & (1 << i.lenbits) - 1]) >>> 16 & 255, N = 65535 & V, !((j = V >>> 24) <= C);) {
									if (b === 0) break e;
									b--, S += h[v++] << C, C += 8;
								}
								if (N < 16) S >>>= j, C -= j, i.lens[i.have++] = N;
								else {
									if (N === 16) {
										for (B = j + 2; C < B;) {
											if (b === 0) break e;
											b--, S += h[v++] << C, C += 8;
										}
										if (S >>>= j, C -= j, i.have === 0) {
											e.msg = "invalid bit length repeat", i.mode = 30;
											break;
										}
										L = i.lens[i.have - 1], O = 3 + (3 & S), S >>>= 2, C -= 2;
									} else if (N === 17) {
										for (B = j + 3; C < B;) {
											if (b === 0) break e;
											b--, S += h[v++] << C, C += 8;
										}
										C -= j, L = 0, O = 3 + (7 & (S >>>= j)), S >>>= 3, C -= 3;
									} else {
										for (B = j + 7; C < B;) {
											if (b === 0) break e;
											b--, S += h[v++] << C, C += 8;
										}
										C -= j, L = 0, O = 11 + (127 & (S >>>= j)), S >>>= 7, C -= 7;
									}
									if (i.have + O > i.nlen + i.ndist) {
										e.msg = "invalid bit length repeat", i.mode = 30;
										break;
									}
									for (; O--;) i.lens[i.have++] = L;
								}
							}
							if (i.mode === 30) break;
							if (i.lens[256] === 0) {
								e.msg = "invalid code -- missing end-of-block", i.mode = 30;
								break;
							}
							if (i.lenbits = 9, z = { bits: i.lenbits }, R = l(u, i.lens, 0, i.nlen, i.lencode, 0, i.work, z), i.lenbits = z.bits, R) {
								e.msg = "invalid literal/lengths set", i.mode = 30;
								break;
							}
							if (i.distbits = 6, i.distcode = i.distdyn, z = { bits: i.distbits }, R = l(d, i.lens, i.nlen, i.ndist, i.distcode, 0, i.work, z), i.distbits = z.bits, R) {
								e.msg = "invalid distances set", i.mode = 30;
								break;
							}
							if (i.mode = 20, n === 6) break e;
						case 20: i.mode = 21;
						case 21:
							if (6 <= b && 258 <= x) {
								e.next_out = y, e.avail_out = x, e.next_in = v, e.avail_in = b, i.hold = S, i.bits = C, c(e, T), y = e.next_out, g = e.output, x = e.avail_out, v = e.next_in, h = e.input, b = e.avail_in, S = i.hold, C = i.bits, i.mode === 12 && (i.back = -1);
								break;
							}
							for (i.back = 0; M = (V = i.lencode[S & (1 << i.lenbits) - 1]) >>> 16 & 255, N = 65535 & V, !((j = V >>> 24) <= C);) {
								if (b === 0) break e;
								b--, S += h[v++] << C, C += 8;
							}
							if (M && !(240 & M)) {
								for (P = j, F = M, I = N; M = (V = i.lencode[I + ((S & (1 << P + F) - 1) >> P)]) >>> 16 & 255, N = 65535 & V, !(P + (j = V >>> 24) <= C);) {
									if (b === 0) break e;
									b--, S += h[v++] << C, C += 8;
								}
								S >>>= P, C -= P, i.back += P;
							}
							if (S >>>= j, C -= j, i.back += j, i.length = N, M === 0) {
								i.mode = 26;
								break;
							}
							if (32 & M) {
								i.back = -1, i.mode = 12;
								break;
							}
							if (64 & M) {
								e.msg = "invalid literal/length code", i.mode = 30;
								break;
							}
							i.extra = 15 & M, i.mode = 22;
						case 22:
							if (i.extra) {
								for (B = i.extra; C < B;) {
									if (b === 0) break e;
									b--, S += h[v++] << C, C += 8;
								}
								i.length += S & (1 << i.extra) - 1, S >>>= i.extra, C -= i.extra, i.back += i.extra;
							}
							i.was = i.length, i.mode = 23;
						case 23:
							for (; M = (V = i.distcode[S & (1 << i.distbits) - 1]) >>> 16 & 255, N = 65535 & V, !((j = V >>> 24) <= C);) {
								if (b === 0) break e;
								b--, S += h[v++] << C, C += 8;
							}
							if (!(240 & M)) {
								for (P = j, F = M, I = N; M = (V = i.distcode[I + ((S & (1 << P + F) - 1) >> P)]) >>> 16 & 255, N = 65535 & V, !(P + (j = V >>> 24) <= C);) {
									if (b === 0) break e;
									b--, S += h[v++] << C, C += 8;
								}
								S >>>= P, C -= P, i.back += P;
							}
							if (S >>>= j, C -= j, i.back += j, 64 & M) {
								e.msg = "invalid distance code", i.mode = 30;
								break;
							}
							i.offset = N, i.extra = 15 & M, i.mode = 24;
						case 24:
							if (i.extra) {
								for (B = i.extra; C < B;) {
									if (b === 0) break e;
									b--, S += h[v++] << C, C += 8;
								}
								i.offset += S & (1 << i.extra) - 1, S >>>= i.extra, C -= i.extra, i.back += i.extra;
							}
							if (i.offset > i.dmax) {
								e.msg = "invalid distance too far back", i.mode = 30;
								break;
							}
							i.mode = 25;
						case 25:
							if (x === 0) break e;
							if (O = T - x, i.offset > O) {
								if ((O = i.offset - O) > i.whave && i.sane) {
									e.msg = "invalid distance too far back", i.mode = 30;
									break;
								}
								k = O > i.wnext ? (O -= i.wnext, i.wsize - O) : i.wnext - O, O > i.length && (O = i.length), A = i.window;
							} else A = g, k = y - i.offset, O = i.length;
							for (x < O && (O = x), x -= O, i.length -= O; g[y++] = A[k++], --O;);
							i.length === 0 && (i.mode = 21);
							break;
						case 26:
							if (x === 0) break e;
							g[y++] = i.length, x--, i.mode = 21;
							break;
						case 27:
							if (i.wrap) {
								for (; C < 32;) {
									if (b === 0) break e;
									b--, S |= h[v++] << C, C += 8;
								}
								if (T -= x, e.total_out += T, i.total += T, T && (e.adler = i.check = i.flags ? s(i.check, g, T, y - T) : o(i.check, g, T, y - T)), T = x, (i.flags ? S : _(S)) !== i.check) {
									e.msg = "incorrect data check", i.mode = 30;
									break;
								}
								C = S = 0;
							}
							i.mode = 28;
						case 28:
							if (i.wrap && i.flags) {
								for (; C < 32;) {
									if (b === 0) break e;
									b--, S += h[v++] << C, C += 8;
								}
								if (S !== (4294967295 & i.total)) {
									e.msg = "incorrect length check", i.mode = 30;
									break;
								}
								C = S = 0;
							}
							i.mode = 29;
						case 29:
							R = 1;
							break e;
						case 30:
							R = -3;
							break e;
						case 31: return -4;
						case 32:
						default: return p;
					}
					return e.next_out = y, e.avail_out = x, e.next_in = v, e.avail_in = b, i.hold = S, i.bits = C, (i.wsize || T !== e.avail_out && i.mode < 30 && (i.mode < 27 || n !== 4)) && D(e, e.output, e.next_out, T - e.avail_out) ? (i.mode = 31, -4) : (w -= e.avail_in, T -= e.avail_out, e.total_in += w, e.total_out += T, i.total += T, i.wrap && T && (e.adler = i.check = i.flags ? s(i.check, g, T, e.next_out - T) : o(i.check, g, T, e.next_out - T)), e.data_type = i.bits + (i.last ? 64 : 0) + (i.mode === 12 ? 128 : 0) + (i.mode === 20 || i.mode === 15 ? 256 : 0), (w == 0 && T === 0 || n === 4) && R === f && (R = -5), R);
				}, i.inflateEnd = function(e) {
					if (!e || !e.state) return p;
					var n = e.state;
					return n.window &&= null, e.state = null, f;
				}, i.inflateGetHeader = function(e, n) {
					var i;
					return e && e.state && 2 & (i = e.state).wrap ? ((i.head = n).done = !1, f) : p;
				}, i.inflateSetDictionary = function(e, n) {
					var i, a = n.length;
					return e && e.state ? (i = e.state).wrap !== 0 && i.mode !== 11 ? p : i.mode === 11 && o(1, n, a, 0) !== i.check ? -3 : D(e, n, a, a) ? (i.mode = 31, -4) : (i.havedict = 1, f) : p;
				}, i.inflateInfo = "pako inflate (from Nodeca project)";
			}, {
				"../utils/common": 41,
				"./adler32": 43,
				"./crc32": 45,
				"./inffast": 48,
				"./inftrees": 50
			}],
			50: [function(e, n, i) {
				var a = e("../utils/common"), o = [
					3,
					4,
					5,
					6,
					7,
					8,
					9,
					10,
					11,
					13,
					15,
					17,
					19,
					23,
					27,
					31,
					35,
					43,
					51,
					59,
					67,
					83,
					99,
					115,
					131,
					163,
					195,
					227,
					258,
					0,
					0
				], s = [
					16,
					16,
					16,
					16,
					16,
					16,
					16,
					16,
					17,
					17,
					17,
					17,
					18,
					18,
					18,
					18,
					19,
					19,
					19,
					19,
					20,
					20,
					20,
					20,
					21,
					21,
					21,
					21,
					16,
					72,
					78
				], c = [
					1,
					2,
					3,
					4,
					5,
					7,
					9,
					13,
					17,
					25,
					33,
					49,
					65,
					97,
					129,
					193,
					257,
					385,
					513,
					769,
					1025,
					1537,
					2049,
					3073,
					4097,
					6145,
					8193,
					12289,
					16385,
					24577,
					0,
					0
				], l = [
					16,
					16,
					16,
					16,
					17,
					17,
					18,
					18,
					19,
					19,
					20,
					20,
					21,
					21,
					22,
					22,
					23,
					23,
					24,
					24,
					25,
					25,
					26,
					26,
					27,
					27,
					28,
					28,
					29,
					29,
					64,
					64
				];
				n.exports = function(e, n, i, u, d, f, p, m) {
					var h, g, _, v, y, b, x, S, C, w = m.bits, T = 0, E = 0, D = 0, O = 0, k = 0, A = 0, j = 0, M = 0, N = 0, P = 0, F = null, I = 0, L = new a.Buf16(16), R = new a.Buf16(16), z = null, B = 0;
					for (T = 0; T <= 15; T++) L[T] = 0;
					for (E = 0; E < u; E++) L[n[i + E]]++;
					for (k = w, O = 15; 1 <= O && L[O] === 0; O--);
					if (O < k && (k = O), O === 0) return d[f++] = 20971520, d[f++] = 20971520, m.bits = 1, 0;
					for (D = 1; D < O && L[D] === 0; D++);
					for (k < D && (k = D), T = M = 1; T <= 15; T++) if (M <<= 1, (M -= L[T]) < 0) return -1;
					if (0 < M && (e === 0 || O !== 1)) return -1;
					for (R[1] = 0, T = 1; T < 15; T++) R[T + 1] = R[T] + L[T];
					for (E = 0; E < u; E++) n[i + E] !== 0 && (p[R[n[i + E]]++] = E);
					if (b = e === 0 ? (F = z = p, 19) : e === 1 ? (F = o, I -= 257, z = s, B -= 257, 256) : (F = c, z = l, -1), T = D, y = f, j = E = P = 0, _ = -1, v = (N = 1 << (A = k)) - 1, e === 1 && 852 < N || e === 2 && 592 < N) return 1;
					for (;;) {
						for (x = T - j, C = p[E] < b ? (S = 0, p[E]) : p[E] > b ? (S = z[B + p[E]], F[I + p[E]]) : (S = 96, 0), h = 1 << T - j, D = g = 1 << A; d[y + (P >> j) + (g -= h)] = x << 24 | S << 16 | C | 0, g !== 0;);
						for (h = 1 << T - 1; P & h;) h >>= 1;
						if (h === 0 ? P = 0 : (P &= h - 1, P += h), E++, --L[T] == 0) {
							if (T === O) break;
							T = n[i + p[E]];
						}
						if (k < T && (P & v) !== _) {
							for (j === 0 && (j = k), y += D, M = 1 << (A = T - j); A + j < O && !((M -= L[A + j]) <= 0);) A++, M <<= 1;
							if (N += 1 << A, e === 1 && 852 < N || e === 2 && 592 < N) return 1;
							d[_ = P & v] = k << 24 | A << 16 | y - f | 0;
						}
					}
					return P !== 0 && (d[y + P] = T - j << 24 | 4194304), m.bits = k, 0;
				};
			}, { "../utils/common": 41 }],
			51: [function(e, n, i) {
				n.exports = {
					2: "need dictionary",
					1: "stream end",
					0: "",
					"-1": "file error",
					"-2": "stream error",
					"-3": "data error",
					"-4": "insufficient memory",
					"-5": "buffer error",
					"-6": "incompatible version"
				};
			}, {}],
			52: [function(e, n, i) {
				var a = e("../utils/common"), o = 0, s = 1;
				function c(e) {
					for (var n = e.length; 0 <= --n;) e[n] = 0;
				}
				var l = 0, u = 29, d = 256, f = d + 1 + u, p = 30, m = 19, h = 2 * f + 1, g = 15, _ = 16, v = 7, y = 256, b = 16, x = 17, S = 18, C = [
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					1,
					1,
					1,
					1,
					2,
					2,
					2,
					2,
					3,
					3,
					3,
					3,
					4,
					4,
					4,
					4,
					5,
					5,
					5,
					5,
					0
				], w = [
					0,
					0,
					0,
					0,
					1,
					1,
					2,
					2,
					3,
					3,
					4,
					4,
					5,
					5,
					6,
					6,
					7,
					7,
					8,
					8,
					9,
					9,
					10,
					10,
					11,
					11,
					12,
					12,
					13,
					13
				], T = [
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					2,
					3,
					7
				], E = [
					16,
					17,
					18,
					0,
					8,
					7,
					9,
					6,
					10,
					5,
					11,
					4,
					12,
					3,
					13,
					2,
					14,
					1,
					15
				], D = Array(2 * (f + 2));
				c(D);
				var O = Array(2 * p);
				c(O);
				var k = Array(512);
				c(k);
				var A = Array(256);
				c(A);
				var j = Array(u);
				c(j);
				var M, N, P, F = Array(p);
				function I(e, n, i, a, o) {
					this.static_tree = e, this.extra_bits = n, this.extra_base = i, this.elems = a, this.max_length = o, this.has_stree = e && e.length;
				}
				function L(e, n) {
					this.dyn_tree = e, this.max_code = 0, this.stat_desc = n;
				}
				function R(e) {
					return e < 256 ? k[e] : k[256 + (e >>> 7)];
				}
				function z(e, n) {
					e.pending_buf[e.pending++] = 255 & n, e.pending_buf[e.pending++] = n >>> 8 & 255;
				}
				function B(e, n, i) {
					e.bi_valid > _ - i ? (e.bi_buf |= n << e.bi_valid & 65535, z(e, e.bi_buf), e.bi_buf = n >> _ - e.bi_valid, e.bi_valid += i - _) : (e.bi_buf |= n << e.bi_valid & 65535, e.bi_valid += i);
				}
				function V(e, n, i) {
					B(e, i[2 * n], i[2 * n + 1]);
				}
				function H(e, n) {
					for (var i = 0; i |= 1 & e, e >>>= 1, i <<= 1, 0 < --n;);
					return i >>> 1;
				}
				function U(e, n, i) {
					var a, o, s = Array(g + 1), c = 0;
					for (a = 1; a <= g; a++) s[a] = c = c + i[a - 1] << 1;
					for (o = 0; o <= n; o++) {
						var l = e[2 * o + 1];
						l !== 0 && (e[2 * o] = H(s[l]++, l));
					}
				}
				function W(e) {
					var n;
					for (n = 0; n < f; n++) e.dyn_ltree[2 * n] = 0;
					for (n = 0; n < p; n++) e.dyn_dtree[2 * n] = 0;
					for (n = 0; n < m; n++) e.bl_tree[2 * n] = 0;
					e.dyn_ltree[2 * y] = 1, e.opt_len = e.static_len = 0, e.last_lit = e.matches = 0;
				}
				function G(e) {
					8 < e.bi_valid ? z(e, e.bi_buf) : 0 < e.bi_valid && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0;
				}
				function K(e, n, i, a) {
					var o = 2 * n, s = 2 * i;
					return e[o] < e[s] || e[o] === e[s] && a[n] <= a[i];
				}
				function q(e, n, i) {
					for (var a = e.heap[i], o = i << 1; o <= e.heap_len && (o < e.heap_len && K(n, e.heap[o + 1], e.heap[o], e.depth) && o++, !K(n, a, e.heap[o], e.depth));) e.heap[i] = e.heap[o], i = o, o <<= 1;
					e.heap[i] = a;
				}
				function J(e, n, i) {
					var a, o, s, c, l = 0;
					if (e.last_lit !== 0) for (; a = e.pending_buf[e.d_buf + 2 * l] << 8 | e.pending_buf[e.d_buf + 2 * l + 1], o = e.pending_buf[e.l_buf + l], l++, a === 0 ? V(e, o, n) : (V(e, (s = A[o]) + d + 1, n), (c = C[s]) !== 0 && B(e, o -= j[s], c), V(e, s = R(--a), i), (c = w[s]) !== 0 && B(e, a -= F[s], c)), l < e.last_lit;);
					V(e, y, n);
				}
				function Y(e, n) {
					var i, a, o, s = n.dyn_tree, c = n.stat_desc.static_tree, l = n.stat_desc.has_stree, u = n.stat_desc.elems, d = -1;
					for (e.heap_len = 0, e.heap_max = h, i = 0; i < u; i++) s[2 * i] === 0 ? s[2 * i + 1] = 0 : (e.heap[++e.heap_len] = d = i, e.depth[i] = 0);
					for (; e.heap_len < 2;) s[2 * (o = e.heap[++e.heap_len] = d < 2 ? ++d : 0)] = 1, e.depth[o] = 0, e.opt_len--, l && (e.static_len -= c[2 * o + 1]);
					for (n.max_code = d, i = e.heap_len >> 1; 1 <= i; i--) q(e, s, i);
					for (o = u; i = e.heap[1], e.heap[1] = e.heap[e.heap_len--], q(e, s, 1), a = e.heap[1], e.heap[--e.heap_max] = i, e.heap[--e.heap_max] = a, s[2 * o] = s[2 * i] + s[2 * a], e.depth[o] = (e.depth[i] >= e.depth[a] ? e.depth[i] : e.depth[a]) + 1, s[2 * i + 1] = s[2 * a + 1] = o, e.heap[1] = o++, q(e, s, 1), 2 <= e.heap_len;);
					e.heap[--e.heap_max] = e.heap[1], function(e, n) {
						var i, a, o, s, c, l, u = n.dyn_tree, d = n.max_code, f = n.stat_desc.static_tree, p = n.stat_desc.has_stree, m = n.stat_desc.extra_bits, _ = n.stat_desc.extra_base, v = n.stat_desc.max_length, y = 0;
						for (s = 0; s <= g; s++) e.bl_count[s] = 0;
						for (u[2 * e.heap[e.heap_max] + 1] = 0, i = e.heap_max + 1; i < h; i++) v < (s = u[2 * u[2 * (a = e.heap[i]) + 1] + 1] + 1) && (s = v, y++), u[2 * a + 1] = s, d < a || (e.bl_count[s]++, c = 0, _ <= a && (c = m[a - _]), l = u[2 * a], e.opt_len += l * (s + c), p && (e.static_len += l * (f[2 * a + 1] + c)));
						if (y !== 0) {
							do {
								for (s = v - 1; e.bl_count[s] === 0;) s--;
								e.bl_count[s]--, e.bl_count[s + 1] += 2, e.bl_count[v]--, y -= 2;
							} while (0 < y);
							for (s = v; s !== 0; s--) for (a = e.bl_count[s]; a !== 0;) d < (o = e.heap[--i]) || (u[2 * o + 1] !== s && (e.opt_len += (s - u[2 * o + 1]) * u[2 * o], u[2 * o + 1] = s), a--);
						}
					}(e, n), U(s, d, e.bl_count);
				}
				function X(e, n, i) {
					var a, o, s = -1, c = n[1], l = 0, u = 7, d = 4;
					for (c === 0 && (u = 138, d = 3), n[2 * (i + 1) + 1] = 65535, a = 0; a <= i; a++) o = c, c = n[2 * (a + 1) + 1], ++l < u && o === c || (l < d ? e.bl_tree[2 * o] += l : o === 0 ? l <= 10 ? e.bl_tree[2 * x]++ : e.bl_tree[2 * S]++ : (o !== s && e.bl_tree[2 * o]++, e.bl_tree[2 * b]++), s = o, d = (l = 0) === c ? (u = 138, 3) : o === c ? (u = 6, 3) : (u = 7, 4));
				}
				function Z(e, n, i) {
					var a, o, s = -1, c = n[1], l = 0, u = 7, d = 4;
					for (c === 0 && (u = 138, d = 3), a = 0; a <= i; a++) if (o = c, c = n[2 * (a + 1) + 1], !(++l < u && o === c)) {
						if (l < d) for (; V(e, o, e.bl_tree), --l != 0;);
						else o === 0 ? l <= 10 ? (V(e, x, e.bl_tree), B(e, l - 3, 3)) : (V(e, S, e.bl_tree), B(e, l - 11, 7)) : (o !== s && (V(e, o, e.bl_tree), l--), V(e, b, e.bl_tree), B(e, l - 3, 2));
						s = o, d = (l = 0) === c ? (u = 138, 3) : o === c ? (u = 6, 3) : (u = 7, 4);
					}
				}
				c(F);
				var Q = !1;
				function $(e, n, i, o) {
					B(e, (l << 1) + (o ? 1 : 0), 3), function(e, n, i, o) {
						G(e), o && (z(e, i), z(e, ~i)), a.arraySet(e.pending_buf, e.window, n, i, e.pending), e.pending += i;
					}(e, n, i, !0);
				}
				i._tr_init = function(e) {
					Q ||= (function() {
						var e, n, i, a, o, s = Array(g + 1);
						for (a = i = 0; a < u - 1; a++) for (j[a] = i, e = 0; e < 1 << C[a]; e++) A[i++] = a;
						for (A[i - 1] = a, a = o = 0; a < 16; a++) for (F[a] = o, e = 0; e < 1 << w[a]; e++) k[o++] = a;
						for (o >>= 7; a < p; a++) for (F[a] = o << 7, e = 0; e < 1 << w[a] - 7; e++) k[256 + o++] = a;
						for (n = 0; n <= g; n++) s[n] = 0;
						for (e = 0; e <= 143;) D[2 * e + 1] = 8, e++, s[8]++;
						for (; e <= 255;) D[2 * e + 1] = 9, e++, s[9]++;
						for (; e <= 279;) D[2 * e + 1] = 7, e++, s[7]++;
						for (; e <= 287;) D[2 * e + 1] = 8, e++, s[8]++;
						for (U(D, f + 1, s), e = 0; e < p; e++) O[2 * e + 1] = 5, O[2 * e] = H(e, 5);
						M = new I(D, C, d + 1, f, g), N = new I(O, w, 0, p, g), P = new I([], T, 0, m, v);
					}(), !0), e.l_desc = new L(e.dyn_ltree, M), e.d_desc = new L(e.dyn_dtree, N), e.bl_desc = new L(e.bl_tree, P), e.bi_buf = 0, e.bi_valid = 0, W(e);
				}, i._tr_stored_block = $, i._tr_flush_block = function(e, n, i, a) {
					var c, l, u = 0;
					0 < e.level ? (e.strm.data_type === 2 && (e.strm.data_type = function(e) {
						var n, i = 4093624447;
						for (n = 0; n <= 31; n++, i >>>= 1) if (1 & i && e.dyn_ltree[2 * n] !== 0) return o;
						if (e.dyn_ltree[18] !== 0 || e.dyn_ltree[20] !== 0 || e.dyn_ltree[26] !== 0) return s;
						for (n = 32; n < d; n++) if (e.dyn_ltree[2 * n] !== 0) return s;
						return o;
					}(e)), Y(e, e.l_desc), Y(e, e.d_desc), u = function(e) {
						var n;
						for (X(e, e.dyn_ltree, e.l_desc.max_code), X(e, e.dyn_dtree, e.d_desc.max_code), Y(e, e.bl_desc), n = m - 1; 3 <= n && e.bl_tree[2 * E[n] + 1] === 0; n--);
						return e.opt_len += 3 * (n + 1) + 5 + 5 + 4, n;
					}(e), c = e.opt_len + 3 + 7 >>> 3, (l = e.static_len + 3 + 7 >>> 3) <= c && (c = l)) : c = l = i + 5, i + 4 <= c && n !== -1 ? $(e, n, i, a) : e.strategy === 4 || l === c ? (B(e, 2 + (a ? 1 : 0), 3), J(e, D, O)) : (B(e, 4 + (a ? 1 : 0), 3), function(e, n, i, a) {
						var o;
						for (B(e, n - 257, 5), B(e, i - 1, 5), B(e, a - 4, 4), o = 0; o < a; o++) B(e, e.bl_tree[2 * E[o] + 1], 3);
						Z(e, e.dyn_ltree, n - 1), Z(e, e.dyn_dtree, i - 1);
					}(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, u + 1), J(e, e.dyn_ltree, e.dyn_dtree)), W(e), a && G(e);
				}, i._tr_tally = function(e, n, i) {
					return e.pending_buf[e.d_buf + 2 * e.last_lit] = n >>> 8 & 255, e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & n, e.pending_buf[e.l_buf + e.last_lit] = 255 & i, e.last_lit++, n === 0 ? e.dyn_ltree[2 * i]++ : (e.matches++, n--, e.dyn_ltree[2 * (A[i] + d + 1)]++, e.dyn_dtree[2 * R(n)]++), e.last_lit === e.lit_bufsize - 1;
				}, i._tr_align = function(e) {
					B(e, 2, 3), V(e, y, D), function(e) {
						e.bi_valid === 16 ? (z(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : 8 <= e.bi_valid && (e.pending_buf[e.pending++] = 255 & e.bi_buf, e.bi_buf >>= 8, e.bi_valid -= 8);
					}(e);
				};
			}, { "../utils/common": 41 }],
			53: [function(e, n, i) {
				n.exports = function() {
					this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
				};
			}, {}],
			54: [function(e, n, i) {
				(function(e) {
					(function(e, n) {
						if (!e.setImmediate) {
							var i, a, o, s, c = 1, l = {}, u = !1, d = e.document, f = Object.getPrototypeOf && Object.getPrototypeOf(e);
							f = f && f.setTimeout ? f : e, i = {}.toString.call(e.process) === "[object process]" ? function(e) {
								process.nextTick(function() {
									m(e);
								});
							} : function() {
								if (e.postMessage && !e.importScripts) {
									var n = !0, i = e.onmessage;
									return e.onmessage = function() {
										n = !1;
									}, e.postMessage("", "*"), e.onmessage = i, n;
								}
							}() ? (s = "setImmediate$" + Math.random() + "$", e.addEventListener ? e.addEventListener("message", h, !1) : e.attachEvent("onmessage", h), function(n) {
								e.postMessage(s + n, "*");
							}) : e.MessageChannel ? ((o = new MessageChannel()).port1.onmessage = function(e) {
								m(e.data);
							}, function(e) {
								o.port2.postMessage(e);
							}) : d && "onreadystatechange" in d.createElement("script") ? (a = d.documentElement, function(e) {
								var n = d.createElement("script");
								n.onreadystatechange = function() {
									m(e), n.onreadystatechange = null, a.removeChild(n), n = null;
								}, a.appendChild(n);
							}) : function(e) {
								setTimeout(m, 0, e);
							}, f.setImmediate = function(e) {
								typeof e != "function" && (e = Function("" + e));
								for (var n = Array(arguments.length - 1), a = 0; a < n.length; a++) n[a] = arguments[a + 1];
								return l[c] = {
									callback: e,
									args: n
								}, i(c), c++;
							}, f.clearImmediate = p;
						}
						function p(e) {
							delete l[e];
						}
						function m(e) {
							if (u) setTimeout(m, 0, e);
							else {
								var i = l[e];
								if (i) {
									u = !0;
									try {
										(function(e) {
											var i = e.callback, a = e.args;
											switch (a.length) {
												case 0:
													i();
													break;
												case 1:
													i(a[0]);
													break;
												case 2:
													i(a[0], a[1]);
													break;
												case 3:
													i(a[0], a[1], a[2]);
													break;
												default: i.apply(n, a);
											}
										})(i);
									} finally {
										p(e), u = !1;
									}
								}
							}
						}
						function h(n) {
							n.source === e && typeof n.data == "string" && n.data.indexOf(s) === 0 && m(+n.data.slice(s.length));
						}
					})(typeof self > "u" ? e === void 0 ? this : e : self);
				}).call(this, typeof global < "u" ? global : typeof self < "u" ? self : typeof window < "u" ? window : {});
			}, {}]
		}, {}, [10])(10);
	});
})))());
async function preprocessImage(e, n = 2048, i) {
	if (!e.type.startsWith("image/")) throw Error("File is not an image");
	let a = new FileReader();
	a.readAsArrayBuffer(e), a.onload = function(e) {
		if (!e.target?.result) throw Error("Failed to read file");
		let a = new Blob([e.target.result]);
		window.URL = window.URL || window.webkitURL;
		let o = window.URL.createObjectURL(a);
		var s = new Image();
		s.src = o, s.onload = function() {
			resizeImage(s, n, i);
		};
	};
}
function resizeImage(e, n = 2048, i) {
	let a = document.createElement("canvas"), o = a.getContext("2d");
	if (!o) throw Error("Failed to get canvas context");
	let s = e.width, c = e.height;
	if (s > n || c > n) {
		let i = Math.min(n / s, n / c);
		a.width = s * i, a.height = c * i, o.drawImage(e, 0, 0, a.width, a.height);
	} else a.width = s, a.height = c, o.drawImage(e, 0, 0, a.width, a.height);
	return a.toBlob(i, "image/jpeg", .85);
}
var root_1$3 = /* @__PURE__ */ from_html("<span class=\"mr-2\">Reuse existing dataset</span> <!>", 1), root_4$2 = /* @__PURE__ */ from_html("<option> </option>"), root_2$2 = /* @__PURE__ */ from_html("<div class=\"select\"><select><option>Use dataset from</option><!></select></div>"), root_6 = /* @__PURE__ */ from_html("<div class=\"notification dropper is-info is-overlay\">Drop files here</div>"), root_8 = /* @__PURE__ */ from_html("<div class=\"column is-3\"><!></div> <div class=\"column is-3\"><!></div> <div class=\"column is-3\"><!></div> <div class=\"column is-3\"><!></div>", 1), root_14 = /* @__PURE__ */ from_html("<li class=\"column is-3 is-flex\"><div class=\"image-generic-outer-wrapper\" style=\"opacity: 1;\"><div class=\"image-generic-inner-wrapper\"><div class=\"image-generic-title\"><!> <span class=\"title-identification\"><span class=\"tag is-light is-bold mb-3\"> </span> <span class=\"is-size-7\"> </span></span></div> <div class=\"image-generic-content mb-1\"><img/></div></div></div></li>"), on_change = (e, n) => n(Array.from(e.target.files ?? [])), root_13 = /* @__PURE__ */ from_html("<ul class=\"columns is-mobile is-multiline list-invisible\"></ul> <div class=\"file has-name is-fullwidth\" id=\"id_pdf_file-wrapper\"><label class=\"file-label\"><span class=\"file-cta\"><span class=\"file-icon\"><span class=\"iconify\" data-icon=\"mdi:upload\"></span></span> <span class=\"file-label\">Select files...</span></span> <span class=\"file-name\"> </span> <input type=\"file\" accept=\"image/*\" class=\"file-input\" style=\"display: none;\" multiple/></label></div>", 1), root_15 = /* @__PURE__ */ from_html("<div class=\"file has-name is-fullwidth\" id=\"id_zip_file-wrapper\"><label class=\"file-label\"><span class=\"file-cta\"><span class=\"file-icon\"><span class=\"iconify\" data-icon=\"mdi:upload\"></span></span> <span class=\"file-label\">Select a file...</span></span> <span class=\"file-name\"> </span></label></div>"), root_17 = /* @__PURE__ */ from_html("<div class=\"file has-name is-fullwidth\" id=\"id_pdf_file-wrapper\"><label class=\"file-label\"><span class=\"file-cta\"><span class=\"file-icon\"><span class=\"iconify\" data-icon=\"mdi:upload\"></span></span> <span class=\"file-label\">Select a file...</span></span> <span class=\"file-name\"> </span></label></div>"), root_7 = /* @__PURE__ */ from_html("<!> <!> <!> <!> <!>", 1), root_5 = /* @__PURE__ */ from_html("<div class=\"has-background-light\"><div class=\"top-notification notification py-3 px-4\"><span class=\"iconify\" data-icon=\"mdi:info-outline\"></span> You can drag and drop files\n                here</div> <!> <!></div>"), root$1 = /* @__PURE__ */ from_html("<div class=\"dataset-compose-form is-relative\"><div class=\"dataset-reuse-toggle\"><!></div> <!></div>");
function DatasetComposeForm(e, n) {
	let i = props_id();
	push(n, !0);
	let a = "No file selected", o = prop(n, "ready", 15), s = n.form.querySelector("#id_reuse_dataset"), c = n.form.querySelector("#id_dataset"), l = n.form.querySelector("#id_format"), u = n.form.querySelector("#id_iiif_manifests"), d = n.form.querySelector("#id_zip_file"), f = n.form.querySelector("#id_pdf_file"), p = d.form, m = /* @__PURE__ */ state(proxy(s.checked)), h = /* @__PURE__ */ state(proxy(c.value)), g = /* @__PURE__ */ state(proxy([])), _ = /* @__PURE__ */ state(a), v = /* @__PURE__ */ state(a), y = /* @__PURE__ */ state(proxy([])), b = new import_jszip_min.default(), x = /* @__PURE__ */ state("zip"), S = /* @__PURE__ */ state(!1);
	onMount(() => (set(_, d.files?.[0]?.name ?? a, !0), d.onchange = () => {
		set(_, d.files?.[0]?.name ?? a, !0);
	}, set(v, f.files?.[0]?.name ?? a, !0), f.onchange = () => {
		set(v, f.files?.[0]?.name ?? a, !0);
	}, set(x, l.value, !0), p && (p.onsubmit = (e) => {
		get$2(x) !== "zip" && (d.files = null), get$2(x) !== "pdf" && (f.files = null), get$2(x) == "images" && (e.preventDefault(), b.generateAsync({ type: "blob" }).then((e) => {
			let n = new DataTransfer();
			n.items.add(new File([e], "dataset.zip", { type: "application/zip" })), d.files = n.files, p.submit();
		}));
	}), () => {
		d.onchange = null, f.onchange = null, p.onsubmit = null;
	}));
	function C(e) {
		console.log(e), e.forEach((e) => {
			preprocessImage(e, 2048, (n) => {
				n && (b.file(e.name, n), set(y, [...get$2(y), {
					name: e.name,
					blob: n
				}], !0));
			});
		}), set(x, "images");
	}
	function w(e) {
		return () => {
			let n = get$2(y)[e];
			b.remove(n.name), get$2(y).splice(e, 1);
		};
	}
	function T(e) {
		e.preventDefault(), e.stopPropagation(), set(S, !1);
		let n = e.dataTransfer?.files;
		n && (n[0].type.startsWith("image/") && C(Array.from(n).filter((e) => e.type.startsWith("image/"))), n[0].type.startsWith("application/zip") && (set(_, n[0].name, !0), set(x, "zip")), n[0].type.startsWith("application/pdf") && (set(v, n[0].name, !0), set(x, "pdf")));
	}
	function E(e) {
		l.value = e == "images" ? "zip" : e;
	}
	function D(e) {
		s.checked = e;
	}
	user_effect(() => {
		c.value = get$2(h);
	}), user_effect(() => {
		o(get$2(m) ? get$2(h) != "" : get$2(x) == "images" && get$2(y).length > 0 || get$2(x) == "zip" && get$2(_) !== a || get$2(x) == "iiif" && get$2(g).length > 0 || get$2(x) == "pdf" && get$2(v) !== a);
	});
	var O = root$1(), k = child(O), A = child(k);
	component(A, () => Toggle, (e, n) => {
		n(e, {
			onPressedChange: D,
			get pressed() {
				return get$2(m);
			},
			set pressed(e) {
				set(m, e, !0);
			},
			children: (e, n) => {
				var i = root_1$3(), a = sibling(first_child(i), 2);
				Icon(a, { icon: "mdi:sync" }), append(e, i);
			},
			$$slots: { default: !0 }
		});
	}), reset(k);
	var j = sibling(k, 2), M = (e) => {
		var n = root_2$2(), i = child(n), a = child(i);
		a.value = a.__value = "";
		var o = sibling(a);
		each(o, 17, () => c.children, index, (e, n) => {
			var i = comment(), a = first_child(i), o = (e) => {
				var i = root_4$2(), a = child(i, !0);
				reset(i);
				var o = {};
				template_effect(() => {
					set_text(a, get$2(n).text), o !== (o = get$2(n).value) && (i.value = (i.__value = get$2(n).value) ?? "");
				}), append(e, i);
			};
			if_block(a, (e) => {
				get$2(n) instanceof HTMLOptionElement && get$2(n).value != "" && e(o);
			}), append(e, i);
		}), reset(i), reset(n), bind_select_value(i, () => get$2(h), (e) => set(h, e)), append(e, n);
	}, N = (e) => {
		var n = root_5(), a = sibling(child(n), 2), o = (e) => {
			var n = root_6();
			append(e, n);
		};
		if_block(a, (e) => {
			get$2(S) && e(o);
		});
		var s = sibling(a, 2);
		component(s, () => Tabs, (e, n) => {
			n(e, {
				onValueChange: E,
				get value() {
					return get$2(x);
				},
				set value(e) {
					set(x, e, !0);
				},
				children: (e, n) => {
					var a = root_7(), o = first_child(a);
					component(o, () => Tabs_list, (e, n) => {
						n(e, {
							class: "columns gap-2",
							children: (e, n) => {
								var i = root_8(), a = first_child(i), o = child(a);
								component(o, () => Tabs_trigger, (e, n) => {
									n(e, {
										value: "images",
										class: "",
										children: (e, n) => {
											next();
											var i = text("Image files");
											append(e, i);
										},
										$$slots: { default: !0 }
									});
								}), reset(a);
								var s = sibling(a, 2), c = child(s);
								component(c, () => Tabs_trigger, (e, n) => {
									n(e, {
										value: "zip",
										class: "",
										children: (e, n) => {
											next();
											var i = text("Zip file");
											append(e, i);
										},
										$$slots: { default: !0 }
									});
								}), reset(s);
								var l = sibling(s, 2), u = child(l);
								component(u, () => Tabs_trigger, (e, n) => {
									n(e, {
										value: "iiif",
										class: "",
										children: (e, n) => {
											next();
											var i = text("IIIF manifests");
											append(e, i);
										},
										$$slots: { default: !0 }
									});
								}), reset(l);
								var d = sibling(l, 2), f = child(d);
								component(f, () => Tabs_trigger, (e, n) => {
									n(e, {
										value: "pdf",
										class: "",
										children: (e, n) => {
											next();
											var i = text("PDF file");
											append(e, i);
										},
										$$slots: { default: !0 }
									});
								}), reset(d), append(e, i);
							},
							$$slots: { default: !0 }
						});
					});
					var s = sibling(o, 2);
					component(s, () => Tabs_content, (e, n) => {
						n(e, {
							value: "images",
							children: (e, n) => {
								var a = root_13(), o = first_child(a);
								each(o, 22, () => get$2(y), (e) => e, (e, n, i) => {
									var a = root_14(), o = child(a), s = child(o), c = child(s), l = child(c);
									{
										let e = /* @__PURE__ */ user_derived(() => w(get$2(i)));
										IconBtn(l, {
											icon: "mdi:delete",
											get onclick() {
												return get$2(e);
											}
										});
									}
									var u = sibling(l, 2), d = child(u), f = child(d);
									reset(d);
									var p = sibling(d, 2), m = child(p, !0);
									reset(p), reset(u), reset(c);
									var h = sibling(c, 2), g = child(h);
									reset(h), reset(s), reset(o), reset(a), template_effect((e) => {
										set_attribute(u, "title", n.name), set_text(f, `Image #${get$2(i) ?? ""}`), set_text(m, n.name), set_attribute(g, "src", e), set_attribute(g, "alt", n.name);
									}, [() => URL.createObjectURL(n.blob)]), append(e, a);
								}), reset(o);
								var s = sibling(o, 2), c = child(s), l = sibling(child(c), 2), u = child(l);
								reset(l);
								var d = sibling(l, 2);
								d.__change = [on_change, C], reset(c), reset(s), template_effect(() => {
									set_attribute(c, "for", `${i}-img-input`), set_text(u, `Images (${get$2(y).length ?? ""})`), set_attribute(d, "id", `${i}-img-input`);
								}), append(e, a);
							},
							$$slots: { default: !0 }
						});
					});
					var c = sibling(s, 2);
					component(c, () => Tabs_content, (e, n) => {
						n(e, {
							value: "zip",
							children: (e, n) => {
								var i = root_15(), a = child(i), o = sibling(child(a), 2), s = child(o, !0);
								reset(o), reset(a), reset(i), template_effect(() => {
									set_attribute(a, "for", d.id), set_text(s, get$2(_));
								}), append(e, i);
							},
							$$slots: { default: !0 }
						});
					});
					var l = sibling(c, 2);
					component(l, () => Tabs_content, (e, n) => {
						n(e, {
							value: "iiif",
							children: (e, n) => {
								IIIFURLListInput(e, {
									get field() {
										return u;
									},
									get value() {
										return get$2(g);
									},
									set value(e) {
										set(g, e, !0);
									}
								});
							},
							$$slots: { default: !0 }
						});
					});
					var p = sibling(l, 2);
					component(p, () => Tabs_content, (e, n) => {
						n(e, {
							value: "pdf",
							children: (e, n) => {
								var i = root_17(), a = child(i), o = sibling(child(a), 2), s = child(o, !0);
								reset(o), reset(a), reset(i), template_effect(() => {
									set_attribute(a, "for", f.id), set_text(s, get$2(v));
								}), append(e, i);
							},
							$$slots: { default: !0 }
						});
					}), append(e, a);
				},
				$$slots: { default: !0 }
			});
		}), reset(n), event("drop", n, T), event("dragover", n, (e) => {
			e.preventDefault(), e.stopPropagation(), set(S, !0);
		}), event("dragleave", n, (e) => {
			e.preventDefault(), e.stopPropagation(), set(S, !1);
		}), append(e, n);
	};
	if_block(j, (e) => {
		get$2(m) ? e(M) : e(N, !1);
	}), reset(O), append(e, O), pop();
}
delegate(["change"]);
var root_2$1 = /* @__PURE__ */ from_html("<!> <span>I have <b>samples</b> and I want to <b>search</b> for similar watermarks in a <b>database</b></span>", 1), root_3$2 = /* @__PURE__ */ from_html("<!> <span>I have a <b>database</b> of watermarks that I want to make <b>searchable</b></span>", 1), root_4$1 = /* @__PURE__ */ from_html("<!> <span>I have a <b>set</b> of watermarks that I want to <b>compare</b> to each other</span>", 1), root_1$2 = /* @__PURE__ */ from_html("<!> <!> <!>", 1);
function AnalysisTypeSelect(e, n) {
	push(n, !0);
	let i = prop(n, "value", 15), a = prop(n, "field", 7);
	function o(e) {
		a().value = e;
	}
	onMount(() => {
		i(a().value);
	});
	var s = comment(), c = first_child(s);
	component(c, () => Toggle_group, (e, n) => {
		n(e, {
			type: "single",
			onValueChange: o,
			class: "columns toggle-analysis-type",
			get value() {
				return i();
			},
			set value(e) {
				i(e);
			},
			children: (e, n) => {
				var i = root_1$2(), a = first_child(i);
				component(a, () => Toggle_group_item, (e, n) => {
					n(e, {
						value: "query",
						class: "column is-3 has-text-centered",
						children: (e, n) => {
							var i = root_2$1(), a = first_child(i);
							Icon(a, { icon: "mdi:database-search" }), next(2), append(e, i);
						},
						$$slots: { default: !0 }
					});
				});
				var o = sibling(a, 2);
				component(o, () => Toggle_group_item, (e, n) => {
					n(e, {
						value: "indexing",
						class: "column is-3 has-text-centered",
						children: (e, n) => {
							var i = root_3$2(), a = first_child(i);
							Icon(a, { icon: "mdi:database-plus" }), next(2), append(e, i);
						},
						$$slots: { default: !0 }
					});
				});
				var s = sibling(o, 2);
				component(s, () => Toggle_group_item, (e, n) => {
					n(e, {
						value: "similarity",
						class: "column is-3 has-text-centered",
						children: (e, n) => {
							var i = root_4$1(), a = first_child(i);
							Icon(a, { icon: "mdi:compare-horizontal" }), next(2), append(e, i);
						},
						$$slots: { default: !0 }
					});
				}), append(e, i);
			},
			$$slots: { default: !0 }
		});
	}), append(e, s), pop();
}
function IndexSelect(e, n) {
	push(n, !0);
	let i = prop(n, "value", 15), a = /* @__PURE__ */ user_derived(() => n.options.map((e) => ({
		label: Array.from(e.childNodes).filter((e) => e.tagName !== "INPUT").map((e) => e.outerHTML || e.textContent).join(""),
		input: e.querySelector("input")
	})));
	function o(e) {
		get$2(a).forEach(({ input: n }) => {
			n.value === e ? n.checked = !0 : n.checked = !1;
		});
	}
	onMount(() => {
		get$2(a).forEach(({ input: e }) => {
			e.checked && i(e.value);
		});
	});
	var s = comment(), c = first_child(s);
	component(c, () => Toggle_group, (e, n) => {
		n(e, {
			type: "single",
			onValueChange: o,
			orientation: "vertical",
			class: "dataset-compose-form",
			get value() {
				return i();
			},
			set value(e) {
				i(e);
			},
			children: (e, n) => {
				var i = comment(), o = first_child(i);
				each(o, 17, () => get$2(a), index, (e, n) => {
					let i = () => get$2(n).input, a = () => get$2(n).label;
					var o = comment(), s = first_child(o);
					component(s, () => Toggle_group_item, (e, n) => {
						n(e, {
							get value() {
								return i().value;
							},
							class: "search-index-option",
							children: (e, n) => {
								var i = comment(), o = first_child(i);
								html(o, a), append(e, i);
							},
							$$slots: { default: !0 }
						});
					}), append(e, o);
				}, (e) => {
					var n = comment(), i = first_child(n);
					component(i, () => Toggle_group_item, (e, n) => {
						n(e, {
							value: "",
							class: "search-index-option",
							children: (e, n) => {
								next();
								var i = text("No index available");
								append(e, i);
							},
							$$slots: { default: !0 }
						});
					}), append(e, n);
				}), append(e, i);
			},
			$$slots: { default: !0 }
		});
	}), append(e, s), pop();
}
var root_2 = /* @__PURE__ */ from_html("<!> <span><b>Detect and crop</b> watermarks inside the images</span>", 1), root_3$1 = /* @__PURE__ */ from_html("<!> <span>Watermarks are already cropped, use <b>full images</b></span>", 1), root_1$1 = /* @__PURE__ */ from_html("<!> <!>", 1);
function NeedRegionsToggle(e, n) {
	push(n, !0);
	let i = prop(n, "value", 15), a = prop(n, "field", 7), o = /* @__PURE__ */ state(proxy(i() ? "true" : "false"));
	function s(e) {
		set(o, e, !0), i(get$2(o) == "true"), a().checked = i();
	}
	onMount(() => {
		set(o, a().checked ? "true" : "false", !0), i(get$2(o) == "true");
	});
	var c = comment(), l = first_child(c);
	component(l, () => Toggle_group, (e, n) => {
		n(e, {
			get value() {
				return get$2(o);
			},
			type: "single",
			onValueChange: s,
			class: "columns toggle-analysis-type",
			children: (e, n) => {
				var i = root_1$1(), a = first_child(i);
				component(a, () => Toggle_group_item, (e, n) => {
					n(e, {
						value: "true",
						class: "column is-3 has-text-centered",
						children: (e, n) => {
							var i = root_2(), a = first_child(i);
							Icon(a, { icon: "mdi:image-size-select-large" }), next(2), append(e, i);
						},
						$$slots: { default: !0 }
					});
				});
				var o = sibling(a, 2);
				component(o, () => Toggle_group_item, (e, n) => {
					n(e, {
						value: "false",
						class: "column is-3 has-text-centered",
						children: (e, n) => {
							var i = root_3$1(), a = first_child(i);
							Icon(a, { icon: "mdi:fullscreen" }), next(2), append(e, i);
						},
						$$slots: { default: !0 }
					});
				}), append(e, i);
			},
			$$slots: { default: !0 }
		});
	}), append(e, c), pop();
}
var root_1 = /* @__PURE__ */ from_html("<div class=\"notification is-danger is-light py-3 px-4 mt-5 mb-2\"><p class=\"error\">Please fill in all the fields.</p> <!></div>"), root_3 = /* @__PURE__ */ from_html("<h4 class=\"mt-6 mb-5\">What index do you want to query?</h4> <!>", 1), root_4 = /* @__PURE__ */ from_html("<h4 class=\"mt-6 mb-5\"><!></h4> <div class=\"box has-background-light\"><!></div> <h4 class=\"mt-6 mb-5\">Are those image cropped and centered?</h4> <!> <div class=\"mb-4\"></div>", 1), root = /* @__PURE__ */ from_html("<!> <h4 class=\"mb-5\">What do you want to do?</h4> <!> <!> <!>", 1);
function WatermarksForm(e, n) {
	push(n, !0);
	let i = n.originalForm.querySelector("#id_name"), a = n.originalForm.querySelector("#id_analysis_type"), o = /* @__PURE__ */ state(proxy(a.value)), s = Array.from(n.originalForm.querySelectorAll("[name=query_target_index]")).map((e) => e.parentElement), c = /* @__PURE__ */ state(""), l = n.originalForm.querySelector(".dataset-form"), u = n.originalForm.querySelector("#id_need_regions"), d = /* @__PURE__ */ state(proxy(u.checked)), f = n.originalForm.querySelectorAll(".errorlist"), p = a.form.querySelector("input[type=submit]"), m = /* @__PURE__ */ state(!1);
	user_effect(() => {
		get$2(o) === "query" ? i.value = "Query on " + s.find((e) => e.querySelector("input").value === get$2(c))?.querySelector(".index-title")?.textContent.trim() : i.value = get$2(o).charAt(0).toUpperCase() + get$2(o).slice(1);
	}), user_effect(() => {
		p.disabled = get$2(o) === "" || get$2(o) === "query" && get$2(c) === "" || !get$2(m);
	});
	var h = root(), g = first_child(h), _ = (e) => {
		var n = root_1(), i = sibling(child(n), 2);
		each(i, 17, () => f, index, (e, n) => {
			var i = comment(), a = first_child(i);
			html(a, () => get$2(n).outerHTML), append(e, i);
		}), reset(n), append(e, n);
	};
	if_block(g, (e) => {
		f.length > 0 && e(_);
	});
	var v = sibling(g, 4);
	AnalysisTypeSelect(v, {
		get field() {
			return a;
		},
		get value() {
			return get$2(o);
		},
		set value(e) {
			set(o, e, !0);
		}
	});
	var y = sibling(v, 2), b = (e) => {
		var n = root_3(), i = sibling(first_child(n), 2);
		IndexSelect(i, {
			get options() {
				return s;
			},
			get value() {
				return get$2(c);
			},
			set value(e) {
				set(c, e, !0);
			}
		}), append(e, n);
	};
	if_block(y, (e) => {
		get$2(o) === "query" && e(b);
	});
	var x = sibling(y, 2), S = (e) => {
		var n = root_4(), i = first_child(n), a = child(i), s = (e) => {
			var n = text("What images do you want to use as a query?");
			append(e, n);
		}, c = (e) => {
			var n = text("What is your dataset?");
			append(e, n);
		};
		if_block(a, (e) => {
			get$2(o) === "query" ? e(s) : e(c, !1);
		}), reset(i);
		var f = sibling(i, 2), p = child(f);
		DatasetComposeForm(p, {
			get form() {
				return l;
			},
			get ready() {
				return get$2(m);
			},
			set ready(e) {
				set(m, e, !0);
			}
		}), reset(f);
		var h = sibling(f, 4);
		NeedRegionsToggle(h, {
			get field() {
				return u;
			},
			get value() {
				return get$2(d);
			},
			set value(e) {
				set(d, e, !0);
			}
		}), next(2), append(e, n);
	};
	if_block(x, (e) => {
		get$2(o) && (get$2(o) !== "query" || get$2(c) != "") && e(S);
	}), append(e, h), pop();
}
function initWatermarksForm(e) {
	let n = document.createElement("div");
	e.parentNode?.insertBefore(n, e.nextSibling), mount(WatermarksForm, {
		target: n,
		props: { originalForm: e }
	}), e.style.display = "none";
}
function initClusterViewer(e, n, i, a, o, s) {
	mount(ClusterApp, {
		target: e,
		props: {
			clustering_data: unserializeClusterFile(n),
			base_url: i,
			editable: a,
			editing: o,
			formfield: s
		}
	});
}
function initProgressTracker(e, n) {
	mount(ProgressTracker, {
		target: e,
		props: { tracking_url: n }
	});
}
function initSimilarityApp(e, n, i, a, o) {
	mount(SimilarityApp, {
		target: e,
		props: {
			source_index_url: n,
			sim_matrix_url: i,
			mode: a,
			metadata_url: o
		}
	});
}
function initSearchResults(e, n, i, a) {
	mount(SearchResults, {
		target: e,
		props: {
			source_index_url: n,
			query_result_url: i,
			metadata_url: a
		}
	});
}
function initImageGenericList(e, n) {
	mount(ImageGenericList, {
		target: e,
		props: { image_array: n }
	});
}
function initDatasetImageBrowser(e, n, i, a) {
	mount(DatasetImageBrowser, {
		target: e,
		props: {
			dataset: n,
			datasetFormat: i,
			metadataURL: a
		}
	});
}
window.DemoTools = {
	initClusterViewer,
	initProgressTracker,
	initSimilarityApp,
	initImageGenericList,
	initDatasetImageBrowser,
	initSearchResults,
	initWatermarksForm
};
