var __create = Object.create, __defProp = Object.defineProperty, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropNames = Object.getOwnPropertyNames, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __commonJSMin = (e, b) => () => (b || e((b = { exports: {} }).exports, b), b.exports), __copyProps = (e, C, T, E) => {
	if (C && typeof C == "object" || typeof C == "function") for (var D = __getOwnPropNames(C), O = 0, k = D.length, A; O < k; O++) A = D[O], !__hasOwnProp.call(e, A) && A !== T && __defProp(e, A, {
		get: ((e) => C[e]).bind(null, A),
		enumerable: !(E = __getOwnPropDesc(C, A)) || E.enumerable
	});
	return e;
}, __toESM = (x, S, w) => (w = x == null ? {} : __create(__getProtoOf(x)), __copyProps(S || !x || !x.__esModule ? __defProp(w, "default", {
	value: x,
	enumerable: !0
}) : w, x)), is_array = Array.isArray, index_of = Array.prototype.indexOf, array_from = Array.from;
Object.keys;
var define_property = Object.defineProperty, get_descriptor = Object.getOwnPropertyDescriptor, get_descriptors = Object.getOwnPropertyDescriptors, object_prototype = Object.prototype, array_prototype = Array.prototype, get_prototype_of = Object.getPrototypeOf, is_extensible = Object.isExtensible;
function is_function(e) {
	return typeof e == "function";
}
const noop$1 = () => {};
function run_all(e) {
	for (var b = 0; b < e.length; b++) e[b]();
}
function deferred() {
	var e, b;
	return {
		promise: new Promise((x, S) => {
			e = x, b = S;
		}),
		resolve: e,
		reject: b
	};
}
function to_array(e, b) {
	if (Array.isArray(e)) return e;
	if (b === void 0 || !(Symbol.iterator in e)) return Array.from(e);
	let x = [];
	for (let S of e) if (x.push(S), x.length === b) break;
	return x;
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
		for (var b = e, x = hydrate_node; b--;) x = /* @__PURE__ */ get_next_sibling(x);
		hydrate_node = x;
	}
}
function skip_nodes(e = !0) {
	for (var b = 0, x = hydrate_node;;) {
		if (x.nodeType === 8) {
			var S = x.data;
			if (S === "]") {
				if (b === 0) return x;
				--b;
			} else (S === "[" || S === "[!") && (b += 1);
		}
		var C = /* @__PURE__ */ get_next_sibling(x);
		e && x.remove(), x = C;
	}
}
function read_hydration_instruction(e) {
	if (!e || e.nodeType !== 8) throw hydration_mismatch(), HYDRATION_ERROR;
	return e.data;
}
function equals(e) {
	return e === this.v;
}
function safe_not_equal(e, b) {
	return e == e ? e !== b || typeof e == "object" && !!e || typeof e == "function" : b == b;
}
function not_equal(e, b) {
	return e !== b;
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
function setContext(e, b) {
	return get_or_init_context_map("setContext").set(e, b), b;
}
function hasContext(e) {
	return get_or_init_context_map("hasContext").has(e);
}
function getAllContexts() {
	return get_or_init_context_map("getAllContexts");
}
function push(e, b = !1, x) {
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
	var b = component_context, x = b.e;
	if (x !== null) {
		b.e = null;
		for (var S of x) create_user_effect(S);
	}
	return e !== void 0 && (b.x = e), component_context = b.p, e ?? {};
}
function is_runes() {
	return !0;
}
function get_or_init_context_map(e) {
	return component_context === null && lifecycle_outside_component(e), component_context.c ??= new Map(get_parent_context(component_context) || void 0);
}
function get_parent_context(e) {
	let b = e.p;
	for (; b !== null;) {
		let e = b.c;
		if (e !== null) return e;
		b = b.p;
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
		var b = micro_tasks;
		queueMicrotask(() => {
			b === micro_tasks && run_micro_tasks();
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
	var b = active_effect;
	if (b === null) return active_reaction.f |= 8388608, e;
	if (b.f & 32768) invoke_error_boundary(e, b);
	else {
		if (!(b.f & 128)) throw !b.parent && e instanceof Error && apply_adjustments(e), e;
		b.b.error(e);
	}
}
function invoke_error_boundary(e, b) {
	for (; b !== null;) {
		if (b.f & 128) try {
			b.b.error(e);
			return;
		} catch (b) {
			e = b;
		}
		b = b.parent;
	}
	throw e instanceof Error && apply_adjustments(e), e;
}
function apply_adjustments(e) {
	let b = adjustments.get(e);
	b && (define_property(e, "message", { value: b.message }), define_property(e, "stack", { value: b.stack }));
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
		var b = null;
		for (let b of e) this.#traverse_effect_tree(b);
		if (this.#async_effects.length === 0 && this.#pending === 0) {
			this.#commit();
			var x = this.#render_effects, S = this.#effects;
			this.#render_effects = [], this.#effects = [], this.#block_effects = [], previous_batch = current_batch, current_batch = null, flush_queued_effects(x), flush_queued_effects(S), current_batch === null ? current_batch = this : batches.delete(this), this.#deferred?.resolve();
		} else this.#defer_effects(this.#render_effects), this.#defer_effects(this.#effects), this.#defer_effects(this.#block_effects);
		if (b) {
			for (let [e, { v: x, wv: S }] of b) e.wv <= S && (e.v = x);
			batch_deriveds = null;
		}
		for (let e of this.#async_effects) update_effect(e);
		for (let e of this.#boundary_async_effects) update_effect(e);
		this.#async_effects = [], this.#boundary_async_effects = [];
	}
	#traverse_effect_tree(e) {
		e.f ^= 1024;
		for (var b = e.first; b !== null;) {
			var x = b.f, S = (x & 96) != 0;
			if (!(S && x & 1024 || x & 8192 || this.skipped_effects.has(b)) && b.fn !== null) {
				S ? b.f ^= 1024 : x & 4 ? this.#effects.push(b) : x & 1024 || (x & 4194304 ? (b.b?.is_pending() ? this.#boundary_async_effects : this.#async_effects).push(b) : is_dirty(b) && (b.f & 16 && this.#block_effects.push(b), update_effect(b)));
				var C = b.first;
				if (C !== null) {
					b = C;
					continue;
				}
			}
			var w = b.parent;
			for (b = b.next; b === null && w !== null;) b = w.next, w = w.parent;
		}
	}
	#defer_effects(e) {
		for (let b of e) (b.f & 2048 ? this.#dirty_effects : this.#maybe_dirty_effects).push(b), set_signal_status(b, 1024);
		e.length = 0;
	}
	capture(e, b) {
		this.#previous.has(e) || this.#previous.set(e, b), this.current.set(e, e.v);
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
			let b = current_batch = new e();
			batches.add(current_batch), is_flushing_sync || e.enqueue(() => {
				current_batch === b && b.flush();
			});
		}
		return current_batch;
	}
	static enqueue(e) {
		queue_micro_task(e);
	}
};
function flushSync(e) {
	var b = is_flushing_sync;
	is_flushing_sync = !0;
	try {
		var x;
		for (e && (flush_effects(), x = e());;) {
			if (flush_tasks(), queued_root_effects.length === 0 && !has_pending_tasks() && (current_batch?.flush(), queued_root_effects.length === 0)) return last_scheduled_effect = null, x;
			flush_effects();
		}
	} finally {
		is_flushing_sync = b;
	}
}
function flush_effects() {
	var e = is_updating_effect;
	is_flushing = !0;
	try {
		var b = 0;
		for (set_is_updating_effect(!0); queued_root_effects.length > 0;) {
			var x = Batch.ensure();
			b++ > 1e3 && infinite_loop_guard(), x.process(queued_root_effects), old_values.clear();
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
	var b = e.length;
	if (b !== 0) {
		for (var x = 0; x < b;) {
			var S = e[x++];
			if (!(S.f & 24576) && is_dirty(S) && (eager_block_effects = [], update_effect(S), S.deps === null && S.first === null && S.nodes_start === null && (S.teardown === null && S.ac === null ? unlink_effect(S) : S.fn = null), eager_block_effects?.length > 0)) {
				old_values.clear();
				for (let e of eager_block_effects) update_effect(e);
				eager_block_effects = [];
			}
		}
		eager_block_effects = null;
	}
}
function schedule_effect(e) {
	for (var b = last_scheduled_effect = e; b.parent !== null;) {
		b = b.parent;
		var x = b.f;
		if (is_flushing && b === active_effect && x & 16) return;
		if (x & 96) {
			if (!(x & 1024)) return;
			b.f ^= 1024;
		}
	}
	queued_root_effects.push(b);
}
function createSubscriber(e) {
	let b = 0, x = source(0), S;
	return () => {
		effect_tracking() && (get$2(x), render_effect(() => (b === 0 && (S = untrack(() => e(() => increment(x)))), b += 1, () => {
			queue_micro_task(() => {
				--b, b === 0 && (S?.(), S = void 0, increment(x));
			});
		})));
	};
}
var flags = 589952;
function boundary(e, b, x) {
	new Boundary(e, b, x);
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
	constructor(e, b, x) {
		this.#anchor = e, this.#props = b, this.#children = x, this.parent = active_effect.b, this.#pending = !!this.#props.pending, this.#effect = block(() => {
			if (active_effect.b = this, hydrating) {
				let e = this.#hydrate_open;
				hydrate_next(), e.nodeType === 8 && e.data === "[!" ? this.#hydrate_pending_content() : this.#hydrate_resolved_content();
			} else {
				try {
					this.#main_effect = branch(() => x(this.#anchor));
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
		var b = active_effect, x = active_reaction, S = component_context;
		set_active_effect(this.#effect), set_active_reaction(this.#effect), set_component_context(this.#effect.ctx);
		try {
			return e();
		} catch (e) {
			return handle_error(e), null;
		} finally {
			set_active_effect(b), set_active_reaction(x), set_component_context(S);
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
		var b = this.#props.onerror;
		let x = this.#props.failed;
		if (this.#is_creating_fallback || !b && !x) throw e;
		this.#main_effect &&= (destroy_effect(this.#main_effect), null), this.#pending_effect &&= (destroy_effect(this.#pending_effect), null), this.#failed_effect &&= (destroy_effect(this.#failed_effect), null), hydrating && (set_hydrate_node(this.#hydrate_open), next(), set_hydrate_node(skip_nodes()));
		var S = !1, C = !1;
		let w = () => {
			if (S) {
				svelte_boundary_reset_noop();
				return;
			}
			S = !0, C && svelte_boundary_reset_onerror(), Batch.ensure(), this.#local_pending_count = 0, this.#failed_effect !== null && pause_effect(this.#failed_effect, () => {
				this.#failed_effect = null;
			}), this.#pending = this.has_pending_snippet(), this.#main_effect = this.#run(() => (this.#is_creating_fallback = !1, branch(() => this.#children(this.#anchor)))), this.#pending_count > 0 ? this.#show_pending_snippet() : this.#pending = !1;
		};
		var T = active_reaction;
		try {
			set_active_reaction(null), C = !0, b?.(e, w), C = !1;
		} catch (e) {
			invoke_error_boundary(e, this.#effect && this.#effect.parent);
		} finally {
			set_active_reaction(T);
		}
		x && queue_micro_task(() => {
			this.#failed_effect = this.#run(() => {
				this.#is_creating_fallback = !0;
				try {
					return branch(() => {
						x(this.#anchor, () => e, () => w);
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
function move_effect(e, b) {
	for (var x = e.nodes_start, S = e.nodes_end; x !== null;) {
		var C = x === S ? null : /* @__PURE__ */ get_next_sibling(x);
		b.append(x), x = C;
	}
}
function flatten(e, b, x) {
	let S = is_runes() ? derived : derived_safe_equal;
	if (b.length === 0) {
		x(e.map(S));
		return;
	}
	var C = current_batch, w = active_effect, T = capture(), E = hydrating;
	Promise.all(b.map((e) => /* @__PURE__ */ async_derived(e))).then((b) => {
		C?.activate(), T();
		try {
			x([...e.map(S), ...b]);
		} catch (e) {
			w.f & 16384 || invoke_error_boundary(e, w);
		}
		E && set_hydrating(!1), C?.deactivate(), unset_context();
	}).catch((e) => {
		invoke_error_boundary(e, w);
	});
}
function capture() {
	var e = active_effect, b = active_reaction, x = component_context, S = current_batch, C = hydrating;
	if (C) var w = hydrate_node;
	return function() {
		set_active_effect(e), set_active_reaction(b), set_component_context(x), S?.activate(), C && (set_hydrating(!0), set_hydrate_node(w));
	};
}
function unset_context() {
	set_active_effect(null), set_active_reaction(null), set_component_context(null);
}
/* @__NO_SIDE_EFFECTS__ */
function derived(e) {
	var b = 2050, x = active_reaction !== null && active_reaction.f & 2 ? active_reaction : null;
	return active_effect === null || x !== null && x.f & 256 ? b |= 256 : active_effect.f |= 524288, {
		ctx: component_context,
		deps: null,
		effects: null,
		equals,
		f: b,
		fn: e,
		reactions: null,
		rv: 0,
		v: UNINITIALIZED,
		wv: 0,
		parent: x ?? active_effect,
		ac: null
	};
}
/* @__NO_SIDE_EFFECTS__ */
function async_derived(e, b) {
	let x = active_effect;
	x === null && async_derived_orphan();
	var S = x.b, C = void 0, w = source(UNINITIALIZED), T = null, E = !active_reaction;
	return async_effect(() => {
		try {
			var b = e();
			T && Promise.resolve(b).catch(() => {});
		} catch (e) {
			b = Promise.reject(e);
		}
		var x = () => b;
		C = T?.then(x, x) ?? Promise.resolve(b), T = C;
		var D = current_batch, O = S.is_pending();
		E && (S.update_pending_count(1), O || D.increment());
		let k = (e, b = void 0) => {
			T = null, O || D.activate(), b ? b !== STALE_REACTION && (w.f |= 8388608, internal_set(w, b)) : (w.f & 8388608 && (w.f ^= 8388608), internal_set(w, e)), E && (S.update_pending_count(-1), O || D.decrement()), unset_context();
		};
		if (C.then(k, (e) => k(null, e || "unknown")), D) return () => {
			queueMicrotask(() => D.neuter());
		};
	}), new Promise((e) => {
		function b(x) {
			function S() {
				x === C ? e(w) : b(C);
			}
			x.then(S, S);
		}
		b(C);
	});
}
/* @__NO_SIDE_EFFECTS__ */
function user_derived(e) {
	let b = /* @__PURE__ */ derived(e);
	return push_reaction_value(b), b;
}
/* @__NO_SIDE_EFFECTS__ */
function derived_safe_equal(e) {
	let b = /* @__PURE__ */ derived(e);
	return b.equals = safe_equals, b;
}
function destroy_derived_effects(e) {
	var b = e.effects;
	if (b !== null) {
		e.effects = null;
		for (var x = 0; x < b.length; x += 1) destroy_effect(b[x]);
	}
}
function get_derived_parent_effect(e) {
	for (var b = e.parent; b !== null;) {
		if (!(b.f & 2)) return b;
		b = b.parent;
	}
	return null;
}
function execute_derived(e) {
	var b, x = active_effect;
	set_active_effect(get_derived_parent_effect(e));
	try {
		destroy_derived_effects(e), b = update_reaction(e);
	} finally {
		set_active_effect(x);
	}
	return b;
}
function update_derived(e) {
	var b = execute_derived(e);
	if (e.equals(b) || (e.v = b, e.wv = increment_write_version()), !is_destroying_effect) if (batch_deriveds !== null) batch_deriveds.set(e, e.v);
	else {
		var x = (skip_reaction || e.f & 256) && e.deps !== null ? 4096 : 1024;
		set_signal_status(e, x);
	}
}
const old_values = /* @__PURE__ */ new Map();
function source(e, b) {
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
function state(e, b) {
	let x = source(e, b);
	return push_reaction_value(x), x;
}
/* @__NO_SIDE_EFFECTS__ */
function mutable_source(e, b = !1, x = !0) {
	let S = source(e);
	return b || (S.equals = safe_equals), S;
}
function set(e, b, x = !1) {
	active_reaction !== null && (!untracking || active_reaction.f & 131072) && is_runes() && active_reaction.f & 4325394 && !current_sources?.includes(e) && state_unsafe_mutation();
	let S = x ? proxy(b) : b;
	return internal_set(e, S);
}
function internal_set(e, b) {
	if (!e.equals(b)) {
		var x = e.v;
		is_destroying_effect ? old_values.set(e, b) : old_values.set(e, x), e.v = b, Batch.ensure().capture(e, x), e.f & 2 && (e.f & 2048 && execute_derived(e), set_signal_status(e, e.f & 256 ? 4096 : 1024)), e.wv = increment_write_version(), mark_reactions(e, 2048), is_runes() && active_effect !== null && active_effect.f & 1024 && !(active_effect.f & 96) && (untracked_writes === null ? set_untracked_writes([e]) : untracked_writes.push(e));
	}
	return b;
}
function update(e, b = 1) {
	var x = get$2(e), S = b === 1 ? x++ : x--;
	return set(e, x), S;
}
function increment(e) {
	set(e, e.v + 1);
}
function mark_reactions(e, b) {
	var x = e.reactions;
	if (x !== null) for (var S = is_runes(), C = x.length, w = 0; w < C; w++) {
		var T = x[w], E = T.f;
		if (!(!S && T === active_effect)) {
			var D = (E & 2048) == 0;
			D && set_signal_status(T, b), E & 2 ? mark_reactions(T, 4096) : D && (E & 16 && eager_block_effects !== null && eager_block_effects.push(T), schedule_effect(T));
		}
	}
}
function proxy(e) {
	if (typeof e != "object" || !e || STATE_SYMBOL in e) return e;
	let b = get_prototype_of(e);
	if (b !== object_prototype && b !== array_prototype) return e;
	var x = /* @__PURE__ */ new Map(), S = is_array(e), C = /* @__PURE__ */ state(0), w = null, T = update_version, E = (e) => {
		if (update_version === T) return e();
		var b = active_reaction, x = update_version;
		set_active_reaction(null), set_update_version(T);
		var S = e();
		return set_active_reaction(b), set_update_version(x), S;
	};
	return S && x.set("length", /* @__PURE__ */ state(e.length, w)), new Proxy(e, {
		defineProperty(e, b, S) {
			(!("value" in S) || S.configurable === !1 || S.enumerable === !1 || S.writable === !1) && state_descriptors_fixed();
			var C = x.get(b);
			return C === void 0 ? C = E(() => {
				var e = /* @__PURE__ */ state(S.value, w);
				return x.set(b, e), e;
			}) : set(C, S.value, !0), !0;
		},
		deleteProperty(e, b) {
			var S = x.get(b);
			if (S === void 0) {
				if (b in e) {
					let e = E(() => /* @__PURE__ */ state(UNINITIALIZED, w));
					x.set(b, e), increment(C);
				}
			} else set(S, UNINITIALIZED), increment(C);
			return !0;
		},
		get(b, S, C) {
			if (S === STATE_SYMBOL) return e;
			var T = x.get(S), D = S in b;
			if (T === void 0 && (!D || get_descriptor(b, S)?.writable) && (T = E(() => {
				var e = proxy(D ? b[S] : UNINITIALIZED);
				return /* @__PURE__ */ state(e, w);
			}), x.set(S, T)), T !== void 0) {
				var O = get$2(T);
				return O === UNINITIALIZED ? void 0 : O;
			}
			return Reflect.get(b, S, C);
		},
		getOwnPropertyDescriptor(e, b) {
			var S = Reflect.getOwnPropertyDescriptor(e, b);
			if (S && "value" in S) {
				var C = x.get(b);
				C && (S.value = get$2(C));
			} else if (S === void 0) {
				var w = x.get(b), T = w?.v;
				if (w !== void 0 && T !== UNINITIALIZED) return {
					enumerable: !0,
					configurable: !0,
					value: T,
					writable: !0
				};
			}
			return S;
		},
		has(e, b) {
			if (b === STATE_SYMBOL) return !0;
			var S = x.get(b), C = S !== void 0 && S.v !== UNINITIALIZED || Reflect.has(e, b);
			return (S !== void 0 || active_effect !== null && (!C || get_descriptor(e, b)?.writable)) && (S === void 0 && (S = E(() => {
				var x = C ? proxy(e[b]) : UNINITIALIZED;
				return /* @__PURE__ */ state(x, w);
			}), x.set(b, S)), get$2(S) === UNINITIALIZED) ? !1 : C;
		},
		set(e, b, T, D) {
			var O = x.get(b), k = b in e;
			if (S && b === "length") for (var A = T; A < O.v; A += 1) {
				var j = x.get(A + "");
				j === void 0 ? A in e && (j = E(() => /* @__PURE__ */ state(UNINITIALIZED, w)), x.set(A + "", j)) : set(j, UNINITIALIZED);
			}
			if (O === void 0) (!k || get_descriptor(e, b)?.writable) && (O = E(() => /* @__PURE__ */ state(void 0, w)), set(O, proxy(T)), x.set(b, O));
			else {
				k = O.v !== UNINITIALIZED;
				var N = E(() => proxy(T));
				set(O, N);
			}
			var P = Reflect.getOwnPropertyDescriptor(e, b);
			if (P?.set && P.set.call(D, T), !k) {
				if (S && typeof b == "string") {
					var F = x.get("length"), I = Number(b);
					Number.isInteger(I) && I >= F.v && set(F, I + 1);
				}
				increment(C);
			}
			return !0;
		},
		ownKeys(e) {
			get$2(C);
			var b = Reflect.ownKeys(e).filter((e) => {
				var b = x.get(e);
				return b === void 0 || b.v !== UNINITIALIZED;
			});
			for (var [S, w] of x) w.v !== UNINITIALIZED && !(S in e) && b.push(S);
			return b;
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
function is(e, b) {
	return Object.is(get_proxied_value(e), get_proxied_value(b));
}
var $window, is_firefox, first_child_getter, next_sibling_getter;
function init_operations() {
	if ($window === void 0) {
		$window = window, document, is_firefox = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, b = Node.prototype, x = Text.prototype;
		first_child_getter = get_descriptor(b, "firstChild").get, next_sibling_getter = get_descriptor(b, "nextSibling").get, is_extensible(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), is_extensible(x) && (x.__t = void 0);
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
function child(e, b) {
	if (!hydrating) return /* @__PURE__ */ get_first_child(e);
	var x = /* @__PURE__ */ get_first_child(hydrate_node);
	if (x === null) x = hydrate_node.appendChild(create_text());
	else if (b && x.nodeType !== 3) {
		var S = create_text();
		return x?.before(S), set_hydrate_node(S), S;
	}
	return set_hydrate_node(x), x;
}
function first_child(e, b = !1) {
	if (!hydrating) {
		var x = /* @__PURE__ */ get_first_child(e);
		return x instanceof Comment && x.data === "" ? /* @__PURE__ */ get_next_sibling(x) : x;
	}
	if (b && hydrate_node?.nodeType !== 3) {
		var S = create_text();
		return hydrate_node?.before(S), set_hydrate_node(S), S;
	}
	return hydrate_node;
}
function sibling(e, b = 1, x = !1) {
	let S = hydrating ? hydrate_node : e;
	for (var C; b--;) C = S, S = /* @__PURE__ */ get_next_sibling(S);
	if (!hydrating) return S;
	if (x && S?.nodeType !== 3) {
		var w = create_text();
		return S === null ? C?.after(w) : S.before(w), set_hydrate_node(w), w;
	}
	return set_hydrate_node(S), S;
}
function clear_text_content(e) {
	e.textContent = "";
}
function should_defer_append() {
	return !1;
}
function autofocus(e, b) {
	if (b) {
		let b = document.body;
		e.autofocus = !0, queue_micro_task(() => {
			document.activeElement === b && e.focus();
		});
	}
}
var listening_to_form_reset = !1;
function add_form_reset_listener() {
	listening_to_form_reset || (listening_to_form_reset = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let b of e.target.elements) b.__on_r?.();
		});
	}, { capture: !0 }));
}
function without_reactive_context(e) {
	var b = active_reaction, x = active_effect;
	set_active_reaction(null), set_active_effect(null);
	try {
		return e();
	} finally {
		set_active_reaction(b), set_active_effect(x);
	}
}
function listen_to_event_and_reset_event(e, b, x, S = x) {
	e.addEventListener(b, () => without_reactive_context(x));
	let C = e.__on_r;
	C ? e.__on_r = () => {
		C(), S(!0);
	} : e.__on_r = () => S(!0), add_form_reset_listener();
}
function validate_effect(e) {
	active_effect === null && active_reaction === null && effect_orphan(e), active_reaction !== null && active_reaction.f & 256 && active_effect === null && effect_in_unowned_derived(), is_destroying_effect && effect_in_teardown(e);
}
function push_effect(e, b) {
	var x = b.last;
	x === null ? b.last = b.first = e : (x.next = e, e.prev = x, b.last = e);
}
function create_effect(e, b, x, S = !0) {
	var C = active_effect;
	C !== null && C.f & 8192 && (e |= 8192);
	var w = {
		ctx: component_context,
		deps: null,
		nodes_start: null,
		nodes_end: null,
		f: e | 2048,
		first: null,
		fn: b,
		last: null,
		next: null,
		parent: C,
		b: C && C.b,
		prev: null,
		teardown: null,
		transitions: null,
		wv: 0,
		ac: null
	};
	if (x) try {
		update_effect(w), w.f |= 32768;
	} catch (e) {
		throw destroy_effect(w), e;
	}
	else b !== null && schedule_effect(w);
	if (S) {
		var T = w;
		if (x && T.deps === null && T.teardown === null && T.nodes_start === null && T.first === T.last && !(T.f & 524288) && (T = T.first), T !== null && (T.parent = C, C !== null && push_effect(T, C), active_reaction !== null && active_reaction.f & 2 && !(e & 64))) {
			var E = active_reaction;
			(E.effects ??= []).push(T);
		}
	}
	return w;
}
function effect_tracking() {
	return active_reaction !== null && !untracking;
}
function teardown(e) {
	let b = create_effect(8, null, !1);
	return set_signal_status(b, 1024), b.teardown = e, b;
}
function user_effect(e) {
	validate_effect("$effect");
	var b = active_effect.f;
	if (!active_reaction && b & 32 && !(b & 32768)) {
		var x = component_context;
		(x.e ??= []).push(e);
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
	let b = create_effect(524352, e, !0);
	return () => {
		destroy_effect(b);
	};
}
function component_root(e) {
	Batch.ensure();
	let b = create_effect(524352, e, !0);
	return (e = {}) => new Promise((x) => {
		e.outro ? pause_effect(b, () => {
			destroy_effect(b), x(void 0);
		}) : (destroy_effect(b), x(void 0));
	});
}
function effect(e) {
	return create_effect(4, e, !1);
}
function async_effect(e) {
	return create_effect(4718592, e, !0);
}
function render_effect(e, b = 0) {
	return create_effect(8 | b, e, !0);
}
function template_effect(e, b = [], x = []) {
	flatten(b, x, (b) => {
		create_effect(8, () => e(...b.map(get$2)), !0);
	});
}
function block(e, b = 0) {
	return create_effect(16 | b, e, !0);
}
function branch(e, b = !0) {
	return create_effect(524320, e, !0, b);
}
function execute_effect_teardown(e) {
	var b = e.teardown;
	if (b !== null) {
		let e = is_destroying_effect, x = active_reaction;
		set_is_destroying_effect(!0), set_active_reaction(null);
		try {
			b.call(null);
		} finally {
			set_is_destroying_effect(e), set_active_reaction(x);
		}
	}
}
function destroy_effect_children(e, b = !1) {
	var x = e.first;
	for (e.first = e.last = null; x !== null;) {
		let e = x.ac;
		e !== null && without_reactive_context(() => {
			e.abort(STALE_REACTION);
		});
		var S = x.next;
		x.f & 64 ? x.parent = null : destroy_effect(x, b), x = S;
	}
}
function destroy_block_effect_children(e) {
	for (var b = e.first; b !== null;) {
		var x = b.next;
		b.f & 32 || destroy_effect(b), b = x;
	}
}
function destroy_effect(e, b = !0) {
	var x = !1;
	(b || e.f & 262144) && e.nodes_start !== null && e.nodes_end !== null && (remove_effect_dom(e.nodes_start, e.nodes_end), x = !0), destroy_effect_children(e, b && !x), remove_reactions(e, 0), set_signal_status(e, 16384);
	var S = e.transitions;
	if (S !== null) for (let e of S) e.stop();
	execute_effect_teardown(e);
	var C = e.parent;
	C !== null && C.first !== null && unlink_effect(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function remove_effect_dom(e, b) {
	for (; e !== null;) {
		var x = e === b ? null : /* @__PURE__ */ get_next_sibling(e);
		e.remove(), e = x;
	}
}
function unlink_effect(e) {
	var b = e.parent, x = e.prev, S = e.next;
	x !== null && (x.next = S), S !== null && (S.prev = x), b !== null && (b.first === e && (b.first = S), b.last === e && (b.last = x));
}
function pause_effect(e, b) {
	var x = [];
	pause_children(e, x, !0), run_out_transitions(x, () => {
		destroy_effect(e), b && b();
	});
}
function run_out_transitions(e, b) {
	var x = e.length;
	if (x > 0) {
		var S = () => --x || b();
		for (var C of e) C.out(S);
	} else b();
}
function pause_children(e, b, x) {
	if (!(e.f & 8192)) {
		if (e.f ^= 8192, e.transitions !== null) for (let S of e.transitions) (S.is_global || x) && b.push(S);
		for (var S = e.first; S !== null;) {
			var C = S.next, w = (S.f & 65536) != 0 || (S.f & 32) != 0;
			pause_children(S, b, w ? x : !1), S = C;
		}
	}
}
function resume_effect(e) {
	resume_children(e, !0);
}
function resume_children(e, b) {
	if (e.f & 8192) {
		e.f ^= 8192, e.f & 1024 || (set_signal_status(e, 2048), schedule_effect(e));
		for (var x = e.first; x !== null;) {
			var S = x.next, C = (x.f & 65536) != 0 || (x.f & 32) != 0;
			resume_children(x, C ? b : !1), x = S;
		}
		if (e.transitions !== null) for (let x of e.transitions) (x.is_global || b) && x.in();
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
	var b = e.f;
	if (b & 2048) return !0;
	if (b & 4096) {
		var x = e.deps, S = (b & 256) != 0;
		if (x !== null) {
			var C, w, T = (b & 512) != 0, E = S && active_effect !== null && !skip_reaction, D = x.length;
			if ((T || E) && (active_effect === null || !(active_effect.f & 16384))) {
				var O = e, k = O.parent;
				for (C = 0; C < D; C++) w = x[C], (T || !w?.reactions?.includes(O)) && (w.reactions ??= []).push(O);
				T && (O.f ^= 512), E && k !== null && !(k.f & 256) && (O.f ^= 256);
			}
			for (C = 0; C < D; C++) if (w = x[C], is_dirty(w) && update_derived(w), w.wv > e.wv) return !0;
		}
		(!S || active_effect !== null && !skip_reaction) && set_signal_status(e, 1024);
	}
	return !1;
}
function schedule_possible_effect_self_invalidation(e, b, x = !0) {
	var S = e.reactions;
	if (S !== null && !current_sources?.includes(e)) for (var C = 0; C < S.length; C++) {
		var w = S[C];
		w.f & 2 ? schedule_possible_effect_self_invalidation(w, b, !1) : b === w && (x ? set_signal_status(w, 2048) : w.f & 1024 && set_signal_status(w, 4096), schedule_effect(w));
	}
}
function update_reaction(e) {
	var b = new_deps, x = skipped_deps, S = untracked_writes, C = active_reaction, w = skip_reaction, T = current_sources, E = component_context, D = untracking, O = update_version, k = e.f;
	new_deps = null, skipped_deps = 0, untracked_writes = null, skip_reaction = (k & 256) != 0 && (untracking || !is_updating_effect || active_reaction === null), active_reaction = k & 96 ? null : e, current_sources = null, set_component_context(e.ctx), untracking = !1, update_version = ++read_version, e.ac !== null && (without_reactive_context(() => {
		e.ac.abort(STALE_REACTION);
	}), e.ac = null);
	try {
		e.f |= 2097152;
		var A = e.fn, j = A(), M = e.deps;
		if (new_deps !== null) {
			var N;
			if (remove_reactions(e, skipped_deps), M !== null && skipped_deps > 0) for (M.length = skipped_deps + new_deps.length, N = 0; N < new_deps.length; N++) M[skipped_deps + N] = new_deps[N];
			else e.deps = M = new_deps;
			if (!skip_reaction || k & 2 && e.reactions !== null) for (N = skipped_deps; N < M.length; N++) (M[N].reactions ??= []).push(e);
		} else M !== null && skipped_deps < M.length && (remove_reactions(e, skipped_deps), M.length = skipped_deps);
		if (is_runes() && untracked_writes !== null && !untracking && M !== null && !(e.f & 6146)) for (N = 0; N < untracked_writes.length; N++) schedule_possible_effect_self_invalidation(untracked_writes[N], e);
		return C !== null && C !== e && (read_version++, untracked_writes !== null && (S === null ? S = untracked_writes : S.push(...untracked_writes))), e.f & 8388608 && (e.f ^= 8388608), j;
	} catch (e) {
		return handle_error(e);
	} finally {
		e.f ^= 2097152, new_deps = b, skipped_deps = x, untracked_writes = S, active_reaction = C, skip_reaction = w, current_sources = T, set_component_context(E), untracking = D, update_version = O;
	}
}
function remove_reaction(e, b) {
	let x = b.reactions;
	if (x !== null) {
		var S = index_of.call(x, e);
		if (S !== -1) {
			var C = x.length - 1;
			C === 0 ? x = b.reactions = null : (x[S] = x[C], x.pop());
		}
	}
	x === null && b.f & 2 && (new_deps === null || !new_deps.includes(b)) && (set_signal_status(b, 4096), b.f & 768 || (b.f ^= 512), destroy_derived_effects(b), remove_reactions(b, 0));
}
function remove_reactions(e, b) {
	var x = e.deps;
	if (x !== null) for (var S = b; S < x.length; S++) remove_reaction(e, x[S]);
}
function update_effect(e) {
	var b = e.f;
	if (!(b & 16384)) {
		set_signal_status(e, 1024);
		var x = active_effect, S = is_updating_effect;
		active_effect = e, is_updating_effect = !0;
		try {
			b & 16 ? destroy_block_effect_children(e) : destroy_effect_children(e), execute_effect_teardown(e);
			var C = update_reaction(e);
			e.teardown = typeof C == "function" ? C : null, e.wv = write_version;
		} finally {
			is_updating_effect = S, active_effect = x;
		}
	}
}
async function tick() {
	await Promise.resolve(), flushSync();
}
function get$2(e) {
	var b = (e.f & 2) != 0;
	if (null?.add(e), active_reaction !== null && !untracking) {
		if (!(active_effect !== null && active_effect.f & 16384) && !current_sources?.includes(e)) {
			var x = active_reaction.deps;
			if (active_reaction.f & 2097152) e.rv < read_version && (e.rv = read_version, new_deps === null && x !== null && x[skipped_deps] === e ? skipped_deps++ : new_deps === null ? new_deps = [e] : (!skip_reaction || !new_deps.includes(e)) && new_deps.push(e));
			else {
				(active_reaction.deps ??= []).push(e);
				var S = e.reactions;
				S === null ? e.reactions = [active_reaction] : S.includes(active_reaction) || S.push(active_reaction);
			}
		}
	} else if (b && e.deps === null && e.effects === null) {
		var C = e, w = C.parent;
		w !== null && !(w.f & 256) && (C.f ^= 256);
	}
	if (is_destroying_effect) {
		if (old_values.has(e)) return old_values.get(e);
		if (b) {
			C = e;
			var T = C.v;
			return (!(C.f & 1024) && C.reactions !== null || depends_on_old_values(C)) && (T = execute_derived(C)), old_values.set(C, T), T;
		}
	} else if (b) {
		if (C = e, batch_deriveds?.has(C)) return batch_deriveds.get(C);
		is_dirty(C) && update_derived(C);
	}
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function depends_on_old_values(e) {
	if (e.v === UNINITIALIZED) return !0;
	if (e.deps === null) return !1;
	for (let b of e.deps) if (old_values.has(b) || b.f & 2 && depends_on_old_values(b)) return !0;
	return !1;
}
function untrack(e) {
	var b = untracking;
	try {
		return untracking = !0, e();
	} finally {
		untracking = b;
	}
}
var STATUS_MASK = -7169;
function set_signal_status(e, b) {
	e.f = e.f & STATUS_MASK | b;
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
function create_event(e, b, x, S = {}) {
	function C(e) {
		if (S.capture || handle_event_propagation.call(b, e), !e.cancelBubble) return without_reactive_context(() => x?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? queue_micro_task(() => {
		b.addEventListener(e, C, S);
	}) : b.addEventListener(e, C, S), C;
}
function on(e, b, x, S = {}) {
	var C = create_event(b, e, x, S);
	return () => {
		e.removeEventListener(b, C, S);
	};
}
function event(e, b, x, S, C) {
	var w = {
		capture: S,
		passive: C
	}, T = create_event(e, b, x, w);
	(b === document.body || b === window || b === document || b instanceof HTMLMediaElement) && teardown(() => {
		b.removeEventListener(e, T, w);
	});
}
function delegate(e) {
	for (var b = 0; b < e.length; b++) all_registered_events.add(e[b]);
	for (var x of root_event_handles) x(e);
}
var last_propagated_event = null;
function handle_event_propagation(e) {
	var b = this, x = b.ownerDocument, S = e.type, C = e.composedPath?.() || [], w = C[0] || e.target;
	last_propagated_event = e;
	var T = 0, E = last_propagated_event === e && e.__root;
	if (E) {
		var D = C.indexOf(E);
		if (D !== -1 && (b === document || b === window)) {
			e.__root = b;
			return;
		}
		var k = C.indexOf(b);
		if (k === -1) return;
		D <= k && (T = D);
	}
	if (w = C[T] || e.target, w !== b) {
		define_property(e, "currentTarget", {
			configurable: !0,
			get() {
				return w || x;
			}
		});
		var A = active_reaction, M = active_effect;
		set_active_reaction(null), set_active_effect(null);
		try {
			for (var N, P = []; w !== null;) {
				var F = w.assignedSlot || w.parentNode || w.host || null;
				try {
					var I = w["__" + S];
					if (I != null && (!w.disabled || e.target === w)) if (is_array(I)) {
						var [L, ...R] = I;
						L.apply(w, [e, ...R]);
					} else I.call(w, e);
				} catch (e) {
					N ? P.push(e) : N = e;
				}
				if (e.cancelBubble || F === b || F === null) break;
				w = F;
			}
			if (N) {
				for (let e of P) queueMicrotask(() => {
					throw e;
				});
				throw N;
			}
		} finally {
			e.__root = b, delete e.currentTarget, set_active_reaction(A), set_active_effect(M);
		}
	}
}
function create_fragment_from_html(e) {
	var b = document.createElement("template");
	return b.innerHTML = e.replaceAll("<!>", "<!---->"), b.content;
}
function assign_nodes(e, b) {
	var x = active_effect;
	x.nodes_start === null && (x.nodes_start = e, x.nodes_end = b);
}
/* @__NO_SIDE_EFFECTS__ */
function from_html(e, b) {
	var x = (b & 1) != 0, S = (b & 2) != 0, C, w = !e.startsWith("<!>");
	return () => {
		if (hydrating) return assign_nodes(hydrate_node, null), hydrate_node;
		C === void 0 && (C = create_fragment_from_html(w ? e : "<!>" + e), x || (C = /* @__PURE__ */ get_first_child(C)));
		var b = S || is_firefox ? document.importNode(C, !0) : C.cloneNode(!0);
		if (x) {
			var T = /* @__PURE__ */ get_first_child(b), E = b.lastChild;
			assign_nodes(T, E);
		} else assign_nodes(b, b);
		return b;
	};
}
/* @__NO_SIDE_EFFECTS__ */
function from_namespace(e, b, x = "svg") {
	var S = !e.startsWith("<!>"), C = (b & 1) != 0, w = `<${x}>${S ? e : "<!>" + e}</${x}>`, T;
	return () => {
		if (hydrating) return assign_nodes(hydrate_node, null), hydrate_node;
		if (!T) {
			var e = create_fragment_from_html(w), b = /* @__PURE__ */ get_first_child(e);
			if (C) for (T = document.createDocumentFragment(); /* @__PURE__ */ get_first_child(b);) T.appendChild(/* @__PURE__ */ get_first_child(b));
			else T = /* @__PURE__ */ get_first_child(b);
		}
		var x = T.cloneNode(!0);
		if (C) {
			var S = /* @__PURE__ */ get_first_child(x), E = x.lastChild;
			assign_nodes(S, E);
		} else assign_nodes(x, x);
		return x;
	};
}
/* @__NO_SIDE_EFFECTS__ */
function from_svg(e, b) {
	return /* @__PURE__ */ from_namespace(e, b, "svg");
}
function text(e = "") {
	if (!hydrating) {
		var b = create_text(e + "");
		return assign_nodes(b, b), b;
	}
	var x = hydrate_node;
	return x.nodeType !== 3 && (x.before(x = create_text()), set_hydrate_node(x)), assign_nodes(x, x), x;
}
function comment() {
	if (hydrating) return assign_nodes(hydrate_node, null), hydrate_node;
	var e = document.createDocumentFragment(), b = document.createComment(""), x = create_text();
	return e.append(b, x), assign_nodes(b, x), e;
}
function append(e, b) {
	if (hydrating) {
		active_effect.nodes_end = hydrate_node, hydrate_next();
		return;
	}
	e !== null && e.before(b);
}
function props_id() {
	if (hydrating && hydrate_node && hydrate_node.nodeType === 8 && hydrate_node.textContent?.startsWith("$")) {
		let e = hydrate_node.textContent.substring(1);
		return hydrate_next(), e;
	}
	return (window.__svelte ??= {}).uid ??= 1, `c${window.__svelte.uid++}`;
}
function set_text(e, b) {
	var x = b == null ? "" : typeof b == "object" ? b + "" : b;
	x !== (e.__t ??= e.nodeValue) && (e.__t = x, e.nodeValue = x + "");
}
function mount(e, b) {
	return _mount(e, b);
}
var document_listeners = /* @__PURE__ */ new Map();
function _mount(e, { target: b, anchor: x, props: S = {}, events: C, context: w, intro: T = !0 }) {
	init_operations();
	var E = /* @__PURE__ */ new Set(), D = (e) => {
		for (var x = 0; x < e.length; x++) {
			var S = e[x];
			if (!E.has(S)) {
				E.add(S);
				var C = is_passive_event(S);
				b.addEventListener(S, handle_event_propagation, { passive: C });
				var w = document_listeners.get(S);
				w === void 0 ? (document.addEventListener(S, handle_event_propagation, { passive: C }), document_listeners.set(S, 1)) : document_listeners.set(S, w + 1);
			}
		}
	};
	D(array_from(all_registered_events)), root_event_handles.add(D);
	var O = void 0, k = component_root(() => {
		var T = x ?? b.appendChild(create_text());
		return boundary(T, { pending: () => {} }, (b) => {
			if (w) {
				push({});
				var x = component_context;
				x.c = w;
			}
			if (C && (S.$$events = C), hydrating && assign_nodes(b, null), O = e(b, S) || {}, hydrating && (active_effect.nodes_end = hydrate_node, hydrate_node === null || hydrate_node.nodeType !== 8 || hydrate_node.data !== "]")) throw hydration_mismatch(), HYDRATION_ERROR;
			w && pop();
		}), () => {
			for (var e of E) {
				b.removeEventListener(e, handle_event_propagation);
				var S = document_listeners.get(e);
				--S === 0 ? (document.removeEventListener(e, handle_event_propagation), document_listeners.delete(e)) : document_listeners.set(e, S);
			}
			root_event_handles.delete(D), T !== x && T.parentNode?.removeChild(T);
		};
	});
	return mounted_components.set(O, k), O;
}
var mounted_components = /* @__PURE__ */ new WeakMap();
function unmount(e, b) {
	let x = mounted_components.get(e);
	return x ? (mounted_components.delete(e), x(b)) : Promise.resolve();
}
function if_block(e, b, x = !1) {
	hydrating && hydrate_next();
	var S = e, C = null, w = null, T = UNINITIALIZED, E = x ? 65536 : 0, D = !1;
	let O = (e, b = !0) => {
		D = !0, j(b, e);
	};
	var k = null;
	function A() {
		k !== null && (k.lastChild.remove(), S.before(k), k = null);
		var e = T ? C : w, b = T ? w : C;
		e && resume_effect(e), b && pause_effect(b, () => {
			T ? w = null : C = null;
		});
	}
	let j = (e, b) => {
		if (T === (T = e)) return;
		let x = !1;
		if (hydrating) {
			let e = read_hydration_instruction(S) === "[!";
			!!T === e && (S = skip_nodes(), set_hydrate_node(S), set_hydrating(!1), x = !0);
		}
		var E = should_defer_append(), D = S;
		if (E && (k = document.createDocumentFragment(), k.append(D = create_text())), T ? C ??= b && branch(() => b(D)) : w ??= b && branch(() => b(D)), E) {
			var O = current_batch, j = T ? C : w, M = T ? w : C;
			j && O.skipped_effects.delete(j), M && O.skipped_effects.add(M), O.add_callback(A);
		} else A();
		x && set_hydrating(!0);
	};
	block(() => {
		D = !1, b(O), D || j(null, null);
	}, E), hydrating && (S = hydrate_node);
}
function key(e, b, x) {
	hydrating && hydrate_next();
	var S = e, C = UNINITIALIZED, w, T, E = null, D = is_runes() ? not_equal : safe_not_equal;
	function O() {
		w && pause_effect(w), E !== null && (E.lastChild.remove(), S.before(E), E = null), w = T;
	}
	block(() => {
		if (D(C, C = b())) {
			var e = S, w = should_defer_append();
			w && (E = document.createDocumentFragment(), E.append(e = create_text())), T = branch(() => x(e)), w ? current_batch.add_callback(O) : O();
		}
	}), hydrating && (S = hydrate_node);
}
let current_each_item = null;
function set_current_each_item(e) {
	current_each_item = e;
}
function index(e, b) {
	return b;
}
function pause_effects(e, b, x) {
	for (var S = e.items, C = [], w = b.length, T = 0; T < w; T++) pause_children(b[T].e, C, !0);
	var E = w > 0 && C.length === 0 && x !== null;
	if (E) {
		var D = x.parentNode;
		clear_text_content(D), D.append(x), S.clear(), link(e, b[0].prev, b[w - 1].next);
	}
	run_out_transitions(C, () => {
		for (var x = 0; x < w; x++) {
			var C = b[x];
			E || (S.delete(C.k), link(e, C.prev, C.next)), destroy_effect(C.e, !E);
		}
	});
}
function each(e, b, x, S, C, w = null) {
	var T = e, E = {
		flags: b,
		items: /* @__PURE__ */ new Map(),
		first: null
	};
	if (b & 4) {
		var D = e;
		T = hydrating ? set_hydrate_node(/* @__PURE__ */ get_first_child(D)) : D.appendChild(create_text());
	}
	hydrating && hydrate_next();
	var k = null, j = !1, M = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ derived_safe_equal(() => {
		var e = x();
		return is_array(e) ? e : e == null ? [] : array_from(e);
	}), P, F;
	function I() {
		reconcile(F, P, E, M, T, C, b, S, x), w !== null && (P.length === 0 ? k ? resume_effect(k) : k = branch(() => w(T)) : k !== null && pause_effect(k, () => {
			k = null;
		}));
	}
	block(() => {
		F ??= active_effect, P = get$2(N);
		var e = P.length;
		if (j && e === 0) return;
		j = e === 0;
		let D = !1;
		if (hydrating && read_hydration_instruction(T) === "[!" != (e === 0) && (T = skip_nodes(), set_hydrate_node(T), set_hydrating(!1), D = !0), hydrating) {
			for (var O = null, A, L = 0; L < e; L++) {
				if (hydrate_node.nodeType === 8 && hydrate_node.data === "]") {
					T = hydrate_node, D = !0, set_hydrating(!1);
					break;
				}
				var R = P[L], z = S(R, L);
				A = create_item(hydrate_node, E, O, null, R, z, L, C, b, x), E.items.set(z, A), O = A;
			}
			e > 0 && set_hydrate_node(skip_nodes());
		}
		if (hydrating) e === 0 && w && (k = branch(() => w(T)));
		else if (should_defer_append()) {
			var B = /* @__PURE__ */ new Set(), V = current_batch;
			for (L = 0; L < e; L += 1) {
				R = P[L], z = S(R, L);
				var H = E.items.get(z) ?? M.get(z);
				H ? b & 3 && update_item(H, R, L, b) : (A = create_item(null, E, null, null, R, z, L, C, b, x, !0), M.set(z, A)), B.add(z);
			}
			for (let [e, b] of E.items) B.has(e) || V.skipped_effects.add(b.e);
			V.add_callback(I);
		} else I();
		D && set_hydrating(!0), get$2(N);
	}), hydrating && (T = hydrate_node);
}
function reconcile(e, b, x, S, C, w, T, E, D) {
	var O = (T & 8) != 0, k = (T & 3) != 0, j = b.length, M = x.items, N = x.first, P, F = null, I, L = [], R = [], z, B, V, H;
	if (O) for (H = 0; H < j; H += 1) z = b[H], B = E(z, H), V = M.get(B), V !== void 0 && (V.a?.measure(), (I ??= /* @__PURE__ */ new Set()).add(V));
	for (H = 0; H < j; H += 1) {
		if (z = b[H], B = E(z, H), V = M.get(B), V === void 0) {
			var U = S.get(B);
			if (U !== void 0) {
				S.delete(B), M.set(B, U);
				var W = F ? F.next : N;
				link(x, F, U), link(x, U, W), move(U, W, C), F = U;
			} else {
				var G = N ? N.e.nodes_start : C;
				F = create_item(G, x, F, F === null ? x.first : F.next, z, B, H, w, T, D);
			}
			M.set(B, F), L = [], R = [], N = F.next;
			continue;
		}
		if (k && update_item(V, z, H, T), V.e.f & 8192 && (resume_effect(V.e), O && (V.a?.unfix(), (I ??= /* @__PURE__ */ new Set()).delete(V))), V !== N) {
			if (P !== void 0 && P.has(V)) {
				if (L.length < R.length) {
					var K = R[0], q;
					F = K.prev;
					var J = L[0], Y = L[L.length - 1];
					for (q = 0; q < L.length; q += 1) move(L[q], K, C);
					for (q = 0; q < R.length; q += 1) P.delete(R[q]);
					link(x, J.prev, Y.next), link(x, F, J), link(x, Y, K), N = K, F = Y, --H, L = [], R = [];
				} else P.delete(V), move(V, N, C), link(x, V.prev, V.next), link(x, V, F === null ? x.first : F.next), link(x, F, V), F = V;
				continue;
			}
			for (L = [], R = []; N !== null && N.k !== B;) N.e.f & 8192 || (P ??= /* @__PURE__ */ new Set()).add(N), R.push(N), N = N.next;
			if (N === null) continue;
			V = N;
		}
		L.push(V), F = V, N = V.next;
	}
	if (N !== null || P !== void 0) {
		for (var X = P === void 0 ? [] : array_from(P); N !== null;) N.e.f & 8192 || X.push(N), N = N.next;
		var Z = X.length;
		if (Z > 0) {
			var Q = T & 4 && j === 0 ? C : null;
			if (O) {
				for (H = 0; H < Z; H += 1) X[H].a?.measure();
				for (H = 0; H < Z; H += 1) X[H].a?.fix();
			}
			pause_effects(x, X, Q);
		}
	}
	O && queue_micro_task(() => {
		if (I !== void 0) for (V of I) V.a?.apply();
	}), e.first = x.first && x.first.e, e.last = F && F.e;
	for (var $ of S.values()) destroy_effect($.e);
	S.clear();
}
function update_item(e, b, x, S) {
	S & 1 && internal_set(e.v, b), S & 2 ? internal_set(e.i, x) : e.i = x;
}
function create_item(e, b, x, S, C, w, T, E, D, O, k) {
	var A = current_each_item, j = (D & 1) != 0, M = (D & 16) == 0, N = j ? M ? /* @__PURE__ */ mutable_source(C, !1, !1) : source(C) : C, P = D & 2 ? source(T) : T, F = {
		i: P,
		v: N,
		k: w,
		a: null,
		e: null,
		prev: x,
		next: S
	};
	current_each_item = F;
	try {
		return e === null && document.createDocumentFragment().append(e = create_text()), F.e = branch(() => E(e, N, P, O), hydrating), F.e.prev = x && x.e, F.e.next = S && S.e, x === null ? k || (b.first = F) : (x.next = F, x.e.next = F.e), S !== null && (S.prev = F, S.e.prev = F.e), F;
	} finally {
		current_each_item = A;
	}
}
function move(e, b, x) {
	for (var S = e.next ? e.next.e.nodes_start : x, C = b ? b.e.nodes_start : x, w = e.e.nodes_start; w !== null && w !== S;) {
		var T = /* @__PURE__ */ get_next_sibling(w);
		C.before(w), w = T;
	}
}
function link(e, b, x) {
	b === null ? e.first = x : (b.next = x, b.e.next = x && x.e), x !== null && (x.prev = b, x.e.prev = b && b.e);
}
function html(e, b, x = !1, S = !1, C = !1) {
	var w = e, T = "";
	template_effect(() => {
		var e = active_effect;
		if (T === (T = b() ?? "")) {
			hydrating && hydrate_next();
			return;
		}
		if (e.nodes_start !== null && (remove_effect_dom(e.nodes_start, e.nodes_end), e.nodes_start = e.nodes_end = null), T !== "") {
			if (hydrating) {
				for (var C = hydrate_node.data, E = hydrate_next(), D = E; E !== null && (E.nodeType !== 8 || E.data !== "");) D = E, E = /* @__PURE__ */ get_next_sibling(E);
				if (E === null) throw hydration_mismatch(), HYDRATION_ERROR;
				assign_nodes(hydrate_node, D), w = set_hydrate_node(E);
				return;
			}
			var O = T + "";
			x ? O = `<svg>${O}</svg>` : S && (O = `<math>${O}</math>`);
			var k = create_fragment_from_html(O);
			if ((x || S) && (k = /* @__PURE__ */ get_first_child(k)), assign_nodes(/* @__PURE__ */ get_first_child(k), k.lastChild), x || S) for (; /* @__PURE__ */ get_first_child(k);) w.before(/* @__PURE__ */ get_first_child(k));
			else w.before(k);
		}
	});
}
function snippet(e, b, ...x) {
	var S = e, C = noop$1, w;
	block(() => {
		C !== (C = b()) && (w &&= (destroy_effect(w), null), w = branch(() => C(S, ...x)));
	}, 65536), hydrating && (S = hydrate_node);
}
function component(e, b, x) {
	hydrating && hydrate_next();
	var S = e, C, w, T = null, E = null;
	function D() {
		w &&= (pause_effect(w), null), T &&= (T.lastChild.remove(), S.before(T), null), w = E, E = null;
	}
	block(() => {
		if (C !== (C = b())) {
			var e = should_defer_append();
			if (C) {
				var O = S;
				e && (T = document.createDocumentFragment(), T.append(O = create_text()), w && current_batch.skipped_effects.add(w)), E = branch(() => x(O, C));
			}
			e ? current_batch.add_callback(D) : D();
		}
	}, 65536), hydrating && (S = hydrate_node);
}
function element(e, b, x, S, C, w) {
	let T = hydrating;
	hydrating && hydrate_next();
	var E, D, O = null;
	hydrating && hydrate_node.nodeType === 1 && (O = hydrate_node, hydrate_next());
	var k = hydrating ? hydrate_node : e, A, j = current_each_item;
	block(() => {
		let e = b() || null;
		var w = C ? C() : x || e === "svg" ? "http://www.w3.org/2000/svg" : null;
		if (e !== E) {
			var T = current_each_item;
			set_current_each_item(j), A && (e === null ? pause_effect(A, () => {
				A = null, D = null;
			}) : e === D ? resume_effect(A) : destroy_effect(A)), e && e !== D && (A = branch(() => {
				if (O = hydrating ? O : w ? document.createElementNS(w, e) : document.createElement(e), assign_nodes(O, O), S) {
					hydrating && is_raw_text_element(e) && O.append(document.createComment(""));
					var b = hydrating ? /* @__PURE__ */ get_first_child(O) : O.appendChild(create_text());
					hydrating && (b === null ? set_hydrating(!1) : set_hydrate_node(b)), S(O, b);
				}
				active_effect.nodes_end = O, k.before(O);
			})), E = e, E && (D = E), set_current_each_item(T);
		}
	}, 65536), T && (set_hydrating(!0), set_hydrate_node(k));
}
function attach(e, b) {
	var x = void 0, S;
	block(() => {
		x !== (x = b()) && (S &&= (destroy_effect(S), null), x && (S = branch(() => {
			effect(() => x(e));
		})));
	});
}
function r(e) {
	var b, x, S = "";
	if (typeof e == "string" || typeof e == "number") S += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var C = e.length;
		for (b = 0; b < C; b++) e[b] && (x = r(e[b])) && (S && (S += " "), S += x);
	} else for (x in e) e[x] && (S && (S += " "), S += x);
	return S;
}
function clsx() {
	for (var e, b, x = 0, S = "", C = arguments.length; x < C; x++) (e = arguments[x]) && (b = r(e)) && (S && (S += " "), S += b);
	return S;
}
function clsx$1(e) {
	return typeof e == "object" ? clsx(e) : e ?? "";
}
var whitespace = [..." 	\n\r\f\xA0\v﻿"];
function to_class(e, b, x) {
	var S = e == null ? "" : "" + e;
	if (b && (S = S ? S + " " + b : b), x) {
		for (var C in x) if (x[C]) S = S ? S + " " + C : C;
		else if (S.length) for (var w = C.length, T = 0; (T = S.indexOf(C, T)) >= 0;) {
			var E = T + w;
			(T === 0 || whitespace.includes(S[T - 1])) && (E === S.length || whitespace.includes(S[E])) ? S = (T === 0 ? "" : S.substring(0, T)) + S.substring(E + 1) : T = E;
		}
	}
	return S === "" ? null : S;
}
function append_styles(e, b = !1) {
	var x = b ? " !important;" : ";", S = "";
	for (var C in e) {
		var w = e[C];
		w != null && w !== "" && (S += " " + C + ": " + w + x);
	}
	return S;
}
function to_css_name(e) {
	return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function to_style(e, b) {
	if (b) {
		var x = "", S, C;
		if (Array.isArray(b) ? (S = b[0], C = b[1]) : S = b, e) {
			e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
			var w = !1, T = 0, E = !1, D = [];
			S && D.push(...Object.keys(S).map(to_css_name)), C && D.push(...Object.keys(C).map(to_css_name));
			var O = 0, k = -1;
			let b = e.length;
			for (var A = 0; A < b; A++) {
				var j = e[A];
				if (E ? j === "/" && e[A - 1] === "*" && (E = !1) : w ? w === j && (w = !1) : j === "/" && e[A + 1] === "*" ? E = !0 : j === "\"" || j === "'" ? w = j : j === "(" ? T++ : j === ")" && T--, !E && w === !1 && T === 0) {
					if (j === ":" && k === -1) k = A;
					else if (j === ";" || A === b - 1) {
						if (k !== -1) {
							var M = to_css_name(e.substring(O, k).trim());
							if (!D.includes(M)) {
								j !== ";" && A++;
								var N = e.substring(O, A).trim();
								x += " " + N + ";";
							}
						}
						O = A + 1, k = -1;
					}
				}
			}
		}
		return S && (x += append_styles(S)), C && (x += append_styles(C, !0)), x = x.trim(), x === "" ? null : x;
	}
	return e == null ? null : String(e);
}
function set_class(e, b, x, S, C, w) {
	var T = e.__className;
	if (hydrating || T !== x || T === void 0) {
		var E = to_class(x, S, w);
		(!hydrating || E !== e.getAttribute("class")) && (E == null ? e.removeAttribute("class") : b ? e.className = E : e.setAttribute("class", E)), e.__className = x;
	} else if (w && C !== w) for (var D in w) {
		var O = !!w[D];
		(C == null || O !== !!C[D]) && e.classList.toggle(D, O);
	}
	return w;
}
function update_styles(e, b = {}, x, S) {
	for (var C in x) {
		var w = x[C];
		b[C] !== w && (x[C] == null ? e.style.removeProperty(C) : e.style.setProperty(C, w, S));
	}
}
function set_style(e, b, x, S) {
	var C = e.__style;
	if (hydrating || C !== b) {
		var w = to_style(b, S);
		(!hydrating || w !== e.getAttribute("style")) && (w == null ? e.removeAttribute("style") : e.style.cssText = w), e.__style = b;
	} else S && (Array.isArray(S) ? (update_styles(e, x?.[0], S[0]), update_styles(e, x?.[1], S[1], "important")) : update_styles(e, x, S));
	return S;
}
function select_option(e, b, x = !1) {
	if (e.multiple) {
		if (b == null) return;
		if (!is_array(b)) return select_multiple_invalid_value();
		for (var S of e.options) S.selected = b.includes(get_option_value(S));
		return;
	}
	for (S of e.options) {
		var C = get_option_value(S);
		if (is(C, b)) {
			S.selected = !0;
			return;
		}
	}
	(!x || b !== void 0) && (e.selectedIndex = -1);
}
function init_select(e) {
	var b = new MutationObserver(() => {
		select_option(e, e.__value);
	});
	b.observe(e, {
		childList: !0,
		subtree: !0,
		attributes: !0,
		attributeFilter: ["value"]
	}), teardown(() => {
		b.disconnect();
	});
}
function bind_select_value(e, b, x = b) {
	var S = !0;
	listen_to_event_and_reset_event(e, "change", (b) => {
		var S = b ? "[selected]" : ":checked", C;
		if (e.multiple) C = [].map.call(e.querySelectorAll(S), get_option_value);
		else {
			var w = e.querySelector(S) ?? e.querySelector("option:not([disabled])");
			C = w && get_option_value(w);
		}
		x(C);
	}), effect(() => {
		var C = b();
		if (select_option(e, C, S), S && C === void 0) {
			var w = e.querySelector(":checked");
			w !== null && (C = get_option_value(w), x(C));
		}
		e.__value = C, S = !1;
	}), init_select(e);
}
function get_option_value(e) {
	return "__value" in e ? e.__value : e.value;
}
const CLASS = Symbol("class"), STYLE = Symbol("style");
var IS_CUSTOM_ELEMENT = Symbol("is custom element"), IS_HTML = Symbol("is html");
function remove_input_defaults(e) {
	if (hydrating) {
		var b = !1, x = () => {
			if (!b) {
				if (b = !0, e.hasAttribute("value")) {
					var x = e.value;
					set_attribute(e, "value", null), e.value = x;
				}
				if (e.hasAttribute("checked")) {
					var S = e.checked;
					set_attribute(e, "checked", null), e.checked = S;
				}
			}
		};
		e.__on_r = x, queue_idle_task(x), add_form_reset_listener();
	}
}
function set_value(e, b) {
	var x = get_attributes(e);
	x.value === (x.value = b ?? void 0) || e.value === b && (b !== 0 || e.nodeName !== "PROGRESS") || (e.value = b ?? "");
}
function set_selected(e, b) {
	b ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function set_attribute(e, b, x, S) {
	var C = get_attributes(e);
	hydrating && (C[b] = e.getAttribute(b), b === "src" || b === "srcset" || b === "href" && e.nodeName === "LINK") || C[b] !== (C[b] = x) && (b === "loading" && (e[LOADING_ATTR_SYMBOL] = x), x == null ? e.removeAttribute(b) : typeof x != "string" && get_setters(e).includes(b) ? e[b] = x : e.setAttribute(b, x));
}
function set_attributes(e, b, x, S, C = !1, w = !1) {
	if (hydrating && C && e.tagName === "INPUT") {
		var T = e;
		(T.type === "checkbox" ? "defaultChecked" : "defaultValue") in x || remove_input_defaults(T);
	}
	var E = get_attributes(e), D = E[IS_CUSTOM_ELEMENT], O = !E[IS_HTML];
	let k = hydrating && D;
	k && set_hydrating(!1);
	var A = b || {}, j = e.tagName === "OPTION";
	for (var M in b) M in x || (x[M] = null);
	x.class ? x.class = clsx$1(x.class) : (S || x[CLASS]) && (x.class = null), x[STYLE] && (x.style ??= null);
	var N = get_setters(e);
	for (let C in x) {
		let T = x[C];
		if (j && C === "value" && T == null) {
			e.value = e.__value = "", A[C] = T;
			continue;
		}
		if (C === "class") {
			var P = e.namespaceURI === "http://www.w3.org/1999/xhtml";
			set_class(e, P, T, S, b?.[CLASS], x[CLASS]), A[C] = T, A[CLASS] = x[CLASS];
			continue;
		}
		if (C === "style") {
			set_style(e, T, b?.[STYLE], x[STYLE]), A[C] = T, A[STYLE] = x[STYLE];
			continue;
		}
		var F = A[C];
		if (T === F && !(T === void 0 && e.hasAttribute(C))) continue;
		A[C] = T;
		var I = C[0] + C[1];
		if (I === "$$") continue;
		if (I === "on") {
			let b = {}, x = "$$" + C, S = C.slice(2);
			var L = is_delegated(S);
			if (is_capture_event(S) && (S = S.slice(0, -7), b.capture = !0), !L && F) {
				if (T != null) continue;
				e.removeEventListener(S, A[x], b), A[x] = null;
			}
			if (T != null) if (L) e[`__${S}`] = T, delegate([S]);
			else {
				function w(e) {
					A[C].call(this, e);
				}
				A[x] = create_event(S, e, w, b);
			}
			else L && (e[`__${S}`] = void 0);
		} else if (C === "style") set_attribute(e, C, T);
		else if (C === "autofocus") autofocus(e, !!T);
		else if (!D && (C === "__value" || C === "value" && T != null)) e.value = e.__value = T;
		else if (C === "selected" && j) set_selected(e, T);
		else {
			var R = C;
			O || (R = normalize_attribute(R));
			var z = R === "defaultValue" || R === "defaultChecked";
			if (T == null && !D && !z) if (E[C] = null, R === "value" || R === "checked") {
				let x = e, S = b === void 0;
				if (R === "value") {
					let e = x.defaultValue;
					x.removeAttribute(R), x.defaultValue = e, x.value = x.__value = S ? e : null;
				} else {
					let e = x.defaultChecked;
					x.removeAttribute(R), x.defaultChecked = e, x.checked = S ? e : !1;
				}
			} else e.removeAttribute(C);
			else z || N.includes(R) && (D || typeof T != "string") ? (e[R] = T, R in E && (E[R] = UNINITIALIZED)) : typeof T != "function" && set_attribute(e, R, T, w);
		}
	}
	return k && set_hydrating(!0), A;
}
function attribute_effect(e, b, x = [], S = [], C, w = !1, T = !1) {
	flatten(x, S, (x) => {
		var S = void 0, E = {}, D = e.nodeName === "SELECT", O = !1;
		if (block(() => {
			var k = b(...x.map(get$2)), A = set_attributes(e, S, k, C, w, T);
			O && D && "value" in k && select_option(e, k.value);
			for (let e of Object.getOwnPropertySymbols(E)) k[e] || destroy_effect(E[e]);
			for (let b of Object.getOwnPropertySymbols(k)) {
				var j = k[b];
				b.description === "@attach" && (!S || j !== S[b]) && (E[b] && destroy_effect(E[b]), E[b] = branch(() => attach(e, () => j))), A[b] = j;
			}
			S = A;
		}), D) {
			var k = e;
			effect(() => {
				select_option(k, S.value, !0), init_select(k);
			});
		}
		O = !0;
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
	var b = e.getAttribute("is") || e.nodeName, x = setters_cache.get(b);
	if (x) return x;
	setters_cache.set(b, x = []);
	for (var S, C = e, w = Element.prototype; w !== C;) {
		for (var T in S = get_descriptors(C), S) S[T].set && x.push(T);
		C = get_prototype_of(C);
	}
	return x;
}
function bind_value(e, b, x = b) {
	var S = /* @__PURE__ */ new WeakSet();
	listen_to_event_and_reset_event(e, "input", async (C) => {
		var w = C ? e.defaultValue : e.value;
		if (w = is_numberlike_input(e) ? to_number(w) : w, x(w), current_batch !== null && S.add(current_batch), await tick(), w !== (w = b())) {
			var T = e.selectionStart, E = e.selectionEnd;
			e.value = w ?? "", E !== null && (e.selectionStart = T, e.selectionEnd = Math.min(E, e.value.length));
		}
	}), (hydrating && e.defaultValue !== e.value || untrack(b) == null && e.value) && (x(is_numberlike_input(e) ? to_number(e.value) : e.value), current_batch !== null && S.add(current_batch)), render_effect(() => {
		var x = b();
		if (e === document.activeElement) {
			var C = previous_batch ?? current_batch;
			if (S.has(C)) return;
		}
		is_numberlike_input(e) && x === to_number(e.value) || e.type === "date" && !x && !e.value || x !== e.value && (e.value = x ?? "");
	});
}
function bind_checked(e, b, x = b) {
	listen_to_event_and_reset_event(e, "change", (b) => {
		var S = b ? e.defaultChecked : e.checked;
		x(S);
	}), (hydrating && e.defaultChecked !== e.checked || untrack(b) == null) && x(e.checked), render_effect(() => {
		e.checked = !!b();
	});
}
function is_numberlike_input(e) {
	var b = e.type;
	return b === "number" || b === "range";
}
function to_number(e) {
	return e === "" ? null : +e;
}
function is_bound_this(e, b) {
	return e === b || e?.[STATE_SYMBOL] === b;
}
function bind_this(e = {}, b, x, S) {
	return effect(() => {
		var C, w;
		return render_effect(() => {
			C = w, w = S?.() || [], untrack(() => {
				e !== x(...w) && (b(e, ...w), C && is_bound_this(x(...C), e) && b(null, ...C));
			});
		}), () => {
			queue_micro_task(() => {
				w && is_bound_this(x(...w), e) && b(null, ...w);
			});
		};
	}), e;
}
var is_store_binding = !1;
function capture_store_binding(e) {
	var b = is_store_binding;
	try {
		return is_store_binding = !1, [e(), is_store_binding];
	} finally {
		is_store_binding = b;
	}
}
var rest_props_handler = {
	get(e, b) {
		if (!e.exclude.includes(b)) return e.props[b];
	},
	set(e, b) {
		return !1;
	},
	getOwnPropertyDescriptor(e, b) {
		if (!e.exclude.includes(b) && b in e.props) return {
			enumerable: !0,
			configurable: !0,
			value: e.props[b]
		};
	},
	has(e, b) {
		return e.exclude.includes(b) ? !1 : b in e.props;
	},
	ownKeys(e) {
		return Reflect.ownKeys(e.props).filter((b) => !e.exclude.includes(b));
	}
};
/* @__NO_SIDE_EFFECTS__ */
function rest_props(e, b, x) {
	return new Proxy({
		props: e,
		exclude: b
	}, rest_props_handler);
}
var spread_props_handler = {
	get(e, b) {
		let x = e.props.length;
		for (; x--;) {
			let S = e.props[x];
			if (is_function(S) && (S = S()), typeof S == "object" && S && b in S) return S[b];
		}
	},
	set(e, b, x) {
		let S = e.props.length;
		for (; S--;) {
			let C = e.props[S];
			is_function(C) && (C = C());
			let w = get_descriptor(C, b);
			if (w && w.set) return w.set(x), !0;
		}
		return !1;
	},
	getOwnPropertyDescriptor(e, b) {
		let x = e.props.length;
		for (; x--;) {
			let S = e.props[x];
			if (is_function(S) && (S = S()), typeof S == "object" && S && b in S) {
				let e = get_descriptor(S, b);
				return e && !e.configurable && (e.configurable = !0), e;
			}
		}
	},
	has(e, b) {
		if (b === STATE_SYMBOL || b === LEGACY_PROPS) return !1;
		for (let x of e.props) if (is_function(x) && (x = x()), x != null && b in x) return !0;
		return !1;
	},
	ownKeys(e) {
		let b = [];
		for (let x of e.props) {
			if (is_function(x) && (x = x()), !x) continue;
			for (let e in x) b.includes(e) || b.push(e);
			for (let e of Object.getOwnPropertySymbols(x)) b.includes(e) || b.push(e);
		}
		return b;
	}
};
function spread_props(...e) {
	return new Proxy({ props: e }, spread_props_handler);
}
function prop(e, b, x, S) {
	var C = !0, w = (x & 8) != 0, T = (x & 16) != 0, E = S, D = !0, O = () => (D && (D = !1, E = T ? untrack(S) : S), E), k;
	if (w) {
		var A = STATE_SYMBOL in e || LEGACY_PROPS in e;
		k = get_descriptor(e, b)?.set ?? (A && b in e ? (x) => e[b] = x : void 0);
	}
	var j, N = !1;
	w ? [j, N] = capture_store_binding(() => e[b]) : j = e[b], j === void 0 && S !== void 0 && (j = O(), k && (C && props_invalid_value(b), k(j)));
	var P = C ? () => {
		var x = e[b];
		return x === void 0 ? O() : (D = !0, x);
	} : () => {
		var x = e[b];
		return x !== void 0 && (E = void 0), x === void 0 ? E : x;
	};
	if (C && !(x & 4)) return P;
	if (k) {
		var F = e.$$legacy;
		return (function(e, b) {
			return arguments.length > 0 ? ((!C || !b || F || N) && k(b ? P() : e), e) : P();
		});
	}
	var I = !1, L = (x & 1 ? derived : derived_safe_equal)(() => (I = !1, P()));
	w && get$2(L);
	var R = active_effect;
	return (function(e, b) {
		if (arguments.length > 0) {
			let x = b ? get$2(L) : C && w ? proxy(e) : e;
			return set(L, x), I = !0, E !== void 0 && (E = x), e;
		}
		return is_destroying_effect && I || R.f & 16384 ? L.v : get$2(L);
	});
}
function onMount(e) {
	component_context === null && lifecycle_outside_component("onMount"), user_effect(() => {
		let b = untrack(e);
		if (typeof b == "function") return b;
	});
}
function onDestroy(e) {
	component_context === null && lifecycle_outside_component("onDestroy"), onMount(() => () => untrack(e));
}
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
var matchIconName = /^[a-z0-9]+(-[a-z0-9]+)*$/, stringToIcon = (e, b, x, S = "") => {
	let C = e.split(":");
	if (e.slice(0, 1) === "@") {
		if (C.length < 2 || C.length > 3) return null;
		S = C.shift().slice(1);
	}
	if (C.length > 3 || !C.length) return null;
	if (C.length > 1) {
		let e = C.pop(), x = C.pop(), w = {
			provider: C.length > 0 ? C[0] : S,
			prefix: x,
			name: e
		};
		return b && !validateIconName(w) ? null : w;
	}
	let w = C[0], T = w.split("-");
	if (T.length > 1) {
		let e = {
			provider: S,
			prefix: T.shift(),
			name: T.join("-")
		};
		return b && !validateIconName(e) ? null : e;
	}
	if (x && S === "") {
		let e = {
			provider: S,
			prefix: "",
			name: w
		};
		return b && !validateIconName(e, x) ? null : e;
	}
	return null;
}, validateIconName = (e, b) => e ? !!((b && e.prefix === "" || e.prefix) && e.name) : !1;
function getIconsTree(e, b) {
	let x = e.icons, S = e.aliases || Object.create(null), C = Object.create(null);
	function w(e) {
		if (x[e]) return C[e] = [];
		if (!(e in C)) {
			C[e] = null;
			let b = S[e] && S[e].parent, x = b && w(b);
			x && (C[e] = [b].concat(x));
		}
		return C[e];
	}
	return Object.keys(x).concat(Object.keys(S)).forEach(w), C;
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
function mergeIconTransformations(e, b) {
	let x = {};
	!e.hFlip != !b.hFlip && (x.hFlip = !0), !e.vFlip != !b.vFlip && (x.vFlip = !0);
	let S = ((e.rotate || 0) + (b.rotate || 0)) % 4;
	return S && (x.rotate = S), x;
}
function mergeIconData(e, b) {
	let x = mergeIconTransformations(e, b);
	for (let S in defaultExtendedIconProps) S in defaultIconTransformations ? S in e && !(S in x) && (x[S] = defaultIconTransformations[S]) : S in b ? x[S] = b[S] : S in e && (x[S] = e[S]);
	return x;
}
function internalGetIconData(e, b, x) {
	let S = e.icons, C = e.aliases || Object.create(null), w = {};
	function T(e) {
		w = mergeIconData(S[e] || C[e], w);
	}
	return T(b), x.forEach(T), mergeIconData(e, w);
}
function parseIconSet(e, b) {
	let x = [];
	if (typeof e != "object" || typeof e.icons != "object") return x;
	e.not_found instanceof Array && e.not_found.forEach((e) => {
		b(e, null), x.push(e);
	});
	let S = getIconsTree(e);
	for (let C in S) {
		let w = S[C];
		w && (b(C, internalGetIconData(e, C, w)), x.push(C));
	}
	return x;
}
var optionalPropertyDefaults = {
	provider: "",
	aliases: {},
	not_found: {},
	...defaultIconDimensions
};
function checkOptionalProps(e, b) {
	for (let x in b) if (x in e && typeof e[x] != typeof b[x]) return !1;
	return !0;
}
function quicklyValidateIconSet(e) {
	if (typeof e != "object" || !e) return null;
	let b = e;
	if (typeof b.prefix != "string" || !e.icons || typeof e.icons != "object" || !checkOptionalProps(e, optionalPropertyDefaults)) return null;
	let x = b.icons;
	for (let e in x) {
		let b = x[e];
		if (!e || typeof b.body != "string" || !checkOptionalProps(b, defaultExtendedIconProps)) return null;
	}
	let S = b.aliases || Object.create(null);
	for (let e in S) {
		let b = S[e], C = b.parent;
		if (!e || typeof C != "string" || !x[C] && !S[C] || !checkOptionalProps(b, defaultExtendedIconProps)) return null;
	}
	return b;
}
var dataStorage = Object.create(null);
function newStorage(e, b) {
	return {
		provider: e,
		prefix: b,
		icons: Object.create(null),
		missing: /* @__PURE__ */ new Set()
	};
}
function getStorage(e, b) {
	let x = dataStorage[e] || (dataStorage[e] = Object.create(null));
	return x[b] || (x[b] = newStorage(e, b));
}
function addIconSet(e, b) {
	return quicklyValidateIconSet(b) ? parseIconSet(b, (b, x) => {
		x ? e.icons[b] = x : e.missing.add(b);
	}) : [];
}
function addIconToStorage(e, b, x) {
	try {
		if (typeof x.body == "string") return e.icons[b] = { ...x }, !0;
	} catch {}
	return !1;
}
var simpleNames = !1;
function allowSimpleNames(e) {
	return typeof e == "boolean" && (simpleNames = e), simpleNames;
}
function getIconData(e) {
	let b = typeof e == "string" ? stringToIcon(e, !0, simpleNames) : e;
	if (b) {
		let e = getStorage(b.provider, b.prefix), x = b.name;
		return e.icons[x] || (e.missing.has(x) ? null : void 0);
	}
}
function addIcon(e, b) {
	let x = stringToIcon(e, !0, simpleNames);
	if (!x) return !1;
	let S = getStorage(x.provider, x.prefix);
	return b ? addIconToStorage(S, x.name, b) : (S.missing.add(x.name), !0);
}
function addCollection(e, b) {
	if (typeof e != "object") return !1;
	if (typeof b != "string" && (b = e.provider || ""), simpleNames && !b && !e.prefix) {
		let b = !1;
		return quicklyValidateIconSet(e) && (e.prefix = "", parseIconSet(e, (e, x) => {
			addIcon(e, x) && (b = !0);
		})), b;
	}
	let x = e.prefix;
	if (!validateIconName({
		prefix: x,
		name: "a"
	})) return !1;
	let S = getStorage(b, x);
	return !!addIconSet(S, e);
}
var defaultIconSizeCustomisations = Object.freeze({
	width: null,
	height: null
}), defaultIconCustomisations = Object.freeze({
	...defaultIconSizeCustomisations,
	...defaultIconTransformations
}), unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g, unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(e, b, x) {
	if (b === 1) return e;
	if (x ||= 100, typeof e == "number") return Math.ceil(e * b * x) / x;
	if (typeof e != "string") return e;
	let S = e.split(unitsSplit);
	if (S === null || !S.length) return e;
	let C = [], w = S.shift(), T = unitsTest.test(w);
	for (;;) {
		if (T) {
			let e = parseFloat(w);
			isNaN(e) ? C.push(w) : C.push(Math.ceil(e * b * x) / x);
		} else C.push(w);
		if (w = S.shift(), w === void 0) return C.join("");
		T = !T;
	}
}
function splitSVGDefs(e, b = "defs") {
	let x = "", S = e.indexOf("<" + b);
	for (; S >= 0;) {
		let C = e.indexOf(">", S), w = e.indexOf("</" + b);
		if (C === -1 || w === -1) break;
		let T = e.indexOf(">", w);
		if (T === -1) break;
		x += e.slice(C + 1, w).trim(), e = e.slice(0, S).trim() + e.slice(T + 1);
	}
	return {
		defs: x,
		content: e
	};
}
function mergeDefsAndContent(e, b) {
	return e ? "<defs>" + e + "</defs>" + b : b;
}
function wrapSVGContent(e, b, x) {
	let S = splitSVGDefs(e);
	return mergeDefsAndContent(S.defs, b + S.content + x);
}
var isUnsetKeyword = (e) => e === "unset" || e === "undefined" || e === "none";
function iconToSVG(e, b) {
	let x = {
		...defaultIconProps,
		...e
	}, S = {
		...defaultIconCustomisations,
		...b
	}, C = {
		left: x.left,
		top: x.top,
		width: x.width,
		height: x.height
	}, w = x.body;
	[x, S].forEach((e) => {
		let b = [], x = e.hFlip, S = e.vFlip, T = e.rotate;
		x ? S ? T += 2 : (b.push("translate(" + (C.width + C.left).toString() + " " + (0 - C.top).toString() + ")"), b.push("scale(-1 1)"), C.top = C.left = 0) : S && (b.push("translate(" + (0 - C.left).toString() + " " + (C.height + C.top).toString() + ")"), b.push("scale(1 -1)"), C.top = C.left = 0);
		let E;
		switch (T < 0 && (T -= Math.floor(T / 4) * 4), T %= 4, T) {
			case 1:
				E = C.height / 2 + C.top, b.unshift("rotate(90 " + E.toString() + " " + E.toString() + ")");
				break;
			case 2:
				b.unshift("rotate(180 " + (C.width / 2 + C.left).toString() + " " + (C.height / 2 + C.top).toString() + ")");
				break;
			case 3:
				E = C.width / 2 + C.left, b.unshift("rotate(-90 " + E.toString() + " " + E.toString() + ")");
				break;
		}
		T % 2 == 1 && (C.left !== C.top && (E = C.left, C.left = C.top, C.top = E), C.width !== C.height && (E = C.width, C.width = C.height, C.height = E)), b.length && (w = wrapSVGContent(w, "<g transform=\"" + b.join(" ") + "\">", "</g>"));
	});
	let T = S.width, E = S.height, D = C.width, O = C.height, k, A;
	T === null ? (A = E === null ? "1em" : E === "auto" ? O : E, k = calculateSize(A, D / O)) : (k = T === "auto" ? D : T, A = E === null ? calculateSize(k, O / D) : E === "auto" ? O : E);
	let j = {}, M = (e, b) => {
		isUnsetKeyword(b) || (j[e] = b.toString());
	};
	M("width", k), M("height", A);
	let N = [
		C.left,
		C.top,
		D,
		O
	];
	return j.viewBox = N.join(" "), {
		attributes: j,
		viewBox: N,
		body: w
	};
}
var regex = /\sid="(\S+)"/g, randomPrefix = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16), counter = 0;
function replaceIDs(e, b = randomPrefix) {
	let x = [], S;
	for (; S = regex.exec(e);) x.push(S[1]);
	if (!x.length) return e;
	let C = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
	return x.forEach((x) => {
		let S = typeof b == "function" ? b(x) : b + (counter++).toString(), w = x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		e = e.replace(RegExp("([#;\"])(" + w + ")([\")]|\\.[a-z])", "g"), "$1" + S + C + "$3");
	}), e = e.replace(new RegExp(C, "g"), ""), e;
}
var storage = Object.create(null);
function setAPIModule(e, b) {
	storage[e] = b;
}
function getAPIModule(e) {
	return storage[e] || storage[""];
}
function createAPIConfig(e) {
	let b;
	if (typeof e.resources == "string") b = [e.resources];
	else if (b = e.resources, !(b instanceof Array) || !b.length) return null;
	return {
		resources: b,
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
function addAPIProvider(e, b) {
	let x = createAPIConfig(b);
	return x === null ? !1 : (configStorage[e] = x, !0);
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
function calculateMaxLength(e, b) {
	let x = getAPIConfig(e);
	if (!x) return 0;
	let S;
	if (!x.maxURL) S = 0;
	else {
		let e = 0;
		x.resources.forEach((b) => {
			let x = b;
			e = Math.max(e, x.length);
		});
		let C = b + ".json?icons=";
		S = x.maxURL - e - x.path.length - C.length;
	}
	return S;
}
function shouldAbort(e) {
	return e === 404;
}
var prepare = (e, b, x) => {
	let S = [], C = calculateMaxLength(e, b), w = "icons", T = {
		type: w,
		provider: e,
		prefix: b,
		icons: []
	}, E = 0;
	return x.forEach((x, D) => {
		E += x.length + 1, E >= C && D > 0 && (S.push(T), T = {
			type: w,
			provider: e,
			prefix: b,
			icons: []
		}, E = x.length), T.icons.push(x);
	}), S.push(T), S;
};
function getPath(e) {
	if (typeof e == "string") {
		let b = getAPIConfig(e);
		if (b) return b.path;
	}
	return "/";
}
var fetchAPIModule = {
	prepare,
	send: (e, b, x) => {
		if (!fetchModule) {
			x("abort", 424);
			return;
		}
		let S = getPath(b.provider);
		switch (b.type) {
			case "icons": {
				let e = b.prefix, x = b.icons.join(","), C = new URLSearchParams({ icons: x });
				S += e + ".json?" + C.toString();
				break;
			}
			case "custom": {
				let e = b.uri;
				S += e.slice(0, 1) === "/" ? e.slice(1) : e;
				break;
			}
			default:
				x("abort", 400);
				return;
		}
		let C = 503;
		fetchModule(e + S).then((e) => {
			let b = e.status;
			if (b !== 200) {
				setTimeout(() => {
					x(shouldAbort(b) ? "abort" : "next", b);
				});
				return;
			}
			return C = 501, e.json();
		}).then((e) => {
			if (typeof e != "object" || !e) {
				setTimeout(() => {
					e === 404 ? x("abort", e) : x("next", C);
				});
				return;
			}
			setTimeout(() => {
				x("success", e);
			});
		}).catch(() => {
			x("next", C);
		});
	}
};
function removeCallback(e, b) {
	e.forEach((e) => {
		let x = e.loaderCallbacks;
		x && (e.loaderCallbacks = x.filter((e) => e.id !== b));
	});
}
function updateCallbacks(e) {
	e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
		e.pendingCallbacksFlag = !1;
		let b = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
		if (!b.length) return;
		let x = !1, S = e.provider, C = e.prefix;
		b.forEach((b) => {
			let w = b.icons, T = w.pending.length;
			w.pending = w.pending.filter((b) => {
				if (b.prefix !== C) return !0;
				let T = b.name;
				if (e.icons[T]) w.loaded.push({
					provider: S,
					prefix: C,
					name: T
				});
				else if (e.missing.has(T)) w.missing.push({
					provider: S,
					prefix: C,
					name: T
				});
				else return x = !0, !0;
				return !1;
			}), w.pending.length !== T && (x || removeCallback([e], b.id), b.callback(w.loaded.slice(0), w.missing.slice(0), w.pending.slice(0), b.abort));
		});
	}));
}
var idCounter = 0;
function storeCallback(e, b, x) {
	let S = idCounter++, C = removeCallback.bind(null, x, S);
	if (!b.pending.length) return C;
	let w = {
		id: S,
		icons: b,
		callback: e,
		abort: C
	};
	return x.forEach((e) => {
		(e.loaderCallbacks ||= []).push(w);
	}), C;
}
function sortIcons(e) {
	let b = {
		loaded: [],
		missing: [],
		pending: []
	}, x = Object.create(null);
	e.sort((e, b) => e.provider === b.provider ? e.prefix === b.prefix ? e.name.localeCompare(b.name) : e.prefix.localeCompare(b.prefix) : e.provider.localeCompare(b.provider));
	let S = {
		provider: "",
		prefix: "",
		name: ""
	};
	return e.forEach((e) => {
		if (S.name === e.name && S.prefix === e.prefix && S.provider === e.provider) return;
		S = e;
		let C = e.provider, w = e.prefix, T = e.name, E = x[C] || (x[C] = Object.create(null)), D = E[w] || (E[w] = getStorage(C, w)), O;
		O = T in D.icons ? b.loaded : w === "" || D.missing.has(T) ? b.missing : b.pending;
		let k = {
			provider: C,
			prefix: w,
			name: T
		};
		O.push(k);
	}), b;
}
function listToIcons(e, b = !0, x = !1) {
	let S = [];
	return e.forEach((e) => {
		let C = typeof e == "string" ? stringToIcon(e, b, x) : e;
		C && S.push(C);
	}), S;
}
var defaultConfig = {
	resources: [],
	index: 0,
	timeout: 2e3,
	rotate: 750,
	random: !1,
	dataAfterTimeout: !1
};
function sendQuery(e, b, x, S) {
	let C = e.resources.length, w = e.random ? Math.floor(Math.random() * C) : e.index, T;
	if (e.random) {
		let b = e.resources.slice(0);
		for (T = []; b.length > 1;) {
			let e = Math.floor(Math.random() * b.length);
			T.push(b[e]), b = b.slice(0, e).concat(b.slice(e + 1));
		}
		T = T.concat(b);
	} else T = e.resources.slice(w).concat(e.resources.slice(0, w));
	let E = Date.now(), D = "pending", O = 0, k, A = null, j = [], M = [];
	typeof S == "function" && M.push(S);
	function N() {
		A &&= (clearTimeout(A), null);
	}
	function P() {
		D === "pending" && (D = "aborted"), N(), j.forEach((e) => {
			e.status === "pending" && (e.status = "aborted");
		}), j = [];
	}
	function F(e, b) {
		b && (M = []), typeof e == "function" && M.push(e);
	}
	function I() {
		return {
			startTime: E,
			payload: b,
			status: D,
			queriesSent: O,
			queriesPending: j.length,
			subscribe: F,
			abort: P
		};
	}
	function L() {
		D = "failed", M.forEach((e) => {
			e(void 0, k);
		});
	}
	function R() {
		j.forEach((e) => {
			e.status === "pending" && (e.status = "aborted");
		}), j = [];
	}
	function z(b, x, S) {
		let C = x !== "success";
		switch (j = j.filter((e) => e !== b), D) {
			case "pending": break;
			case "failed":
				if (C || !e.dataAfterTimeout) return;
				break;
			default: return;
		}
		if (x === "abort") {
			k = S, L();
			return;
		}
		if (C) {
			k = S, j.length || (T.length ? B() : L());
			return;
		}
		if (N(), R(), !e.random) {
			let x = e.resources.indexOf(b.resource);
			x !== -1 && x !== e.index && (e.index = x);
		}
		D = "completed", M.forEach((e) => {
			e(S);
		});
	}
	function B() {
		if (D !== "pending") return;
		N();
		let S = T.shift();
		if (S === void 0) {
			if (j.length) {
				A = setTimeout(() => {
					N(), D === "pending" && (R(), L());
				}, e.timeout);
				return;
			}
			L();
			return;
		}
		let C = {
			status: "pending",
			resource: S,
			callback: (e, b) => {
				z(C, e, b);
			}
		};
		j.push(C), O++, A = setTimeout(B, e.rotate), x(S, b, C.callback);
	}
	return setTimeout(B), I;
}
function initRedundancy(e) {
	let b = {
		...defaultConfig,
		...e
	}, x = [];
	function S() {
		x = x.filter((e) => e().status === "pending");
	}
	function C(e, C, w) {
		let T = sendQuery(b, e, C, (e, b) => {
			S(), w && w(e, b);
		});
		return x.push(T), T;
	}
	function w(e) {
		return x.find((b) => e(b)) || null;
	}
	return {
		query: C,
		find: w,
		setIndex: (e) => {
			b.index = e;
		},
		getIndex: () => b.index,
		cleanup: S
	};
}
function emptyCallback$1() {}
var redundancyCache = Object.create(null);
function getRedundancyCache(e) {
	if (!redundancyCache[e]) {
		let b = getAPIConfig(e);
		if (!b) return;
		let x = initRedundancy(b);
		redundancyCache[e] = {
			config: b,
			redundancy: x
		};
	}
	return redundancyCache[e];
}
function sendAPIQuery(e, b, x) {
	let S, C;
	if (typeof e == "string") {
		let b = getAPIModule(e);
		if (!b) return x(void 0, 424), emptyCallback$1;
		C = b.send;
		let w = getRedundancyCache(e);
		w && (S = w.redundancy);
	} else {
		let b = createAPIConfig(e);
		if (b) {
			S = initRedundancy(b);
			let x = e.resources ? e.resources[0] : "", w = getAPIModule(x);
			w && (C = w.send);
		}
	}
	return !S || !C ? (x(void 0, 424), emptyCallback$1) : S.query(b, C, x)().abort;
}
function emptyCallback() {}
function loadedNewIcons(e) {
	e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
		e.iconsLoaderFlag = !1, updateCallbacks(e);
	}));
}
function checkIconNamesForAPI(e) {
	let b = [], x = [];
	return e.forEach((e) => {
		(e.match(matchIconName) ? b : x).push(e);
	}), {
		valid: b,
		invalid: x
	};
}
function parseLoaderResponse(e, b, x) {
	function S() {
		let x = e.pendingIcons;
		b.forEach((b) => {
			x && x.delete(b), e.icons[b] || e.missing.add(b);
		});
	}
	if (x && typeof x == "object") try {
		if (!addIconSet(e, x).length) {
			S();
			return;
		}
	} catch (e) {
		console.error(e);
	}
	S(), loadedNewIcons(e);
}
function parsePossiblyAsyncResponse(e, b) {
	e instanceof Promise ? e.then((e) => {
		b(e);
	}).catch(() => {
		b(null);
	}) : b(e);
}
function loadNewIcons(e, b) {
	e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(b).sort() : e.iconsToLoad = b, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
		e.iconsQueueFlag = !1;
		let { provider: b, prefix: x } = e, S = e.iconsToLoad;
		if (delete e.iconsToLoad, !S || !S.length) return;
		let C = e.loadIcon;
		if (e.loadIcons && (S.length > 1 || !C)) {
			parsePossiblyAsyncResponse(e.loadIcons(S, x, b), (b) => {
				parseLoaderResponse(e, S, b);
			});
			return;
		}
		if (C) {
			S.forEach((S) => {
				let w = C(S, x, b);
				parsePossiblyAsyncResponse(w, (b) => {
					parseLoaderResponse(e, [S], b ? {
						prefix: x,
						icons: { [S]: b }
					} : null);
				});
			});
			return;
		}
		let { valid: w, invalid: T } = checkIconNamesForAPI(S);
		if (T.length && parseLoaderResponse(e, T, null), !w.length) return;
		let E = x.match(matchIconName) ? getAPIModule(b) : null;
		if (!E) {
			parseLoaderResponse(e, w, null);
			return;
		}
		E.prepare(b, x, w).forEach((x) => {
			sendAPIQuery(b, x, (b) => {
				parseLoaderResponse(e, x.icons, b);
			});
		});
	}));
}
var loadIcons = (e, b) => {
	let x = listToIcons(e, !0, allowSimpleNames()), S = sortIcons(x);
	if (!S.pending.length) {
		let e = !0;
		return b && setTimeout(() => {
			e && b(S.loaded, S.missing, S.pending, emptyCallback);
		}), () => {
			e = !1;
		};
	}
	let C = Object.create(null), w = [], T, E;
	return S.pending.forEach((e) => {
		let { provider: b, prefix: x } = e;
		if (x === E && b === T) return;
		T = b, E = x, w.push(getStorage(b, x));
		let S = C[b] || (C[b] = Object.create(null));
		S[x] || (S[x] = []);
	}), S.pending.forEach((e) => {
		let { provider: b, prefix: x, name: S } = e, w = getStorage(b, x), T = w.pendingIcons ||= /* @__PURE__ */ new Set();
		T.has(S) || (T.add(S), C[b][x].push(S));
	}), w.forEach((e) => {
		let b = C[e.provider][e.prefix];
		b.length && loadNewIcons(e, b);
	}), b ? storeCallback(b, S, w) : emptyCallback;
};
function mergeCustomisations(e, b) {
	let x = { ...e };
	for (let e in b) {
		let S = b[e], C = typeof S;
		e in defaultIconSizeCustomisations ? (S === null || S && (C === "string" || C === "number")) && (x[e] = S) : C === typeof x[e] && (x[e] = e === "rotate" ? S % 4 : S);
	}
	return x;
}
var separator = /[\s,]+/;
function flipFromString(e, b) {
	b.split(separator).forEach((b) => {
		switch (b.trim()) {
			case "horizontal":
				e.hFlip = !0;
				break;
			case "vertical":
				e.vFlip = !0;
				break;
		}
	});
}
function rotateFromString(e, b = 0) {
	let x = e.replace(/^-?[0-9.]*/, "");
	function S(e) {
		for (; e < 0;) e += 4;
		return e % 4;
	}
	if (x === "") {
		let b = parseInt(e);
		return isNaN(b) ? 0 : S(b);
	} else if (x !== e) {
		let b = 0;
		switch (x) {
			case "%":
				b = 25;
				break;
			case "deg": b = 90;
		}
		if (b) {
			let C = parseFloat(e.slice(0, e.length - x.length));
			return isNaN(C) ? 0 : (C /= b, C % 1 == 0 ? S(C) : 0);
		}
	}
	return b;
}
function iconToHTML(e, b) {
	let x = e.indexOf("xlink:") === -1 ? "" : " xmlns:xlink=\"http://www.w3.org/1999/xlink\"";
	for (let e in b) x += " " + e + "=\"" + b[e] + "\"";
	return "<svg xmlns=\"http://www.w3.org/2000/svg\"" + x + ">" + e + "</svg>";
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
	let b = propsToAddTo[e];
	for (let x in propsToAdd) b[e + "-" + x] = propsToAdd[x];
}
function fixSize(e) {
	return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
function render(e, b) {
	let x = mergeCustomisations(defaultExtendedIconCustomisations, b), S = b.mode || "svg", C = S === "svg" ? { ...svgDefaults } : {};
	e.body.indexOf("xlink:") === -1 && delete C["xmlns:xlink"];
	let w = typeof b.style == "string" ? b.style : "";
	for (let e in b) {
		let S = b[e];
		if (S === void 0) continue;
		switch (e) {
			case "icon":
			case "style":
			case "onLoad":
			case "mode":
			case "ssr": break;
			case "inline":
			case "hFlip":
			case "vFlip":
				x[e] = S === !0 || S === "true" || S === 1;
				break;
			case "flip":
				typeof S == "string" && flipFromString(x, S);
				break;
			case "color":
				w = w + (w.length > 0 && w.trim().slice(-1) !== ";" ? ";" : "") + "color: " + S + "; ";
				break;
			case "rotate":
				typeof S == "string" ? x[e] = rotateFromString(S) : typeof S == "number" && (x[e] = S);
				break;
			case "ariaHidden":
			case "aria-hidden":
				S !== !0 && S !== "true" && delete C["aria-hidden"];
				break;
			default:
				if (e.slice(0, 3) === "on:") break;
				defaultExtendedIconCustomisations[e] === void 0 && (C[e] = S);
		}
	}
	let T = iconToSVG(e, x), E = T.attributes;
	if (x.inline && (w = "vertical-align: -0.125em; " + w), S === "svg") {
		Object.assign(C, E), w !== "" && (C.style = w);
		let e = 0, x = b.id;
		return typeof x == "string" && (x = x.replace(/-/g, "_")), {
			svg: !0,
			attributes: C,
			body: replaceIDs(T.body, x ? () => x + "ID" + e++ : "iconifySvelte")
		};
	}
	let { body: D, width: O, height: k } = e, A = S === "mask" || (S === "bg" ? !1 : D.indexOf("currentColor") !== -1), j = iconToHTML(D, {
		...E,
		width: O + "",
		height: k + ""
	}), M = svgToURL(j), N = { "--svg": M }, P = (e) => {
		let b = E[e];
		b && (N[e] = fixSize(b));
	};
	P("width"), P("height"), Object.assign(N, commonProps, A ? monotoneProps : coloredProps);
	let F = "";
	for (let e in N) F += e + ": " + N[e] + ";";
	return C.style = F + w, {
		svg: !1,
		attributes: C
	};
}
if (allowSimpleNames(!0), setAPIModule("", fetchAPIModule), typeof document < "u" && typeof window < "u") {
	let e = window;
	if (e.IconifyPreload !== void 0) {
		let b = e.IconifyPreload, x = "Invalid IconifyPreload syntax.";
		typeof b == "object" && b && (b instanceof Array ? b : [b]).forEach((e) => {
			try {
				(typeof e != "object" || !e || e instanceof Array || typeof e.icons != "object" || typeof e.prefix != "string" || !addCollection(e)) && console.error(x);
			} catch {
				console.error(x);
			}
		});
	}
	if (e.IconifyProviders !== void 0) {
		let b = e.IconifyProviders;
		if (typeof b == "object" && b) for (let e in b) {
			let x = "IconifyProviders[" + e + "] is invalid.";
			try {
				let S = b[e];
				if (typeof S != "object" || !S || S.resources === void 0) continue;
				addAPIProvider(e, S) || console.error(x);
			} catch {
				console.error(x);
			}
		}
	}
}
function checkIconState(e, b, x, S, C) {
	function w() {
		b.loading &&= (b.loading.abort(), null);
	}
	if (typeof e == "object" && e && typeof e.body == "string") return b.name = "", w(), { data: {
		...defaultIconProps,
		...e
	} };
	let T;
	if (typeof e != "string" || (T = stringToIcon(e, !1, !0)) === null) return w(), null;
	let E = getIconData(T);
	if (!E) return x && (!b.loading || b.loading.name !== e) && (w(), b.name = "", b.loading = {
		name: e,
		abort: loadIcons([T], S)
	}), null;
	w(), b.name !== e && (b.name = e, C && !b.destroyed && setTimeout(() => {
		C(e);
	}));
	let D = ["iconify"];
	return T.prefix !== "" && D.push("iconify--" + T.prefix), T.provider !== "" && D.push("iconify--" + T.provider), {
		data: E,
		classes: D
	};
}
function generateIcon(e, b) {
	return e ? render({
		...defaultIconProps,
		...e
	}, b) : null;
}
var root_2$15 = /* @__PURE__ */ from_svg("<svg><!></svg>"), root_3$12 = /* @__PURE__ */ from_html("<span></span>");
function Icon(e, b) {
	push(b, !0);
	let x = {
		name: "",
		loading: null,
		destroyed: !1
	}, S = /* @__PURE__ */ rest_props(b, [
		"$$slots",
		"$$events",
		"$$legacy"
	]), C = /* @__PURE__ */ state(!1), w = /* @__PURE__ */ state(0), T = /* @__PURE__ */ user_derived(() => !!b.ssr || get$2(C)), E = /* @__PURE__ */ user_derived(() => (get$2(w), checkIconState(b.icon, x, get$2(T), O, b.onload))), D = /* @__PURE__ */ user_derived(() => {
		let e = get$2(E) ? generateIcon(get$2(E).data, S) : null;
		return e && get$2(E).classes && (e.attributes.class = (typeof S.class == "string" ? S.class + " " : "") + get$2(E).classes.join(" ")), e;
	});
	function O() {
		update(w);
	}
	onMount(() => {
		set(C, !0);
	}), onDestroy(() => {
		x.destroyed = !0, x.loading &&= (x.loading.abort(), null);
	});
	var k = comment(), A = first_child(k), j = (e) => {
		var b = comment(), x = first_child(b), S = (e) => {
			var b = root_2$15();
			attribute_effect(b, () => ({ ...get$2(D).attributes }));
			var x = child(b);
			html(x, () => get$2(D).body, !0), reset(b), append(e, b);
		}, C = (e) => {
			var b = root_3$12();
			attribute_effect(b, () => ({ ...get$2(D).attributes })), append(e, b);
		};
		if_block(x, (e) => {
			get$2(D).svg ? e(S) : e(C, !1);
		}), append(e, b);
	};
	if_block(A, (e) => {
		get$2(D) && e(j);
	}), append(e, k), pop();
}
var root_1$14 = /* @__PURE__ */ from_html("<span> </span>"), root$16 = /* @__PURE__ */ from_html("<button><!> <!></button>");
function IconBtn(e, b) {
	var x = root$16();
	let S;
	x.__click = function(...e) {
		b.onclick?.apply(this, e);
	};
	var C = child(x);
	Icon(C, { get icon() {
		return b.icon;
	} });
	var w = sibling(C, 2), T = (e) => {
		var x = root_1$14(), S = child(x, !0);
		reset(x), template_effect(() => set_text(S, b.label)), append(e, x);
	};
	if_block(w, (e) => {
		b.label && e(T);
	}), reset(x), template_effect((e) => S = set_class(x, 1, clsx$1([b.class || "is-link is-light mr-2", "button"]), null, S, e), [() => ({ disabled: b.disabled })]), append(e, x);
}
delegate(["click"]);
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
			for (var b of e) super.add(b);
			this.#size.v = super.size;
		}
		inited || this.#init();
	}
	#source(e) {
		return update_version === this.#update_version ? /* @__PURE__ */ state(e) : source(e);
	}
	#init() {
		inited = !0;
		var b = e.prototype, x = Set.prototype;
		for (let e of read_methods) b[e] = function(...b) {
			return get$2(this.#version), x[e].apply(this, b);
		};
		for (let S of set_like_methods) b[S] = function(...b) {
			get$2(this.#version);
			var C = x[S].apply(this, b);
			return new e(C);
		};
	}
	has(e) {
		var b = super.has(e), x = this.#sources, S = x.get(e);
		if (S === void 0) {
			if (!b) return get$2(this.#version), !1;
			S = this.#source(!0), x.set(e, S);
		}
		return get$2(S), b;
	}
	add(e) {
		return super.has(e) || (super.add(e), set(this.#size, super.size), increment(this.#version)), this;
	}
	delete(e) {
		var b = super.delete(e), x = this.#sources, S = x.get(e);
		return S !== void 0 && (x.delete(e), set(S, !1)), b && (set(this.#size, super.size), increment(this.#version)), b;
	}
	clear() {
		if (super.size !== 0) {
			super.clear();
			var e = this.#sources;
			for (var b of e.values()) set(b, !1);
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
			for (var [b, x] of e) super.set(b, x);
			this.#size.v = super.size;
		}
	}
	#source(e) {
		return update_version === this.#update_version ? /* @__PURE__ */ state(e) : source(e);
	}
	has(e) {
		var b = this.#sources, x = b.get(e);
		if (x === void 0) if (super.get(e) !== void 0) x = this.#source(0), b.set(e, x);
		else return get$2(this.#version), !1;
		return get$2(x), !0;
	}
	forEach(e, b) {
		this.#read_all(), super.forEach(e, b);
	}
	get(e) {
		var b = this.#sources, x = b.get(e);
		if (x === void 0) if (super.get(e) !== void 0) x = this.#source(0), b.set(e, x);
		else {
			get$2(this.#version);
			return;
		}
		return get$2(x), super.get(e);
	}
	set(e, b) {
		var x = this.#sources, S = x.get(e), C = super.get(e), w = super.set(e, b), T = this.#version;
		if (S === void 0) S = this.#source(0), x.set(e, S), set(this.#size, super.size), increment(T);
		else if (C !== b) {
			increment(S);
			var E = T.reactions === null ? null : new Set(T.reactions);
			(E === null || !S.reactions?.every((e) => E.has(e))) && increment(T);
		}
		return w;
	}
	delete(e) {
		var b = this.#sources, x = b.get(e), S = super.delete(e);
		return x !== void 0 && (b.delete(e), set(this.#size, super.size), set(x, -1), increment(this.#version)), S;
	}
	clear() {
		if (super.size !== 0) {
			super.clear();
			var e = this.#sources;
			set(this.#size, 0);
			for (var b of e.values()) set(b, -1);
			increment(this.#version), e.clear();
		}
	}
	#read_all() {
		get$2(this.#version);
		var e = this.#sources;
		if (this.#size.v !== e.size) {
			for (var b of super.keys()) if (!e.has(b)) {
				var x = this.#source(0);
				e.set(b, x);
			}
		}
		for ([, x] of this.#sources) get$2(x);
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
var NameProvider = class {
	#sources;
	get sources() {
		return get$2(this.#sources);
	}
	set sources(e) {
		set(this.#sources, e, !0);
	}
	constructor(e) {
		this.#sources = /* @__PURE__ */ state(proxy({})), this.sources = e || {};
	}
	getImageName(e, b = !1) {
		let x = e.document && this.sources[e.document.uid]?.images[e.src || e.id] || e.id;
		return b && (x = x.split(".").slice(0, -1).join("."), x.length >= 16 && (x = x.slice(0, 5) + "..." + x.slice(-10))), x;
	}
	getSourceName(e) {
		return e === void 0 ? "" : this.sources[e.uid]?.name || e.name || e.uid || "";
	}
	fetchIIIFNames(e) {
		return new Promise(async (b, x) => {
			for (let b of e) {
				if (this.sources[b.uid]) continue;
				fetch(b.src).then((e) => e.json()).then((e) => {
					if (e.metadata === void 0) return b;
					let x = Object.fromEntries(e.metadata.map(({ label: e, value: b }) => [e.toLowerCase(), b]));
					x.title === void 0 && (x.title = b.name), x.classmark !== void 0 && (x.title = x.classmark + " " + x.title);
					let S = e.sequences && e.sequences[0]?.canvases, C = S && Object.fromEntries(S.map((e) => {
						let b = e.label || e.title || e.images && e.images[0].label || e["@id"] || e.id;
						return [e.images && e.images[0].resource && e.images[0].resource["@id"] || e["@id"] || e.id, b];
					}));
					this.sources[b.uid] = {
						name: x.title,
						metadata: x,
						images: C
					};
				}), await new Promise((e) => setTimeout(e, 300));
			}
		});
	}
	sortImages(e) {
		return e.sort((e, b) => {
			let x = this.getSourceName(e.document), S = this.getSourceName(b.document);
			return x === S ? this.getImageName(e).localeCompare(this.getImageName(b)) : (x || "").localeCompare(S || "");
		});
	}
}, no_name_provider = {
	sortImages: (e) => e,
	getImageName: (e) => e.name || e.id,
	getSourceName: (e) => e?.name || e?.uid || "",
	fetchIIIFNames: async (e) => {}
};
function getNameProvider() {
	return getContext("name_provider") || no_name_provider;
}
function setNameProvider(e) {
	setContext("name_provider", e);
}
function eraseImagesMetadata(e) {
	return e.map((e) => {
		let { tsf_url: b,...x } = e;
		return {
			...x,
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
	constructor(e, b) {
		this.#editing = /* @__PURE__ */ state(!1), this.#editingCluster = /* @__PURE__ */ state(null), this.#askingCluster = /* @__PURE__ */ state(null), this.#image_selection = /* @__PURE__ */ state(proxy(new SvelteSet())), this.#viewer_sort = /* @__PURE__ */ state("id"), this.#viewer_display = /* @__PURE__ */ state("grid"), this.#content = /* @__PURE__ */ state(proxy({
			clusters: e.clusters,
			background_urls: e.background_urls
		})), this.name_provider = new NameProvider(), this.base_url = b || "";
	}
	select_images(e, b) {
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
				b && (this.image_selection.has(b.id) ? this.image_selection.delete(b.id) : this.image_selection.add(b.id));
				break;
		}
	}
	ask_cluster(e, b) {
		this.askingCluster = {
			exclude_cluster_id: b,
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
	merge_clusters(e, b) {
		let x = this.content.clusters[e], S = this.content.clusters[b], C = {
			...x,
			images: [...x.images, ...eraseImagesMetadata(S.images)]
		};
		delete this.content.clusters[b], this.content.clusters[e] = C, this.editingCluster = e;
	}
	move_images(e, b) {
		let x = this.content.clusters[e], S = eraseImagesMetadata(x.images.filter((e) => this.image_selection.has(e.id)));
		x.images = x.images.filter((e) => !this.image_selection.has(e.id));
		let C;
		if (b == -1) {
			let e = Math.max(...Object.keys(this.content.clusters).map(Number)) + 1;
			C = {
				id: e,
				name: "Cluster " + e,
				images: S
			};
		} else C = { ...this.content.clusters[b] }, C.images.push(...S);
		this.content.clusters = {
			...this.content.clusters,
			[C.id]: C
		}, this.editingCluster = null, this.image_selection.clear(), this.askingCluster = null;
	}
};
function getEditorState() {
	return getContext("editor_state");
}
function setEditorState(e) {
	setContext("editor_state", e);
}
var root_1$13 = /* @__PURE__ */ from_html("<span class=\"has-text-danger\"> </span>"), root$15 = /* @__PURE__ */ from_html("<div class=\"match-exporter\"><!> <!></div>");
function CSVExporter(e, b) {
	push(b, !0);
	let x = /* @__PURE__ */ state(!1), S = /* @__PURE__ */ state(null);
	function C(e) {
		return e ? e.toString().replace(/"/g, "\"\"") : "";
	}
	async function w() {
		let e = b.iterRows(), x = [];
		for await (let b of e) x.push(b.map((e) => `"${C(e)}"`).join(","));
		return x.join("\n");
	}
	let T = async () => {
		set(x, !0);
		try {
			let e = await w(), x = new Blob([e], { type: "text/csv" }), S = URL.createObjectURL(x), C = document.createElement("a");
			C.href = S, C.download = b.filename, C.click();
		} catch (e) {
			set(S, e.toString(), !0);
		} finally {
			set(x, !1);
		}
	};
	var E = root$15(), D = child(E);
	IconBtn(D, {
		icon: "mdi:download",
		onclick: T,
		get disabled() {
			return get$2(x);
		},
		label: "Export to CSV"
	});
	var O = sibling(D, 2), k = (e) => {
		var b = root_1$13(), x = child(b, !0);
		reset(b), template_effect(() => set_text(x, get$2(S))), append(e, b);
	};
	if_block(O, (e) => {
		get$2(S) && e(k);
	}), reset(E), append(e, E), pop();
}
function ClusterCSVExporter(e, b) {
	push(b, !0);
	let x = getNameProvider();
	async function* S() {
		let e = /* @__PURE__ */ new Set();
		b.clusters.forEach((b) => {
			b.images.forEach((b) => {
				Object.keys(b.document?.metadata || {}).forEach((b) => e.add(b)), Object.keys(b.metadata || {}).forEach((b) => e.add(b));
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
		for (let S of b.clusters) for (let b of S.images) {
			let C = Array.from(e).map((e) => (b.metadata || b.document?.metadata || {})[e] || "");
			yield [
				S.id,
				S.name,
				x.getImageName(b),
				b.src || b.id,
				x.getSourceName(b.document),
				b.document?.src || "",
				...C
			];
		}
	}
	CSVExporter(e, {
		iterRows: S,
		filename: "cluster.csv"
	}), pop();
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
function boxWith(e, b) {
	let x = /* @__PURE__ */ user_derived(e);
	return b ? {
		[BoxSymbol]: !0,
		[isWritableSymbol]: !0,
		get current() {
			return get$2(x);
		},
		set current(e) {
			b(e);
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
function boxFrom(e) {
	return isBox(e) ? e : isFunction$1(e) ? boxWith(e) : simpleBox(e);
}
function simpleBox(e) {
	let b = /* @__PURE__ */ state(proxy(e));
	return {
		[BoxSymbol]: !0,
		[isWritableSymbol]: !0,
		get current() {
			return get$2(b);
		},
		set current(e) {
			set(b, e, !0);
		}
	};
}
function composeHandlers(...e) {
	return function(b) {
		for (let x of e) {
			if (!x) continue;
			if (b.defaultPrevented) return;
			typeof x == "function" ? x.call(this, b) : x.current?.call(this, b);
		}
	};
}
var require_inline_style_parser = /* @__PURE__ */ __commonJSMin(((exports, b) => {
	var x = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, S = /\n/g, C = /^\s*/, w = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, T = /^:\s*/, E = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, D = /^[;\s]*/, O = /^\s+|\s+$/g, k = "\n", A = "/", j = "*", M = "", N = "comment", P = "declaration";
	b.exports = function(e, b) {
		if (typeof e != "string") throw TypeError("First argument must be a string");
		if (!e) return [];
		b ||= {};
		var O = 1, I = 1;
		function L(e) {
			var b = e.match(S);
			b && (O += b.length);
			var x = e.lastIndexOf(k);
			I = ~x ? e.length - x : I + e.length;
		}
		function R() {
			var e = {
				line: O,
				column: I
			};
			return function(b) {
				return b.position = new z(e), U(), b;
			};
		}
		function z(e) {
			this.start = e, this.end = {
				line: O,
				column: I
			}, this.source = b.source;
		}
		z.prototype.content = e;
		var B = [];
		function V(x) {
			var S = /* @__PURE__ */ Error(b.source + ":" + O + ":" + I + ": " + x);
			if (S.reason = x, S.filename = b.source, S.line = O, S.column = I, S.source = e, b.silent) B.push(S);
			else throw S;
		}
		function H(b) {
			var x = b.exec(e);
			if (x) {
				var S = x[0];
				return L(S), e = e.slice(S.length), x;
			}
		}
		function U() {
			H(C);
		}
		function W(e) {
			var b;
			for (e ||= []; b = G();) b !== !1 && e.push(b);
			return e;
		}
		function G() {
			var b = R();
			if (!(A != e.charAt(0) || j != e.charAt(1))) {
				for (var x = 2; M != e.charAt(x) && (j != e.charAt(x) || A != e.charAt(x + 1));) ++x;
				if (x += 2, M === e.charAt(x - 1)) return V("End of comment missing");
				var S = e.slice(2, x - 2);
				return I += 2, L(S), e = e.slice(x), I += 2, b({
					type: N,
					comment: S
				});
			}
		}
		function K() {
			var e = R(), b = H(w);
			if (b) {
				if (G(), !H(T)) return V("property missing ':'");
				var S = H(E), C = e({
					type: P,
					property: F(b[0].replace(x, M)),
					value: S ? F(S[0].replace(x, M)) : M
				});
				return H(D), C;
			}
		}
		function q() {
			var e = [];
			W(e);
			for (var b; b = K();) b !== !1 && (e.push(b), W(e));
			return e;
		}
		return U(), q();
	};
	function F(e) {
		return e ? e.replace(O, M) : M;
	}
})), import_cjs = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports) => {
	var b = exports && exports.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(exports, "__esModule", { value: !0 }), exports.default = S;
	var x = b(require_inline_style_parser());
	function S(e, b) {
		var S = null;
		if (!e || typeof e != "string") return S;
		var C = (0, x.default)(e), w = typeof b == "function";
		return C.forEach(function(e) {
			if (e.type === "declaration") {
				var x = e.property, C = e.value;
				w ? b(x, C, e) : C && (S ||= {}, S[x] = C);
			}
		}), S;
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
	let b = [], x = "", S, C;
	for (let w of e) {
		let e = STR_SPLITTERS.includes(w);
		if (e === !0) {
			b.push(x), x = "", S = void 0;
			continue;
		}
		let T = isUppercase(w);
		if (C === !1) {
			if (S === !1 && T === !0) {
				b.push(x), x = w, S = T;
				continue;
			}
			if (S === !0 && T === !1 && x.length > 1) {
				let e = x.at(-1);
				b.push(x.slice(0, Math.max(0, x.length - 1))), x = e + w, S = T;
				continue;
			}
		}
		x += w, S = T, C = e;
	}
	return b.push(x), b;
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
	let b = {};
	function x(e, x) {
		if (e.startsWith("-moz-") || e.startsWith("-webkit-") || e.startsWith("-ms-") || e.startsWith("-o-")) {
			b[pascalCase(e)] = x;
			return;
		}
		if (e.startsWith("--")) {
			b[e] = x;
			return;
		}
		b[camelCase(e)] = x;
	}
	return esm_default(e, x), b;
}
function executeCallbacks(...e) {
	return (...b) => {
		for (let x of e) typeof x == "function" && x(...b);
	};
}
function createParser(e, b) {
	let x = RegExp(e, "g");
	return (e) => {
		if (typeof e != "string") throw TypeError(`expected an argument of type string, but got ${typeof e}`);
		return e.match(x) ? e.replace(x, b) : e;
	};
}
var camelToKebab = createParser(/[A-Z]/, (e) => `-${e.toLowerCase()}`);
function styleToCSS(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError(`expected an argument of type object, but got ${typeof e}`);
	return Object.keys(e).map((b) => `${camelToKebab(b)}: ${e[b]};`).join("\n");
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
	let b = { ...e[0] };
	for (let x = 1; x < e.length; x++) {
		let S = e[x];
		if (S) {
			for (let e of Object.keys(S)) {
				let x = b[e], C = S[e], w = typeof x == "function", T = typeof C == "function";
				if (w && typeof T && isEventHandler(e)) b[e] = composeHandlers(x, C);
				else if (w && T) b[e] = executeCallbacks(x, C);
				else if (e === "class") {
					let S = isClassValue(x), w = isClassValue(C);
					S && w ? b[e] = clsx(x, C) : S ? b[e] = clsx(x) : w && (b[e] = clsx(C));
				} else if (e === "style") {
					let S = typeof x == "object", w = typeof C == "object", T = typeof x == "string", E = typeof C == "string";
					if (S && w) b[e] = {
						...x,
						...C
					};
					else if (S && E) {
						let S = cssToStyleObj(C);
						b[e] = {
							...x,
							...S
						};
					} else if (T && w) b[e] = {
						...cssToStyleObj(x),
						...C
					};
					else if (T && E) {
						let S = cssToStyleObj(x), w = cssToStyleObj(C);
						b[e] = {
							...S,
							...w
						};
					} else S ? b[e] = x : w ? b[e] = C : T ? b[e] = x : E && (b[e] = C);
				} else b[e] = C === void 0 ? x : C;
			}
			for (let e of Object.getOwnPropertySymbols(S)) {
				let x = b[e], C = S[e];
				b[e] = C === void 0 ? x : C;
			}
		}
	}
	return typeof b.style == "object" && (b.style = styleToString(b.style).replaceAll("\n", " ")), b.hidden === !1 && (b.hidden = void 0, delete b.hidden), b.disabled === !1 && (b.disabled = void 0, delete b.disabled), b;
}
function onDestroyEffect(e) {
	user_effect(() => () => {
		e();
	});
}
function onMountEffect(e) {
	user_effect(() => untrack(() => e()));
}
function afterSleep(e, b) {
	return setTimeout(b, e);
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
function contains(e, b) {
	if (!e || !b || !isHTMLElement$2(e) || !isHTMLElement$2(b)) return !1;
	let x = b.getRootNode?.();
	if (e === b || e.contains(b)) return !0;
	if (x && isShadowRoot$1(x)) {
		let x = b;
		for (; x;) {
			if (e === x) return !0;
			x = x.parentNode || x.host;
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
	let b = e.activeElement;
	for (; b?.shadowRoot;) {
		let e = b.shadowRoot.activeElement;
		if (e === b) break;
		b = e;
	}
	return b;
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
	setTimeout = (e, b) => this.getWindow().setTimeout(e, b);
	clearTimeout = (e) => this.getWindow().clearTimeout(e);
};
function attachRef(e, b) {
	return { [createAttachmentKey()]: (x) => isBox(e) ? (e.current = x, untrack(() => b?.(x)), () => {
		"isConnected" in x && x.isConnected || (e.current = null, b?.(null));
	}) : (e(x), untrack(() => b?.(x)), () => {
		"isConnected" in x && x.isConnected || (e(null), b?.(null));
	}) };
}
const defaultWindow = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
function getActiveElement(e) {
	let b = e.activeElement;
	for (; b?.shadowRoot;) {
		let e = b.shadowRoot.activeElement;
		if (e === b) break;
		b = e;
	}
	return b;
}
new class {
	#document;
	#subscribe;
	constructor(e = {}) {
		let { window: b = defaultWindow, document: x = b?.document } = e;
		b !== void 0 && (this.#document = x, this.#subscribe = createSubscriber((e) => {
			let x = on(b, "focusin", e), S = on(b, "focusout", e);
			return () => {
				x(), S();
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
		let b = getContext(this.#key);
		return b === void 0 ? e : b;
	}
	set(e) {
		return setContext(this.#key, e);
	}
};
function runEffect(e, b) {
	switch (e) {
		case "post":
			user_effect(b);
			break;
		case "pre":
			user_pre_effect(b);
			break;
	}
}
function runWatcher(e, b, x, S = {}) {
	let { lazy: C = !1 } = S, w = !C, T = Array.isArray(e) ? [] : void 0;
	runEffect(b, () => {
		let b = Array.isArray(e) ? e.map((e) => e()) : e();
		if (!w) {
			w = !0, T = b;
			return;
		}
		let S = untrack(() => x(b, T));
		return T = b, S;
	});
}
function runWatcherOnce(e, b, x) {
	let S = effect_root(() => {
		let C = !1;
		runWatcher(e, b, (e, b) => {
			if (C) {
				S();
				return;
			}
			let w = x(e, b);
			return C = !0, w;
		}, { lazy: !0 });
	});
	user_effect(() => S);
}
function watch(e, b, x) {
	runWatcher(e, "post", b, x);
}
function watchPre(e, b, x) {
	runWatcher(e, "pre", b, x);
}
watch.pre = watchPre;
function watchOnce(e, b) {
	runWatcherOnce(e, "post", b);
}
function watchOncePre(e, b) {
	runWatcherOnce(e, "pre", b);
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
		if (e) return createSubscriber((b) => {
			if (!this.#window) return;
			let x = new this.#window.ResizeObserver((e) => {
				this.#observed = !0;
				for (let b of e) {
					let e = this.#options.box === "content-box" ? b.contentBoxSize : b.borderBoxSize, x = Array.isArray(e) ? e : [e];
					this.#size.width = x.reduce((e, b) => Math.max(e, b.inlineSize), 0), this.#size.height = x.reduce((e, b) => Math.max(e, b.blockSize), 0);
				}
				b();
			});
			return x.observe(e), () => {
				this.#observed = !1, x.disconnect();
			};
		});
	});
	constructor(e, b = { box: "border-box" }) {
		this.#window = b.window ?? defaultWindow, this.#options = b, this.#node = e, this.#size = {
			width: 0,
			height: 0
		};
	}
	calculateSize() {
		let e = get$1(this.#node);
		if (!e || !this.#window) return;
		let b = e.offsetWidth, x = e.offsetHeight;
		if (this.#options.box === "border-box") return {
			width: b,
			height: x
		};
		let S = this.#window.getComputedStyle(e), C = parseFloat(S.paddingLeft) + parseFloat(S.paddingRight), w = parseFloat(S.paddingTop) + parseFloat(S.paddingBottom), T = parseFloat(S.borderLeftWidth) + parseFloat(S.borderRightWidth), E = parseFloat(S.borderTopWidth) + parseFloat(S.borderBottomWidth), D = b - C - T, O = x - w - E;
		return {
			width: D,
			height: O
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
	constructor(e, b) {
		b !== void 0 && set(this.#previous, b, !0), watch(() => e(), (e, b) => {
			set(this.#previous, b, !0);
		});
	}
	get current() {
		return get$2(this.#previous);
	}
};
function debounce$1(e, b) {
	let x, S = null;
	return (...C) => new Promise((w) => {
		S && S(void 0), S = w, clearTimeout(x), x = setTimeout(async () => {
			let b = await e(...C);
			S &&= (S(b), null);
		}, b);
	});
}
function throttle(e, b) {
	let x = 0, S = null;
	return (...C) => {
		let w = Date.now();
		return x && w - x < b ? S ?? Promise.resolve(void 0) : (x = w, S = e(...C), S);
	};
}
function runResource(e, b, x = {}, S) {
	let { lazy: C = !1, once: w = !1, initialValue: T, debounce: E, throttle: D } = x, O = /* @__PURE__ */ state(proxy(T)), k = /* @__PURE__ */ state(!1), A = /* @__PURE__ */ state(void 0), j = /* @__PURE__ */ state(proxy([])), M = () => {
		get$2(j).forEach((e) => e()), set(j, [], !0);
	}, N = (e) => {
		set(j, [...get$2(j), e], !0);
	}, P = async (e, x, S = !1) => {
		try {
			set(k, !0), set(A, void 0), M();
			let C = new AbortController();
			N(() => C.abort());
			let w = await b(e, x, {
				data: get$2(O),
				refetching: S,
				onCleanup: N,
				signal: C.signal
			});
			return set(O, w, !0), w;
		} catch (e) {
			e instanceof DOMException && e.name === "AbortError" || set(A, e, !0);
			return;
		} finally {
			set(k, !1);
		}
	}, F = E ? debounce$1(P, E) : D ? throttle(P, D) : P, I = Array.isArray(e) ? e : [e], L;
	return S((b, x) => {
		w && L || (L = b, F(Array.isArray(e) ? b : b[0], Array.isArray(e) ? x : x?.[0]));
	}, { lazy: C }), {
		get current() {
			return get$2(O);
		},
		get loading() {
			return get$2(k);
		},
		get error() {
			return get$2(A);
		},
		mutate: (e) => {
			set(O, e, !0);
		},
		refetch: (b) => {
			let x = I.map((e) => e());
			return F(Array.isArray(e) ? x : x[0], Array.isArray(e) ? x : x[0], b ?? !0);
		}
	};
}
function resource(e, b, x) {
	return runResource(e, b, x, (b, x) => {
		let S = Array.isArray(e) ? e : [e];
		watch(() => S.map((e) => e()), (e, x) => {
			b(e, x ?? []);
		}, x);
	});
}
function resourcePre(e, b, x) {
	return runResource(e, b, x, (b, x) => {
		let S = Array.isArray(e) ? e : [e];
		watch.pre(() => S.map((e) => e()), (e, x) => {
			b(e, x ?? []);
		}, x);
	});
}
resource.pre = resourcePre;
function boolToEmptyStrOrUndef(e) {
	return e ? "" : void 0;
}
function getDataOpenClosed(e) {
	return e ? "open" : "closed";
}
var BitsAttrs = class {
	#variant;
	#prefix;
	attrs;
	constructor(e) {
		this.#variant = e.getVariant ? e.getVariant() : null, this.#prefix = this.#variant ? `data-${this.#variant}-` : `data-${e.component}-`, this.getAttr = this.getAttr.bind(this), this.selector = this.selector.bind(this), this.attrs = Object.fromEntries(e.parts.map((e) => [e, this.getAttr(e)]));
	}
	getAttr(e, b) {
		return b ? `data-${b}-${e}` : `${this.#prefix}${e}`;
	}
	selector(e, b) {
		return `[${this.getAttr(e, b)}]`;
	}
};
function createBitsAttrs(e) {
	let b = new BitsAttrs(e);
	return {
		...b.attrs,
		selector: b.selector,
		getAttr: b.getAttr
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
function getNextKey(e = "ltr", b = "horizontal") {
	return {
		horizontal: e === "rtl" ? "ArrowLeft" : "ArrowRight",
		vertical: "ArrowDown"
	}[b];
}
function getPrevKey(e = "ltr", b = "horizontal") {
	return {
		horizontal: e === "rtl" ? "ArrowRight" : "ArrowLeft",
		vertical: "ArrowUp"
	}[b];
}
function getDirectionalKeys(e = "ltr", b = "horizontal") {
	return ["ltr", "rtl"].includes(e) || (e = "ltr"), ["horizontal", "vertical"].includes(b) || (b = "horizontal"), {
		nextKey: getNextKey(e, b),
		prevKey: getPrevKey(e, b)
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
function noop() {}
function createId(e, b) {
	return b === void 0 ? `bits-${e}` : `bits-${e}-${b}`;
}
var StateMachine = class {
	state;
	#machine;
	constructor(e, b) {
		this.state = simpleBox(e), this.#machine = b, this.dispatch = this.dispatch.bind(this);
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
		let b = getAnimationName(this.opts.ref.current), x = b.includes(e.animationName) || b === "none";
		e.target === this.opts.ref.current && x && this.machine.dispatch("ANIMATION_END");
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
		let b = e.prevAnimationNameState, x = getAnimationName(e.opts.ref.current);
		if (e.present.current) e.machine.dispatch("MOUNT");
		else if (x === "none" || e.styles.display === "none") e.machine.dispatch("UNMOUNT");
		else {
			let S = b !== x;
			e.previousPresent.current && S ? e.machine.dispatch("ANIMATION_OUT") : e.machine.dispatch("UNMOUNT");
		}
	});
}
function watchStatusChange(e) {
	watch(() => e.machine.state.current, () => {
		if (!e.opts.ref.current) return;
		let b = getAnimationName(e.opts.ref.current);
		e.prevAnimationNameState = e.machine.state.current === "mounted" ? b : "none";
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
function Presence_layer(e, b) {
	push(b, !0);
	let x = new Presence({
		open: boxWith(() => b.open),
		ref: b.ref
	});
	var S = comment(), C = first_child(S), w = (e) => {
		var S = comment(), C = first_child(S);
		snippet(C, () => b.presence ?? noop$1, () => ({ present: x.isPresent })), append(e, S);
	};
	if_block(C, (e) => {
		(b.forceMount || b.open || x.isPresent) && e(w);
	}), append(e, S), pop();
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
		let b = this.#opts.ref.current;
		if (!b) {
			this.#isRunning = !1;
			return;
		}
		if (typeof b.getAnimations != "function") {
			this.#executeCallback(e);
			return;
		}
		this.#currentFrame = window.requestAnimationFrame(() => {
			let x = b.getAnimations();
			if (x.length === 0) {
				this.#executeCallback(e);
				return;
			}
			Promise.allSettled(x.map((e) => e.finished)).then(() => {
				this.#executeCallback(e);
			});
		});
	}
	#executeCallback(e) {
		let b = () => {
			e(), this.#isRunning = !1;
		};
		this.#opts.afterTick ? afterTick(b) : b();
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
	static create(b) {
		return DialogRootContext.set(new e(b));
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
	static create(b) {
		return new e(b, DialogRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(e, b) {
		this.opts = e, this.root = b, this.attachment = attachRef(this.opts.ref), this.onclick = this.onclick.bind(this), this.onkeydown = this.onkeydown.bind(this);
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
	static create(b) {
		return new e(b, DialogRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(e, b) {
		this.opts = e, this.root = b, this.root.titleId = this.opts.id.current, this.attachment = attachRef(this.opts.ref), watch.pre(() => this.opts.id.current, (e) => {
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
	static create(b) {
		return new e(b, DialogRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(e, b) {
		this.opts = e, this.root = b, this.attachment = attachRef(this.opts.ref, (e) => {
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
	static create(b) {
		return new e(b, DialogRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(e, b) {
		this.opts = e, this.root = b, this.attachment = attachRef(this.opts.ref);
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
}, root_2$14 = /* @__PURE__ */ from_html("<div><!></div>");
function Dialog_title(e, b) {
	let x = props_id();
	push(b, !0);
	let S = prop(b, "id", 19, () => createId(x)), C = prop(b, "ref", 15, null), w = prop(b, "level", 3, 2), T = /* @__PURE__ */ rest_props(b, [
		"$$slots",
		"$$events",
		"$$legacy",
		"id",
		"ref",
		"child",
		"children",
		"level"
	]), E = DialogTitleState.create({
		id: boxWith(() => S()),
		level: boxWith(() => w()),
		ref: boxWith(() => C(), (e) => C(e))
	}), D = /* @__PURE__ */ user_derived(() => mergeProps(T, E.props));
	var O = comment(), k = first_child(O), A = (e) => {
		var x = comment(), S = first_child(x);
		snippet(S, () => b.child, () => ({ props: get$2(D) })), append(e, x);
	}, j = (e) => {
		var x = root_2$14();
		attribute_effect(x, () => ({ ...get$2(D) }));
		var S = child(x);
		snippet(S, () => b.children ?? noop$1), reset(x), append(e, x);
	};
	if_block(k, (e) => {
		b.child ? e(A) : e(j, !1);
	}), append(e, O), pop();
}
function Portal_consumer(e, b) {
	var x = comment(), S = first_child(x);
	key(S, () => b.children, (e) => {
		var x = comment(), S = first_child(x);
		snippet(S, () => b.children ?? noop$1), append(e, x);
	}), append(e, x);
}
const BitsConfigContext = new Context("BitsConfig");
function getBitsConfig() {
	let e = new BitsConfigState(null, {});
	return BitsConfigContext.getOr(e).opts;
}
var BitsConfigState = class {
	opts;
	constructor(e, b) {
		let x = createConfigResolver(e, b);
		this.opts = {
			defaultPortalTo: x((e) => e.defaultPortalTo),
			defaultLocale: x((e) => e.defaultLocale)
		};
	}
};
function createConfigResolver(e, b) {
	return (x) => boxWith(() => {
		let S = x(b)?.current;
		if (S !== void 0) return S;
		if (e !== null) return x(e.opts)?.current;
	});
}
function createPropResolver(e, b) {
	return (x) => {
		let S = getBitsConfig();
		return boxWith(() => {
			let C = x();
			if (C !== void 0) return C;
			let w = e(S).current;
			return w === void 0 ? b : w;
		});
	};
}
const resolvePortalToProp = createPropResolver((e) => e.defaultPortalTo, "body");
function Portal(e, b) {
	push(b, !0);
	let x = resolvePortalToProp(() => b.to), S = getAllContexts(), C = /* @__PURE__ */ user_derived(w);
	function w() {
		if (!isBrowser || b.disabled) return null;
		let e = null;
		return e = typeof x.current == "string" ? document.querySelector(x.current) : x.current, e;
	}
	let T;
	function E() {
		T &&= (unmount(T), null);
	}
	watch([() => get$2(C), () => b.disabled], ([e, x]) => {
		if (!e || x) {
			E();
			return;
		}
		return T = mount(Portal_consumer, {
			target: e,
			props: { children: b.children },
			context: S
		}), () => {
			E();
		};
	});
	var D = comment(), O = first_child(D), k = (e) => {
		var x = comment(), S = first_child(x);
		snippet(S, () => b.children ?? noop$1), append(e, x);
	};
	if_block(O, (e) => {
		b.disabled && e(k);
	}), append(e, D), pop();
}
function debounce(e, b = 500) {
	let x = null, S = (...S) => {
		x !== null && clearTimeout(x), x = setTimeout(() => {
			e(...S);
		}, b);
	};
	return S.destroy = () => {
		x !== null && (clearTimeout(x), x = null);
	}, S;
}
function isOrContainsTarget(e, b) {
	return e === b || e.contains(b);
}
function getOwnerDocument(e) {
	return e?.ownerDocument ?? document;
}
function isClickTrulyOutside(e, b) {
	let { clientX: x, clientY: S } = e, C = b.getBoundingClientRect();
	return x < C.left || x > C.right || S < C.top || S > C.bottom;
}
globalThis.bitsDismissableLayers ??= /* @__PURE__ */ new Map();
var DismissibleLayerState = class e {
	static create(b) {
		return new e(b);
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
		let b = noop, x = () => {
			this.#resetState(), globalThis.bitsDismissableLayers.delete(this), this.#handleInteractOutside.destroy(), b();
		};
		watch([() => this.opts.enabled.current, () => this.opts.ref.current], () => {
			if (!(!this.opts.enabled.current || !this.opts.ref.current)) return afterSleep(1, () => {
				this.opts.ref.current && (globalThis.bitsDismissableLayers.set(this, this.#behaviorType), b(), b = this.#addEventListeners());
			}), x;
		}), onDestroyEffect(() => {
			this.#resetState.destroy(), globalThis.bitsDismissableLayers.delete(this), this.#handleInteractOutside.destroy(), this.#unsubClickListener(), b();
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
		let b = e;
		b.defaultPrevented && (b = createWrappedEvent(e)), this.#interactOutsideProp.current(e);
	};
	#handleInteractOutside = debounce((e) => {
		if (!this.opts.ref.current) {
			this.#unsubClickListener();
			return;
		}
		let b = this.opts.isValidEvent.current(e, this.opts.ref.current) || isValidEvent(e, this.opts.ref.current);
		if (!this.#isResponsibleLayer || this.#isAnyEventIntercepted() || !b) {
			this.#unsubClickListener();
			return;
		}
		let x = e;
		if (x.defaultPrevented && (x = createWrappedEvent(x)), this.#behaviorType.current !== "close" && this.#behaviorType.current !== "defer-otherwise-close") {
			this.#unsubClickListener();
			return;
		}
		e.pointerType === "touch" ? (this.#unsubClickListener(), this.#unsubClickListener = on(this.#documentObj, "click", this.#handleDismiss, { once: !0 })) : this.#interactOutsideProp.current(x);
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
	return e.findLast(([e, { current: b }]) => b === "close" || b === "ignore");
}
function isResponsibleLayer(e) {
	let b = [...globalThis.bitsDismissableLayers], x = getTopMostDismissableLayer(b);
	if (x) return x[0].opts.ref.current === e;
	let [S] = b[0];
	return S.opts.ref.current === e;
}
function isValidEvent(e, b) {
	if ("button" in e && e.button > 0) return !1;
	let x = e.target;
	return isElement(x) ? getOwnerDocument(x).documentElement.contains(x) && !isOrContainsTarget(b, x) && isClickTrulyOutside(e, b) : !1;
}
function createWrappedEvent(e) {
	let b = e.currentTarget, x = e.target, S;
	S = e instanceof PointerEvent ? new PointerEvent(e.type, e) : new PointerEvent("pointerdown", e);
	let C = !1;
	return new Proxy(S, { get: (S, w) => w === "currentTarget" ? b : w === "target" ? x : w === "preventDefault" ? () => {
		C = !0, typeof S.preventDefault == "function" && S.preventDefault();
	} : w === "defaultPrevented" ? C : w in S ? S[w] : e[w] });
}
function Dismissible_layer(e, b) {
	push(b, !0);
	let x = prop(b, "interactOutsideBehavior", 3, "close"), S = prop(b, "onInteractOutside", 3, noop), C = prop(b, "onFocusOutside", 3, noop), w = prop(b, "isValidEvent", 3, () => !1), T = DismissibleLayerState.create({
		id: boxWith(() => b.id),
		interactOutsideBehavior: boxWith(() => x()),
		onInteractOutside: boxWith(() => S()),
		enabled: boxWith(() => b.enabled),
		onFocusOutside: boxWith(() => C()),
		isValidEvent: boxWith(() => w()),
		ref: b.ref
	});
	var E = comment(), D = first_child(E);
	snippet(D, () => b.children ?? noop$1, () => ({ props: T.props })), append(e, E), pop();
}
globalThis.bitsEscapeLayers ??= /* @__PURE__ */ new Map();
var EscapeLayerState = class e {
	static create(b) {
		return new e(b);
	}
	opts;
	domContext;
	constructor(e) {
		this.opts = e, this.domContext = new DOMContext(this.opts.ref);
		let b = noop;
		watch(() => e.enabled.current, (x) => (x && (globalThis.bitsEscapeLayers.set(this, e.escapeKeydownBehavior), b = this.#addEventListener()), () => {
			b(), globalThis.bitsEscapeLayers.delete(this);
		}));
	}
	#addEventListener = () => on(this.domContext.getDocument(), "keydown", this.#onkeydown, { passive: !1 });
	#onkeydown = (e) => {
		if (e.key !== "Escape" || !isResponsibleEscapeLayer(this)) return;
		let b = new KeyboardEvent(e.type, e);
		e.preventDefault();
		let x = this.opts.escapeKeydownBehavior.current;
		x !== "close" && x !== "defer-otherwise-close" || this.opts.onEscapeKeydown.current(b);
	};
};
function isResponsibleEscapeLayer(e) {
	let b = [...globalThis.bitsEscapeLayers], x = b.findLast(([e, { current: b }]) => b === "close" || b === "ignore");
	if (x) return x[0] === e;
	let [S] = b[0];
	return S === e;
}
function Escape_layer(e, b) {
	push(b, !0);
	let x = prop(b, "escapeKeydownBehavior", 3, "close"), S = prop(b, "onEscapeKeydown", 3, noop);
	EscapeLayerState.create({
		escapeKeydownBehavior: boxWith(() => x()),
		onEscapeKeydown: boxWith(() => S()),
		enabled: boxWith(() => b.enabled),
		ref: b.ref
	});
	var C = comment(), w = first_child(C);
	snippet(w, () => b.children ?? noop$1), append(e, C), pop();
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
		let b = this.getActive();
		b && b !== e && b.pause();
		let x = document.activeElement;
		x && x !== document.body && this.#preFocusHistory.set(e, x), this.#scopeStack.current = this.#scopeStack.current.filter((b) => b !== e), this.#scopeStack.current.unshift(e);
	}
	unregister(e) {
		this.#scopeStack.current = this.#scopeStack.current.filter((b) => b !== e);
		let b = this.getActive();
		b && b.resume();
	}
	getActive() {
		return this.#scopeStack.current[0];
	}
	setFocusMemory(e, b) {
		this.#focusHistory.set(e, b);
	}
	getFocusMemory(e) {
		return this.#focusHistory.get(e);
	}
	isActiveScope(e) {
		return this.getActive() === e;
	}
	setPreFocusMemory(e, b) {
		this.#preFocusHistory.set(e, b);
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
}, isInert = function e(b, x) {
	x === void 0 && (x = !0);
	var S = b?.getAttribute?.call(b, "inert");
	return S === "" || S === "true" || x && b && e(b.parentNode);
}, isContentEditable = function(e) {
	var b = e?.getAttribute?.call(e, "contenteditable");
	return b === "" || b === "true";
}, getCandidates = function(e, b, x) {
	if (isInert(e)) return [];
	var S = Array.prototype.slice.apply(e.querySelectorAll(candidateSelector));
	return b && matches.call(e, candidateSelector) && S.unshift(e), S = S.filter(x), S;
}, getCandidatesIteratively = function e(b, x, S) {
	for (var C = [], w = Array.from(b); w.length;) {
		var T = w.shift();
		if (!isInert(T, !1)) if (T.tagName === "SLOT") {
			var E = T.assignedElements(), D = E.length ? E : T.children, O = e(D, !0, S);
			S.flatten ? C.push.apply(C, O) : C.push({
				scopeParent: T,
				candidates: O
			});
		} else {
			matches.call(T, candidateSelector) && S.filter(T) && (x || !b.includes(T)) && C.push(T);
			var k = T.shadowRoot || typeof S.getShadowRoot == "function" && S.getShadowRoot(T), A = !isInert(k, !1) && (!S.shadowRootFilter || S.shadowRootFilter(T));
			if (k && A) {
				var j = e(k === !0 ? T.children : k.children, !0, S);
				S.flatten ? C.push.apply(C, j) : C.push({
					scopeParent: T,
					candidates: j
				});
			} else w.unshift.apply(w, T.children);
		}
	}
	return C;
}, hasTabIndex = function(e) {
	return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, getTabIndex = function(e) {
	if (!e) throw Error("No node provided");
	return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || isContentEditable(e)) && !hasTabIndex(e) ? 0 : e.tabIndex;
}, getSortOrderTabIndex = function(e, b) {
	var x = getTabIndex(e);
	return x < 0 && b && !hasTabIndex(e) ? 0 : x;
}, sortOrderedTabbables = function(e, b) {
	return e.tabIndex === b.tabIndex ? e.documentOrder - b.documentOrder : e.tabIndex - b.tabIndex;
}, isInput = function(e) {
	return e.tagName === "INPUT";
}, isHiddenInput = function(e) {
	return isInput(e) && e.type === "hidden";
}, isDetailsWithSummary = function(e) {
	return e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(e) {
		return e.tagName === "SUMMARY";
	});
}, getCheckedRadio = function(e, b) {
	for (var x = 0; x < e.length; x++) if (e[x].checked && e[x].form === b) return e[x];
}, isTabbableRadio = function(e) {
	if (!e.name) return !0;
	var b = e.form || getRootNode(e), x = function(e) {
		return b.querySelectorAll("input[type=\"radio\"][name=\"" + e + "\"]");
	}, S;
	if (typeof window < "u" && window.CSS !== void 0 && typeof window.CSS.escape == "function") S = x(window.CSS.escape(e.name));
	else try {
		S = x(e.name);
	} catch (e) {
		return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message), !1;
	}
	var C = getCheckedRadio(S, e.form);
	return !C || C === e;
}, isRadio = function(e) {
	return isInput(e) && e.type === "radio";
}, isNonTabbableRadio = function(e) {
	return isRadio(e) && !isTabbableRadio(e);
}, isNodeAttached = function(e) {
	var b = e && getRootNode(e), x = b?.host, S = !1;
	if (b && b !== e) {
		var C, w, T;
		for (S = !!((C = x) != null && (w = C.ownerDocument) != null && w.contains(x) || e != null && (T = e.ownerDocument) != null && T.contains(e)); !S && x;) {
			var E, D;
			b = getRootNode(x), x = b?.host, S = !!((E = x) != null && (D = E.ownerDocument) != null && D.contains(x));
		}
	}
	return S;
}, isZeroArea = function(e) {
	var b = e.getBoundingClientRect(), x = b.width, S = b.height;
	return x === 0 && S === 0;
}, isHidden = function(e, b) {
	var x = b.displayCheck, S = b.getShadowRoot;
	if (getComputedStyle(e).visibility === "hidden") return !0;
	var C = matches.call(e, "details>summary:first-of-type") ? e.parentElement : e;
	if (matches.call(C, "details:not([open]) *")) return !0;
	if (!x || x === "full" || x === "legacy-full") {
		if (typeof S == "function") {
			for (var w = e; e;) {
				var T = e.parentElement, E = getRootNode(e);
				if (T && !T.shadowRoot && S(T) === !0) return isZeroArea(e);
				e = e.assignedSlot ? e.assignedSlot : !T && E !== e.ownerDocument ? E.host : T;
			}
			e = w;
		}
		if (isNodeAttached(e)) return !e.getClientRects().length;
		if (x !== "legacy-full") return !0;
	} else if (x === "non-zero-area") return isZeroArea(e);
	return !1;
}, isDisabledFromFieldset = function(e) {
	if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName)) for (var b = e.parentElement; b;) {
		if (b.tagName === "FIELDSET" && b.disabled) {
			for (var x = 0; x < b.children.length; x++) {
				var S = b.children.item(x);
				if (S.tagName === "LEGEND") return matches.call(b, "fieldset[disabled] *") ? !0 : !S.contains(e);
			}
			return !0;
		}
		b = b.parentElement;
	}
	return !1;
}, isNodeMatchingSelectorFocusable = function(e, b) {
	return !(b.disabled || isInert(b) || isHiddenInput(b) || isHidden(b, e) || isDetailsWithSummary(b) || isDisabledFromFieldset(b));
}, isNodeMatchingSelectorTabbable = function(e, b) {
	return !(isNonTabbableRadio(b) || getTabIndex(b) < 0 || !isNodeMatchingSelectorFocusable(e, b));
}, isValidShadowRootTabbable = function(e) {
	var b = parseInt(e.getAttribute("tabindex"), 10);
	return !!(isNaN(b) || b >= 0);
}, sortByOrder = function e(b) {
	var x = [], S = [];
	return b.forEach(function(b, C) {
		var w = !!b.scopeParent, T = w ? b.scopeParent : b, E = getSortOrderTabIndex(T, w), D = w ? e(b.candidates) : T;
		E === 0 ? w ? x.push.apply(x, D) : x.push(T) : S.push({
			documentOrder: C,
			tabIndex: E,
			item: b,
			isScope: w,
			content: D
		});
	}), S.sort(sortOrderedTabbables).reduce(function(e, b) {
		return b.isScope ? e.push.apply(e, b.content) : e.push(b.content), e;
	}, []).concat(x);
}, tabbable = function(e, b) {
	b ||= {};
	var x = b.getShadowRoot ? getCandidatesIteratively([e], b.includeContainer, {
		filter: isNodeMatchingSelectorTabbable.bind(null, b),
		flatten: !1,
		getShadowRoot: b.getShadowRoot,
		shadowRootFilter: isValidShadowRootTabbable
	}) : getCandidates(e, b.includeContainer, isNodeMatchingSelectorTabbable.bind(null, b));
	return sortByOrder(x);
}, focusable = function(e, b) {
	return b ||= {}, b.getShadowRoot ? getCandidatesIteratively([e], b.includeContainer, {
		filter: isNodeMatchingSelectorFocusable.bind(null, b),
		flatten: !0,
		getShadowRoot: b.getShadowRoot
	}) : getCandidates(e, b.includeContainer, isNodeMatchingSelectorFocusable.bind(null, b));
}, focusableCandidateSelector = /* @__PURE__ */ candidateSelectors.concat("iframe").join(","), isFocusable = function(e, b) {
	if (b ||= {}, !e) throw Error("No node provided");
	return matches.call(e, focusableCandidateSelector) === !1 ? !1 : isNodeMatchingSelectorFocusable(b, e);
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
		let e = this.#container, b = e.ownerDocument;
		this.#cleanupFns.push(on(b, "focusin", (b) => {
			if (this.#paused || !this.#manager.isActiveScope(this)) return;
			let x = b.target;
			if (x) if (e.contains(x)) this.#manager.setFocusMemory(this, x);
			else {
				let x = this.#manager.getFocusMemory(this);
				if (x && e.contains(x) && isFocusable(x)) b.preventDefault(), x.focus();
				else {
					let b = this.#getFirstTabbable(), x = this.#getAllFocusables()[0];
					(b || x || e).focus();
				}
			}
		}, { capture: !0 }), on(e, "keydown", (e) => {
			if (!this.#opts.loop || this.#paused || e.key !== "Tab" || !this.#manager.isActiveScope(this)) return;
			let x = this.#getTabbables();
			if (x.length < 2) return;
			let S = x[0], C = x[x.length - 1];
			!e.shiftKey && b.activeElement === C ? (e.preventDefault(), S.focus()) : e.shiftKey && b.activeElement === S && (e.preventDefault(), C.focus());
		}));
		let x = new MutationObserver(() => {
			let b = this.#manager.getFocusMemory(this);
			if (b && !e.contains(b)) {
				let b = this.#getFirstTabbable(), x = this.#getAllFocusables()[0], S = b || x;
				S ? (S.focus(), this.#manager.setFocusMemory(this, S)) : e.focus();
			}
		});
		x.observe(e, {
			childList: !0,
			subtree: !0
		}), this.#cleanupFns.push(() => x.disconnect());
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
	static use(b) {
		let x = null;
		return watch([() => b.ref.current, () => b.enabled.current], ([S, C]) => {
			S && C ? (x ||= new e(b), x.mount(S)) : x &&= (x.unmount(), null);
		}), onDestroyEffect(() => {
			x?.unmount();
		}), { get props() {
			return { tabindex: -1 };
		} };
	}
};
function Focus_scope(e, b) {
	push(b, !0);
	let x = prop(b, "enabled", 3, !1), S = prop(b, "trapFocus", 3, !1), C = prop(b, "loop", 3, !1), w = prop(b, "onCloseAutoFocus", 3, noop), T = prop(b, "onOpenAutoFocus", 3, noop), E = FocusScope.use({
		enabled: boxWith(() => x()),
		trap: boxWith(() => S()),
		loop: C(),
		onCloseAutoFocus: boxWith(() => w()),
		onOpenAutoFocus: boxWith(() => T()),
		ref: b.ref
	});
	var D = comment(), O = first_child(D);
	snippet(O, () => b.focusScope ?? noop$1, () => ({ props: E.props })), append(e, D), pop();
}
globalThis.bitsTextSelectionLayers ??= /* @__PURE__ */ new Map();
var TextSelectionLayerState = class e {
	static create(b) {
		return new e(b);
	}
	opts;
	domContext;
	#unsubSelectionLock = noop;
	constructor(e) {
		this.opts = e, this.domContext = new DOMContext(e.ref);
		let b = noop;
		watch(() => this.opts.enabled.current, (e) => (e && (globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled), b(), b = this.#addEventListeners()), () => {
			b(), this.#resetSelectionLock(), globalThis.bitsTextSelectionLayers.delete(this);
		}));
	}
	#addEventListeners() {
		return executeCallbacks(on(this.domContext.getDocument(), "pointerdown", this.#pointerdown), on(this.domContext.getDocument(), "pointerup", composeHandlers(this.#resetSelectionLock, this.opts.onPointerUp.current)));
	}
	#pointerdown = (e) => {
		let b = this.opts.ref.current, x = e.target;
		!isHTMLElement(b) || !isHTMLElement(x) || !this.opts.enabled.current || !isHighestLayer(this) || !contains(b, x) || (this.opts.onPointerDown.current(e), !e.defaultPrevented && (this.#unsubSelectionLock = preventTextSelectionOverflow(b, this.domContext.getDocument().body)));
	};
	#resetSelectionLock = () => {
		this.#unsubSelectionLock(), this.#unsubSelectionLock = noop;
	};
}, getUserSelect = (e) => e.style.userSelect || e.style.webkitUserSelect;
function preventTextSelectionOverflow(e, b) {
	let x = getUserSelect(b), S = getUserSelect(e);
	return setUserSelect(b, "none"), setUserSelect(e, "text"), () => {
		setUserSelect(b, x), setUserSelect(e, S);
	};
}
function setUserSelect(e, b) {
	e.style.userSelect = b, e.style.webkitUserSelect = b;
}
function isHighestLayer(e) {
	let b = [...globalThis.bitsTextSelectionLayers];
	if (!b.length) return !1;
	let x = b.at(-1);
	return x ? x[0] === e : !1;
}
function Text_selection_layer(e, b) {
	push(b, !0);
	let x = prop(b, "preventOverflowTextSelection", 3, !0), S = prop(b, "onPointerDown", 3, noop), C = prop(b, "onPointerUp", 3, noop);
	TextSelectionLayerState.create({
		id: boxWith(() => b.id),
		onPointerDown: boxWith(() => S()),
		onPointerUp: boxWith(() => C()),
		enabled: boxWith(() => b.enabled && x()),
		ref: b.ref
	});
	var w = comment(), T = first_child(w);
	snippet(T, () => b.children ?? noop$1), append(e, w), pop();
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
	function b() {
		cleanupTimeoutId !== null && (window.clearTimeout(cleanupTimeoutId), cleanupTimeoutId = null);
	}
	function x(e, x) {
		b(), isInCleanupTransition = !0, cleanupScheduledAt = Date.now();
		let S = cleanupScheduledAt, C = () => {
			cleanupTimeoutId = null, cleanupScheduledAt === S && (isAnyLocked(lockMap) ? isInCleanupTransition = !1 : (isInCleanupTransition = !1, x()));
		}, w = e === null ? 24 : e;
		cleanupTimeoutId = window.setTimeout(C, w);
	}
	function S() {
		get$2(initialBodyStyle) === null && lockMap.size === 0 && !isInCleanupTransition && set(initialBodyStyle, document.body.getAttribute("style"), !0);
	}
	return watch(() => anyLocked.current, () => {
		if (!anyLocked.current) return;
		S(), isInCleanupTransition = !1;
		let e = getComputedStyle(document.body), b = window.innerWidth - document.documentElement.clientWidth, x = {
			padding: Number.parseInt(e.paddingRight ?? "0", 10) + b,
			margin: Number.parseInt(e.marginRight ?? "0", 10)
		};
		b > 0 && (document.body.style.paddingRight = `${x.padding}px`, document.body.style.marginRight = `${x.margin}px`, document.body.style.setProperty("--scrollbar-width", `${b}px`), document.body.style.overflow = "hidden"), isIOS && (stopTouchMoveListener = on(document, "touchmove", (e) => {
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
		scheduleCleanupIfNoNewLocks: x,
		cancelPendingCleanup: b,
		ensureInitialStyleCaptured: S
	};
}), BodyScrollLock = class {
	#id = useId();
	#initialState;
	#restoreScrollDelay = () => null;
	#countState;
	locked;
	constructor(e, b = () => null) {
		this.#initialState = e, this.#restoreScrollDelay = b, this.#countState = bodyLockStackCount.get(), this.#countState && (this.#countState.cancelPendingCleanup(), this.#countState.ensureInitialStyleCaptured(), this.#countState.lockMap.set(this.#id, this.#initialState ?? !1), this.locked = boxWith(() => this.#countState.lockMap.get(this.#id) ?? !1, (e) => this.#countState.lockMap.set(this.#id, e)), onDestroyEffect(() => {
			if (this.#countState.lockMap.delete(this.#id), isAnyLocked(this.#countState.lockMap)) return;
			let e = this.#restoreScrollDelay();
			this.#countState.scheduleCleanupIfNoNewLocks(e, () => {
				this.#countState.resetBodyStyle();
			});
		}));
	}
};
function isAnyLocked(e) {
	for (let [b, x] of e) if (x) return !0;
	return !1;
}
function Scroll_lock(e, b) {
	push(b, !0);
	let x = prop(b, "preventScroll", 3, !0), S = prop(b, "restoreScrollDelay", 3, null);
	x() && new BodyScrollLock(x(), () => S()), pop();
}
function shouldEnableFocusTrap({ forceMount: e, present: b, open: x }) {
	return (e || b) && x;
}
var root_3$11 = /* @__PURE__ */ from_html("<div><!></div>");
function Dialog_overlay(e, b) {
	let x = props_id();
	push(b, !0);
	let S = prop(b, "id", 19, () => createId(x)), C = prop(b, "forceMount", 3, !1), w = prop(b, "ref", 15, null), T = /* @__PURE__ */ rest_props(b, [
		"$$slots",
		"$$events",
		"$$legacy",
		"id",
		"forceMount",
		"child",
		"children",
		"ref"
	]), E = DialogOverlayState.create({
		id: boxWith(() => S()),
		ref: boxWith(() => w(), (e) => w(e))
	}), D = /* @__PURE__ */ user_derived(() => mergeProps(T, E.props));
	{
		let x = (e) => {
			var x = comment(), S = first_child(x), C = (e) => {
				var x = comment(), S = first_child(x);
				{
					let e = /* @__PURE__ */ user_derived(() => ({
						props: mergeProps(get$2(D)),
						...E.snippetProps
					}));
					snippet(S, () => b.child, () => get$2(e));
				}
				append(e, x);
			}, w = (e) => {
				var x = root_3$11();
				attribute_effect(x, (e) => ({ ...e }), [() => mergeProps(get$2(D))]);
				var S = child(x);
				snippet(S, () => b.children ?? noop$1, () => E.snippetProps), reset(x), append(e, x);
			};
			if_block(S, (e) => {
				b.child ? e(C) : e(w, !1);
			}), append(e, x);
		}, S = /* @__PURE__ */ user_derived(() => E.root.opts.open.current || C());
		Presence_layer(e, {
			get open() {
				return get$2(S);
			},
			get ref() {
				return E.opts.ref;
			},
			presence: x,
			$$slots: { presence: !0 }
		});
	}
	pop();
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
function clamp(e, b, x) {
	return max(e, min(b, x));
}
function evaluate(e, b) {
	return typeof e == "function" ? e(b) : e;
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
function getAlignmentSides(e, b, x) {
	x === void 0 && (x = !1);
	let S = getAlignment(e), C = getAlignmentAxis(e), w = getAxisLength(C), T = C === "x" ? S === (x ? "end" : "start") ? "right" : "left" : S === "start" ? "bottom" : "top";
	return b.reference[w] > b.floating[w] && (T = getOppositePlacement(T)), [T, getOppositePlacement(T)];
}
function getExpandedPlacements(e) {
	let b = getOppositePlacement(e);
	return [
		getOppositeAlignmentPlacement(e),
		b,
		getOppositeAlignmentPlacement(b)
	];
}
function getOppositeAlignmentPlacement(e) {
	return e.replace(/start|end/g, (e) => oppositeAlignmentMap[e]);
}
var lrPlacement = ["left", "right"], rlPlacement = ["right", "left"], tbPlacement = ["top", "bottom"], btPlacement = ["bottom", "top"];
function getSideList(e, b, x) {
	switch (e) {
		case "top":
		case "bottom": return x ? b ? rlPlacement : lrPlacement : b ? lrPlacement : rlPlacement;
		case "left":
		case "right": return b ? tbPlacement : btPlacement;
		default: return [];
	}
}
function getOppositeAxisPlacements(e, b, x, S) {
	let C = getAlignment(e), w = getSideList(getSide(e), x === "start", S);
	return C && (w = w.map((e) => e + "-" + C), b && (w = w.concat(w.map(getOppositeAlignmentPlacement)))), w;
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
	let { x: b, y: x, width: S, height: C } = e;
	return {
		width: S,
		height: C,
		top: x,
		left: b,
		right: b + S,
		bottom: x + C,
		x: b,
		y: x
	};
}
function computeCoordsFromPlacement(e, b, x) {
	let { reference: S, floating: C } = e, w = getSideAxis(b), T = getAlignmentAxis(b), E = getAxisLength(T), D = getSide(b), O = w === "y", k = S.x + S.width / 2 - C.width / 2, A = S.y + S.height / 2 - C.height / 2, j = S[E] / 2 - C[E] / 2, M;
	switch (D) {
		case "top":
			M = {
				x: k,
				y: S.y - C.height
			};
			break;
		case "bottom":
			M = {
				x: k,
				y: S.y + S.height
			};
			break;
		case "right":
			M = {
				x: S.x + S.width,
				y: A
			};
			break;
		case "left":
			M = {
				x: S.x - C.width,
				y: A
			};
			break;
		default: M = {
			x: S.x,
			y: S.y
		};
	}
	switch (getAlignment(b)) {
		case "start":
			M[T] -= j * (x && O ? -1 : 1);
			break;
		case "end":
			M[T] += j * (x && O ? -1 : 1);
			break;
	}
	return M;
}
var computePosition$1 = async (e, b, x) => {
	let { placement: S = "bottom", strategy: C = "absolute", middleware: w = [], platform: T } = x, E = w.filter(Boolean), D = await (T.isRTL == null ? void 0 : T.isRTL(b)), O = await T.getElementRects({
		reference: e,
		floating: b,
		strategy: C
	}), { x: k, y: A } = computeCoordsFromPlacement(O, S, D), j = S, M = {}, N = 0;
	for (let x = 0; x < E.length; x++) {
		let { name: w, fn: P } = E[x], { x: F, y: I, data: L, reset: R } = await P({
			x: k,
			y: A,
			initialPlacement: S,
			placement: j,
			strategy: C,
			middlewareData: M,
			rects: O,
			platform: T,
			elements: {
				reference: e,
				floating: b
			}
		});
		k = F ?? k, A = I ?? A, M = {
			...M,
			[w]: {
				...M[w],
				...L
			}
		}, R && N <= 50 && (N++, typeof R == "object" && (R.placement && (j = R.placement), R.rects && (O = R.rects === !0 ? await T.getElementRects({
			reference: e,
			floating: b,
			strategy: C
		}) : R.rects), {x: k, y: A} = computeCoordsFromPlacement(O, j, D)), x = -1);
	}
	return {
		x: k,
		y: A,
		placement: j,
		strategy: C,
		middlewareData: M
	};
};
async function detectOverflow(e, b) {
	b === void 0 && (b = {});
	let { x, y: S, platform: C, rects: w, elements: T, strategy: E } = e, { boundary: D = "clippingAncestors", rootBoundary: O = "viewport", elementContext: k = "floating", altBoundary: A = !1, padding: j = 0 } = evaluate(b, e), M = getPaddingObject(j), N = T[A ? k === "floating" ? "reference" : "floating" : k], P = rectToClientRect(await C.getClippingRect({
		element: await (C.isElement == null ? void 0 : C.isElement(N)) ?? !0 ? N : N.contextElement || await (C.getDocumentElement == null ? void 0 : C.getDocumentElement(T.floating)),
		boundary: D,
		rootBoundary: O,
		strategy: E
	})), F = k === "floating" ? {
		x,
		y: S,
		width: w.floating.width,
		height: w.floating.height
	} : w.reference, I = await (C.getOffsetParent == null ? void 0 : C.getOffsetParent(T.floating)), L = await (C.isElement == null ? void 0 : C.isElement(I)) && await (C.getScale == null ? void 0 : C.getScale(I)) || {
		x: 1,
		y: 1
	}, R = rectToClientRect(C.convertOffsetParentRelativeRectToViewportRelativeRect ? await C.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: T,
		rect: F,
		offsetParent: I,
		strategy: E
	}) : F);
	return {
		top: (P.top - R.top + M.top) / L.y,
		bottom: (R.bottom - P.bottom + M.bottom) / L.y,
		left: (P.left - R.left + M.left) / L.x,
		right: (R.right - P.right + M.right) / L.x
	};
}
var arrow$1 = (e) => ({
	name: "arrow",
	options: e,
	async fn(b) {
		let { x, y: S, placement: C, rects: w, platform: T, elements: E, middlewareData: D } = b, { element: O, padding: k = 0 } = evaluate(e, b) || {};
		if (O == null) return {};
		let A = getPaddingObject(k), j = {
			x,
			y: S
		}, M = getAlignmentAxis(C), N = getAxisLength(M), P = await T.getDimensions(O), F = M === "y", I = F ? "top" : "left", L = F ? "bottom" : "right", R = F ? "clientHeight" : "clientWidth", z = w.reference[N] + w.reference[M] - j[M] - w.floating[N], B = j[M] - w.reference[M], V = await (T.getOffsetParent == null ? void 0 : T.getOffsetParent(O)), H = V ? V[R] : 0;
		(!H || !await (T.isElement == null ? void 0 : T.isElement(V))) && (H = E.floating[R] || w.floating[N]);
		let U = z / 2 - B / 2, W = H / 2 - P[N] / 2 - 1, G = min(A[I], W), K = min(A[L], W), q = G, J = H - P[N] - K, Y = H / 2 - P[N] / 2 + U, X = clamp(q, Y, J), Z = !D.arrow && getAlignment(C) != null && Y !== X && w.reference[N] / 2 - (Y < q ? G : K) - P[N] / 2 < 0, Q = Z ? Y < q ? Y - q : Y - J : 0;
		return {
			[M]: j[M] + Q,
			data: {
				[M]: X,
				centerOffset: Y - X - Q,
				...Z && { alignmentOffset: Q }
			},
			reset: Z
		};
	}
}), flip$1 = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(b) {
			var x;
			let { placement: S, middlewareData: C, rects: w, initialPlacement: T, platform: E, elements: D } = b, { mainAxis: O = !0, crossAxis: k = !0, fallbackPlacements: A, fallbackStrategy: j = "bestFit", fallbackAxisSideDirection: M = "none", flipAlignment: N = !0,...P } = evaluate(e, b);
			if ((x = C.arrow) != null && x.alignmentOffset) return {};
			let F = getSide(S), I = getSideAxis(T), L = getSide(T) === T, R = await (E.isRTL == null ? void 0 : E.isRTL(D.floating)), z = A || (L || !N ? [getOppositePlacement(T)] : getExpandedPlacements(T)), B = M !== "none";
			!A && B && z.push(...getOppositeAxisPlacements(T, N, M, R));
			let V = [T, ...z], H = await detectOverflow(b, P), U = [], W = C.flip?.overflows || [];
			if (O && U.push(H[F]), k) {
				let e = getAlignmentSides(S, w, R);
				U.push(H[e[0]], H[e[1]]);
			}
			if (W = [...W, {
				placement: S,
				overflows: U
			}], !U.every((e) => e <= 0)) {
				let e = (C.flip?.index || 0) + 1, b = V[e];
				if (b && (!(k === "alignment" && I !== getSideAxis(b)) || W.every((e) => getSideAxis(e.placement) === I ? e.overflows[0] > 0 : !0))) return {
					data: {
						index: e,
						overflows: W
					},
					reset: { placement: b }
				};
				let x = W.filter((e) => e.overflows[0] <= 0).sort((e, b) => e.overflows[1] - b.overflows[1])[0]?.placement;
				if (!x) switch (j) {
					case "bestFit": {
						let e = W.filter((e) => {
							if (B) {
								let b = getSideAxis(e.placement);
								return b === I || b === "y";
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, b) => e + b, 0)]).sort((e, b) => e[1] - b[1])[0]?.[0];
						e && (x = e);
						break;
					}
					case "initialPlacement":
						x = T;
						break;
				}
				if (S !== x) return { reset: { placement: x } };
			}
			return {};
		}
	};
};
function getSideOffsets(e, b) {
	return {
		top: e.top - b.height,
		right: e.right - b.width,
		bottom: e.bottom - b.height,
		left: e.left - b.width
	};
}
function isAnySideFullyClipped(e) {
	return sides.some((b) => e[b] >= 0);
}
var hide$1 = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(b) {
			let { rects: x } = b, { strategy: S = "referenceHidden",...C } = evaluate(e, b);
			switch (S) {
				case "referenceHidden": {
					let e = await detectOverflow(b, {
						...C,
						elementContext: "reference"
					}), S = getSideOffsets(e, x.reference);
					return { data: {
						referenceHiddenOffsets: S,
						referenceHidden: isAnySideFullyClipped(S)
					} };
				}
				case "escaped": {
					let e = await detectOverflow(b, {
						...C,
						altBoundary: !0
					}), S = getSideOffsets(e, x.floating);
					return { data: {
						escapedOffsets: S,
						escaped: isAnySideFullyClipped(S)
					} };
				}
				default: return {};
			}
		}
	};
}, originSides = /* @__PURE__ */ new Set(["left", "top"]);
async function convertValueToCoords(e, b) {
	let { placement: x, platform: S, elements: C } = e, w = await (S.isRTL == null ? void 0 : S.isRTL(C.floating)), T = getSide(x), E = getAlignment(x), D = getSideAxis(x) === "y", O = originSides.has(T) ? -1 : 1, k = w && D ? -1 : 1, A = evaluate(b, e), { mainAxis: j, crossAxis: M, alignmentAxis: N } = typeof A == "number" ? {
		mainAxis: A,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: A.mainAxis || 0,
		crossAxis: A.crossAxis || 0,
		alignmentAxis: A.alignmentAxis
	};
	return E && typeof N == "number" && (M = E === "end" ? N * -1 : N), D ? {
		x: M * k,
		y: j * O
	} : {
		x: j * O,
		y: M * k
	};
}
var offset$1 = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(b) {
			var x;
			let { x: S, y: C, placement: w, middlewareData: T } = b, E = await convertValueToCoords(b, e);
			return w === T.offset?.placement && (x = T.arrow) != null && x.alignmentOffset ? {} : {
				x: S + E.x,
				y: C + E.y,
				data: {
					...E,
					placement: w
				}
			};
		}
	};
}, shift$1 = function(e) {
	return e === void 0 && (e = {}), {
		name: "shift",
		options: e,
		async fn(b) {
			let { x, y: S, placement: C } = b, { mainAxis: w = !0, crossAxis: T = !1, limiter: E = { fn: (e) => {
				let { x: b, y: x } = e;
				return {
					x: b,
					y: x
				};
			} },...D } = evaluate(e, b), O = {
				x,
				y: S
			}, k = await detectOverflow(b, D), A = getSideAxis(getSide(C)), j = getOppositeAxis(A), M = O[j], N = O[A];
			if (w) {
				let e = j === "y" ? "top" : "left", b = j === "y" ? "bottom" : "right", x = M + k[e], S = M - k[b];
				M = clamp(x, M, S);
			}
			if (T) {
				let e = A === "y" ? "top" : "left", b = A === "y" ? "bottom" : "right", x = N + k[e], S = N - k[b];
				N = clamp(x, N, S);
			}
			let P = E.fn({
				...b,
				[j]: M,
				[A]: N
			});
			return {
				...P,
				data: {
					x: P.x - x,
					y: P.y - S,
					enabled: {
						[j]: w,
						[A]: T
					}
				}
			};
		}
	};
}, limitShift$1 = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(b) {
			let { x, y: S, placement: C, rects: w, middlewareData: T } = b, { offset: E = 0, mainAxis: D = !0, crossAxis: O = !0 } = evaluate(e, b), k = {
				x,
				y: S
			}, A = getSideAxis(C), j = getOppositeAxis(A), M = k[j], N = k[A], P = evaluate(E, b), F = typeof P == "number" ? {
				mainAxis: P,
				crossAxis: 0
			} : {
				mainAxis: 0,
				crossAxis: 0,
				...P
			};
			if (D) {
				let e = j === "y" ? "height" : "width", b = w.reference[j] - w.floating[e] + F.mainAxis, x = w.reference[j] + w.reference[e] - F.mainAxis;
				M < b ? M = b : M > x && (M = x);
			}
			if (O) {
				let e = j === "y" ? "width" : "height", b = originSides.has(getSide(C)), x = w.reference[A] - w.floating[e] + (b && T.offset?.[A] || 0) + (b ? 0 : F.crossAxis), S = w.reference[A] + w.reference[e] + (b ? 0 : T.offset?.[A] || 0) - (b ? F.crossAxis : 0);
				N < x ? N = x : N > S && (N = S);
			}
			return {
				[j]: M,
				[A]: N
			};
		}
	};
}, size$1 = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(b) {
			var x, S;
			let { placement: C, rects: w, platform: T, elements: E } = b, { apply: D = () => {},...O } = evaluate(e, b), k = await detectOverflow(b, O), A = getSide(C), j = getAlignment(C), M = getSideAxis(C) === "y", { width: N, height: P } = w.floating, F, I;
			A === "top" || A === "bottom" ? (F = A, I = j === (await (T.isRTL == null ? void 0 : T.isRTL(E.floating)) ? "start" : "end") ? "left" : "right") : (I = A, F = j === "end" ? "top" : "bottom");
			let L = P - k.top - k.bottom, R = N - k.left - k.right, z = min(P - k[F], L), B = min(N - k[I], R), V = !b.middlewareData.shift, H = z, U = B;
			if ((x = b.middlewareData.shift) != null && x.enabled.x && (U = R), (S = b.middlewareData.shift) != null && S.enabled.y && (H = L), V && !j) {
				let e = max(k.left, 0), b = max(k.right, 0), x = max(k.top, 0), S = max(k.bottom, 0);
				M ? U = N - 2 * (e !== 0 || b !== 0 ? e + b : max(k.left, k.right)) : H = P - 2 * (x !== 0 || S !== 0 ? x + S : max(k.top, k.bottom));
			}
			await D({
				...b,
				availableWidth: U,
				availableHeight: H
			});
			let W = await T.getDimensions(E.floating);
			return N !== W.width || P !== W.height ? { reset: { rects: !0 } } : {};
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
	var b;
	return (e == null || (b = e.ownerDocument) == null ? void 0 : b.defaultView) || window;
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
	let { overflow: b, overflowX: x, overflowY: S, display: C } = getComputedStyle$1(e);
	return /auto|scroll|overlay|hidden|clip/.test(b + S + x) && !invalidOverflowDisplayValues.has(C);
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
	return topLayerSelectors.some((b) => {
		try {
			return e.matches(b);
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
	let b = isWebKit(), x = isElement$1(e) ? getComputedStyle$1(e) : e;
	return transformProperties.some((e) => x[e] ? x[e] !== "none" : !1) || (x.containerType ? x.containerType !== "normal" : !1) || !b && (x.backdropFilter ? x.backdropFilter !== "none" : !1) || !b && (x.filter ? x.filter !== "none" : !1) || willChangeValues.some((e) => (x.willChange || "").includes(e)) || containValues.some((e) => (x.contain || "").includes(e));
}
function getContainingBlock(e) {
	let b = getParentNode(e);
	for (; isHTMLElement$1(b) && !isLastTraversableNode(b);) {
		if (isContainingBlock(b)) return b;
		if (isTopLayer(b)) return null;
		b = getParentNode(b);
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
	let b = e.assignedSlot || e.parentNode || isShadowRoot(e) && e.host || getDocumentElement(e);
	return isShadowRoot(b) ? b.host : b;
}
function getNearestOverflowAncestor(e) {
	let b = getParentNode(e);
	return isLastTraversableNode(b) ? e.ownerDocument ? e.ownerDocument.body : e.body : isHTMLElement$1(b) && isOverflowElement(b) ? b : getNearestOverflowAncestor(b);
}
function getOverflowAncestors(e, b, x) {
	b === void 0 && (b = []), x === void 0 && (x = !0);
	let S = getNearestOverflowAncestor(e), C = S === e.ownerDocument?.body, w = getWindow$1(S);
	if (C) {
		let e = getFrameElement(w);
		return b.concat(w, w.visualViewport || [], isOverflowElement(S) ? S : [], e && x ? getOverflowAncestors(e) : []);
	}
	return b.concat(S, getOverflowAncestors(S, [], x));
}
function getFrameElement(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function getCssDimensions(e) {
	let b = getComputedStyle$1(e), x = parseFloat(b.width) || 0, S = parseFloat(b.height) || 0, C = isHTMLElement$1(e), w = C ? e.offsetWidth : x, T = C ? e.offsetHeight : S, E = round(x) !== w || round(S) !== T;
	return E && (x = w, S = T), {
		width: x,
		height: S,
		$: E
	};
}
function unwrapElement(e) {
	return isElement$1(e) ? e : e.contextElement;
}
function getScale(e) {
	let b = unwrapElement(e);
	if (!isHTMLElement$1(b)) return createCoords(1);
	let x = b.getBoundingClientRect(), { width: S, height: C, $: w } = getCssDimensions(b), T = (w ? round(x.width) : x.width) / S, E = (w ? round(x.height) : x.height) / C;
	return (!T || !Number.isFinite(T)) && (T = 1), (!E || !Number.isFinite(E)) && (E = 1), {
		x: T,
		y: E
	};
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(e) {
	let b = getWindow$1(e);
	return !isWebKit() || !b.visualViewport ? noOffsets : {
		x: b.visualViewport.offsetLeft,
		y: b.visualViewport.offsetTop
	};
}
function shouldAddVisualOffsets(e, b, x) {
	return b === void 0 && (b = !1), !x || b && x !== getWindow$1(e) ? !1 : b;
}
function getBoundingClientRect(e, b, x, S) {
	b === void 0 && (b = !1), x === void 0 && (x = !1);
	let C = e.getBoundingClientRect(), w = unwrapElement(e), T = createCoords(1);
	b && (S ? isElement$1(S) && (T = getScale(S)) : T = getScale(e));
	let E = shouldAddVisualOffsets(w, x, S) ? getVisualOffsets(w) : createCoords(0), D = (C.left + E.x) / T.x, O = (C.top + E.y) / T.y, k = C.width / T.x, A = C.height / T.y;
	if (w) {
		let e = getWindow$1(w), b = S && isElement$1(S) ? getWindow$1(S) : S, x = e, C = getFrameElement(x);
		for (; C && S && b !== x;) {
			let e = getScale(C), b = C.getBoundingClientRect(), S = getComputedStyle$1(C), w = b.left + (C.clientLeft + parseFloat(S.paddingLeft)) * e.x, T = b.top + (C.clientTop + parseFloat(S.paddingTop)) * e.y;
			D *= e.x, O *= e.y, k *= e.x, A *= e.y, D += w, O += T, x = getWindow$1(C), C = getFrameElement(x);
		}
	}
	return rectToClientRect({
		width: k,
		height: A,
		x: D,
		y: O
	});
}
function getWindowScrollBarX(e, b) {
	let x = getNodeScroll(e).scrollLeft;
	return b ? b.left + x : getBoundingClientRect(getDocumentElement(e)).left + x;
}
function getHTMLOffset(e, b) {
	let x = e.getBoundingClientRect(), S = x.left + b.scrollLeft - getWindowScrollBarX(e, x), C = x.top + b.scrollTop;
	return {
		x: S,
		y: C
	};
}
function convertOffsetParentRelativeRectToViewportRelativeRect(e) {
	let { elements: b, rect: x, offsetParent: S, strategy: C } = e, w = C === "fixed", T = getDocumentElement(S), E = b ? isTopLayer(b.floating) : !1;
	if (S === T || E && w) return x;
	let D = {
		scrollLeft: 0,
		scrollTop: 0
	}, O = createCoords(1), k = createCoords(0), A = isHTMLElement$1(S);
	if ((A || !A && !w) && ((getNodeName(S) !== "body" || isOverflowElement(T)) && (D = getNodeScroll(S)), isHTMLElement$1(S))) {
		let e = getBoundingClientRect(S);
		O = getScale(S), k.x = e.x + S.clientLeft, k.y = e.y + S.clientTop;
	}
	let j = T && !A && !w ? getHTMLOffset(T, D) : createCoords(0);
	return {
		width: x.width * O.x,
		height: x.height * O.y,
		x: x.x * O.x - D.scrollLeft * O.x + k.x + j.x,
		y: x.y * O.y - D.scrollTop * O.y + k.y + j.y
	};
}
function getClientRects(e) {
	return Array.from(e.getClientRects());
}
function getDocumentRect(e) {
	let b = getDocumentElement(e), x = getNodeScroll(e), S = e.ownerDocument.body, C = max(b.scrollWidth, b.clientWidth, S.scrollWidth, S.clientWidth), w = max(b.scrollHeight, b.clientHeight, S.scrollHeight, S.clientHeight), T = -x.scrollLeft + getWindowScrollBarX(e), E = -x.scrollTop;
	return getComputedStyle$1(S).direction === "rtl" && (T += max(b.clientWidth, S.clientWidth) - C), {
		width: C,
		height: w,
		x: T,
		y: E
	};
}
var SCROLLBAR_MAX = 25;
function getViewportRect(e, b) {
	let x = getWindow$1(e), S = getDocumentElement(e), C = x.visualViewport, w = S.clientWidth, T = S.clientHeight, E = 0, D = 0;
	if (C) {
		w = C.width, T = C.height;
		let e = isWebKit();
		(!e || e && b === "fixed") && (E = C.offsetLeft, D = C.offsetTop);
	}
	let O = getWindowScrollBarX(S);
	if (O <= 0) {
		let e = S.ownerDocument, b = e.body, x = getComputedStyle(b), C = e.compatMode === "CSS1Compat" && parseFloat(x.marginLeft) + parseFloat(x.marginRight) || 0, T = Math.abs(S.clientWidth - b.clientWidth - C);
		T <= SCROLLBAR_MAX && (w -= T);
	} else O <= SCROLLBAR_MAX && (w += O);
	return {
		width: w,
		height: T,
		x: E,
		y: D
	};
}
var absoluteOrFixed = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function getInnerBoundingClientRect(e, b) {
	let x = getBoundingClientRect(e, !0, b === "fixed"), S = x.top + e.clientTop, C = x.left + e.clientLeft, w = isHTMLElement$1(e) ? getScale(e) : createCoords(1), T = e.clientWidth * w.x, E = e.clientHeight * w.y, D = C * w.x, O = S * w.y;
	return {
		width: T,
		height: E,
		x: D,
		y: O
	};
}
function getClientRectFromClippingAncestor(e, b, x) {
	let S;
	if (b === "viewport") S = getViewportRect(e, x);
	else if (b === "document") S = getDocumentRect(getDocumentElement(e));
	else if (isElement$1(b)) S = getInnerBoundingClientRect(b, x);
	else {
		let x = getVisualOffsets(e);
		S = {
			x: b.x - x.x,
			y: b.y - x.y,
			width: b.width,
			height: b.height
		};
	}
	return rectToClientRect(S);
}
function hasFixedPositionAncestor(e, b) {
	let x = getParentNode(e);
	return x === b || !isElement$1(x) || isLastTraversableNode(x) ? !1 : getComputedStyle$1(x).position === "fixed" || hasFixedPositionAncestor(x, b);
}
function getClippingElementAncestors(e, b) {
	let x = b.get(e);
	if (x) return x;
	let S = getOverflowAncestors(e, [], !1).filter((e) => isElement$1(e) && getNodeName(e) !== "body"), C = null, w = getComputedStyle$1(e).position === "fixed", T = w ? getParentNode(e) : e;
	for (; isElement$1(T) && !isLastTraversableNode(T);) {
		let b = getComputedStyle$1(T), x = isContainingBlock(T);
		!x && b.position === "fixed" && (C = null), (w ? !x && !C : !x && b.position === "static" && C && absoluteOrFixed.has(C.position) || isOverflowElement(T) && !x && hasFixedPositionAncestor(e, T)) ? S = S.filter((e) => e !== T) : C = b, T = getParentNode(T);
	}
	return b.set(e, S), S;
}
function getClippingRect(e) {
	let { element: b, boundary: x, rootBoundary: S, strategy: C } = e, w = [...x === "clippingAncestors" ? isTopLayer(b) ? [] : getClippingElementAncestors(b, this._c) : [].concat(x), S], T = w[0], E = w.reduce((e, x) => {
		let S = getClientRectFromClippingAncestor(b, x, C);
		return e.top = max(S.top, e.top), e.right = min(S.right, e.right), e.bottom = min(S.bottom, e.bottom), e.left = max(S.left, e.left), e;
	}, getClientRectFromClippingAncestor(b, T, C));
	return {
		width: E.right - E.left,
		height: E.bottom - E.top,
		x: E.left,
		y: E.top
	};
}
function getDimensions(e) {
	let { width: b, height: x } = getCssDimensions(e);
	return {
		width: b,
		height: x
	};
}
function getRectRelativeToOffsetParent(e, b, x) {
	let S = isHTMLElement$1(b), C = getDocumentElement(b), w = x === "fixed", T = getBoundingClientRect(e, !0, w, b), E = {
		scrollLeft: 0,
		scrollTop: 0
	}, D = createCoords(0);
	function O() {
		D.x = getWindowScrollBarX(C);
	}
	if (S || !S && !w) if ((getNodeName(b) !== "body" || isOverflowElement(C)) && (E = getNodeScroll(b)), S) {
		let e = getBoundingClientRect(b, !0, w, b);
		D.x = e.x + b.clientLeft, D.y = e.y + b.clientTop;
	} else C && O();
	w && !S && C && O();
	let k = C && !S && !w ? getHTMLOffset(C, E) : createCoords(0), A = T.left + E.scrollLeft - D.x - k.x, j = T.top + E.scrollTop - D.y - k.y;
	return {
		x: A,
		y: j,
		width: T.width,
		height: T.height
	};
}
function isStaticPositioned(e) {
	return getComputedStyle$1(e).position === "static";
}
function getTrueOffsetParent(e, b) {
	if (!isHTMLElement$1(e) || getComputedStyle$1(e).position === "fixed") return null;
	if (b) return b(e);
	let x = e.offsetParent;
	return getDocumentElement(e) === x && (x = x.ownerDocument.body), x;
}
function getOffsetParent(e, b) {
	let x = getWindow$1(e);
	if (isTopLayer(e)) return x;
	if (!isHTMLElement$1(e)) {
		let b = getParentNode(e);
		for (; b && !isLastTraversableNode(b);) {
			if (isElement$1(b) && !isStaticPositioned(b)) return b;
			b = getParentNode(b);
		}
		return x;
	}
	let S = getTrueOffsetParent(e, b);
	for (; S && isTableElement(S) && isStaticPositioned(S);) S = getTrueOffsetParent(S, b);
	return S && isLastTraversableNode(S) && isStaticPositioned(S) && !isContainingBlock(S) ? x : S || getContainingBlock(e) || x;
}
var getElementRects = async function(e) {
	let b = this.getOffsetParent || getOffsetParent, x = this.getDimensions, S = await x(e.floating);
	return {
		reference: getRectRelativeToOffsetParent(e.reference, await b(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: S.width,
			height: S.height
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
function rectsAreEqual(e, b) {
	return e.x === b.x && e.y === b.y && e.width === b.width && e.height === b.height;
}
function observeMove(e, b) {
	let x = null, S, C = getDocumentElement(e);
	function w() {
		var e;
		clearTimeout(S), (e = x) == null || e.disconnect(), x = null;
	}
	function T(E, D) {
		E === void 0 && (E = !1), D === void 0 && (D = 1), w();
		let O = e.getBoundingClientRect(), { left: k, top: A, width: j, height: M } = O;
		if (E || b(), !j || !M) return;
		let N = floor(A), P = floor(C.clientWidth - (k + j)), F = floor(C.clientHeight - (A + M)), I = floor(k), L = {
			rootMargin: -N + "px " + -P + "px " + -F + "px " + -I + "px",
			threshold: max(0, min(1, D)) || 1
		}, R = !0;
		function z(b) {
			let x = b[0].intersectionRatio;
			if (x !== D) {
				if (!R) return T();
				x ? T(!1, x) : S = setTimeout(() => {
					T(!1, 1e-7);
				}, 1e3);
			}
			x === 1 && !rectsAreEqual(O, e.getBoundingClientRect()) && T(), R = !1;
		}
		try {
			x = new IntersectionObserver(z, {
				...L,
				root: C.ownerDocument
			});
		} catch {
			x = new IntersectionObserver(z, L);
		}
		x.observe(e);
	}
	return T(!0), w;
}
function autoUpdate(e, b, x, S) {
	S === void 0 && (S = {});
	let { ancestorScroll: C = !0, ancestorResize: w = !0, elementResize: T = typeof ResizeObserver == "function", layoutShift: E = typeof IntersectionObserver == "function", animationFrame: D = !1 } = S, O = unwrapElement(e), k = C || w ? [...O ? getOverflowAncestors(O) : [], ...getOverflowAncestors(b)] : [];
	k.forEach((e) => {
		C && e.addEventListener("scroll", x, { passive: !0 }), w && e.addEventListener("resize", x);
	});
	let A = O && E ? observeMove(O, x) : null, j = -1, M = null;
	T && (M = new ResizeObserver((e) => {
		let [S] = e;
		S && S.target === O && M && (M.unobserve(b), cancelAnimationFrame(j), j = requestAnimationFrame(() => {
			var e;
			(e = M) == null || e.observe(b);
		})), x();
	}), O && !D && M.observe(O), M.observe(b));
	let N, P = D ? getBoundingClientRect(e) : null;
	D && F();
	function F() {
		let b = getBoundingClientRect(e);
		P && !rectsAreEqual(P, b) && x(), P = b, N = requestAnimationFrame(F);
	}
	return x(), () => {
		var e;
		k.forEach((e) => {
			C && e.removeEventListener("scroll", x), w && e.removeEventListener("resize", x);
		}), A?.(), (e = M) == null || e.disconnect(), M = null, D && cancelAnimationFrame(N);
	};
}
var offset = offset$1, shift = shift$1, flip = flip$1, size = size$1, hide = hide$1, arrow = arrow$1, limitShift = limitShift$1, computePosition = (e, b, x) => {
	let S = /* @__PURE__ */ new Map(), C = {
		platform,
		...x
	}, w = {
		...C.platform,
		_c: S
	};
	return computePosition$1(e, b, {
		...C,
		platform: w
	});
};
function get(e) {
	return typeof e == "function" ? e() : e;
}
function getDPR(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function roundByDPR(e, b) {
	let x = getDPR(e);
	return Math.round(b * x) / x;
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
	let b = e.whileElementsMounted, x = /* @__PURE__ */ user_derived(() => get(e.open) ?? !0), S = /* @__PURE__ */ user_derived(() => get(e.middleware)), C = /* @__PURE__ */ user_derived(() => get(e.transform) ?? !0), w = /* @__PURE__ */ user_derived(() => get(e.placement) ?? "bottom"), T = /* @__PURE__ */ user_derived(() => get(e.strategy) ?? "absolute"), E = /* @__PURE__ */ user_derived(() => get(e.sideOffset) ?? 0), D = /* @__PURE__ */ user_derived(() => get(e.alignOffset) ?? 0), O = e.reference, k = /* @__PURE__ */ state(0), A = /* @__PURE__ */ state(0), j = simpleBox(null), M = /* @__PURE__ */ state(proxy(get$2(T))), N = /* @__PURE__ */ state(proxy(get$2(w))), P = /* @__PURE__ */ state(proxy({})), F = /* @__PURE__ */ state(!1), I = /* @__PURE__ */ user_derived(() => {
		let e = j.current ? roundByDPR(j.current, get$2(k)) : get$2(k), b = j.current ? roundByDPR(j.current, get$2(A)) : get$2(A);
		return get$2(C) ? {
			position: get$2(M),
			left: "0",
			top: "0",
			transform: `translate(${e}px, ${b}px)`,
			...j.current && getDPR(j.current) >= 1.5 && { willChange: "transform" }
		} : {
			position: get$2(M),
			left: `${e}px`,
			top: `${b}px`
		};
	}), L;
	function R() {
		O.current === null || j.current === null || computePosition(O.current, j.current, {
			middleware: get$2(S),
			placement: get$2(w),
			strategy: get$2(T)
		}).then((e) => {
			if (!get$2(x) && get$2(k) !== 0 && get$2(A) !== 0) {
				let b = Math.max(Math.abs(get$2(E)), Math.abs(get$2(D)), 15);
				if (e.x <= b && e.y <= b) return;
			}
			set(k, e.x, !0), set(A, e.y, !0), set(M, e.strategy, !0), set(N, e.placement, !0), set(P, e.middlewareData, !0), set(F, !0);
		});
	}
	function z() {
		typeof L == "function" && (L(), L = void 0);
	}
	function B() {
		if (z(), b === void 0) {
			R();
			return;
		}
		O.current === null || j.current === null || (L = b(O.current, j.current, R));
	}
	function V() {
		get$2(x) || set(F, !1);
	}
	return user_effect(R), user_effect(B), user_effect(V), user_effect(() => z), {
		floating: j,
		reference: O,
		get strategy() {
			return get$2(M);
		},
		get placement() {
			return get$2(N);
		},
		get middlewareData() {
			return get$2(P);
		},
		get isPositioned() {
			return get$2(F);
		},
		get floatingStyles() {
			return get$2(I);
		},
		get update() {
			return R;
		}
	};
}
var OPPOSITE_SIDE = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, FloatingRootContext = new Context("Floating.Root"), FloatingContentContext = new Context("Floating.Content"), FloatingTooltipRootContext = new Context("Floating.Root"), FloatingRootState = class e {
	static create(b = !1) {
		return b ? FloatingTooltipRootContext.set(new e()) : FloatingRootContext.set(new e());
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
	static create(b, x = !1) {
		return x ? FloatingContentContext.set(new e(b, FloatingTooltipRootContext.get())) : FloatingContentContext.set(new e(b, FloatingRootContext.get()));
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
			apply: ({ rects: e, availableWidth: b, availableHeight: x }) => {
				let { width: S, height: C } = e.reference;
				set(this.#availableWidth, b, !0), set(this.#availableHeight, x, !0), set(this.#anchorWidth, S, !0), set(this.#anchorHeight, C, !0);
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
	constructor(e, b) {
		this.opts = e, this.root = b, e.customAnchor && (this.root.customAnchorNode.current = e.customAnchor.current), watch(() => e.customAnchor.current, (e) => {
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
	static create(b, x = !1) {
		return x ? new e(b, FloatingTooltipRootContext.get()) : new e(b, FloatingRootContext.get());
	}
	opts;
	root;
	constructor(e, b) {
		this.opts = e, this.root = b, e.virtualEl && e.virtualEl.current ? b.triggerNode = boxFrom(e.virtualEl.current) : b.triggerNode = e.ref;
	}
};
function transformOrigin(e) {
	return {
		name: "transformOrigin",
		options: e,
		fn(b) {
			let { placement: x, rects: S, middlewareData: C } = b, w = C.arrow?.centerOffset !== 0, T = w ? 0 : e.arrowWidth, E = w ? 0 : e.arrowHeight, [D, O] = getSideAndAlignFromPlacement(x), k = {
				start: "0%",
				center: "50%",
				end: "100%"
			}[O], A = (C.arrow?.x ?? 0) + T / 2, j = (C.arrow?.y ?? 0) + E / 2, M = "", N = "";
			return D === "bottom" ? (M = w ? k : `${A}px`, N = `${-E}px`) : D === "top" ? (M = w ? k : `${A}px`, N = `${S.floating.height + E}px`) : D === "right" ? (M = `${-E}px`, N = w ? k : `${j}px`) : D === "left" && (M = `${S.floating.width + E}px`, N = w ? k : `${j}px`), { data: {
				x: M,
				y: N
			} };
		}
	};
}
function getSideAndAlignFromPlacement(e) {
	let [b, x = "center"] = e.split("-");
	return [b, x];
}
function getSideFromPlacement(e) {
	return getSideAndAlignFromPlacement(e)[0];
}
function getAlignFromPlacement(e) {
	return getSideAndAlignFromPlacement(e)[1];
}
function Floating_layer(e, b) {
	push(b, !0);
	let x = prop(b, "tooltip", 3, !1);
	FloatingRootState.create(x());
	var S = comment(), C = first_child(S);
	snippet(C, () => b.children ?? noop$1), append(e, S), pop();
}
var defaultOptions = {
	afterMs: 1e4,
	onChange: noop
};
function boxAutoReset(e, b) {
	let { afterMs: x, onChange: S, getWindow: C } = {
		...defaultOptions,
		...b
	}, w = null, T = /* @__PURE__ */ state(proxy(e));
	function E() {
		return C().setTimeout(() => {
			set(T, e, !0), S?.(e);
		}, x);
	}
	return user_effect(() => () => {
		w && C().clearTimeout(w);
	}), boxWith(() => get$2(T), (e) => {
		set(T, e, !0), S?.(e), w && C().clearTimeout(w), w = E();
	});
}
function Floating_layer_anchor(e, b) {
	push(b, !0);
	let x = prop(b, "tooltip", 3, !1);
	FloatingAnchorState.create({
		id: boxWith(() => b.id),
		virtualEl: boxWith(() => b.virtualEl),
		ref: b.ref
	}, x());
	var S = comment(), C = first_child(S);
	snippet(C, () => b.children ?? noop$1), append(e, S), pop();
}
function Floating_layer_content(e, b) {
	push(b, !0);
	let x = prop(b, "side", 3, "bottom"), S = prop(b, "sideOffset", 3, 0), C = prop(b, "align", 3, "center"), w = prop(b, "alignOffset", 3, 0), T = prop(b, "arrowPadding", 3, 0), E = prop(b, "avoidCollisions", 3, !0), D = prop(b, "collisionBoundary", 19, () => []), O = prop(b, "collisionPadding", 3, 0), k = prop(b, "hideWhenDetached", 3, !1), A = prop(b, "onPlaced", 3, () => {}), j = prop(b, "sticky", 3, "partial"), M = prop(b, "updatePositionStrategy", 3, "optimized"), N = prop(b, "strategy", 3, "fixed"), P = prop(b, "dir", 3, "ltr"), F = prop(b, "style", 19, () => ({})), I = prop(b, "wrapperId", 19, useId), L = prop(b, "customAnchor", 3, null), R = prop(b, "tooltip", 3, !1), B = FloatingContentState.create({
		side: boxWith(() => x()),
		sideOffset: boxWith(() => S()),
		align: boxWith(() => C()),
		alignOffset: boxWith(() => w()),
		id: boxWith(() => b.id),
		arrowPadding: boxWith(() => T()),
		avoidCollisions: boxWith(() => E()),
		collisionBoundary: boxWith(() => D()),
		collisionPadding: boxWith(() => O()),
		hideWhenDetached: boxWith(() => k()),
		onPlaced: boxWith(() => A()),
		sticky: boxWith(() => j()),
		updatePositionStrategy: boxWith(() => M()),
		strategy: boxWith(() => N()),
		dir: boxWith(() => P()),
		style: boxWith(() => F()),
		enabled: boxWith(() => b.enabled),
		wrapperId: boxWith(() => I()),
		customAnchor: boxWith(() => L())
	}, R()), V = /* @__PURE__ */ user_derived(() => mergeProps(B.wrapperProps, { style: { pointerEvents: "auto" } }));
	var H = comment(), U = first_child(H);
	snippet(U, () => b.content ?? noop$1, () => ({
		props: B.props,
		wrapperProps: get$2(V)
	})), append(e, H), pop();
}
function Floating_layer_content_static(e, b) {
	push(b, !0), onMount(() => {
		b.onPlaced?.();
	});
	var x = comment(), S = first_child(x);
	snippet(S, () => b.content ?? noop$1, () => ({
		props: {},
		wrapperProps: {}
	})), append(e, x), pop();
}
function Popper_content(e, b) {
	let x = prop(b, "isStatic", 3, !1), S = /* @__PURE__ */ rest_props(b, [
		"$$slots",
		"$$events",
		"$$legacy",
		"content",
		"isStatic",
		"onPlaced"
	]);
	var C = comment(), w = first_child(C), T = (e) => {
		Floating_layer_content_static(e, {
			get content() {
				return b.content;
			},
			get onPlaced() {
				return b.onPlaced;
			}
		});
	}, E = (e) => {
		Floating_layer_content(e, spread_props({
			get content() {
				return b.content;
			},
			get onPlaced() {
				return b.onPlaced;
			}
		}, () => S));
	};
	if_block(w, (e) => {
		x() ? e(T) : e(E, !1);
	}), append(e, C);
}
var root_1$12 = /* @__PURE__ */ from_html("<!> <!>", 1);
function Popper_layer_inner(e, b) {
	push(b, !0);
	let x = prop(b, "interactOutsideBehavior", 3, "close"), S = prop(b, "trapFocus", 3, !0), C = prop(b, "isValidEvent", 3, () => !1), w = prop(b, "customAnchor", 3, null), T = prop(b, "isStatic", 3, !1), E = prop(b, "tooltip", 3, !1), D = /* @__PURE__ */ rest_props(b, /* @__PURE__ */ "$$slots.$$events.$$legacy.popper.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.enabled.ref.tooltip".split("."));
	Popper_content(e, {
		get isStatic() {
			return T();
		},
		get id() {
			return b.id;
		},
		get side() {
			return b.side;
		},
		get sideOffset() {
			return b.sideOffset;
		},
		get align() {
			return b.align;
		},
		get alignOffset() {
			return b.alignOffset;
		},
		get arrowPadding() {
			return b.arrowPadding;
		},
		get avoidCollisions() {
			return b.avoidCollisions;
		},
		get collisionBoundary() {
			return b.collisionBoundary;
		},
		get collisionPadding() {
			return b.collisionPadding;
		},
		get sticky() {
			return b.sticky;
		},
		get hideWhenDetached() {
			return b.hideWhenDetached;
		},
		get updatePositionStrategy() {
			return b.updatePositionStrategy;
		},
		get strategy() {
			return b.strategy;
		},
		get dir() {
			return b.dir;
		},
		get wrapperId() {
			return b.wrapperId;
		},
		get style() {
			return b.style;
		},
		get onPlaced() {
			return b.onPlaced;
		},
		get customAnchor() {
			return w();
		},
		get enabled() {
			return b.enabled;
		},
		get tooltip() {
			return E();
		},
		content: (e, w) => {
			let T = () => w?.().props, E = () => w?.().wrapperProps;
			var O = root_1$12(), k = first_child(O), A = (e) => {
				Scroll_lock(e, { get preventScroll() {
					return b.preventScroll;
				} });
			}, j = (e) => {
				var x = comment(), S = first_child(x), C = (e) => {
					Scroll_lock(e, { get preventScroll() {
						return b.preventScroll;
					} });
				};
				if_block(S, (e) => {
					b.forceMount || e(C);
				}, !0), append(e, x);
			};
			if_block(k, (e) => {
				b.forceMount && b.enabled ? e(A) : e(j, !1);
			});
			var M = sibling(k, 2);
			Focus_scope(M, {
				get onOpenAutoFocus() {
					return b.onOpenAutoFocus;
				},
				get onCloseAutoFocus() {
					return b.onCloseAutoFocus;
				},
				get loop() {
					return b.loop;
				},
				get enabled() {
					return b.enabled;
				},
				get trapFocus() {
					return S();
				},
				get forceMount() {
					return b.forceMount;
				},
				get ref() {
					return b.ref;
				},
				focusScope: (e, S) => {
					let w = () => S?.().props;
					Escape_layer(e, {
						get onEscapeKeydown() {
							return b.onEscapeKeydown;
						},
						get escapeKeydownBehavior() {
							return b.escapeKeydownBehavior;
						},
						get enabled() {
							return b.enabled;
						},
						get ref() {
							return b.ref;
						},
						children: (e, S) => {
							Dismissible_layer(e, {
								get id() {
									return b.id;
								},
								get onInteractOutside() {
									return b.onInteractOutside;
								},
								get onFocusOutside() {
									return b.onFocusOutside;
								},
								get interactOutsideBehavior() {
									return x();
								},
								get isValidEvent() {
									return C();
								},
								get enabled() {
									return b.enabled;
								},
								get ref() {
									return b.ref;
								},
								children: (e, x) => {
									let S = () => x?.().props;
									Text_selection_layer(e, {
										get id() {
											return b.id;
										},
										get preventOverflowTextSelection() {
											return b.preventOverflowTextSelection;
										},
										get onPointerDown() {
											return b.onPointerDown;
										},
										get onPointerUp() {
											return b.onPointerUp;
										},
										get enabled() {
											return b.enabled;
										},
										get ref() {
											return b.ref;
										},
										children: (e, x) => {
											var C = comment(), O = first_child(C);
											{
												let e = /* @__PURE__ */ user_derived(() => ({
													props: mergeProps(D, T(), S(), w(), { style: { pointerEvents: "auto" } }),
													wrapperProps: E()
												}));
												snippet(O, () => b.popper ?? noop$1, () => get$2(e));
											}
											append(e, C);
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
			}), append(e, O);
		},
		$$slots: { content: !0 }
	}), pop();
}
function Popper_layer(e, b) {
	let x = prop(b, "interactOutsideBehavior", 3, "close"), S = prop(b, "trapFocus", 3, !0), C = prop(b, "isValidEvent", 3, () => !1), w = prop(b, "customAnchor", 3, null), T = prop(b, "isStatic", 3, !1), E = /* @__PURE__ */ rest_props(b, /* @__PURE__ */ "$$slots.$$events.$$legacy.popper.open.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.ref".split("."));
	Presence_layer(e, {
		get open() {
			return b.open;
		},
		get ref() {
			return b.ref;
		},
		presence: (e) => {
			Popper_layer_inner(e, spread_props({
				get popper() {
					return b.popper;
				},
				get onEscapeKeydown() {
					return b.onEscapeKeydown;
				},
				get escapeKeydownBehavior() {
					return b.escapeKeydownBehavior;
				},
				get preventOverflowTextSelection() {
					return b.preventOverflowTextSelection;
				},
				get id() {
					return b.id;
				},
				get onPointerDown() {
					return b.onPointerDown;
				},
				get onPointerUp() {
					return b.onPointerUp;
				},
				get side() {
					return b.side;
				},
				get sideOffset() {
					return b.sideOffset;
				},
				get align() {
					return b.align;
				},
				get alignOffset() {
					return b.alignOffset;
				},
				get arrowPadding() {
					return b.arrowPadding;
				},
				get avoidCollisions() {
					return b.avoidCollisions;
				},
				get collisionBoundary() {
					return b.collisionBoundary;
				},
				get collisionPadding() {
					return b.collisionPadding;
				},
				get sticky() {
					return b.sticky;
				},
				get hideWhenDetached() {
					return b.hideWhenDetached;
				},
				get updatePositionStrategy() {
					return b.updatePositionStrategy;
				},
				get strategy() {
					return b.strategy;
				},
				get dir() {
					return b.dir;
				},
				get preventScroll() {
					return b.preventScroll;
				},
				get wrapperId() {
					return b.wrapperId;
				},
				get style() {
					return b.style;
				},
				get onPlaced() {
					return b.onPlaced;
				},
				get customAnchor() {
					return w();
				},
				get isStatic() {
					return T();
				},
				get enabled() {
					return b.open;
				},
				get onInteractOutside() {
					return b.onInteractOutside;
				},
				get onCloseAutoFocus() {
					return b.onCloseAutoFocus;
				},
				get onOpenAutoFocus() {
					return b.onOpenAutoFocus;
				},
				get interactOutsideBehavior() {
					return x();
				},
				get loop() {
					return b.loop;
				},
				get trapFocus() {
					return S();
				},
				get isValidEvent() {
					return C();
				},
				get onFocusOutside() {
					return b.onFocusOutside;
				},
				forceMount: !1,
				get ref() {
					return b.ref;
				}
			}, () => E));
		},
		$$slots: { presence: !0 }
	});
}
function Popper_layer_force_mount(e, b) {
	let x = prop(b, "interactOutsideBehavior", 3, "close"), S = prop(b, "trapFocus", 3, !0), C = prop(b, "isValidEvent", 3, () => !1), w = prop(b, "customAnchor", 3, null), T = prop(b, "isStatic", 3, !1), E = /* @__PURE__ */ rest_props(b, /* @__PURE__ */ "$$slots.$$events.$$legacy.popper.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.enabled".split("."));
	Popper_layer_inner(e, spread_props({
		get popper() {
			return b.popper;
		},
		get onEscapeKeydown() {
			return b.onEscapeKeydown;
		},
		get escapeKeydownBehavior() {
			return b.escapeKeydownBehavior;
		},
		get preventOverflowTextSelection() {
			return b.preventOverflowTextSelection;
		},
		get id() {
			return b.id;
		},
		get onPointerDown() {
			return b.onPointerDown;
		},
		get onPointerUp() {
			return b.onPointerUp;
		},
		get side() {
			return b.side;
		},
		get sideOffset() {
			return b.sideOffset;
		},
		get align() {
			return b.align;
		},
		get alignOffset() {
			return b.alignOffset;
		},
		get arrowPadding() {
			return b.arrowPadding;
		},
		get avoidCollisions() {
			return b.avoidCollisions;
		},
		get collisionBoundary() {
			return b.collisionBoundary;
		},
		get collisionPadding() {
			return b.collisionPadding;
		},
		get sticky() {
			return b.sticky;
		},
		get hideWhenDetached() {
			return b.hideWhenDetached;
		},
		get updatePositionStrategy() {
			return b.updatePositionStrategy;
		},
		get strategy() {
			return b.strategy;
		},
		get dir() {
			return b.dir;
		},
		get preventScroll() {
			return b.preventScroll;
		},
		get wrapperId() {
			return b.wrapperId;
		},
		get style() {
			return b.style;
		},
		get onPlaced() {
			return b.onPlaced;
		},
		get customAnchor() {
			return w();
		},
		get isStatic() {
			return T();
		},
		get enabled() {
			return b.enabled;
		},
		get onInteractOutside() {
			return b.onInteractOutside;
		},
		get onCloseAutoFocus() {
			return b.onCloseAutoFocus;
		},
		get onOpenAutoFocus() {
			return b.onOpenAutoFocus;
		},
		get interactOutsideBehavior() {
			return x();
		},
		get loop() {
			return b.loop;
		},
		get trapFocus() {
			return S();
		},
		get isValidEvent() {
			return C();
		},
		get onFocusOutside() {
			return b.onFocusOutside;
		}
	}, () => E, { forceMount: !0 }));
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
		], ([e, b, x]) => !e || !b || !x ? void 0 : executeCallbacks(on(e, "pointerleave", (e) => {
			this.#createGraceArea(e, b);
		}), on(b, "pointerleave", (b) => {
			this.#createGraceArea(b, e);
		}))), watch(() => get$2(this.#pointerGraceArea), () => {
			let b = (b) => {
				if (!get$2(this.#pointerGraceArea)) return;
				let x = b.target;
				if (!isElement(x)) return;
				let S = {
					x: b.clientX,
					y: b.clientY
				}, C = e.triggerNode()?.contains(x) || e.contentNode()?.contains(x), w = !isPointInPolygon(S, get$2(this.#pointerGraceArea));
				C ? this.#removeGraceArea() : w && (this.#removeGraceArea(), e.onPointerExit());
			}, x = getDocument(e.triggerNode() ?? e.contentNode());
			if (x) return on(x, "pointermove", b);
		});
	}
	#removeGraceArea() {
		set(this.#pointerGraceArea, null), this.#isPointerInTransit.current = !1;
	}
	#createGraceArea(e, b) {
		let x = e.currentTarget;
		if (!isHTMLElement(x)) return;
		let S = {
			x: e.clientX,
			y: e.clientY
		}, C = getExitSideFromRect(S, x.getBoundingClientRect()), w = getPaddedExitPoints(S, C), T = getPointsFromRect(b.getBoundingClientRect()), E = getHull([...w, ...T]);
		set(this.#pointerGraceArea, E, !0), this.#isPointerInTransit.current = !0;
	}
};
function getExitSideFromRect(e, b) {
	let x = Math.abs(b.top - e.y), S = Math.abs(b.bottom - e.y), C = Math.abs(b.right - e.x), w = Math.abs(b.left - e.x);
	switch (Math.min(x, S, C, w)) {
		case w: return "left";
		case C: return "right";
		case x: return "top";
		case S: return "bottom";
		default: throw Error("unreachable");
	}
}
function getPaddedExitPoints(e, b, x = 5) {
	let S = x * 1.5;
	switch (b) {
		case "top": return [
			{
				x: e.x - x,
				y: e.y + x
			},
			{
				x: e.x,
				y: e.y - S
			},
			{
				x: e.x + x,
				y: e.y + x
			}
		];
		case "bottom": return [
			{
				x: e.x - x,
				y: e.y - x
			},
			{
				x: e.x,
				y: e.y + S
			},
			{
				x: e.x + x,
				y: e.y - x
			}
		];
		case "left": return [
			{
				x: e.x + x,
				y: e.y - x
			},
			{
				x: e.x - S,
				y: e.y
			},
			{
				x: e.x + x,
				y: e.y + x
			}
		];
		case "right": return [
			{
				x: e.x - x,
				y: e.y - x
			},
			{
				x: e.x + S,
				y: e.y
			},
			{
				x: e.x - x,
				y: e.y + x
			}
		];
	}
}
function getPointsFromRect(e) {
	let { top: b, right: x, bottom: S, left: C } = e;
	return [
		{
			x: C,
			y: b
		},
		{
			x,
			y: b
		},
		{
			x,
			y: S
		},
		{
			x: C,
			y: S
		}
	];
}
function isPointInPolygon(e, b) {
	let { x, y: S } = e, C = !1;
	for (let e = 0, w = b.length - 1; e < b.length; w = e++) {
		let T = b[e].x, E = b[e].y, D = b[w].x, O = b[w].y;
		E > S != O > S && x < (D - T) * (S - E) / (O - E) + T && (C = !C);
	}
	return C;
}
function getHull(e) {
	let b = e.slice();
	return b.sort((e, b) => e.x < b.x ? -1 : e.x > b.x ? 1 : e.y < b.y ? -1 : e.y > b.y ? 1 : 0), getHullPresorted(b);
}
function getHullPresorted(e) {
	if (e.length <= 1) return e.slice();
	let b = [];
	for (let x = 0; x < e.length; x++) {
		let S = e[x];
		for (; b.length >= 2;) {
			let e = b[b.length - 1], x = b[b.length - 2];
			if ((e.x - x.x) * (S.y - x.y) >= (e.y - x.y) * (S.x - x.x)) b.pop();
			else break;
		}
		b.push(S);
	}
	b.pop();
	let x = [];
	for (let b = e.length - 1; b >= 0; b--) {
		let S = e[b];
		for (; x.length >= 2;) {
			let e = x[x.length - 1], b = x[x.length - 2];
			if ((e.x - b.x) * (S.y - b.y) >= (e.y - b.y) * (S.x - b.x)) x.pop();
			else break;
		}
		x.push(S);
	}
	return x.pop(), b.length === 1 && x.length === 1 && b[0].x === x[0].x && b[0].y === x[0].y ? b : b.concat(x);
}
function Dialog(e, b) {
	push(b, !0);
	let x = prop(b, "open", 15, !1), S = prop(b, "onOpenChange", 3, noop), C = prop(b, "onOpenChangeComplete", 3, noop);
	DialogRootState.create({
		variant: boxWith(() => "dialog"),
		open: boxWith(() => x(), (e) => {
			x(e), S()(e);
		}),
		onOpenChangeComplete: boxWith(() => C())
	});
	var w = comment(), T = first_child(w);
	snippet(T, () => b.children ?? noop$1), append(e, w), pop();
}
var root_2$13 = /* @__PURE__ */ from_html("<button><!></button>");
function Dialog_close(e, b) {
	let x = props_id();
	push(b, !0);
	let S = prop(b, "id", 19, () => createId(x)), C = prop(b, "ref", 15, null), w = prop(b, "disabled", 3, !1), T = /* @__PURE__ */ rest_props(b, [
		"$$slots",
		"$$events",
		"$$legacy",
		"children",
		"child",
		"id",
		"ref",
		"disabled"
	]), E = DialogCloseState.create({
		variant: boxWith(() => "close"),
		id: boxWith(() => S()),
		ref: boxWith(() => C(), (e) => C(e)),
		disabled: boxWith(() => !!w())
	}), D = /* @__PURE__ */ user_derived(() => mergeProps(T, E.props));
	var O = comment(), k = first_child(O), A = (e) => {
		var x = comment(), S = first_child(x);
		snippet(S, () => b.child, () => ({ props: get$2(D) })), append(e, x);
	}, j = (e) => {
		var x = root_2$13();
		attribute_effect(x, () => ({ ...get$2(D) }));
		var S = child(x);
		snippet(S, () => b.children ?? noop$1), reset(x), append(e, x);
	};
	if_block(k, (e) => {
		b.child ? e(A) : e(j, !1);
	}), append(e, O), pop();
}
var root_6$3 = /* @__PURE__ */ from_html("<!> <!>", 1), root_8$3 = /* @__PURE__ */ from_html("<!> <div><!></div>", 1);
function Dialog_content(e, b) {
	let x = props_id();
	push(b, !0);
	let S = prop(b, "id", 19, () => createId(x)), C = prop(b, "ref", 15, null), w = prop(b, "forceMount", 3, !1), T = prop(b, "onCloseAutoFocus", 3, noop), E = prop(b, "onOpenAutoFocus", 3, noop), D = prop(b, "onEscapeKeydown", 3, noop), O = prop(b, "onInteractOutside", 3, noop), k = prop(b, "trapFocus", 3, !0), A = prop(b, "preventScroll", 3, !0), j = prop(b, "restoreScrollDelay", 3, null), M = /* @__PURE__ */ rest_props(b, [
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
	]), N = DialogContentState.create({
		id: boxWith(() => S()),
		ref: boxWith(() => C(), (e) => C(e))
	}), P = /* @__PURE__ */ user_derived(() => mergeProps(M, N.props));
	{
		let x = (e) => {
			{
				let x = (e, x) => {
					let S = () => x?.().props;
					Escape_layer(e, spread_props(() => get$2(P), {
						get enabled() {
							return N.root.opts.open.current;
						},
						get ref() {
							return N.opts.ref;
						},
						onEscapeKeydown: (e) => {
							D()(e), !e.defaultPrevented && N.root.handleClose();
						},
						children: (e, x) => {
							Dismissible_layer(e, spread_props(() => get$2(P), {
								get ref() {
									return N.opts.ref;
								},
								get enabled() {
									return N.root.opts.open.current;
								},
								onInteractOutside: (e) => {
									O()(e), !e.defaultPrevented && N.root.handleClose();
								},
								children: (e, x) => {
									Text_selection_layer(e, spread_props(() => get$2(P), {
										get ref() {
											return N.opts.ref;
										},
										get enabled() {
											return N.root.opts.open.current;
										},
										children: (e, x) => {
											var C = comment(), w = first_child(C), T = (e) => {
												var x = root_6$3(), C = first_child(x), w = (e) => {
													Scroll_lock(e, {
														get preventScroll() {
															return A();
														},
														get restoreScrollDelay() {
															return j();
														}
													});
												};
												if_block(C, (e) => {
													N.root.opts.open.current && e(w);
												});
												var T = sibling(C, 2);
												{
													let e = /* @__PURE__ */ user_derived(() => ({
														props: mergeProps(get$2(P), S()),
														...N.snippetProps
													}));
													snippet(T, () => b.child, () => get$2(e));
												}
												append(e, x);
											}, E = (e) => {
												var x = root_8$3(), C = first_child(x);
												Scroll_lock(C, { get preventScroll() {
													return A();
												} });
												var w = sibling(C, 2);
												attribute_effect(w, (e) => ({ ...e }), [() => mergeProps(get$2(P), S())]);
												var T = child(w);
												snippet(T, () => b.children ?? noop$1), reset(w), append(e, x);
											};
											if_block(w, (e) => {
												b.child ? e(T) : e(E, !1);
											}), append(e, C);
										},
										$$slots: { default: !0 }
									}));
								},
								$$slots: { default: !0 }
							}));
						},
						$$slots: { default: !0 }
					}));
				}, S = /* @__PURE__ */ user_derived(() => shouldEnableFocusTrap({
					forceMount: w(),
					present: N.root.opts.open.current,
					open: N.root.opts.open.current
				}));
				Focus_scope(e, {
					get ref() {
						return N.opts.ref;
					},
					loop: !0,
					get trapFocus() {
						return k();
					},
					get enabled() {
						return get$2(S);
					},
					get onOpenAutoFocus() {
						return E();
					},
					get onCloseAutoFocus() {
						return T();
					},
					focusScope: x,
					$$slots: { focusScope: !0 }
				});
			}
		}, S = /* @__PURE__ */ user_derived(() => N.root.opts.open.current || w());
		Presence_layer(e, spread_props(() => get$2(P), {
			get forceMount() {
				return w();
			},
			get open() {
				return get$2(S);
			},
			get ref() {
				return N.opts.ref;
			},
			presence: x,
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
	static create(b) {
		return PaginationRootContext.set(new e(b));
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
		let e = (this.opts.page.current - 1) * this.opts.perPage.current, b = Math.min(e + this.opts.perPage.current, this.opts.count.current);
		return {
			start: e + 1,
			end: b
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
		let b = this.opts.ref.current;
		if (b) return b.querySelector(paginationAttrs.selector(e));
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
	static create(b) {
		return new e(b, PaginationRootContext.get());
	}
	opts;
	root;
	attachment;
	#isSelected = /* @__PURE__ */ user_derived(() => this.opts.page.current.value === this.root.opts.page.current);
	constructor(e, b) {
		this.opts = e, this.root = b, this.attachment = attachRef(this.opts.ref), this.onclick = this.onclick.bind(this), this.onkeydown = this.onkeydown.bind(this);
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
	static create(b) {
		return new e(b, PaginationRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(e, b) {
		this.opts = e, this.root = b, this.attachment = attachRef(this.opts.ref), this.onclick = this.onclick.bind(this), this.onkeydown = this.onkeydown.bind(this);
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
function handleTriggerKeydown(e, b, x) {
	if (!b || !x.opts.ref.current) return;
	let S = x.getPageTriggerNodes(), C = x.getButtonNode("next"), w = x.getButtonNode("prev");
	w && S.unshift(w), C && S.push(C);
	let T = S.indexOf(b), E = getElemDirection(x.opts.ref.current), { nextKey: D, prevKey: O } = getDirectionalKeys(E, x.opts.orientation.current), k = x.opts.loop.current, A = {
		[D]: T + 1,
		[O]: T - 1,
		Home: 0,
		End: S.length - 1
	}[e.key];
	if (A === void 0) return;
	e.preventDefault(), A < 0 && k ? A = S.length - 1 : A === S.length && k && (A = 0);
	let j = S[A];
	j && j.focus();
}
function getPageItems({ page: e = 1, totalPages: b, siblingCount: x = 1 }) {
	let S = [], C = new Set([1, b]), w = 3 + x, T = b - 2 - x;
	if (w > T) for (let e = 2; e <= b - 1; e++) C.add(e);
	else if (e < w) for (let e = 2; e <= Math.min(w, b); e++) C.add(e);
	else if (e > T) for (let e = b - 1; e >= Math.max(T, 2); e--) C.add(e);
	else for (let S = Math.max(e - x, 2); S <= Math.min(e + x, b); S++) C.add(S);
	function E(e) {
		S.push({
			type: "page",
			value: e,
			key: `page-${e}`
		});
	}
	function D() {
		let e = useId();
		S.push({
			type: "ellipsis",
			key: `ellipsis-${e}`
		});
	}
	let O = 0;
	for (let e of Array.from(C).sort((e, b) => e - b)) e - O > 1 && D(), E(e), O = e;
	return S;
}
var root_2$12 = /* @__PURE__ */ from_html("<div><!></div>");
function Pagination(e, b) {
	let x = props_id();
	push(b, !0);
	let S = prop(b, "id", 19, () => createId(x)), C = prop(b, "perPage", 3, 1), w = prop(b, "page", 15, 1), T = prop(b, "ref", 15, null), E = prop(b, "siblingCount", 3, 1), D = prop(b, "onPageChange", 3, noop), O = prop(b, "loop", 3, !1), k = prop(b, "orientation", 3, "horizontal"), A = /* @__PURE__ */ rest_props(b, [
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
	]), j = PaginationRootState.create({
		id: boxWith(() => S()),
		count: boxWith(() => b.count),
		perPage: boxWith(() => C()),
		page: boxWith(() => w(), (e) => {
			w(e), D()?.(e);
		}),
		loop: boxWith(() => O()),
		siblingCount: boxWith(() => E()),
		orientation: boxWith(() => k()),
		ref: boxWith(() => T(), (e) => T(e))
	}), M = /* @__PURE__ */ user_derived(() => mergeProps(A, j.props));
	var N = comment(), P = first_child(N), F = (e) => {
		var x = comment(), S = first_child(x);
		{
			let e = /* @__PURE__ */ user_derived(() => ({
				props: get$2(M),
				...j.snippetProps
			}));
			snippet(S, () => b.child, () => get$2(e));
		}
		append(e, x);
	}, I = (e) => {
		var x = root_2$12();
		attribute_effect(x, () => ({ ...get$2(M) }));
		var S = child(x);
		snippet(S, () => b.children ?? noop$1, () => j.snippetProps), reset(x), append(e, x);
	};
	if_block(P, (e) => {
		b.child ? e(F) : e(I, !1);
	}), append(e, N), pop();
}
var root_2$11 = /* @__PURE__ */ from_html("<button><!></button>");
function Pagination_prev_button(e, b) {
	let x = props_id();
	push(b, !0);
	let S = prop(b, "id", 19, () => createId(x)), C = prop(b, "ref", 15, null), w = prop(b, "type", 3, "button"), T = prop(b, "disabled", 3, !1), E = /* @__PURE__ */ rest_props(b, [
		"$$slots",
		"$$events",
		"$$legacy",
		"id",
		"child",
		"children",
		"ref",
		"type",
		"disabled"
	]), D = PaginationButtonState.create({
		type: "prev",
		id: boxWith(() => S()),
		ref: boxWith(() => C(), (e) => C(e)),
		disabled: boxWith(() => !!T())
	}), O = /* @__PURE__ */ user_derived(() => mergeProps(E, D.props, { type: w() }));
	var k = comment(), A = first_child(k), j = (e) => {
		var x = comment(), S = first_child(x);
		snippet(S, () => b.child, () => ({ props: get$2(O) })), append(e, x);
	}, M = (e) => {
		var x = root_2$11();
		attribute_effect(x, () => ({ ...get$2(O) }));
		var S = child(x);
		snippet(S, () => b.children ?? noop$1), reset(x), append(e, x);
	};
	if_block(A, (e) => {
		b.child ? e(j) : e(M, !1);
	}), append(e, k), pop();
}
var root_2$10 = /* @__PURE__ */ from_html("<button><!></button>");
function Pagination_next_button(e, b) {
	let x = props_id();
	push(b, !0);
	let S = prop(b, "id", 19, () => createId(x)), C = prop(b, "ref", 15, null), w = prop(b, "type", 3, "button"), T = prop(b, "disabled", 3, !1), E = /* @__PURE__ */ rest_props(b, [
		"$$slots",
		"$$events",
		"$$legacy",
		"id",
		"child",
		"children",
		"ref",
		"type",
		"disabled"
	]), D = PaginationButtonState.create({
		type: "next",
		id: boxWith(() => S()),
		ref: boxWith(() => C(), (e) => C(e)),
		disabled: boxWith(() => !!T())
	}), O = /* @__PURE__ */ user_derived(() => mergeProps(E, D.props, { type: w() }));
	var k = comment(), A = first_child(k), j = (e) => {
		var x = comment(), S = first_child(x);
		snippet(S, () => b.child, () => ({ props: get$2(O) })), append(e, x);
	}, M = (e) => {
		var x = root_2$10();
		attribute_effect(x, () => ({ ...get$2(O) }));
		var S = child(x);
		snippet(S, () => b.children ?? noop$1), reset(x), append(e, x);
	};
	if_block(A, (e) => {
		b.child ? e(j) : e(M, !1);
	}), append(e, k), pop();
}
var root_2$9 = /* @__PURE__ */ from_html("<button><!></button>");
function Pagination_page(e, b) {
	let x = props_id();
	push(b, !0);
	let S = prop(b, "id", 19, () => createId(x)), C = prop(b, "type", 3, "button"), w = prop(b, "ref", 15, null), T = prop(b, "disabled", 3, !1), E = /* @__PURE__ */ rest_props(b, [
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
	]), D = PaginationPageState.create({
		id: boxWith(() => S()),
		page: boxWith(() => b.page),
		ref: boxWith(() => w(), (e) => w(e)),
		disabled: boxWith(() => !!T())
	}), O = /* @__PURE__ */ user_derived(() => mergeProps(E, D.props, { type: C() }));
	var k = comment(), A = first_child(k), j = (e) => {
		var x = comment(), S = first_child(x);
		snippet(S, () => b.child, () => ({ props: get$2(O) })), append(e, x);
	}, M = (e) => {
		var x = root_2$9();
		attribute_effect(x, () => ({ ...get$2(O) }));
		var S = child(x), C = (e) => {
			var x = comment(), S = first_child(x);
			snippet(S, () => b.children ?? noop$1), append(e, x);
		}, w = (e) => {
			var x = text();
			template_effect(() => set_text(x, b.page.value)), append(e, x);
		};
		if_block(S, (e) => {
			b.children ? e(C) : e(w, !1);
		}), reset(x), append(e, x);
	};
	if_block(A, (e) => {
		b.child ? e(j) : e(M, !1);
	}), append(e, k), pop();
}
var defaultOpts = { immediate: !0 }, TimeoutFn = class {
	#opts;
	#interval;
	#cb;
	#timer = null;
	constructor(e, b, x = {}) {
		this.#cb = e, this.#interval = b, this.#opts = {
			...defaultOpts,
			...x
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
	static create(b) {
		return TooltipProviderContext.set(new e(b));
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
	static create(b) {
		return TooltipRootContext.set(new e(b, TooltipProviderContext.get()));
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
	constructor(e, b) {
		this.opts = e, this.provider = b, this.#timerFn = new TimeoutFn(() => {
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
		let e = !this.provider.isOpenDelayed, b = this.delayDuration ?? 0;
		e || b === 0 ? (set(this.#wasOpenDelayed, b > 0 && e, !0), this.opts.open.current = !0) : this.#timerFn.start();
	};
	onTriggerEnter = () => {
		this.#handleDelayedOpen();
	};
	onTriggerLeave = () => {
		this.disableHoverableContent ? this.handleClose() : this.#timerFn.stop();
	};
}, TooltipTriggerState = class e {
	static create(b) {
		return new e(b, TooltipRootContext.get());
	}
	opts;
	root;
	attachment;
	#isPointerDown = simpleBox(!1);
	#hasPointerMoveOpened = /* @__PURE__ */ state(!1);
	#isDisabled = /* @__PURE__ */ user_derived(() => this.opts.disabled.current || this.root.disabled);
	domContext;
	constructor(e, b) {
		this.opts = e, this.root = b, this.domContext = new DOMContext(e.ref), this.attachment = attachRef(this.opts.ref, (e) => this.root.triggerNode = e);
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
	static create(b) {
		return new e(b, TooltipRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(e, b) {
		this.opts = e, this.root = b, this.attachment = attachRef(this.opts.ref, (e) => this.root.contentNode = e), new GraceArea({
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
			let b = e.target;
			b && b.contains(this.root.triggerNode) && this.root.handleClose();
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
function Tooltip(e, b) {
	push(b, !0);
	let x = prop(b, "open", 15, !1), S = prop(b, "onOpenChange", 3, noop), C = prop(b, "onOpenChangeComplete", 3, noop);
	TooltipRootState.create({
		open: boxWith(() => x(), (e) => {
			x(e), S()(e);
		}),
		delayDuration: boxWith(() => b.delayDuration),
		disableCloseOnTriggerClick: boxWith(() => b.disableCloseOnTriggerClick),
		disableHoverableContent: boxWith(() => b.disableHoverableContent),
		ignoreNonKeyboardFocus: boxWith(() => b.ignoreNonKeyboardFocus),
		disabled: boxWith(() => b.disabled),
		onOpenChangeComplete: boxWith(() => C())
	}), Floating_layer(e, {
		tooltip: !0,
		children: (e, x) => {
			var S = comment(), C = first_child(S);
			snippet(C, () => b.children ?? noop$1), append(e, S);
		},
		$$slots: { default: !0 }
	}), pop();
}
var root_4$5 = /* @__PURE__ */ from_html("<div><div><!></div></div>"), root_9$1 = /* @__PURE__ */ from_html("<div><div><!></div></div>");
function Tooltip_content(e, b) {
	let x = props_id();
	push(b, !0);
	let S = prop(b, "id", 19, () => createId(x)), C = prop(b, "ref", 15, null), w = prop(b, "side", 3, "top"), T = prop(b, "sideOffset", 3, 0), E = prop(b, "align", 3, "center"), D = prop(b, "avoidCollisions", 3, !0), O = prop(b, "arrowPadding", 3, 0), k = prop(b, "sticky", 3, "partial"), A = prop(b, "hideWhenDetached", 3, !1), j = prop(b, "collisionPadding", 3, 0), M = prop(b, "onInteractOutside", 3, noop), N = prop(b, "onEscapeKeydown", 3, noop), P = prop(b, "forceMount", 3, !1), F = /* @__PURE__ */ rest_props(b, [
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
	]), I = TooltipContentState.create({
		id: boxWith(() => S()),
		ref: boxWith(() => C(), (e) => C(e)),
		onInteractOutside: boxWith(() => M()),
		onEscapeKeydown: boxWith(() => N())
	}), L = /* @__PURE__ */ user_derived(() => ({
		side: w(),
		sideOffset: T(),
		align: E(),
		avoidCollisions: D(),
		arrowPadding: O(),
		sticky: k(),
		hideWhenDetached: A(),
		collisionPadding: j(),
		strategy: b.strategy
	})), R = /* @__PURE__ */ user_derived(() => mergeProps(F, get$2(L), I.props));
	var B = comment(), V = first_child(B), H = (e) => {
		Popper_layer_force_mount(e, spread_props(() => get$2(R), () => I.popperProps, {
			get enabled() {
				return I.root.opts.open.current;
			},
			get id() {
				return S();
			},
			trapFocus: !1,
			loop: !1,
			preventScroll: !1,
			forceMount: !0,
			get ref() {
				return I.opts.ref;
			},
			tooltip: !0,
			popper: (e, x) => {
				let S = () => x?.().props, C = () => x?.().wrapperProps, w = /* @__PURE__ */ user_derived(() => mergeProps(S(), { style: getFloatingContentCSSVars("tooltip") }));
				var T = comment(), E = first_child(T), D = (e) => {
					var x = comment(), S = first_child(x);
					{
						let e = /* @__PURE__ */ user_derived(() => ({
							props: get$2(w),
							wrapperProps: C(),
							...I.snippetProps
						}));
						snippet(S, () => b.child, () => get$2(e));
					}
					append(e, x);
				}, O = (e) => {
					var x = root_4$5();
					attribute_effect(x, () => ({ ...C() }));
					var S = child(x);
					attribute_effect(S, () => ({ ...get$2(w) }));
					var T = child(S);
					snippet(T, () => b.children ?? noop$1), reset(S), reset(x), append(e, x);
				};
				if_block(E, (e) => {
					b.child ? e(D) : e(O, !1);
				}), append(e, T);
			},
			$$slots: { popper: !0 }
		}));
	}, U = (e) => {
		var x = comment(), C = first_child(x), w = (e) => {
			Popper_layer(e, spread_props(() => get$2(R), () => I.popperProps, {
				get open() {
					return I.root.opts.open.current;
				},
				get id() {
					return S();
				},
				trapFocus: !1,
				loop: !1,
				preventScroll: !1,
				forceMount: !1,
				get ref() {
					return I.opts.ref;
				},
				tooltip: !0,
				popper: (e, x) => {
					let S = () => x?.().props, C = () => x?.().wrapperProps, w = /* @__PURE__ */ user_derived(() => mergeProps(S(), { style: getFloatingContentCSSVars("tooltip") }));
					var T = comment(), E = first_child(T), D = (e) => {
						var x = comment(), S = first_child(x);
						{
							let e = /* @__PURE__ */ user_derived(() => ({
								props: get$2(w),
								wrapperProps: C(),
								...I.snippetProps
							}));
							snippet(S, () => b.child, () => get$2(e));
						}
						append(e, x);
					}, O = (e) => {
						var x = root_9$1();
						attribute_effect(x, () => ({ ...C() }));
						var S = child(x);
						attribute_effect(S, () => ({ ...get$2(w) }));
						var T = child(S);
						snippet(T, () => b.children ?? noop$1), reset(S), reset(x), append(e, x);
					};
					if_block(E, (e) => {
						b.child ? e(D) : e(O, !1);
					}), append(e, T);
				},
				$$slots: { popper: !0 }
			}));
		};
		if_block(C, (e) => {
			P() || e(w);
		}, !0), append(e, x);
	};
	if_block(V, (e) => {
		P() ? e(H) : e(U, !1);
	}), append(e, B), pop();
}
var root_3$10 = /* @__PURE__ */ from_html("<button><!></button>");
function Tooltip_trigger(e, b) {
	let x = props_id();
	push(b, !0);
	let S = prop(b, "id", 19, () => createId(x)), C = prop(b, "disabled", 3, !1), w = prop(b, "type", 3, "button"), T = prop(b, "ref", 15, null), E = /* @__PURE__ */ rest_props(b, [
		"$$slots",
		"$$events",
		"$$legacy",
		"children",
		"child",
		"id",
		"disabled",
		"type",
		"ref"
	]), D = TooltipTriggerState.create({
		id: boxWith(() => S()),
		disabled: boxWith(() => C() ?? !1),
		ref: boxWith(() => T(), (e) => T(e))
	}), O = /* @__PURE__ */ user_derived(() => mergeProps(E, D.props, { type: w() }));
	Floating_layer_anchor(e, {
		get id() {
			return S();
		},
		get ref() {
			return D.opts.ref;
		},
		tooltip: !0,
		children: (e, x) => {
			var S = comment(), C = first_child(S), w = (e) => {
				var x = comment(), S = first_child(x);
				snippet(S, () => b.child, () => ({ props: get$2(O) })), append(e, x);
			}, T = (e) => {
				var x = root_3$10();
				attribute_effect(x, () => ({ ...get$2(O) }));
				var S = child(x);
				snippet(S, () => b.children ?? noop$1), reset(x), append(e, x);
			};
			if_block(C, (e) => {
				b.child ? e(w) : e(T, !1);
			}), append(e, S);
		},
		$$slots: { default: !0 }
	}), pop();
}
function Tooltip_provider(e, b) {
	push(b, !0);
	let x = prop(b, "delayDuration", 3, 700), S = prop(b, "disableCloseOnTriggerClick", 3, !1), C = prop(b, "disableHoverableContent", 3, !1), w = prop(b, "disabled", 3, !1), T = prop(b, "ignoreNonKeyboardFocus", 3, !1), E = prop(b, "skipDelayDuration", 3, 300);
	TooltipProviderState.create({
		delayDuration: boxWith(() => x()),
		disableCloseOnTriggerClick: boxWith(() => S()),
		disableHoverableContent: boxWith(() => C()),
		disabled: boxWith(() => w()),
		ignoreNonKeyboardFocus: boxWith(() => T()),
		skipDelayDuration: boxWith(() => E())
	});
	var D = comment(), O = first_child(D);
	snippet(O, () => b.children ?? noop$1), append(e, D), pop();
}
function guessImageLink(e) {
	if (e.link) return e.link;
	if (e.metadata?.page && e.document?.name.startsWith("cudllibcamacuk")) return `${e.document.src.replace("/iiif/", "/view/")}/${e.metadata.page}`;
}
function ellipsis(e, b) {
	return b < 0 || e.length <= b ? e : b < 12 ? e.slice(0, b) + "..." : e.slice(0, Math.max(5, b - 12)) + "..." + e.slice(-Math.min(9, b - 5));
}
var root_2$8 = /* @__PURE__ */ from_html("<br/> <span> </span>", 1), root_1$11 = /* @__PURE__ */ from_html("<span class=\"tag is-light is-bold mb-3\"> </span> <!>", 1), root_3$9 = /* @__PURE__ */ from_html("<p> </p>"), root$14 = /* @__PURE__ */ from_html("<!> <!>", 1);
function ImageInfos(e, b) {
	push(b, !0);
	let x = prop(b, "isTitle", 3, !1), S = prop(b, "prefix", 3, ""), C = prop(b, "filenameDisplay", 3, !0), w = /* @__PURE__ */ user_derived(() => x() ? "h4" : "span"), T = getNameProvider();
	var E = root$14(), D = first_child(E);
	element(D, () => get$2(w), !1, (e, w) => {
		attribute_effect(e, (e, b) => ({
			class: "title-identification",
			title: e,
			[CLASS]: b
		}), [() => T.getImageName(b.image), () => ({ "mt-2": x() })]);
		var E = root_1$11(), D = first_child(E), O = child(D);
		reset(D);
		var k = sibling(D, 2), A = (e) => {
			var x = root_2$8(), S = sibling(first_child(x), 2), C = child(S, !0);
			reset(S), template_effect((e) => set_text(C, e), [() => ellipsis(T.getImageName(b.image), 16)]), append(e, x);
		};
		if_block(k, (e) => {
			C() && e(A);
		}), template_effect(() => set_text(O, `${(S() || "") ?? ""}
        Image #${b.image.num ?? ""}`)), append(w, E);
	});
	var O = sibling(D, 2), k = (e) => {
		var x = root_3$9(), S = child(x, !0);
		reset(x), template_effect((e) => set_text(S, e), [() => T.getSourceName(b.image.document) || b.image.document?.name || b.image.subtitle || ""]), append(e, x);
	};
	if_block(O, (e) => {
		x() && e(k);
	}), append(e, E), pop();
}
function getMagnifyingContext() {
	return getContext("magnify");
}
function setMagnifyingContext(e) {
	setContext("magnify", e);
}
var on_click$5 = (e) => e.stopPropagation(), root_6$2 = /* @__PURE__ */ from_html("<p><a target=\"_blank\">See in context</a></p>"), root_5$5 = /* @__PURE__ */ from_html("<div class=\"magnifying-item\"><div class=\"display-image\"><img class=\"display-img\"/></div> <div class=\"magnifying-info\"><!> <!></div></div>"), on_click_1$2 = (e) => e.stopPropagation(), root_7$5 = /* @__PURE__ */ from_html("<p><a target=\"_blank\">See in context</a></p>"), root_4$4 = /* @__PURE__ */ from_html("<div class=\"magnifying-content\"><!>  <div class=\"magnifying-item\"><div class=\"display-image\"><img/></div> <div class=\"magnifying-info\"><!> <p class=\"actions my-2\"><!> <!> <!></p> <!></div></div></div>"), root_3$8 = /* @__PURE__ */ from_html("<div><!> <!> <!></div>");
function ImageMagnifier(e, b) {
	push(b, !0);
	let x = /* @__PURE__ */ user_derived(getMagnifyingContext), S = /* @__PURE__ */ user_derived(() => get$2(x).image), C = /* @__PURE__ */ user_derived(() => get$2(x).comparison), w = /* @__PURE__ */ user_derived(() => get$2(x).transpositions), T = /* @__PURE__ */ user_derived(() => get$2(w) || []), E = /* @__PURE__ */ user_derived(() => get$2(S) && guessImageLink(get$2(S))), D = /* @__PURE__ */ user_derived(() => get$2(C) && guessImageLink(get$2(C)));
	function O() {
		return get$2(S) !== void 0;
	}
	function k(e) {
		e || (get$2(x).image = void 0);
	}
	function A(e, b) {
		let x = get$2(T).find((e) => e && e.startsWith("rot")), S = get$2(T).includes("hflip"), C = x ? parseInt(x.slice(3)) : 0, w = C;
		b && C % 180 && (w += 180), w = (w + e + 360) % 360;
		let E = [];
		w && E.push(`rot${w}`), b !== S && E.push("hflip"), set(T, E);
	}
	var j = comment(), M = first_child(j), N = (e) => {
		var b = comment(), x = first_child(b), w = O, j = k;
		component(x, () => Dialog, (e, b) => {
			b(e, {
				get open() {
					return w();
				},
				set open(e) {
					j(e);
				},
				onOpenChange: k,
				children: (e, b) => {
					var x = comment(), w = first_child(x);
					component(w, () => Portal, (e, b) => {
						b(e, {
							children: (e, b) => {
								var x = root_3$8();
								let w;
								var j = child(x);
								component(j, () => Dialog_overlay, (e, b) => {
									b(e, { class: "modal-background" });
								});
								var M = sibling(j, 2);
								IconBtn(M, {
									icon: "mdi:close",
									class: "dialog-close",
									onclick: () => k(!1)
								});
								var N = sibling(M, 2);
								component(N, () => Dialog_content, (e, b) => {
									b(e, {
										class: "magnifier modal-content",
										children: (e, b) => {
											var x = root_4$4(), w = child(x), O = (e) => {
												var b = root_5$5();
												b.__click = [on_click$5];
												var x = child(b), S = child(x);
												reset(x);
												var w = sibling(x, 2), T = child(w);
												ImageInfos(T, {
													get image() {
														return get$2(C);
													},
													isTitle: !0,
													prefix: "Query"
												});
												var E = sibling(T, 2), O = (e) => {
													var b = root_6$2(), x = child(b);
													reset(b), template_effect(() => set_attribute(x, "href", get$2(D))), append(e, b);
												};
												if_block(E, (e) => {
													get$2(D) && e(O);
												}), reset(w), reset(b), template_effect(() => {
													set_attribute(S, "src", get$2(C).url), set_attribute(S, "alt", get$2(C).id);
												}), append(e, b);
											};
											if_block(w, (e) => {
												get$2(C) && e(O);
											});
											var k = sibling(w, 2);
											k.__click = [on_click_1$2];
											var j = child(k), M = child(j);
											reset(j);
											var N = sibling(j, 2), P = child(N);
											ImageInfos(P, {
												get image() {
													return get$2(S);
												},
												isTitle: !0
											});
											var F = sibling(P, 2), I = child(F);
											IconBtn(I, {
												icon: "mdi:rotate-left",
												onclick: () => A(-90, !1)
											});
											var L = sibling(I, 2);
											IconBtn(L, {
												icon: "mdi:rotate-right",
												onclick: () => A(90, !1)
											});
											var R = sibling(L, 2);
											IconBtn(R, {
												icon: "mdi:flip-horizontal",
												onclick: () => A(0, !0)
											}), reset(F);
											var z = sibling(F, 2), B = (e) => {
												var b = root_7$5(), x = child(b);
												reset(b), template_effect(() => set_attribute(x, "href", get$2(E))), append(e, b);
											};
											if_block(z, (e) => {
												get$2(E) && e(B);
											}), reset(N), reset(k), reset(x), template_effect((e) => {
												set_attribute(M, "src", get$2(S).url), set_attribute(M, "alt", get$2(S).id), set_class(M, 1, e);
											}, [() => "display-img " + get$2(T).join(" ")]), append(e, x);
										},
										$$slots: { default: !0 }
									});
								}), reset(x), template_effect((e) => w = set_class(x, 1, "modal content", null, w, e), [() => ({ "is-active": O() })]), append(e, x);
							},
							$$slots: { default: !0 }
						});
					}), append(e, x);
				},
				$$slots: { default: !0 }
			});
		}), append(e, b);
	};
	if_block(M, (e) => {
		get$2(S) && e(N);
	}), append(e, j), pop();
}
delegate(["click"]);
var on_click$4 = (e) => e.stopPropagation(), root_5$4 = /* @__PURE__ */ from_html("<a class=\"image-source\" target=\"_blank\" title=\"See in context\"><!></a>"), root_7$4 = /* @__PURE__ */ from_html("<a href=\"javascript:void(0)\" class=\"image-pin\" title=\"Pin as comparison\"><!></a>"), root_8$2 = /* @__PURE__ */ from_html("<a href=\"javascript:void(0)\" class=\"image-pin always-visible\" title=\"Pin as comparison\"><!></a>"), root_9 = /* @__PURE__ */ from_html("<a href=\"javascript:void(0)\" class=\"image-magnify\" title=\"Magnify\"><!></a>"), root_10$1 = /* @__PURE__ */ from_html("<a class=\"image-focus\" title=\"Show detail\"><!></a>"), root_4$3 = /* @__PURE__ */ from_html("<div class=\"display-tools\"><!> <!> <!> <!></div>"), root_11$1 = /* @__PURE__ */ from_html("<span class=\"similarity\"> </span>"), root_3$7 = /* @__PURE__ */ from_html("<div class=\"display-image\"><img/></div> <!> <!>", 1), root_12 = /* @__PURE__ */ from_html("<div class=\"display-image\"><img/></div> <!>", 1), root_2$7 = /* @__PURE__ */ from_html("<!> <!>", 1);
function ImageFileDisplay(e, b) {
	push(b, !0);
	let x = getMagnifyingContext(), S = /* @__PURE__ */ user_derived(() => x.comparison?.id === b.image.id);
	function C() {
		x.comparison = get$2(S) ? void 0 : b.image;
	}
	function w() {
		x.image = b.image, x.transpositions = b.transpositions, b.comparison && (x.comparison = b.comparison);
	}
	var T = comment(), E = first_child(T);
	component(E, () => Tooltip_provider, (e, T) => {
		T(e, {
			delayDuration: 0,
			children: (e, T) => {
				var E = comment(), D = first_child(E);
				component(D, () => Tooltip, (e, T) => {
					T(e, {
						children: (e, T) => {
							var E = root_2$7(), D = first_child(E);
							component(D, () => Tooltip_trigger, (e, T) => {
								T(e, {
									class: "not-button display-item",
									children: (e, T) => {
										var E = root_3$7(), D = first_child(E), O = child(D);
										O.__click = function(...e) {
											(!b.disable_magnify && !b.disable_all ? w : void 0)?.apply(this, e);
										}, reset(D);
										var k = sibling(D, 2), A = (e) => {
											var T = root_4$3();
											T.__click = [on_click$4];
											var E = child(T), D = (e) => {
												var x = root_5$4(), S = child(x);
												Icon(S, { icon: "mdi:book-open-blank-variant" }), reset(x), template_effect(() => set_attribute(x, "href", b.image.link)), append(e, x);
											};
											if_block(E, (e) => {
												b.image.link && e(D);
											});
											var O = sibling(E, 2), k = (e) => {
												var b = comment(), x = first_child(b), w = (e) => {
													var b = root_7$4(), x = child(b);
													Icon(x, {
														icon: "mdi:pin",
														onclick: C
													}), reset(b), append(e, b);
												}, T = (e) => {
													var b = root_8$2(), x = child(b);
													Icon(x, {
														icon: "mdi:pin-off",
														onclick: C
													}), reset(b), append(e, b);
												};
												if_block(x, (e) => {
													get$2(S) ? e(T, !1) : e(w);
												}), append(e, b);
											};
											if_block(O, (e) => {
												x && !b.disable_pin && e(k);
											});
											var A = sibling(O, 2), j = (e) => {
												var b = root_9();
												b.__click = w;
												var x = child(b);
												Icon(x, { icon: "mdi:arrow-expand" }), reset(b), append(e, b);
											};
											if_block(A, (e) => {
												x && e(j);
											});
											var M = sibling(A, 2), N = (e) => {
												var x = root_10$1(), S = child(x);
												Icon(S, { icon: "mdi:image-search" }), reset(x), template_effect(() => set_attribute(x, "href", b.href)), append(e, x);
											};
											if_block(M, (e) => {
												b.href && e(N);
											}), reset(T), append(e, T);
										};
										if_block(k, (e) => {
											b.disable_all || e(A);
										});
										var j = sibling(k, 2), M = (e) => {
											var x = root_11$1(), S = child(x, !0);
											reset(x), template_effect(() => set_text(S, b.similarity)), append(e, x);
										};
										if_block(j, (e) => {
											b.similarity && e(M);
										}), template_effect((e) => {
											set_attribute(O, "src", b.image.url), set_attribute(O, "alt", b.image.id), set_class(O, 1, e);
										}, [() => "image display-img " + (b.transpositions || []).join(" ")]), append(e, E);
									},
									$$slots: { default: !0 }
								});
							});
							var O = sibling(D, 2);
							component(O, () => Tooltip_content, (e, x) => {
								x(e, {
									class: "tooltip",
									children: (e, x) => {
										var S = root_12(), C = first_child(S), w = child(C);
										reset(C);
										var T = sibling(C, 2);
										ImageInfos(T, {
											get image() {
												return b.image;
											},
											isTitle: !0
										}), template_effect((e) => {
											set_attribute(w, "src", b.image.url), set_attribute(w, "alt", b.image.id), set_class(w, 1, e);
										}, [() => clsx$1(["display-img", ...b.transpositions || []])]), append(e, S);
									},
									$$slots: { default: !0 }
								});
							}), append(e, E);
						},
						$$slots: { default: !0 }
					});
				}), append(e, E);
			},
			$$slots: { default: !0 }
		});
	}), append(e, T), pop();
}
delegate(["click"]);
var on_click$3 = (e, b, x) => b(get$2(x)), root_2$6 = /* @__PURE__ */ from_html("<a href=\"javascript:void(0)\" class=\"cl-selecter\" aria-label=\"Select image\"></a>"), root_1$10 = /* @__PURE__ */ from_html("<div><!> <!></div>"), root_3$6 = /* @__PURE__ */ from_html("<p>∅</p>"), on_click_1$1 = (e, b, x) => {
	b(!b()), b() && x.onexpand?.();
}, root_4$2 = /* @__PURE__ */ from_html("<a class=\"cl-more card cl-placeholder\" href=\"javascript:void(0)\"> </a>"), root$13 = /* @__PURE__ */ from_html("<div><!> <!></div>");
function ImageList(e, b) {
	push(b, !0);
	let x = prop(b, "selectable", 3, !1), S = prop(b, "expanded", 15, !1), C = getEditorState();
	function w(e) {
		C.select_images("toggle", e);
	}
	var T = root$13();
	let E;
	var D = child(T);
	each(D, 17, () => b.images.slice(0, b.limit), (e) => e.id, (e, S) => {
		var T = root_1$10();
		let E;
		var D = child(T);
		{
			let e = /* @__PURE__ */ user_derived(() => ({
				...get$2(S),
				id: get$2(S).num.toString(),
				url: (C.base_url || "") + (b.dti_transformed && get$2(S).tsf_url ? get$2(S).tsf_url : get$2(S).url)
			}));
			ImageFileDisplay(D, {
				get image() {
					return get$2(e);
				},
				get disable_magnify() {
					return x();
				},
				get disable_all() {
					return b.disable_all;
				}
			});
		}
		var O = sibling(D, 2), k = (e) => {
			var b = root_2$6();
			b.__click = [
				on_click$3,
				w,
				S
			], append(e, b);
		};
		if_block(O, (e) => {
			x() && e(k);
		}), reset(T), template_effect((e) => E = set_class(T, 1, "cl-image card", null, E, e), [() => ({ "cl-selected": x() && C.image_selection.has(get$2(S).id) })]), append(e, T);
	}, (e) => {
		var b = root_3$6();
		append(e, b);
	});
	var O = sibling(D, 2), k = (e) => {
		var x = root_4$2();
		x.__click = [
			on_click_1$1,
			S,
			b
		];
		var C = child(x);
		reset(x), template_effect(() => set_text(C, `${S() ? "–" : "+"}${b.images.length - b.limit}`)), append(e, x);
	};
	if_block(O, (e) => {
		x() && b.limit && b.images.length > b.limit && e(k);
	}), reset(T), template_effect((e) => E = set_class(T, 1, "cl-images", null, E, e), [() => ({ "cl-selectable": x() })]), append(e, T), pop();
}
delegate(["click"]);
var root_1$9 = /* @__PURE__ */ from_html("<h3> </h3> <p><!></p>", 1), root_4$1 = /* @__PURE__ */ from_html("<form><input type=\"text\"/> <a href=\"javascript:void(0)\" class=\"btn\"><!></a></form>"), on_click$2 = (e, b) => {
	set(b, !0);
}, root_6$1 = /* @__PURE__ */ from_html("<a href=\"javascript:void(0)\" class=\"btn is-edit\" title=\"Rename\"><!></a>"), root_5$3 = /* @__PURE__ */ from_html("<span> </span> <!>", 1), root_8$1 = /* @__PURE__ */ from_html("<!> <!>", 1), root_7$3 = /* @__PURE__ */ from_html("<p><!></p>"), root_10 = /* @__PURE__ */ from_html("<p><!></p>"), root_3$5 = /* @__PURE__ */ from_html("<div class=\"cl-propinfo\"><div class=\"cl-cluster-title\"><!></div> <p> </p> <!></div>"), root_14 = /* @__PURE__ */ from_html("<img alt=\"mask\" class=\"mask\"/>"), root_11 = /* @__PURE__ */ from_html("<div class=\"cl-protoinfo\"><p><!></p> <div class=\"cl-proto\"><img alt=\"cl-proto\" class=\"prototype\"/> <!></div></div>"), on_click_1 = (e, b) => b(!0), root_15 = /* @__PURE__ */ from_html("<a class=\"cl-overlay cl-hoveroptions\" href=\"javascript:void(0)\"><!> <!></a>"), root$12 = /* @__PURE__ */ from_html("<div><div class=\"cl-anchor\"></div> <div class=\"cl-props\"><div class=\"cl-propcontent\"><!> <!></div> <!></div> <div class=\"cl-samples\"><!></div></div>");
function ClusterElement(e, b) {
	push(b, !0);
	let x = prop(b, "cluster", 7), S = prop(b, "expanded", 7, !1), C = prop(b, "editing", 15, !1), w = prop(b, "editable", 3, !1), T = prop(b, "dti_transformed", 15, !1), E = prop(b, "thumbnail", 3, !1), D = prop(b, "selected", 3, !1), O = /* @__PURE__ */ state(!1), k = /* @__PURE__ */ state(void 0), A = /* @__PURE__ */ state(void 0), j = getEditorState(), M = getNameProvider(), N = {
		grid: 8,
		rows: 18
	}, P = /* @__PURE__ */ user_derived(() => N[j.viewer_display]), F = /* @__PURE__ */ state(proxy([]));
	function I(e) {
		e.preventDefault();
		let b = get$2(A)?.value;
		b && (x().name = b), set(O, !1);
	}
	function L() {
		j.ask_cluster("cluster_merge", x().id);
	}
	let R = () => {
		setTimeout(() => get$2(k)?.scrollIntoView({
			behavior: "smooth",
			block: "center"
		}), 100);
	};
	user_effect(() => {
		C() && R();
	}), user_effect(() => {
		x().images.length, set(F, M.sortImages(x().images), !0);
	});
	var z = root$12();
	let B;
	var V = child(z);
	bind_this(V, (e) => set(k, e), () => get$2(k));
	var H = sibling(V, 2), U = child(H), W = child(U), G = (e) => {
		var b = root_1$9(), S = first_child(b), C = child(S, !0);
		reset(S);
		var w = sibling(S, 2), T = child(w), E = (e) => {
			var b = text();
			template_effect(() => set_text(b, `Cluster #${x().id ?? ""}, ${x().images.length ?? ""} images`)), append(e, b);
		};
		if_block(T, (e) => {
			x().id >= 0 && e(E);
		}), reset(w), template_effect(() => set_text(C, x().name)), append(e, b);
	}, K = (e) => {
		var b = root_3$5(), S = child(b), T = child(S), E = (e) => {
			var b = root_4$1(), S = child(b);
			autofocus(S, !0), bind_this(S, (e) => set(A, e), () => get$2(A));
			var C = sibling(S, 2);
			C.__click = I;
			var w = child(C);
			Icon(w, { icon: "mdi:check-bold" }), reset(C), reset(b), template_effect(() => S.defaultValue = x().name), event("submit", b, I), append(e, b);
		}, D = (e) => {
			var b = root_5$3(), S = first_child(b), w = child(S, !0);
			reset(S);
			var T = sibling(S, 2), E = (e) => {
				var b = root_6$1();
				b.__click = [on_click$2, O];
				var x = child(b);
				Icon(x, { icon: "mdi:edit" }), reset(b), append(e, b);
			};
			if_block(T, (e) => {
				C() && e(E);
			}), template_effect(() => set_text(w, x().name)), append(e, b);
		};
		if_block(T, (e) => {
			get$2(O) && C() ? e(E) : e(D, !1);
		}), reset(S);
		var k = sibling(S, 2), j = child(k, !0);
		reset(k);
		var M = sibling(k, 2), N = (e) => {
			var b = root_7$3(), x = child(b), S = (e) => {
				var b = root_8$1(), x = first_child(b);
				IconBtn(x, {
					icon: "mdi:merge",
					label: "Merge cluster with...",
					onclick: L
				});
				var S = sibling(x, 2);
				IconBtn(S, {
					icon: "mdi:check-bold",
					label: "End edition",
					onclick: () => C(!1)
				}), append(e, b);
			}, w = (e) => {
				IconBtn(e, {
					icon: "mdi:edit",
					label: "Edit cluster",
					onclick: () => C(!0)
				});
			};
			if_block(x, (e) => {
				C() ? e(S) : e(w, !1);
			}), reset(b), append(e, b);
		}, P = (e) => {
			var b = root_10(), S = child(b);
			{
				let e = /* @__PURE__ */ user_derived(() => [x()]);
				ClusterCSVExporter(S, { get clusters() {
					return get$2(e);
				} });
			}
			reset(b), append(e, b);
		};
		if_block(M, (e) => {
			w() ? e(N) : e(P, !1);
		}), reset(b), template_effect(() => set_text(j, x().id >= 0 && `Cluster #${x().id}, ${x().images.length} images`)), append(e, b);
	};
	if_block(W, (e) => {
		E() ? e(G) : e(K, !1);
	});
	var q = sibling(W, 2), J = (e) => {
		var b = root_11(), S = child(b), C = child(S), w = (e) => {
			IconBtn(e, {
				icon: "mdi:image",
				class: "is-outline",
				label: "Show images",
				onclick: () => {
					T(!1);
				}
			});
		}, E = (e) => {
			IconBtn(e, {
				icon: "mdi:panorama-variant",
				class: "is-outline",
				label: "Show protos",
				onclick: () => {
					T(!0);
				}
			});
		};
		if_block(C, (e) => {
			T() ? e(w) : e(E, !1);
		}), reset(S);
		var D = sibling(S, 2), O = child(D), k = sibling(O, 2), A = (e) => {
			var b = root_14();
			template_effect(() => set_attribute(b, "src", (j.base_url || "") + x().mask_url)), append(e, b);
		};
		if_block(k, (e) => {
			x().mask_url && e(A);
		}), reset(D), reset(b), template_effect(() => set_attribute(O, "src", (j.base_url || "") + x().proto_url)), append(e, b);
	};
	if_block(q, (e) => {
		!E() && x().proto_url && e(J);
	}), reset(U);
	var Y = sibling(U, 2), X = (e) => {
		var b = root_15();
		b.__click = [on_click_1, C];
		var x = child(b);
		IconBtn(x, {
			icon: "mdi:edit",
			label: "Edit cluster"
		});
		var S = sibling(x, 2);
		IconBtn(S, {
			icon: "mdi:merge",
			label: "Merge with...",
			onclick: (e) => {
				e.stopPropagation(), L();
			}
		}), reset(b), append(e, b);
	};
	if_block(Y, (e) => {
		w() && !C() && e(X);
	}), reset(H);
	var Z = sibling(H, 2), Q = child(Z);
	{
		let e = /* @__PURE__ */ user_derived(() => S() && !C() ? void 0 : get$2(P));
		ImageList(Q, {
			get selectable() {
				return C();
			},
			get images() {
				return get$2(F);
			},
			get dti_transformed() {
				return T();
			},
			get limit() {
				return get$2(e);
			},
			onexpand: () => R(),
			get disable_all() {
				return E();
			},
			get expanded() {
				return S();
			},
			set expanded(e) {
				S(e);
			}
		});
	}
	reset(Z), reset(z), template_effect((e) => B = set_class(z, 1, "cl-cluster box", null, B, e), [() => ({
		"cl-expanded": S() || C(),
		"cl-selected": D() || C()
	})]), append(e, z), pop();
}
delegate(["click"]);
var on_click$1 = (e, b, x) => set(b, get$2(x), !0), root_7$2 = /* @__PURE__ */ from_html("<div class=\"cl-ask-cluster\"><a href=\"javascript:void(0)\"><!></a></div>"), root_3$4 = /* @__PURE__ */ from_html("<div class=\"modal-card-head\"><!> <!></div> <div class=\"modal-card-body\"><div class=\"cl-ask-cluster\"><!></div> <div class=\"cl-ask-select\"><div class=\"cl-ask-list\"></div></div></div> <div class=\"modal-card-foot cl-modale-actions\"><p><!> <!></p></div>", 1), root_2$5 = /* @__PURE__ */ from_html("<div><!> <!></div>");
function ClusterAskModale(e, b) {
	push(b, !0);
	let x = /* @__PURE__ */ state(null), S = /* @__PURE__ */ state(!0), C = getEditorState(), w = /* @__PURE__ */ user_derived(() => C.content.clusters[b.exclude_cluster_id]), T = /* @__PURE__ */ user_derived(() => b.for_action == "cluster_merge" ? {
		action_icon: "mdi:merge",
		action_label: "Merge whole clusters",
		action_title: "Select target cluster to merge with:",
		action_cluster: {
			...get$2(w),
			name: "Selected cluster: " + get$2(w)?.name
		}
	} : {
		action_icon: "mdi:folder-move",
		action_label: "Move selected images to...",
		action_title: "Select target cluster to move images:",
		action_cluster: {
			id: -1,
			name: "Selected images",
			images: C.content.clusters[b.exclude_cluster_id]?.images.filter((e) => C.image_selection.has(e.id)) ?? []
		}
	}), E = /* @__PURE__ */ user_derived(() => get$2(T).action_icon), D = /* @__PURE__ */ user_derived(() => get$2(T).action_label), O = /* @__PURE__ */ user_derived(() => get$2(T).action_title), k = /* @__PURE__ */ user_derived(() => get$2(T).action_cluster), A = /* @__PURE__ */ user_derived(() => [...b.clusters.filter((e) => e.id != b.exclude_cluster_id), ...b.for_action == "selection_move" ? [{
		id: -1,
		name: "New cluster",
		images: []
	}] : []]);
	function j() {
		C.ask_cluster_choice(get$2(x).id);
	}
	function M() {
		return C.askingCluster !== null;
	}
	function N(e) {
		C.askingCluster = e ? C.askingCluster : null;
	}
	var P = comment(), F = first_child(P), I = M, L = N;
	component(F, () => Dialog, (e, b) => {
		b(e, {
			get open() {
				return I();
			},
			set open(e) {
				L(e);
			},
			children: (e, b) => {
				var w = comment(), T = first_child(w);
				component(T, () => Portal, (e, b) => {
					b(e, {
						children: (e, b) => {
							var w = root_2$5();
							let T;
							var N = child(w);
							component(N, () => Dialog_overlay, (e, b) => {
								b(e, { class: "modal-background" });
							});
							var P = sibling(N, 2);
							component(P, () => Dialog_content, (e, b) => {
								b(e, {
									class: "modal-card cl-ask-modal",
									children: (e, b) => {
										var w = root_3$4(), T = first_child(w), M = child(T);
										component(M, () => Dialog_title, (e, b) => {
											b(e, {
												class: "modal-card-title",
												children: (e, b) => {
													next();
													var x = text();
													template_effect(() => set_text(x, get$2(O))), append(e, x);
												},
												$$slots: { default: !0 }
											});
										});
										var N = sibling(M, 2);
										component(N, () => Dialog_close, (e, b) => {
											b(e, {
												class: "modal-card-close",
												children: (e, b) => {
													Icon(e, {
														icon: "mdi:close",
														onclick: () => set(S, !1)
													});
												},
												$$slots: { default: !0 }
											});
										}), reset(T);
										var P = sibling(T, 2), F = child(P), I = child(F), L = (e) => {
											ClusterElement(e, {
												thumbnail: !0,
												get cluster() {
													return get$2(k);
												},
												selected: !0
											});
										};
										if_block(I, (e) => {
											get$2(k).id !== void 0 && e(L);
										}), reset(F);
										var R = sibling(F, 2), z = child(R);
										each(z, 21, () => get$2(A), (e) => e.id, (e, b, S, C) => {
											var w = root_7$2(), T = child(w);
											T.__click = [
												on_click$1,
												x,
												b
											];
											var E = child(T);
											{
												let e = /* @__PURE__ */ user_derived(() => get$2(x)?.id == get$2(b).id);
												ClusterElement(E, {
													thumbnail: !0,
													get cluster() {
														return get$2(b);
													},
													get selected() {
														return get$2(e);
													}
												});
											}
											reset(T), reset(w), append(e, w);
										}), reset(z), reset(R), reset(P);
										var B = sibling(P, 2), V = child(B), H = child(V);
										IconBtn(H, {
											onclick: () => {
												C.askingCluster = null;
											},
											icon: "mdi:close",
											label: "Cancel",
											class: "is-outline"
										});
										var U = sibling(H, 2);
										{
											let e = /* @__PURE__ */ user_derived(() => get$2(x) === null);
											IconBtn(U, {
												onclick: j,
												get icon() {
													return get$2(E);
												},
												get label() {
													return get$2(D);
												},
												get disabled() {
													return get$2(e);
												}
											});
										}
										reset(V), reset(B), append(e, w);
									},
									$$slots: { default: !0 }
								});
							}), reset(w), template_effect((e) => T = set_class(w, 1, "modal", null, T, e), [() => ({ "is-active": M() })]), append(e, w);
						},
						$$slots: { default: !0 }
					});
				}), append(e, w);
			},
			$$slots: { default: !0 }
		});
	}), append(e, P), pop();
}
delegate(["click"]);
var root_4 = /* @__PURE__ */ from_html("<!> <!>", 1), root_5$2 = /* @__PURE__ */ from_html("<div class=\"toolbar-item toolbar-btn\"><label class=\"label\">Actions on selection:</label> <!></div>"), root_2$4 = /* @__PURE__ */ from_html("<div class=\"toolbar-item cl-select-tools\"><label class=\"label\"> </label> <div class=\"field\"><!></div></div> <!>", 1), root_1$8 = /* @__PURE__ */ from_html("<div class=\"toolbar-content cl-editor-tools\"><!> <div class=\"toolbar-item toolbar-btn\"><!></div> <div class=\"toolbar-item toolbar-btn\"><!></div></div>"), root$11 = /* @__PURE__ */ from_html("<div><div class=\"toolbar cl-editor-toolbar\"><div class=\"toolbar-content\"><h2> </h2> <div class=\"toolbar-item\"><label class=\"label\">Sort by:</label> <div class=\"field is-narrow\"><div class=\"select\"><select><option>Size</option><option>ID</option><option>Name</option></select></div></div></div> <div class=\"toolbar-item\"><label class=\"label\">Display:</label> <div class=\"field is-narrow\"><div class=\"select\"><select><option>Grid</option><option>Rows</option></select></div></div></div> <!></div></div> <div><!> <div class=\"cl-cluster box cl-filler\"></div> <div class=\"cl-cluster box cl-filler\"></div> <div class=\"cl-cluster box cl-filler\"></div> <div class=\"cl-cluster box cl-filler\"></div> <div class=\"cl-cluster box cl-filler\"></div></div> <!></div> <!>", 1);
function ClusterApp(e, b) {
	push(b, !0);
	let x = prop(b, "formfield", 7), S = proxy(new ClusterEditorState(b.clustering_data, b.base_url));
	setEditorState(S);
	let C = proxy({});
	getMagnifyingContext() || setMagnifyingContext(C);
	let w = /* @__PURE__ */ user_derived(() => ({
		size: (e, b) => b.images.length - e.images.length,
		id: (e, b) => e.id - b.id,
		name: (e, b) => e.name.localeCompare(b.name)
	})[S.viewer_sort]), T = /* @__PURE__ */ user_derived(() => Object.values(S.content.clusters).sort(get$2(w)));
	function E() {
		x() && (x().value = JSON.stringify(S.content), x().form?.submit()), S.editing = !1;
	}
	var D = root$11(), O = first_child(D);
	let k;
	var A = child(O), j = child(A), M = child(j), N = child(M);
	reset(M);
	var P = sibling(M, 2), F = sibling(child(P), 2), I = child(F), L = child(I), R = child(L);
	R.value = R.__value = "size";
	var z = sibling(R);
	z.value = z.__value = "id";
	var B = sibling(z);
	B.value = B.__value = "name", reset(L), reset(I), reset(F), reset(P);
	var V = sibling(P, 2), H = sibling(child(V), 2), U = child(H), W = child(U), G = child(W);
	G.value = G.__value = "grid";
	var K = sibling(G);
	K.value = K.__value = "rows", reset(W), reset(U), reset(H), reset(V);
	var q = sibling(V, 2), J = (e) => {
		var b = root_1$8(), C = child(b), w = (e) => {
			var b = root_2$4(), x = first_child(b), C = child(x), w = child(C);
			reset(C);
			var T = sibling(C, 2), E = child(T), D = (e) => {
				IconBtn(e, {
					onclick: () => {
						S.select_images("all");
					},
					icon: "mdi:select-all",
					label: "All"
				});
			}, O = (e) => {
				var b = root_4(), x = first_child(b);
				IconBtn(x, {
					onclick: () => {
						S.select_images("none");
					},
					icon: "mdi:close",
					label: "Clear"
				});
				var C = sibling(x, 2);
				IconBtn(C, {
					onclick: () => {
						S.select_images("invert");
					},
					icon: "mdi:select-inverse",
					label: "Invert"
				}), append(e, b);
			};
			if_block(E, (e) => {
				S.image_selection.size == 0 ? e(D) : e(O, !1);
			}), reset(T), reset(x);
			var k = sibling(x, 2), A = (e) => {
				var b = root_5$2(), x = sibling(child(b), 2);
				IconBtn(x, {
					onclick: () => {
						S.ask_cluster("selection_move", S.editingCluster);
					},
					icon: "mdi:folder-move",
					label: "Move to cluster..."
				}), reset(b), append(e, b);
			};
			if_block(k, (e) => {
				S.image_selection.size > 0 && e(A);
			}), template_effect(() => set_text(w, `Selection (${S.image_selection.size ?? ""}):`)), append(e, b);
		};
		if_block(C, (e) => {
			S.editingCluster !== null && e(w);
		});
		var D = sibling(C, 2), O = child(D), k = (e) => {
			{
				let b = /* @__PURE__ */ user_derived(() => x() ? "Save" : "Apply");
				IconBtn(e, {
					onclick: E,
					icon: "mdi:content-save",
					class: "big is-link",
					get label() {
						return get$2(b);
					}
				});
			}
		}, A = (e) => {
			IconBtn(e, {
				onclick: () => {
					S.editing = !0;
				},
				class: "big is-link",
				icon: "mdi:edit",
				label: "Edit"
			});
		};
		if_block(O, (e) => {
			S.editing ? e(k) : e(A, !1);
		}), reset(D);
		var j = sibling(D, 2), M = child(j);
		ClusterCSVExporter(M, { get clusters() {
			return get$2(T);
		} }), reset(j), reset(b), append(e, b);
	};
	if_block(q, (e) => {
		b.editable && e(J);
	}), reset(j), reset(A);
	var Y = sibling(A, 2), X = child(Y);
	each(X, 17, () => get$2(T), (e) => e.id, (e, b) => {
		var x = () => S.editingCluster == get$2(b).id, C = (e) => S.editingCluster = e ? get$2(b).id : null;
		ClusterElement(e, {
			get editing() {
				return x();
			},
			set editing(e) {
				C(e);
			},
			get cluster() {
				return get$2(b);
			},
			get editable() {
				return S.editing;
			}
		});
	}), next(10), reset(Y);
	var Z = sibling(Y, 2), Q = (e) => {
		ClusterAskModale(e, spread_props(() => S.askingCluster, { get clusters() {
			return get$2(T);
		} }));
	};
	if_block(Z, (e) => {
		S.askingCluster !== null && e(Q);
	}), reset(O);
	var $ = sibling(O, 2);
	ImageMagnifier($, {}), template_effect((e) => {
		k = set_class(O, 1, "", null, k, e), set_text(N, `Cluster ${S.editing ? "Editor" : "Viewer"}`), set_class(Y, 1, "cl-cluster-list cl-display-" + S.viewer_display);
	}, [() => ({ "cl-editor": S.editing })]), bind_select_value(L, () => S.viewer_sort, (e) => S.viewer_sort = e), bind_select_value(W, () => S.viewer_display, (e) => S.viewer_display = e), append(e, D), pop();
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
		clusters: Object.fromEntries(Object.entries(e.clusters).map(([e, b]) => [parseInt(e), {
			...b,
			images: b.images.map(unserializeImageInfo)
		}])),
		background_urls: e.background_urls
	};
}
var root_8 = /* @__PURE__ */ from_html("<div><span class=\"label\"> </span> <progress class=\"progress is-link bar\"></progress></div>"), root_7$1 = /* @__PURE__ */ from_html("<div class=\"tck-bar-list\"></div>"), root_6 = /* @__PURE__ */ from_html("<span> </span> <!> <pre> </pre>", 1), root$10 = /* @__PURE__ */ from_html("<div class=\"tck-progress\"><!></div>");
function ProgressTracker(e, b) {
	push(b, !0);
	let x = /* @__PURE__ */ state(null), S = /* @__PURE__ */ user_derived(() => get$2(x)?.log?.errors?.join("\n")), C;
	function w() {
		fetch(b.tracking_url).then((e) => e.json()).then((e) => {
			set(x, e, !0), get$2(x).is_finished ? window.location.reload() : C = setTimeout(w, 1e3);
		}).catch((e) => {
			e = e.toString(), C = setTimeout(w, 1e3);
		});
	}
	user_effect(() => (w(), () => clearTimeout(C)));
	var T = root$10(), E = child(T), D = (e) => {
		var b = text();
		template_effect(() => set_text(b, get$2(S))), append(e, b);
	}, O = (e) => {
		var b = comment(), S = first_child(b), C = (e) => {
			var b = text("Done!");
			append(e, b);
		}, w = (e) => {
			var b = comment(), S = first_child(b), C = (e) => {
				var b = text("Loading...");
				append(e, b);
			}, w = (e) => {
				var b = root_6(), S = first_child(b), C = child(S, !0);
				reset(S);
				var w = sibling(S, 2), T = (e) => {
					var b = root_7$1();
					each(b, 21, () => get$2(x).log.progress, index, (e, b) => {
						var x = root_8(), S = child(x), C = child(S);
						reset(S);
						var w = sibling(S, 2);
						reset(x), template_effect(() => {
							set_text(C, `${get$2(b).context ?? ""} ${get$2(b).current ?? ""}/${get$2(b).total ?? ""}`), set_value(w, get$2(b).current), set_attribute(w, "max", get$2(b).total);
						}), append(e, x);
					}), reset(b), append(e, b);
				};
				if_block(w, (e) => {
					get$2(x).log?.progress && e(T);
				});
				var E = sibling(w, 2), D = child(E, !0);
				reset(E), template_effect((e) => {
					set_class(S, 1, `mb-3 tag status status-${get$2(x).status ?? ""}`), set_text(C, get$2(x).status), set_text(D, e);
				}, [() => get$2(x).status == "PENDING" ? "Waiting for worker..." : get$2(x).log?.infos?.join("\n")]), append(e, b);
			};
			if_block(S, (e) => {
				get$2(x) === null ? e(C) : e(w, !1);
			}, !0), append(e, b);
		};
		if_block(S, (e) => {
			get$2(x)?.is_finished ? e(C) : e(w, !1);
		}, !0), append(e, b);
	};
	if_block(E, (e) => {
		get$2(S) ? e(D) : e(O, !1);
	}), reset(T), append(e, T), pop();
}
function unserializeSimilarityIndex(e) {
	let b = Object.fromEntries(Object.entries(e.sources).map(([e, b]) => [e, {
		name: b.metadata?.name || b.uid,
		...b
	}])), x = e.images.map((e, x) => ({
		id: e.id,
		num: x,
		src: e.src,
		url: e.url,
		document: b[e.doc_uid],
		metadata: e.metadata || {}
	}));
	return {
		sources: Object.values(b),
		images: x,
		transpositions: e.transpositions || ["none"]
	};
}
function unserializeSimilarityMatrix(e, b) {
	let x = unserializeSimilarityIndex(b), S = x.images.map(() => []);
	return e.forEach(([e, b, x]) => {
		S[b].push({
			similarity: x,
			best_source_flip: 0,
			best_query_flip: 0,
			query_index: b,
			source_index: e
		}), S[e].push({
			similarity: x,
			best_source_flip: 0,
			best_query_flip: 0,
			query_index: e,
			source_index: b
		});
	}), {
		matches: unserializeImageMatches(S, x, x),
		index: x
	};
}
function unserializeImageMatches(e, b, x) {
	let S = [];
	for (let C = 0; C < e.length; C++) {
		let w = x.images[C], T = e[C].map((e) => ({
			image: b.images[e.source_index],
			similarity: e.similarity,
			q_transposition: x.transpositions[e.best_query_flip],
			m_transposition: b.transpositions[e.best_source_flip]
		})).sort((e, b) => b.similarity - e.similarity), E = {}, D = [];
		T.forEach((e) => {
			if (!E[e.image.document.uid]) {
				let b = [];
				E[e.image.document.uid] = b, D.push(b);
			}
			E[e.image.document.uid].push(e);
		}), S.push({
			query: w,
			matches: T,
			matches_by_document: D
		});
	}
	return S.sort((e, b) => b.matches[0].similarity - e.matches[0].similarity);
}
function unserializeSearchResults(e, b) {
	console.log(b, e);
	let x = unserializeSimilarityIndex(e), S = unserializeSimilarityIndex(b.query), C = S.images.map(() => []);
	b.pairs.forEach(([e, b, x]) => {
		C[b].push({
			similarity: x,
			best_source_flip: 0,
			best_query_flip: 0,
			query_index: b,
			source_index: e
		});
	});
	let w = unserializeImageMatches(C, x, S);
	return {
		source_index: x,
		query_index: S,
		matches: w
	};
}
function connectedComponents(e, b, x) {
	let S = /* @__PURE__ */ new Map();
	for (let x of e.edges) {
		if (x.weight < b) continue;
		let e = S.get(x.source) || S.get(x.target) || { id: x.source };
		for (; e?.merged;) e = e.merged;
		let C = S.get(x.target);
		for (; C?.merged;) C = C.merged;
		C && e !== C && (C.merged = e), S.set(x.source, e), S.set(x.target, e);
	}
	let C = /* @__PURE__ */ new Map(), w = [];
	for (let e = 0; e < x; e++) {
		let b = S.get(e);
		for (; b?.merged;) b = b.merged;
		if (!b) {
			w.push(e);
			continue;
		}
		C.has(b.id) || C.set(b.id, {
			id: C.size,
			members: []
		}), C.get(b.id).members.push(e);
	}
	return w.length > 0 && C.set(-1, {
		id: -1,
		members: w
	}), Array.from(C.values());
}
function graphFromSimilarityMatches(e, b) {
	let x = [], S = /* @__PURE__ */ new Map();
	for (let [b, x] of e.images.entries()) S.set(x.id, b);
	for (let e of b) {
		let b = S.get(e.query.id);
		for (let C of e.matches) {
			let e = S.get(C.image.id);
			x.push({
				source: b,
				target: e,
				weight: C.similarity
			});
		}
	}
	return { edges: x };
}
function convertToClusteringFile(e, b, x) {
	let S = /* @__PURE__ */ new Map();
	for (let e of x) S.set(e.id, e);
	let C = /* @__PURE__ */ new Map();
	for (let [b, x] of S) {
		let w = x.members.map((b) => {
			let x = e.images[b];
			return {
				...x,
				raw_url: x.url,
				path: x.url,
				name: x.name || ""
			};
		}), T = b >= 0 ? b + 1 : S.size + 1;
		C.set(T, {
			id: T,
			name: b >= 0 ? `Cluster ${b + 1}` : "Unclustered",
			images: w
		});
	}
	return {
		clusters: Object.fromEntries(C),
		background_urls: e.sources.map((e) => e.src)
	};
}
var root_1$7 = /* @__PURE__ */ from_html("<div class=\"cl-image card\"><!></div>"), root_2$3 = /* @__PURE__ */ from_html("<p>∅</p>"), root$9 = /* @__PURE__ */ from_html("<div class=\"cl-cluster box\"><div class=\"cl-anchor\"></div> <div class=\"cl-props\"><div class=\"cl-propcontent\"><div class=\"cl-propinfo\"><p class=\"cl-cluster-title\"><span> </span></p></div></div></div> <div class=\"cl-samples\"><div class=\"cl-images cl-limitheight\"></div></div></div>");
function ClusterPreviewBlock(e, b) {
	push(b, !0);
	var x = root$9(), S = sibling(child(x), 2), C = child(S), w = child(C), T = child(w), E = child(T), D = child(E);
	reset(E), reset(T), reset(w), reset(C), reset(S);
	var O = sibling(S, 2), k = child(O);
	each(k, 20, () => b.cluster.members, (e) => e, (e, x) => {
		var S = root_1$7(), C = child(S);
		ImageFileDisplay(C, { get image() {
			return b.index.images[x];
		} }), reset(S), append(e, S);
	}, (e) => {
		var b = root_2$3();
		append(e, b);
	}), reset(k), reset(O), reset(x), template_effect(() => set_text(D, `${b.cluster.id >= 0 ? `Cluster ${b.cluster.id}` : "Unclustered"} (${b.cluster.members.length ?? ""})`)), append(e, x), pop();
}
var root_3$3 = /* @__PURE__ */ from_html("<div class=\"toolbar-item\"><label class=\"label is-expanded\" for=\"clustering-threshold\">Clustering threshold:</label> <div class=\"field\"><div class=\"control\"><input type=\"range\"/></div> <div class=\"control\"><input type=\"number\" class=\"input\" id=\"clustering-threshold\"/></div></div></div>"), root_1$6 = /* @__PURE__ */ from_html("<div class=\"toolbar\"><div class=\"toolbar-content\"><!> <!> <div class=\"toolbar-item toolbar-btn\"><!></div></div></div>"), root_7 = /* @__PURE__ */ from_html("<div><!> <div class=\"cl-cluster box cl-filler\"></div> <div class=\"cl-cluster box cl-filler\"></div> <div class=\"cl-cluster box cl-filler\"></div> <div class=\"cl-cluster box cl-filler\"></div> <div class=\"cl-cluster box cl-filler\"></div></div>"), root$8 = /* @__PURE__ */ from_html("<!> <div><!></div> <div class=\"mt-4\"></div>", 1);
function ClusteringTool(e, b) {
	push(b, !0);
	let x = /* @__PURE__ */ state(!1), S = /* @__PURE__ */ user_derived(() => Math.min(...b.matches.map((e) => Math.min(...e.matches.map((e) => e.similarity))))), C = /* @__PURE__ */ user_derived(() => Math.max(...b.matches.map((e) => Math.max(...e.matches.map((e) => e.similarity))))), w = /* @__PURE__ */ state(get$2(S) + .8 * (get$2(C) - get$2(S))), T = /* @__PURE__ */ user_derived(() => graphFromSimilarityMatches(b.index, b.matches)), E = /* @__PURE__ */ state(proxy([]));
	user_effect(() => {
		get$2(w), untrack(() => {
			set(E, connectedComponents(get$2(T), get$2(w), b.index.images.length), !0);
		});
	});
	var D = root$8(), O = first_child(D), k = (e) => {
		var T = root_1$6(), E = child(T), D = child(E), O = (e) => {
			var x = comment(), S = first_child(x);
			snippet(S, () => b.extra_toolbar_items), append(e, x);
		};
		if_block(D, (e) => {
			b.extra_toolbar_items && e(O);
		});
		var k = sibling(D, 2), A = (e) => {
			var b = root_3$3(), x = sibling(child(b), 2), T = child(x), E = child(T);
			remove_input_defaults(E), set_attribute(E, "step", .001), reset(T);
			var D = sibling(T, 2), O = child(D);
			remove_input_defaults(O), reset(D), reset(x), reset(b), template_effect(() => {
				set_attribute(E, "min", get$2(S)), set_attribute(E, "max", get$2(C));
			}), bind_value(E, () => get$2(w), (e) => set(w, e)), bind_value(O, () => get$2(w), (e) => set(w, e)), append(e, b);
		};
		if_block(k, (e) => {
			get$2(x) || e(A);
		});
		var j = sibling(k, 2), M = child(j), N = (e) => {
			IconBtn(e, {
				icon: "mdi:autorenew",
				onclick: () => set(x, !1),
				label: "Redo automatic clustering"
			});
		}, P = (e) => {
			IconBtn(e, {
				class: "is-link",
				icon: "mdi:check-bold",
				onclick: () => set(x, !0),
				label: "Apply clustering"
			});
		};
		if_block(M, (e) => {
			get$2(x) ? e(N) : e(P, !1);
		}), reset(j), reset(E), reset(T), append(e, T);
	};
	if_block(O, (e) => {
		b.visible && e(k);
	});
	var A = sibling(O, 2);
	let j;
	var M = child(A), N = (e) => {
		{
			let x = /* @__PURE__ */ user_derived(() => convertToClusteringFile(b.index, b.matches, get$2(E)));
			ClusterApp(e, {
				get clustering_data() {
					return get$2(x);
				},
				editable: !0
			});
		}
	}, P = (e) => {
		var x = root_7();
		set_class(x, 1, "cl-cluster-list cl-display-grid");
		var S = child(x);
		each(S, 17, () => get$2(E), (e) => e.id, (e, x) => {
			ClusterPreviewBlock(e, {
				get cluster() {
					return get$2(x);
				},
				get index() {
					return b.index;
				}
			});
		}), next(10), reset(x), append(e, x);
	};
	if_block(M, (e) => {
		get$2(x) ? e(N) : e(P, !1);
	}), reset(A), next(2), template_effect((e) => j = set_class(A, 1, "cluster-viewer", null, j, e), [() => ({
		"viewer-table": !get$2(x),
		hidden: !b.visible
	})]), append(e, D), pop();
}
var root_5$1 = /* @__PURE__ */ from_html("<div>...</div>"), root_3$2 = /* @__PURE__ */ from_html("<!> <!>", 1), root_1$5 = /* @__PURE__ */ from_html("<!> <!> <!>", 1);
function Pagination_1(e, b) {
	push(b, !0);
	let x = prop(b, "page", 15);
	var S = comment(), C = first_child(S);
	{
		let e = (e, b) => {
			let x = () => b?.().pages;
			var S = root_1$5(), C = first_child(S);
			component(C, () => Pagination_prev_button, (e, b) => {
				b(e, {
					class: "pagination-ctrl button",
					children: (e, b) => {
						Icon(e, { icon: "mdi:chevron-left" });
					},
					$$slots: { default: !0 }
				});
			});
			var w = sibling(C, 2);
			each(w, 17, x, (e) => e.key, (e, b, x, S) => {
				var C = root_3$2(), w = first_child(C), T = (e) => {
					var x = comment(), S = first_child(x);
					component(S, () => Pagination_page, (e, x) => {
						x(e, {
							get page() {
								return get$2(b);
							},
							class: "pagination-ctrl button"
						});
					}), append(e, x);
				};
				if_block(w, (e) => {
					get$2(b).type === "page" && e(T);
				});
				var E = sibling(w, 2), D = (e) => {
					var b = root_5$1();
					append(e, b);
				};
				if_block(E, (e) => {
					get$2(b).type === "ellipsis" && e(D);
				}), append(e, C);
			});
			var T = sibling(w, 2);
			component(T, () => Pagination_next_button, (e, b) => {
				b(e, {
					class: "pagination-ctrl button",
					children: (e, b) => {
						Icon(e, { icon: "mdi:chevron-right" });
					},
					$$slots: { default: !0 }
				});
			}), append(e, S);
		};
		component(C, () => Pagination, (S, C) => {
			C(S, {
				get count() {
					return b.total_pages;
				},
				class: "pagination",
				get page() {
					return x();
				},
				set page(e) {
					x(e);
				},
				children: e,
				$$slots: { default: !0 }
			});
		});
	}
	append(e, S), pop();
}
function MatchCSVExporter(e, b) {
	push(b, !0);
	let x = getNameProvider();
	async function* S() {
		let e = /* @__PURE__ */ new Set(), S = b.matches.matches.filter((e) => !b.threshold || e.similarity >= b.threshold);
		S.unshift({
			image: b.matches.query,
			similarity: 1,
			q_transposition: "none",
			m_transposition: "none"
		}), S.forEach((b) => {
			Object.keys(b.image.document?.metadata || {}).forEach((b) => e.add(b)), Object.keys(b.image.metadata || {}).forEach((b) => e.add(b));
		}), yield [
			"Image",
			"Source",
			"Similarity",
			"Document",
			"Document URL",
			...Array.from(e).map((e) => (e.charAt(0).toUpperCase() + e.slice(1)).replace(/[^\w\s]/g, " "))
		];
		for (let b of S) {
			let S = Array.from(e).map((e) => (b.image.metadata || b.image.document?.metadata || {})[e] || "");
			yield [
				x.getImageName(b.image),
				b.image.src || b.image.id,
				b.similarity,
				x.getSourceName(b.image.document),
				b.image.document?.src || "",
				...S
			];
		}
	}
	CSVExporter(e, {
		iterRows: S,
		filename: "similarity-matches.csv"
	}), pop();
}
var root_2$2 = /* @__PURE__ */ from_html("<!> ", 1), root_1$4 = /* @__PURE__ */ from_html("<div class=\"match-group\"><div><p><!></p> <div class=\"columns is-multiline match-items\"></div> <!></div></div>");
function MatchGroup(e, b) {
	push(b, !0);
	let x = /* @__PURE__ */ state(!1);
	var S = comment(), C = first_child(S), w = (e) => {
		var S = root_1$4(), C = child(S), w = child(C), T = child(w), E = (e) => {
			var x = root_2$2(), S = first_child(x);
			Icon(S, { icon: "mdi:folder" });
			var C = sibling(S);
			template_effect(() => set_text(C, ` ${(b.matches[0].image.document?.name || b.matches[0].image.document?.uid) ?? ""}`)), append(e, x);
		}, D = (e) => {
			ImageInfos(e, { get image() {
				return b.matches[0].image;
			} });
		};
		if_block(T, (e) => {
			b.grouped ? e(E) : e(D, !1);
		}), reset(w);
		var O = sibling(w, 2);
		each(O, 23, () => b.matches, (e) => e.image.id, (e, S, C) => {
			var w = comment(), T = first_child(w), E = (e) => {
				{
					let x = /* @__PURE__ */ user_derived(() => matchesHRef(get$2(S).image));
					ImageFileDisplay(e, spread_props({
						get comparison() {
							return b.wref;
						},
						get href() {
							return get$2(x);
						}
					}, () => get$2(S), { disable_pin: !0 }));
				}
			};
			if_block(T, (e) => {
				(get$2(x) || get$2(C) == 0) && (!b.threshold || get$2(S).similarity >= b.threshold) && e(E);
			}), append(e, w);
		}), reset(O);
		var k = sibling(O, 2), A = (e) => {
			{
				let S = /* @__PURE__ */ user_derived(() => get$2(x) ? "mdi:close" : "mdi:animation-plus"), C = /* @__PURE__ */ user_derived(() => get$2(x) ? "Collapse" : `+${b.matches.length - 1}`);
				IconBtn(e, {
					get icon() {
						return get$2(S);
					},
					onclick: () => set(x, !get$2(x)),
					get label() {
						return get$2(C);
					}
				});
			}
		};
		if_block(k, (e) => {
			b.matches.length > 1 && e(A);
		}), reset(C), reset(S), template_effect(() => set_class(C, 1, clsx$1(get$2(x) ? "match-expanded" : "match-excerpt"))), append(e, S);
	};
	if_block(C, (e) => {
		(!b.threshold || b.matches[0].similarity >= b.threshold) && e(w);
	}), append(e, S), pop();
}
var on_click = (e, b) => set(b, !get$2(b)), root_1$3 = /* @__PURE__ */ from_html("<p><a href=\"javascript:void(0)\"> </a></p>"), root$7 = /* @__PURE__ */ from_html("<div><div class=\"column match-query\"><!> <div class=\"columns is-multiline match-items is-centered\"><!></div> <!> <!></div> <div class=\"column columns match-results\"></div></div>");
function MatchRow(e, b) {
	push(b, !0);
	let x = /* @__PURE__ */ user_derived(() => b.group_by_source ? b.matches.matches_by_document : b.matches.matches.map((e) => [e])), S = /* @__PURE__ */ state(!1), C = /* @__PURE__ */ state(null);
	function w() {
		get$2(C) && get$2(C).scrollIntoView({
			behavior: "smooth",
			block: "center"
		});
	}
	user_effect(() => {
		b.highlit && untrack(w);
	});
	var T = root$7();
	let E;
	var D = child(T), O = child(D);
	ImageInfos(O, { get image() {
		return b.matches.query;
	} });
	var k = sibling(O, 2), A = child(k);
	ImageFileDisplay(A, {
		get image() {
			return b.matches.query;
		},
		disable_pin: !0
	}), reset(k);
	var j = sibling(k, 2), M = (e) => {
		var b = root_1$3(), x = child(b);
		x.__click = [on_click, S];
		var C = child(x, !0);
		reset(x), reset(b), template_effect(() => set_text(C, get$2(S) ? "Show only 5 best" : "Show all results")), append(e, b);
	};
	if_block(j, (e) => {
		get$2(x).length > 5 && e(M);
	});
	var N = sibling(j, 2);
	MatchCSVExporter(N, {
		get matches() {
			return b.matches;
		},
		get threshold() {
			return b.threshold;
		}
	}), reset(D);
	var P = sibling(D, 2);
	each(P, 21, () => get$2(x).slice(0, get$2(S) ? get$2(x).length : 5), index, (e, x) => {
		MatchGroup(e, {
			get matches() {
				return get$2(x);
			},
			get grouped() {
				return b.group_by_source;
			},
			get threshold() {
				return b.threshold;
			},
			get wref() {
				return b.matches.query;
			}
		});
	}), reset(P), reset(T), bind_this(T, (e) => set(C, e), () => get$2(C)), template_effect((e) => E = set_class(T, 1, "match-row columns", null, E, e), [() => ({ highlit: b.highlit })]), append(e, T), pop();
}
delegate(["click"]);
function matchesHRef(e) {
	return `#match-${e.id}`;
}
var root_3$1 = /* @__PURE__ */ from_html("<option> </option>"), root_2$1 = /* @__PURE__ */ from_html("<div class=\"toolbar-item\"><label class=\"checkbox is-normal\"><input type=\"checkbox\" class=\"checkbox mr-2\" name=\"group-by-source\" id=\"group-by-source\"/> Group by source document</label></div> <div class=\"toolbar-item\"><label class=\"label\">Filter by document:</label> <div class=\"field is-narrow\"><div class=\"select is-fullwidth\"><select><option>All</option><!></select></div></div></div>", 1), root$6 = /* @__PURE__ */ from_html("<div class=\"toolbar\"><div class=\"toolbar-content\"><!> <div class=\"toolbar-item\"><label class=\"label is-expanded\">Similarity threshold:</label> <div class=\"field\"><input type=\"range\"/> <span class=\"m-3\"> </span></div></div> <!></div> <!></div> <div class=\"viewer-table\"></div> <div class=\"mt-4\"></div> <!>", 1);
function SimBrowser(e, b) {
	push(b, !0);
	let x = /* @__PURE__ */ state(!1), S = /* @__PURE__ */ state(null), C = /* @__PURE__ */ user_derived(() => get$2(S) ? b.matches.filter((e) => e.query.document === get$2(S)) : b.matches), w = /* @__PURE__ */ state(1), T = /* @__PURE__ */ user_derived(() => Math.ceil(b.matches.length / 30)), E = /* @__PURE__ */ user_derived(() => Math.min(...b.matches.map((e) => Math.min(...e.matches.map((e) => e.similarity))))), D = /* @__PURE__ */ user_derived(() => Math.max(...b.matches.map((e) => Math.max(...e.matches.map((e) => e.similarity))))), O = /* @__PURE__ */ state(get$2(E) + .5 * (get$2(D) - get$2(E))), k = /* @__PURE__ */ state(null);
	function A() {
		let e = window.location.hash;
		if (e.startsWith("#match-")) {
			let x = e.slice(7);
			set(k, x, !0);
			let S = b.matches.findIndex((e) => e.query.id === x);
			S !== -1 && set(w, Math.floor(S / 30) + 1);
			return;
		}
		set(k, null), e.startsWith("#page-") && set(w, parseInt(e.slice(6)), !0);
	}
	user_effect(() => (window.addEventListener("hashchange", A), A(), () => {
		window.removeEventListener("hashchange", A);
	}));
	var j = root$6(), M = first_child(j), N = child(M), P = child(N), F = (e) => {
		var x = comment(), S = first_child(x);
		snippet(S, () => b.extra_toolbar_items), append(e, x);
	};
	if_block(P, (e) => {
		b.extra_toolbar_items && e(F);
	});
	var I = sibling(P, 2), L = sibling(child(I), 2), R = child(L);
	remove_input_defaults(R), set_attribute(R, "step", .01);
	var z = sibling(R, 2), B = child(z, !0);
	reset(z), reset(L), reset(I);
	var V = sibling(I, 2), H = (e) => {
		var C = root_2$1(), w = first_child(C), T = child(w), E = child(T);
		remove_input_defaults(E), next(), reset(T), reset(w);
		var D = sibling(w, 2), O = sibling(child(D), 2), k = child(O), A = child(k), j = child(A);
		j.value = j.__value = "";
		var M = sibling(j);
		each(M, 17, () => b.index.sources, (e) => e.uid, (e, b) => {
			var x = root_3$1(), S = child(x, !0);
			reset(x);
			var C = {};
			template_effect(() => {
				set_text(S, get$2(b).name || get$2(b).uid), C !== (C = get$2(b).uid) && (x.value = (x.__value = get$2(b).uid) ?? "");
			}), append(e, x);
		}), reset(A), reset(k), reset(O), reset(D), bind_checked(E, () => get$2(x), (e) => set(x, e)), bind_select_value(A, () => get$2(S)?.uid || "", (e) => set(S, b.index.sources.find((b) => b.uid === e) || null, !0)), append(e, C);
	};
	if_block(V, (e) => {
		b.index.sources.length > 1 && e(H);
	}), reset(N);
	var U = sibling(N, 2);
	Pagination_1(U, {
		get total_pages() {
			return get$2(T);
		},
		get page() {
			return get$2(w);
		},
		set page(e) {
			set(w, e, !0);
		}
	}), reset(M);
	var W = sibling(M, 2);
	each(W, 21, () => get$2(C).slice((get$2(w) - 1) * 30, get$2(w) * 30), (e) => e.query.id, (e, b, S, C) => {
		{
			let S = /* @__PURE__ */ user_derived(() => get$2(k) == get$2(b).query.id);
			MatchRow(e, {
				get matches() {
					return get$2(b);
				},
				get group_by_source() {
					return get$2(x);
				},
				get highlit() {
					return get$2(S);
				},
				get threshold() {
					return get$2(O);
				}
			});
		}
	}), reset(W);
	var G = sibling(W, 4);
	Pagination_1(G, {
		get total_pages() {
			return get$2(T);
		},
		get page() {
			return get$2(w);
		},
		set page(e) {
			set(w, e, !0);
		}
	}), template_effect((e) => {
		set_attribute(R, "min", get$2(E)), set_attribute(R, "max", get$2(D)), set_text(B, e);
	}, [() => get$2(O).toPrecision(4)]), bind_value(R, () => get$2(O), (e) => set(O, e)), append(e, j), pop();
}
var root_1$2 = /* @__PURE__ */ from_html("<p>Loading...</p>"), root_3 = /* @__PURE__ */ from_html("<div class=\"toolbar-item toolbar-btn\"><!></div>"), root_5 = /* @__PURE__ */ from_html("<div class=\"toolbar-item toolbar-btn\"><!></div>"), root_2 = /* @__PURE__ */ from_html("<!> <!>", 1), root$5 = /* @__PURE__ */ from_html("<!> <!>", 1);
function SimilarityApp(e, b) {
	push(b, !0);
	let x = prop(b, "mode", 7), S = /* @__PURE__ */ state(proxy({
		sources: [],
		images: [],
		transpositions: []
	})), C = /* @__PURE__ */ state(proxy([])), w = /* @__PURE__ */ state(!0), T = proxy({});
	setMagnifyingContext(T);
	let E = new NameProvider();
	setNameProvider(E), user_effect(() => {
		Promise.all([fetch(b.source_index_url).then((e) => e.json()), fetch(b.sim_matrix_url).then((e) => e.json())]).then(([e, b]) => {
			let x = unserializeSimilarityMatrix(b, e);
			((e) => {
				var b = to_array(e, 2);
				set(S, b[0], !0), set(C, b[1], !0);
			})([x.index, x.matches]), E.fetchIIIFNames(get$2(S).sources), set(w, !1);
		});
	});
	var D = root$5(), O = first_child(D), k = (e) => {
		var b = root_1$2();
		append(e, b);
	}, A = (e) => {
		var b = root_2(), w = first_child(b);
		{
			let e = (e) => {
				var b = root_3(), S = child(b);
				IconBtn(S, {
					icon: "mdi:folder",
					onclick: () => x("browse"),
					label: "Switch to Browse Mode"
				}), reset(b), append(e, b);
			}, b = /* @__PURE__ */ user_derived(() => x() == "cluster");
			ClusteringTool(w, {
				get index() {
					return get$2(S);
				},
				get matches() {
					return get$2(C);
				},
				get visible() {
					return get$2(b);
				},
				extra_toolbar_items: e,
				$$slots: { extra_toolbar_items: !0 }
			});
		}
		var T = sibling(w, 2), E = (e) => {
			SimBrowser(e, {
				get index() {
					return get$2(S);
				},
				get matches() {
					return get$2(C);
				},
				extra_toolbar_items: (e) => {
					var b = root_5(), S = child(b);
					IconBtn(S, {
						icon: "mdi:graph",
						onclick: () => x("cluster"),
						label: "Cluster the results"
					}), reset(b), append(e, b);
				},
				$$slots: { extra_toolbar_items: !0 }
			});
		};
		if_block(T, (e) => {
			x() == "browse" && e(E);
		}), append(e, b);
	};
	if_block(O, (e) => {
		get$2(w) ? e(k) : e(A, !1);
	});
	var j = sibling(O, 2);
	ImageMagnifier(j, spread_props(() => T)), append(e, D), pop();
}
var root$4 = /* @__PURE__ */ from_html("<div class=\"image-generic-outer-wrapper svelte-1xln4oe\"><div class=\"image-generic-inner-wrapper\"><div class=\"image-generic-title\"><!></div> <div class=\"image-generic-content mb-1\"><!></div></div></div>");
function ImageGeneric(e, b) {
	push(b, !0);
	let x = /* @__PURE__ */ state(!1);
	user_effect(() => {
		set(x, !0);
	});
	var S = root$4();
	let C;
	var w = child(S), T = child(w), E = child(T);
	ImageInfos(E, {
		get image() {
			return b.image;
		},
		filenameDisplay: !1
	}), reset(T);
	var D = sibling(T, 2), O = child(D);
	ImageFileDisplay(O, { get image() {
		return b.image;
	} }), reset(D), reset(w), reset(S), template_effect((e) => C = set_style(S, "", C, e), [() => ({ opacity: get$2(x) ? 1 : 0 })]), append(e, S), pop();
}
var root_1$1 = /* @__PURE__ */ from_html("<li class=\"column is-one-fourth is-flex\"><!></li>"), root$3 = /* @__PURE__ */ from_html("<ul class=\"columns is-mobile is-multiline list-invisible\"></ul>");
function ImageGenericList(e, b) {
	var x = root$3();
	each(x, 21, () => b.image_array, (e) => e.id, (e, b) => {
		var x = root_1$1(), S = child(x);
		ImageGeneric(S, { get image() {
			return get$2(b);
		} }), reset(x), append(e, x);
	}), reset(x), append(e, x);
}
function toImageInfo(e, b) {
	return {
		id: e.id,
		num: b,
		url: e.url,
		src: e.src
	};
}
function nonIIIFToDatasetContentsItemInterface(e) {
	let b = (e) => e.split("/").slice(0, -1).join("/"), x = Object.values(e)[0];
	return [...new Set(Object.entries(x).map(([e, x]) => b(x.url)))].map((e) => ({
		name: e,
		images: Object.entries(x).filter(([x, S]) => b(S.url) === e).map(([e, b], x) => toImageInfo(b, x))
	}));
}
function IIIFToDatasetContentsItemInterface(e) {
	return Object.entries(e).map(([e, b]) => ({
		name: e,
		images: Object.entries(b).map(([e, b], x) => toImageInfo(b, x))
	}));
}
function toDatasetImageBrowserInterface(e, b) {
	return {
		datasetFormat: b,
		datasetHierarchy: b === "iiif" ? "document" : "folder",
		datasetContents: b === "iiif" ? IIIFToDatasetContentsItemInterface(e) : nonIIIFToDatasetContentsItemInterface(e)
	};
}
var root$2 = /* @__PURE__ */ from_html("<div class=\"dci-wrapper\"><div class=\"dci-title is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center\"><h3 class=\"id-suffix m-0\"> </h3> <!></div> <!></div>");
function DatasetContentItem(e, b) {
	push(b, !0);
	let x = /* @__PURE__ */ state(4), S = () => set(x, get$2(x) === 4 ? b.datasetContentsItem.images.length : 4, !0);
	function C(e) {
		return e.split("/").slice(5).join("/") + "/";
	}
	var w = root$2(), T = child(w), E = child(T), D = child(E);
	reset(E);
	var O = sibling(E, 2), k = (e) => {
		{
			let b = /* @__PURE__ */ user_derived(() => get$2(x) === 4 ? "mdi:plus" : "mdi:minus"), C = /* @__PURE__ */ user_derived(() => get$2(x) === 4 ? "See more items" : "See less items");
			IconBtn(e, {
				get icon() {
					return get$2(b);
				},
				get label() {
					return get$2(C);
				},
				onclick: () => S()
			});
		}
	};
	if_block(O, (e) => {
		b.datasetContentsItem.images.length > 4 && e(k);
	}), reset(T);
	var A = sibling(T, 2);
	{
		let e = /* @__PURE__ */ user_derived(() => b.datasetContentsItem.images.slice(0, get$2(x)));
		ImageGenericList(A, { get image_array() {
			return get$2(e);
		} });
	}
	reset(w), template_effect((e) => set_text(D, `Images in ${e ?? ""}`), [() => b.datasetFormat === "iiif" ? `document #${b.itemIndex + 1}` : `folder ${C(b.datasetContentsItem.name)}`]), append(e, w), pop();
}
var root$1 = /* @__PURE__ */ from_html("<div></div> <!>", 1);
function DatasetImageBrowser(e, b) {
	push(b, !0);
	let x = toDatasetImageBrowserInterface(b.dataset, b.datasetFormat), S = proxy({});
	setMagnifyingContext(S);
	var C = root$1(), w = first_child(C);
	each(w, 21, () => x.datasetContents, index, (e, x, S) => {
		DatasetContentItem(e, {
			get datasetContentsItem() {
				return get$2(x);
			},
			get datasetFormat() {
				return b.datasetFormat;
			},
			itemIndex: S
		});
	}), reset(w);
	var T = sibling(w, 2);
	ImageMagnifier(T, {}), append(e, C), pop();
}
var root_1 = /* @__PURE__ */ from_html("<p>Loading...</p>"), root = /* @__PURE__ */ from_html("<!> <!>", 1);
function SearchResults(e, b) {
	push(b, !0);
	let x = /* @__PURE__ */ state(proxy({
		sources: [],
		images: [],
		transpositions: []
	})), S = /* @__PURE__ */ state(proxy({
		sources: [],
		images: [],
		transpositions: []
	})), C = /* @__PURE__ */ state(proxy([])), w = /* @__PURE__ */ state(!0), T = proxy({});
	setMagnifyingContext(T);
	let E = new NameProvider();
	setNameProvider(E), user_effect(() => {
		Promise.all([fetch(b.source_index_url).then((e) => e.json()), fetch(b.query_result_url).then((e) => e.json())]).then(([e, b]) => {
			console.log(e, b);
			let T = unserializeSearchResults(e, b);
			((e) => {
				var b = to_array(e, 3);
				set(x, b[0], !0), set(S, b[1], !0), set(C, b[2], !0);
			})([
				T.source_index,
				T.query_index,
				T.matches
			]), E.fetchIIIFNames(get$2(x).sources), set(w, !1);
		});
	});
	var D = root(), O = first_child(D), k = (e) => {
		var b = root_1();
		append(e, b);
	}, A = (e) => {
		SimBrowser(e, {
			get index() {
				return get$2(x);
			},
			get matches() {
				return get$2(C);
			}
		});
	};
	if_block(O, (e) => {
		get$2(w) ? e(k) : e(A, !1);
	});
	var j = sibling(O, 2);
	ImageMagnifier(j, spread_props(() => T)), append(e, D), pop();
}
function initClusterViewer(e, b, x, S, C, w) {
	mount(ClusterApp, {
		target: e,
		props: {
			clustering_data: unserializeClusterFile(b),
			base_url: x,
			editable: S,
			editing: C,
			formfield: w
		}
	});
}
function initProgressTracker(e, b) {
	mount(ProgressTracker, {
		target: e,
		props: { tracking_url: b }
	});
}
function initSimilarityApp(e, b, x, S) {
	mount(SimilarityApp, {
		target: e,
		props: {
			source_index_url: b,
			sim_matrix_url: x,
			mode: S
		}
	});
}
function initSearchResults(e, b, x) {
	mount(SearchResults, {
		target: e,
		props: {
			source_index_url: b,
			query_result_url: x
		}
	});
}
function initImageGenericList(e, b) {
	mount(ImageGenericList, {
		target: e,
		props: { image_array: b }
	});
}
function initDatasetImageBrowser(e, b, x) {
	mount(DatasetImageBrowser, {
		target: e,
		props: {
			dataset: b,
			datasetFormat: x
		}
	});
}
window.DemoTools = {
	initClusterViewer,
	initProgressTracker,
	initSimilarityApp,
	initImageGenericList,
	initDatasetImageBrowser,
	initSearchResults
};
