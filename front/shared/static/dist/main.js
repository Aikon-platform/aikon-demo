var __create = Object.create, __defProp = Object.defineProperty, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropNames = Object.getOwnPropertyNames, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __commonJSMin = (t, n) => () => (n || t((n = { exports: {} }).exports, n), n.exports), __copyProps = (t, o, c, l) => {
	if (o && typeof o == "object" || typeof o == "function") for (var u = __getOwnPropNames(o), d = 0, f = u.length, p; d < f; d++) p = u[d], !__hasOwnProp.call(t, p) && p !== c && __defProp(t, p, {
		get: ((t) => o[t]).bind(null, p),
		enumerable: !(l = __getOwnPropDesc(o, p)) || l.enumerable
	});
	return t;
}, __toESM = (i, a, s) => (s = i == null ? {} : __create(__getProtoOf(i)), __copyProps(a || !i || !i.__esModule ? __defProp(s, "default", {
	value: i,
	enumerable: !0
}) : s, i)), __require = /* @__PURE__ */ ((t) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(t, { get: (t, n) => (typeof require < "u" ? require : t)[n] }) : t)(function(t) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + t + "\" in an environment that doesn't expose the `require` function.");
}), is_array = Array.isArray, index_of = Array.prototype.indexOf, includes = Array.prototype.includes, array_from = Array.from;
Object.keys;
var define_property = Object.defineProperty, get_descriptor = Object.getOwnPropertyDescriptor, get_descriptors = Object.getOwnPropertyDescriptors, object_prototype = Object.prototype, array_prototype = Array.prototype, get_prototype_of = Object.getPrototypeOf, is_extensible = Object.isExtensible;
function is_function(t) {
	return typeof t == "function";
}
const noop$1 = () => {};
function run_all(t) {
	for (var n = 0; n < t.length; n++) t[n]();
}
function deferred() {
	var t, n;
	return {
		promise: new Promise((i, a) => {
			t = i, n = a;
		}),
		resolve: t,
		reject: n
	};
}
function to_array(t, n) {
	if (Array.isArray(t)) return t;
	if (n === void 0 || !(Symbol.iterator in t)) return Array.from(t);
	let i = [];
	for (let a of t) if (i.push(a), i.length === n) break;
	return i;
}
const CLEAN = 1024, DIRTY = 2048, MAYBE_DIRTY = 4096, INERT = 8192, REACTION_RAN = 32768, DESTROYING = 1 << 25, EFFECT_TRANSPARENT = 65536, EFFECT_PRESERVED = 1 << 19, USER_EFFECT = 1 << 20, EFFECT_OFFSCREEN = 1 << 25, WAS_MARKED = 65536, REACTION_IS_UPDATING = 1 << 21, ERROR_VALUE = 1 << 23, STATE_SYMBOL = Symbol("$state"), LEGACY_PROPS = Symbol("legacy props"), LOADING_ATTR_SYMBOL = Symbol(""), STALE_REACTION = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), IS_XHTML = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
function lifecycle_outside_component(t) {
	throw Error("https://svelte.dev/e/lifecycle_outside_component");
}
function async_derived_orphan() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function each_key_duplicate(t, n, i) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
}
function effect_in_teardown(t) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function effect_in_unowned_derived() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function effect_orphan(t) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function effect_update_depth_exceeded() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function props_invalid_value(t) {
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
const HYDRATION_ERROR = {}, UNINITIALIZED = Symbol(), NAMESPACE_SVG = "http://www.w3.org/2000/svg";
function derived_inert() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function hydration_mismatch(t) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function select_multiple_invalid_value() {
	console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function svelte_boundary_reset_noop() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let hydrating = !1;
function set_hydrating(t) {
	hydrating = t;
}
let hydrate_node;
function set_hydrate_node(t) {
	if (t === null) throw hydration_mismatch(), HYDRATION_ERROR;
	return hydrate_node = t;
}
function hydrate_next() {
	return set_hydrate_node(/* @__PURE__ */ get_next_sibling(hydrate_node));
}
function reset(t) {
	if (hydrating) {
		if (/* @__PURE__ */ get_next_sibling(hydrate_node) !== null) throw hydration_mismatch(), HYDRATION_ERROR;
		hydrate_node = t;
	}
}
function next(t = 1) {
	if (hydrating) {
		for (var n = t, i = hydrate_node; n--;) i = /* @__PURE__ */ get_next_sibling(i);
		hydrate_node = i;
	}
}
function skip_nodes(t = !0) {
	for (var n = 0, i = hydrate_node;;) {
		if (i.nodeType === 8) {
			var a = i.data;
			if (a === "]") {
				if (n === 0) return i;
				--n;
			} else (a === "[" || a === "[!" || a[0] === "[" && !isNaN(Number(a.slice(1)))) && (n += 1);
		}
		var o = /* @__PURE__ */ get_next_sibling(i);
		t && i.remove(), i = o;
	}
}
function read_hydration_instruction(t) {
	if (!t || t.nodeType !== 8) throw hydration_mismatch(), HYDRATION_ERROR;
	return t.data;
}
function equals(t) {
	return t === this.v;
}
function safe_not_equal(t, n) {
	return t == t ? t !== n || typeof t == "object" && !!t || typeof t == "function" : n == n;
}
function safe_equals(t) {
	return !safe_not_equal(t, this.v);
}
let component_context = null;
function set_component_context(t) {
	component_context = t;
}
function getContext(t) {
	return get_or_init_context_map("getContext").get(t);
}
function setContext(t, n) {
	return get_or_init_context_map("setContext").set(t, n), n;
}
function hasContext(t) {
	return get_or_init_context_map("hasContext").has(t);
}
function getAllContexts() {
	return get_or_init_context_map("getAllContexts");
}
function push(t, n = !1, i) {
	component_context = {
		p: component_context,
		i: !1,
		c: null,
		e: null,
		s: t,
		x: null,
		r: active_effect,
		l: null
	};
}
function pop(t) {
	var n = component_context, i = n.e;
	if (i !== null) {
		n.e = null;
		for (var a of i) create_user_effect(a);
	}
	return t !== void 0 && (n.x = t), n.i = !0, component_context = n.p, t ?? {};
}
function is_runes() {
	return !0;
}
function get_or_init_context_map(t) {
	return component_context === null && lifecycle_outside_component(t), component_context.c ??= new Map(get_parent_context(component_context) || void 0);
}
function get_parent_context(t) {
	let n = t.p;
	for (; n !== null;) {
		let t = n.c;
		if (t !== null) return t;
		n = n.p;
	}
	return null;
}
var micro_tasks = [];
function run_micro_tasks() {
	var t = micro_tasks;
	micro_tasks = [], run_all(t);
}
function queue_micro_task(t) {
	if (micro_tasks.length === 0 && !is_flushing_sync) {
		var n = micro_tasks;
		queueMicrotask(() => {
			n === micro_tasks && run_micro_tasks();
		});
	}
	micro_tasks.push(t);
}
function flush_tasks() {
	for (; micro_tasks.length > 0;) run_micro_tasks();
}
function handle_error(t) {
	var n = active_effect;
	if (n === null) return active_reaction.f |= ERROR_VALUE, t;
	if (!(n.f & 32768) && !(n.f & 4)) throw t;
	invoke_error_boundary(t, n);
}
function invoke_error_boundary(t, n) {
	for (; n !== null;) {
		if (n.f & 128) {
			if (!(n.f & 32768)) throw t;
			try {
				n.b.error(t);
				return;
			} catch (n) {
				t = n;
			}
		}
		n = n.parent;
	}
	throw t;
}
var STATUS_MASK = ~(MAYBE_DIRTY | 3072);
function set_signal_status(t, n) {
	t.f = t.f & STATUS_MASK | n;
}
function update_derived_status(t) {
	t.f & 512 || t.deps === null ? set_signal_status(t, CLEAN) : set_signal_status(t, MAYBE_DIRTY);
}
function clear_marked(t) {
	if (t !== null) for (let n of t) {
		if (!(n.f & 2) || !(n.f & 65536)) continue;
		n.f ^= WAS_MARKED, clear_marked(n.deps);
	}
}
function defer_effect(t, n, i) {
	t.f & 2048 ? n.add(t) : t.f & 4096 && i.add(t), clear_marked(t.deps), set_signal_status(t, CLEAN);
}
var is_store_binding = !1;
function capture_store_binding(t) {
	var n = is_store_binding;
	try {
		return is_store_binding = !1, [t(), is_store_binding];
	} finally {
		is_store_binding = n;
	}
}
var batches = /* @__PURE__ */ new Set();
let current_batch = null, batch_values = null;
var last_scheduled_effect = null;
let is_flushing_sync = !1;
var is_processing = !1;
let collected_effects = null, legacy_updates = null;
var flush_count = 0, uid = 1, Batch = class t {
	id = uid++;
	current = /* @__PURE__ */ new Map();
	previous = /* @__PURE__ */ new Map();
	#commit_callbacks = /* @__PURE__ */ new Set();
	#discard_callbacks = /* @__PURE__ */ new Set();
	#fork_commit_callbacks = /* @__PURE__ */ new Set();
	#pending = /* @__PURE__ */ new Map();
	#blocking_pending = /* @__PURE__ */ new Map();
	#deferred = null;
	#roots = [];
	#new_effects = [];
	#dirty_effects = /* @__PURE__ */ new Set();
	#maybe_dirty_effects = /* @__PURE__ */ new Set();
	#skipped_branches = /* @__PURE__ */ new Map();
	#unskipped_branches = /* @__PURE__ */ new Set();
	is_fork = !1;
	#decrement_queued = !1;
	#blockers = /* @__PURE__ */ new Set();
	#is_deferred() {
		return this.is_fork || this.#blocking_pending.size > 0;
	}
	#is_blocked() {
		for (let i of this.#blockers) for (let a of i.#blocking_pending.keys()) {
			for (var t = !1, n = a; n.parent !== null;) {
				if (this.#skipped_branches.has(n)) {
					t = !0;
					break;
				}
				n = n.parent;
			}
			if (!t) return !0;
		}
		return !1;
	}
	skip_effect(t) {
		this.#skipped_branches.has(t) || this.#skipped_branches.set(t, {
			d: [],
			m: []
		}), this.#unskipped_branches.delete(t);
	}
	unskip_effect(t, n = (t) => this.schedule(t)) {
		var i = this.#skipped_branches.get(t);
		if (i) {
			this.#skipped_branches.delete(t);
			for (var a of i.d) set_signal_status(a, DIRTY), n(a);
			for (a of i.m) set_signal_status(a, MAYBE_DIRTY), n(a);
		}
		this.#unskipped_branches.add(t);
	}
	#process() {
		if (flush_count++ > 1e3 && (batches.delete(this), infinite_loop_guard()), !this.#is_deferred()) {
			for (let t of this.#dirty_effects) this.#maybe_dirty_effects.delete(t), set_signal_status(t, DIRTY), this.schedule(t);
			for (let t of this.#maybe_dirty_effects) set_signal_status(t, MAYBE_DIRTY), this.schedule(t);
		}
		let n = this.#roots;
		this.#roots = [], this.apply();
		var i = collected_effects = [], a = [], o = legacy_updates = [];
		for (let t of n) try {
			this.#traverse(t, i, a);
		} catch (n) {
			throw reset_all(t), n;
		}
		if (current_batch = null, o.length > 0) {
			var s = t.ensure();
			for (let t of o) s.schedule(t);
		}
		if (collected_effects = null, legacy_updates = null, this.#is_deferred() || this.#is_blocked()) {
			this.#defer_effects(a), this.#defer_effects(i);
			for (let [t, n] of this.#skipped_branches) reset_branch(t, n);
		} else {
			this.#pending.size === 0 && batches.delete(this), this.#dirty_effects.clear(), this.#maybe_dirty_effects.clear();
			for (let t of this.#commit_callbacks) t(this);
			this.#commit_callbacks.clear(), flush_queued_effects(a), flush_queued_effects(i), this.#deferred?.resolve();
		}
		var c = current_batch;
		if (this.#roots.length > 0) {
			let t = c ??= this;
			t.#roots.push(...this.#roots.filter((n) => !t.#roots.includes(n)));
		}
		c !== null && (batches.add(c), c.#process());
	}
	#traverse(t, n, i) {
		t.f ^= CLEAN;
		for (var a = t.first; a !== null;) {
			var o = a.f, s = (o & 96) != 0;
			if (!(s && o & 1024 || o & 8192 || this.#skipped_branches.has(a)) && a.fn !== null) {
				s ? a.f ^= CLEAN : o & 4 ? n.push(a) : is_dirty(a) && (o & 16 && this.#maybe_dirty_effects.add(a), update_effect(a));
				var c = a.first;
				if (c !== null) {
					a = c;
					continue;
				}
			}
			for (; a !== null;) {
				var l = a.next;
				if (l !== null) {
					a = l;
					break;
				}
				a = a.parent;
			}
		}
	}
	#defer_effects(t) {
		for (var n = 0; n < t.length; n += 1) defer_effect(t[n], this.#dirty_effects, this.#maybe_dirty_effects);
	}
	capture(t, n, i = !1) {
		t.v !== UNINITIALIZED && !this.previous.has(t) && this.previous.set(t, t.v), t.f & 8388608 || (this.current.set(t, [n, i]), batch_values?.set(t, n)), this.is_fork || (t.v = n);
	}
	activate() {
		current_batch = this;
	}
	deactivate() {
		current_batch = null, batch_values = null;
	}
	flush() {
		try {
			is_processing = !0, current_batch = this, this.#process();
		} finally {
			flush_count = 0, last_scheduled_effect = null, collected_effects = null, legacy_updates = null, is_processing = !1, current_batch = null, batch_values = null, old_values.clear();
		}
	}
	discard() {
		for (let t of this.#discard_callbacks) t(this);
		this.#discard_callbacks.clear(), this.#fork_commit_callbacks.clear(), batches.delete(this);
	}
	register_created_effect(t) {
		this.#new_effects.push(t);
	}
	#commit() {
		for (let d of batches) {
			var t = d.id < this.id, n = [];
			for (let [a, [o, s]] of this.current) {
				if (d.current.has(a)) {
					var i = d.current.get(a)[0];
					if (t && o !== i) d.current.set(a, [o, s]);
					else continue;
				}
				n.push(a);
			}
			var a = [...d.current.keys()].filter((t) => !this.current.has(t));
			if (a.length === 0) t && d.discard();
			else if (n.length > 0) {
				if (t) for (let t of this.#unskipped_branches) d.unskip_effect(t, (t) => {
					t.f & 4194320 ? d.schedule(t) : d.#defer_effects([t]);
				});
				d.activate();
				var o = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
				for (var c of n) mark_effects(c, a, o, s);
				s = /* @__PURE__ */ new Map();
				var l = [...d.current.keys()].filter((t) => this.current.has(t) ? this.current.get(t)[0] !== t : !0);
				for (let t of this.#new_effects) !(t.f & 155648) && depends_on(t, l, s) && (t.f & 4194320 ? (set_signal_status(t, DIRTY), d.schedule(t)) : d.#dirty_effects.add(t));
				if (d.#roots.length > 0) {
					d.apply();
					for (var u of d.#roots) d.#traverse(u, [], []);
					d.#roots = [];
				}
				d.deactivate();
			}
		}
		for (let t of batches) t.#blockers.has(this) && (t.#blockers.delete(this), t.#blockers.size === 0 && !t.#is_deferred() && (t.activate(), t.#process()));
	}
	increment(t, n) {
		let i = this.#pending.get(n) ?? 0;
		if (this.#pending.set(n, i + 1), t) {
			let t = this.#blocking_pending.get(n) ?? 0;
			this.#blocking_pending.set(n, t + 1);
		}
	}
	decrement(t, n, i) {
		let a = this.#pending.get(n) ?? 0;
		if (a === 1 ? this.#pending.delete(n) : this.#pending.set(n, a - 1), t) {
			let t = this.#blocking_pending.get(n) ?? 0;
			t === 1 ? this.#blocking_pending.delete(n) : this.#blocking_pending.set(n, t - 1);
		}
		this.#decrement_queued || i || (this.#decrement_queued = !0, queue_micro_task(() => {
			this.#decrement_queued = !1, this.flush();
		}));
	}
	transfer_effects(t, n) {
		for (let n of t) this.#dirty_effects.add(n);
		for (let t of n) this.#maybe_dirty_effects.add(t);
		t.clear(), n.clear();
	}
	oncommit(t) {
		this.#commit_callbacks.add(t);
	}
	ondiscard(t) {
		this.#discard_callbacks.add(t);
	}
	on_fork_commit(t) {
		this.#fork_commit_callbacks.add(t);
	}
	run_fork_commit_callbacks() {
		for (let t of this.#fork_commit_callbacks) t(this);
		this.#fork_commit_callbacks.clear();
	}
	settled() {
		return (this.#deferred ??= deferred()).promise;
	}
	static ensure() {
		if (current_batch === null) {
			let n = current_batch = new t();
			is_processing || (batches.add(current_batch), is_flushing_sync || queue_micro_task(() => {
				current_batch === n && n.flush();
			}));
		}
		return current_batch;
	}
	apply() {
		batch_values = null;
	}
	schedule(t) {
		if (last_scheduled_effect = t, t.b?.is_pending && t.f & 16777228 && !(t.f & 32768)) {
			t.b.defer_effect(t);
			return;
		}
		for (var n = t; n.parent !== null;) {
			n = n.parent;
			var i = n.f;
			if (collected_effects !== null && n === active_effect && (active_reaction === null || !(active_reaction.f & 2))) return;
			if (i & 96) {
				if (!(i & 1024)) return;
				n.f ^= CLEAN;
			}
		}
		this.#roots.push(n);
	}
};
function flushSync(t) {
	var n = is_flushing_sync;
	is_flushing_sync = !0;
	try {
		var i;
		for (t && (current_batch !== null && !current_batch.is_fork && current_batch.flush(), i = t());;) {
			if (flush_tasks(), current_batch === null) return i;
			current_batch.flush();
		}
	} finally {
		is_flushing_sync = n;
	}
}
function infinite_loop_guard() {
	try {
		effect_update_depth_exceeded();
	} catch (t) {
		invoke_error_boundary(t, last_scheduled_effect);
	}
}
let eager_block_effects = null;
function flush_queued_effects(t) {
	var n = t.length;
	if (n !== 0) {
		for (var i = 0; i < n;) {
			var a = t[i++];
			if (!(a.f & 24576) && is_dirty(a) && (eager_block_effects = /* @__PURE__ */ new Set(), update_effect(a), a.deps === null && a.first === null && a.nodes === null && a.teardown === null && a.ac === null && unlink_effect(a), eager_block_effects?.size > 0)) {
				old_values.clear();
				for (let t of eager_block_effects) {
					if (t.f & 24576) continue;
					let n = [t], i = t.parent;
					for (; i !== null;) eager_block_effects.has(i) && (eager_block_effects.delete(i), n.push(i)), i = i.parent;
					for (let t = n.length - 1; t >= 0; t--) {
						let i = n[t];
						i.f & 24576 || update_effect(i);
					}
				}
				eager_block_effects.clear();
			}
		}
		eager_block_effects = null;
	}
}
function mark_effects(t, n, i, a) {
	if (!i.has(t) && (i.add(t), t.reactions !== null)) for (let o of t.reactions) {
		let t = o.f;
		t & 2 ? mark_effects(o, n, i, a) : t & 4194320 && !(t & 2048) && depends_on(o, n, a) && (set_signal_status(o, DIRTY), schedule_effect(o));
	}
}
function depends_on(t, n, i) {
	let a = i.get(t);
	if (a !== void 0) return a;
	if (t.deps !== null) for (let a of t.deps) {
		if (includes.call(n, a)) return !0;
		if (a.f & 2 && depends_on(a, n, i)) return i.set(a, !0), !0;
	}
	return i.set(t, !1), !1;
}
function schedule_effect(t) {
	current_batch.schedule(t);
}
function reset_branch(t, n) {
	if (!(t.f & 32 && t.f & 1024)) {
		t.f & 2048 ? n.d.push(t) : t.f & 4096 && n.m.push(t), set_signal_status(t, CLEAN);
		for (var i = t.first; i !== null;) reset_branch(i, n), i = i.next;
	}
}
function reset_all(t) {
	set_signal_status(t, CLEAN);
	for (var n = t.first; n !== null;) reset_all(n), n = n.next;
}
function createSubscriber(t) {
	let n = 0, i = source(0), a;
	return () => {
		effect_tracking() && (get$2(i), render_effect(() => (n === 0 && (a = untrack(() => t(() => increment(i)))), n += 1, () => {
			queue_micro_task(() => {
				--n, n === 0 && (a?.(), a = void 0, increment(i));
			});
		})));
	};
}
var flags = EFFECT_TRANSPARENT | EFFECT_PRESERVED;
function boundary(t, n, i, a) {
	new Boundary(t, n, i, a);
}
var Boundary = class {
	parent;
	is_pending = !1;
	transform_error;
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
	#pending_count_update_queued = !1;
	#dirty_effects = /* @__PURE__ */ new Set();
	#maybe_dirty_effects = /* @__PURE__ */ new Set();
	#effect_pending = null;
	#effect_pending_subscriber = createSubscriber(() => (this.#effect_pending = source(this.#local_pending_count), () => {
		this.#effect_pending = null;
	}));
	constructor(t, n, i, a) {
		this.#anchor = t, this.#props = n, this.#children = (t) => {
			var n = active_effect;
			n.b = this, n.f |= 128, i(t);
		}, this.parent = active_effect.b, this.transform_error = a ?? this.parent?.transform_error ?? ((t) => t), this.#effect = block(() => {
			if (hydrating) {
				let t = this.#hydrate_open;
				hydrate_next();
				let n = t.data === "[!";
				if (t.data.startsWith("[?")) {
					let n = JSON.parse(t.data.slice(2));
					this.#hydrate_failed_content(n);
				} else n ? this.#hydrate_pending_content() : this.#hydrate_resolved_content();
			} else this.#render();
		}, flags), hydrating && (this.#anchor = hydrate_node);
	}
	#hydrate_resolved_content() {
		try {
			this.#main_effect = branch(() => this.#children(this.#anchor));
		} catch (t) {
			this.error(t);
		}
	}
	#hydrate_failed_content(t) {
		let n = this.#props.failed;
		n && (this.#failed_effect = branch(() => {
			n(this.#anchor, () => t, () => () => {});
		}));
	}
	#hydrate_pending_content() {
		let t = this.#props.pending;
		t && (this.is_pending = !0, this.#pending_effect = branch(() => t(this.#anchor)), queue_micro_task(() => {
			var t = this.#offscreen_fragment = document.createDocumentFragment(), n = create_text();
			t.append(n), this.#main_effect = this.#run(() => branch(() => this.#children(n))), this.#pending_count === 0 && (this.#anchor.before(t), this.#offscreen_fragment = null, pause_effect(this.#pending_effect, () => {
				this.#pending_effect = null;
			}), this.#resolve(current_batch));
		}));
	}
	#render() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#pending_count = 0, this.#local_pending_count = 0, this.#main_effect = branch(() => {
				this.#children(this.#anchor);
			}), this.#pending_count > 0) {
				var t = this.#offscreen_fragment = document.createDocumentFragment();
				move_effect(this.#main_effect, t);
				let n = this.#props.pending;
				this.#pending_effect = branch(() => n(this.#anchor));
			} else this.#resolve(current_batch);
		} catch (t) {
			this.error(t);
		}
	}
	#resolve(t) {
		this.is_pending = !1, t.transfer_effects(this.#dirty_effects, this.#maybe_dirty_effects);
	}
	defer_effect(t) {
		defer_effect(t, this.#dirty_effects, this.#maybe_dirty_effects);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#props.pending;
	}
	#run(t) {
		var n = active_effect, i = active_reaction, a = component_context;
		set_active_effect(this.#effect), set_active_reaction(this.#effect), set_component_context(this.#effect.ctx);
		try {
			return Batch.ensure(), t();
		} catch (t) {
			return handle_error(t), null;
		} finally {
			set_active_effect(n), set_active_reaction(i), set_component_context(a);
		}
	}
	#update_pending_count(t, n) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#update_pending_count(t, n);
			return;
		}
		this.#pending_count += t, this.#pending_count === 0 && (this.#resolve(n), this.#pending_effect && pause_effect(this.#pending_effect, () => {
			this.#pending_effect = null;
		}), this.#offscreen_fragment &&= (this.#anchor.before(this.#offscreen_fragment), null));
	}
	update_pending_count(t, n) {
		this.#update_pending_count(t, n), this.#local_pending_count += t, !(!this.#effect_pending || this.#pending_count_update_queued) && (this.#pending_count_update_queued = !0, queue_micro_task(() => {
			this.#pending_count_update_queued = !1, this.#effect_pending && internal_set(this.#effect_pending, this.#local_pending_count);
		}));
	}
	get_effect_pending() {
		return this.#effect_pending_subscriber(), get$2(this.#effect_pending);
	}
	error(t) {
		if (!this.#props.onerror && !this.#props.failed) throw t;
		current_batch?.is_fork ? (this.#main_effect && current_batch.skip_effect(this.#main_effect), this.#pending_effect && current_batch.skip_effect(this.#pending_effect), this.#failed_effect && current_batch.skip_effect(this.#failed_effect), current_batch.on_fork_commit(() => {
			this.#handle_error(t);
		})) : this.#handle_error(t);
	}
	#handle_error(t) {
		this.#main_effect &&= (destroy_effect(this.#main_effect), null), this.#pending_effect &&= (destroy_effect(this.#pending_effect), null), this.#failed_effect &&= (destroy_effect(this.#failed_effect), null), hydrating && (set_hydrate_node(this.#hydrate_open), next(), set_hydrate_node(skip_nodes()));
		var n = this.#props.onerror;
		let i = this.#props.failed;
		var a = !1, o = !1;
		let s = () => {
			if (a) {
				svelte_boundary_reset_noop();
				return;
			}
			a = !0, o && svelte_boundary_reset_onerror(), this.#failed_effect !== null && pause_effect(this.#failed_effect, () => {
				this.#failed_effect = null;
			}), this.#run(() => {
				this.#render();
			});
		}, c = (t) => {
			try {
				o = !0, n?.(t, s), o = !1;
			} catch (t) {
				invoke_error_boundary(t, this.#effect && this.#effect.parent);
			}
			i && (this.#failed_effect = this.#run(() => {
				try {
					return branch(() => {
						var n = active_effect;
						n.b = this, n.f |= 128, i(this.#anchor, () => t, () => s);
					});
				} catch (t) {
					return invoke_error_boundary(t, this.#effect.parent), null;
				}
			}));
		};
		queue_micro_task(() => {
			var n;
			try {
				n = this.transform_error(t);
			} catch (t) {
				invoke_error_boundary(t, this.#effect && this.#effect.parent);
				return;
			}
			typeof n == "object" && n && typeof n.then == "function" ? n.then(c, (t) => invoke_error_boundary(t, this.#effect && this.#effect.parent)) : c(n);
		});
	}
};
function flatten(t, n, i, a) {
	let o = is_runes() ? derived : derived_safe_equal;
	var s = t.filter((t) => !t.settled);
	if (i.length === 0 && s.length === 0) {
		a(n.map(o));
		return;
	}
	var c = active_effect, l = capture(), u = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((t) => t.promise)) : null;
	function d(t) {
		l();
		try {
			a(t);
		} catch (t) {
			c.f & 16384 || invoke_error_boundary(t, c);
		}
		unset_context();
	}
	if (i.length === 0) {
		u.then(() => d(n.map(o)));
		return;
	}
	var f = increment_pending();
	function p() {
		Promise.all(i.map((t) => /* @__PURE__ */ async_derived(t))).then((t) => d([...n.map(o), ...t])).catch((t) => invoke_error_boundary(t, c)).finally(() => f());
	}
	u ? u.then(() => {
		l(), p(), unset_context();
	}) : p();
}
function capture() {
	var t = active_effect, n = active_reaction, i = component_context, a = current_batch;
	return function(o = !0) {
		set_active_effect(t), set_active_reaction(n), set_component_context(i), o && !(t.f & 16384) && (a?.activate(), a?.apply());
	};
}
function unset_context(t = !0) {
	set_active_effect(null), set_active_reaction(null), set_component_context(null), t && current_batch?.deactivate();
}
function increment_pending() {
	var t = active_effect, n = t.b, i = current_batch, a = n.is_rendered();
	return n.update_pending_count(1, i), i.increment(a, t), (o = !1) => {
		n.update_pending_count(-1, i), i.decrement(a, t, o);
	};
}
/* @__NO_SIDE_EFFECTS__ */
function derived(t) {
	var n = 2 | DIRTY;
	return active_effect !== null && (active_effect.f |= EFFECT_PRESERVED), {
		ctx: component_context,
		deps: null,
		effects: null,
		equals,
		f: n,
		fn: t,
		reactions: null,
		rv: 0,
		v: UNINITIALIZED,
		wv: 0,
		parent: active_effect,
		ac: null
	};
}
/* @__NO_SIDE_EFFECTS__ */
function async_derived(t, n, i) {
	let a = active_effect;
	a === null && async_derived_orphan();
	var o = void 0, s = source(UNINITIALIZED), c = !active_reaction, l = /* @__PURE__ */ new Map();
	return async_effect(() => {
		var n = active_effect, i = deferred();
		o = i.promise;
		try {
			Promise.resolve(t()).then(i.resolve, i.reject).finally(unset_context);
		} catch (t) {
			i.reject(t), unset_context();
		}
		var u = current_batch;
		if (c) {
			if (n.f & 32768) var d = increment_pending();
			if (a.b.is_rendered()) l.get(u)?.reject(STALE_REACTION), l.delete(u);
			else {
				for (let t of l.values()) t.reject(STALE_REACTION);
				l.clear();
			}
			l.set(u, i);
		}
		let f = (t, i = void 0) => {
			if (d && d(i === STALE_REACTION), !(i === STALE_REACTION || n.f & 16384)) {
				if (u.activate(), i) s.f |= ERROR_VALUE, internal_set(s, i);
				else {
					s.f & 8388608 && (s.f ^= ERROR_VALUE), internal_set(s, t);
					for (let [t, n] of l) {
						if (l.delete(t), t === u) break;
						n.reject(STALE_REACTION);
					}
				}
				u.deactivate();
			}
		};
		i.promise.then(f, (t) => f(null, t || "unknown"));
	}), teardown(() => {
		for (let t of l.values()) t.reject(STALE_REACTION);
	}), new Promise((t) => {
		function n(i) {
			function a() {
				i === o ? t(s) : n(o);
			}
			i.then(a, a);
		}
		n(o);
	});
}
/* @__NO_SIDE_EFFECTS__ */
function user_derived(t) {
	let n = /* @__PURE__ */ derived(t);
	return push_reaction_value(n), n;
}
/* @__NO_SIDE_EFFECTS__ */
function derived_safe_equal(t) {
	let n = /* @__PURE__ */ derived(t);
	return n.equals = safe_equals, n;
}
function destroy_derived_effects(t) {
	var n = t.effects;
	if (n !== null) {
		t.effects = null;
		for (var i = 0; i < n.length; i += 1) destroy_effect(n[i]);
	}
}
function execute_derived(t) {
	var n, i = active_effect, a = t.parent;
	if (!is_destroying_effect && a !== null && a.f & 24576) return derived_inert(), t.v;
	set_active_effect(a);
	try {
		t.f &= ~WAS_MARKED, destroy_derived_effects(t), n = update_reaction(t);
	} finally {
		set_active_effect(i);
	}
	return n;
}
function update_derived(t) {
	var n = execute_derived(t);
	if (!t.equals(n) && (t.wv = increment_write_version(), (!current_batch?.is_fork || t.deps === null) && (current_batch === null ? t.v = n : current_batch.capture(t, n, !0), t.deps === null))) {
		set_signal_status(t, CLEAN);
		return;
	}
	is_destroying_effect || (batch_values === null ? update_derived_status(t) : (effect_tracking() || current_batch?.is_fork) && batch_values.set(t, n));
}
function freeze_derived_effects(t) {
	if (t.effects !== null) for (let n of t.effects) (n.teardown || n.ac) && (n.teardown?.(), n.ac?.abort(STALE_REACTION), n.teardown = noop$1, n.ac = null, remove_reactions(n, 0), destroy_effect_children(n));
}
function unfreeze_derived_effects(t) {
	if (t.effects !== null) for (let n of t.effects) n.teardown && update_effect(n);
}
let eager_effects = /* @__PURE__ */ new Set();
const old_values = /* @__PURE__ */ new Map();
var eager_effects_deferred = !1;
function source(t, n) {
	return {
		f: 0,
		v: t,
		reactions: null,
		equals,
		rv: 0,
		wv: 0
	};
}
/* @__NO_SIDE_EFFECTS__ */
function state(t, n) {
	let i = source(t, n);
	return push_reaction_value(i), i;
}
/* @__NO_SIDE_EFFECTS__ */
function mutable_source(t, n = !1, i = !0) {
	let a = source(t);
	return n || (a.equals = safe_equals), a;
}
function set(t, n, i = !1) {
	active_reaction !== null && (!untracking || active_reaction.f & 131072) && is_runes() && active_reaction.f & 4325394 && (current_sources === null || !includes.call(current_sources, t)) && state_unsafe_mutation();
	let a = i ? proxy(n) : n;
	return internal_set(t, a, legacy_updates);
}
function internal_set(t, n, i = null) {
	if (!t.equals(n)) {
		old_values.set(t, is_destroying_effect ? n : t.v);
		var a = Batch.ensure();
		if (a.capture(t, n), t.f & 2) {
			let n = t;
			t.f & 2048 && execute_derived(n), batch_values === null && update_derived_status(n);
		}
		t.wv = increment_write_version(), mark_reactions(t, DIRTY, i), is_runes() && active_effect !== null && active_effect.f & 1024 && !(active_effect.f & 96) && (untracked_writes === null ? set_untracked_writes([t]) : untracked_writes.push(t)), !a.is_fork && eager_effects.size > 0 && !eager_effects_deferred && flush_eager_effects();
	}
	return n;
}
function flush_eager_effects() {
	eager_effects_deferred = !1;
	for (let t of eager_effects) t.f & 1024 && set_signal_status(t, MAYBE_DIRTY), is_dirty(t) && update_effect(t);
	eager_effects.clear();
}
function update(t, n = 1) {
	var i = get$2(t), a = n === 1 ? i++ : i--;
	return set(t, i), a;
}
function increment(t) {
	set(t, t.v + 1);
}
function mark_reactions(t, n, i) {
	var a = t.reactions;
	if (a !== null) for (var o = is_runes(), s = a.length, c = 0; c < s; c++) {
		var l = a[c], u = l.f;
		if (!(!o && l === active_effect)) {
			var d = (u & DIRTY) === 0;
			if (d && set_signal_status(l, n), u & 2) {
				var f = l;
				batch_values?.delete(f), u & 65536 || (u & 512 && (active_effect === null || !(active_effect.f & 2097152)) && (l.f |= WAS_MARKED), mark_reactions(f, MAYBE_DIRTY, i));
			} else if (d) {
				var p = l;
				u & 16 && eager_block_effects !== null && eager_block_effects.add(p), i === null ? schedule_effect(p) : i.push(p);
			}
		}
	}
}
function proxy(t) {
	if (typeof t != "object" || !t || STATE_SYMBOL in t) return t;
	let n = get_prototype_of(t);
	if (n !== object_prototype && n !== array_prototype) return t;
	var i = /* @__PURE__ */ new Map(), a = is_array(t), o = /* @__PURE__ */ state(0), s = null, c = update_version, l = (t) => {
		if (update_version === c) return t();
		var n = active_reaction, i = update_version;
		set_active_reaction(null), set_update_version(c);
		var a = t();
		return set_active_reaction(n), set_update_version(i), a;
	};
	return a && i.set("length", /* @__PURE__ */ state(t.length, s)), new Proxy(t, {
		defineProperty(t, n, a) {
			(!("value" in a) || a.configurable === !1 || a.enumerable === !1 || a.writable === !1) && state_descriptors_fixed();
			var o = i.get(n);
			return o === void 0 ? l(() => {
				var t = /* @__PURE__ */ state(a.value, s);
				return i.set(n, t), t;
			}) : set(o, a.value, !0), !0;
		},
		deleteProperty(t, n) {
			var a = i.get(n);
			if (a === void 0) {
				if (n in t) {
					let t = l(() => /* @__PURE__ */ state(UNINITIALIZED, s));
					i.set(n, t), increment(o);
				}
			} else set(a, UNINITIALIZED), increment(o);
			return !0;
		},
		get(n, a, o) {
			if (a === STATE_SYMBOL) return t;
			var c = i.get(a), u = a in n;
			if (c === void 0 && (!u || get_descriptor(n, a)?.writable) && (c = l(() => {
				var t = proxy(u ? n[a] : UNINITIALIZED);
				return /* @__PURE__ */ state(t, s);
			}), i.set(a, c)), c !== void 0) {
				var d = get$2(c);
				return d === UNINITIALIZED ? void 0 : d;
			}
			return Reflect.get(n, a, o);
		},
		getOwnPropertyDescriptor(t, n) {
			var a = Reflect.getOwnPropertyDescriptor(t, n);
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
		has(t, n) {
			if (n === STATE_SYMBOL) return !0;
			var a = i.get(n), o = a !== void 0 && a.v !== UNINITIALIZED || Reflect.has(t, n);
			return (a !== void 0 || active_effect !== null && (!o || get_descriptor(t, n)?.writable)) && (a === void 0 && (a = l(() => {
				var i = o ? proxy(t[n]) : UNINITIALIZED;
				return /* @__PURE__ */ state(i, s);
			}), i.set(n, a)), get$2(a) === UNINITIALIZED) ? !1 : o;
		},
		set(t, n, c, u) {
			var d = i.get(n), f = n in t;
			if (a && n === "length") for (var p = c; p < d.v; p += 1) {
				var m = i.get(p + "");
				m === void 0 ? p in t && (m = l(() => /* @__PURE__ */ state(UNINITIALIZED, s)), i.set(p + "", m)) : set(m, UNINITIALIZED);
			}
			if (d === void 0) (!f || get_descriptor(t, n)?.writable) && (d = l(() => /* @__PURE__ */ state(void 0, s)), set(d, proxy(c)), i.set(n, d));
			else {
				f = d.v !== UNINITIALIZED;
				var h = l(() => proxy(c));
				set(d, h);
			}
			var g = Reflect.getOwnPropertyDescriptor(t, n);
			if (g?.set && g.set.call(u, c), !f) {
				if (a && typeof n == "string") {
					var v = i.get("length"), y = Number(n);
					Number.isInteger(y) && y >= v.v && set(v, y + 1);
				}
				increment(o);
			}
			return !0;
		},
		ownKeys(t) {
			get$2(o);
			var n = Reflect.ownKeys(t).filter((t) => {
				var n = i.get(t);
				return n === void 0 || n.v !== UNINITIALIZED;
			});
			for (var [a, s] of i) s.v !== UNINITIALIZED && !(a in t) && n.push(a);
			return n;
		},
		setPrototypeOf() {
			state_prototype_fixed();
		}
	});
}
function get_proxied_value(t) {
	try {
		if (typeof t == "object" && t && STATE_SYMBOL in t) return t[STATE_SYMBOL];
	} catch {}
	return t;
}
function is(t, n) {
	return Object.is(get_proxied_value(t), get_proxied_value(n));
}
var $window, is_firefox, first_child_getter, next_sibling_getter;
function init_operations() {
	if ($window === void 0) {
		$window = window, document, is_firefox = /Firefox/.test(navigator.userAgent);
		var t = Element.prototype, n = Node.prototype, i = Text.prototype;
		first_child_getter = get_descriptor(n, "firstChild").get, next_sibling_getter = get_descriptor(n, "nextSibling").get, is_extensible(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), is_extensible(i) && (i.__t = void 0);
	}
}
function create_text(t = "") {
	return document.createTextNode(t);
}
/* @__NO_SIDE_EFFECTS__ */
function get_first_child(t) {
	return first_child_getter.call(t);
}
/* @__NO_SIDE_EFFECTS__ */
function get_next_sibling(t) {
	return next_sibling_getter.call(t);
}
function child(t, n) {
	if (!hydrating) return /* @__PURE__ */ get_first_child(t);
	var i = /* @__PURE__ */ get_first_child(hydrate_node);
	if (i === null) i = hydrate_node.appendChild(create_text());
	else if (n && i.nodeType !== 3) {
		var a = create_text();
		return i?.before(a), set_hydrate_node(a), a;
	}
	return n && merge_text_nodes(i), set_hydrate_node(i), i;
}
function first_child(t, n = !1) {
	if (!hydrating) {
		var i = /* @__PURE__ */ get_first_child(t);
		return i instanceof Comment && i.data === "" ? /* @__PURE__ */ get_next_sibling(i) : i;
	}
	if (n) {
		if (hydrate_node?.nodeType !== 3) {
			var a = create_text();
			return hydrate_node?.before(a), set_hydrate_node(a), a;
		}
		merge_text_nodes(hydrate_node);
	}
	return hydrate_node;
}
function sibling(t, n = 1, i = !1) {
	let a = hydrating ? hydrate_node : t;
	for (var o; n--;) o = a, a = /* @__PURE__ */ get_next_sibling(a);
	if (!hydrating) return a;
	if (i) {
		if (a?.nodeType !== 3) {
			var s = create_text();
			return a === null ? o?.after(s) : a.before(s), set_hydrate_node(s), s;
		}
		merge_text_nodes(a);
	}
	return set_hydrate_node(a), a;
}
function clear_text_content(t) {
	t.textContent = "";
}
function should_defer_append() {
	return !1;
}
function create_element(t, n, i) {
	let a = i ? { is: i } : void 0;
	return document.createElementNS(n ?? "http://www.w3.org/1999/xhtml", t, a);
}
function merge_text_nodes(t) {
	if (t.nodeValue.length < 65536) return;
	let n = t.nextSibling;
	for (; n !== null && n.nodeType === 3;) n.remove(), t.nodeValue += n.nodeValue, n = t.nextSibling;
}
function autofocus(t, n) {
	if (n) {
		let n = document.body;
		t.autofocus = !0, queue_micro_task(() => {
			document.activeElement === n && t.focus();
		});
	}
}
var listening_to_form_reset = !1;
function add_form_reset_listener() {
	listening_to_form_reset || (listening_to_form_reset = !0, document.addEventListener("reset", (t) => {
		Promise.resolve().then(() => {
			if (!t.defaultPrevented) for (let n of t.target.elements) n.__on_r?.();
		});
	}, { capture: !0 }));
}
function without_reactive_context(t) {
	var n = active_reaction, i = active_effect;
	set_active_reaction(null), set_active_effect(null);
	try {
		return t();
	} finally {
		set_active_reaction(n), set_active_effect(i);
	}
}
function listen_to_event_and_reset_event(t, n, i, a = i) {
	t.addEventListener(n, () => without_reactive_context(i));
	let o = t.__on_r;
	o ? t.__on_r = () => {
		o(), a(!0);
	} : t.__on_r = () => a(!0), add_form_reset_listener();
}
function validate_effect(t) {
	active_effect === null && (active_reaction === null && effect_orphan(t), effect_in_unowned_derived()), is_destroying_effect && effect_in_teardown(t);
}
function push_effect(t, n) {
	var i = n.last;
	i === null ? n.last = n.first = t : (i.next = t, t.prev = i, n.last = t);
}
function create_effect(t, n) {
	var i = active_effect;
	i !== null && i.f & 8192 && (t |= INERT);
	var a = {
		ctx: component_context,
		deps: null,
		nodes: null,
		f: t | 2560,
		first: null,
		fn: n,
		last: null,
		next: null,
		parent: i,
		b: i && i.b,
		prev: null,
		teardown: null,
		wv: 0,
		ac: null
	};
	current_batch?.register_created_effect(a);
	var o = a;
	if (t & 4) collected_effects === null ? Batch.ensure().schedule(a) : collected_effects.push(a);
	else if (n !== null) {
		try {
			update_effect(a);
		} catch (t) {
			throw destroy_effect(a), t;
		}
		o.deps === null && o.teardown === null && o.nodes === null && o.first === o.last && !(o.f & 524288) && (o = o.first, t & 16 && t & 65536 && o !== null && (o.f |= EFFECT_TRANSPARENT));
	}
	if (o !== null && (o.parent = i, i !== null && push_effect(o, i), active_reaction !== null && active_reaction.f & 2 && !(t & 64))) {
		var s = active_reaction;
		(s.effects ??= []).push(o);
	}
	return a;
}
function effect_tracking() {
	return active_reaction !== null && !untracking;
}
function teardown(t) {
	let n = create_effect(8, null);
	return set_signal_status(n, CLEAN), n.teardown = t, n;
}
function user_effect(t) {
	validate_effect("$effect");
	var n = active_effect.f;
	if (!active_reaction && n & 32 && !(n & 32768)) {
		var i = component_context;
		(i.e ??= []).push(t);
	} else return create_user_effect(t);
}
function create_user_effect(t) {
	return create_effect(4 | USER_EFFECT, t);
}
function user_pre_effect(t) {
	return validate_effect("$effect.pre"), create_effect(8 | USER_EFFECT, t);
}
function effect_root(t) {
	Batch.ensure();
	let n = create_effect(64 | EFFECT_PRESERVED, t);
	return () => {
		destroy_effect(n);
	};
}
function component_root(t) {
	Batch.ensure();
	let n = create_effect(64 | EFFECT_PRESERVED, t);
	return (t = {}) => new Promise((i) => {
		t.outro ? pause_effect(n, () => {
			destroy_effect(n), i(void 0);
		}) : (destroy_effect(n), i(void 0));
	});
}
function effect(t) {
	return create_effect(4, t);
}
function async_effect(t) {
	return create_effect(4194304 | EFFECT_PRESERVED, t);
}
function render_effect(t, n = 0) {
	return create_effect(8 | n, t);
}
function template_effect(t, n = [], i = [], a = []) {
	flatten(a, n, i, (n) => {
		create_effect(8, () => t(...n.map(get$2)));
	});
}
function block(t, n = 0) {
	return create_effect(16 | n, t);
}
function managed(t, n = 0) {
	return create_effect(16777216 | n, t);
}
function branch(t) {
	return create_effect(32 | EFFECT_PRESERVED, t);
}
function execute_effect_teardown(t) {
	var n = t.teardown;
	if (n !== null) {
		let t = is_destroying_effect, i = active_reaction;
		set_is_destroying_effect(!0), set_active_reaction(null);
		try {
			n.call(null);
		} finally {
			set_is_destroying_effect(t), set_active_reaction(i);
		}
	}
}
function destroy_effect_children(t, n = !1) {
	var i = t.first;
	for (t.first = t.last = null; i !== null;) {
		let t = i.ac;
		t !== null && without_reactive_context(() => {
			t.abort(STALE_REACTION);
		});
		var a = i.next;
		i.f & 64 ? i.parent = null : destroy_effect(i, n), i = a;
	}
}
function destroy_block_effect_children(t) {
	for (var n = t.first; n !== null;) {
		var i = n.next;
		n.f & 32 || destroy_effect(n), n = i;
	}
}
function destroy_effect(t, n = !0) {
	var i = !1;
	(n || t.f & 262144) && t.nodes !== null && t.nodes.end !== null && (remove_effect_dom(t.nodes.start, t.nodes.end), i = !0), set_signal_status(t, DESTROYING), destroy_effect_children(t, n && !i), remove_reactions(t, 0);
	var a = t.nodes && t.nodes.t;
	if (a !== null) for (let t of a) t.stop();
	execute_effect_teardown(t), t.f ^= DESTROYING, t.f |= 16384;
	var o = t.parent;
	o !== null && o.first !== null && unlink_effect(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = t.b = null;
}
function remove_effect_dom(t, n) {
	for (; t !== null;) {
		var i = t === n ? null : /* @__PURE__ */ get_next_sibling(t);
		t.remove(), t = i;
	}
}
function unlink_effect(t) {
	var n = t.parent, i = t.prev, a = t.next;
	i !== null && (i.next = a), a !== null && (a.prev = i), n !== null && (n.first === t && (n.first = a), n.last === t && (n.last = i));
}
function pause_effect(t, n, i = !0) {
	var a = [];
	pause_children(t, a, !0);
	var o = () => {
		i && destroy_effect(t), n && n();
	}, s = a.length;
	if (s > 0) {
		var c = () => --s || o();
		for (var l of a) l.out(c);
	} else o();
}
function pause_children(t, n, i) {
	if (!(t.f & 8192)) {
		t.f ^= INERT;
		var a = t.nodes && t.nodes.t;
		if (a !== null) for (let t of a) (t.is_global || i) && n.push(t);
		for (var o = t.first; o !== null;) {
			var s = o.next;
			if (!(o.f & 64)) {
				var c = (o.f & 65536) != 0 || (o.f & 32) != 0 && (t.f & 16) != 0;
				pause_children(o, n, c ? i : !1);
			}
			o = s;
		}
	}
}
function resume_effect(t) {
	resume_children(t, !0);
}
function resume_children(t, n) {
	if (t.f & 8192) {
		t.f ^= INERT, t.f & 1024 || (set_signal_status(t, DIRTY), Batch.ensure().schedule(t));
		for (var i = t.first; i !== null;) {
			var a = i.next, o = (i.f & 65536) != 0 || (i.f & 32) != 0;
			resume_children(i, o ? n : !1), i = a;
		}
		var s = t.nodes && t.nodes.t;
		if (s !== null) for (let t of s) (t.is_global || n) && t.in();
	}
}
function move_effect(t, n) {
	if (t.nodes) for (var i = t.nodes.start, a = t.nodes.end; i !== null;) {
		var o = i === a ? null : /* @__PURE__ */ get_next_sibling(i);
		n.append(i), i = o;
	}
}
var is_updating_effect = !1;
let is_destroying_effect = !1;
function set_is_destroying_effect(t) {
	is_destroying_effect = t;
}
let active_reaction = null, untracking = !1;
function set_active_reaction(t) {
	active_reaction = t;
}
let active_effect = null;
function set_active_effect(t) {
	active_effect = t;
}
let current_sources = null;
function push_reaction_value(t) {
	active_reaction !== null && (current_sources === null ? current_sources = [t] : current_sources.push(t));
}
let new_deps = null, skipped_deps = 0, untracked_writes = null;
function set_untracked_writes(t) {
	untracked_writes = t;
}
let write_version = 1;
var read_version = 0;
let update_version = read_version;
function set_update_version(t) {
	update_version = t;
}
function increment_write_version() {
	return ++write_version;
}
function is_dirty(t) {
	var n = t.f;
	if (n & 2048) return !0;
	if (n & 2 && (t.f &= ~WAS_MARKED), n & 4096) {
		for (var i = t.deps, a = i.length, o = 0; o < a; o++) {
			var s = i[o];
			if (is_dirty(s) && update_derived(s), s.wv > t.wv) return !0;
		}
		n & 512 && batch_values === null && set_signal_status(t, CLEAN);
	}
	return !1;
}
function schedule_possible_effect_self_invalidation(t, n, i = !0) {
	var a = t.reactions;
	if (a !== null && !(current_sources !== null && includes.call(current_sources, t))) for (var o = 0; o < a.length; o++) {
		var s = a[o];
		s.f & 2 ? schedule_possible_effect_self_invalidation(s, n, !1) : n === s && (i ? set_signal_status(s, DIRTY) : s.f & 1024 && set_signal_status(s, MAYBE_DIRTY), schedule_effect(s));
	}
}
function update_reaction(t) {
	var n = new_deps, i = skipped_deps, a = untracked_writes, o = active_reaction, s = current_sources, c = component_context, l = untracking, u = update_version, d = t.f;
	new_deps = null, skipped_deps = 0, untracked_writes = null, active_reaction = d & 96 ? null : t, current_sources = null, set_component_context(t.ctx), untracking = !1, update_version = ++read_version, t.ac !== null && (without_reactive_context(() => {
		t.ac.abort(STALE_REACTION);
	}), t.ac = null);
	try {
		t.f |= REACTION_IS_UPDATING;
		var f = t.fn, p = f();
		t.f |= REACTION_RAN;
		var m = t.deps, h = current_batch?.is_fork;
		if (new_deps !== null) {
			var g;
			if (h || remove_reactions(t, skipped_deps), m !== null && skipped_deps > 0) for (m.length = skipped_deps + new_deps.length, g = 0; g < new_deps.length; g++) m[skipped_deps + g] = new_deps[g];
			else t.deps = m = new_deps;
			if (effect_tracking() && t.f & 512) for (g = skipped_deps; g < m.length; g++) (m[g].reactions ??= []).push(t);
		} else !h && m !== null && skipped_deps < m.length && (remove_reactions(t, skipped_deps), m.length = skipped_deps);
		if (is_runes() && untracked_writes !== null && !untracking && m !== null && !(t.f & 6146)) for (g = 0; g < untracked_writes.length; g++) schedule_possible_effect_self_invalidation(untracked_writes[g], t);
		if (o !== null && o !== t) {
			if (read_version++, o.deps !== null) for (let t = 0; t < i; t += 1) o.deps[t].rv = read_version;
			if (n !== null) for (let t of n) t.rv = read_version;
			untracked_writes !== null && (a === null ? a = untracked_writes : a.push(...untracked_writes));
		}
		return t.f & 8388608 && (t.f ^= ERROR_VALUE), p;
	} catch (t) {
		return handle_error(t);
	} finally {
		t.f ^= REACTION_IS_UPDATING, new_deps = n, skipped_deps = i, untracked_writes = a, active_reaction = o, current_sources = s, set_component_context(c), untracking = l, update_version = u;
	}
}
function remove_reaction(t, n) {
	let i = n.reactions;
	if (i !== null) {
		var a = index_of.call(i, t);
		if (a !== -1) {
			var o = i.length - 1;
			o === 0 ? i = n.reactions = null : (i[a] = i[o], i.pop());
		}
	}
	if (i === null && n.f & 2 && (new_deps === null || !includes.call(new_deps, n))) {
		var s = n;
		s.f & 512 && (s.f ^= 512, s.f &= ~WAS_MARKED), s.v !== UNINITIALIZED && update_derived_status(s), freeze_derived_effects(s), remove_reactions(s, 0);
	}
}
function remove_reactions(t, n) {
	var i = t.deps;
	if (i !== null) for (var a = n; a < i.length; a++) remove_reaction(t, i[a]);
}
function update_effect(t) {
	var n = t.f;
	if (!(n & 16384)) {
		set_signal_status(t, CLEAN);
		var i = active_effect, a = is_updating_effect;
		active_effect = t, is_updating_effect = !0;
		try {
			n & 16777232 ? destroy_block_effect_children(t) : destroy_effect_children(t), execute_effect_teardown(t);
			var o = update_reaction(t);
			t.teardown = typeof o == "function" ? o : null, t.wv = write_version;
		} finally {
			is_updating_effect = a, active_effect = i;
		}
	}
}
async function tick() {
	await Promise.resolve(), flushSync();
}
function get$2(t) {
	var n = (t.f & 2) != 0;
	if (null?.add(t), active_reaction !== null && !untracking && !(active_effect !== null && active_effect.f & 16384) && (current_sources === null || !includes.call(current_sources, t))) {
		var i = active_reaction.deps;
		if (active_reaction.f & 2097152) t.rv < read_version && (t.rv = read_version, new_deps === null && i !== null && i[skipped_deps] === t ? skipped_deps++ : new_deps === null ? new_deps = [t] : new_deps.push(t));
		else {
			(active_reaction.deps ??= []).push(t);
			var a = t.reactions;
			a === null ? t.reactions = [active_reaction] : includes.call(a, active_reaction) || a.push(active_reaction);
		}
	}
	if (is_destroying_effect && old_values.has(t)) return old_values.get(t);
	if (n) {
		var o = t;
		if (is_destroying_effect) {
			var s = o.v;
			return (!(o.f & 1024) && o.reactions !== null || depends_on_old_values(o)) && (s = execute_derived(o)), old_values.set(o, s), s;
		}
		var c = (o.f & 512) == 0 && !untracking && active_reaction !== null && (is_updating_effect || (active_reaction.f & 512) != 0), l = (o.f & REACTION_RAN) === 0;
		is_dirty(o) && (c && (o.f |= 512), update_derived(o)), c && !l && (unfreeze_derived_effects(o), reconnect(o));
	}
	if (batch_values?.has(t)) return batch_values.get(t);
	if (t.f & 8388608) throw t.v;
	return t.v;
}
function reconnect(t) {
	if (t.f |= 512, t.deps !== null) for (let n of t.deps) (n.reactions ??= []).push(t), n.f & 2 && !(n.f & 512) && (unfreeze_derived_effects(n), reconnect(n));
}
function depends_on_old_values(t) {
	if (t.v === UNINITIALIZED) return !0;
	if (t.deps === null) return !1;
	for (let n of t.deps) if (old_values.has(n) || n.f & 2 && depends_on_old_values(n)) return !0;
	return !1;
}
function untrack(t) {
	var n = untracking;
	try {
		return untracking = !0, t();
	} finally {
		untracking = n;
	}
}
function createAttachmentKey() {
	return Symbol("@attach");
}
function is_capture_event(t) {
	return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
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
function can_delegate_event(t) {
	return DELEGATED_EVENTS.includes(t);
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
function normalize_attribute(t) {
	return t = t.toLowerCase(), ATTRIBUTE_ALIASES[t] ?? t;
}
[...DOM_BOOLEAN_ATTRIBUTES];
var PASSIVE_EVENTS = ["touchstart", "touchmove"];
function is_passive_event(t) {
	return PASSIVE_EVENTS.includes(t);
}
var RAW_TEXT_ELEMENTS = [
	"textarea",
	"script",
	"style",
	"title"
];
function is_raw_text_element(t) {
	return RAW_TEXT_ELEMENTS.includes(t);
}
const event_symbol = Symbol("events"), all_registered_events = /* @__PURE__ */ new Set(), root_event_handles = /* @__PURE__ */ new Set();
function create_event(t, n, i, a = {}) {
	function o(t) {
		if (a.capture || handle_event_propagation.call(n, t), !t.cancelBubble) return without_reactive_context(() => i?.call(this, t));
	}
	return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? queue_micro_task(() => {
		n.addEventListener(t, o, a);
	}) : n.addEventListener(t, o, a), o;
}
function on(t, n, i, a = {}) {
	var o = create_event(n, t, i, a);
	return () => {
		t.removeEventListener(n, o, a);
	};
}
function event(t, n, i, a, o) {
	var s = {
		capture: a,
		passive: o
	}, c = create_event(t, n, i, s);
	(n === document.body || n === window || n === document || n instanceof HTMLMediaElement) && teardown(() => {
		n.removeEventListener(t, c, s);
	});
}
function delegated(t, n, i) {
	(n[event_symbol] ??= {})[t] = i;
}
function delegate(t) {
	for (var n = 0; n < t.length; n++) all_registered_events.add(t[n]);
	for (var i of root_event_handles) i(t);
}
var last_propagated_event = null;
function handle_event_propagation(t) {
	var n = this, i = n.ownerDocument, a = t.type, o = t.composedPath?.() || [], s = o[0] || t.target;
	last_propagated_event = t;
	var c = 0, l = last_propagated_event === t && t[event_symbol];
	if (l) {
		var u = o.indexOf(l);
		if (u !== -1 && (n === document || n === window)) {
			t[event_symbol] = n;
			return;
		}
		var d = o.indexOf(n);
		if (d === -1) return;
		u <= d && (c = u);
	}
	if (s = o[c] || t.target, s !== n) {
		define_property(t, "currentTarget", {
			configurable: !0,
			get() {
				return s || i;
			}
		});
		var f = active_reaction, p = active_effect;
		set_active_reaction(null), set_active_effect(null);
		try {
			for (var m, h = []; s !== null;) {
				var _ = s.assignedSlot || s.parentNode || s.host || null;
				try {
					var v = s[event_symbol]?.[a];
					v != null && (!s.disabled || t.target === s) && v.call(s, t);
				} catch (t) {
					m ? h.push(t) : m = t;
				}
				if (t.cancelBubble || _ === n || _ === null) break;
				s = _;
			}
			if (m) {
				for (let t of h) queueMicrotask(() => {
					throw t;
				});
				throw m;
			}
		} finally {
			t[event_symbol] = n, delete t.currentTarget, set_active_reaction(f), set_active_effect(p);
		}
	}
}
var policy = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (t) => t });
function create_trusted_html(t) {
	return policy?.createHTML(t) ?? t;
}
function create_fragment_from_html(t) {
	var n = create_element("template");
	return n.innerHTML = create_trusted_html(t.replaceAll("<!>", "<!---->")), n.content;
}
function assign_nodes(t, n) {
	var i = active_effect;
	i.nodes === null && (i.nodes = {
		start: t,
		end: n,
		a: null,
		t: null
	});
}
/* @__NO_SIDE_EFFECTS__ */
function from_html(t, n) {
	var i = (n & 1) != 0, a = (n & 2) != 0, o, s = !t.startsWith("<!>");
	return () => {
		if (hydrating) return assign_nodes(hydrate_node, null), hydrate_node;
		o === void 0 && (o = create_fragment_from_html(s ? t : "<!>" + t), i || (o = /* @__PURE__ */ get_first_child(o)));
		var n = a || is_firefox ? document.importNode(o, !0) : o.cloneNode(!0);
		if (i) {
			var c = /* @__PURE__ */ get_first_child(n), l = n.lastChild;
			assign_nodes(c, l);
		} else assign_nodes(n, n);
		return n;
	};
}
/* @__NO_SIDE_EFFECTS__ */
function from_namespace(t, n, i = "svg") {
	var a = !t.startsWith("<!>"), o = (n & 1) != 0, s = `<${i}>${a ? t : "<!>" + t}</${i}>`, c;
	return () => {
		if (hydrating) return assign_nodes(hydrate_node, null), hydrate_node;
		if (!c) {
			var t = create_fragment_from_html(s), n = /* @__PURE__ */ get_first_child(t);
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
function from_svg(t, n) {
	return /* @__PURE__ */ from_namespace(t, n, "svg");
}
function text(t = "") {
	if (!hydrating) {
		var n = create_text(t + "");
		return assign_nodes(n, n), n;
	}
	var i = hydrate_node;
	return i.nodeType === 3 ? merge_text_nodes(i) : (i.before(i = create_text()), set_hydrate_node(i)), assign_nodes(i, i), i;
}
function comment() {
	if (hydrating) return assign_nodes(hydrate_node, null), hydrate_node;
	var t = document.createDocumentFragment(), n = document.createComment(""), i = create_text();
	return t.append(n, i), assign_nodes(n, i), t;
}
function append(t, n) {
	if (hydrating) {
		var i = active_effect;
		(!(i.f & 32768) || i.nodes.end === null) && (i.nodes.end = hydrate_node), hydrate_next();
		return;
	}
	t !== null && t.before(n);
}
function props_id() {
	if (hydrating && hydrate_node && hydrate_node.nodeType === 8 && hydrate_node.textContent?.startsWith("$")) {
		let t = hydrate_node.textContent.substring(1);
		return hydrate_next(), t;
	}
	return (window.__svelte ??= {}).uid ??= 1, `c${window.__svelte.uid++}`;
}
function set_text(t, n) {
	var i = n == null ? "" : typeof n == "object" ? `${n}` : n;
	i !== (t.__t ??= t.nodeValue) && (t.__t = i, t.nodeValue = `${i}`);
}
function mount(t, n) {
	return _mount(t, n);
}
var listeners = /* @__PURE__ */ new Map();
function _mount(t, { target: n, anchor: i, props: a = {}, events: o, context: s, intro: c = !0, transformError: l }) {
	init_operations();
	var u = void 0, d = component_root(() => {
		var c = i ?? n.appendChild(create_text());
		boundary(c, { pending: () => {} }, (n) => {
			push({});
			var i = component_context;
			if (s && (i.c = s), o && (a.$$events = o), hydrating && assign_nodes(n, null), u = t(n, a) || {}, hydrating && (active_effect.nodes.end = hydrate_node, hydrate_node === null || hydrate_node.nodeType !== 8 || hydrate_node.data !== "]")) throw hydration_mismatch(), HYDRATION_ERROR;
			pop();
		}, l);
		var d = /* @__PURE__ */ new Set(), f = (t) => {
			for (var i = 0; i < t.length; i++) {
				var a = t[i];
				if (!d.has(a)) {
					d.add(a);
					var o = is_passive_event(a);
					for (let t of [n, document]) {
						var s = listeners.get(t);
						s === void 0 && (s = /* @__PURE__ */ new Map(), listeners.set(t, s));
						var c = s.get(a);
						c === void 0 ? (t.addEventListener(a, handle_event_propagation, { passive: o }), s.set(a, 1)) : s.set(a, c + 1);
					}
				}
			}
		};
		return f(array_from(all_registered_events)), root_event_handles.add(f), () => {
			for (var t of d) for (let i of [n, document]) {
				var a = listeners.get(i), o = a.get(t);
				--o == 0 ? (i.removeEventListener(t, handle_event_propagation), a.delete(t), a.size === 0 && listeners.delete(i)) : a.set(t, o);
			}
			root_event_handles.delete(f), c !== i && c.parentNode?.removeChild(c);
		};
	});
	return mounted_components.set(u, d), u;
}
var mounted_components = /* @__PURE__ */ new WeakMap();
function unmount(t, n) {
	let i = mounted_components.get(t);
	return i ? (mounted_components.delete(t), i(n)) : Promise.resolve();
}
var BranchManager = class {
	anchor;
	#batches = /* @__PURE__ */ new Map();
	#onscreen = /* @__PURE__ */ new Map();
	#offscreen = /* @__PURE__ */ new Map();
	#outroing = /* @__PURE__ */ new Set();
	#transition = !0;
	constructor(t, n = !0) {
		this.anchor = t, this.#transition = n;
	}
	#commit = (t) => {
		if (this.#batches.has(t)) {
			var n = this.#batches.get(t), i = this.#onscreen.get(n);
			if (i) resume_effect(i), this.#outroing.delete(n);
			else {
				var a = this.#offscreen.get(n);
				a && (this.#onscreen.set(n, a.effect), this.#offscreen.delete(n), a.fragment.lastChild.remove(), this.anchor.before(a.fragment), i = a.effect);
			}
			for (let [n, i] of this.#batches) {
				if (this.#batches.delete(n), n === t) break;
				let a = this.#offscreen.get(i);
				a && (destroy_effect(a.effect), this.#offscreen.delete(i));
			}
			for (let [t, a] of this.#onscreen) {
				if (t === n || this.#outroing.has(t)) continue;
				let o = () => {
					if (Array.from(this.#batches.values()).includes(t)) {
						var n = document.createDocumentFragment();
						move_effect(a, n), n.append(create_text()), this.#offscreen.set(t, {
							effect: a,
							fragment: n
						});
					} else destroy_effect(a);
					this.#outroing.delete(t), this.#onscreen.delete(t);
				};
				this.#transition || !i ? (this.#outroing.add(t), pause_effect(a, o, !1)) : o();
			}
		}
	};
	#discard = (t) => {
		this.#batches.delete(t);
		let n = Array.from(this.#batches.values());
		for (let [t, i] of this.#offscreen) n.includes(t) || (destroy_effect(i.effect), this.#offscreen.delete(t));
	};
	ensure(t, n) {
		var i = current_batch, a = should_defer_append();
		if (n && !this.#onscreen.has(t) && !this.#offscreen.has(t)) if (a) {
			var o = document.createDocumentFragment(), s = create_text();
			o.append(s), this.#offscreen.set(t, {
				effect: branch(() => n(s)),
				fragment: o
			});
		} else this.#onscreen.set(t, branch(() => n(this.anchor)));
		if (this.#batches.set(i, t), a) {
			for (let [n, a] of this.#onscreen) n === t ? i.unskip_effect(a) : i.skip_effect(a);
			for (let [n, a] of this.#offscreen) n === t ? i.unskip_effect(a.effect) : i.skip_effect(a.effect);
			i.oncommit(this.#commit), i.ondiscard(this.#discard);
		} else hydrating && (this.anchor = hydrate_node), this.#commit(i);
	}
};
function if_block(t, n, i = !1) {
	var a;
	hydrating && (a = hydrate_node, hydrate_next());
	var o = new BranchManager(t), s = i ? EFFECT_TRANSPARENT : 0;
	function c(t, n) {
		if (hydrating) {
			var i = read_hydration_instruction(a);
			if (t !== parseInt(i.substring(1))) {
				var s = skip_nodes();
				set_hydrate_node(s), o.anchor = s, set_hydrating(!1), o.ensure(t, n), set_hydrating(!0);
				return;
			}
		}
		o.ensure(t, n);
	}
	block(() => {
		var t = !1;
		n((n, i = 0) => {
			t = !0, c(i, n);
		}), t || c(-1, null);
	}, s);
}
var NAN = Symbol("NaN");
function key(t, n, i) {
	hydrating && hydrate_next();
	var a = new BranchManager(t), o = !is_runes();
	block(() => {
		var t = n();
		t !== t && (t = NAN), o && typeof t == "object" && t && (t = {}), a.ensure(t, i);
	});
}
function index$1(t, n) {
	return n;
}
function pause_effects(t, n, i) {
	for (var a = [], o = n.length, s, c = n.length, l = 0; l < o; l++) {
		let i = n[l];
		pause_effect(i, () => {
			if (s) {
				if (s.pending.delete(i), s.done.add(i), s.pending.size === 0) {
					var n = t.outrogroups;
					destroy_effects(t, array_from(s.done)), n.delete(s), n.size === 0 && (t.outrogroups = null);
				}
			} else --c;
		}, !1);
	}
	if (c === 0) {
		var u = a.length === 0 && i !== null;
		if (u) {
			var d = i, f = d.parentNode;
			clear_text_content(f), f.append(d), t.items.clear();
		}
		destroy_effects(t, n, !u);
	} else s = {
		pending: new Set(n),
		done: /* @__PURE__ */ new Set()
	}, (t.outrogroups ??= /* @__PURE__ */ new Set()).add(s);
}
function destroy_effects(t, n, i = !0) {
	var a;
	if (t.pending.size > 0) {
		a = /* @__PURE__ */ new Set();
		for (let n of t.pending.values()) for (let i of n) a.add(t.items.get(i).e);
	}
	for (var o = 0; o < n.length; o++) {
		var s = n[o];
		if (a?.has(s)) {
			s.f |= EFFECT_OFFSCREEN;
			let t = document.createDocumentFragment();
			move_effect(s, t);
		} else destroy_effect(n[o], i);
	}
}
var offscreen_anchor;
function each(t, n, i, a, o, s = null) {
	var c = t, l = /* @__PURE__ */ new Map();
	if (n & 4) {
		var u = t;
		c = hydrating ? set_hydrate_node(/* @__PURE__ */ get_first_child(u)) : u.appendChild(create_text());
	}
	hydrating && hydrate_next();
	var d = null, p = /* @__PURE__ */ derived_safe_equal(() => {
		var t = i();
		return is_array(t) ? t : t == null ? [] : array_from(t);
	}), m, g = /* @__PURE__ */ new Map(), _ = !0;
	function v(t) {
		b.effect.f & 16384 || (b.pending.delete(t), b.fallback = d, reconcile(b, m, c, n, a), d !== null && (m.length === 0 ? d.f & 33554432 ? (d.f ^= EFFECT_OFFSCREEN, move(d, null, c)) : resume_effect(d) : pause_effect(d, () => {
			d = null;
		})));
	}
	function y(t) {
		b.pending.delete(t);
	}
	var b = {
		effect: block(() => {
			m = get$2(p);
			var t = m.length;
			let u = !1;
			hydrating && read_hydration_instruction(c) === "[!" != (t === 0) && (c = skip_nodes(), set_hydrate_node(c), set_hydrating(!1), u = !0);
			for (var f = /* @__PURE__ */ new Set(), h = current_batch, b = should_defer_append(), x = 0; x < t; x += 1) {
				hydrating && hydrate_node.nodeType === 8 && hydrate_node.data === "]" && (c = hydrate_node, u = !0, set_hydrating(!1));
				var S = m[x], C = a(S, x), w = _ ? null : l.get(C);
				w ? (w.v && internal_set(w.v, S), w.i && internal_set(w.i, x), b && h.unskip_effect(w.e)) : (w = create_item(l, _ ? c : offscreen_anchor ??= create_text(), S, C, x, o, n, i), _ || (w.e.f |= EFFECT_OFFSCREEN), l.set(C, w)), f.add(C);
			}
			if (t === 0 && s && !d && (_ ? d = branch(() => s(c)) : (d = branch(() => s(offscreen_anchor ??= create_text())), d.f |= EFFECT_OFFSCREEN)), t > f.size && each_key_duplicate("", "", ""), hydrating && t > 0 && set_hydrate_node(skip_nodes()), !_) if (g.set(h, f), b) {
				for (let [t, n] of l) f.has(t) || h.skip_effect(n.e);
				h.oncommit(v), h.ondiscard(y);
			} else v(h);
			u && set_hydrating(!0), get$2(p);
		}),
		flags: n,
		items: l,
		pending: g,
		outrogroups: null,
		fallback: d
	};
	_ = !1, hydrating && (c = hydrate_node);
}
function skip_to_branch(t) {
	for (; t !== null && !(t.f & 32);) t = t.next;
	return t;
}
function reconcile(t, n, i, a, o) {
	var s = (a & 8) != 0, c = n.length, l = t.items, u = skip_to_branch(t.effect.first), d, f = null, p, m = [], g = [], _, v, y, b;
	if (s) for (b = 0; b < c; b += 1) _ = n[b], v = o(_, b), y = l.get(v).e, y.f & 33554432 || (y.nodes?.a?.measure(), (p ??= /* @__PURE__ */ new Set()).add(y));
	for (b = 0; b < c; b += 1) {
		if (_ = n[b], v = o(_, b), y = l.get(v).e, t.outrogroups !== null) for (let n of t.outrogroups) n.pending.delete(y), n.done.delete(y);
		if (y.f & 8192 && (resume_effect(y), s && (y.nodes?.a?.unfix(), (p ??= /* @__PURE__ */ new Set()).delete(y))), y.f & 33554432) if (y.f ^= EFFECT_OFFSCREEN, y === u) move(y, null, i);
		else {
			var x = f ? f.next : u;
			y === t.effect.last && (t.effect.last = y.prev), y.prev && (y.prev.next = y.next), y.next && (y.next.prev = y.prev), link(t, f, y), link(t, y, x), move(y, x, i), f = y, m = [], g = [], u = skip_to_branch(f.next);
			continue;
		}
		if (y !== u) {
			if (d !== void 0 && d.has(y)) {
				if (m.length < g.length) {
					var S = g[0], C;
					f = S.prev;
					var w = m[0], T = m[m.length - 1];
					for (C = 0; C < m.length; C += 1) move(m[C], S, i);
					for (C = 0; C < g.length; C += 1) d.delete(g[C]);
					link(t, w.prev, T.next), link(t, f, w), link(t, T, S), u = S, f = T, --b, m = [], g = [];
				} else d.delete(y), move(y, u, i), link(t, y.prev, y.next), link(t, y, f === null ? t.effect.first : f.next), link(t, f, y), f = y;
				continue;
			}
			for (m = [], g = []; u !== null && u !== y;) (d ??= /* @__PURE__ */ new Set()).add(u), g.push(u), u = skip_to_branch(u.next);
			if (u === null) continue;
		}
		y.f & 33554432 || m.push(y), f = y, u = skip_to_branch(y.next);
	}
	if (t.outrogroups !== null) {
		for (let n of t.outrogroups) n.pending.size === 0 && (destroy_effects(t, array_from(n.done)), t.outrogroups?.delete(n));
		t.outrogroups.size === 0 && (t.outrogroups = null);
	}
	if (u !== null || d !== void 0) {
		var E = [];
		if (d !== void 0) for (y of d) y.f & 8192 || E.push(y);
		for (; u !== null;) !(u.f & 8192) && u !== t.fallback && E.push(u), u = skip_to_branch(u.next);
		var D = E.length;
		if (D > 0) {
			var O = a & 4 && c === 0 ? i : null;
			if (s) {
				for (b = 0; b < D; b += 1) E[b].nodes?.a?.measure();
				for (b = 0; b < D; b += 1) E[b].nodes?.a?.fix();
			}
			pause_effects(t, E, O);
		}
	}
	s && queue_micro_task(() => {
		if (p !== void 0) for (y of p) y.nodes?.a?.apply();
	});
}
function create_item(t, n, i, a, o, s, c, l) {
	var u = c & 1 ? c & 16 ? source(i) : /* @__PURE__ */ mutable_source(i, !1, !1) : null, d = c & 2 ? source(o) : null;
	return {
		v: u,
		i: d,
		e: branch(() => (s(n, u ?? i, d ?? o, l), () => {
			t.delete(a);
		}))
	};
}
function move(t, n, i) {
	if (t.nodes) for (var a = t.nodes.start, o = t.nodes.end, s = n && !(n.f & 33554432) ? n.nodes.start : i; a !== null;) {
		var c = /* @__PURE__ */ get_next_sibling(a);
		if (s.before(a), a === o) return;
		a = c;
	}
}
function link(t, n, i) {
	n === null ? t.effect.first = i : n.next = i, i === null ? t.effect.last = n : i.prev = n;
}
function html(t, n, i = !1, a = !1, o = !1, s = !1) {
	var c = t, l = "";
	if (i) {
		var u = t;
		hydrating && (c = set_hydrate_node(/* @__PURE__ */ get_first_child(u)));
	}
	template_effect(() => {
		var t = active_effect;
		if (l === (l = n() ?? "")) {
			hydrating && hydrate_next();
			return;
		}
		if (i && !hydrating) {
			t.nodes = null, u.innerHTML = l, l !== "" && assign_nodes(/* @__PURE__ */ get_first_child(u), u.lastChild);
			return;
		}
		if (t.nodes !== null && (remove_effect_dom(t.nodes.start, t.nodes.end), t.nodes = null), l !== "") {
			if (hydrating) {
				for (var s = hydrate_node.data, d = hydrate_next(), f = d; d !== null && (d.nodeType !== 8 || d.data !== "");) f = d, d = /* @__PURE__ */ get_next_sibling(d);
				if (d === null) throw hydration_mismatch(), HYDRATION_ERROR;
				assign_nodes(hydrate_node, f), c = set_hydrate_node(d);
				return;
			}
			var p = create_element(a ? "svg" : o ? "math" : "template", a ? NAMESPACE_SVG : o ? "http://www.w3.org/1998/Math/MathML" : void 0);
			p.innerHTML = l;
			var m = a || o ? p : p.content;
			if (assign_nodes(/* @__PURE__ */ get_first_child(m), m.lastChild), a || o) for (; /* @__PURE__ */ get_first_child(m);) c.before(/* @__PURE__ */ get_first_child(m));
			else c.before(m);
		}
	});
}
function snippet(t, n, ...i) {
	var a = new BranchManager(t);
	block(() => {
		let t = n() ?? null;
		a.ensure(t, t && ((n) => t(n, ...i)));
	}, EFFECT_TRANSPARENT);
}
function component(t, n, i) {
	var a;
	hydrating && (a = hydrate_node, hydrate_next());
	var o = new BranchManager(t);
	block(() => {
		var t = n() ?? null;
		if (hydrating && read_hydration_instruction(a) === "[" != (t !== null)) {
			var s = skip_nodes();
			set_hydrate_node(s), o.anchor = s, set_hydrating(!1), o.ensure(t, t && ((n) => i(n, t))), set_hydrating(!0);
			return;
		}
		o.ensure(t, t && ((n) => i(n, t)));
	}, EFFECT_TRANSPARENT);
}
function element(t, n, i, a, o, s) {
	let c = hydrating;
	hydrating && hydrate_next();
	var l = null;
	hydrating && hydrate_node.nodeType === 1 && (l = hydrate_node, hydrate_next());
	var u = hydrating ? hydrate_node : t, d = new BranchManager(u, !1);
	block(() => {
		let t = n() || null;
		var s = o ? o() : i || t === "svg" ? NAMESPACE_SVG : void 0;
		if (t === null) {
			d.ensure(null, null);
			return;
		}
		return d.ensure(t, (n) => {
			if (t) {
				if (l = hydrating ? l : create_element(t, s), assign_nodes(l, l), a) {
					hydrating && is_raw_text_element(t) && l.append(document.createComment(""));
					var i = hydrating ? /* @__PURE__ */ get_first_child(l) : l.appendChild(create_text());
					hydrating && (i === null ? set_hydrating(!1) : set_hydrate_node(i)), a(l, i);
				}
				active_effect.nodes.end = l, n.before(l);
			}
			hydrating && set_hydrate_node(n);
		}), () => {};
	}, EFFECT_TRANSPARENT), teardown(() => {}), c && (set_hydrating(!0), set_hydrate_node(u));
}
function attach(t, n) {
	var i = void 0, a;
	managed(() => {
		i !== (i = n()) && (a &&= (destroy_effect(a), null), i && (a = branch(() => {
			effect(() => i(t));
		})));
	});
}
function r(t) {
	var n, i, a = "";
	if (typeof t == "string" || typeof t == "number") a += t;
	else if (typeof t == "object") if (Array.isArray(t)) {
		var o = t.length;
		for (n = 0; n < o; n++) t[n] && (i = r(t[n])) && (a && (a += " "), a += i);
	} else for (i in t) t[i] && (a && (a += " "), a += i);
	return a;
}
function clsx() {
	for (var t, n, i = 0, a = "", o = arguments.length; i < o; i++) (t = arguments[i]) && (n = r(t)) && (a && (a += " "), a += n);
	return a;
}
function clsx$1(t) {
	return typeof t == "object" ? clsx(t) : t ?? "";
}
var whitespace = [..." 	\n\r\f\xA0\v﻿"];
function to_class(t, n, i) {
	var a = t == null ? "" : "" + t;
	if (n && (a = a ? a + " " + n : n), i) {
		for (var o of Object.keys(i)) if (i[o]) a = a ? a + " " + o : o;
		else if (a.length) for (var s = o.length, c = 0; (c = a.indexOf(o, c)) >= 0;) {
			var l = c + s;
			(c === 0 || whitespace.includes(a[c - 1])) && (l === a.length || whitespace.includes(a[l])) ? a = (c === 0 ? "" : a.substring(0, c)) + a.substring(l + 1) : c = l;
		}
	}
	return a === "" ? null : a;
}
function append_styles(t, n = !1) {
	var i = n ? " !important;" : ";", a = "";
	for (var o of Object.keys(t)) {
		var s = t[o];
		s != null && s !== "" && (a += " " + o + ": " + s + i);
	}
	return a;
}
function to_css_name(t) {
	return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function to_style(t, n) {
	if (n) {
		var i = "", a, o;
		if (Array.isArray(n) ? (a = n[0], o = n[1]) : a = n, t) {
			t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
			var s = !1, c = 0, l = !1, u = [];
			a && u.push(...Object.keys(a).map(to_css_name)), o && u.push(...Object.keys(o).map(to_css_name));
			var d = 0, f = -1;
			let n = t.length;
			for (var p = 0; p < n; p++) {
				var m = t[p];
				if (l ? m === "/" && t[p - 1] === "*" && (l = !1) : s ? s === m && (s = !1) : m === "/" && t[p + 1] === "*" ? l = !0 : m === "\"" || m === "'" ? s = m : m === "(" ? c++ : m === ")" && c--, !l && s === !1 && c === 0) {
					if (m === ":" && f === -1) f = p;
					else if (m === ";" || p === n - 1) {
						if (f !== -1) {
							var h = to_css_name(t.substring(d, f).trim());
							if (!u.includes(h)) {
								m !== ";" && p++;
								var g = t.substring(d, p).trim();
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
	return t == null ? null : String(t);
}
function set_class(t, n, i, a, o, s) {
	var c = t.__className;
	if (hydrating || c !== i || c === void 0) {
		var l = to_class(i, a, s);
		(!hydrating || l !== t.getAttribute("class")) && (l == null ? t.removeAttribute("class") : n ? t.className = l : t.setAttribute("class", l)), t.__className = i;
	} else if (s && o !== s) for (var u in s) {
		var d = !!s[u];
		(o == null || d !== !!o[u]) && t.classList.toggle(u, d);
	}
	return s;
}
function update_styles(t, n = {}, i, a) {
	for (var o in i) {
		var s = i[o];
		n[o] !== s && (i[o] == null ? t.style.removeProperty(o) : t.style.setProperty(o, s, a));
	}
}
function set_style(t, n, i, a) {
	var o = t.__style;
	if (hydrating || o !== n) {
		var s = to_style(n, a);
		(!hydrating || s !== t.getAttribute("style")) && (s == null ? t.removeAttribute("style") : t.style.cssText = s), t.__style = n;
	} else a && (Array.isArray(a) ? (update_styles(t, i?.[0], a[0]), update_styles(t, i?.[1], a[1], "important")) : update_styles(t, i, a));
	return a;
}
function select_option(t, n, i = !1) {
	if (t.multiple) {
		if (n == null) return;
		if (!is_array(n)) return select_multiple_invalid_value();
		for (var a of t.options) a.selected = n.includes(get_option_value(a));
		return;
	}
	for (a of t.options) {
		var o = get_option_value(a);
		if (is(o, n)) {
			a.selected = !0;
			return;
		}
	}
	(!i || n !== void 0) && (t.selectedIndex = -1);
}
function init_select(t) {
	var n = new MutationObserver(() => {
		select_option(t, t.__value);
	});
	n.observe(t, {
		childList: !0,
		subtree: !0,
		attributes: !0,
		attributeFilter: ["value"]
	}), teardown(() => {
		n.disconnect();
	});
}
function bind_select_value(t, n, i = n) {
	var a = /* @__PURE__ */ new WeakSet(), o = !0;
	listen_to_event_and_reset_event(t, "change", (n) => {
		var o = n ? "[selected]" : ":checked", s;
		if (t.multiple) s = [].map.call(t.querySelectorAll(o), get_option_value);
		else {
			var c = t.querySelector(o) ?? t.querySelector("option:not([disabled])");
			s = c && get_option_value(c);
		}
		i(s), t.__value = s, current_batch !== null && a.add(current_batch);
	}), effect(() => {
		var s = n();
		if (t === document.activeElement) {
			var c = current_batch;
			if (a.has(c)) return;
		}
		if (select_option(t, s, o), o && s === void 0) {
			var l = t.querySelector(":checked");
			l !== null && (s = get_option_value(l), i(s));
		}
		t.__value = s, o = !1;
	}), init_select(t);
}
function get_option_value(t) {
	return "__value" in t ? t.__value : t.value;
}
const CLASS = Symbol("class"), STYLE = Symbol("style");
var IS_CUSTOM_ELEMENT = Symbol("is custom element"), IS_HTML = Symbol("is html"), LINK_TAG = IS_XHTML ? "link" : "LINK", INPUT_TAG = IS_XHTML ? "input" : "INPUT", OPTION_TAG = IS_XHTML ? "option" : "OPTION", SELECT_TAG = IS_XHTML ? "select" : "SELECT", PROGRESS_TAG = IS_XHTML ? "progress" : "PROGRESS";
function remove_input_defaults(t) {
	if (hydrating) {
		var n = !1, i = () => {
			if (!n) {
				if (n = !0, t.hasAttribute("value")) {
					var i = t.value;
					set_attribute(t, "value", null), t.value = i;
				}
				if (t.hasAttribute("checked")) {
					var a = t.checked;
					set_attribute(t, "checked", null), t.checked = a;
				}
			}
		};
		t.__on_r = i, queue_micro_task(i), add_form_reset_listener();
	}
}
function set_value(t, n) {
	var i = get_attributes(t);
	i.value === (i.value = n ?? void 0) || t.value === n && (n !== 0 || t.nodeName !== PROGRESS_TAG) || (t.value = n ?? "");
}
function set_selected(t, n) {
	n ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function set_attribute(t, n, i, a) {
	var o = get_attributes(t);
	hydrating && (o[n] = t.getAttribute(n), n === "src" || n === "srcset" || n === "href" && t.nodeName === LINK_TAG) || o[n] !== (o[n] = i) && (n === "loading" && (t[LOADING_ATTR_SYMBOL] = i), i == null ? t.removeAttribute(n) : typeof i != "string" && get_setters(t).includes(n) ? t[n] = i : t.setAttribute(n, i));
}
function set_attributes(t, n, i, a, o = !1, s = !1) {
	if (hydrating && o && t.nodeName === INPUT_TAG) {
		var c = t;
		(c.type === "checkbox" ? "defaultChecked" : "defaultValue") in i || remove_input_defaults(c);
	}
	var l = get_attributes(t), u = l[IS_CUSTOM_ELEMENT], d = !l[IS_HTML];
	let f = hydrating && u;
	f && set_hydrating(!1);
	var p = n || {}, m = t.nodeName === OPTION_TAG;
	for (var h in n) h in i || (i[h] = null);
	i.class ? i.class = clsx$1(i.class) : (a || i[CLASS]) && (i.class = null), i[STYLE] && (i.style ??= null);
	var g = get_setters(t);
	for (let o in i) {
		let c = i[o];
		if (m && o === "value" && c == null) {
			t.value = t.__value = "", p[o] = c;
			continue;
		}
		if (o === "class") {
			var _ = t.namespaceURI === "http://www.w3.org/1999/xhtml";
			set_class(t, _, c, a, n?.[CLASS], i[CLASS]), p[o] = c, p[CLASS] = i[CLASS];
			continue;
		}
		if (o === "style") {
			set_style(t, c, n?.[STYLE], i[STYLE]), p[o] = c, p[STYLE] = i[STYLE];
			continue;
		}
		var v = p[o];
		if (c === v && !(c === void 0 && t.hasAttribute(o))) continue;
		p[o] = c;
		var y = o[0] + o[1];
		if (y === "$$") continue;
		if (y === "on") {
			let n = {}, i = "$$" + o, a = o.slice(2);
			var b = can_delegate_event(a);
			if (is_capture_event(a) && (a = a.slice(0, -7), n.capture = !0), !b && v) {
				if (c != null) continue;
				t.removeEventListener(a, p[i], n), p[i] = null;
			}
			if (b) delegated(a, t, c), delegate([a]);
			else if (c != null) {
				function s(t) {
					p[o].call(this, t);
				}
				p[i] = create_event(a, t, s, n);
			}
		} else if (o === "style") set_attribute(t, o, c);
		else if (o === "autofocus") autofocus(t, !!c);
		else if (!u && (o === "__value" || o === "value" && c != null)) t.value = t.__value = c;
		else if (o === "selected" && m) set_selected(t, c);
		else {
			var x = o;
			d || (x = normalize_attribute(x));
			var S = x === "defaultValue" || x === "defaultChecked";
			if (c == null && !u && !S) if (l[o] = null, x === "value" || x === "checked") {
				let i = t, a = n === void 0;
				if (x === "value") {
					let t = i.defaultValue;
					i.removeAttribute(x), i.defaultValue = t, i.value = i.__value = a ? t : null;
				} else {
					let t = i.defaultChecked;
					i.removeAttribute(x), i.defaultChecked = t, i.checked = a ? t : !1;
				}
			} else t.removeAttribute(o);
			else S || g.includes(x) && (u || typeof c != "string") ? (t[x] = c, x in l && (l[x] = UNINITIALIZED)) : typeof c != "function" && set_attribute(t, x, c, s);
		}
	}
	return f && set_hydrating(!0), p;
}
function attribute_effect(t, n, i = [], a = [], o = [], s, c = !1, l = !1) {
	flatten(o, i, a, (i) => {
		var a = void 0, o = {}, u = t.nodeName === SELECT_TAG, d = !1;
		if (managed(() => {
			var f = n(...i.map(get$2)), p = set_attributes(t, a, f, s, c, l);
			d && u && "value" in f && select_option(t, f.value);
			for (let t of Object.getOwnPropertySymbols(o)) f[t] || destroy_effect(o[t]);
			for (let n of Object.getOwnPropertySymbols(f)) {
				var m = f[n];
				n.description === "@attach" && (!a || m !== a[n]) && (o[n] && destroy_effect(o[n]), o[n] = branch(() => attach(t, () => m))), p[n] = m;
			}
			a = p;
		}), u) {
			var f = t;
			effect(() => {
				select_option(f, a.value, !0), init_select(f);
			});
		}
		d = !0;
	});
}
function get_attributes(t) {
	return t.__attributes ??= {
		[IS_CUSTOM_ELEMENT]: t.nodeName.includes("-"),
		[IS_HTML]: t.namespaceURI === "http://www.w3.org/1999/xhtml"
	};
}
var setters_cache = /* @__PURE__ */ new Map();
function get_setters(t) {
	var n = t.getAttribute("is") || t.nodeName, i = setters_cache.get(n);
	if (i) return i;
	setters_cache.set(n, i = []);
	for (var a, o = t, s = Element.prototype; s !== o;) {
		for (var c in a = get_descriptors(o), a) a[c].set && i.push(c);
		o = get_prototype_of(o);
	}
	return i;
}
function bind_value(t, n, i = n) {
	var a = /* @__PURE__ */ new WeakSet();
	listen_to_event_and_reset_event(t, "input", async (o) => {
		var s = o ? t.defaultValue : t.value;
		if (s = is_numberlike_input(t) ? to_number(s) : s, i(s), current_batch !== null && a.add(current_batch), await tick(), s !== (s = n())) {
			var c = t.selectionStart, l = t.selectionEnd, u = t.value.length;
			if (t.value = s ?? "", l !== null) {
				var d = t.value.length;
				c === l && l === u && d > u ? (t.selectionStart = d, t.selectionEnd = d) : (t.selectionStart = c, t.selectionEnd = Math.min(l, d));
			}
		}
	}), (hydrating && t.defaultValue !== t.value || untrack(n) == null && t.value) && (i(is_numberlike_input(t) ? to_number(t.value) : t.value), current_batch !== null && a.add(current_batch)), render_effect(() => {
		var i = n();
		if (t === document.activeElement) {
			var o = current_batch;
			if (a.has(o)) return;
		}
		is_numberlike_input(t) && i === to_number(t.value) || t.type === "date" && !i && !t.value || i !== t.value && (t.value = i ?? "");
	});
}
function bind_checked(t, n, i = n) {
	listen_to_event_and_reset_event(t, "change", (n) => {
		var a = n ? t.defaultChecked : t.checked;
		i(a);
	}), (hydrating && t.defaultChecked !== t.checked || untrack(n) == null) && i(t.checked), render_effect(() => {
		t.checked = !!n();
	});
}
function is_numberlike_input(t) {
	var n = t.type;
	return n === "number" || n === "range";
}
function to_number(t) {
	return t === "" ? null : +t;
}
function is_bound_this(t, n) {
	return t === n || t?.[STATE_SYMBOL] === n;
}
function bind_this(t = {}, n, i, a) {
	var o = component_context.r, s = active_effect;
	return effect(() => {
		var c, l;
		return render_effect(() => {
			c = l, l = a?.() || [], untrack(() => {
				t !== i(...l) && (n(t, ...l), c && is_bound_this(i(...c), t) && n(null, ...c));
			});
		}), () => {
			let a = s;
			for (; a !== o && a.parent !== null && a.parent.f & 33554432;) a = a.parent;
			let c = () => {
				l && is_bound_this(i(...l), t) && n(null, ...l);
			}, u = a.teardown;
			a.teardown = () => {
				c(), u?.();
			};
		};
	}), t;
}
function bind_content_editable(t, n, i, a = i) {
	n.addEventListener("input", () => {
		a(n[t]);
	}), render_effect(() => {
		var o = i();
		if (n[t] !== o) if (o == null) {
			var s = n[t];
			a(s);
		} else n[t] = o + "";
	});
}
var rest_props_handler = {
	get(t, n) {
		if (!t.exclude.includes(n)) return t.props[n];
	},
	set(t, n) {
		return !1;
	},
	getOwnPropertyDescriptor(t, n) {
		if (!t.exclude.includes(n) && n in t.props) return {
			enumerable: !0,
			configurable: !0,
			value: t.props[n]
		};
	},
	has(t, n) {
		return t.exclude.includes(n) ? !1 : n in t.props;
	},
	ownKeys(t) {
		return Reflect.ownKeys(t.props).filter((n) => !t.exclude.includes(n));
	}
};
/* @__NO_SIDE_EFFECTS__ */
function rest_props(t, n, i) {
	return new Proxy({
		props: t,
		exclude: n
	}, rest_props_handler);
}
var spread_props_handler = {
	get(t, n) {
		let i = t.props.length;
		for (; i--;) {
			let a = t.props[i];
			if (is_function(a) && (a = a()), typeof a == "object" && a && n in a) return a[n];
		}
	},
	set(t, n, i) {
		let a = t.props.length;
		for (; a--;) {
			let o = t.props[a];
			is_function(o) && (o = o());
			let s = get_descriptor(o, n);
			if (s && s.set) return s.set(i), !0;
		}
		return !1;
	},
	getOwnPropertyDescriptor(t, n) {
		let i = t.props.length;
		for (; i--;) {
			let a = t.props[i];
			if (is_function(a) && (a = a()), typeof a == "object" && a && n in a) {
				let t = get_descriptor(a, n);
				return t && !t.configurable && (t.configurable = !0), t;
			}
		}
	},
	has(t, n) {
		if (n === STATE_SYMBOL || n === LEGACY_PROPS) return !1;
		for (let i of t.props) if (is_function(i) && (i = i()), i != null && n in i) return !0;
		return !1;
	},
	ownKeys(t) {
		let n = [];
		for (let i of t.props) {
			if (is_function(i) && (i = i()), !i) continue;
			for (let t in i) n.includes(t) || n.push(t);
			for (let t of Object.getOwnPropertySymbols(i)) n.includes(t) || n.push(t);
		}
		return n;
	}
};
function spread_props(...t) {
	return new Proxy({ props: t }, spread_props_handler);
}
function prop(t, n, i, a) {
	var o = !0, s = (i & 8) != 0, c = (i & 16) != 0, l = a, u = !0, d = () => (u && (u = !1, l = c ? untrack(a) : a), l);
	let f;
	if (s) {
		var p = STATE_SYMBOL in t || LEGACY_PROPS in t;
		f = get_descriptor(t, n)?.set ?? (p && n in t ? (i) => t[n] = i : void 0);
	}
	var m, h = !1;
	s ? [m, h] = capture_store_binding(() => t[n]) : m = t[n], m === void 0 && a !== void 0 && (m = d(), f && (o && props_invalid_value(n), f(m)));
	var g = o ? () => {
		var i = t[n];
		return i === void 0 ? d() : (u = !0, i);
	} : () => {
		var i = t[n];
		return i !== void 0 && (l = void 0), i === void 0 ? l : i;
	};
	if (o && !(i & 4)) return g;
	if (f) {
		var v = t.$$legacy;
		return (function(t, n) {
			return arguments.length > 0 ? ((!o || !n || v || h) && f(n ? g() : t), t) : g();
		});
	}
	var y = !1, b = (i & 1 ? derived : derived_safe_equal)(() => (y = !1, g()));
	s && get$2(b);
	var x = active_effect;
	return (function(t, n) {
		if (arguments.length > 0) {
			let i = n ? get$2(b) : o && s ? proxy(t) : t;
			return set(b, i), y = !0, l !== void 0 && (l = i), t;
		}
		return is_destroying_effect && y || x.f & 16384 ? b.v : get$2(b);
	});
}
function onMount(t) {
	component_context === null && lifecycle_outside_component("onMount"), user_effect(() => {
		let n = untrack(t);
		if (typeof n == "function") return n;
	});
}
function onDestroy(t) {
	component_context === null && lifecycle_outside_component("onDestroy"), onMount(() => () => untrack(t));
}
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
var matchIconName = /^[a-z0-9]+(-[a-z0-9]+)*$/, stringToIcon = (t, n, i, a = "") => {
	let o = t.split(":");
	if (t.slice(0, 1) === "@") {
		if (o.length < 2 || o.length > 3) return null;
		a = o.shift().slice(1);
	}
	if (o.length > 3 || !o.length) return null;
	if (o.length > 1) {
		let t = o.pop(), i = o.pop(), s = {
			provider: o.length > 0 ? o[0] : a,
			prefix: i,
			name: t
		};
		return n && !validateIconName(s) ? null : s;
	}
	let s = o[0], c = s.split("-");
	if (c.length > 1) {
		let t = {
			provider: a,
			prefix: c.shift(),
			name: c.join("-")
		};
		return n && !validateIconName(t) ? null : t;
	}
	if (i && a === "") {
		let t = {
			provider: a,
			prefix: "",
			name: s
		};
		return n && !validateIconName(t, i) ? null : t;
	}
	return null;
}, validateIconName = (t, n) => t ? !!((n && t.prefix === "" || t.prefix) && t.name) : !1;
function getIconsTree(t, n) {
	let i = t.icons, a = t.aliases || Object.create(null), o = Object.create(null);
	function s(t) {
		if (i[t]) return o[t] = [];
		if (!(t in o)) {
			o[t] = null;
			let n = a[t] && a[t].parent, i = n && s(n);
			i && (o[t] = [n].concat(i));
		}
		return o[t];
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
function mergeIconTransformations(t, n) {
	let i = {};
	!t.hFlip != !n.hFlip && (i.hFlip = !0), !t.vFlip != !n.vFlip && (i.vFlip = !0);
	let a = ((t.rotate || 0) + (n.rotate || 0)) % 4;
	return a && (i.rotate = a), i;
}
function mergeIconData(t, n) {
	let i = mergeIconTransformations(t, n);
	for (let a in defaultExtendedIconProps) a in defaultIconTransformations ? a in t && !(a in i) && (i[a] = defaultIconTransformations[a]) : a in n ? i[a] = n[a] : a in t && (i[a] = t[a]);
	return i;
}
function internalGetIconData(t, n, i) {
	let a = t.icons, o = t.aliases || Object.create(null), s = {};
	function c(t) {
		s = mergeIconData(a[t] || o[t], s);
	}
	return c(n), i.forEach(c), mergeIconData(t, s);
}
function parseIconSet(t, n) {
	let i = [];
	if (typeof t != "object" || typeof t.icons != "object") return i;
	t.not_found instanceof Array && t.not_found.forEach((t) => {
		n(t, null), i.push(t);
	});
	let a = getIconsTree(t);
	for (let o in a) {
		let s = a[o];
		s && (n(o, internalGetIconData(t, o, s)), i.push(o));
	}
	return i;
}
var optionalPropertyDefaults = {
	provider: "",
	aliases: {},
	not_found: {},
	...defaultIconDimensions
};
function checkOptionalProps(t, n) {
	for (let i in n) if (i in t && typeof t[i] != typeof n[i]) return !1;
	return !0;
}
function quicklyValidateIconSet(t) {
	if (typeof t != "object" || !t) return null;
	let n = t;
	if (typeof n.prefix != "string" || !t.icons || typeof t.icons != "object" || !checkOptionalProps(t, optionalPropertyDefaults)) return null;
	let i = n.icons;
	for (let t in i) {
		let n = i[t];
		if (!t || typeof n.body != "string" || !checkOptionalProps(n, defaultExtendedIconProps)) return null;
	}
	let a = n.aliases || Object.create(null);
	for (let t in a) {
		let n = a[t], o = n.parent;
		if (!t || typeof o != "string" || !i[o] && !a[o] || !checkOptionalProps(n, defaultExtendedIconProps)) return null;
	}
	return n;
}
var dataStorage = Object.create(null);
function newStorage(t, n) {
	return {
		provider: t,
		prefix: n,
		icons: Object.create(null),
		missing: /* @__PURE__ */ new Set()
	};
}
function getStorage(t, n) {
	let i = dataStorage[t] || (dataStorage[t] = Object.create(null));
	return i[n] || (i[n] = newStorage(t, n));
}
function addIconSet(t, n) {
	return quicklyValidateIconSet(n) ? parseIconSet(n, (n, i) => {
		i ? t.icons[n] = i : t.missing.add(n);
	}) : [];
}
function addIconToStorage(t, n, i) {
	try {
		if (typeof i.body == "string") return t.icons[n] = { ...i }, !0;
	} catch {}
	return !1;
}
var simpleNames = !1;
function allowSimpleNames(t) {
	return typeof t == "boolean" && (simpleNames = t), simpleNames;
}
function getIconData(t) {
	let n = typeof t == "string" ? stringToIcon(t, !0, simpleNames) : t;
	if (n) {
		let t = getStorage(n.provider, n.prefix), i = n.name;
		return t.icons[i] || (t.missing.has(i) ? null : void 0);
	}
}
function addIcon(t, n) {
	let i = stringToIcon(t, !0, simpleNames);
	if (!i) return !1;
	let a = getStorage(i.provider, i.prefix);
	return n ? addIconToStorage(a, i.name, n) : (a.missing.add(i.name), !0);
}
function addCollection(t, n) {
	if (typeof t != "object") return !1;
	if (typeof n != "string" && (n = t.provider || ""), simpleNames && !n && !t.prefix) {
		let n = !1;
		return quicklyValidateIconSet(t) && (t.prefix = "", parseIconSet(t, (t, i) => {
			addIcon(t, i) && (n = !0);
		})), n;
	}
	let i = t.prefix;
	return validateIconName({
		prefix: i,
		name: "a"
	}) ? !!addIconSet(getStorage(n, i), t) : !1;
}
var defaultIconSizeCustomisations = Object.freeze({
	width: null,
	height: null
}), defaultIconCustomisations = Object.freeze({
	...defaultIconSizeCustomisations,
	...defaultIconTransformations
}), unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g, unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(t, n, i) {
	if (n === 1) return t;
	if (i ||= 100, typeof t == "number") return Math.ceil(t * n * i) / i;
	if (typeof t != "string") return t;
	let a = t.split(unitsSplit);
	if (a === null || !a.length) return t;
	let o = [], s = a.shift(), c = unitsTest.test(s);
	for (;;) {
		if (c) {
			let t = parseFloat(s);
			isNaN(t) ? o.push(s) : o.push(Math.ceil(t * n * i) / i);
		} else o.push(s);
		if (s = a.shift(), s === void 0) return o.join("");
		c = !c;
	}
}
function splitSVGDefs(t, n = "defs") {
	let i = "", a = t.indexOf("<" + n);
	for (; a >= 0;) {
		let o = t.indexOf(">", a), s = t.indexOf("</" + n);
		if (o === -1 || s === -1) break;
		let c = t.indexOf(">", s);
		if (c === -1) break;
		i += t.slice(o + 1, s).trim(), t = t.slice(0, a).trim() + t.slice(c + 1);
	}
	return {
		defs: i,
		content: t
	};
}
function mergeDefsAndContent(t, n) {
	return t ? "<defs>" + t + "</defs>" + n : n;
}
function wrapSVGContent(t, n, i) {
	let a = splitSVGDefs(t);
	return mergeDefsAndContent(a.defs, n + a.content + i);
}
var isUnsetKeyword = (t) => t === "unset" || t === "undefined" || t === "none";
function iconToSVG(t, n) {
	let i = {
		...defaultIconProps,
		...t
	}, a = {
		...defaultIconCustomisations,
		...n
	}, o = {
		left: i.left,
		top: i.top,
		width: i.width,
		height: i.height
	}, s = i.body;
	[i, a].forEach((t) => {
		let n = [], i = t.hFlip, a = t.vFlip, c = t.rotate;
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
	let m = {}, h = (t, n) => {
		isUnsetKeyword(n) || (m[t] = n.toString());
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
var regex = /\sid="(\S+)"/g, counters = /* @__PURE__ */ new Map();
function nextID(t) {
	t = t.replace(/[0-9]+$/, "") || "a";
	let n = counters.get(t) || 0;
	return counters.set(t, n + 1), n ? `${t}${n}` : t;
}
function replaceIDs(t) {
	let n = [], i;
	for (; i = regex.exec(t);) n.push(i[1]);
	if (!n.length) return t;
	let a = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
	return n.forEach((n) => {
		let i = nextID(n), o = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		t = t.replace(RegExp("([#;\"])(" + o + ")([\")]|\\.[a-z])", "g"), "$1" + i + a + "$3");
	}), t = t.replace(new RegExp(a, "g"), ""), t;
}
var storage = Object.create(null);
function setAPIModule(t, n) {
	storage[t] = n;
}
function getAPIModule(t) {
	return storage[t] || storage[""];
}
function createAPIConfig(t) {
	let n;
	if (typeof t.resources == "string") n = [t.resources];
	else if (n = t.resources, !(n instanceof Array) || !n.length) return null;
	return {
		resources: n,
		path: t.path || "/",
		maxURL: t.maxURL || 500,
		rotate: t.rotate || 750,
		timeout: t.timeout || 5e3,
		random: t.random === !0,
		index: t.index || 0,
		dataAfterTimeout: t.dataAfterTimeout !== !1
	};
}
for (var configStorage = Object.create(null), fallBackAPISources = ["https://api.simplesvg.com", "https://api.unisvg.com"], fallBackAPI = []; fallBackAPISources.length > 0;) fallBackAPISources.length === 1 || Math.random() > .5 ? fallBackAPI.push(fallBackAPISources.shift()) : fallBackAPI.push(fallBackAPISources.pop());
configStorage[""] = createAPIConfig({ resources: ["https://api.iconify.design"].concat(fallBackAPI) });
function addAPIProvider(t, n) {
	let i = createAPIConfig(n);
	return i === null ? !1 : (configStorage[t] = i, !0);
}
function getAPIConfig(t) {
	return configStorage[t];
}
var fetchModule = (() => {
	let t;
	try {
		if (t = fetch, typeof t == "function") return t;
	} catch {}
})();
function calculateMaxLength(t, n) {
	let i = getAPIConfig(t);
	if (!i) return 0;
	let a;
	if (!i.maxURL) a = 0;
	else {
		let t = 0;
		i.resources.forEach((n) => {
			let i = n;
			t = Math.max(t, i.length);
		});
		let o = n + ".json?icons=";
		a = i.maxURL - t - i.path.length - o.length;
	}
	return a;
}
function shouldAbort(t) {
	return t === 404;
}
var prepare = (t, n, i) => {
	let a = [], o = calculateMaxLength(t, n), s = "icons", c = {
		type: s,
		provider: t,
		prefix: n,
		icons: []
	}, l = 0;
	return i.forEach((i, u) => {
		l += i.length + 1, l >= o && u > 0 && (a.push(c), c = {
			type: s,
			provider: t,
			prefix: n,
			icons: []
		}, l = i.length), c.icons.push(i);
	}), a.push(c), a;
};
function getPath(t) {
	if (typeof t == "string") {
		let n = getAPIConfig(t);
		if (n) return n.path;
	}
	return "/";
}
var fetchAPIModule = {
	prepare,
	send: (t, n, i) => {
		if (!fetchModule) {
			i("abort", 424);
			return;
		}
		let a = getPath(n.provider);
		switch (n.type) {
			case "icons": {
				let t = n.prefix, i = n.icons.join(","), o = new URLSearchParams({ icons: i });
				a += t + ".json?" + o.toString();
				break;
			}
			case "custom": {
				let t = n.uri;
				a += t.slice(0, 1) === "/" ? t.slice(1) : t;
				break;
			}
			default:
				i("abort", 400);
				return;
		}
		let o = 503;
		fetchModule(t + a).then((t) => {
			let n = t.status;
			if (n !== 200) {
				setTimeout(() => {
					i(shouldAbort(n) ? "abort" : "next", n);
				});
				return;
			}
			return o = 501, t.json();
		}).then((t) => {
			if (typeof t != "object" || !t) {
				setTimeout(() => {
					t === 404 ? i("abort", t) : i("next", o);
				});
				return;
			}
			setTimeout(() => {
				i("success", t);
			});
		}).catch(() => {
			i("next", o);
		});
	}
};
function removeCallback(t, n) {
	t.forEach((t) => {
		let i = t.loaderCallbacks;
		i && (t.loaderCallbacks = i.filter((t) => t.id !== n));
	});
}
function updateCallbacks(t) {
	t.pendingCallbacksFlag || (t.pendingCallbacksFlag = !0, setTimeout(() => {
		t.pendingCallbacksFlag = !1;
		let n = t.loaderCallbacks ? t.loaderCallbacks.slice(0) : [];
		if (!n.length) return;
		let i = !1, a = t.provider, o = t.prefix;
		n.forEach((n) => {
			let s = n.icons, c = s.pending.length;
			s.pending = s.pending.filter((n) => {
				if (n.prefix !== o) return !0;
				let c = n.name;
				if (t.icons[c]) s.loaded.push({
					provider: a,
					prefix: o,
					name: c
				});
				else if (t.missing.has(c)) s.missing.push({
					provider: a,
					prefix: o,
					name: c
				});
				else return i = !0, !0;
				return !1;
			}), s.pending.length !== c && (i || removeCallback([t], n.id), n.callback(s.loaded.slice(0), s.missing.slice(0), s.pending.slice(0), n.abort));
		});
	}));
}
var idCounter = 0;
function storeCallback(t, n, i) {
	let a = idCounter++, o = removeCallback.bind(null, i, a);
	if (!n.pending.length) return o;
	let s = {
		id: a,
		icons: n,
		callback: t,
		abort: o
	};
	return i.forEach((t) => {
		(t.loaderCallbacks ||= []).push(s);
	}), o;
}
function sortIcons(t) {
	let n = {
		loaded: [],
		missing: [],
		pending: []
	}, i = Object.create(null);
	t.sort((t, n) => t.provider === n.provider ? t.prefix === n.prefix ? t.name.localeCompare(n.name) : t.prefix.localeCompare(n.prefix) : t.provider.localeCompare(n.provider));
	let a = {
		provider: "",
		prefix: "",
		name: ""
	};
	return t.forEach((t) => {
		if (a.name === t.name && a.prefix === t.prefix && a.provider === t.provider) return;
		a = t;
		let o = t.provider, s = t.prefix, c = t.name, l = i[o] || (i[o] = Object.create(null)), u = l[s] || (l[s] = getStorage(o, s)), d;
		d = c in u.icons ? n.loaded : s === "" || u.missing.has(c) ? n.missing : n.pending;
		let f = {
			provider: o,
			prefix: s,
			name: c
		};
		d.push(f);
	}), n;
}
function listToIcons(t, n = !0, i = !1) {
	let a = [];
	return t.forEach((t) => {
		let o = typeof t == "string" ? stringToIcon(t, n, i) : t;
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
function sendQuery(t, n, i, a) {
	let o = t.resources.length, s = t.random ? Math.floor(Math.random() * o) : t.index, c;
	if (t.random) {
		let n = t.resources.slice(0);
		for (c = []; n.length > 1;) {
			let t = Math.floor(Math.random() * n.length);
			c.push(n[t]), n = n.slice(0, t).concat(n.slice(t + 1));
		}
		c = c.concat(n);
	} else c = t.resources.slice(s).concat(t.resources.slice(0, s));
	let l = Date.now(), u = "pending", d = 0, f, p = null, m = [], h = [];
	typeof a == "function" && h.push(a);
	function g() {
		p &&= (clearTimeout(p), null);
	}
	function _() {
		u === "pending" && (u = "aborted"), g(), m.forEach((t) => {
			t.status === "pending" && (t.status = "aborted");
		}), m = [];
	}
	function v(t, n) {
		n && (h = []), typeof t == "function" && h.push(t);
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
		u = "failed", h.forEach((t) => {
			t(void 0, f);
		});
	}
	function x() {
		m.forEach((t) => {
			t.status === "pending" && (t.status = "aborted");
		}), m = [];
	}
	function S(n, i, a) {
		let o = i !== "success";
		switch (m = m.filter((t) => t !== n), u) {
			case "pending": break;
			case "failed":
				if (o || !t.dataAfterTimeout) return;
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
		if (g(), x(), !t.random) {
			let i = t.resources.indexOf(n.resource);
			i !== -1 && i !== t.index && (t.index = i);
		}
		u = "completed", h.forEach((t) => {
			t(a);
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
				}, t.timeout);
				return;
			}
			b();
			return;
		}
		let o = {
			status: "pending",
			resource: a,
			callback: (t, n) => {
				S(o, t, n);
			}
		};
		m.push(o), d++, p = setTimeout(C, t.rotate), i(a, n, o.callback);
	}
	return setTimeout(C), y;
}
function initRedundancy(t) {
	let n = {
		...defaultConfig,
		...t
	}, i = [];
	function a() {
		i = i.filter((t) => t().status === "pending");
	}
	function o(t, o, s) {
		let c = sendQuery(n, t, o, (t, n) => {
			a(), s && s(t, n);
		});
		return i.push(c), c;
	}
	function s(t) {
		return i.find((n) => t(n)) || null;
	}
	return {
		query: o,
		find: s,
		setIndex: (t) => {
			n.index = t;
		},
		getIndex: () => n.index,
		cleanup: a
	};
}
function emptyCallback$1() {}
var redundancyCache = Object.create(null);
function getRedundancyCache(t) {
	if (!redundancyCache[t]) {
		let n = getAPIConfig(t);
		if (!n) return;
		redundancyCache[t] = {
			config: n,
			redundancy: initRedundancy(n)
		};
	}
	return redundancyCache[t];
}
function sendAPIQuery(t, n, i) {
	let a, o;
	if (typeof t == "string") {
		let n = getAPIModule(t);
		if (!n) return i(void 0, 424), emptyCallback$1;
		o = n.send;
		let s = getRedundancyCache(t);
		s && (a = s.redundancy);
	} else {
		let n = createAPIConfig(t);
		if (n) {
			a = initRedundancy(n);
			let i = getAPIModule(t.resources ? t.resources[0] : "");
			i && (o = i.send);
		}
	}
	return !a || !o ? (i(void 0, 424), emptyCallback$1) : a.query(n, o, i)().abort;
}
function emptyCallback() {}
function loadedNewIcons(t) {
	t.iconsLoaderFlag || (t.iconsLoaderFlag = !0, setTimeout(() => {
		t.iconsLoaderFlag = !1, updateCallbacks(t);
	}));
}
function checkIconNamesForAPI(t) {
	let n = [], i = [];
	return t.forEach((t) => {
		(t.match(matchIconName) ? n : i).push(t);
	}), {
		valid: n,
		invalid: i
	};
}
function parseLoaderResponse(t, n, i) {
	function a() {
		let i = t.pendingIcons;
		n.forEach((n) => {
			i && i.delete(n), t.icons[n] || t.missing.add(n);
		});
	}
	if (i && typeof i == "object") try {
		if (!addIconSet(t, i).length) {
			a();
			return;
		}
	} catch (t) {
		console.error(t);
	}
	a(), loadedNewIcons(t);
}
function parsePossiblyAsyncResponse(t, n) {
	t instanceof Promise ? t.then((t) => {
		n(t);
	}).catch(() => {
		n(null);
	}) : n(t);
}
function loadNewIcons(t, n) {
	t.iconsToLoad ? t.iconsToLoad = t.iconsToLoad.concat(n).sort() : t.iconsToLoad = n, t.iconsQueueFlag || (t.iconsQueueFlag = !0, setTimeout(() => {
		t.iconsQueueFlag = !1;
		let { provider: n, prefix: i } = t, a = t.iconsToLoad;
		if (delete t.iconsToLoad, !a || !a.length) return;
		let o = t.loadIcon;
		if (t.loadIcons && (a.length > 1 || !o)) {
			parsePossiblyAsyncResponse(t.loadIcons(a, i, n), (n) => {
				parseLoaderResponse(t, a, n);
			});
			return;
		}
		if (o) {
			a.forEach((a) => {
				parsePossiblyAsyncResponse(o(a, i, n), (n) => {
					parseLoaderResponse(t, [a], n ? {
						prefix: i,
						icons: { [a]: n }
					} : null);
				});
			});
			return;
		}
		let { valid: s, invalid: c } = checkIconNamesForAPI(a);
		if (c.length && parseLoaderResponse(t, c, null), !s.length) return;
		let l = i.match(matchIconName) ? getAPIModule(n) : null;
		if (!l) {
			parseLoaderResponse(t, s, null);
			return;
		}
		l.prepare(n, i, s).forEach((i) => {
			sendAPIQuery(n, i, (n) => {
				parseLoaderResponse(t, i.icons, n);
			});
		});
	}));
}
var loadIcons = (t, n) => {
	let i = sortIcons(listToIcons(t, !0, allowSimpleNames()));
	if (!i.pending.length) {
		let t = !0;
		return n && setTimeout(() => {
			t && n(i.loaded, i.missing, i.pending, emptyCallback);
		}), () => {
			t = !1;
		};
	}
	let a = Object.create(null), o = [], s, c;
	return i.pending.forEach((t) => {
		let { provider: n, prefix: i } = t;
		if (i === c && n === s) return;
		s = n, c = i, o.push(getStorage(n, i));
		let l = a[n] || (a[n] = Object.create(null));
		l[i] || (l[i] = []);
	}), i.pending.forEach((t) => {
		let { provider: n, prefix: i, name: o } = t, s = getStorage(n, i), c = s.pendingIcons ||= /* @__PURE__ */ new Set();
		c.has(o) || (c.add(o), a[n][i].push(o));
	}), o.forEach((t) => {
		let n = a[t.provider][t.prefix];
		n.length && loadNewIcons(t, n);
	}), n ? storeCallback(n, i, o) : emptyCallback;
};
function mergeCustomisations(t, n) {
	let i = { ...t };
	for (let t in n) {
		let a = n[t], o = typeof a;
		t in defaultIconSizeCustomisations ? (a === null || a && (o === "string" || o === "number")) && (i[t] = a) : o === typeof i[t] && (i[t] = t === "rotate" ? a % 4 : a);
	}
	return i;
}
var separator = /[\s,]+/;
function flipFromString(t, n) {
	n.split(separator).forEach((n) => {
		switch (n.trim()) {
			case "horizontal":
				t.hFlip = !0;
				break;
			case "vertical":
				t.vFlip = !0;
				break;
		}
	});
}
function rotateFromString(t, n = 0) {
	let i = t.replace(/^-?[0-9.]*/, "");
	function a(t) {
		for (; t < 0;) t += 4;
		return t % 4;
	}
	if (i === "") {
		let n = parseInt(t);
		return isNaN(n) ? 0 : a(n);
	} else if (i !== t) {
		let n = 0;
		switch (i) {
			case "%":
				n = 25;
				break;
			case "deg": n = 90;
		}
		if (n) {
			let o = parseFloat(t.slice(0, t.length - i.length));
			return isNaN(o) ? 0 : (o /= n, o % 1 == 0 ? a(o) : 0);
		}
	}
	return n;
}
function iconToHTML(t, n) {
	let i = t.indexOf("xlink:") === -1 ? "" : " xmlns:xlink=\"http://www.w3.org/1999/xlink\"";
	for (let t in n) i += " " + t + "=\"" + n[t] + "\"";
	return "<svg xmlns=\"http://www.w3.org/2000/svg\"" + i + ">" + t + "</svg>";
}
function encodeSVGforURL(t) {
	return t.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function svgToData(t) {
	return "data:image/svg+xml," + encodeSVGforURL(t);
}
function svgToURL(t) {
	return "url(\"" + svgToData(t) + "\")";
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
for (let t in propsToAddTo) {
	let n = propsToAddTo[t];
	for (let i in propsToAdd) n[t + "-" + i] = propsToAdd[i];
}
function fixSize(t) {
	return t + (t.match(/^[-0-9.]+$/) ? "px" : "");
}
function render(t, n) {
	let i = mergeCustomisations(defaultExtendedIconCustomisations, n), a = n.mode || "svg", o = a === "svg" ? { ...svgDefaults } : {};
	t.body.indexOf("xlink:") === -1 && delete o["xmlns:xlink"];
	let s = typeof n.style == "string" ? n.style : "";
	for (let t in n) {
		let a = n[t];
		if (a === void 0) continue;
		switch (t) {
			case "icon":
			case "style":
			case "onLoad":
			case "mode":
			case "ssr": break;
			case "inline":
			case "hFlip":
			case "vFlip":
				i[t] = a === !0 || a === "true" || a === 1;
				break;
			case "flip":
				typeof a == "string" && flipFromString(i, a);
				break;
			case "color":
				s = s + (s.length > 0 && s.trim().slice(-1) !== ";" ? ";" : "") + "color: " + a + "; ";
				break;
			case "rotate":
				typeof a == "string" ? i[t] = rotateFromString(a) : typeof a == "number" && (i[t] = a);
				break;
			case "ariaHidden":
			case "aria-hidden":
				a !== !0 && a !== "true" && delete o["aria-hidden"];
				break;
			default:
				if (t.slice(0, 3) === "on:") break;
				defaultExtendedIconCustomisations[t] === void 0 && (o[t] = a);
		}
	}
	let c = iconToSVG(t, i), l = c.attributes;
	if (i.inline && (s = "vertical-align: -0.125em; " + s), a === "svg") return Object.assign(o, l), s !== "" && (o.style = s), {
		svg: !0,
		attributes: o,
		body: replaceIDs(c.body)
	};
	let { body: u, width: d, height: f } = t, p = a === "mask" || (a === "bg" ? !1 : u.indexOf("currentColor") !== -1), m = iconToHTML(u, {
		...l,
		width: d + "",
		height: f + ""
	}), h = svgToURL(m), g = { "--svg": h }, _ = (t) => {
		let n = l[t];
		n && (g[t] = fixSize(n));
	};
	_("width"), _("height"), Object.assign(g, commonProps, p ? monotoneProps : coloredProps);
	let v = "";
	for (let t in g) v += t + ": " + g[t] + ";";
	return o.style = v + s, {
		svg: !1,
		attributes: o
	};
}
if (allowSimpleNames(!0), setAPIModule("", fetchAPIModule), typeof document < "u" && typeof window < "u") {
	let t = window;
	if (t.IconifyPreload !== void 0) {
		let n = t.IconifyPreload, i = "Invalid IconifyPreload syntax.";
		typeof n == "object" && n && (n instanceof Array ? n : [n]).forEach((t) => {
			try {
				(typeof t != "object" || !t || t instanceof Array || typeof t.icons != "object" || typeof t.prefix != "string" || !addCollection(t)) && console.error(i);
			} catch {
				console.error(i);
			}
		});
	}
	if (t.IconifyProviders !== void 0) {
		let n = t.IconifyProviders;
		if (typeof n == "object" && n) for (let t in n) {
			let i = "IconifyProviders[" + t + "] is invalid.";
			try {
				let a = n[t];
				if (typeof a != "object" || !a || a.resources === void 0) continue;
				addAPIProvider(t, a) || console.error(i);
			} catch {
				console.error(i);
			}
		}
	}
}
function isSSR() {
	try {
		return typeof window != "object";
	} catch {
		return !0;
	}
}
function checkIconState(t, n, i, a) {
	function o() {
		n.loading &&= (n.loading.abort(), null);
	}
	if (typeof t == "object" && t && typeof t.body == "string") return n.name = "", o(), { data: {
		...defaultIconProps,
		...t
	} };
	let s;
	if (typeof t != "string" || (s = stringToIcon(t, !1, !0)) === null) return o(), null;
	let c = getIconData(s);
	if (!c) return !isSSR() && (!n.loading || n.loading.name !== t) && (o(), n.name = "", n.loading = {
		name: t,
		abort: loadIcons([s], i)
	}), null;
	o(), n.name !== t && (n.name = t, a && !n.destroyed && setTimeout(() => {
		a(t);
	}));
	let l = ["iconify"];
	return s.prefix !== "" && l.push("iconify--" + s.prefix), s.provider !== "" && l.push("iconify--" + s.provider), {
		data: c,
		classes: l
	};
}
function generateIcon(t, n) {
	return t ? render({
		...defaultIconProps,
		...t
	}, n) : null;
}
var root_2$28 = /* @__PURE__ */ from_svg("<svg></svg>"), root_3$13 = /* @__PURE__ */ from_html("<span></span>");
function Icon(t, n) {
	push(n, !0);
	let i = {
		name: "",
		loading: null,
		destroyed: !1
	}, a = /* @__PURE__ */ rest_props(n, [
		"$$slots",
		"$$events",
		"$$legacy"
	]), o = /* @__PURE__ */ state(0), s = /* @__PURE__ */ user_derived(() => (get$2(o), checkIconState(n.icon, i, l, n.onload))), c = /* @__PURE__ */ user_derived(() => {
		let t = get$2(s) ? generateIcon(get$2(s).data, a) : null;
		return t && get$2(s).classes && a.class === void 0 && (t.attributes.class = (typeof a.class == "string" ? a.class + " " : "") + get$2(s).classes.join(" ")), t;
	});
	function l() {
		update(o);
	}
	onDestroy(() => {
		i.destroyed = !0, i.loading &&= (i.loading.abort(), null);
	});
	var u = comment(), d = first_child(u), f = (t) => {
		var n = comment(), i = first_child(n), a = (t) => {
			var n = root_2$28();
			attribute_effect(n, () => ({ ...get$2(c).attributes })), html(n, () => get$2(c).body, !0), reset(n), append(t, n);
		}, o = (t) => {
			var n = root_3$13();
			attribute_effect(n, () => ({ ...get$2(c).attributes })), append(t, n);
		};
		if_block(i, (t) => {
			get$2(c).svg ? t(a) : t(o, -1);
		}), append(t, n);
	};
	if_block(d, (t) => {
		get$2(c) && t(f);
	}), append(t, u), pop();
}
function isFunction$1(t) {
	return typeof t == "function";
}
function isObject(t) {
	return typeof t == "object" && !!t;
}
var CLASS_VALUE_PRIMITIVE_TYPES = [
	"string",
	"number",
	"bigint",
	"boolean"
];
function isClassValue(t) {
	return t == null || CLASS_VALUE_PRIMITIVE_TYPES.includes(typeof t) ? !0 : Array.isArray(t) ? t.every((t) => isClassValue(t)) : typeof t == "object" ? Object.getPrototypeOf(t) === Object.prototype : !1;
}
const BoxSymbol = Symbol("box"), isWritableSymbol = Symbol("is-writable");
function boxWith(t, n) {
	let i = /* @__PURE__ */ user_derived(t);
	return n ? {
		[BoxSymbol]: !0,
		[isWritableSymbol]: !0,
		get current() {
			return get$2(i);
		},
		set current(t) {
			n(t);
		}
	} : {
		[BoxSymbol]: !0,
		get current() {
			return t();
		}
	};
}
function isBox(t) {
	return isObject(t) && BoxSymbol in t;
}
function isWritableBox(t) {
	return isBox(t) && isWritableSymbol in t;
}
function boxFrom(t) {
	return isBox(t) ? t : isFunction$1(t) ? boxWith(t) : simpleBox(t);
}
function boxFlatten(t) {
	return Object.entries(t).reduce((t, [n, i]) => isBox(i) ? (isWritableBox(i) ? Object.defineProperty(t, n, {
		get() {
			return i.current;
		},
		set(t) {
			i.current = t;
		}
	}) : Object.defineProperty(t, n, { get() {
		return i.current;
	} }), t) : Object.assign(t, { [n]: i }), {});
}
function toReadonlyBox(t) {
	return isWritableBox(t) ? {
		[BoxSymbol]: !0,
		get current() {
			return t.current;
		}
	} : t;
}
function simpleBox(t) {
	let n = /* @__PURE__ */ state(proxy(t));
	return {
		[BoxSymbol]: !0,
		[isWritableSymbol]: !0,
		get current() {
			return get$2(n);
		},
		set current(t) {
			set(n, t, !0);
		}
	};
}
function box(t) {
	let n = /* @__PURE__ */ state(proxy(t));
	return {
		[BoxSymbol]: !0,
		[isWritableSymbol]: !0,
		get current() {
			return get$2(n);
		},
		set current(t) {
			set(n, t, !0);
		}
	};
}
box.from = boxFrom, box.with = boxWith, box.flatten = boxFlatten, box.readonly = toReadonlyBox, box.isBox = isBox, box.isWritableBox = isWritableBox;
function composeHandlers(...t) {
	return function(n) {
		for (let i of t) {
			if (!i) continue;
			if (n.defaultPrevented) return;
			typeof i == "function" ? i.call(this, n) : i.current?.call(this, n);
		}
	};
}
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, NEWLINE_REGEX = /\n/g, WHITESPACE_REGEX = /^\s*/, PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, COLON_REGEX = /^:\s*/, VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, SEMICOLON_REGEX = /^[;\s]*/, TRIM_REGEX = /^\s+|\s+$/g, NEWLINE = "\n", FORWARD_SLASH = "/", ASTERISK = "*", EMPTY_STRING = "", TYPE_COMMENT = "comment", TYPE_DECLARATION = "declaration";
function index(t, n) {
	if (typeof t != "string") throw TypeError("First argument must be a string");
	if (!t) return [];
	n ||= {};
	var i = 1, a = 1;
	function o(t) {
		var n = t.match(NEWLINE_REGEX);
		n && (i += n.length);
		var o = t.lastIndexOf(NEWLINE);
		a = ~o ? t.length - o : a + t.length;
	}
	function s() {
		var t = {
			line: i,
			column: a
		};
		return function(n) {
			return n.position = new c(t), d(), n;
		};
	}
	function c(t) {
		this.start = t, this.end = {
			line: i,
			column: a
		}, this.source = n.source;
	}
	c.prototype.content = t;
	function l(o) {
		var s = /* @__PURE__ */ Error(n.source + ":" + i + ":" + a + ": " + o);
		if (s.reason = o, s.filename = n.source, s.line = i, s.column = a, s.source = t, !n.silent) throw s;
	}
	function u(n) {
		var i = n.exec(t);
		if (i) {
			var a = i[0];
			return o(a), t = t.slice(a.length), i;
		}
	}
	function d() {
		u(WHITESPACE_REGEX);
	}
	function f(t) {
		var n;
		for (t ||= []; n = p();) n !== !1 && t.push(n);
		return t;
	}
	function p() {
		var n = s();
		if (!(FORWARD_SLASH != t.charAt(0) || ASTERISK != t.charAt(1))) {
			for (var i = 2; EMPTY_STRING != t.charAt(i) && (ASTERISK != t.charAt(i) || FORWARD_SLASH != t.charAt(i + 1));) ++i;
			if (i += 2, EMPTY_STRING === t.charAt(i - 1)) return l("End of comment missing");
			var c = t.slice(2, i - 2);
			return a += 2, o(c), t = t.slice(i), a += 2, n({
				type: TYPE_COMMENT,
				comment: c
			});
		}
	}
	function m() {
		var t = s(), n = u(PROPERTY_REGEX);
		if (n) {
			if (p(), !u(COLON_REGEX)) return l("property missing ':'");
			var i = u(VALUE_REGEX), a = t({
				type: TYPE_DECLARATION,
				property: trim(n[0].replace(COMMENT_REGEX, EMPTY_STRING)),
				value: i ? trim(i[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING
			});
			return u(SEMICOLON_REGEX), a;
		}
	}
	function h() {
		var t = [];
		f(t);
		for (var n; n = m();) n !== !1 && (t.push(n), f(t));
		return t;
	}
	return d(), h();
}
function trim(t) {
	return t ? t.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}
function StyleToObject(t, n) {
	let i = null;
	if (!t || typeof t != "string") return i;
	let a = index(t), o = typeof n == "function";
	return a.forEach((t) => {
		if (t.type !== "declaration") return;
		let { property: a, value: s } = t;
		o ? n(a, s, t) : s && (i ||= {}, i[a] = s);
	}), i;
}
var NUMBER_CHAR_RE = /\d/, STR_SPLITTERS = [
	"-",
	"_",
	"/",
	"."
];
function isUppercase(t = "") {
	if (!NUMBER_CHAR_RE.test(t)) return t !== t.toLowerCase();
}
function splitByCase(t) {
	let n = [], i = "", a, o;
	for (let s of t) {
		let t = STR_SPLITTERS.includes(s);
		if (t === !0) {
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
				let t = i.at(-1);
				n.push(i.slice(0, Math.max(0, i.length - 1))), i = t + s, a = c;
				continue;
			}
		}
		i += s, a = c, o = t;
	}
	return n.push(i), n;
}
function pascalCase(t) {
	return t ? splitByCase(t).map((t) => upperFirst(t)).join("") : "";
}
function camelCase(t) {
	return lowerFirst(pascalCase(t || ""));
}
function upperFirst(t) {
	return t ? t[0].toUpperCase() + t.slice(1) : "";
}
function lowerFirst(t) {
	return t ? t[0].toLowerCase() + t.slice(1) : "";
}
function cssToStyleObj(t) {
	if (!t) return {};
	let n = {};
	function i(t, i) {
		if (t.startsWith("-moz-") || t.startsWith("-webkit-") || t.startsWith("-ms-") || t.startsWith("-o-")) {
			n[pascalCase(t)] = i;
			return;
		}
		if (t.startsWith("--")) {
			n[t] = i;
			return;
		}
		n[camelCase(t)] = i;
	}
	return StyleToObject(t, i), n;
}
function executeCallbacks(...t) {
	return (...n) => {
		for (let i of t) typeof i == "function" && i(...n);
	};
}
function createParser(t, n) {
	let i = RegExp(t, "g");
	return (t) => {
		if (typeof t != "string") throw TypeError(`expected an argument of type string, but got ${typeof t}`);
		return t.match(i) ? t.replace(i, n) : t;
	};
}
var camelToKebab = createParser(/[A-Z]/, (t) => `-${t.toLowerCase()}`);
function styleToCSS(t) {
	if (!t || typeof t != "object" || Array.isArray(t)) throw TypeError(`expected an argument of type object, but got ${typeof t}`);
	return Object.keys(t).map((n) => `${camelToKebab(n)}: ${t[n]};`).join("\n");
}
function styleToString(t = {}) {
	return styleToCSS(t).replace("\n", " ");
}
var EVENT_LIST = /* @__PURE__ */ "onabort.onanimationcancel.onanimationend.onanimationiteration.onanimationstart.onauxclick.onbeforeinput.onbeforetoggle.onblur.oncancel.oncanplay.oncanplaythrough.onchange.onclick.onclose.oncompositionend.oncompositionstart.oncompositionupdate.oncontextlost.oncontextmenu.oncontextrestored.oncopy.oncuechange.oncut.ondblclick.ondrag.ondragend.ondragenter.ondragleave.ondragover.ondragstart.ondrop.ondurationchange.onemptied.onended.onerror.onfocus.onfocusin.onfocusout.onformdata.ongotpointercapture.oninput.oninvalid.onkeydown.onkeypress.onkeyup.onload.onloadeddata.onloadedmetadata.onloadstart.onlostpointercapture.onmousedown.onmouseenter.onmouseleave.onmousemove.onmouseout.onmouseover.onmouseup.onpaste.onpause.onplay.onplaying.onpointercancel.onpointerdown.onpointerenter.onpointerleave.onpointermove.onpointerout.onpointerover.onpointerup.onprogress.onratechange.onreset.onresize.onscroll.onscrollend.onsecuritypolicyviolation.onseeked.onseeking.onselect.onselectionchange.onselectstart.onslotchange.onstalled.onsubmit.onsuspend.ontimeupdate.ontoggle.ontouchcancel.ontouchend.ontouchmove.ontouchstart.ontransitioncancel.ontransitionend.ontransitionrun.ontransitionstart.onvolumechange.onwaiting.onwebkitanimationend.onwebkitanimationiteration.onwebkitanimationstart.onwebkittransitionend.onwheel".split(".");
const EVENT_LIST_SET = new Set(EVENT_LIST);
function isEventHandler(t) {
	return EVENT_LIST_SET.has(t);
}
function mergeProps(...t) {
	let n = { ...t[0] };
	for (let i = 1; i < t.length; i++) {
		let a = t[i];
		if (a) {
			for (let t of Object.keys(a)) {
				let i = n[t], o = a[t], s = typeof i == "function", c = typeof o == "function";
				if (s && typeof c && isEventHandler(t)) n[t] = composeHandlers(i, o);
				else if (s && c) n[t] = executeCallbacks(i, o);
				else if (t === "class") {
					let a = isClassValue(i), s = isClassValue(o);
					a && s ? n[t] = clsx(i, o) : a ? n[t] = clsx(i) : s && (n[t] = clsx(o));
				} else if (t === "style") {
					let a = typeof i == "object", s = typeof o == "object", c = typeof i == "string", l = typeof o == "string";
					if (a && s) n[t] = {
						...i,
						...o
					};
					else if (a && l) {
						let a = cssToStyleObj(o);
						n[t] = {
							...i,
							...a
						};
					} else if (c && s) n[t] = {
						...cssToStyleObj(i),
						...o
					};
					else if (c && l) {
						let a = cssToStyleObj(i), s = cssToStyleObj(o);
						n[t] = {
							...a,
							...s
						};
					} else a ? n[t] = i : s ? n[t] = o : c ? n[t] = i : l && (n[t] = o);
				} else n[t] = o === void 0 ? i : o;
			}
			for (let t of Object.getOwnPropertySymbols(a)) {
				let i = n[t], o = a[t];
				n[t] = o === void 0 ? i : o;
			}
		}
	}
	return typeof n.style == "object" && (n.style = styleToString(n.style).replaceAll("\n", " ")), n.hidden === !1 && (n.hidden = void 0, delete n.hidden), n.disabled === !1 && (n.disabled = void 0, delete n.disabled), n;
}
const defaultWindow = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
function getActiveElement$1(t) {
	let n = t.activeElement;
	for (; n?.shadowRoot;) {
		let t = n.shadowRoot.activeElement;
		if (t === n) break;
		n = t;
	}
	return n;
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
], inited = !1, SvelteSet = class t extends Set {
	#sources = /* @__PURE__ */ new Map();
	#version = /* @__PURE__ */ state(0);
	#size = /* @__PURE__ */ state(0);
	#update_version = update_version || -1;
	constructor(t) {
		if (super(), t) {
			for (var n of t) super.add(n);
			this.#size.v = super.size;
		}
		inited || this.#init();
	}
	#source(t) {
		return update_version === this.#update_version ? /* @__PURE__ */ state(t) : source(t);
	}
	#init() {
		inited = !0;
		var n = t.prototype, i = Set.prototype;
		for (let t of read_methods) n[t] = function(...n) {
			return get$2(this.#version), i[t].apply(this, n);
		};
		for (let a of set_like_methods) n[a] = function(...n) {
			get$2(this.#version);
			var o = i[a].apply(this, n);
			return new t(o);
		};
	}
	has(t) {
		var n = super.has(t), i = this.#sources, a = i.get(t);
		if (a === void 0) {
			if (!n) return get$2(this.#version), !1;
			a = this.#source(!0), i.set(t, a);
		}
		return get$2(a), n;
	}
	add(t) {
		return super.has(t) || (super.add(t), set(this.#size, super.size), increment(this.#version)), this;
	}
	delete(t) {
		var n = super.delete(t), i = this.#sources, a = i.get(t);
		return a !== void 0 && (i.delete(t), set(a, !1)), n && (set(this.#size, super.size), increment(this.#version)), n;
	}
	clear() {
		if (super.size !== 0) {
			super.clear();
			var t = this.#sources;
			for (var n of t.values()) set(n, !1);
			t.clear(), set(this.#size, 0), increment(this.#version);
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
	constructor(t) {
		if (super(), t) {
			for (var [n, i] of t) super.set(n, i);
			this.#size.v = super.size;
		}
	}
	#source(t) {
		return update_version === this.#update_version ? /* @__PURE__ */ state(t) : source(t);
	}
	has(t) {
		var n = this.#sources, i = n.get(t);
		if (i === void 0) if (super.has(t)) i = this.#source(0), n.set(t, i);
		else return get$2(this.#version), !1;
		return get$2(i), !0;
	}
	forEach(t, n) {
		this.#read_all(), super.forEach(t, n);
	}
	get(t) {
		var n = this.#sources, i = n.get(t);
		if (i === void 0) if (super.has(t)) i = this.#source(0), n.set(t, i);
		else {
			get$2(this.#version);
			return;
		}
		return get$2(i), super.get(t);
	}
	set(t, n) {
		var i = this.#sources, a = i.get(t), o = super.get(t), s = super.set(t, n), c = this.#version;
		if (a === void 0) a = this.#source(0), i.set(t, a), set(this.#size, super.size), increment(c);
		else if (o !== n) {
			increment(a);
			var l = c.reactions === null ? null : new Set(c.reactions);
			(l === null || !a.reactions?.every((t) => l.has(t))) && increment(c);
		}
		return s;
	}
	delete(t) {
		var n = this.#sources, i = n.get(t), a = super.delete(t);
		return i !== void 0 && (n.delete(t), set(i, -1)), a && (set(this.#size, super.size), increment(this.#version)), a;
	}
	clear() {
		if (super.size !== 0) {
			super.clear();
			var t = this.#sources;
			set(this.#size, 0);
			for (var n of t.values()) set(n, -1);
			increment(this.#version), t.clear();
		}
	}
	#read_all() {
		get$2(this.#version);
		var t = this.#sources;
		if (this.#size.v !== t.size) {
			for (var n of super.keys()) if (!t.has(n)) {
				var i = this.#source(0);
				t.set(n, i);
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
URLSearchParams, Symbol.iterator, new class {
	#document;
	#subscribe;
	constructor(t = {}) {
		let { window: n = defaultWindow, document: i = n?.document } = t;
		n !== void 0 && (this.#document = i, this.#subscribe = createSubscriber((t) => {
			let i = on(n, "focusin", t), a = on(n, "focusout", t);
			return () => {
				i(), a();
			};
		}));
	}
	get current() {
		return this.#subscribe?.(), this.#document ? getActiveElement$1(this.#document) : null;
	}
}();
function isFunction(t) {
	return typeof t == "function";
}
var Context = class {
	#name;
	#key;
	constructor(t) {
		this.#name = t, this.#key = Symbol(t);
	}
	get key() {
		return this.#key;
	}
	exists() {
		return hasContext(this.#key);
	}
	get() {
		let t = getContext(this.#key);
		if (t === void 0) throw Error(`Context "${this.#name}" not found`);
		return t;
	}
	getOr(t) {
		let n = getContext(this.#key);
		return n === void 0 ? t : n;
	}
	set(t) {
		return setContext(this.#key, t);
	}
};
function runEffect(t, n) {
	switch (t) {
		case "post":
			user_effect(n);
			break;
		case "pre":
			user_pre_effect(n);
			break;
	}
}
function runWatcher(t, n, i, a = {}) {
	let { lazy: o = !1 } = a, s = !o, c = Array.isArray(t) ? [] : void 0;
	runEffect(n, () => {
		let n = Array.isArray(t) ? t.map((t) => t()) : t();
		if (!s) {
			s = !0, c = n;
			return;
		}
		let a = untrack(() => i(n, c));
		return c = n, a;
	});
}
function runWatcherOnce(t, n, i) {
	let a = effect_root(() => {
		let o = !1;
		runWatcher(t, n, (t, n) => {
			if (o) {
				a();
				return;
			}
			let s = i(t, n);
			return o = !0, s;
		}, { lazy: !0 });
	});
	user_effect(() => a);
}
function watch(t, n, i) {
	runWatcher(t, "post", n, i);
}
function watchPre(t, n, i) {
	runWatcher(t, "pre", n, i);
}
watch.pre = watchPre;
function watchOnce(t, n) {
	runWatcherOnce(t, "post", n);
}
function watchOncePre(t, n) {
	runWatcherOnce(t, "pre", n);
}
watchOnce.pre = watchOncePre;
function get$1(t) {
	return isFunction(t) ? t() : t;
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
		let t = get$1(this.#node);
		if (t) return createSubscriber((n) => {
			if (!this.#window) return;
			let i = new this.#window.ResizeObserver((t) => {
				this.#observed = !0;
				for (let n of t) {
					let t = this.#options.box === "content-box" ? n.contentBoxSize : n.borderBoxSize, i = Array.isArray(t) ? t : [t];
					this.#size.width = i.reduce((t, n) => Math.max(t, n.inlineSize), 0), this.#size.height = i.reduce((t, n) => Math.max(t, n.blockSize), 0);
				}
				n();
			});
			return i.observe(t), () => {
				this.#observed = !1, i.disconnect();
			};
		});
	});
	constructor(t, n = { box: "border-box" }) {
		this.#window = n.window ?? defaultWindow, this.#options = n, this.#node = t, this.#size = {
			width: 0,
			height: 0
		};
	}
	calculateSize() {
		let t = get$1(this.#node);
		if (!t || !this.#window) return;
		let n = t.offsetWidth, i = t.offsetHeight;
		if (this.#options.box === "border-box") return {
			width: n,
			height: i
		};
		let a = this.#window.getComputedStyle(t), o = parseFloat(a.paddingLeft) + parseFloat(a.paddingRight), s = parseFloat(a.paddingTop) + parseFloat(a.paddingBottom), c = parseFloat(a.borderLeftWidth) + parseFloat(a.borderRightWidth), l = parseFloat(a.borderTopWidth) + parseFloat(a.borderBottomWidth), u = n - o - c, d = i - s - l;
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
};
function debounce$1(t, n) {
	let i, a = null;
	return (...o) => new Promise((s) => {
		a && a(void 0), a = s, clearTimeout(i), i = setTimeout(async () => {
			let n = await t(...o);
			a &&= (a(n), null);
		}, n);
	});
}
function throttle(t, n) {
	let i = 0, a = null;
	return (...o) => {
		let s = Date.now();
		return i && s - i < n ? a ?? Promise.resolve(void 0) : (i = s, a = t(...o), a);
	};
}
function runResource(t, n, i = {}, a) {
	let { lazy: o = !1, once: s = !1, initialValue: c, debounce: l, throttle: u } = i, d = /* @__PURE__ */ state(proxy(c)), f = /* @__PURE__ */ state(!1), p = /* @__PURE__ */ state(void 0), m = /* @__PURE__ */ state(proxy([])), h = () => {
		get$2(m).forEach((t) => t()), set(m, [], !0);
	}, g = (t) => {
		set(m, [...get$2(m), t], !0);
	}, _ = async (t, i, a = !1) => {
		try {
			set(f, !0), set(p, void 0), h();
			let o = new AbortController();
			g(() => o.abort());
			let s = await n(t, i, {
				data: get$2(d),
				refetching: a,
				onCleanup: g,
				signal: o.signal
			});
			return set(d, s, !0), s;
		} catch (t) {
			t instanceof DOMException && t.name === "AbortError" || set(p, t, !0);
			return;
		} finally {
			set(f, !1);
		}
	}, v = l ? debounce$1(_, l) : u ? throttle(_, u) : _, y = Array.isArray(t) ? t : [t], b;
	return a((n, i) => {
		s && b || (b = n, v(Array.isArray(t) ? n : n[0], Array.isArray(t) ? i : i?.[0]));
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
		mutate: (t) => {
			set(d, t, !0);
		},
		refetch: (n) => {
			let i = y.map((t) => t());
			return v(Array.isArray(t) ? i : i[0], Array.isArray(t) ? i : i[0], n ?? !0);
		}
	};
}
function resource(t, n, i) {
	return runResource(t, n, i, (n, i) => {
		let a = Array.isArray(t) ? t : [t];
		watch(() => a.map((t) => t()), (t, i) => {
			n(t, i ?? []);
		}, i);
	});
}
function resourcePre(t, n, i) {
	return runResource(t, n, i, (n, i) => {
		let a = Array.isArray(t) ? t : [t];
		watch.pre(() => a.map((t) => t()), (t, i) => {
			n(t, i ?? []);
		}, i);
	});
}
resource.pre = resourcePre;
function onDestroyEffect(t) {
	user_effect(() => () => {
		t();
	});
}
function onMountEffect(t) {
	user_effect(() => untrack(() => t()));
}
function afterSleep(t, n) {
	return setTimeout(n, t);
}
function afterTick(t) {
	tick().then(t);
}
var ELEMENT_NODE = 1, DOCUMENT_NODE = 9, DOCUMENT_FRAGMENT_NODE = 11;
function isHTMLElement$2(t) {
	return isObject(t) && t.nodeType === ELEMENT_NODE && typeof t.nodeName == "string";
}
function isDocument(t) {
	return isObject(t) && t.nodeType === DOCUMENT_NODE;
}
function isWindow(t) {
	return isObject(t) && t.constructor?.name === "VisualViewport";
}
function isNode$1(t) {
	return isObject(t) && t.nodeType !== void 0;
}
function isShadowRoot$1(t) {
	return isNode$1(t) && t.nodeType === DOCUMENT_FRAGMENT_NODE && "host" in t;
}
function contains(t, n) {
	if (!t || !n || !isHTMLElement$2(t) || !isHTMLElement$2(n)) return !1;
	let i = n.getRootNode?.();
	if (t === n || t.contains(n)) return !0;
	if (i && isShadowRoot$1(i)) {
		let i = n;
		for (; i;) {
			if (t === i) return !0;
			i = i.parentNode || i.host;
		}
	}
	return !1;
}
function getDocument(t) {
	return isDocument(t) ? t : isWindow(t) ? t.document : t?.ownerDocument ?? document;
}
function getWindow(t) {
	return isShadowRoot$1(t) ? getWindow(t.host) : isDocument(t) ? t.defaultView ?? window : isHTMLElement$2(t) ? t.ownerDocument?.defaultView ?? window : window;
}
function getActiveElement(t) {
	let n = t.activeElement;
	for (; n?.shadowRoot;) {
		let t = n.shadowRoot.activeElement;
		if (t === n) break;
		n = t;
	}
	return n;
}
var DOMContext = class {
	element;
	#root = /* @__PURE__ */ user_derived(() => this.element.current ? this.element.current.getRootNode() ?? document : document);
	get root() {
		return get$2(this.#root);
	}
	set root(t) {
		set(this.#root, t);
	}
	constructor(t) {
		typeof t == "function" ? this.element = boxWith(t) : this.element = t;
	}
	getDocument = () => getDocument(this.root);
	getWindow = () => this.getDocument().defaultView ?? window;
	getActiveElement = () => getActiveElement(this.root);
	isActiveElement = (t) => t === this.getActiveElement();
	getElementById(t) {
		return this.root.getElementById(t);
	}
	querySelector = (t) => this.root ? this.root.querySelector(t) : null;
	querySelectorAll = (t) => this.root ? this.root.querySelectorAll(t) : [];
	setTimeout = (t, n) => this.getWindow().setTimeout(t, n);
	clearTimeout = (t) => this.getWindow().clearTimeout(t);
};
function attachRef(t, n) {
	return { [createAttachmentKey()]: (i) => isBox(t) ? (t.current = i, untrack(() => n?.(i)), () => {
		"isConnected" in i && i.isConnected || (t.current = null, n?.(null));
	}) : (t(i), untrack(() => n?.(i)), () => {
		"isConnected" in i && i.isConnected || (t(null), n?.(null));
	}) };
}
function boolToStr(t) {
	return t ? "true" : "false";
}
function boolToEmptyStrOrUndef(t) {
	return t ? "" : void 0;
}
function boolToTrueOrUndef(t) {
	return t ? !0 : void 0;
}
function getDataOpenClosed(t) {
	return t ? "open" : "closed";
}
function getDataTransitionAttrs(t) {
	return t === "starting" ? { "data-starting-style": "" } : t === "ending" ? { "data-ending-style": "" } : {};
}
function getAriaChecked(t, n) {
	return n ? "mixed" : t ? "true" : "false";
}
var BitsAttrs = class {
	#variant;
	#prefix;
	attrs;
	constructor(t) {
		this.#variant = t.getVariant ? t.getVariant() : null, this.#prefix = this.#variant ? `data-${this.#variant}-` : `data-${t.component}-`, this.getAttr = this.getAttr.bind(this), this.selector = this.selector.bind(this), this.attrs = Object.fromEntries(t.parts.map((t) => [t, this.getAttr(t)]));
	}
	getAttr(t, n) {
		return n ? `data-${n}-${t}` : `${this.#prefix}${t}`;
	}
	selector(t, n) {
		return `[${this.getAttr(t, n)}]`;
	}
};
function createBitsAttrs(t) {
	let n = new BitsAttrs(t);
	return {
		...n.attrs,
		selector: n.selector,
		getAttr: n.getAttr
	};
}
const ARROW_DOWN = "ArrowDown", ARROW_LEFT = "ArrowLeft", ARROW_RIGHT = "ArrowRight", ARROW_UP = "ArrowUp", HOME = "Home";
function getElemDirection(t) {
	return window.getComputedStyle(t).getPropertyValue("direction");
}
const FIRST_KEYS = [
	ARROW_DOWN,
	"PageUp",
	HOME
], LAST_KEYS = [
	ARROW_UP,
	"PageDown",
	"End"
];
[...FIRST_KEYS, ...LAST_KEYS];
function getNextKey(t = "ltr", n = "horizontal") {
	return {
		horizontal: t === "rtl" ? ARROW_LEFT : ARROW_RIGHT,
		vertical: ARROW_DOWN
	}[n];
}
function getPrevKey(t = "ltr", n = "horizontal") {
	return {
		horizontal: t === "rtl" ? ARROW_RIGHT : ARROW_LEFT,
		vertical: ARROW_UP
	}[n];
}
function getDirectionalKeys(t = "ltr", n = "horizontal") {
	return ["ltr", "rtl"].includes(t) || (t = "ltr"), ["horizontal", "vertical"].includes(n) || (n = "horizontal"), {
		nextKey: getNextKey(t, n),
		prevKey: getPrevKey(t, n)
	};
}
const isBrowser = typeof document < "u", isIOS = getIsIOS();
function getIsIOS() {
	return isBrowser && window?.navigator?.userAgent && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || window?.navigator?.maxTouchPoints > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function isHTMLElement$1(t) {
	return t instanceof HTMLElement;
}
function isElement(t) {
	return t instanceof Element;
}
function isElementOrSVGElement(t) {
	return t instanceof Element || t instanceof SVGElement;
}
function isFocusVisible(t) {
	return t.matches(":focus-visible");
}
function isNotNull(t) {
	return t !== null;
}
var RovingFocusGroup = class {
	#opts;
	#currentTabStopId = box(null);
	constructor(t) {
		this.#opts = t;
	}
	getCandidateNodes() {
		return this.#opts.rootNode.current ? this.#opts.candidateSelector ? Array.from(this.#opts.rootNode.current.querySelectorAll(this.#opts.candidateSelector)) : this.#opts.candidateAttr ? Array.from(this.#opts.rootNode.current.querySelectorAll(`[${this.#opts.candidateAttr}]:not([data-disabled])`)) : [] : [];
	}
	focusFirstCandidate() {
		let t = this.getCandidateNodes();
		t.length && t[0]?.focus();
	}
	handleKeydown(t, n, i = !1) {
		let a = this.#opts.rootNode.current;
		if (!a || !t) return;
		let o = this.getCandidateNodes();
		if (!o.length) return;
		let s = o.indexOf(t), c = getElemDirection(a), { nextKey: l, prevKey: u } = getDirectionalKeys(c, this.#opts.orientation.current), d = this.#opts.loop.current, f = {
			[l]: s + 1,
			[u]: s - 1,
			[HOME]: 0,
			End: o.length - 1
		};
		if (i) {
			let t = l === "ArrowDown" ? ARROW_RIGHT : ARROW_DOWN, n = u === "ArrowUp" ? ARROW_LEFT : ARROW_UP;
			f[t] = s + 1, f[n] = s - 1;
		}
		let p = f[n.key];
		if (p === void 0) return;
		n.preventDefault(), p < 0 && d ? p = o.length - 1 : p === o.length && d && (p = 0);
		let m = o[p];
		if (m) return m.focus(), this.#currentTabStopId.current = m.id, this.#opts.onCandidateFocus?.(m), m;
	}
	getTabIndex(t) {
		let n = this.getCandidateNodes(), i = this.#currentTabStopId.current !== null;
		return t && !i && n[0] === t ? (this.#currentTabStopId.current = t.id, 0) : t?.id === this.#currentTabStopId.current ? 0 : -1;
	}
	setCurrentTabStopId(t) {
		this.#currentTabStopId.current = t;
	}
	focusCurrentTabStop() {
		let t = this.#currentTabStopId.current;
		if (!t) return;
		let n = this.#opts.rootNode.current?.querySelector(`#${t}`);
		!n || !isHTMLElement$1(n) || n.focus();
	}
}, AnimationsComplete = class {
	#opts;
	#currentFrame = null;
	#observer = null;
	#runId = 0;
	constructor(t) {
		this.#opts = t, onDestroyEffect(() => this.#cleanup());
	}
	#cleanup() {
		this.#currentFrame !== null && (window.cancelAnimationFrame(this.#currentFrame), this.#currentFrame = null), this.#observer?.disconnect(), this.#observer = null, this.#runId++;
	}
	run(t) {
		this.#cleanup();
		let n = this.#opts.ref.current;
		if (!n) return;
		if (typeof n.getAnimations != "function") {
			this.#executeCallback(t);
			return;
		}
		let i = this.#runId, a = () => {
			i === this.#runId && this.#executeCallback(t);
		}, o = () => {
			if (i !== this.#runId) return;
			let t = n.getAnimations();
			if (t.length === 0) {
				a();
				return;
			}
			Promise.all(t.map((t) => t.finished)).then(() => {
				a();
			}).catch(() => {
				if (i === this.#runId) {
					if (n.getAnimations().some((t) => t.pending || t.playState !== "finished")) {
						o();
						return;
					}
					a();
				}
			});
		}, s = () => {
			this.#currentFrame = window.requestAnimationFrame(() => {
				this.#currentFrame = null, o();
			});
		};
		if (!this.#opts.afterTick.current) {
			s();
			return;
		}
		this.#currentFrame = window.requestAnimationFrame(() => {
			this.#currentFrame = null;
			let t = "data-starting-style";
			if (!n.hasAttribute(t)) {
				s();
				return;
			}
			this.#observer = new MutationObserver(() => {
				i === this.#runId && (n.hasAttribute(t) || (this.#observer?.disconnect(), this.#observer = null, s()));
			}), this.#observer.observe(n, {
				attributes: !0,
				attributeFilter: [t]
			});
		});
	}
	#executeCallback(t) {
		let n = () => {
			t();
		};
		this.#opts.afterTick ? afterTick(n) : n();
	}
}, PresenceManager = class {
	#opts;
	#enabled;
	#afterAnimations;
	#shouldRender = /* @__PURE__ */ state(!1);
	#transitionStatus = /* @__PURE__ */ state(void 0);
	#hasMounted = !1;
	#transitionFrame = null;
	constructor(t) {
		this.#opts = t, set(this.#shouldRender, t.open.current, !0), this.#enabled = t.enabled ?? !0, this.#afterAnimations = new AnimationsComplete({
			ref: this.#opts.ref,
			afterTick: this.#opts.open
		}), onDestroyEffect(() => this.#clearTransitionFrame()), watch(() => this.#opts.open.current, (t) => {
			if (!this.#hasMounted) {
				this.#hasMounted = !0;
				return;
			}
			if (this.#clearTransitionFrame(), !t && this.#opts.shouldSkipExitAnimation?.()) {
				set(this.#shouldRender, !1), set(this.#transitionStatus, void 0), this.#opts.onComplete?.();
				return;
			}
			if (t && set(this.#shouldRender, !0), set(this.#transitionStatus, t ? "starting" : "ending", !0), t && (this.#transitionFrame = window.requestAnimationFrame(() => {
				this.#transitionFrame = null, this.#opts.open.current && set(this.#transitionStatus, void 0);
			})), !this.#enabled) {
				t || set(this.#shouldRender, !1), set(this.#transitionStatus, void 0), this.#opts.onComplete?.();
				return;
			}
			this.#afterAnimations.run(() => {
				t === this.#opts.open.current && (this.#opts.open.current || set(this.#shouldRender, !1), set(this.#transitionStatus, void 0), this.#opts.onComplete?.());
			});
		});
	}
	get shouldRender() {
		return get$2(this.#shouldRender);
	}
	get transitionStatus() {
		return get$2(this.#transitionStatus);
	}
	#clearTransitionFrame() {
		this.#transitionFrame !== null && (window.cancelAnimationFrame(this.#transitionFrame), this.#transitionFrame = null);
	}
};
function noop() {}
function createId(t, n) {
	return n === void 0 ? `bits-${t}` : `bits-${t}-${n}`;
}
var dialogAttrs = createBitsAttrs({
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
}), DialogRootContext = new Context("Dialog.Root | AlertDialog.Root"), DialogRootState = class t {
	static create(n) {
		let i = DialogRootContext.getOr(null);
		return DialogRootContext.set(new t(n, i));
	}
	opts;
	#triggerNode = /* @__PURE__ */ state(null);
	get triggerNode() {
		return get$2(this.#triggerNode);
	}
	set triggerNode(t) {
		set(this.#triggerNode, t, !0);
	}
	#contentNode = /* @__PURE__ */ state(null);
	get contentNode() {
		return get$2(this.#contentNode);
	}
	set contentNode(t) {
		set(this.#contentNode, t, !0);
	}
	#overlayNode = /* @__PURE__ */ state(null);
	get overlayNode() {
		return get$2(this.#overlayNode);
	}
	set overlayNode(t) {
		set(this.#overlayNode, t, !0);
	}
	#descriptionNode = /* @__PURE__ */ state(null);
	get descriptionNode() {
		return get$2(this.#descriptionNode);
	}
	set descriptionNode(t) {
		set(this.#descriptionNode, t, !0);
	}
	#contentId = /* @__PURE__ */ state(void 0);
	get contentId() {
		return get$2(this.#contentId);
	}
	set contentId(t) {
		set(this.#contentId, t, !0);
	}
	#titleId = /* @__PURE__ */ state(void 0);
	get titleId() {
		return get$2(this.#titleId);
	}
	set titleId(t) {
		set(this.#titleId, t, !0);
	}
	#triggerId = /* @__PURE__ */ state(void 0);
	get triggerId() {
		return get$2(this.#triggerId);
	}
	set triggerId(t) {
		set(this.#triggerId, t, !0);
	}
	#descriptionId = /* @__PURE__ */ state(void 0);
	get descriptionId() {
		return get$2(this.#descriptionId);
	}
	set descriptionId(t) {
		set(this.#descriptionId, t, !0);
	}
	#cancelNode = /* @__PURE__ */ state(null);
	get cancelNode() {
		return get$2(this.#cancelNode);
	}
	set cancelNode(t) {
		set(this.#cancelNode, t, !0);
	}
	#nestedOpenCount = /* @__PURE__ */ state(0);
	get nestedOpenCount() {
		return get$2(this.#nestedOpenCount);
	}
	set nestedOpenCount(t) {
		set(this.#nestedOpenCount, t, !0);
	}
	depth;
	parent;
	contentPresence;
	overlayPresence;
	constructor(t, n) {
		this.opts = t, this.parent = n, this.depth = n ? n.depth + 1 : 0, this.handleOpen = this.handleOpen.bind(this), this.handleClose = this.handleClose.bind(this), this.contentPresence = new PresenceManager({
			ref: boxWith(() => this.contentNode),
			open: this.opts.open,
			enabled: !0,
			onComplete: () => {
				this.opts.onOpenChangeComplete.current(this.opts.open.current);
			}
		}), this.overlayPresence = new PresenceManager({
			ref: boxWith(() => this.overlayNode),
			open: this.opts.open,
			enabled: !0
		}), watch(() => this.opts.open.current, (t) => {
			this.parent && (t ? this.parent.incrementNested() : this.parent.decrementNested());
		}, { lazy: !0 }), onDestroyEffect(() => {
			this.opts.open.current && this.parent?.decrementNested();
		});
	}
	handleOpen() {
		this.opts.open.current || (this.opts.open.current = !0);
	}
	handleClose() {
		this.opts.open.current && (this.opts.open.current = !1);
	}
	getBitsAttr = (t) => dialogAttrs.getAttr(t, this.opts.variant.current);
	incrementNested() {
		this.nestedOpenCount++, this.parent?.incrementNested();
	}
	decrementNested() {
		this.nestedOpenCount !== 0 && (this.nestedOpenCount--, this.parent?.decrementNested());
	}
	#sharedProps = /* @__PURE__ */ user_derived(() => ({ "data-state": getDataOpenClosed(this.opts.open.current) }));
	get sharedProps() {
		return get$2(this.#sharedProps);
	}
	set sharedProps(t) {
		set(this.#sharedProps, t);
	}
}, DialogCloseState = class t {
	static create(n) {
		return new t(n, DialogRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(t, n) {
		this.opts = t, this.root = n, this.attachment = attachRef(this.opts.ref), this.onclick = this.onclick.bind(this), this.onkeydown = this.onkeydown.bind(this);
	}
	onclick(t) {
		this.opts.disabled.current || t.button > 0 || this.root.handleClose();
	}
	onkeydown(t) {
		this.opts.disabled.current || (t.key === " " || t.key === "Enter") && (t.preventDefault(), this.root.handleClose());
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
	set props(t) {
		set(this.#props, t);
	}
}, DialogTitleState = class t {
	static create(n) {
		return new t(n, DialogRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(t, n) {
		this.opts = t, this.root = n, this.root.titleId = this.opts.id.current, this.attachment = attachRef(this.opts.ref), watch.pre(() => this.opts.id.current, (t) => {
			this.root.titleId = t;
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
	set props(t) {
		set(this.#props, t);
	}
}, DialogContentState = class t {
	static create(n) {
		return new t(n, DialogRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(t, n) {
		this.opts = t, this.root = n, this.attachment = attachRef(this.opts.ref, (t) => {
			this.root.contentNode = t, this.root.contentId = t?.id;
		});
	}
	#snippetProps = /* @__PURE__ */ user_derived(() => ({ open: this.root.opts.open.current }));
	get snippetProps() {
		return get$2(this.#snippetProps);
	}
	set snippetProps(t) {
		set(this.#snippetProps, t);
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
			outline: this.root.opts.variant.current === "alert-dialog" ? "none" : void 0,
			"--bits-dialog-depth": this.root.depth,
			"--bits-dialog-nested-count": this.root.nestedOpenCount,
			contain: "layout style"
		},
		tabindex: this.root.opts.variant.current === "alert-dialog" ? -1 : void 0,
		"data-nested-open": boolToEmptyStrOrUndef(this.root.nestedOpenCount > 0),
		"data-nested": boolToEmptyStrOrUndef(this.root.parent !== null),
		...getDataTransitionAttrs(this.root.contentPresence.transitionStatus),
		...this.root.sharedProps,
		...this.attachment
	}));
	get props() {
		return get$2(this.#props);
	}
	set props(t) {
		set(this.#props, t);
	}
	get shouldRender() {
		return this.root.contentPresence.shouldRender;
	}
}, DialogOverlayState = class t {
	static create(n) {
		return new t(n, DialogRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(t, n) {
		this.opts = t, this.root = n, this.attachment = attachRef(this.opts.ref, (t) => this.root.overlayNode = t);
	}
	#snippetProps = /* @__PURE__ */ user_derived(() => ({ open: this.root.opts.open.current }));
	get snippetProps() {
		return get$2(this.#snippetProps);
	}
	set snippetProps(t) {
		set(this.#snippetProps, t);
	}
	#props = /* @__PURE__ */ user_derived(() => ({
		id: this.opts.id.current,
		[this.root.getBitsAttr("overlay")]: "",
		style: {
			pointerEvents: "auto",
			"--bits-dialog-depth": this.root.depth,
			"--bits-dialog-nested-count": this.root.nestedOpenCount
		},
		"data-nested-open": boolToEmptyStrOrUndef(this.root.nestedOpenCount > 0),
		"data-nested": boolToEmptyStrOrUndef(this.root.parent !== null),
		...getDataTransitionAttrs(this.root.overlayPresence.transitionStatus),
		...this.root.sharedProps,
		...this.attachment
	}));
	get props() {
		return get$2(this.#props);
	}
	set props(t) {
		set(this.#props, t);
	}
	get shouldRender() {
		return this.root.overlayPresence.shouldRender;
	}
}, root_2$27 = /* @__PURE__ */ from_html("<div><!></div>");
function Dialog_title(t, n) {
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
		ref: boxWith(() => o(), (t) => o(t))
	}), u = /* @__PURE__ */ user_derived(() => mergeProps(c, l.props));
	var d = comment(), f = first_child(d), p = (t) => {
		var i = comment(), a = first_child(i);
		snippet(a, () => n.child, () => ({ props: get$2(u) })), append(t, i);
	}, m = (t) => {
		var i = root_2$27();
		attribute_effect(i, () => ({ ...get$2(u) }));
		var a = child(i);
		snippet(a, () => n.children ?? noop$1), reset(i), append(t, i);
	};
	if_block(f, (t) => {
		n.child ? t(p) : t(m, -1);
	}), append(t, d), pop();
}
function Portal_consumer(t, n) {
	var i = comment(), a = first_child(i);
	key(a, () => n.children, (t) => {
		var i = comment(), a = first_child(i);
		snippet(a, () => n.children ?? noop$1), append(t, i);
	}), append(t, i);
}
const BitsConfigContext = new Context("BitsConfig");
function getBitsConfig() {
	let t = new BitsConfigState(null, {});
	return BitsConfigContext.getOr(t).opts;
}
var BitsConfigState = class {
	opts;
	constructor(t, n) {
		let i = createConfigResolver(t, n);
		this.opts = {
			defaultPortalTo: i((t) => t.defaultPortalTo),
			defaultLocale: i((t) => t.defaultLocale)
		};
	}
};
function createConfigResolver(t, n) {
	return (i) => boxWith(() => {
		let a = i(n)?.current;
		if (a !== void 0) return a;
		if (t !== null) return i(t.opts)?.current;
	});
}
function createPropResolver(t, n) {
	return (i) => {
		let a = getBitsConfig();
		return boxWith(() => {
			let o = i();
			if (o !== void 0) return o;
			let s = t(a).current;
			return s === void 0 ? n : s;
		});
	};
}
const resolvePortalToProp = createPropResolver((t) => t.defaultPortalTo, "body");
function Portal(t, n) {
	push(n, !0);
	let i = resolvePortalToProp(() => n.to), a = getAllContexts(), o = /* @__PURE__ */ user_derived(s);
	function s() {
		if (!isBrowser || n.disabled) return null;
		let t = null;
		return t = typeof i.current == "string" ? document.querySelector(i.current) : i.current, t;
	}
	let c;
	function l() {
		c &&= (unmount(c), null);
	}
	watch([() => get$2(o), () => n.disabled], ([t, i]) => {
		if (!t || i) {
			l();
			return;
		}
		return c = mount(Portal_consumer, {
			target: t,
			props: { children: n.children },
			context: a
		}), () => {
			l();
		};
	});
	var u = comment(), d = first_child(u), f = (t) => {
		var i = comment(), a = first_child(i);
		snippet(a, () => n.children ?? noop$1), append(t, i);
	};
	if_block(d, (t) => {
		n.disabled && t(f);
	}), append(t, u), pop();
}
var CustomEventDispatcher = class {
	eventName;
	options;
	constructor(t, n = {
		bubbles: !0,
		cancelable: !0
	}) {
		this.eventName = t, this.options = n;
	}
	createEvent(t) {
		return new CustomEvent(this.eventName, {
			...this.options,
			detail: t
		});
	}
	dispatch(t, n) {
		let i = this.createEvent(n);
		return t.dispatchEvent(i), i;
	}
	listen(t, n, i) {
		return on(t, this.eventName, (t) => {
			n(t);
		}, i);
	}
};
function debounce(t, n = 500) {
	let i = null, a = (...a) => {
		i !== null && clearTimeout(i), i = setTimeout(() => {
			t(...a);
		}, n);
	};
	return a.destroy = () => {
		i !== null && (clearTimeout(i), i = null);
	}, a;
}
function isOrContainsTarget(t, n) {
	return t === n || t.contains(n);
}
function getOwnerDocument(t) {
	return t?.ownerDocument ?? document;
}
function isClickTrulyOutside(t, n) {
	let { clientX: i, clientY: a } = t, o = n.getBoundingClientRect();
	return i < o.left || i > o.right || a < o.top || a > o.bottom;
}
/*!
* tabbable 6.4.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var candidateSelectors = [
	"input:not([inert]):not([inert] *)",
	"select:not([inert]):not([inert] *)",
	"textarea:not([inert]):not([inert] *)",
	"a[href]:not([inert]):not([inert] *)",
	"button:not([inert]):not([inert] *)",
	"[tabindex]:not(slot):not([inert]):not([inert] *)",
	"audio[controls]:not([inert]):not([inert] *)",
	"video[controls]:not([inert]):not([inert] *)",
	"[contenteditable]:not([contenteditable=\"false\"]):not([inert]):not([inert] *)",
	"details>summary:first-of-type:not([inert]):not([inert] *)",
	"details:not([inert]):not([inert] *)"
], candidateSelector = /* @__PURE__ */ candidateSelectors.join(","), NoElement = typeof Element > "u", matches = NoElement ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, getRootNode = !NoElement && Element.prototype.getRootNode ? function(t) {
	return t?.getRootNode?.call(t);
} : function(t) {
	return t?.ownerDocument;
}, _isInert = function(t, n) {
	n === void 0 && (n = !0);
	var i = t?.getAttribute?.call(t, "inert");
	return i === "" || i === "true" || n && t && (typeof t.closest == "function" ? t.closest("[inert]") : _isInert(t.parentNode));
}, isContentEditable = function(t) {
	var n = t?.getAttribute?.call(t, "contenteditable");
	return n === "" || n === "true";
}, getCandidates = function(t, n, i) {
	if (_isInert(t)) return [];
	var a = Array.prototype.slice.apply(t.querySelectorAll(candidateSelector));
	return n && matches.call(t, candidateSelector) && a.unshift(t), a = a.filter(i), a;
}, _getCandidatesIteratively = function(t, n, i) {
	for (var a = [], o = Array.from(t); o.length;) {
		var s = o.shift();
		if (!_isInert(s, !1)) if (s.tagName === "SLOT") {
			var c = s.assignedElements(), l = c.length ? c : s.children, u = _getCandidatesIteratively(l, !0, i);
			i.flatten ? a.push.apply(a, u) : a.push({
				scopeParent: s,
				candidates: u
			});
		} else {
			matches.call(s, candidateSelector) && i.filter(s) && (n || !t.includes(s)) && a.push(s);
			var d = s.shadowRoot || typeof i.getShadowRoot == "function" && i.getShadowRoot(s), f = !_isInert(d, !1) && (!i.shadowRootFilter || i.shadowRootFilter(s));
			if (d && f) {
				var p = _getCandidatesIteratively(d === !0 ? s.children : d.children, !0, i);
				i.flatten ? a.push.apply(a, p) : a.push({
					scopeParent: s,
					candidates: p
				});
			} else o.unshift.apply(o, s.children);
		}
	}
	return a;
}, hasTabIndex = function(t) {
	return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, getTabIndex = function(t) {
	if (!t) throw Error("No node provided");
	return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || isContentEditable(t)) && !hasTabIndex(t) ? 0 : t.tabIndex;
}, getSortOrderTabIndex = function(t, n) {
	var i = getTabIndex(t);
	return i < 0 && n && !hasTabIndex(t) ? 0 : i;
}, sortOrderedTabbables = function(t, n) {
	return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, isInput = function(t) {
	return t.tagName === "INPUT";
}, isHiddenInput = function(t) {
	return isInput(t) && t.type === "hidden";
}, isDetailsWithSummary = function(t) {
	return t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(t) {
		return t.tagName === "SUMMARY";
	});
}, getCheckedRadio = function(t, n) {
	for (var i = 0; i < t.length; i++) if (t[i].checked && t[i].form === n) return t[i];
}, isTabbableRadio = function(t) {
	if (!t.name) return !0;
	var n = t.form || getRootNode(t), i = function(t) {
		return n.querySelectorAll("input[type=\"radio\"][name=\"" + t + "\"]");
	}, a;
	if (typeof window < "u" && window.CSS !== void 0 && typeof window.CSS.escape == "function") a = i(window.CSS.escape(t.name));
	else try {
		a = i(t.name);
	} catch (t) {
		return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", t.message), !1;
	}
	var o = getCheckedRadio(a, t.form);
	return !o || o === t;
}, isRadio = function(t) {
	return isInput(t) && t.type === "radio";
}, isNonTabbableRadio = function(t) {
	return isRadio(t) && !isTabbableRadio(t);
}, isNodeAttached = function(t) {
	var n = t && getRootNode(t), i = n?.host, a = !1;
	if (n && n !== t) {
		var o, s, c;
		for (a = !!((o = i) != null && (s = o.ownerDocument) != null && s.contains(i) || t != null && (c = t.ownerDocument) != null && c.contains(t)); !a && i;) {
			var l, u;
			n = getRootNode(i), i = n?.host, a = !!((l = i) != null && (u = l.ownerDocument) != null && u.contains(i));
		}
	}
	return a;
}, isZeroArea = function(t) {
	var n = t.getBoundingClientRect(), i = n.width, a = n.height;
	return i === 0 && a === 0;
}, isHidden = function(t, n) {
	var i = n.displayCheck, a = n.getShadowRoot;
	if (i === "full-native" && "checkVisibility" in t) return !t.checkVisibility({
		checkOpacity: !1,
		opacityProperty: !1,
		contentVisibilityAuto: !0,
		visibilityProperty: !0,
		checkVisibilityCSS: !0
	});
	if (getComputedStyle(t).visibility === "hidden") return !0;
	var o = matches.call(t, "details>summary:first-of-type") ? t.parentElement : t;
	if (matches.call(o, "details:not([open]) *")) return !0;
	if (!i || i === "full" || i === "full-native" || i === "legacy-full") {
		if (typeof a == "function") {
			for (var s = t; t;) {
				var c = t.parentElement, l = getRootNode(t);
				if (c && !c.shadowRoot && a(c) === !0) return isZeroArea(t);
				t = t.assignedSlot ? t.assignedSlot : !c && l !== t.ownerDocument ? l.host : c;
			}
			t = s;
		}
		if (isNodeAttached(t)) return !t.getClientRects().length;
		if (i !== "legacy-full") return !0;
	} else if (i === "non-zero-area") return isZeroArea(t);
	return !1;
}, isDisabledFromFieldset = function(t) {
	if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName)) for (var n = t.parentElement; n;) {
		if (n.tagName === "FIELDSET" && n.disabled) {
			for (var i = 0; i < n.children.length; i++) {
				var a = n.children.item(i);
				if (a.tagName === "LEGEND") return matches.call(n, "fieldset[disabled] *") ? !0 : !a.contains(t);
			}
			return !0;
		}
		n = n.parentElement;
	}
	return !1;
}, isNodeMatchingSelectorFocusable = function(t, n) {
	return !(n.disabled || isHiddenInput(n) || isHidden(n, t) || isDetailsWithSummary(n) || isDisabledFromFieldset(n));
}, isNodeMatchingSelectorTabbable = function(t, n) {
	return !(isNonTabbableRadio(n) || getTabIndex(n) < 0 || !isNodeMatchingSelectorFocusable(t, n));
}, isShadowRootTabbable = function(t) {
	var n = parseInt(t.getAttribute("tabindex"), 10);
	return !!(isNaN(n) || n >= 0);
}, _sortByOrder = function(t) {
	var n = [], i = [];
	return t.forEach(function(t, a) {
		var o = !!t.scopeParent, s = o ? t.scopeParent : t, c = getSortOrderTabIndex(s, o), l = o ? _sortByOrder(t.candidates) : s;
		c === 0 ? o ? n.push.apply(n, l) : n.push(s) : i.push({
			documentOrder: a,
			tabIndex: c,
			item: t,
			isScope: o,
			content: l
		});
	}), i.sort(sortOrderedTabbables).reduce(function(t, n) {
		return n.isScope ? t.push.apply(t, n.content) : t.push(n.content), t;
	}, []).concat(n);
}, tabbable = function(t, n) {
	n ||= {};
	var i = n.getShadowRoot ? _getCandidatesIteratively([t], n.includeContainer, {
		filter: isNodeMatchingSelectorTabbable.bind(null, n),
		flatten: !1,
		getShadowRoot: n.getShadowRoot,
		shadowRootFilter: isShadowRootTabbable
	}) : getCandidates(t, n.includeContainer, isNodeMatchingSelectorTabbable.bind(null, n));
	return _sortByOrder(i);
}, focusable = function(t, n) {
	return n ||= {}, n.getShadowRoot ? _getCandidatesIteratively([t], n.includeContainer, {
		filter: isNodeMatchingSelectorFocusable.bind(null, n),
		flatten: !0,
		getShadowRoot: n.getShadowRoot
	}) : getCandidates(t, n.includeContainer, isNodeMatchingSelectorFocusable.bind(null, n));
}, focusableCandidateSelector = /* @__PURE__ */ candidateSelectors.concat("iframe:not([inert]):not([inert] *)").join(","), isFocusable = function(t, n) {
	if (n ||= {}, !t) throw Error("No node provided");
	return matches.call(t, focusableCandidateSelector) === !1 ? !1 : isNodeMatchingSelectorFocusable(n, t);
};
new Context("Menu.Root"), new Context("Menu.Root | Menu.Sub"), new Context("Menu.Content"), new Context("Menu.Group | Menu.RadioGroup"), new Context("Menu.RadioGroup"), new Context("Menu.CheckboxGroup"), new CustomEventDispatcher("bitsmenuopen", {
	bubbles: !1,
	cancelable: !0
}), createBitsAttrs({
	component: "menu",
	parts: [
		"trigger",
		"content",
		"sub-trigger",
		"item",
		"group",
		"group-heading",
		"checkbox-group",
		"checkbox-item",
		"radio-group",
		"radio-item",
		"separator",
		"sub-content",
		"arrow"
	]
}), globalThis.bitsDismissableLayers ??= /* @__PURE__ */ new Map();
var DismissibleLayerState = class t {
	static create(n) {
		return new t(n);
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
	constructor(t) {
		this.opts = t, this.#behaviorType = t.interactOutsideBehavior, this.#interactOutsideProp = t.onInteractOutside, this.#onFocusOutside = t.onFocusOutside, user_effect(() => {
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
	#handleFocus = (t) => {
		t.defaultPrevented || this.opts.ref.current && afterTick(() => {
			!this.opts.ref.current || this.#isTargetWithinLayer(t.target) || t.target && !this.#isFocusInsideDOMTree && this.#onFocusOutside.current?.(t);
		});
	};
	#addEventListeners() {
		return executeCallbacks(on(this.#documentObj, "pointerdown", executeCallbacks(this.#markInterceptedEvent, this.#markResponsibleLayer), { capture: !0 }), on(this.#documentObj, "pointerdown", executeCallbacks(this.#markNonInterceptedEvent, this.#handleInteractOutside)), on(this.#documentObj, "focusin", this.#handleFocus));
	}
	#handleDismiss = (t) => {
		let n = t;
		n.defaultPrevented && (n = createWrappedEvent(t)), this.#interactOutsideProp.current(t);
	};
	#handleInteractOutside = debounce((t) => {
		if (!this.opts.ref.current) {
			this.#unsubClickListener();
			return;
		}
		let n = this.opts.isValidEvent.current(t, this.opts.ref.current) || isValidEvent(t, this.opts.ref.current);
		if (!this.#isResponsibleLayer || this.#isAnyEventIntercepted() || !n) {
			this.#unsubClickListener();
			return;
		}
		let i = t;
		if (i.defaultPrevented && (i = createWrappedEvent(i)), this.#behaviorType.current !== "close" && this.#behaviorType.current !== "defer-otherwise-close") {
			this.#unsubClickListener();
			return;
		}
		t.pointerType === "touch" ? (this.#unsubClickListener(), this.#unsubClickListener = on(this.#documentObj, "click", this.#handleDismiss, { once: !0 })) : this.#interactOutsideProp.current(i);
	}, 10);
	#markInterceptedEvent = (t) => {
		this.#interceptedEvents[t.type] = !0;
	};
	#markNonInterceptedEvent = (t) => {
		this.#interceptedEvents[t.type] = !1;
	};
	#markResponsibleLayer = () => {
		this.opts.ref.current && (this.#isResponsibleLayer = isResponsibleLayer(this.opts.ref.current));
	};
	#isTargetWithinLayer = (t) => this.opts.ref.current ? isOrContainsTarget(this.opts.ref.current, t) : !1;
	#resetState = debounce(() => {
		for (let t in this.#interceptedEvents) this.#interceptedEvents[t] = !1;
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
function getTopMostDismissableLayer(t = [...globalThis.bitsDismissableLayers]) {
	return t.findLast(([t, { current: n }]) => n === "close" || n === "ignore");
}
function isResponsibleLayer(t) {
	let n = [...globalThis.bitsDismissableLayers], i = getTopMostDismissableLayer(n);
	if (i) return i[0].opts.ref.current === t;
	let [a] = n[0];
	return a.opts.ref.current === t;
}
function isValidEvent(t, n) {
	let i = t.target;
	if (!isElementOrSVGElement(i)) return !1;
	let a = !!i.closest("[data-context-menu-trigger]"), o = !!n.closest("[data-context-menu-content]");
	return "button" in t && t.button > 0 && !a ? !1 : "button" in t && t.button === 0 && a && o ? !0 : a && o ? !1 : getOwnerDocument(i).documentElement.contains(i) && !isOrContainsTarget(n, i) && isClickTrulyOutside(t, n);
}
function createWrappedEvent(t) {
	let n = t.currentTarget, i = t.target, a;
	a = t instanceof PointerEvent ? new PointerEvent(t.type, t) : new PointerEvent("pointerdown", t);
	let o = !1;
	return new Proxy(a, { get: (a, s) => s === "currentTarget" ? n : s === "target" ? i : s === "preventDefault" ? () => {
		o = !0, typeof a.preventDefault == "function" && a.preventDefault();
	} : s === "defaultPrevented" ? o : s in a ? a[s] : t[s] });
}
function Dismissible_layer(t, n) {
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
	snippet(u, () => n.children ?? noop$1, () => ({ props: c.props })), append(t, l), pop();
}
globalThis.bitsEscapeLayers ??= /* @__PURE__ */ new Map();
var EscapeLayerState = class t {
	static create(n) {
		return new t(n);
	}
	opts;
	domContext;
	constructor(t) {
		this.opts = t, this.domContext = new DOMContext(this.opts.ref);
		let n = noop;
		watch(() => t.enabled.current, (i) => (i && (globalThis.bitsEscapeLayers.set(this, t.escapeKeydownBehavior), n = this.#addEventListener()), () => {
			n(), globalThis.bitsEscapeLayers.delete(this);
		}));
	}
	#addEventListener = () => on(this.domContext.getDocument(), "keydown", this.#onkeydown, { passive: !1 });
	#onkeydown = (t) => {
		if (t.key !== "Escape" || !isResponsibleEscapeLayer(this)) return;
		let n = new KeyboardEvent(t.type, t);
		t.preventDefault();
		let i = this.opts.escapeKeydownBehavior.current;
		i !== "close" && i !== "defer-otherwise-close" || this.opts.onEscapeKeydown.current(n);
	};
};
function isResponsibleEscapeLayer(t) {
	let n = [...globalThis.bitsEscapeLayers], i = n.findLast(([t, { current: n }]) => n === "close" || n === "ignore");
	if (i) return i[0] === t;
	let [a] = n[0];
	return a === t;
}
function Escape_layer(t, n) {
	push(n, !0);
	let i = prop(n, "escapeKeydownBehavior", 3, "close"), a = prop(n, "onEscapeKeydown", 3, noop);
	EscapeLayerState.create({
		escapeKeydownBehavior: boxWith(() => i()),
		onEscapeKeydown: boxWith(() => a()),
		enabled: boxWith(() => n.enabled),
		ref: n.ref
	});
	var o = comment(), s = first_child(o);
	snippet(s, () => n.children ?? noop$1), append(t, o), pop();
}
var FocusScopeManager = class t {
	static instance;
	#scopeStack = simpleBox([]);
	#focusHistory = /* @__PURE__ */ new WeakMap();
	#preFocusHistory = /* @__PURE__ */ new WeakMap();
	static getInstance() {
		return this.instance ||= new t(), this.instance;
	}
	register(t) {
		let n = this.getActive();
		n && n !== t && n.pause();
		let i = document.activeElement;
		i && i !== document.body && this.#preFocusHistory.set(t, i), this.#scopeStack.current = this.#scopeStack.current.filter((n) => n !== t), this.#scopeStack.current.unshift(t);
	}
	unregister(t) {
		this.#scopeStack.current = this.#scopeStack.current.filter((n) => n !== t);
		let n = this.getActive();
		n && n.resume();
	}
	getActive() {
		return this.#scopeStack.current[0];
	}
	setFocusMemory(t, n) {
		this.#focusHistory.set(t, n);
	}
	getFocusMemory(t) {
		return this.#focusHistory.get(t);
	}
	isActiveScope(t) {
		return this.getActive() === t;
	}
	setPreFocusMemory(t, n) {
		this.#preFocusHistory.set(t, n);
	}
	getPreFocusMemory(t) {
		return this.#preFocusHistory.get(t);
	}
	clearPreFocusMemory(t) {
		this.#preFocusHistory.delete(t);
	}
}, FocusScope = class t {
	#paused = !1;
	#container = null;
	#manager = FocusScopeManager.getInstance();
	#cleanupFns = [];
	#opts;
	constructor(t) {
		this.#opts = t;
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
		for (let t of this.#cleanupFns) t();
		this.#cleanupFns = [];
	}
	mount(t) {
		this.#container && this.unmount(), this.#container = t, this.#manager.register(this), this.#setupEventListeners(), this.#handleOpenAutoFocus();
	}
	unmount() {
		this.#container &&= (this.#cleanup(), this.#handleCloseAutoFocus(), this.#manager.unregister(this), this.#manager.clearPreFocusMemory(this), null);
	}
	#handleOpenAutoFocus() {
		if (!this.#container) return;
		let t = new CustomEvent("focusScope.onOpenAutoFocus", {
			bubbles: !1,
			cancelable: !0
		});
		this.#opts.onOpenAutoFocus.current(t), t.defaultPrevented || requestAnimationFrame(() => {
			if (!this.#container) return;
			let t = this.#getFirstTabbable();
			t ? (t.focus(), this.#manager.setFocusMemory(this, t)) : this.#container.focus();
		});
	}
	#handleCloseAutoFocus() {
		let t = new CustomEvent("focusScope.onCloseAutoFocus", {
			bubbles: !1,
			cancelable: !0
		});
		if (this.#opts.onCloseAutoFocus.current?.(t), !t.defaultPrevented) {
			let t = this.#manager.getPreFocusMemory(this);
			if (t && document.contains(t)) try {
				t.focus();
			} catch {
				document.body.focus();
			}
		}
	}
	#setupEventListeners() {
		if (!this.#container || !this.#opts.trap.current) return;
		let t = this.#container, n = t.ownerDocument;
		this.#cleanupFns.push(on(n, "focusin", (n) => {
			if (this.#paused || !this.#manager.isActiveScope(this)) return;
			let i = n.target;
			if (i) if (t.contains(i)) this.#manager.setFocusMemory(this, i);
			else {
				let i = this.#manager.getFocusMemory(this);
				if (i && t.contains(i) && isFocusable(i)) n.preventDefault(), i.focus();
				else {
					let n = this.#getFirstTabbable(), i = this.#getAllFocusables()[0];
					(n || i || t).focus();
				}
			}
		}, { capture: !0 }), on(t, "keydown", (t) => {
			if (!this.#opts.loop || this.#paused || t.key !== "Tab" || !this.#manager.isActiveScope(this)) return;
			let i = this.#getTabbables();
			if (i.length === 0) return;
			let a = i[0], o = i[i.length - 1];
			!t.shiftKey && n.activeElement === o ? (t.preventDefault(), a.focus()) : t.shiftKey && n.activeElement === a && (t.preventDefault(), o.focus());
		}));
		let i = new MutationObserver(() => {
			let n = this.#manager.getFocusMemory(this);
			if (n && !t.contains(n)) {
				let n = this.#getFirstTabbable(), i = this.#getAllFocusables()[0], a = n || i;
				a ? (a.focus(), this.#manager.setFocusMemory(this, a)) : t.focus();
			}
		});
		i.observe(t, {
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
			a && o ? (i ||= new t(n), i.mount(a)) : i &&= (i.unmount(), null);
		}), onDestroyEffect(() => {
			i?.unmount();
		}), { get props() {
			return { tabindex: -1 };
		} };
	}
};
function Focus_scope(t, n) {
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
	snippet(d, () => n.focusScope ?? noop$1, () => ({ props: l.props })), append(t, u), pop();
}
var noopPointer = () => {};
globalThis.bitsTextSelectionLayers ??= /* @__PURE__ */ new Map();
var TextSelectionLayerState = class t {
	static create(n) {
		return new t(n);
	}
	opts;
	domContext;
	#unsubSelectionLock = noop;
	#enabledSnapshot = !1;
	#onPointerDownSnapshot = noopPointer;
	#onPointerUpSnapshot = noopPointer;
	constructor(t) {
		this.opts = t, this.domContext = new DOMContext(t.ref);
		let n = noop;
		watch(() => [
			this.opts.enabled.current,
			this.opts.onPointerDown.current,
			this.opts.onPointerUp.current
		], ([t, i, a]) => (this.#enabledSnapshot = t, this.#onPointerDownSnapshot = i, this.#onPointerUpSnapshot = a, t && (globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled), n(), n = this.#addEventListeners()), () => {
			this.#enabledSnapshot = !1, n(), this.#resetSelectionLock(), globalThis.bitsTextSelectionLayers.delete(this);
		}));
	}
	#addEventListeners() {
		return executeCallbacks(on(this.domContext.getDocument(), "pointerdown", this.#pointerdown), on(this.domContext.getDocument(), "pointerup", composeHandlers(this.#resetSelectionLock, this.#pointerupUserHandler)));
	}
	#pointerupUserHandler = (t) => {
		this.#onPointerUpSnapshot(t);
	};
	#pointerdown = (t) => {
		let n = this.opts.ref.current, i = t.target;
		!isHTMLElement$1(n) || !isHTMLElement$1(i) || !this.#enabledSnapshot || !isHighestLayer(this) || !contains(n, i) || (this.#onPointerDownSnapshot(t), !t.defaultPrevented && (this.#unsubSelectionLock = preventTextSelectionOverflow(n, this.domContext.getDocument().body)));
	};
	#resetSelectionLock = () => {
		this.#unsubSelectionLock(), this.#unsubSelectionLock = noop;
	};
}, getUserSelect = (t) => t.style.userSelect || t.style.webkitUserSelect;
function preventTextSelectionOverflow(t, n) {
	let i = getUserSelect(n), a = getUserSelect(t);
	return setUserSelect(n, "none"), setUserSelect(t, "text"), () => {
		setUserSelect(n, i), setUserSelect(t, a);
	};
}
function setUserSelect(t, n) {
	t.style.userSelect = n, t.style.webkitUserSelect = n;
}
function isHighestLayer(t) {
	let n = [...globalThis.bitsTextSelectionLayers];
	if (!n.length) return !1;
	let i = n.at(-1);
	return i ? i[0] === t : !1;
}
function Text_selection_layer(t, n) {
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
	snippet(c, () => n.children ?? noop$1), append(t, s), pop();
}
globalThis.bitsIdCounter ??= { current: 0 };
function useId(t = "bits") {
	return globalThis.bitsIdCounter.current++, `${t}-${globalThis.bitsIdCounter.current}`;
}
var SharedState = class {
	#factory;
	#subscribers = 0;
	#state = /* @__PURE__ */ state();
	#scope;
	constructor(t) {
		this.#factory = t;
	}
	#dispose() {
		--this.#subscribers, this.#scope && this.#subscribers <= 0 && (this.#scope(), set(this.#state, void 0), this.#scope = void 0);
	}
	get(...t) {
		return this.#subscribers += 1, get$2(this.#state) === void 0 && (this.#scope = effect_root(() => {
			set(this.#state, this.#factory(...t), !0);
		})), user_effect(() => () => {
			this.#dispose();
		}), get$2(this.#state);
	}
}, lockMap = new SvelteMap(), initialBodyStyle = /* @__PURE__ */ state(null), stopTouchMoveListener = null, cleanupTimeoutId = null, isInCleanupTransition = !1, anyLocked = boxWith(() => {
	for (let t of lockMap.values()) if (t) return !0;
	return !1;
}), cleanupScheduledAt = null, bodyLockStackCount = new SharedState(() => {
	function t() {
		document.body.setAttribute("style", get$2(initialBodyStyle) ?? ""), document.body.style.removeProperty("--scrollbar-width"), isIOS && stopTouchMoveListener?.(), set(initialBodyStyle, null);
	}
	function n() {
		cleanupTimeoutId !== null && (window.clearTimeout(cleanupTimeoutId), cleanupTimeoutId = null);
	}
	function i(t, i) {
		n(), isInCleanupTransition = !0, cleanupScheduledAt = Date.now();
		let a = cleanupScheduledAt, o = () => {
			cleanupTimeoutId = null, cleanupScheduledAt === a && (isAnyLocked(lockMap) ? isInCleanupTransition = !1 : (isInCleanupTransition = !1, i()));
		}, s = t === null ? 24 : t;
		cleanupTimeoutId = window.setTimeout(o, s);
	}
	function a() {
		get$2(initialBodyStyle) === null && lockMap.size === 0 && !isInCleanupTransition && set(initialBodyStyle, document.body.getAttribute("style"), !0);
	}
	return watch(() => anyLocked.current, () => {
		if (!anyLocked.current) return;
		a(), isInCleanupTransition = !1;
		let t = getComputedStyle(document.documentElement), n = getComputedStyle(document.body), i = t.scrollbarGutter?.includes("stable") || n.scrollbarGutter?.includes("stable"), o = window.innerWidth - document.documentElement.clientWidth, s = {
			padding: Number.parseInt(n.paddingRight ?? "0", 10) + o,
			margin: Number.parseInt(n.marginRight ?? "0", 10)
		};
		o > 0 && !i && (document.body.style.paddingRight = `${s.padding}px`, document.body.style.marginRight = `${s.margin}px`, document.body.style.setProperty("--scrollbar-width", `${o}px`)), document.body.style.overflow = "hidden", isIOS && (stopTouchMoveListener = on(document, "touchmove", (t) => {
			t.target === document.documentElement && (t.touches.length > 1 || t.preventDefault());
		}, { passive: !1 })), afterTick(() => {
			document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
		});
	}), onDestroyEffect(() => () => {
		stopTouchMoveListener?.();
	}), {
		get lockMap() {
			return lockMap;
		},
		resetBodyStyle: t,
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
	constructor(t, n = () => null) {
		this.#initialState = t, this.#restoreScrollDelay = n, this.#countState = bodyLockStackCount.get(), this.#countState && (this.#countState.cancelPendingCleanup(), this.#countState.ensureInitialStyleCaptured(), this.#countState.lockMap.set(this.#id, this.#initialState ?? !1), this.locked = boxWith(() => this.#countState.lockMap.get(this.#id) ?? !1, (t) => this.#countState.lockMap.set(this.#id, t)), onDestroyEffect(() => {
			if (this.#countState.lockMap.delete(this.#id), isAnyLocked(this.#countState.lockMap)) return;
			let t = this.#restoreScrollDelay();
			this.#countState.scheduleCleanupIfNoNewLocks(t, () => {
				this.#countState.resetBodyStyle();
			});
		}));
	}
};
function isAnyLocked(t) {
	for (let [n, i] of t) if (i) return !0;
	return !1;
}
function Scroll_lock(t, n) {
	push(n, !0);
	let i = prop(n, "preventScroll", 3, !0), a = prop(n, "restoreScrollDelay", 3, null);
	i() && new BodyScrollLock(i(), () => a()), pop();
}
var root_3$12 = /* @__PURE__ */ from_html("<div><!></div>");
function Dialog_overlay(t, n) {
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
		ref: boxWith(() => s(), (t) => s(t))
	}), u = /* @__PURE__ */ user_derived(() => mergeProps(c, l.props));
	var d = comment(), f = first_child(d), p = (t) => {
		var i = comment(), a = first_child(i), o = (t) => {
			var i = comment(), a = first_child(i);
			{
				let t = /* @__PURE__ */ user_derived(() => ({
					props: mergeProps(get$2(u)),
					...l.snippetProps
				}));
				snippet(a, () => n.child, () => get$2(t));
			}
			append(t, i);
		}, s = (t) => {
			var i = root_3$12();
			attribute_effect(i, (t) => ({ ...t }), [() => mergeProps(get$2(u))]);
			var a = child(i);
			snippet(a, () => n.children ?? noop$1, () => l.snippetProps), reset(i), append(t, i);
		};
		if_block(a, (t) => {
			n.child ? t(o) : t(s, -1);
		}), append(t, i);
	};
	if_block(f, (t) => {
		(l.shouldRender || o()) && t(p);
	}), append(t, d), pop();
}
function Button(t, n) {
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
	element(c, () => n.href ? "a" : "button", !1, (t, s) => {
		bind_this(t, (t) => a(t), () => a()), attribute_effect(t, () => ({
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
	}), append(t, s), pop();
}
var sides = [
	"top",
	"right",
	"bottom",
	"left"
], min = Math.min, max = Math.max, round = Math.round, floor = Math.floor, createCoords = (t) => ({
	x: t,
	y: t
}), oppositeSideMap = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function clamp(t, n, i) {
	return max(t, min(n, i));
}
function evaluate(t, n) {
	return typeof t == "function" ? t(n) : t;
}
function getSide$1(t) {
	return t.split("-")[0];
}
function getAlignment(t) {
	return t.split("-")[1];
}
function getOppositeAxis(t) {
	return t === "x" ? "y" : "x";
}
function getAxisLength(t) {
	return t === "y" ? "height" : "width";
}
function getSideAxis(t) {
	let n = t[0];
	return n === "t" || n === "b" ? "y" : "x";
}
function getAlignmentAxis(t) {
	return getOppositeAxis(getSideAxis(t));
}
function getAlignmentSides(t, n, i) {
	i === void 0 && (i = !1);
	let a = getAlignment(t), o = getAlignmentAxis(t), s = getAxisLength(o), c = o === "x" ? a === (i ? "end" : "start") ? "right" : "left" : a === "start" ? "bottom" : "top";
	return n.reference[s] > n.floating[s] && (c = getOppositePlacement(c)), [c, getOppositePlacement(c)];
}
function getExpandedPlacements(t) {
	let n = getOppositePlacement(t);
	return [
		getOppositeAlignmentPlacement(t),
		n,
		getOppositeAlignmentPlacement(n)
	];
}
function getOppositeAlignmentPlacement(t) {
	return t.includes("start") ? t.replace("start", "end") : t.replace("end", "start");
}
var lrPlacement = ["left", "right"], rlPlacement = ["right", "left"], tbPlacement = ["top", "bottom"], btPlacement = ["bottom", "top"];
function getSideList(t, n, i) {
	switch (t) {
		case "top":
		case "bottom": return i ? n ? rlPlacement : lrPlacement : n ? lrPlacement : rlPlacement;
		case "left":
		case "right": return n ? tbPlacement : btPlacement;
		default: return [];
	}
}
function getOppositeAxisPlacements(t, n, i, a) {
	let o = getAlignment(t), s = getSideList(getSide$1(t), i === "start", a);
	return o && (s = s.map((t) => t + "-" + o), n && (s = s.concat(s.map(getOppositeAlignmentPlacement)))), s;
}
function getOppositePlacement(t) {
	let n = getSide$1(t);
	return oppositeSideMap[n] + t.slice(n.length);
}
function expandPaddingObject(t) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...t
	};
}
function getPaddingObject(t) {
	return typeof t == "number" ? {
		top: t,
		right: t,
		bottom: t,
		left: t
	} : expandPaddingObject(t);
}
function rectToClientRect(t) {
	let { x: n, y: i, width: a, height: o } = t;
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
function computeCoordsFromPlacement(t, n, i) {
	let { reference: a, floating: o } = t, s = getSideAxis(n), c = getAlignmentAxis(n), l = getAxisLength(c), u = getSide$1(n), d = s === "y", f = a.x + a.width / 2 - o.width / 2, p = a.y + a.height / 2 - o.height / 2, m = a[l] / 2 - o[l] / 2, h;
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
async function detectOverflow(t, n) {
	n === void 0 && (n = {});
	let { x: i, y: a, platform: o, rects: s, elements: c, strategy: l } = t, { boundary: u = "clippingAncestors", rootBoundary: d = "viewport", elementContext: f = "floating", altBoundary: p = !1, padding: m = 0 } = evaluate(n, t), h = getPaddingObject(m), g = c[p ? f === "floating" ? "reference" : "floating" : f], _ = rectToClientRect(await o.getClippingRect({
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
var MAX_RESET_COUNT = 50, computePosition$1 = async (t, n, i) => {
	let { placement: a = "bottom", strategy: o = "absolute", middleware: s = [], platform: c } = i, l = c.detectOverflow ? c : {
		...c,
		detectOverflow
	}, u = await (c.isRTL == null ? void 0 : c.isRTL(n)), d = await c.getElementRects({
		reference: t,
		floating: n,
		strategy: o
	}), { x: f, y: p } = computeCoordsFromPlacement(d, a, u), m = a, h = 0, g = {};
	for (let i = 0; i < s.length; i++) {
		let _ = s[i];
		if (!_) continue;
		let { name: v, fn: y } = _, { x: b, y: x, data: S, reset: C } = await y({
			x: f,
			y: p,
			initialPlacement: a,
			placement: m,
			strategy: o,
			middlewareData: g,
			rects: d,
			platform: l,
			elements: {
				reference: t,
				floating: n
			}
		});
		f = b ?? f, p = x ?? p, g[v] = {
			...g[v],
			...S
		}, C && h < MAX_RESET_COUNT && (h++, typeof C == "object" && (C.placement && (m = C.placement), C.rects && (d = C.rects === !0 ? await c.getElementRects({
			reference: t,
			floating: n,
			strategy: o
		}) : C.rects), {x: f, y: p} = computeCoordsFromPlacement(d, m, u)), i = -1);
	}
	return {
		x: f,
		y: p,
		placement: m,
		strategy: o,
		middlewareData: g
	};
}, arrow$1 = (t) => ({
	name: "arrow",
	options: t,
	async fn(n) {
		let { x: i, y: a, placement: o, rects: s, platform: c, elements: l, middlewareData: u } = n, { element: d, padding: f = 0 } = evaluate(t, n) || {};
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
}), flip$1 = function(t) {
	return t === void 0 && (t = {}), {
		name: "flip",
		options: t,
		async fn(n) {
			var i;
			let { placement: a, middlewareData: o, rects: s, initialPlacement: c, platform: l, elements: u } = n, { mainAxis: d = !0, crossAxis: f = !0, fallbackPlacements: p, fallbackStrategy: m = "bestFit", fallbackAxisSideDirection: h = "none", flipAlignment: g = !0,..._ } = evaluate(t, n);
			if ((i = o.arrow) != null && i.alignmentOffset) return {};
			let v = getSide$1(a), y = getSideAxis(c), b = getSide$1(c) === c, x = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), S = p || (b || !g ? [getOppositePlacement(c)] : getExpandedPlacements(c)), C = h !== "none";
			!p && C && S.push(...getOppositeAxisPlacements(c, g, h, x));
			let w = [c, ...S], T = await l.detectOverflow(n, _), E = [], D = o.flip?.overflows || [];
			if (d && E.push(T[v]), f) {
				let t = getAlignmentSides(a, s, x);
				E.push(T[t[0]], T[t[1]]);
			}
			if (D = [...D, {
				placement: a,
				overflows: E
			}], !E.every((t) => t <= 0)) {
				let t = (o.flip?.index || 0) + 1, n = w[t];
				if (n && (!(f === "alignment" && y !== getSideAxis(n)) || D.every((t) => getSideAxis(t.placement) === y ? t.overflows[0] > 0 : !0))) return {
					data: {
						index: t,
						overflows: D
					},
					reset: { placement: n }
				};
				let i = D.filter((t) => t.overflows[0] <= 0).sort((t, n) => t.overflows[1] - n.overflows[1])[0]?.placement;
				if (!i) switch (m) {
					case "bestFit": {
						let t = D.filter((t) => {
							if (C) {
								let n = getSideAxis(t.placement);
								return n === y || n === "y";
							}
							return !0;
						}).map((t) => [t.placement, t.overflows.filter((t) => t > 0).reduce((t, n) => t + n, 0)]).sort((t, n) => t[1] - n[1])[0]?.[0];
						t && (i = t);
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
function getSideOffsets(t, n) {
	return {
		top: t.top - n.height,
		right: t.right - n.width,
		bottom: t.bottom - n.height,
		left: t.left - n.width
	};
}
function isAnySideFullyClipped(t) {
	return sides.some((n) => t[n] >= 0);
}
var hide$1 = function(t) {
	return t === void 0 && (t = {}), {
		name: "hide",
		options: t,
		async fn(n) {
			let { rects: i, platform: a } = n, { strategy: o = "referenceHidden",...s } = evaluate(t, n);
			switch (o) {
				case "referenceHidden": {
					let t = await a.detectOverflow(n, {
						...s,
						elementContext: "reference"
					}), o = getSideOffsets(t, i.reference);
					return { data: {
						referenceHiddenOffsets: o,
						referenceHidden: isAnySideFullyClipped(o)
					} };
				}
				case "escaped": {
					let t = await a.detectOverflow(n, {
						...s,
						altBoundary: !0
					}), o = getSideOffsets(t, i.floating);
					return { data: {
						escapedOffsets: o,
						escaped: isAnySideFullyClipped(o)
					} };
				}
				default: return {};
			}
		}
	};
}, originSides = /* @__PURE__ */ new Set(["left", "top"]);
async function convertValueToCoords(t, n) {
	let { placement: i, platform: a, elements: o } = t, s = await (a.isRTL == null ? void 0 : a.isRTL(o.floating)), c = getSide$1(i), l = getAlignment(i), u = getSideAxis(i) === "y", d = originSides.has(c) ? -1 : 1, f = s && u ? -1 : 1, p = evaluate(n, t), { mainAxis: m, crossAxis: h, alignmentAxis: g } = typeof p == "number" ? {
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
var offset$1 = function(t) {
	return t === void 0 && (t = 0), {
		name: "offset",
		options: t,
		async fn(n) {
			var i;
			let { x: a, y: o, placement: s, middlewareData: c } = n, l = await convertValueToCoords(n, t);
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
}, shift$1 = function(t) {
	return t === void 0 && (t = {}), {
		name: "shift",
		options: t,
		async fn(n) {
			let { x: i, y: a, placement: o, platform: s } = n, { mainAxis: c = !0, crossAxis: l = !1, limiter: u = { fn: (t) => {
				let { x: n, y: i } = t;
				return {
					x: n,
					y: i
				};
			} },...d } = evaluate(t, n), f = {
				x: i,
				y: a
			}, p = await s.detectOverflow(n, d), m = getSideAxis(getSide$1(o)), h = getOppositeAxis(m), g = f[h], _ = f[m];
			if (c) {
				let t = h === "y" ? "top" : "left", n = h === "y" ? "bottom" : "right", i = g + p[t], a = g - p[n];
				g = clamp(i, g, a);
			}
			if (l) {
				let t = m === "y" ? "top" : "left", n = m === "y" ? "bottom" : "right", i = _ + p[t], a = _ - p[n];
				_ = clamp(i, _, a);
			}
			let v = u.fn({
				...n,
				[h]: g,
				[m]: _
			});
			return {
				...v,
				data: {
					x: v.x - i,
					y: v.y - a,
					enabled: {
						[h]: c,
						[m]: l
					}
				}
			};
		}
	};
}, limitShift$1 = function(t) {
	return t === void 0 && (t = {}), {
		options: t,
		fn(n) {
			let { x: i, y: a, placement: o, rects: s, middlewareData: c } = n, { offset: l = 0, mainAxis: u = !0, crossAxis: d = !0 } = evaluate(t, n), f = {
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
				let t = m === "y" ? "height" : "width", n = s.reference[m] - s.floating[t] + v.mainAxis, i = s.reference[m] + s.reference[t] - v.mainAxis;
				h < n ? h = n : h > i && (h = i);
			}
			if (d) {
				let t = m === "y" ? "width" : "height", n = originSides.has(getSide$1(o)), i = s.reference[p] - s.floating[t] + (n && c.offset?.[p] || 0) + (n ? 0 : v.crossAxis), a = s.reference[p] + s.reference[t] + (n ? 0 : c.offset?.[p] || 0) - (n ? v.crossAxis : 0);
				g < i ? g = i : g > a && (g = a);
			}
			return {
				[m]: h,
				[p]: g
			};
		}
	};
}, size$1 = function(t) {
	return t === void 0 && (t = {}), {
		name: "size",
		options: t,
		async fn(n) {
			var i, a;
			let { placement: o, rects: s, platform: c, elements: l } = n, { apply: u = () => {},...d } = evaluate(t, n), f = await c.detectOverflow(n, d), p = getSide$1(o), m = getAlignment(o), h = getSideAxis(o) === "y", { width: g, height: _ } = s.floating, v, y;
			p === "top" || p === "bottom" ? (v = p, y = m === (await (c.isRTL == null ? void 0 : c.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (y = p, v = m === "end" ? "top" : "bottom");
			let b = _ - f.top - f.bottom, x = g - f.left - f.right, S = min(_ - f[v], b), C = min(g - f[y], x), w = !n.middlewareData.shift, T = S, E = C;
			if ((i = n.middlewareData.shift) != null && i.enabled.x && (E = x), (a = n.middlewareData.shift) != null && a.enabled.y && (T = b), w && !m) {
				let t = max(f.left, 0), n = max(f.right, 0), i = max(f.top, 0), a = max(f.bottom, 0);
				h ? E = g - 2 * (t !== 0 || n !== 0 ? t + n : max(f.left, f.right)) : T = _ - 2 * (i !== 0 || a !== 0 ? i + a : max(f.top, f.bottom));
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
function getNodeName(t) {
	return isNode(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function getWindow$1(t) {
	var n;
	return (t == null || (n = t.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function getDocumentElement(t) {
	return ((isNode(t) ? t.ownerDocument : t.document) || window.document)?.documentElement;
}
function isNode(t) {
	return hasWindow() ? t instanceof Node || t instanceof getWindow$1(t).Node : !1;
}
function isElement$1(t) {
	return hasWindow() ? t instanceof Element || t instanceof getWindow$1(t).Element : !1;
}
function isHTMLElement(t) {
	return hasWindow() ? t instanceof HTMLElement || t instanceof getWindow$1(t).HTMLElement : !1;
}
function isShadowRoot(t) {
	return !hasWindow() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof getWindow$1(t).ShadowRoot;
}
function isOverflowElement(t) {
	let { overflow: n, overflowX: i, overflowY: a, display: o } = getComputedStyle$1(t);
	return /auto|scroll|overlay|hidden|clip/.test(n + a + i) && o !== "inline" && o !== "contents";
}
function isTableElement(t) {
	return /^(table|td|th)$/.test(getNodeName(t));
}
function isTopLayer(t) {
	try {
		if (t.matches(":popover-open")) return !0;
	} catch {}
	try {
		return t.matches(":modal");
	} catch {
		return !1;
	}
}
var willChangeRe = /transform|translate|scale|rotate|perspective|filter/, containRe = /paint|layout|strict|content/, isNotNone = (t) => !!t && t !== "none", isWebKitValue;
function isContainingBlock(t) {
	let n = isElement$1(t) ? getComputedStyle$1(t) : t;
	return isNotNone(n.transform) || isNotNone(n.translate) || isNotNone(n.scale) || isNotNone(n.rotate) || isNotNone(n.perspective) || !isWebKit() && (isNotNone(n.backdropFilter) || isNotNone(n.filter)) || willChangeRe.test(n.willChange || "") || containRe.test(n.contain || "");
}
function getContainingBlock(t) {
	let n = getParentNode(t);
	for (; isHTMLElement(n) && !isLastTraversableNode(n);) {
		if (isContainingBlock(n)) return n;
		if (isTopLayer(n)) return null;
		n = getParentNode(n);
	}
	return null;
}
function isWebKit() {
	return isWebKitValue ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), isWebKitValue;
}
function isLastTraversableNode(t) {
	return /^(html|body|#document)$/.test(getNodeName(t));
}
function getComputedStyle$1(t) {
	return getWindow$1(t).getComputedStyle(t);
}
function getNodeScroll(t) {
	return isElement$1(t) ? {
		scrollLeft: t.scrollLeft,
		scrollTop: t.scrollTop
	} : {
		scrollLeft: t.scrollX,
		scrollTop: t.scrollY
	};
}
function getParentNode(t) {
	if (getNodeName(t) === "html") return t;
	let n = t.assignedSlot || t.parentNode || isShadowRoot(t) && t.host || getDocumentElement(t);
	return isShadowRoot(n) ? n.host : n;
}
function getNearestOverflowAncestor(t) {
	let n = getParentNode(t);
	return isLastTraversableNode(n) ? t.ownerDocument ? t.ownerDocument.body : t.body : isHTMLElement(n) && isOverflowElement(n) ? n : getNearestOverflowAncestor(n);
}
function getOverflowAncestors(t, n, i) {
	n === void 0 && (n = []), i === void 0 && (i = !0);
	let a = getNearestOverflowAncestor(t), o = a === t.ownerDocument?.body, s = getWindow$1(a);
	if (o) {
		let t = getFrameElement(s);
		return n.concat(s, s.visualViewport || [], isOverflowElement(a) ? a : [], t && i ? getOverflowAncestors(t) : []);
	} else return n.concat(a, getOverflowAncestors(a, [], i));
}
function getFrameElement(t) {
	return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function getCssDimensions(t) {
	let n = getComputedStyle$1(t), i = parseFloat(n.width) || 0, a = parseFloat(n.height) || 0, o = isHTMLElement(t), s = o ? t.offsetWidth : i, c = o ? t.offsetHeight : a, l = round(i) !== s || round(a) !== c;
	return l && (i = s, a = c), {
		width: i,
		height: a,
		$: l
	};
}
function unwrapElement(t) {
	return isElement$1(t) ? t : t.contextElement;
}
function getScale(t) {
	let n = unwrapElement(t);
	if (!isHTMLElement(n)) return createCoords(1);
	let i = n.getBoundingClientRect(), { width: a, height: o, $: s } = getCssDimensions(n), c = (s ? round(i.width) : i.width) / a, l = (s ? round(i.height) : i.height) / o;
	return (!c || !Number.isFinite(c)) && (c = 1), (!l || !Number.isFinite(l)) && (l = 1), {
		x: c,
		y: l
	};
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(t) {
	let n = getWindow$1(t);
	return !isWebKit() || !n.visualViewport ? noOffsets : {
		x: n.visualViewport.offsetLeft,
		y: n.visualViewport.offsetTop
	};
}
function shouldAddVisualOffsets(t, n, i) {
	return n === void 0 && (n = !1), !i || n && i !== getWindow$1(t) ? !1 : n;
}
function getBoundingClientRect(t, n, i, a) {
	n === void 0 && (n = !1), i === void 0 && (i = !1);
	let o = t.getBoundingClientRect(), s = unwrapElement(t), c = createCoords(1);
	n && (a ? isElement$1(a) && (c = getScale(a)) : c = getScale(t));
	let l = shouldAddVisualOffsets(s, i, a) ? getVisualOffsets(s) : createCoords(0), u = (o.left + l.x) / c.x, d = (o.top + l.y) / c.y, f = o.width / c.x, p = o.height / c.y;
	if (s) {
		let t = getWindow$1(s), n = a && isElement$1(a) ? getWindow$1(a) : a, i = t, o = getFrameElement(i);
		for (; o && a && n !== i;) {
			let t = getScale(o), n = o.getBoundingClientRect(), a = getComputedStyle$1(o), s = n.left + (o.clientLeft + parseFloat(a.paddingLeft)) * t.x, c = n.top + (o.clientTop + parseFloat(a.paddingTop)) * t.y;
			u *= t.x, d *= t.y, f *= t.x, p *= t.y, u += s, d += c, i = getWindow$1(o), o = getFrameElement(i);
		}
	}
	return rectToClientRect({
		width: f,
		height: p,
		x: u,
		y: d
	});
}
function getWindowScrollBarX(t, n) {
	let i = getNodeScroll(t).scrollLeft;
	return n ? n.left + i : getBoundingClientRect(getDocumentElement(t)).left + i;
}
function getHTMLOffset(t, n) {
	let i = t.getBoundingClientRect(), a = i.left + n.scrollLeft - getWindowScrollBarX(t, i), o = i.top + n.scrollTop;
	return {
		x: a,
		y: o
	};
}
function convertOffsetParentRelativeRectToViewportRelativeRect(t) {
	let { elements: n, rect: i, offsetParent: a, strategy: o } = t, s = o === "fixed", c = getDocumentElement(a), l = n ? isTopLayer(n.floating) : !1;
	if (a === c || l && s) return i;
	let u = {
		scrollLeft: 0,
		scrollTop: 0
	}, d = createCoords(1), f = createCoords(0), p = isHTMLElement(a);
	if ((p || !p && !s) && ((getNodeName(a) !== "body" || isOverflowElement(c)) && (u = getNodeScroll(a)), p)) {
		let t = getBoundingClientRect(a);
		d = getScale(a), f.x = t.x + a.clientLeft, f.y = t.y + a.clientTop;
	}
	let m = c && !p && !s ? getHTMLOffset(c, u) : createCoords(0);
	return {
		width: i.width * d.x,
		height: i.height * d.y,
		x: i.x * d.x - u.scrollLeft * d.x + f.x + m.x,
		y: i.y * d.y - u.scrollTop * d.y + f.y + m.y
	};
}
function getClientRects(t) {
	return Array.from(t.getClientRects());
}
function getDocumentRect(t) {
	let n = getDocumentElement(t), i = getNodeScroll(t), a = t.ownerDocument.body, o = max(n.scrollWidth, n.clientWidth, a.scrollWidth, a.clientWidth), s = max(n.scrollHeight, n.clientHeight, a.scrollHeight, a.clientHeight), c = -i.scrollLeft + getWindowScrollBarX(t), l = -i.scrollTop;
	return getComputedStyle$1(a).direction === "rtl" && (c += max(n.clientWidth, a.clientWidth) - o), {
		width: o,
		height: s,
		x: c,
		y: l
	};
}
var SCROLLBAR_MAX = 25;
function getViewportRect(t, n) {
	let i = getWindow$1(t), a = getDocumentElement(t), o = i.visualViewport, s = a.clientWidth, c = a.clientHeight, l = 0, u = 0;
	if (o) {
		s = o.width, c = o.height;
		let t = isWebKit();
		(!t || t && n === "fixed") && (l = o.offsetLeft, u = o.offsetTop);
	}
	let d = getWindowScrollBarX(a);
	if (d <= 0) {
		let t = a.ownerDocument, n = t.body, i = getComputedStyle(n), o = t.compatMode === "CSS1Compat" && parseFloat(i.marginLeft) + parseFloat(i.marginRight) || 0, c = Math.abs(a.clientWidth - n.clientWidth - o);
		c <= SCROLLBAR_MAX && (s -= c);
	} else d <= SCROLLBAR_MAX && (s += d);
	return {
		width: s,
		height: c,
		x: l,
		y: u
	};
}
function getInnerBoundingClientRect(t, n) {
	let i = getBoundingClientRect(t, !0, n === "fixed"), a = i.top + t.clientTop, o = i.left + t.clientLeft, s = isHTMLElement(t) ? getScale(t) : createCoords(1), c = t.clientWidth * s.x, l = t.clientHeight * s.y, u = o * s.x, d = a * s.y;
	return {
		width: c,
		height: l,
		x: u,
		y: d
	};
}
function getClientRectFromClippingAncestor(t, n, i) {
	let a;
	if (n === "viewport") a = getViewportRect(t, i);
	else if (n === "document") a = getDocumentRect(getDocumentElement(t));
	else if (isElement$1(n)) a = getInnerBoundingClientRect(n, i);
	else {
		let i = getVisualOffsets(t);
		a = {
			x: n.x - i.x,
			y: n.y - i.y,
			width: n.width,
			height: n.height
		};
	}
	return rectToClientRect(a);
}
function hasFixedPositionAncestor(t, n) {
	let i = getParentNode(t);
	return i === n || !isElement$1(i) || isLastTraversableNode(i) ? !1 : getComputedStyle$1(i).position === "fixed" || hasFixedPositionAncestor(i, n);
}
function getClippingElementAncestors(t, n) {
	let i = n.get(t);
	if (i) return i;
	let a = getOverflowAncestors(t, [], !1).filter((t) => isElement$1(t) && getNodeName(t) !== "body"), o = null, s = getComputedStyle$1(t).position === "fixed", c = s ? getParentNode(t) : t;
	for (; isElement$1(c) && !isLastTraversableNode(c);) {
		let n = getComputedStyle$1(c), i = isContainingBlock(c);
		!i && n.position === "fixed" && (o = null), (s ? !i && !o : !i && n.position === "static" && o && (o.position === "absolute" || o.position === "fixed") || isOverflowElement(c) && !i && hasFixedPositionAncestor(t, c)) ? a = a.filter((t) => t !== c) : o = n, c = getParentNode(c);
	}
	return n.set(t, a), a;
}
function getClippingRect(t) {
	let { element: n, boundary: i, rootBoundary: a, strategy: o } = t, s = [...i === "clippingAncestors" ? isTopLayer(n) ? [] : getClippingElementAncestors(n, this._c) : [].concat(i), a], c = getClientRectFromClippingAncestor(n, s[0], o), l = c.top, u = c.right, d = c.bottom, f = c.left;
	for (let t = 1; t < s.length; t++) {
		let i = getClientRectFromClippingAncestor(n, s[t], o);
		l = max(i.top, l), u = min(i.right, u), d = min(i.bottom, d), f = max(i.left, f);
	}
	return {
		width: u - f,
		height: d - l,
		x: f,
		y: l
	};
}
function getDimensions(t) {
	let { width: n, height: i } = getCssDimensions(t);
	return {
		width: n,
		height: i
	};
}
function getRectRelativeToOffsetParent(t, n, i) {
	let a = isHTMLElement(n), o = getDocumentElement(n), s = i === "fixed", c = getBoundingClientRect(t, !0, s, n), l = {
		scrollLeft: 0,
		scrollTop: 0
	}, u = createCoords(0);
	function d() {
		u.x = getWindowScrollBarX(o);
	}
	if (a || !a && !s) if ((getNodeName(n) !== "body" || isOverflowElement(o)) && (l = getNodeScroll(n)), a) {
		let t = getBoundingClientRect(n, !0, s, n);
		u.x = t.x + n.clientLeft, u.y = t.y + n.clientTop;
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
function isStaticPositioned(t) {
	return getComputedStyle$1(t).position === "static";
}
function getTrueOffsetParent(t, n) {
	if (!isHTMLElement(t) || getComputedStyle$1(t).position === "fixed") return null;
	if (n) return n(t);
	let i = t.offsetParent;
	return getDocumentElement(t) === i && (i = i.ownerDocument.body), i;
}
function getOffsetParent(t, n) {
	let i = getWindow$1(t);
	if (isTopLayer(t)) return i;
	if (!isHTMLElement(t)) {
		let n = getParentNode(t);
		for (; n && !isLastTraversableNode(n);) {
			if (isElement$1(n) && !isStaticPositioned(n)) return n;
			n = getParentNode(n);
		}
		return i;
	}
	let a = getTrueOffsetParent(t, n);
	for (; a && isTableElement(a) && isStaticPositioned(a);) a = getTrueOffsetParent(a, n);
	return a && isLastTraversableNode(a) && isStaticPositioned(a) && !isContainingBlock(a) ? i : a || getContainingBlock(t) || i;
}
var getElementRects = async function(t) {
	let n = this.getOffsetParent || getOffsetParent, i = this.getDimensions, a = await i(t.floating);
	return {
		reference: getRectRelativeToOffsetParent(t.reference, await n(t.floating), t.strategy),
		floating: {
			x: 0,
			y: 0,
			width: a.width,
			height: a.height
		}
	};
};
function isRTL(t) {
	return getComputedStyle$1(t).direction === "rtl";
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
function rectsAreEqual(t, n) {
	return t.x === n.x && t.y === n.y && t.width === n.width && t.height === n.height;
}
function observeMove(t, n) {
	let i = null, a, o = getDocumentElement(t);
	function s() {
		var t;
		clearTimeout(a), (t = i) == null || t.disconnect(), i = null;
	}
	function c(l, u) {
		l === void 0 && (l = !1), u === void 0 && (u = 1), s();
		let d = t.getBoundingClientRect(), { left: f, top: p, width: m, height: h } = d;
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
			i === 1 && !rectsAreEqual(d, t.getBoundingClientRect()) && c(), x = !1;
		}
		try {
			i = new IntersectionObserver(S, {
				...b,
				root: o.ownerDocument
			});
		} catch {
			i = new IntersectionObserver(S, b);
		}
		i.observe(t);
	}
	return c(!0), s;
}
function autoUpdate(t, n, i, a) {
	a === void 0 && (a = {});
	let { ancestorScroll: o = !0, ancestorResize: s = !0, elementResize: c = typeof ResizeObserver == "function", layoutShift: l = typeof IntersectionObserver == "function", animationFrame: u = !1 } = a, d = unwrapElement(t), f = o || s ? [...d ? getOverflowAncestors(d) : [], ...n ? getOverflowAncestors(n) : []] : [];
	f.forEach((t) => {
		o && t.addEventListener("scroll", i, { passive: !0 }), s && t.addEventListener("resize", i);
	});
	let p = d && l ? observeMove(d, i) : null, m = -1, h = null;
	c && (h = new ResizeObserver((t) => {
		let [a] = t;
		a && a.target === d && h && n && (h.unobserve(n), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
			var t;
			(t = h) == null || t.observe(n);
		})), i();
	}), d && !u && h.observe(d), n && h.observe(n));
	let g, _ = u ? getBoundingClientRect(t) : null;
	u && v();
	function v() {
		let n = getBoundingClientRect(t);
		_ && !rectsAreEqual(_, n) && i(), _ = n, g = requestAnimationFrame(v);
	}
	return i(), () => {
		var t;
		f.forEach((t) => {
			o && t.removeEventListener("scroll", i), s && t.removeEventListener("resize", i);
		}), p?.(), (t = h) == null || t.disconnect(), h = null, u && cancelAnimationFrame(g);
	};
}
var offset = offset$1, shift = shift$1, flip = flip$1, size = size$1, hide = hide$1, arrow = arrow$1, limitShift = limitShift$1, computePosition = (t, n, i) => {
	let a = /* @__PURE__ */ new Map(), o = {
		platform,
		...i
	}, s = {
		...o.platform,
		_c: a
	};
	return computePosition$1(t, n, {
		...o,
		platform: s
	});
};
function get(t) {
	return typeof t == "function" ? t() : t;
}
function getDPR(t) {
	return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function roundByDPR(t, n) {
	let i = getDPR(t);
	return Math.round(n * i) / i;
}
function getFloatingContentCSSVars(t) {
	return {
		[`--bits-${t}-content-transform-origin`]: "var(--bits-floating-transform-origin)",
		[`--bits-${t}-content-available-width`]: "var(--bits-floating-available-width)",
		[`--bits-${t}-content-available-height`]: "var(--bits-floating-available-height)",
		[`--bits-${t}-anchor-width`]: "var(--bits-floating-anchor-width)",
		[`--bits-${t}-anchor-height`]: "var(--bits-floating-anchor-height)"
	};
}
function useFloating(t) {
	let n = t.whileElementsMounted, i = /* @__PURE__ */ user_derived(() => get(t.open) ?? !0), a = /* @__PURE__ */ user_derived(() => get(t.middleware)), o = /* @__PURE__ */ user_derived(() => get(t.transform) ?? !0), s = /* @__PURE__ */ user_derived(() => get(t.placement) ?? "bottom"), c = /* @__PURE__ */ user_derived(() => get(t.strategy) ?? "absolute"), l = /* @__PURE__ */ user_derived(() => get(t.sideOffset) ?? 0), u = /* @__PURE__ */ user_derived(() => get(t.alignOffset) ?? 0), d = t.reference, f = /* @__PURE__ */ state(0), p = /* @__PURE__ */ state(0), m = simpleBox(null), h = /* @__PURE__ */ state(proxy(get$2(c))), g = /* @__PURE__ */ state(proxy(get$2(s))), _ = /* @__PURE__ */ state(proxy({})), v = /* @__PURE__ */ state(!1), y = !1, b = 0, x = /* @__PURE__ */ user_derived(() => {
		let t = m.current ? roundByDPR(m.current, get$2(f)) : get$2(f), n = m.current ? roundByDPR(m.current, get$2(p)) : get$2(p);
		return get$2(o) ? {
			position: get$2(h),
			left: "0",
			top: "0",
			transform: `translate(${t}px, ${n}px)`,
			...m.current && getDPR(m.current) >= 1.5 && { willChange: "transform" }
		} : {
			position: get$2(h),
			left: `${t}px`,
			top: `${n}px`
		};
	}), S;
	function C() {
		if (d.current === null || m.current === null) return;
		let t = d.current, n = m.current, o = ++b;
		computePosition(t, n, {
			middleware: get$2(a),
			placement: get$2(s),
			strategy: get$2(c)
		}).then((a) => {
			if (o === b && !(d.current !== t || m.current !== n)) {
				if (isReferenceHidden(t)) {
					set(_, {
						...get$2(_),
						hide: {
							...get$2(_).hide,
							referenceHidden: !0
						}
					}, !0);
					return;
				}
				if (!get$2(i) && get$2(f) !== 0 && get$2(p) !== 0) {
					let t = Math.max(Math.abs(get$2(l)), Math.abs(get$2(u)), 15);
					if (a.x <= t && a.y <= t) return;
				}
				set(f, a.x, !0), set(p, a.y, !0), set(h, a.strategy, !0), set(g, a.placement, !0), set(_, a.middlewareData, !0), set(v, !0);
			}
		});
	}
	function w() {
		typeof S == "function" && (S(), S = void 0), b++;
	}
	function T() {
		if (w(), n === void 0) {
			C();
			return;
		}
		get$2(i) && (d.current === null || m.current === null || (S = n(d.current, m.current, C)));
	}
	function E() {
		!get$2(i) && m.current === null && set(v, !1);
	}
	function D() {
		return [
			get$2(a),
			get$2(s),
			get$2(c),
			get$2(l),
			get$2(u),
			get$2(i)
		];
	}
	return user_effect(() => {
		n === void 0 && get$2(i) && C();
	}), user_effect(T), user_effect(() => {
		if (n !== void 0) {
			if (D(), !get$2(i)) {
				y = !1;
				return;
			}
			if (!get$2(v)) {
				y = !1;
				return;
			}
			if (!y) {
				y = !0;
				return;
			}
			C();
		}
	}), user_effect(E), user_effect(() => w), {
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
			return get$2(x);
		},
		get update() {
			return C;
		}
	};
}
function isReferenceHidden(t) {
	return t instanceof Element ? !t.isConnected || t instanceof HTMLElement && t.hidden ? !0 : t.getClientRects().length === 0 : !1;
}
var OPPOSITE_SIDE = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, FloatingRootContext = new Context("Floating.Root"), FloatingContentContext = new Context("Floating.Content"), FloatingTooltipRootContext = new Context("Floating.Root"), FloatingRootState = class t {
	static create(n = !1) {
		return n ? FloatingTooltipRootContext.set(new t()) : FloatingRootContext.set(new t());
	}
	anchorNode = simpleBox(null);
	customAnchorNode = simpleBox(null);
	triggerNode = simpleBox(null);
	constructor() {
		user_effect(() => {
			this.customAnchorNode.current ? typeof this.customAnchorNode.current == "string" ? this.anchorNode.current = document.querySelector(this.customAnchorNode.current) : this.anchorNode.current = this.customAnchorNode.current : this.anchorNode.current = this.triggerNode.current;
		});
	}
}, FloatingContentState = class t {
	static create(n, i = !1) {
		return i ? FloatingContentContext.set(new t(n, FloatingTooltipRootContext.get())) : FloatingContentContext.set(new t(n, FloatingRootContext.get()));
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
	set hasExplicitBoundaries(t) {
		set(this.#hasExplicitBoundaries, t);
	}
	#detectOverflowOptions = /* @__PURE__ */ user_derived(() => ({
		padding: this.opts.collisionPadding.current,
		boundary: get$2(this.#boundary).filter(isNotNull),
		altBoundary: this.hasExplicitBoundaries
	}));
	get detectOverflowOptions() {
		return get$2(this.#detectOverflowOptions);
	}
	set detectOverflowOptions(t) {
		set(this.#detectOverflowOptions, t);
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
			apply: ({ rects: t, availableWidth: n, availableHeight: i }) => {
				let { width: a, height: o } = t.reference;
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
	set middleware(t) {
		set(this.#middleware, t);
	}
	floating;
	#placedSide = /* @__PURE__ */ user_derived(() => getSideFromPlacement(this.floating.placement));
	get placedSide() {
		return get$2(this.#placedSide);
	}
	set placedSide(t) {
		set(this.#placedSide, t);
	}
	#placedAlign = /* @__PURE__ */ user_derived(() => getAlignFromPlacement(this.floating.placement));
	get placedAlign() {
		return get$2(this.#placedAlign);
	}
	set placedAlign(t) {
		set(this.#placedAlign, t);
	}
	#arrowX = /* @__PURE__ */ user_derived(() => this.floating.middlewareData.arrow?.x ?? 0);
	get arrowX() {
		return get$2(this.#arrowX);
	}
	set arrowX(t) {
		set(this.#arrowX, t);
	}
	#arrowY = /* @__PURE__ */ user_derived(() => this.floating.middlewareData.arrow?.y ?? 0);
	get arrowY() {
		return get$2(this.#arrowY);
	}
	set arrowY(t) {
		set(this.#arrowY, t);
	}
	#cannotCenterArrow = /* @__PURE__ */ user_derived(() => this.floating.middlewareData.arrow?.centerOffset !== 0);
	get cannotCenterArrow() {
		return get$2(this.#cannotCenterArrow);
	}
	set cannotCenterArrow(t) {
		set(this.#cannotCenterArrow, t);
	}
	#contentZIndex = /* @__PURE__ */ state();
	get contentZIndex() {
		return get$2(this.#contentZIndex);
	}
	set contentZIndex(t) {
		set(this.#contentZIndex, t, !0);
	}
	#arrowBaseSide = /* @__PURE__ */ user_derived(() => OPPOSITE_SIDE[this.placedSide]);
	get arrowBaseSide() {
		return get$2(this.#arrowBaseSide);
	}
	set arrowBaseSide(t) {
		set(this.#arrowBaseSide, t);
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
	set wrapperProps(t) {
		set(this.#wrapperProps, t);
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
	set props(t) {
		set(this.#props, t);
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
	set arrowStyle(t) {
		set(this.#arrowStyle, t);
	}
	constructor(t, n) {
		this.opts = t, this.root = n, this.#updatePositionStrategy = t.updatePositionStrategy, t.customAnchor && (this.root.customAnchorNode.current = t.customAnchor.current), watch(() => t.customAnchor.current, (t) => {
			this.root.customAnchorNode.current = t;
		}), this.floating = useFloating({
			strategy: () => this.opts.strategy.current,
			placement: () => get$2(this.#desiredPlacement),
			middleware: () => this.middleware,
			reference: this.root.anchorNode,
			whileElementsMounted: (...t) => autoUpdate(...t, { animationFrame: this.#updatePositionStrategy?.current === "always" }),
			open: () => this.opts.enabled.current,
			sideOffset: () => this.opts.sideOffset.current,
			alignOffset: () => this.opts.alignOffset.current
		}), user_effect(() => {
			this.floating.isPositioned && this.opts.onPlaced?.current();
		}), watch(() => this.contentRef.current, (t) => {
			if (!t || !this.opts.enabled.current) return;
			let n = getWindow(t), i = n.requestAnimationFrame(() => {
				if (this.contentRef.current !== t || !this.opts.enabled.current) return;
				let i = n.getComputedStyle(t).zIndex;
				i !== this.contentZIndex && (this.contentZIndex = i);
			});
			return () => {
				n.cancelAnimationFrame(i);
			};
		}), user_effect(() => {
			this.floating.floating.current = this.wrapperRef.current;
		});
	}
};
function transformOrigin(t) {
	return {
		name: "transformOrigin",
		options: t,
		fn(n) {
			let { placement: i, rects: a, middlewareData: o } = n, s = o.arrow?.centerOffset !== 0, c = s ? 0 : t.arrowWidth, l = s ? 0 : t.arrowHeight, [u, d] = getSideAndAlignFromPlacement(i), f = {
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
function getSideAndAlignFromPlacement(t) {
	let [n, i = "center"] = t.split("-");
	return [n, i];
}
function getSideFromPlacement(t) {
	return getSideAndAlignFromPlacement(t)[0];
}
function getAlignFromPlacement(t) {
	return getSideAndAlignFromPlacement(t)[1];
}
function Floating_layer(t, n) {
	push(n, !0);
	let i = prop(n, "tooltip", 3, !1);
	FloatingRootState.create(i());
	var a = comment(), o = first_child(a);
	snippet(o, () => n.children ?? noop$1), append(t, a), pop();
}
function Floating_layer_content(t, n) {
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
	}, x()), C = /* @__PURE__ */ user_derived(() => mergeProps(S.wrapperProps, { style: { pointerEvents: "auto" } }));
	var T = comment(), E = first_child(T);
	snippet(E, () => n.content ?? noop$1, () => ({
		props: S.props,
		wrapperProps: get$2(C)
	})), append(t, T), pop();
}
function Floating_layer_content_static(t, n) {
	push(n, !0), onMount(() => {
		n.onPlaced?.();
	});
	var i = comment(), a = first_child(i);
	snippet(a, () => n.content ?? noop$1, () => ({
		props: {},
		wrapperProps: {}
	})), append(t, i), pop();
}
function Popper_content(t, n) {
	let i = prop(n, "isStatic", 3, !1), a = /* @__PURE__ */ rest_props(n, [
		"$$slots",
		"$$events",
		"$$legacy",
		"content",
		"isStatic",
		"onPlaced"
	]);
	var o = comment(), s = first_child(o), c = (t) => {
		Floating_layer_content_static(t, {
			get content() {
				return n.content;
			},
			get onPlaced() {
				return n.onPlaced;
			}
		});
	}, l = (t) => {
		Floating_layer_content(t, spread_props({
			get content() {
				return n.content;
			},
			get onPlaced() {
				return n.onPlaced;
			}
		}, () => a));
	};
	if_block(s, (t) => {
		i() ? t(c) : t(l, -1);
	}), append(t, o);
}
var root_1$19 = /* @__PURE__ */ from_html("<!> <!>", 1);
function Popper_layer_inner(t, n) {
	push(n, !0);
	let i = prop(n, "interactOutsideBehavior", 3, "close"), a = prop(n, "trapFocus", 3, !0), o = prop(n, "isValidEvent", 3, () => !1), s = prop(n, "customAnchor", 3, null), c = prop(n, "isStatic", 3, !1), l = prop(n, "tooltip", 3, !1), u = prop(n, "contentPointerEvents", 3, "auto"), d = /* @__PURE__ */ rest_props(n, /* @__PURE__ */ "$$slots.$$events.$$legacy.popper.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.enabled.ref.tooltip.contentPointerEvents".split(".")), f = /* @__PURE__ */ user_derived(() => n.preventScroll ?? !0), p = /* @__PURE__ */ user_derived(() => n.strategy ?? (get$2(f) ? "fixed" : "absolute"));
	Popper_content(t, {
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
			return get$2(p);
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
		content: (t, s) => {
			let c = () => s?.().props, l = () => s?.().wrapperProps;
			var p = root_1$19(), m = first_child(p), h = (t) => {
				Scroll_lock(t, { get preventScroll() {
					return get$2(f);
				} });
			}, g = (t) => {
				Scroll_lock(t, { get preventScroll() {
					return get$2(f);
				} });
			};
			if_block(m, (t) => {
				n.forceMount && n.enabled ? t(h) : n.forceMount || t(g, 1);
			});
			var _ = sibling(m, 2);
			Focus_scope(_, {
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
				focusScope: (t, a) => {
					let s = () => a?.().props;
					Escape_layer(t, {
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
						children: (t, a) => {
							Dismissible_layer(t, {
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
								children: (t, i) => {
									let a = () => i?.().props;
									Text_selection_layer(t, {
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
										children: (t, i) => {
											var o = comment(), f = first_child(o);
											{
												let t = /* @__PURE__ */ user_derived(() => ({
													props: mergeProps(d, c(), a(), s(), { style: { pointerEvents: u() } }),
													wrapperProps: l()
												}));
												snippet(f, () => n.popper ?? noop$1, () => get$2(t));
											}
											append(t, o);
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
			}), append(t, p);
		},
		$$slots: { content: !0 }
	}), pop();
}
function Popper_layer(t, n) {
	let i = prop(n, "interactOutsideBehavior", 3, "close"), a = prop(n, "trapFocus", 3, !0), o = prop(n, "isValidEvent", 3, () => !1), s = prop(n, "customAnchor", 3, null), c = prop(n, "isStatic", 3, !1), l = /* @__PURE__ */ rest_props(n, /* @__PURE__ */ "$$slots.$$events.$$legacy.popper.open.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.ref.shouldRender".split("."));
	var u = comment(), d = first_child(u), f = (t) => {
		Popper_layer_inner(t, spread_props({
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
	};
	if_block(d, (t) => {
		n.shouldRender && t(f);
	}), append(t, u);
}
function Popper_layer_force_mount(t, n) {
	let i = prop(n, "interactOutsideBehavior", 3, "close"), a = prop(n, "trapFocus", 3, !0), o = prop(n, "isValidEvent", 3, () => !1), s = prop(n, "customAnchor", 3, null), c = prop(n, "isStatic", 3, !1), l = /* @__PURE__ */ rest_props(n, /* @__PURE__ */ "$$slots.$$events.$$legacy.popper.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.enabled".split("."));
	Popper_layer_inner(t, spread_props({
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
function isPointInPolygon(t, n) {
	let [i, a] = t, o = !1, s = n.length;
	for (let t = 0, c = s - 1; t < s; c = t++) {
		let [s, l] = n[t] ?? [0, 0], [u, d] = n[c] ?? [0, 0];
		l >= a != d >= a && i <= (u - s) * (a - l) / (d - l) + s && (o = !o);
	}
	return o;
}
function isInsideRect(t, n) {
	return t[0] >= n.left && t[0] <= n.right && t[1] >= n.top && t[1] <= n.bottom;
}
function getSide(t, n) {
	let i = t.left + t.width / 2, a = t.top + t.height / 2, o = n.left + n.width / 2, s = n.top + n.height / 2, c = o - i, l = s - a;
	return Math.abs(c) > Math.abs(l) ? c > 0 ? "right" : "left" : l > 0 ? "bottom" : "top";
}
var SafePolygon = class {
	#opts;
	#buffer;
	#transitIntentTimeout;
	#exitPoint = null;
	#exitTarget = null;
	#transitTargets = [];
	#trackedTriggerNode = null;
	#leaveFallbackRafId = null;
	#transitIntentTimeoutId = null;
	#cancelLeaveFallback() {
		this.#leaveFallbackRafId !== null && (cancelAnimationFrame(this.#leaveFallbackRafId), this.#leaveFallbackRafId = null);
	}
	#scheduleLeaveFallback() {
		this.#cancelLeaveFallback(), this.#leaveFallbackRafId = requestAnimationFrame(() => {
			this.#leaveFallbackRafId = null, !(!this.#exitPoint || !this.#exitTarget) && (this.#clearTracking(), this.#opts.onPointerExit());
		});
	}
	#cancelTransitIntentTimeout() {
		this.#transitIntentTimeoutId !== null && (clearTimeout(this.#transitIntentTimeoutId), this.#transitIntentTimeoutId = null);
	}
	#scheduleTransitIntentTimeout() {
		this.#transitIntentTimeout !== null && (this.#cancelTransitIntentTimeout(), this.#transitIntentTimeoutId = window.setTimeout(() => {
			this.#transitIntentTimeoutId = null, !(!this.#exitPoint || !this.#exitTarget) && (this.#clearTracking(), this.#opts.onPointerExit());
		}, this.#transitIntentTimeout));
	}
	constructor(t) {
		this.#opts = t, this.#buffer = t.buffer ?? 1;
		let n = t.transitIntentTimeout;
		this.#transitIntentTimeout = typeof n == "number" && n > 0 ? n : null, watch([
			t.triggerNode,
			t.contentNode,
			t.enabled
		], ([t, n, i]) => {
			if (!t || !n || !i) {
				this.#trackedTriggerNode = null, this.#clearTracking();
				return;
			}
			this.#trackedTriggerNode && this.#trackedTriggerNode !== t && this.#clearTracking(), this.#trackedTriggerNode = t;
			let a = getDocument(t);
			return [
				on(a, "pointermove", (i) => {
					this.#onPointerMove([i.clientX, i.clientY], t, n);
				}),
				on(t, "pointerleave", (t) => {
					let i = t.relatedTarget;
					if (isElement(i) && n.contains(i)) return;
					let a = this.#opts.ignoredTargets?.() ?? [];
					isElement(i) && a.some((t) => t === i || t.contains(i)) || (this.#transitTargets = isElement(i) && a.length > 0 ? a.filter((t) => i.contains(t)) : [], this.#exitPoint = [t.clientX, t.clientY], this.#exitTarget = "content", this.#scheduleLeaveFallback());
				}),
				on(t, "pointerenter", () => {
					this.#clearTracking();
				}),
				on(n, "pointerenter", () => {
					this.#clearTracking();
				}),
				on(n, "pointerleave", (n) => {
					let i = n.relatedTarget;
					isElement(i) && t.contains(i) || (this.#exitPoint = [n.clientX, n.clientY], this.#exitTarget = "trigger", this.#scheduleLeaveFallback());
				})
			].reduce((t, n) => () => {
				t(), n();
			}, () => {});
		});
	}
	#onPointerMove(t, n, i) {
		if (!this.#exitPoint || !this.#exitTarget) return;
		this.#cancelLeaveFallback(), this.#scheduleTransitIntentTimeout();
		let a = n.getBoundingClientRect(), o = i.getBoundingClientRect();
		if (this.#exitTarget === "content" && isInsideRect(t, o)) {
			this.#clearTracking();
			return;
		}
		if (this.#exitTarget === "trigger" && isInsideRect(t, a)) {
			this.#clearTracking();
			return;
		}
		if (this.#exitTarget === "content" && this.#transitTargets.length > 0) for (let n of this.#transitTargets) {
			let i = n.getBoundingClientRect();
			if (isInsideRect(t, i)) return;
			let o = getSide(a, i), s = this.#getCorridorPolygon(a, i, o);
			if (s && isPointInPolygon(t, s)) return;
		}
		let s = getSide(a, o), c = this.#getCorridorPolygon(a, o, s);
		if (c && isPointInPolygon(t, c)) return;
		let l = this.#exitTarget === "content" ? o : a, u = this.#getSafePolygon(this.#exitPoint, l, s, this.#exitTarget);
		isPointInPolygon(t, u) || (this.#clearTracking(), this.#opts.onPointerExit());
	}
	#clearTracking() {
		this.#exitPoint = null, this.#exitTarget = null, this.#transitTargets = [], this.#cancelLeaveFallback(), this.#cancelTransitIntentTimeout();
	}
	#getCorridorPolygon(t, n, i) {
		let a = this.#buffer;
		switch (i) {
			case "top": return [
				[Math.min(t.left, n.left) - a, t.top],
				[Math.min(t.left, n.left) - a, n.bottom],
				[Math.max(t.right, n.right) + a, n.bottom],
				[Math.max(t.right, n.right) + a, t.top]
			];
			case "bottom": return [
				[Math.min(t.left, n.left) - a, t.bottom],
				[Math.min(t.left, n.left) - a, n.top],
				[Math.max(t.right, n.right) + a, n.top],
				[Math.max(t.right, n.right) + a, t.bottom]
			];
			case "left": return [
				[t.left, Math.min(t.top, n.top) - a],
				[n.right, Math.min(t.top, n.top) - a],
				[n.right, Math.max(t.bottom, n.bottom) + a],
				[t.left, Math.max(t.bottom, n.bottom) + a]
			];
			case "right": return [
				[t.right, Math.min(t.top, n.top) - a],
				[n.left, Math.min(t.top, n.top) - a],
				[n.left, Math.max(t.bottom, n.bottom) + a],
				[t.right, Math.max(t.bottom, n.bottom) + a]
			];
		}
	}
	#getSafePolygon(t, n, i, a) {
		let o = this.#buffer * 4, [s, c] = t;
		switch (a === "trigger" ? this.#flipSide(i) : i) {
			case "top": return [
				[s - o, c + o],
				[s + o, c + o],
				[n.right + o, n.bottom],
				[n.right + o, n.top],
				[n.left - o, n.top],
				[n.left - o, n.bottom]
			];
			case "bottom": return [
				[s - o, c - o],
				[s + o, c - o],
				[n.right + o, n.top],
				[n.right + o, n.bottom],
				[n.left - o, n.bottom],
				[n.left - o, n.top]
			];
			case "left": return [
				[s + o, c - o],
				[s + o, c + o],
				[n.right, n.bottom + o],
				[n.left, n.bottom + o],
				[n.left, n.top - o],
				[n.right, n.top - o]
			];
			case "right": return [
				[s - o, c - o],
				[s - o, c + o],
				[n.left, n.bottom + o],
				[n.right, n.bottom + o],
				[n.right, n.top - o],
				[n.left, n.top - o]
			];
		}
	}
	#flipSide(t) {
		switch (t) {
			case "top": return "bottom";
			case "bottom": return "top";
			case "left": return "right";
			case "right": return "left";
		}
	}
};
function Dialog(t, n) {
	push(n, !0);
	let i = prop(n, "open", 15, !1), a = prop(n, "onOpenChange", 3, noop), o = prop(n, "onOpenChangeComplete", 3, noop);
	DialogRootState.create({
		variant: boxWith(() => "dialog"),
		open: boxWith(() => i(), (t) => {
			i(t), a()(t);
		}),
		onOpenChangeComplete: boxWith(() => o())
	});
	var s = comment(), c = first_child(s);
	snippet(c, () => n.children ?? noop$1), append(t, s), pop();
}
var root_2$26 = /* @__PURE__ */ from_html("<button><!></button>");
function Dialog_close(t, n) {
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
		ref: boxWith(() => o(), (t) => o(t)),
		disabled: boxWith(() => !!s())
	}), u = /* @__PURE__ */ user_derived(() => mergeProps(c, l.props));
	var d = comment(), f = first_child(d), p = (t) => {
		var i = comment(), a = first_child(i);
		snippet(a, () => n.child, () => ({ props: get$2(u) })), append(t, i);
	}, m = (t) => {
		var i = root_2$26();
		attribute_effect(i, () => ({ ...get$2(u) }));
		var a = child(i);
		snippet(a, () => n.children ?? noop$1), reset(i), append(t, i);
	};
	if_block(f, (t) => {
		n.child ? t(p) : t(m, -1);
	}), append(t, d), pop();
}
var root_6$4 = /* @__PURE__ */ from_html("<!> <!>", 1), root_8$5 = /* @__PURE__ */ from_html("<!> <div><!></div>", 1);
function Dialog_content(t, n) {
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
		ref: boxWith(() => o(), (t) => o(t))
	}), _ = /* @__PURE__ */ user_derived(() => mergeProps(h, g.props));
	var v = comment(), y = first_child(v), b = (t) => {
		Focus_scope(t, {
			get ref() {
				return g.opts.ref;
			},
			loop: !0,
			get trapFocus() {
				return f();
			},
			get enabled() {
				return g.root.opts.open.current;
			},
			get onOpenAutoFocus() {
				return l();
			},
			get onCloseAutoFocus() {
				return c();
			},
			focusScope: (t, i) => {
				let a = () => i?.().props;
				Escape_layer(t, spread_props(() => get$2(_), {
					get enabled() {
						return g.root.opts.open.current;
					},
					get ref() {
						return g.opts.ref;
					},
					onEscapeKeydown: (t) => {
						u()(t), !t.defaultPrevented && g.root.handleClose();
					},
					children: (t, i) => {
						Dismissible_layer(t, spread_props(() => get$2(_), {
							get ref() {
								return g.opts.ref;
							},
							get enabled() {
								return g.root.opts.open.current;
							},
							onInteractOutside: (t) => {
								d()(t), !t.defaultPrevented && g.root.handleClose();
							},
							children: (t, i) => {
								Text_selection_layer(t, spread_props(() => get$2(_), {
									get ref() {
										return g.opts.ref;
									},
									get enabled() {
										return g.root.opts.open.current;
									},
									children: (t, i) => {
										var o = comment(), s = first_child(o), c = (t) => {
											var i = root_6$4(), o = first_child(i), s = (t) => {
												Scroll_lock(t, {
													get preventScroll() {
														return p();
													},
													get restoreScrollDelay() {
														return m();
													}
												});
											};
											if_block(o, (t) => {
												g.root.opts.open.current && t(s);
											});
											var c = sibling(o, 2);
											{
												let t = /* @__PURE__ */ user_derived(() => ({
													props: mergeProps(get$2(_), a()),
													...g.snippetProps
												}));
												snippet(c, () => n.child, () => get$2(t));
											}
											append(t, i);
										}, l = (t) => {
											var i = root_8$5(), o = first_child(i);
											Scroll_lock(o, { get preventScroll() {
												return p();
											} });
											var s = sibling(o, 2);
											attribute_effect(s, (t) => ({ ...t }), [() => mergeProps(get$2(_), a())]);
											var c = child(s);
											snippet(c, () => n.children ?? noop$1), reset(s), append(t, i);
										};
										if_block(s, (t) => {
											n.child ? t(c) : t(l, -1);
										}), append(t, o);
									},
									$$slots: { default: !0 }
								}));
							},
							$$slots: { default: !0 }
						}));
					},
					$$slots: { default: !0 }
				}));
			},
			$$slots: { focusScope: !0 }
		});
	};
	if_block(y, (t) => {
		(g.shouldRender || s()) && t(b);
	}), append(t, v), pop();
}
var paginationAttrs = createBitsAttrs({
	component: "pagination",
	parts: [
		"root",
		"page",
		"prev",
		"next"
	]
}), PaginationRootContext = new Context("Pagination.Root"), PaginationRootState = class t {
	static create(n) {
		return PaginationRootContext.set(new t(n));
	}
	opts;
	attachment;
	#totalPages = /* @__PURE__ */ user_derived(() => this.opts.count.current === 0 ? 1 : Math.ceil(this.opts.count.current / this.opts.perPage.current));
	get totalPages() {
		return get$2(this.#totalPages);
	}
	set totalPages(t) {
		set(this.#totalPages, t);
	}
	#range = /* @__PURE__ */ user_derived(() => {
		let t = (this.opts.page.current - 1) * this.opts.perPage.current, n = Math.min(t + this.opts.perPage.current, this.opts.count.current);
		return {
			start: t + 1,
			end: n
		};
	});
	get range() {
		return get$2(this.#range);
	}
	set range(t) {
		set(this.#range, t);
	}
	#pages = /* @__PURE__ */ user_derived(() => getPageItems({
		page: this.opts.page.current,
		totalPages: this.totalPages,
		siblingCount: this.opts.siblingCount.current
	}));
	get pages() {
		return get$2(this.#pages);
	}
	set pages(t) {
		set(this.#pages, t);
	}
	#hasPrevPage = /* @__PURE__ */ user_derived(() => this.opts.page.current > 1);
	get hasPrevPage() {
		return get$2(this.#hasPrevPage);
	}
	set hasPrevPage(t) {
		set(this.#hasPrevPage, t);
	}
	#hasNextPage = /* @__PURE__ */ user_derived(() => this.opts.page.current < this.totalPages);
	get hasNextPage() {
		return get$2(this.#hasNextPage);
	}
	set hasNextPage(t) {
		set(this.#hasNextPage, t);
	}
	constructor(t) {
		this.opts = t, this.attachment = attachRef(this.opts.ref);
	}
	setPage(t) {
		this.opts.page.current = t;
	}
	getPageTriggerNodes() {
		let t = this.opts.ref.current;
		return t ? Array.from(t.querySelectorAll("[data-pagination-page]")) : [];
	}
	getButtonNode(t) {
		let n = this.opts.ref.current;
		if (n) return n.querySelector(paginationAttrs.selector(t));
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
	set snippetProps(t) {
		set(this.#snippetProps, t);
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
	set props(t) {
		set(this.#props, t);
	}
}, PaginationPageState = class t {
	static create(n) {
		return new t(n, PaginationRootContext.get());
	}
	opts;
	root;
	attachment;
	#isSelected = /* @__PURE__ */ user_derived(() => this.opts.page.current.value === this.root.opts.page.current);
	constructor(t, n) {
		this.opts = t, this.root = n, this.attachment = attachRef(this.opts.ref), this.onclick = this.onclick.bind(this), this.onkeydown = this.onkeydown.bind(this);
	}
	onclick(t) {
		this.opts.disabled.current || t.button === 0 && this.root.setPage(this.opts.page.current.value);
	}
	onkeydown(t) {
		t.key === " " || t.key === "Enter" ? (t.preventDefault(), this.root.setPage(this.opts.page.current.value)) : handleTriggerKeydown(t, this.opts.ref.current, this.root);
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
	set props(t) {
		set(this.#props, t);
	}
}, PaginationButtonState = class t {
	static create(n) {
		return new t(n, PaginationRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(t, n) {
		this.opts = t, this.root = n, this.attachment = attachRef(this.opts.ref), this.onclick = this.onclick.bind(this), this.onkeydown = this.onkeydown.bind(this);
	}
	#action() {
		this.opts.type === "prev" ? this.root.prevPage() : this.root.nextPage();
	}
	#isDisabled = /* @__PURE__ */ user_derived(() => this.opts.disabled.current ? !0 : this.opts.type === "prev" ? !this.root.hasPrevPage : this.opts.type === "next" ? !this.root.hasNextPage : !1);
	onclick(t) {
		this.opts.disabled.current || t.button === 0 && this.#action();
	}
	onkeydown(t) {
		t.key === " " || t.key === "Enter" ? (t.preventDefault(), this.#action()) : handleTriggerKeydown(t, this.opts.ref.current, this.root);
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
	set props(t) {
		set(this.#props, t);
	}
};
function handleTriggerKeydown(t, n, i) {
	if (!n || !i.opts.ref.current) return;
	let a = i.getPageTriggerNodes(), o = i.getButtonNode("next"), s = i.getButtonNode("prev");
	s && a.unshift(s), o && a.push(o);
	let c = a.indexOf(n), l = getElemDirection(i.opts.ref.current), { nextKey: u, prevKey: d } = getDirectionalKeys(l, i.opts.orientation.current), f = i.opts.loop.current, p = {
		[u]: c + 1,
		[d]: c - 1,
		[HOME]: 0,
		End: a.length - 1
	}[t.key];
	if (p === void 0) return;
	t.preventDefault(), p < 0 && f ? p = a.length - 1 : p === a.length && f && (p = 0);
	let m = a[p];
	m && m.focus();
}
function getPageItems({ page: t = 1, totalPages: n, siblingCount: i = 1 }) {
	let a = [], o = new Set([1, n]), s = 3 + i, c = n - 2 - i;
	if (s > c) for (let t = 2; t <= n - 1; t++) o.add(t);
	else if (t < s) for (let t = 2; t <= Math.min(s, n); t++) o.add(t);
	else if (t > c) for (let t = n - 1; t >= Math.max(c, 2); t--) o.add(t);
	else for (let a = Math.max(t - i, 2); a <= Math.min(t + i, n); a++) o.add(a);
	function l(t) {
		a.push({
			type: "page",
			value: t,
			key: `page-${t}`
		});
	}
	function u() {
		let t = useId();
		a.push({
			type: "ellipsis",
			key: `ellipsis-${t}`
		});
	}
	let d = 0;
	for (let t of Array.from(o).sort((t, n) => t - n)) t - d > 1 && u(), l(t), d = t;
	return a;
}
var root_2$25 = /* @__PURE__ */ from_html("<div><!></div>");
function Pagination(t, n) {
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
		page: boxWith(() => s(), (t) => {
			s(t), u()?.(t);
		}),
		loop: boxWith(() => d()),
		siblingCount: boxWith(() => l()),
		orientation: boxWith(() => f()),
		ref: boxWith(() => c(), (t) => c(t))
	}), h = /* @__PURE__ */ user_derived(() => mergeProps(p, m.props));
	var g = comment(), _ = first_child(g), v = (t) => {
		var i = comment(), a = first_child(i);
		{
			let t = /* @__PURE__ */ user_derived(() => ({
				props: get$2(h),
				...m.snippetProps
			}));
			snippet(a, () => n.child, () => get$2(t));
		}
		append(t, i);
	}, y = (t) => {
		var i = root_2$25();
		attribute_effect(i, () => ({ ...get$2(h) }));
		var a = child(i);
		snippet(a, () => n.children ?? noop$1, () => m.snippetProps), reset(i), append(t, i);
	};
	if_block(_, (t) => {
		n.child ? t(v) : t(y, -1);
	}), append(t, g), pop();
}
var root_2$24 = /* @__PURE__ */ from_html("<button><!></button>");
function Pagination_prev_button(t, n) {
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
		ref: boxWith(() => o(), (t) => o(t)),
		disabled: boxWith(() => !!c())
	}), d = /* @__PURE__ */ user_derived(() => mergeProps(l, u.props, { type: s() }));
	var f = comment(), p = first_child(f), m = (t) => {
		var i = comment(), a = first_child(i);
		snippet(a, () => n.child, () => ({ props: get$2(d) })), append(t, i);
	}, h = (t) => {
		var i = root_2$24();
		attribute_effect(i, () => ({ ...get$2(d) }));
		var a = child(i);
		snippet(a, () => n.children ?? noop$1), reset(i), append(t, i);
	};
	if_block(p, (t) => {
		n.child ? t(m) : t(h, -1);
	}), append(t, f), pop();
}
var root_2$23 = /* @__PURE__ */ from_html("<button><!></button>");
function Pagination_next_button(t, n) {
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
		ref: boxWith(() => o(), (t) => o(t)),
		disabled: boxWith(() => !!c())
	}), d = /* @__PURE__ */ user_derived(() => mergeProps(l, u.props, { type: s() }));
	var f = comment(), p = first_child(f), m = (t) => {
		var i = comment(), a = first_child(i);
		snippet(a, () => n.child, () => ({ props: get$2(d) })), append(t, i);
	}, h = (t) => {
		var i = root_2$23();
		attribute_effect(i, () => ({ ...get$2(d) }));
		var a = child(i);
		snippet(a, () => n.children ?? noop$1), reset(i), append(t, i);
	};
	if_block(p, (t) => {
		n.child ? t(m) : t(h, -1);
	}), append(t, f), pop();
}
var root_2$22 = /* @__PURE__ */ from_html("<button><!></button>");
function Pagination_page(t, n) {
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
		ref: boxWith(() => s(), (t) => s(t)),
		disabled: boxWith(() => !!c())
	}), d = /* @__PURE__ */ user_derived(() => mergeProps(l, u.props, { type: o() }));
	var f = comment(), p = first_child(f), m = (t) => {
		var i = comment(), a = first_child(i);
		snippet(a, () => n.child, () => ({ props: get$2(d) })), append(t, i);
	}, h = (t) => {
		var i = root_2$22();
		attribute_effect(i, () => ({ ...get$2(d) }));
		var a = child(i), o = (t) => {
			var i = comment(), a = first_child(i);
			snippet(a, () => n.children ?? noop$1), append(t, i);
		}, s = (t) => {
			var i = text();
			template_effect(() => set_text(i, n.page.value)), append(t, i);
		};
		if_block(a, (t) => {
			n.children ? t(o) : t(s, -1);
		}), reset(i), append(t, i);
	};
	if_block(p, (t) => {
		n.child ? t(m) : t(h, -1);
	}), append(t, f), pop();
}
var tabsAttrs = createBitsAttrs({
	component: "tabs",
	parts: [
		"root",
		"list",
		"trigger",
		"content"
	]
}), TabsRootContext = new Context("Tabs.Root"), TabsRootState = class t {
	static create(n) {
		return TabsRootContext.set(new t(n));
	}
	opts;
	attachment;
	rovingFocusGroup;
	#triggerIds = /* @__PURE__ */ state(proxy([]));
	get triggerIds() {
		return get$2(this.#triggerIds);
	}
	set triggerIds(t) {
		set(this.#triggerIds, t, !0);
	}
	valueToTriggerId = new SvelteMap();
	valueToContentId = new SvelteMap();
	constructor(t) {
		this.opts = t, this.attachment = attachRef(t.ref), this.rovingFocusGroup = new RovingFocusGroup({
			candidateAttr: tabsAttrs.trigger,
			rootNode: this.opts.ref,
			loop: this.opts.loop,
			orientation: this.opts.orientation
		});
	}
	registerTrigger(t, n) {
		return this.triggerIds.push(t), this.valueToTriggerId.set(n, t), () => {
			this.triggerIds = this.triggerIds.filter((n) => n !== t), this.valueToTriggerId.delete(n);
		};
	}
	registerContent(t, n) {
		return this.valueToContentId.set(n, t), () => {
			this.valueToContentId.delete(n);
		};
	}
	setValue(t) {
		this.opts.value.current = t;
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
	set props(t) {
		set(this.#props, t);
	}
}, TabsListState = class t {
	static create(n) {
		return new t(n, TabsRootContext.get());
	}
	opts;
	root;
	attachment;
	#isDisabled = /* @__PURE__ */ user_derived(() => this.root.opts.disabled.current);
	constructor(t, n) {
		this.opts = t, this.root = n, this.attachment = attachRef(t.ref);
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
	set props(t) {
		set(this.#props, t);
	}
}, TabsTriggerState = class t {
	static create(n) {
		return new t(n, TabsRootContext.get());
	}
	opts;
	root;
	attachment;
	#tabIndex = /* @__PURE__ */ state(0);
	#isActive = /* @__PURE__ */ user_derived(() => this.root.opts.value.current === this.opts.value.current);
	#isDisabled = /* @__PURE__ */ user_derived(() => this.opts.disabled.current || this.root.opts.disabled.current);
	#ariaControls = /* @__PURE__ */ user_derived(() => this.root.valueToContentId.get(this.opts.value.current));
	constructor(t, n) {
		this.opts = t, this.root = n, this.attachment = attachRef(t.ref), watch([() => this.opts.id.current, () => this.opts.value.current], ([t, n]) => this.root.registerTrigger(t, n)), user_effect(() => {
			this.root.triggerIds.length, get$2(this.#isActive) || !this.root.opts.value.current ? set(this.#tabIndex, 0) : set(this.#tabIndex, -1);
		}), this.onfocus = this.onfocus.bind(this), this.onclick = this.onclick.bind(this), this.onkeydown = this.onkeydown.bind(this);
	}
	#activate() {
		this.root.opts.value.current !== this.opts.value.current && this.root.setValue(this.opts.value.current);
	}
	onfocus(t) {
		this.root.opts.activationMode.current !== "automatic" || get$2(this.#isDisabled) || this.#activate();
	}
	onclick(t) {
		get$2(this.#isDisabled) || this.#activate();
	}
	onkeydown(t) {
		if (!get$2(this.#isDisabled)) {
			if (t.key === " " || t.key === "Enter") {
				t.preventDefault(), this.#activate();
				return;
			}
			this.root.rovingFocusGroup.handleKeydown(this.opts.ref.current, t);
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
	set props(t) {
		set(this.#props, t);
	}
}, TabsContentState = class t {
	static create(n) {
		return new t(n, TabsRootContext.get());
	}
	opts;
	root;
	attachment;
	#isActive = /* @__PURE__ */ user_derived(() => this.root.opts.value.current === this.opts.value.current);
	#ariaLabelledBy = /* @__PURE__ */ user_derived(() => this.root.valueToTriggerId.get(this.opts.value.current));
	constructor(t, n) {
		this.opts = t, this.root = n, this.attachment = attachRef(t.ref), watch([() => this.opts.id.current, () => this.opts.value.current], ([t, n]) => this.root.registerContent(t, n));
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
	set props(t) {
		set(this.#props, t);
	}
};
function getTabDataState(t) {
	return t ? "active" : "inactive";
}
var root_2$21 = /* @__PURE__ */ from_html("<div><!></div>");
function Tabs(t, n) {
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
		value: boxWith(() => s(), (t) => {
			s(t), c()(t);
		}),
		orientation: boxWith(() => l()),
		loop: boxWith(() => u()),
		activationMode: boxWith(() => d()),
		disabled: boxWith(() => f()),
		ref: boxWith(() => o(), (t) => o(t))
	}), h = /* @__PURE__ */ user_derived(() => mergeProps(p, m.props));
	var g = comment(), _ = first_child(g), v = (t) => {
		var i = comment(), a = first_child(i);
		snippet(a, () => n.child, () => ({ props: get$2(h) })), append(t, i);
	}, y = (t) => {
		var i = root_2$21();
		attribute_effect(i, () => ({ ...get$2(h) }));
		var a = child(i);
		snippet(a, () => n.children ?? noop$1), reset(i), append(t, i);
	};
	if_block(_, (t) => {
		n.child ? t(v) : t(y, -1);
	}), append(t, g), pop();
}
var root_2$20 = /* @__PURE__ */ from_html("<div><!></div>");
function Tabs_content(t, n) {
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
		ref: boxWith(() => o(), (t) => o(t))
	}), l = /* @__PURE__ */ user_derived(() => mergeProps(s, c.props));
	var u = comment(), d = first_child(u), f = (t) => {
		var i = comment(), a = first_child(i);
		snippet(a, () => n.child, () => ({ props: get$2(l) })), append(t, i);
	}, p = (t) => {
		var i = root_2$20();
		attribute_effect(i, () => ({ ...get$2(l) }));
		var a = child(i);
		snippet(a, () => n.children ?? noop$1), reset(i), append(t, i);
	};
	if_block(d, (t) => {
		n.child ? t(f) : t(p, -1);
	}), append(t, u), pop();
}
var root_2$19 = /* @__PURE__ */ from_html("<div><!></div>");
function Tabs_list(t, n) {
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
		ref: boxWith(() => o(), (t) => o(t))
	}), l = /* @__PURE__ */ user_derived(() => mergeProps(s, c.props));
	var u = comment(), d = first_child(u), f = (t) => {
		var i = comment(), a = first_child(i);
		snippet(a, () => n.child, () => ({ props: get$2(l) })), append(t, i);
	}, p = (t) => {
		var i = root_2$19();
		attribute_effect(i, () => ({ ...get$2(l) }));
		var a = child(i);
		snippet(a, () => n.children ?? noop$1), reset(i), append(t, i);
	};
	if_block(d, (t) => {
		n.child ? t(f) : t(p, -1);
	}), append(t, u), pop();
}
var root_2$18 = /* @__PURE__ */ from_html("<button><!></button>");
function Tabs_trigger(t, n) {
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
		ref: boxWith(() => c(), (t) => c(t))
	}), d = /* @__PURE__ */ user_derived(() => mergeProps(l, u.props, { type: s() }));
	var f = comment(), p = first_child(f), m = (t) => {
		var i = comment(), a = first_child(i);
		snippet(a, () => n.child, () => ({ props: get$2(d) })), append(t, i);
	}, h = (t) => {
		var i = root_2$18();
		attribute_effect(i, () => ({ ...get$2(d) }));
		var a = child(i);
		snippet(a, () => n.children ?? noop$1), reset(i), append(t, i);
	};
	if_block(p, (t) => {
		n.child ? t(m) : t(h, -1);
	}), append(t, f), pop();
}
const toggleAttrs = createBitsAttrs({
	component: "toggle",
	parts: ["root"]
});
var ToggleRootState = class t {
	static create(n) {
		return new t(n);
	}
	opts;
	attachment;
	constructor(t) {
		this.opts = t, this.attachment = attachRef(this.opts.ref), this.onclick = this.onclick.bind(this);
	}
	onclick(t) {
		this.opts.disabled.current || (this.opts.pressed.current = !this.opts.pressed.current);
	}
	#snippetProps = /* @__PURE__ */ user_derived(() => ({ pressed: this.opts.pressed.current }));
	get snippetProps() {
		return get$2(this.#snippetProps);
	}
	set snippetProps(t) {
		set(this.#snippetProps, t);
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
	set props(t) {
		set(this.#props, t);
	}
};
function getToggleDataState(t) {
	return t ? "on" : "off";
}
var root_2$17 = /* @__PURE__ */ from_html("<button><!></button>");
function Toggle(t, n) {
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
		pressed: boxWith(() => s(), (t) => {
			s(t), c()(t);
		}),
		disabled: boxWith(() => l() ?? !1),
		id: boxWith(() => o()),
		ref: boxWith(() => a(), (t) => a(t))
	}), p = /* @__PURE__ */ user_derived(() => mergeProps(d, f.props, { type: u() }));
	var m = comment(), h = first_child(m), g = (t) => {
		var i = comment(), a = first_child(i);
		{
			let t = /* @__PURE__ */ user_derived(() => ({
				props: get$2(p),
				...f.snippetProps
			}));
			snippet(a, () => n.child, () => get$2(t));
		}
		append(t, i);
	}, _ = (t) => {
		var i = root_2$17();
		attribute_effect(i, () => ({ ...get$2(p) }));
		var a = child(i);
		snippet(a, () => n.children ?? noop$1, () => f.snippetProps), reset(i), append(t, i);
	};
	if_block(h, (t) => {
		n.child ? t(g) : t(_, -1);
	}), append(t, m), pop();
}
const toggleGroupAttrs = createBitsAttrs({
	component: "toggle-group",
	parts: ["root", "item"]
});
var ToggleGroupRootContext = new Context("ToggleGroup.Root"), ToggleGroupBaseState = class {
	opts;
	rovingFocusGroup;
	attachment;
	constructor(t) {
		this.opts = t, this.attachment = attachRef(this.opts.ref), this.rovingFocusGroup = new RovingFocusGroup({
			candidateAttr: toggleGroupAttrs.item,
			rootNode: t.ref,
			loop: t.loop,
			orientation: t.orientation
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
	set props(t) {
		set(this.#props, t);
	}
}, ToggleGroupSingleState = class extends ToggleGroupBaseState {
	opts;
	isMulti = !1;
	#anyPressed = /* @__PURE__ */ user_derived(() => this.opts.value.current !== "");
	get anyPressed() {
		return get$2(this.#anyPressed);
	}
	set anyPressed(t) {
		set(this.#anyPressed, t);
	}
	constructor(t) {
		super(t), this.opts = t;
	}
	includesItem(t) {
		return this.opts.value.current === t;
	}
	toggleItem(t, n) {
		this.includesItem(t) ? this.opts.value.current = "" : (this.opts.value.current = t, this.rovingFocusGroup.setCurrentTabStopId(n));
	}
}, ToggleGroupMultipleState = class extends ToggleGroupBaseState {
	opts;
	isMulti = !0;
	#anyPressed = /* @__PURE__ */ user_derived(() => this.opts.value.current.length > 0);
	get anyPressed() {
		return get$2(this.#anyPressed);
	}
	set anyPressed(t) {
		set(this.#anyPressed, t);
	}
	constructor(t) {
		super(t), this.opts = t;
	}
	includesItem(t) {
		return this.opts.value.current.includes(t);
	}
	toggleItem(t, n) {
		this.includesItem(t) ? this.opts.value.current = this.opts.value.current.filter((n) => n !== t) : (this.opts.value.current = [...this.opts.value.current, t], this.rovingFocusGroup.setCurrentTabStopId(n));
	}
}, ToggleGroupRootState = class {
	static create(t) {
		let { type: n,...i } = t, a = n === "single" ? new ToggleGroupSingleState(i) : new ToggleGroupMultipleState(i);
		return ToggleGroupRootContext.set(a);
	}
}, ToggleGroupItemState = class t {
	static create(n) {
		return new t(n, ToggleGroupRootContext.get());
	}
	opts;
	root;
	attachment;
	#isDisabled = /* @__PURE__ */ user_derived(() => this.opts.disabled.current || this.root.opts.disabled.current);
	#isPressed = /* @__PURE__ */ user_derived(() => this.root.includesItem(this.opts.value.current));
	get isPressed() {
		return get$2(this.#isPressed);
	}
	set isPressed(t) {
		set(this.#isPressed, t);
	}
	#ariaChecked = /* @__PURE__ */ user_derived(() => this.root.isMulti ? void 0 : getAriaChecked(this.isPressed, !1));
	#ariaPressed = /* @__PURE__ */ user_derived(() => this.root.isMulti ? boolToStr(this.isPressed) : void 0);
	constructor(t, n) {
		this.opts = t, this.root = n, this.attachment = attachRef(this.opts.ref), user_effect(() => {
			this.root.opts.rovingFocus.current ? set(this.#tabIndex, this.root.rovingFocusGroup.getTabIndex(this.opts.ref.current), !0) : set(this.#tabIndex, 0);
		}), this.onclick = this.onclick.bind(this), this.onkeydown = this.onkeydown.bind(this);
	}
	#toggleItem() {
		get$2(this.#isDisabled) || this.root.toggleItem(this.opts.value.current, this.opts.id.current);
	}
	onclick(t) {
		get$2(this.#isDisabled) || this.root.toggleItem(this.opts.value.current, this.opts.id.current);
	}
	onkeydown(t) {
		if (!get$2(this.#isDisabled)) {
			if (t.key === "Enter" || t.key === " ") {
				t.preventDefault(), this.#toggleItem();
				return;
			}
			this.root.opts.rovingFocus.current && this.root.rovingFocusGroup.handleKeydown(this.opts.ref.current, t);
		}
	}
	#tabIndex = /* @__PURE__ */ state(0);
	#snippetProps = /* @__PURE__ */ user_derived(() => ({ pressed: this.isPressed }));
	get snippetProps() {
		return get$2(this.#snippetProps);
	}
	set snippetProps(t) {
		set(this.#snippetProps, t);
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
	set props(t) {
		set(this.#props, t);
	}
};
function getToggleItemDataState(t) {
	return t ? "on" : "off";
}
var root_2$16 = /* @__PURE__ */ from_html("<div><!></div>");
function Toggle_group(t, n) {
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
		value: boxWith(() => s(), (t) => {
			s(t), c()(t);
		}),
		disabled: boxWith(() => l()),
		loop: boxWith(() => u()),
		orientation: boxWith(() => d()),
		rovingFocus: boxWith(() => f()),
		type: n.type,
		ref: boxWith(() => o(), (t) => o(t))
	}), g = /* @__PURE__ */ user_derived(() => mergeProps(p, h.props));
	var _ = comment(), v = first_child(_), y = (t) => {
		var i = comment(), a = first_child(i);
		snippet(a, () => n.child, () => ({ props: get$2(g) })), append(t, i);
	}, b = (t) => {
		var i = root_2$16();
		attribute_effect(i, () => ({ ...get$2(g) }));
		var a = child(i);
		snippet(a, () => n.children ?? noop$1), reset(i), append(t, i);
	};
	if_block(v, (t) => {
		n.child ? t(y) : t(b, -1);
	}), append(t, _), pop();
}
var root_2$15 = /* @__PURE__ */ from_html("<button><!></button>");
function Toggle_group_item(t, n) {
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
		ref: boxWith(() => a(), (t) => a(t))
	}), d = /* @__PURE__ */ user_derived(() => mergeProps(l, u.props, { type: c() }));
	var f = comment(), p = first_child(f), m = (t) => {
		var i = comment(), a = first_child(i);
		{
			let t = /* @__PURE__ */ user_derived(() => ({
				props: get$2(d),
				...u.snippetProps
			}));
			snippet(a, () => n.child, () => get$2(t));
		}
		append(t, i);
	}, h = (t) => {
		var i = root_2$15();
		attribute_effect(i, () => ({ ...get$2(d) }));
		var a = child(i);
		snippet(a, () => n.children ?? noop$1, () => u.snippetProps), reset(i), append(t, i);
	};
	if_block(p, (t) => {
		n.child ? t(m) : t(h, -1);
	}), append(t, f), pop();
}
var TimeoutFn = class {
	#interval;
	#cb;
	#timer = null;
	constructor(t, n) {
		this.#cb = t, this.#interval = n, this.stop = this.stop.bind(this), this.start = this.start.bind(this), onDestroyEffect(this.stop);
	}
	#clear() {
		this.#timer !== null && (window.clearTimeout(this.#timer), this.#timer = null);
	}
	stop() {
		this.#clear();
	}
	start(...t) {
		this.#clear(), this.#timer = window.setTimeout(() => {
			this.#timer = null, this.#cb(...t);
		}, this.#interval);
	}
};
const tooltipAttrs = createBitsAttrs({
	component: "tooltip",
	parts: ["content", "trigger"]
});
var TooltipProviderContext = new Context("Tooltip.Provider"), TooltipRootContext = new Context("Tooltip.Root"), TooltipTriggerRegistryState = class {
	#triggers = /* @__PURE__ */ state(proxy(/* @__PURE__ */ new Map()));
	get triggers() {
		return get$2(this.#triggers);
	}
	set triggers(t) {
		set(this.#triggers, t, !0);
	}
	#activeTriggerId = /* @__PURE__ */ state(null);
	get activeTriggerId() {
		return get$2(this.#activeTriggerId);
	}
	set activeTriggerId(t) {
		set(this.#activeTriggerId, t, !0);
	}
	#activeTriggerNode = /* @__PURE__ */ user_derived(() => {
		let t = this.activeTriggerId;
		return t === null ? null : this.triggers.get(t)?.node ?? null;
	});
	get activeTriggerNode() {
		return get$2(this.#activeTriggerNode);
	}
	set activeTriggerNode(t) {
		set(this.#activeTriggerNode, t);
	}
	#activePayload = /* @__PURE__ */ user_derived(() => {
		let t = this.activeTriggerId;
		return t === null ? null : this.triggers.get(t)?.payload ?? null;
	});
	get activePayload() {
		return get$2(this.#activePayload);
	}
	set activePayload(t) {
		set(this.#activePayload, t);
	}
	register = (t) => {
		let n = new Map(this.triggers);
		n.set(t.id, t), this.triggers = n, this.#coerceActiveTrigger();
	};
	update = (t) => {
		let n = new Map(this.triggers);
		n.set(t.id, t), this.triggers = n, this.#coerceActiveTrigger();
	};
	unregister = (t) => {
		if (!this.triggers.has(t)) return;
		let n = new Map(this.triggers);
		n.delete(t), this.triggers = n, this.activeTriggerId === t && (this.activeTriggerId = null);
	};
	setActiveTrigger = (t) => {
		if (t === null) {
			this.activeTriggerId = null;
			return;
		}
		if (!this.triggers.has(t)) {
			this.activeTriggerId = null;
			return;
		}
		this.activeTriggerId = t;
	};
	get = (t) => this.triggers.get(t);
	has = (t) => this.triggers.has(t);
	getFirstTriggerId = () => {
		let t = this.triggers.entries().next();
		return t.done ? null : t.value[0];
	};
	#coerceActiveTrigger = () => {
		let t = this.activeTriggerId;
		t !== null && (this.triggers.has(t) || (this.activeTriggerId = null));
	};
}, TooltipProviderState = class t {
	static create(n) {
		return TooltipProviderContext.set(new t(n));
	}
	opts;
	#isOpenDelayed = /* @__PURE__ */ state(!0);
	get isOpenDelayed() {
		return get$2(this.#isOpenDelayed);
	}
	set isOpenDelayed(t) {
		set(this.#isOpenDelayed, t, !0);
	}
	isPointerInTransit = simpleBox(!1);
	#timerFn;
	#openTooltip = /* @__PURE__ */ state(null);
	constructor(t) {
		this.opts = t, this.#timerFn = new TimeoutFn(() => {
			this.isOpenDelayed = !0;
		}, this.opts.skipDelayDuration.current), onMountEffect(() => on(window, "scroll", (t) => {
			let n = get$2(this.#openTooltip);
			if (!n) return;
			let i = n.triggerNode;
			if (!i) return;
			let a = t.target;
			(a instanceof Element || a instanceof Document) && a.contains(i) && n.handleClose();
		}));
	}
	#startTimer = () => {
		if (this.opts.skipDelayDuration.current === 0) {
			this.isOpenDelayed = !0;
			return;
		} else this.#timerFn.start();
	};
	#clearTimer = () => {
		this.#timerFn.stop();
	};
	onOpen = (t) => {
		get$2(this.#openTooltip) && get$2(this.#openTooltip) !== t && get$2(this.#openTooltip).handleClose(), this.#clearTimer(), this.isOpenDelayed = !1, set(this.#openTooltip, t, !0);
	};
	onClose = (t) => {
		get$2(this.#openTooltip) === t && (set(this.#openTooltip, null), this.#startTimer());
	};
	isTooltipOpen = (t) => get$2(this.#openTooltip) === t;
}, TooltipRootState = class t {
	static create(n) {
		return TooltipRootContext.set(new t(n, TooltipProviderContext.get()));
	}
	opts;
	provider;
	#delayDuration = /* @__PURE__ */ user_derived(() => this.opts.delayDuration.current ?? this.provider.opts.delayDuration.current);
	get delayDuration() {
		return get$2(this.#delayDuration);
	}
	set delayDuration(t) {
		set(this.#delayDuration, t);
	}
	#disableHoverableContent = /* @__PURE__ */ user_derived(() => this.opts.disableHoverableContent.current ?? this.provider.opts.disableHoverableContent.current);
	get disableHoverableContent() {
		return get$2(this.#disableHoverableContent);
	}
	set disableHoverableContent(t) {
		set(this.#disableHoverableContent, t);
	}
	#disableCloseOnTriggerClick = /* @__PURE__ */ user_derived(() => this.opts.disableCloseOnTriggerClick.current ?? this.provider.opts.disableCloseOnTriggerClick.current);
	get disableCloseOnTriggerClick() {
		return get$2(this.#disableCloseOnTriggerClick);
	}
	set disableCloseOnTriggerClick(t) {
		set(this.#disableCloseOnTriggerClick, t);
	}
	#disabled = /* @__PURE__ */ user_derived(() => this.opts.disabled.current ?? this.provider.opts.disabled.current);
	get disabled() {
		return get$2(this.#disabled);
	}
	set disabled(t) {
		set(this.#disabled, t);
	}
	#ignoreNonKeyboardFocus = /* @__PURE__ */ user_derived(() => this.opts.ignoreNonKeyboardFocus.current ?? this.provider.opts.ignoreNonKeyboardFocus.current);
	get ignoreNonKeyboardFocus() {
		return get$2(this.#ignoreNonKeyboardFocus);
	}
	set ignoreNonKeyboardFocus(t) {
		set(this.#ignoreNonKeyboardFocus, t);
	}
	registry;
	tether;
	#contentNode = /* @__PURE__ */ state(null);
	get contentNode() {
		return get$2(this.#contentNode);
	}
	set contentNode(t) {
		set(this.#contentNode, t, !0);
	}
	contentPresence;
	#wasOpenDelayed = /* @__PURE__ */ state(!1);
	#timerFn;
	#stateAttr = /* @__PURE__ */ user_derived(() => this.opts.open.current ? get$2(this.#wasOpenDelayed) ? "delayed-open" : "instant-open" : "closed");
	get stateAttr() {
		return get$2(this.#stateAttr);
	}
	set stateAttr(t) {
		set(this.#stateAttr, t);
	}
	constructor(t, n) {
		this.opts = t, this.provider = n, this.tether = t.tether.current?.state ?? null, this.registry = this.tether?.registry ?? new TooltipTriggerRegistryState(), this.#timerFn = new TimeoutFn(() => {
			set(this.#wasOpenDelayed, !0), this.opts.open.current = !0;
		}, this.delayDuration ?? 0), this.tether && (this.tether.root = this, onMountEffect(() => () => {
			this.tether?.root === this && (this.tether.root = null);
		})), this.contentPresence = new PresenceManager({
			open: this.opts.open,
			ref: boxWith(() => this.contentNode),
			onComplete: () => {
				this.opts.onOpenChangeComplete.current(this.opts.open.current);
			}
		}), watch(() => this.delayDuration, () => {
			this.delayDuration !== void 0 && (this.#timerFn = new TimeoutFn(() => {
				set(this.#wasOpenDelayed, !0), this.opts.open.current = !0;
			}, this.delayDuration));
		}), watch(() => this.opts.open.current, (t) => {
			t ? (this.ensureActiveTrigger(), this.provider.onOpen(this)) : this.provider.onClose(this);
		}, { lazy: !0 }), watch(() => this.opts.triggerId.current, (t) => {
			t !== this.registry.activeTriggerId && this.registry.setActiveTrigger(t);
		}), watch(() => this.registry.activeTriggerId, (t) => {
			this.opts.triggerId.current !== t && (this.opts.triggerId.current = t);
		});
	}
	handleOpen = () => {
		this.#timerFn.stop(), set(this.#wasOpenDelayed, !1), this.ensureActiveTrigger(), this.opts.open.current = !0;
	};
	handleClose = () => {
		this.#timerFn.stop(), this.opts.open.current = !1;
	};
	#handleDelayedOpen = () => {
		this.#timerFn.stop();
		let t = !this.provider.isOpenDelayed, n = this.delayDuration ?? 0;
		t || n === 0 ? (set(this.#wasOpenDelayed, !1), this.opts.open.current = !0) : this.#timerFn.start();
	};
	onTriggerEnter = (t) => {
		this.setActiveTrigger(t), this.#handleDelayedOpen();
	};
	onTriggerLeave = () => {
		this.disableHoverableContent ? this.handleClose() : this.#timerFn.stop();
	};
	ensureActiveTrigger = () => {
		if (this.registry.activeTriggerId !== null && this.registry.has(this.registry.activeTriggerId)) return;
		if (this.opts.triggerId.current !== null && this.registry.has(this.opts.triggerId.current)) {
			this.registry.setActiveTrigger(this.opts.triggerId.current);
			return;
		}
		let t = this.registry.getFirstTriggerId();
		this.registry.setActiveTrigger(t);
	};
	setActiveTrigger = (t) => {
		this.registry.setActiveTrigger(t);
	};
	registerTrigger = (t) => {
		this.registry.register(t), t.disabled && this.registry.activeTriggerId === t.id && this.opts.open.current && this.handleClose();
	};
	updateTrigger = (t) => {
		this.registry.update(t), t.disabled && this.registry.activeTriggerId === t.id && this.opts.open.current && this.handleClose();
	};
	unregisterTrigger = (t) => {
		let n = this.registry.activeTriggerId === t;
		this.registry.unregister(t), n && this.opts.open.current && this.handleClose();
	};
	isActiveTrigger = (t) => this.registry.activeTriggerId === t;
	get triggerNode() {
		return this.registry.activeTriggerNode;
	}
	get activePayload() {
		return this.registry.activePayload;
	}
	get activeTriggerId() {
		return this.registry.activeTriggerId;
	}
}, TooltipTriggerState = class t {
	static create(n) {
		return n.tether.current ? new t(n, null, n.tether.current.state) : new t(n, TooltipRootContext.get(), null);
	}
	opts;
	root;
	tether;
	attachment;
	#isPointerDown = simpleBox(!1);
	#hasPointerMoveOpened = /* @__PURE__ */ state(!1);
	domContext;
	#transitCheckTimeout = null;
	#mounted = !1;
	#lastRegisteredId = null;
	constructor(t, n, i) {
		this.opts = t, this.root = n, this.tether = i, this.domContext = new DOMContext(t.ref), this.attachment = attachRef(this.opts.ref, (t) => this.#register(t)), watch(() => this.opts.id.current, () => {
			this.#register(this.opts.ref.current);
		}), watch(() => this.opts.payload.current, () => {
			this.#register(this.opts.ref.current);
		}), watch(() => this.opts.disabled.current, () => {
			this.#register(this.opts.ref.current);
		}), onMountEffect(() => (this.#mounted = !0, this.#register(this.opts.ref.current), () => {
			let t = this.#getRoot(), n = this.#lastRegisteredId;
			n && (this.tether ? this.tether.registry.unregister(n) : t?.unregisterTrigger(n)), this.#lastRegisteredId = null, this.#mounted = !1;
		}));
	}
	#getRoot = () => this.tether?.root ?? this.root;
	#isDisabled = () => {
		let t = this.#getRoot();
		return this.opts.disabled.current || !!t?.disabled;
	};
	#register = (t) => {
		if (!this.#mounted) return;
		let n = this.opts.id.current, i = this.opts.payload.current, a = this.opts.disabled.current;
		if (this.#lastRegisteredId && this.#lastRegisteredId !== n) {
			let t = this.#getRoot();
			this.tether ? this.tether.registry.unregister(this.#lastRegisteredId) : t?.unregisterTrigger(this.#lastRegisteredId);
		}
		let o = {
			id: n,
			node: t,
			payload: i,
			disabled: a
		}, s = this.#getRoot();
		this.tether ? (this.tether.registry.has(n) ? this.tether.registry.update(o) : this.tether.registry.register(o), a && this.tether.registry.activeTriggerId === n && s?.opts.open.current && s.handleClose()) : s?.registry.has(n) ? s.updateTrigger(o) : s?.registerTrigger(o), this.#lastRegisteredId = n;
	};
	#clearTransitCheck = () => {
		this.#transitCheckTimeout !== null && (clearTimeout(this.#transitCheckTimeout), this.#transitCheckTimeout = null);
	};
	handlePointerUp = () => {
		this.#isPointerDown.current = !1;
	};
	#onpointerup = () => {
		this.#isDisabled() || (this.#isPointerDown.current = !1);
	};
	#onpointerdown = () => {
		this.#isDisabled() || (this.#isPointerDown.current = !0, this.domContext.getDocument().addEventListener("pointerup", () => {
			this.handlePointerUp();
		}, { once: !0 }));
	};
	#onpointerenter = (t) => {
		let n = this.#getRoot();
		if (n) {
			if (this.#isDisabled()) {
				n.opts.open.current && n.handleClose();
				return;
			}
			if (t.pointerType !== "touch") {
				if (n.provider.isPointerInTransit.current) {
					this.#clearTransitCheck(), this.#transitCheckTimeout = window.setTimeout(() => {
						n.provider.isPointerInTransit.current && (n.provider.isPointerInTransit.current = !1, n.onTriggerEnter(this.opts.id.current), set(this.#hasPointerMoveOpened, !0));
					}, 250);
					return;
				}
				n.onTriggerEnter(this.opts.id.current), set(this.#hasPointerMoveOpened, !0);
			}
		}
	};
	#onpointermove = (t) => {
		let n = this.#getRoot();
		if (n) {
			if (this.#isDisabled()) {
				n.opts.open.current && n.handleClose();
				return;
			}
			t.pointerType !== "touch" && (get$2(this.#hasPointerMoveOpened) || (this.#clearTransitCheck(), n.provider.isPointerInTransit.current = !1, n.onTriggerEnter(this.opts.id.current), set(this.#hasPointerMoveOpened, !0)));
		}
	};
	#onpointerleave = (t) => {
		let n = this.#getRoot();
		if (!n || this.#isDisabled()) return;
		if (this.#clearTransitCheck(), !n.isActiveTrigger(this.opts.id.current)) {
			set(this.#hasPointerMoveOpened, !1);
			return;
		}
		let i = t.relatedTarget;
		if (isElement(i)) for (let t of n.registry.triggers.values()) {
			if (t.node !== i) continue;
			if (n.provider.opts.skipDelayDuration.current > 0) {
				set(this.#hasPointerMoveOpened, !1);
				return;
			}
			n.handleClose(), set(this.#hasPointerMoveOpened, !1);
			return;
		}
		n.onTriggerLeave(), set(this.#hasPointerMoveOpened, !1);
	};
	#onfocus = (t) => {
		let n = this.#getRoot();
		if (n && !this.#isPointerDown.current) {
			if (this.#isDisabled()) {
				n.opts.open.current && n.handleClose();
				return;
			}
			n.ignoreNonKeyboardFocus && !isFocusVisible(t.currentTarget) || (n.setActiveTrigger(this.opts.id.current), n.handleOpen());
		}
	};
	#onblur = () => {
		let t = this.#getRoot();
		!t || this.#isDisabled() || t.handleClose();
	};
	#onclick = () => {
		let t = this.#getRoot();
		!t || t.disableCloseOnTriggerClick || this.#isDisabled() || t.handleClose();
	};
	#props = /* @__PURE__ */ user_derived(() => {
		let t = this.#getRoot(), n = !!(t?.opts.open.current && t.isActiveTrigger(this.opts.id.current)), i = this.#isDisabled();
		return {
			id: this.opts.id.current,
			"aria-describedby": n ? t?.contentNode?.id : void 0,
			"data-state": n ? t?.stateAttr : "closed",
			"data-disabled": boolToEmptyStrOrUndef(i),
			"data-delay-duration": `${t?.delayDuration ?? 0}`,
			[tooltipAttrs.trigger]: "",
			tabindex: i ? void 0 : this.opts.tabindex.current,
			disabled: this.opts.disabled.current,
			onpointerup: this.#onpointerup,
			onpointerdown: this.#onpointerdown,
			onpointerenter: this.#onpointerenter,
			onpointermove: this.#onpointermove,
			onpointerleave: this.#onpointerleave,
			onfocus: this.#onfocus,
			onblur: this.#onblur,
			onclick: this.#onclick,
			...this.attachment
		};
	});
	get props() {
		return get$2(this.#props);
	}
	set props(t) {
		set(this.#props, t);
	}
}, TooltipContentState = class t {
	static create(n) {
		return new t(n, TooltipRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(t, n) {
		this.opts = t, this.root = n, this.attachment = attachRef(this.opts.ref, (t) => this.root.contentNode = t), new SafePolygon({
			triggerNode: () => this.root.triggerNode,
			contentNode: () => this.root.contentNode,
			enabled: () => this.root.opts.open.current && !this.root.disableHoverableContent,
			transitIntentTimeout: 180,
			ignoredTargets: () => {
				if (this.root.provider.opts.skipDelayDuration.current === 0) return [];
				let t = [], n = this.root.triggerNode;
				for (let i of this.root.registry.triggers.values()) i.node && i.node !== n && t.push(i.node);
				return t;
			},
			onPointerExit: () => {
				this.root.provider.isTooltipOpen(this.root) && this.root.handleClose();
			}
		});
	}
	onInteractOutside = (t) => {
		if (isElement(t.target) && this.root.triggerNode?.contains(t.target) && this.root.disableCloseOnTriggerClick) {
			t.preventDefault();
			return;
		}
		this.opts.onInteractOutside.current(t), !t.defaultPrevented && this.root.handleClose();
	};
	onEscapeKeydown = (t) => {
		this.opts.onEscapeKeydown.current?.(t), !t.defaultPrevented && this.root.handleClose();
	};
	onOpenAutoFocus = (t) => {
		t.preventDefault();
	};
	onCloseAutoFocus = (t) => {
		t.preventDefault();
	};
	get shouldRender() {
		return this.root.contentPresence.shouldRender;
	}
	#snippetProps = /* @__PURE__ */ user_derived(() => ({ open: this.root.opts.open.current }));
	get snippetProps() {
		return get$2(this.#snippetProps);
	}
	set snippetProps(t) {
		set(this.#snippetProps, t);
	}
	#props = /* @__PURE__ */ user_derived(() => ({
		id: this.opts.id.current,
		"data-state": this.root.stateAttr,
		"data-disabled": boolToEmptyStrOrUndef(this.root.disabled),
		...getDataTransitionAttrs(this.root.contentPresence.transitionStatus),
		style: { outline: "none" },
		[tooltipAttrs.content]: "",
		...this.attachment
	}));
	get props() {
		return get$2(this.#props);
	}
	set props(t) {
		set(this.#props, t);
	}
	popperProps = {
		onInteractOutside: this.onInteractOutside,
		onEscapeKeydown: this.onEscapeKeydown,
		onOpenAutoFocus: this.onOpenAutoFocus,
		onCloseAutoFocus: this.onCloseAutoFocus
	};
};
function Tooltip(t, n) {
	push(n, !0);
	let i = prop(n, "open", 15, !1), a = prop(n, "triggerId", 15, null), o = prop(n, "onOpenChange", 3, noop), s = prop(n, "onOpenChangeComplete", 3, noop), c = TooltipRootState.create({
		open: boxWith(() => i(), (t) => {
			i(t), o()(t);
		}),
		triggerId: boxWith(() => a(), (t) => {
			a(t);
		}),
		delayDuration: boxWith(() => n.delayDuration),
		disableCloseOnTriggerClick: boxWith(() => n.disableCloseOnTriggerClick),
		disableHoverableContent: boxWith(() => n.disableHoverableContent),
		ignoreNonKeyboardFocus: boxWith(() => n.ignoreNonKeyboardFocus),
		disabled: boxWith(() => n.disabled),
		onOpenChangeComplete: boxWith(() => s()),
		tether: boxWith(() => n.tether)
	});
	Floating_layer(t, {
		tooltip: !0,
		children: (t, i) => {
			var a = comment(), o = first_child(a);
			snippet(o, () => n.children ?? noop$1, () => ({
				open: c.opts.open.current,
				triggerId: c.activeTriggerId,
				payload: c.activePayload
			})), append(t, a);
		},
		$$slots: { default: !0 }
	}), pop();
}
var root_4$11 = /* @__PURE__ */ from_html("<div><div><!></div></div>"), root_8$4 = /* @__PURE__ */ from_html("<div><div><!></div></div>");
function Tooltip_content(t, n) {
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
		"customAnchor",
		"collisionPadding",
		"onInteractOutside",
		"onEscapeKeydown",
		"forceMount",
		"style"
	]), y = TooltipContentState.create({
		id: boxWith(() => a()),
		ref: boxWith(() => o(), (t) => o(t)),
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
		strategy: n.strategy,
		customAnchor: n.customAnchor ?? y.root.triggerNode
	})), x = /* @__PURE__ */ user_derived(() => mergeProps(v, get$2(b), y.props));
	var S = comment(), C = first_child(S), T = (t) => {
		{
			let i = (t, i) => {
				let a = () => i?.().props, o = () => i?.().wrapperProps, s = /* @__PURE__ */ user_derived(() => mergeProps(o(), { style: { pointerEvents: y.root.disableHoverableContent ? "none" : void 0 } })), c = /* @__PURE__ */ user_derived(() => mergeProps(a(), { style: getFloatingContentCSSVars("tooltip") }, { style: n.style }));
				var l = comment(), u = first_child(l), d = (t) => {
					var i = comment(), a = first_child(i);
					{
						let t = /* @__PURE__ */ user_derived(() => ({
							props: get$2(c),
							wrapperProps: get$2(s),
							...y.snippetProps
						}));
						snippet(a, () => n.child, () => get$2(t));
					}
					append(t, i);
				}, f = (t) => {
					var i = root_4$11();
					attribute_effect(i, () => ({ ...get$2(s) }));
					var a = child(i);
					attribute_effect(a, () => ({ ...get$2(c) }));
					var o = child(a);
					snippet(o, () => n.children ?? noop$1), reset(a), reset(i), append(t, i);
				};
				if_block(u, (t) => {
					n.child ? t(d) : t(f, -1);
				}), append(t, l);
			}, o = /* @__PURE__ */ user_derived(() => y.root.disableHoverableContent ? "none" : "auto");
			Popper_layer_force_mount(t, spread_props(() => get$2(x), () => y.popperProps, {
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
				get shouldRender() {
					return y.shouldRender;
				},
				get contentPointerEvents() {
					return get$2(o);
				},
				popper: i,
				$$slots: { popper: !0 }
			}));
		}
	}, E = (t) => {
		{
			let i = (t, i) => {
				let a = () => i?.().props, o = () => i?.().wrapperProps, s = /* @__PURE__ */ user_derived(() => mergeProps(o(), { style: { pointerEvents: y.root.disableHoverableContent ? "none" : void 0 } })), c = /* @__PURE__ */ user_derived(() => mergeProps(a(), { style: getFloatingContentCSSVars("tooltip") }, { style: n.style }));
				var l = comment(), u = first_child(l), d = (t) => {
					var i = comment(), a = first_child(i);
					{
						let t = /* @__PURE__ */ user_derived(() => ({
							props: get$2(c),
							wrapperProps: get$2(s),
							...y.snippetProps
						}));
						snippet(a, () => n.child, () => get$2(t));
					}
					append(t, i);
				}, f = (t) => {
					var i = root_8$4();
					attribute_effect(i, () => ({ ...get$2(s) }));
					var a = child(i);
					attribute_effect(a, () => ({ ...get$2(c) }));
					var o = child(a);
					snippet(o, () => n.children ?? noop$1), reset(a), reset(i), append(t, i);
				};
				if_block(u, (t) => {
					n.child ? t(d) : t(f, -1);
				}), append(t, l);
			}, o = /* @__PURE__ */ user_derived(() => y.root.disableHoverableContent ? "none" : "auto");
			Popper_layer(t, spread_props(() => get$2(x), () => y.popperProps, {
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
				get shouldRender() {
					return y.shouldRender;
				},
				get contentPointerEvents() {
					return get$2(o);
				},
				popper: i,
				$$slots: { popper: !0 }
			}));
		}
	};
	if_block(C, (t) => {
		_() ? t(T) : _() || t(E, 1);
	}), append(t, S), pop();
}
var root_2$14 = /* @__PURE__ */ from_html("<button><!></button>");
function Tooltip_trigger(t, n) {
	let i = props_id();
	push(n, !0);
	let a = prop(n, "id", 19, () => createId(i)), o = prop(n, "disabled", 3, !1), s = prop(n, "type", 3, "button"), c = prop(n, "tabindex", 3, 0), l = prop(n, "ref", 15, null), u = /* @__PURE__ */ rest_props(n, [
		"$$slots",
		"$$events",
		"$$legacy",
		"children",
		"child",
		"id",
		"disabled",
		"payload",
		"tether",
		"type",
		"tabindex",
		"ref"
	]), d = TooltipTriggerState.create({
		id: boxWith(() => a()),
		disabled: boxWith(() => o() ?? !1),
		tabindex: boxWith(() => c() ?? 0),
		payload: boxWith(() => n.payload),
		tether: boxWith(() => n.tether),
		ref: boxWith(() => l(), (t) => l(t))
	}), f = /* @__PURE__ */ user_derived(() => mergeProps(u, d.props, { type: s() }));
	var p = comment(), m = first_child(p), h = (t) => {
		var i = comment(), a = first_child(i);
		snippet(a, () => n.child, () => ({ props: get$2(f) })), append(t, i);
	}, g = (t) => {
		var i = root_2$14();
		attribute_effect(i, () => ({ ...get$2(f) }));
		var a = child(i);
		snippet(a, () => n.children ?? noop$1), reset(i), append(t, i);
	};
	if_block(m, (t) => {
		n.child ? t(h) : t(g, -1);
	}), append(t, p), pop();
}
function Tooltip_provider(t, n) {
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
	snippet(d, () => n.children ?? noop$1), append(t, u), pop();
}
var root_2$13 = /* @__PURE__ */ from_html("<span> </span>"), root_1$18 = /* @__PURE__ */ from_html("<!> <!>", 1);
function IconBtn(t, n) {
	var i = comment(), a = first_child(i);
	{
		let t = /* @__PURE__ */ user_derived(() => [
			n.class || "is-link is-light mr-2",
			"button",
			n.disabled ? "disabled" : ""
		]);
		component(a, () => Button, (i, a) => {
			a(i, {
				get class() {
					return get$2(t);
				},
				get onclick() {
					return n.onclick;
				},
				get disabled() {
					return n.disabled;
				},
				children: (t, i) => {
					var a = root_1$18(), o = first_child(a);
					Icon(o, { get icon() {
						return n.icon;
					} });
					var s = sibling(o, 2), c = (t) => {
						var i = root_2$13(), a = child(i, !0);
						reset(i), template_effect(() => set_text(a, n.label)), append(t, i);
					};
					if_block(s, (t) => {
						n.label && t(c);
					}), append(t, a);
				},
				$$slots: { default: !0 }
			});
		});
	}
	append(t, i);
}
var NameProvider = class {
	#mapping;
	get mapping() {
		return get$2(this.#mapping);
	}
	set mapping(t) {
		set(this.#mapping, t);
	}
	#sources;
	get sources() {
		return get$2(this.#sources);
	}
	set sources(t) {
		set(this.#sources, t);
	}
	constructor(t, n) {
		this.#mapping = /* @__PURE__ */ state({}), this.#sources = /* @__PURE__ */ state({}), this.sources = t || {}, this.mapping = n || {};
	}
	resolveKey(t) {
		return this.mapping[t.src || t.id] || this.mapping[t.id] || t.src || t.id;
	}
	resolveField(t, n) {
		if (this.sources[t]?.[n]) return this.sources[t][n];
	}
	getImageTitle(t, n = !1) {
		let i = this.resolveKey(t), a = this.resolveField(i, "name") || i;
		return n && (a = a.split(".").slice(0, -1).join("."), a.length >= 16 && (a = a.slice(0, 5) + "..." + a.slice(-10))), a;
	}
	getImageDescription(t) {
		return t === void 0 ? "" : this.resolveField(this.resolveKey(t), "description") || t.document && this.resolveField(t.document.uid, "name") || "";
	}
	getImageMetadata(t) {
		if (t === void 0) return {};
		let n = {
			...t.metadata,
			...this.resolveField(this.resolveKey(t), "metadata")
		};
		return t.document && (n = {
			...n,
			...t.document.metadata,
			...this.resolveField(t.document.uid, "metadata") || {}
		}), n;
	}
	getImageLink(t) {
		if (t.link) return t.link;
		let n = this.resolveField(this.resolveKey(t), "url");
		if (n) return n;
		if (t.document?.name.startsWith("cudllibcamacuk")) return `${t.document.src.replace("/iiif/", "/view/")}/${t.metadata?.page}`;
	}
	fetchIIIFNames(t) {
		return new Promise(async (n, i) => {
			for (let n of t) {
				if (this.sources[n.uid]) continue;
				fetch(n.src).then((t) => t.json()).then((t) => {
					if (t.metadata === void 0) return n;
					let i = Object.fromEntries(t.metadata.map(({ label: t, value: n }) => [t.toLowerCase(), n]));
					i.title === void 0 && (i.title = n.name), i.classmark !== void 0 && (i.title = i.classmark + " " + i.title);
					let a = t.sequences && t.sequences[0]?.canvases, o = a && Object.fromEntries(a.map((t) => {
						let n = t.label || t.title || t.images && t.images[0].label || t["@id"] || t.id;
						return [t.images && t.images[0].resource && t.images[0].resource["@id"] || t["@id"] || t.id, n];
					})), s = {
						description: i.title,
						metadata: i,
						images: o
					}, c = Object.fromEntries(Object.entries(o).map(([t, n]) => [t, {
						name: n,
						metadata: i,
						source: s
					}]));
					this.sources = {
						...this.sources,
						...c
					}, this.sources[n.uid] = s;
				}), await new Promise((t) => setTimeout(t, 300));
			}
		});
	}
	fetchMetadataNames(t) {
		return fetch(t).then((t) => t.json()).then((t) => {
			let n = t.sources, i = t.mapping;
			this.sources = {
				...this.sources,
				...n
			}, this.mapping = {
				...this.mapping,
				...i
			};
		});
	}
	sortImages(t) {
		return t.sort((t, n) => {
			let i = this.getImageDescription(t), a = this.getImageDescription(n);
			return i === a ? this.getImageTitle(t).localeCompare(this.getImageTitle(n)) : (i || "").localeCompare(a || "");
		});
	}
}, no_name_provider = {
	sortImages: (t) => t,
	getImageTitle: (t) => t.name || t.id,
	getImageDescription: (t) => t?.document?.name || t?.document?.uid || "",
	getImageMetadata: (t) => ({}),
	getImageLink: (t) => void 0,
	fetchIIIFNames: async (t) => {},
	fetchMetadataNames: async (t) => {}
};
function getNameProvider() {
	return getContext("name_provider") || no_name_provider;
}
function setNameProvider(t) {
	setContext("name_provider", t);
}
function eraseImagesMetadata(t) {
	return t.map((t) => {
		let { tsf_url: n,...i } = t;
		return {
			...i,
			distance: t.num + 10
		};
	});
}
var ClusterEditorState = class {
	#editing;
	get editing() {
		return get$2(this.#editing);
	}
	set editing(t) {
		set(this.#editing, t, !0);
	}
	#editingCluster;
	get editingCluster() {
		return get$2(this.#editingCluster);
	}
	set editingCluster(t) {
		set(this.#editingCluster, t, !0);
	}
	#askingCluster;
	get askingCluster() {
		return get$2(this.#askingCluster);
	}
	set askingCluster(t) {
		set(this.#askingCluster, t, !0);
	}
	#image_selection;
	get image_selection() {
		return get$2(this.#image_selection);
	}
	set image_selection(t) {
		set(this.#image_selection, t, !0);
	}
	#viewer_sort;
	get viewer_sort() {
		return get$2(this.#viewer_sort);
	}
	set viewer_sort(t) {
		set(this.#viewer_sort, t, !0);
	}
	#viewer_display;
	get viewer_display() {
		return get$2(this.#viewer_display);
	}
	set viewer_display(t) {
		set(this.#viewer_display, t, !0);
	}
	#content;
	get content() {
		return get$2(this.#content);
	}
	set content(t) {
		set(this.#content, t, !0);
	}
	constructor(t, n) {
		this.#editing = /* @__PURE__ */ state(!1), this.#editingCluster = /* @__PURE__ */ state(null), this.#askingCluster = /* @__PURE__ */ state(null), this.#image_selection = /* @__PURE__ */ state(proxy(new SvelteSet())), this.#viewer_sort = /* @__PURE__ */ state("id"), this.#viewer_display = /* @__PURE__ */ state("grid"), this.#content = /* @__PURE__ */ state(proxy({
			clusters: t.clusters,
			background_urls: t.background_urls
		})), this.name_provider = new NameProvider(), this.base_url = n || "";
	}
	select_images(t, n) {
		switch (t) {
			case "all":
				this.image_selection = new SvelteSet(this.content.clusters[this.editingCluster].images.map((t) => t.id));
				break;
			case "none":
				this.image_selection.clear();
				break;
			case "invert":
				this.image_selection = new SvelteSet(this.content.clusters[this.editingCluster].images.filter((t) => !this.image_selection.has(t.id)).map((t) => t.id));
				break;
			case "toggle":
				n && (this.image_selection.has(n.id) ? this.image_selection.delete(n.id) : this.image_selection.add(n.id));
				break;
		}
	}
	ask_cluster(t, n) {
		this.askingCluster = {
			exclude_cluster_id: n,
			for_action: t
		};
	}
	ask_cluster_choice(t) {
		switch (this.askingCluster?.for_action) {
			case "cluster_merge":
				this.merge_clusters(this.askingCluster.exclude_cluster_id, t);
				break;
			case "selection_move":
				this.move_images(this.askingCluster.exclude_cluster_id, t);
				break;
		}
		this.askingCluster = null;
	}
	merge_clusters(t, n) {
		let i = this.content.clusters[t], a = this.content.clusters[n], o = {
			...i,
			images: [...i.images, ...eraseImagesMetadata(a.images)]
		};
		delete this.content.clusters[n], this.content.clusters[t] = o, this.editingCluster = t;
	}
	move_images(t, n) {
		let i = this.content.clusters[t], a = eraseImagesMetadata(i.images.filter((t) => this.image_selection.has(t.id)));
		i.images = i.images.filter((t) => !this.image_selection.has(t.id));
		let o;
		if (n == -1) {
			let t = Math.max(...Object.keys(this.content.clusters).map(Number)) + 1;
			o = {
				id: t,
				name: "Cluster " + t,
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
function setEditorState(t) {
	setContext("editor_state", t);
}
var root_1$17 = /* @__PURE__ */ from_html("<span class=\"has-text-danger\"> </span>"), root$19 = /* @__PURE__ */ from_html("<div class=\"match-exporter\"><!> <!></div>");
function CSVExporter(t, n) {
	push(n, !0);
	let i = /* @__PURE__ */ state(!1), a = /* @__PURE__ */ state(null);
	function o(t) {
		return t ? t.toString().replace(/"/g, "\"\"") : "";
	}
	async function s() {
		let t = n.iterRows(), i = [];
		for await (let n of t) i.push(n.map((t) => `"${o(t)}"`).join(","));
		return i.join("\n");
	}
	let c = async () => {
		set(i, !0);
		try {
			let t = await s(), i = new Blob([t], { type: "text/csv" }), a = URL.createObjectURL(i), o = document.createElement("a");
			o.href = a, o.download = n.filename, o.click();
		} catch (t) {
			set(a, t.toString(), !0);
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
	var d = sibling(u, 2), f = (t) => {
		var n = root_1$17(), i = child(n, !0);
		reset(n), template_effect(() => set_text(i, get$2(a))), append(t, n);
	};
	if_block(d, (t) => {
		get$2(a) && t(f);
	}), reset(l), append(t, l), pop();
}
function ClusterCSVExporter(t, n) {
	push(n, !0);
	let i = getNameProvider();
	async function* a() {
		let t = /* @__PURE__ */ new Set();
		n.clusters.forEach((n) => {
			n.images.forEach((n) => {
				Object.keys(n.document?.metadata || {}).forEach((n) => t.add(n)), Object.keys(n.metadata || {}).forEach((n) => t.add(n));
			});
		}), yield [
			"Cluster",
			"Cluster Name",
			"Image",
			"Source",
			"Document",
			"Document URL",
			...Array.from(t).map((t) => (t.charAt(0).toUpperCase() + t.slice(1)).replace(/[^\w\s]/g, ""))
		];
		for (let a of n.clusters) for (let n of a.images) {
			let o = Array.from(t).map((t) => (n.metadata || n.document?.metadata || {})[t] || "");
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
	CSVExporter(t, {
		iterRows: a,
		filename: "cluster.csv"
	}), pop();
}
function ellipsis(t, n) {
	return n < 0 || t.length <= n ? t : n < 12 ? t.slice(0, n) + "..." : t.slice(0, Math.max(5, n - 12)) + "..." + t.slice(-Math.min(9, n - 5));
}
var root_2$12 = /* @__PURE__ */ from_html("<br/> <span> </span>", 1), root_1$16 = /* @__PURE__ */ from_html("<span class=\"tag is-light is-bold mb-3\"> </span> <!>", 1), root_4$10 = /* @__PURE__ */ from_html("<p><a target=\"_blank\">See in context</a></p>"), root_3$11 = /* @__PURE__ */ from_html("<p> </p> <!>", 1), root$18 = /* @__PURE__ */ from_html("<!> <!>", 1);
function ImageInfos(t, n) {
	push(n, !0);
	let i = prop(n, "isTitle", 3, !1), a = prop(n, "prefix", 3, ""), o = prop(n, "filenameDisplay", 3, !0), s = /* @__PURE__ */ user_derived(() => i() ? "h4" : "span"), c = getNameProvider(), l = /* @__PURE__ */ user_derived(() => c.getImageLink(n.image));
	var u = root$18(), d = first_child(u);
	element(d, () => get$2(s), !1, (t, s) => {
		attribute_effect(t, (t) => ({
			class: "title-identification",
			title: t,
			[CLASS]: { "mt-2": i() }
		}), [() => c.getImageTitle(n.image)]);
		var l = root_1$16(), u = first_child(l), d = child(u);
		reset(u);
		var f = sibling(u, 2), p = (t) => {
			var i = root_2$12(), a = sibling(first_child(i), 2), o = child(a, !0);
			reset(a), template_effect((t) => set_text(o, t), [() => ellipsis(c.getImageTitle(n.image), 32)]), append(t, i);
		};
		if_block(f, (t) => {
			o() && t(p);
		}), template_effect(() => set_text(d, `${(a() || "") ?? ""}
        Image #${n.image.num ?? ""}`)), append(s, l);
	});
	var f = sibling(d, 2), p = (t) => {
		var i = root_3$11(), a = first_child(i), o = child(a, !0);
		reset(a);
		var s = sibling(a, 2), u = (t) => {
			var n = root_4$10(), i = child(n);
			reset(n), template_effect(() => set_attribute(i, "href", get$2(l))), append(t, n);
		};
		if_block(s, (t) => {
			get$2(l) && t(u);
		}), template_effect((t) => set_text(o, t), [() => c.getImageDescription(n.image) || n.image.document?.name || n.image.subtitle || ""]), append(t, i);
	};
	if_block(f, (t) => {
		i() && t(p);
	}), append(t, u), pop();
}
function getMagnifyingContext() {
	return getContext("magnify");
}
function setMagnifyingContext(t) {
	setContext("magnify", t);
}
var root_5$7 = /* @__PURE__ */ from_html("<div class=\"magnifying-item\"><div class=\"display-image\"><img class=\"display-img\"/></div> <div class=\"magnifying-info\"><!></div></div>"), root_4$9 = /* @__PURE__ */ from_html("<div class=\"magnifying-content\"><!>  <div class=\"magnifying-item\"><div class=\"display-image\"><img/></div> <div class=\"magnifying-info\"><!> <p class=\"actions my-2\"><!> <!> <!></p></div></div></div>"), root_3$10 = /* @__PURE__ */ from_html("<div><!> <!> <!></div>");
function ImageMagnifier(t, n) {
	push(n, !0);
	let i = /* @__PURE__ */ user_derived(getMagnifyingContext), a = /* @__PURE__ */ user_derived(() => get$2(i).image), o = /* @__PURE__ */ user_derived(() => get$2(i).comparison), s = /* @__PURE__ */ user_derived(() => get$2(i).transpositions), c = /* @__PURE__ */ user_derived(() => get$2(s) || []);
	function l() {
		return get$2(a) !== void 0;
	}
	function u(t) {
		t || (get$2(i).image = void 0);
	}
	function d(t, n) {
		let i = get$2(c).find((t) => t && t.startsWith("rot")), a = get$2(c).includes("hflip"), o = i ? parseInt(i.slice(3)) : 0, s = o;
		n && o % 180 && (s += 180), s = (s + t + 360) % 360;
		let l = [];
		s && l.push(`rot${s}`), n !== a && l.push("hflip"), set(c, l);
	}
	var f = comment(), p = first_child(f), m = (t) => {
		var n = comment(), i = first_child(n), s = l, f = u;
		component(i, () => Dialog, (t, n) => {
			n(t, {
				get open() {
					return s();
				},
				set open(t) {
					f(t);
				},
				onOpenChange: u,
				children: (t, n) => {
					var i = comment(), s = first_child(i);
					component(s, () => Portal, (t, n) => {
						n(t, {
							children: (t, n) => {
								var i = root_3$10();
								let s;
								var f = child(i);
								component(f, () => Dialog_overlay, (t, n) => {
									n(t, { class: "modal-background" });
								});
								var p = sibling(f, 2);
								IconBtn(p, {
									icon: "mdi:close",
									class: "dialog-close",
									onclick: () => u(!1)
								});
								var m = sibling(p, 2);
								component(m, () => Dialog_content, (t, n) => {
									n(t, {
										class: "magnifier modal-content",
										children: (t, n) => {
											var i = root_4$9(), s = child(i), l = (t) => {
												var n = root_5$7(), i = child(n), a = child(i);
												reset(i);
												var s = sibling(i, 2), c = child(s);
												ImageInfos(c, {
													get image() {
														return get$2(o);
													},
													isTitle: !0,
													prefix: "Query"
												}), reset(s), reset(n), template_effect(() => {
													set_attribute(a, "src", get$2(o).url), set_attribute(a, "alt", get$2(o).id);
												}), delegated("click", n, (t) => t.stopPropagation()), append(t, n);
											};
											if_block(s, (t) => {
												get$2(o) && t(l);
											});
											var u = sibling(s, 2), f = child(u), p = child(f);
											reset(f);
											var m = sibling(f, 2), h = child(m);
											ImageInfos(h, {
												get image() {
													return get$2(a);
												},
												isTitle: !0
											});
											var g = sibling(h, 2), _ = child(g);
											IconBtn(_, {
												icon: "mdi:rotate-left",
												onclick: () => d(-90, !1)
											});
											var v = sibling(_, 2);
											IconBtn(v, {
												icon: "mdi:rotate-right",
												onclick: () => d(90, !1)
											});
											var y = sibling(v, 2);
											IconBtn(y, {
												icon: "mdi:flip-horizontal",
												onclick: () => d(0, !0)
											}), reset(g), reset(m), reset(u), reset(i), template_effect((t) => {
												set_attribute(p, "src", get$2(a).url), set_attribute(p, "alt", get$2(a).id), set_class(p, 1, t);
											}, [() => "display-img " + get$2(c).join(" ")]), delegated("click", u, (t) => t.stopPropagation()), append(t, i);
										},
										$$slots: { default: !0 }
									});
								}), reset(i), template_effect((t) => s = set_class(i, 1, "modal content", null, s, t), [() => ({ "is-active": l() })]), append(t, i);
							},
							$$slots: { default: !0 }
						});
					}), append(t, i);
				},
				$$slots: { default: !0 }
			});
		}), append(t, n);
	};
	if_block(p, (t) => {
		get$2(a) && t(m);
	}), append(t, f), pop();
}
delegate(["click"]);
var root_5$6 = /* @__PURE__ */ from_html("<a class=\"image-source\" target=\"_blank\" title=\"See in context\"><!></a>"), root_7$4 = /* @__PURE__ */ from_html("<a href=\"javascript:void(0)\" class=\"image-pin\" title=\"Pin as comparison\"><!></a>"), root_8$3 = /* @__PURE__ */ from_html("<a href=\"javascript:void(0)\" class=\"image-pin always-visible\" title=\"Pin as comparison\"><!></a>"), root_9 = /* @__PURE__ */ from_html("<a href=\"javascript:void(0)\" class=\"image-magnify\" title=\"Magnify\"><!></a>"), root_10$1 = /* @__PURE__ */ from_html("<a class=\"image-focus\" title=\"Show detail\"><!></a>"), root_4$8 = /* @__PURE__ */ from_html("<div class=\"display-tools\"><!> <!> <!> <!></div>"), root_11$1 = /* @__PURE__ */ from_html("<span class=\"similarity\"> </span>"), root_3$9 = /* @__PURE__ */ from_html("<div class=\"display-image\"><img/></div> <!> <!>", 1), root_12 = /* @__PURE__ */ from_html("<div class=\"display-image\"><img/></div> <!>", 1), root_2$11 = /* @__PURE__ */ from_html("<!> <!>", 1);
function ImageFileDisplay(t, n) {
	push(n, !0);
	let i = getMagnifyingContext(), a = /* @__PURE__ */ user_derived(() => i.comparison?.id === n.image.id);
	function o() {
		i.comparison = get$2(a) ? void 0 : n.image;
	}
	function s() {
		i.image = n.image, i.transpositions = n.transpositions, n.comparison && (i.comparison = n.comparison);
	}
	var c = comment(), l = first_child(c);
	component(l, () => Tooltip_provider, (t, c) => {
		c(t, {
			delayDuration: 0,
			children: (t, c) => {
				var l = comment(), u = first_child(l);
				component(u, () => Tooltip, (t, c) => {
					c(t, {
						children: (t, c) => {
							var l = root_2$11(), u = first_child(l);
							component(u, () => Tooltip_trigger, (t, c) => {
								c(t, {
									class: "not-button display-item",
									children: (t, c) => {
										var l = root_3$9(), u = first_child(l), d = child(u);
										reset(u);
										var f = sibling(u, 2), p = (t) => {
											var c = root_4$8(), l = child(c), u = (t) => {
												var i = root_5$6(), a = child(i);
												Icon(a, { icon: "mdi:book-open-blank-variant" }), reset(i), template_effect(() => set_attribute(i, "href", n.image.link)), append(t, i);
											};
											if_block(l, (t) => {
												n.image.link && t(u);
											});
											var d = sibling(l, 2), f = (t) => {
												var n = comment(), i = first_child(n), s = (t) => {
													var n = root_7$4(), i = child(n);
													Icon(i, {
														icon: "mdi:pin",
														onclick: o
													}), reset(n), append(t, n);
												}, c = (t) => {
													var n = root_8$3(), i = child(n);
													Icon(i, {
														icon: "mdi:pin-off",
														onclick: o
													}), reset(n), append(t, n);
												};
												if_block(i, (t) => {
													get$2(a) ? t(c, -1) : t(s);
												}), append(t, n);
											};
											if_block(d, (t) => {
												i && !n.disable_pin && t(f);
											});
											var p = sibling(d, 2), m = (t) => {
												var n = root_9(), i = child(n);
												Icon(i, { icon: "mdi:arrow-expand" }), reset(n), delegated("click", n, s), append(t, n);
											};
											if_block(p, (t) => {
												i && t(m);
											});
											var h = sibling(p, 2), g = (t) => {
												var i = root_10$1(), a = child(i);
												Icon(a, { icon: "mdi:image-search" }), reset(i), template_effect(() => set_attribute(i, "href", n.href)), append(t, i);
											};
											if_block(h, (t) => {
												n.href && t(g);
											}), reset(c), delegated("click", c, (t) => t.stopPropagation()), append(t, c);
										};
										if_block(f, (t) => {
											n.disable_all || t(p);
										});
										var m = sibling(f, 2), h = (t) => {
											var i = root_11$1(), a = child(i, !0);
											reset(i), template_effect(() => set_text(a, n.similarity)), append(t, i);
										};
										if_block(m, (t) => {
											n.similarity && t(h);
										}), template_effect((t) => {
											set_attribute(d, "src", n.image.url), set_attribute(d, "alt", n.image.id), set_class(d, 1, t);
										}, [() => "image display-img " + (n.transpositions || []).join(" ")]), delegated("click", d, function(...t) {
											(!n.disable_magnify && !n.disable_all ? s : void 0)?.apply(this, t);
										}), append(t, l);
									},
									$$slots: { default: !0 }
								});
							});
							var d = sibling(u, 2);
							component(d, () => Tooltip_content, (t, i) => {
								i(t, {
									class: "tooltip",
									children: (t, i) => {
										var a = root_12(), o = first_child(a), s = child(o);
										reset(o);
										var c = sibling(o, 2);
										ImageInfos(c, {
											get image() {
												return n.image;
											},
											isTitle: !0
										}), template_effect((t) => {
											set_attribute(s, "src", n.image.url), set_attribute(s, "alt", n.image.id), set_class(s, 1, t);
										}, [() => clsx$1(["display-img", ...n.transpositions || []])]), append(t, a);
									},
									$$slots: { default: !0 }
								});
							}), append(t, l);
						},
						$$slots: { default: !0 }
					});
				}), append(t, l);
			},
			$$slots: { default: !0 }
		});
	}), append(t, c), pop();
}
delegate(["click"]);
var root_2$10 = /* @__PURE__ */ from_html("<a href=\"javascript:void(0)\" class=\"cl-selecter\" aria-label=\"Select image\"></a>"), root_1$15 = /* @__PURE__ */ from_html("<div><!> <!></div>"), root_3$8 = /* @__PURE__ */ from_html("<p>∅</p>"), root_4$7 = /* @__PURE__ */ from_html("<a class=\"cl-more card cl-placeholder\" href=\"javascript:void(0)\"> </a>"), root$17 = /* @__PURE__ */ from_html("<div><!> <!></div>");
function ImageList(t, n) {
	push(n, !0);
	let i = prop(n, "selectable", 3, !1), a = prop(n, "expanded", 15, !1), o = getEditorState();
	function s(t) {
		o.select_images("toggle", t);
	}
	var c = root$17();
	let l;
	var u = child(c);
	each(u, 17, () => n.images.slice(0, n.limit), (t) => t.id, (t, a) => {
		var c = root_1$15();
		let l;
		var u = child(c);
		{
			let t = /* @__PURE__ */ user_derived(() => ({
				...get$2(a),
				id: get$2(a).num.toString(),
				url: (o.base_url || "") + (n.dti_transformed && get$2(a).tsf_url ? get$2(a).tsf_url : get$2(a).url)
			}));
			ImageFileDisplay(u, {
				get image() {
					return get$2(t);
				},
				get disable_magnify() {
					return i();
				},
				get disable_all() {
					return n.disable_all;
				}
			});
		}
		var d = sibling(u, 2), f = (t) => {
			var n = root_2$10();
			delegated("click", n, () => s(get$2(a))), append(t, n);
		};
		if_block(d, (t) => {
			i() && t(f);
		}), reset(c), template_effect((t) => l = set_class(c, 1, "cl-image card", null, l, t), [() => ({ "cl-selected": i() && o.image_selection.has(get$2(a).id) })]), append(t, c);
	}, (t) => {
		var n = root_3$8();
		append(t, n);
	});
	var d = sibling(u, 2), f = (t) => {
		var i = root_4$7(), o = child(i);
		reset(i), template_effect(() => set_text(o, `${a() ? "–" : "+"}${n.images.length - n.limit}`)), delegated("click", i, () => {
			a(!a()), a() && n.onexpand?.();
		}), append(t, i);
	};
	if_block(d, (t) => {
		i() && n.limit && n.images.length > n.limit && t(f);
	}), reset(c), template_effect(() => l = set_class(c, 1, "cl-images", null, l, { "cl-selectable": i() })), append(t, c), pop();
}
delegate(["click"]);
var root_1$14 = /* @__PURE__ */ from_html("<h3> </h3> <p><!></p>", 1), root_4$6 = /* @__PURE__ */ from_html("<form><input type=\"text\"/> <a href=\"javascript:void(0)\" class=\"btn\"><!></a></form>"), root_6$3 = /* @__PURE__ */ from_html("<a href=\"javascript:void(0)\" class=\"btn is-edit\" title=\"Rename\"><!></a>"), root_5$5 = /* @__PURE__ */ from_html("<span> </span> <!>", 1), root_8$2 = /* @__PURE__ */ from_html("<!> <!>", 1), root_7$3 = /* @__PURE__ */ from_html("<p><!></p>"), root_10 = /* @__PURE__ */ from_html("<p><!></p>"), root_3$7 = /* @__PURE__ */ from_html("<div class=\"cl-propinfo\"><div class=\"cl-cluster-title\"><!></div> <p> </p> <!></div>"), root_11 = /* @__PURE__ */ from_html("<div class=\"cl-protoinfo\"><p><!></p> <div class=\"cl-proto\"><img alt=\"cl-proto\" class=\"prototype\"/></div></div>"), root_14$1 = /* @__PURE__ */ from_html("<a class=\"cl-overlay cl-hoveroptions\" href=\"javascript:void(0)\"><!> <!></a>"), root$16 = /* @__PURE__ */ from_html("<div><div class=\"cl-anchor\"></div> <div class=\"cl-props\"><div class=\"cl-propcontent\"><!> <!></div> <!></div> <div class=\"cl-samples\"><!></div></div>");
function ClusterElement(t, n) {
	push(n, !0);
	let i = prop(n, "cluster", 7), a = prop(n, "expanded", 7, !1), o = prop(n, "editing", 15, !1), s = prop(n, "editable", 3, !1), c = prop(n, "dti_transformed", 15, !1), l = prop(n, "thumbnail", 3, !1), u = prop(n, "selected", 3, !1), d = /* @__PURE__ */ state(!1), f = /* @__PURE__ */ state(void 0), p = /* @__PURE__ */ state(void 0), m = getEditorState(), h = getNameProvider(), g = {
		grid: 8,
		rows: 18
	}, _ = /* @__PURE__ */ user_derived(() => g[m.viewer_display]), v = /* @__PURE__ */ state(proxy([]));
	function y(t) {
		t.preventDefault();
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
	bind_this(w, (t) => set(f, t), () => get$2(f));
	var T = sibling(w, 2), E = child(T), D = child(E), O = (t) => {
		var n = root_1$14(), a = first_child(n), o = child(a, !0);
		reset(a);
		var s = sibling(a, 2), c = child(s), l = (t) => {
			var n = text();
			template_effect(() => set_text(n, `Cluster #${i().id ?? ""}, ${i().images.length ?? ""} images`)), append(t, n);
		};
		if_block(c, (t) => {
			i().id >= 0 && t(l);
		}), reset(s), template_effect(() => set_text(o, i().name)), append(t, n);
	}, k = (t) => {
		var n = root_3$7(), a = child(n), c = child(a), l = (t) => {
			var n = root_4$6(), a = child(n);
			autofocus(a, !0), bind_this(a, (t) => set(p, t), () => get$2(p));
			var o = sibling(a, 2), s = child(o);
			Icon(s, { icon: "mdi:check-bold" }), reset(o), reset(n), template_effect(() => a.defaultValue = i().name), event("submit", n, y), delegated("click", o, y), append(t, n);
		}, u = (t) => {
			var n = root_5$5(), a = first_child(n), s = child(a, !0);
			reset(a);
			var c = sibling(a, 2), l = (t) => {
				var n = root_6$3(), i = child(n);
				Icon(i, { icon: "mdi:edit" }), reset(n), delegated("click", n, () => {
					set(d, !0);
				}), append(t, n);
			};
			if_block(c, (t) => {
				o() && t(l);
			}), template_effect(() => set_text(s, i().name)), append(t, n);
		};
		if_block(c, (t) => {
			get$2(d) && o() ? t(l) : t(u, -1);
		}), reset(a);
		var f = sibling(a, 2), m = child(f, !0);
		reset(f);
		var h = sibling(f, 2), g = (t) => {
			var n = root_7$3(), i = child(n), a = (t) => {
				var n = root_8$2(), i = first_child(n);
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
				}), append(t, n);
			}, s = (t) => {
				IconBtn(t, {
					icon: "mdi:edit",
					label: "Edit cluster",
					onclick: () => o(!0)
				});
			};
			if_block(i, (t) => {
				o() ? t(a) : t(s, -1);
			}), reset(n), append(t, n);
		}, _ = (t) => {
			var n = root_10(), a = child(n);
			{
				let t = /* @__PURE__ */ user_derived(() => [i()]);
				ClusterCSVExporter(a, { get clusters() {
					return get$2(t);
				} });
			}
			reset(n), append(t, n);
		};
		if_block(h, (t) => {
			s() ? t(g) : t(_, -1);
		}), reset(n), template_effect(() => set_text(m, i().id >= 0 && `Cluster #${i().id}, ${i().images.length} images`)), append(t, n);
	};
	if_block(D, (t) => {
		l() ? t(O) : t(k, -1);
	});
	var A = sibling(D, 2), j = (t) => {
		var n = root_11(), a = child(n), o = child(a), s = (t) => {
			IconBtn(t, {
				icon: "mdi:image",
				class: "is-outline",
				label: "Show images",
				onclick: () => {
					c(!1);
				}
			});
		}, l = (t) => {
			IconBtn(t, {
				icon: "mdi:panorama-variant",
				class: "is-outline",
				label: "Show protos",
				onclick: () => {
					c(!0);
				}
			});
		};
		if_block(o, (t) => {
			c() ? t(s) : t(l, -1);
		}), reset(a);
		var u = sibling(a, 2), d = child(u);
		reset(u), reset(n), template_effect(() => set_attribute(d, "src", (m.base_url || "") + i().proto_url)), append(t, n);
	};
	if_block(A, (t) => {
		!l() && i().proto_url && t(j);
	}), reset(E);
	var M = sibling(E, 2), N = (t) => {
		var n = root_14$1(), i = child(n);
		IconBtn(i, {
			icon: "mdi:edit",
			label: "Edit cluster"
		});
		var a = sibling(i, 2);
		IconBtn(a, {
			icon: "mdi:merge",
			label: "Merge with...",
			onclick: (t) => {
				t.stopPropagation(), b();
			}
		}), reset(n), delegated("click", n, () => o(!0)), append(t, n);
	};
	if_block(M, (t) => {
		s() && !o() && t(N);
	}), reset(T);
	var P = sibling(T, 2), F = child(P);
	{
		let t = /* @__PURE__ */ user_derived(() => a() && !o() ? void 0 : get$2(_));
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
				return get$2(t);
			},
			onexpand: () => x(),
			get disable_all() {
				return l();
			},
			get expanded() {
				return a();
			},
			set expanded(t) {
				a(t);
			}
		});
	}
	reset(P), reset(S), template_effect(() => C = set_class(S, 1, "cl-cluster box", null, C, {
		"cl-expanded": a() || o(),
		"cl-selected": u() || o()
	})), append(t, S), pop();
}
delegate(["click"]);
var root_7$2 = /* @__PURE__ */ from_html("<div class=\"cl-ask-cluster\"><a href=\"javascript:void(0)\"><!></a></div>"), root_3$6 = /* @__PURE__ */ from_html("<div class=\"modal-card-head\"><!> <!></div> <div class=\"modal-card-body\"><div class=\"cl-ask-cluster\"><!></div> <div class=\"cl-ask-select\"><div class=\"cl-ask-list\"></div></div></div> <div class=\"modal-card-foot cl-modale-actions\"><p><!> <!></p></div>", 1), root_2$9 = /* @__PURE__ */ from_html("<div><!> <!></div>");
function ClusterAskModale(t, n) {
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
			images: o.content.clusters[n.exclude_cluster_id]?.images.filter((t) => o.image_selection.has(t.id)) ?? []
		}
	}), l = /* @__PURE__ */ user_derived(() => get$2(c).action_icon), u = /* @__PURE__ */ user_derived(() => get$2(c).action_label), d = /* @__PURE__ */ user_derived(() => get$2(c).action_title), f = /* @__PURE__ */ user_derived(() => get$2(c).action_cluster), p = /* @__PURE__ */ user_derived(() => [...n.clusters.filter((t) => t.id != n.exclude_cluster_id), ...n.for_action == "selection_move" ? [{
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
	function g(t) {
		o.askingCluster = t ? o.askingCluster : null;
	}
	var _ = comment(), v = first_child(_), y = h, b = g;
	component(v, () => Dialog, (t, n) => {
		n(t, {
			get open() {
				return y();
			},
			set open(t) {
				b(t);
			},
			children: (t, n) => {
				var s = comment(), c = first_child(s);
				component(c, () => Portal, (t, n) => {
					n(t, {
						children: (t, n) => {
							var s = root_2$9();
							let c;
							var g = child(s);
							component(g, () => Dialog_overlay, (t, n) => {
								n(t, { class: "modal-background" });
							});
							var _ = sibling(g, 2);
							component(_, () => Dialog_content, (t, n) => {
								n(t, {
									class: "modal-card cl-ask-modal",
									children: (t, n) => {
										var s = root_3$6(), c = first_child(s), h = child(c);
										component(h, () => Dialog_title, (t, n) => {
											n(t, {
												class: "modal-card-title",
												children: (t, n) => {
													next();
													var i = text();
													template_effect(() => set_text(i, get$2(d))), append(t, i);
												},
												$$slots: { default: !0 }
											});
										});
										var g = sibling(h, 2);
										component(g, () => Dialog_close, (t, n) => {
											n(t, {
												class: "modal-card-close",
												children: (t, n) => {
													Icon(t, {
														icon: "mdi:close",
														onclick: () => set(a, !1)
													});
												},
												$$slots: { default: !0 }
											});
										}), reset(c);
										var _ = sibling(c, 2), v = child(_), y = child(v), b = (t) => {
											ClusterElement(t, {
												thumbnail: !0,
												get cluster() {
													return get$2(f);
												},
												selected: !0
											});
										};
										if_block(y, (t) => {
											get$2(f).id !== void 0 && t(b);
										}), reset(v);
										var x = sibling(v, 2), S = child(x);
										each(S, 21, () => get$2(p), (t) => t.id, (t, n, a, o) => {
											var s = root_7$2(), c = child(s), l = child(c);
											{
												let t = /* @__PURE__ */ user_derived(() => get$2(i)?.id == get$2(n).id);
												ClusterElement(l, {
													thumbnail: !0,
													get cluster() {
														return get$2(n);
													},
													get selected() {
														return get$2(t);
													}
												});
											}
											reset(c), reset(s), delegated("click", c, () => set(i, get$2(n), !0)), append(t, s);
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
											let t = /* @__PURE__ */ user_derived(() => get$2(i) === null);
											IconBtn(E, {
												onclick: m,
												get icon() {
													return get$2(l);
												},
												get label() {
													return get$2(u);
												},
												get disabled() {
													return get$2(t);
												}
											});
										}
										reset(w), reset(C), append(t, s);
									},
									$$slots: { default: !0 }
								});
							}), reset(s), template_effect((t) => c = set_class(s, 1, "modal", null, c, t), [() => ({ "is-active": h() })]), append(t, s);
						},
						$$slots: { default: !0 }
					});
				}), append(t, s);
			},
			$$slots: { default: !0 }
		});
	}), append(t, _), pop();
}
delegate(["click"]);
var root_4$5 = /* @__PURE__ */ from_html("<!> <!>", 1), root_5$4 = /* @__PURE__ */ from_html("<div class=\"toolbar-item toolbar-btn\"><label class=\"label\">Actions on selection:</label> <!></div>"), root_2$8 = /* @__PURE__ */ from_html("<div class=\"toolbar-item cl-select-tools\"><label class=\"label\"> </label> <div class=\"field\"><!></div></div> <!>", 1), root_1$13 = /* @__PURE__ */ from_html("<div class=\"toolbar-content cl-editor-tools\"><!> <div class=\"toolbar-item toolbar-btn\"><!></div> <div class=\"toolbar-item toolbar-btn\"><!></div></div>"), root$15 = /* @__PURE__ */ from_html("<div><div class=\"toolbar cl-editor-toolbar\"><div class=\"toolbar-content\"><h2> </h2> <div class=\"toolbar-item\"><label class=\"label\">Sort by:</label> <div class=\"field is-narrow\"><div class=\"select\"><select><option>Size</option><option>ID</option><option>Name</option></select></div></div></div> <div class=\"toolbar-item\"><label class=\"label\">Display:</label> <div class=\"field is-narrow\"><div class=\"select\"><select><option>Grid</option><option>Rows</option></select></div></div></div> <!></div></div> <div><!> <div class=\"cl-cluster box cl-filler\"></div> <div class=\"cl-cluster box cl-filler\"></div> <div class=\"cl-cluster box cl-filler\"></div> <div class=\"cl-cluster box cl-filler\"></div> <div class=\"cl-cluster box cl-filler\"></div></div> <!></div> <!>", 1);
function ClusterApp(t, n) {
	push(n, !0);
	let i = prop(n, "formfield", 7), a = proxy(new ClusterEditorState(n.clustering_data, n.base_url));
	setEditorState(a);
	let o = proxy({});
	getMagnifyingContext() || setMagnifyingContext(o);
	let s = /* @__PURE__ */ user_derived(() => ({
		size: (t, n) => n.images.length - t.images.length,
		id: (t, n) => t.id - n.id,
		name: (t, n) => t.name.localeCompare(n.name)
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
	var A = sibling(w, 2), j = (t) => {
		var n = root_1$13(), o = child(n), s = (t) => {
			var n = root_2$8(), i = first_child(n), o = child(i), s = child(o);
			reset(o);
			var c = sibling(o, 2), l = child(c), u = (t) => {
				IconBtn(t, {
					onclick: () => {
						a.select_images("all");
					},
					icon: "mdi:select-all",
					label: "All"
				});
			}, d = (t) => {
				var n = root_4$5(), i = first_child(n);
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
				}), append(t, n);
			};
			if_block(l, (t) => {
				a.image_selection.size == 0 ? t(u) : t(d, -1);
			}), reset(c), reset(i);
			var f = sibling(i, 2), p = (t) => {
				var n = root_5$4(), i = sibling(child(n), 2);
				IconBtn(i, {
					onclick: () => {
						a.ask_cluster("selection_move", a.editingCluster);
					},
					icon: "mdi:folder-move",
					label: "Move to cluster..."
				}), reset(n), append(t, n);
			};
			if_block(f, (t) => {
				a.image_selection.size > 0 && t(p);
			}), template_effect(() => set_text(s, `Selection (${a.image_selection.size ?? ""}):`)), append(t, n);
		};
		if_block(o, (t) => {
			a.editingCluster !== null && t(s);
		});
		var u = sibling(o, 2), d = child(u), f = (t) => {
			{
				let n = /* @__PURE__ */ user_derived(() => i() ? "Save" : "Apply");
				IconBtn(t, {
					onclick: l,
					icon: "mdi:content-save",
					class: "big is-link",
					get label() {
						return get$2(n);
					}
				});
			}
		}, p = (t) => {
			IconBtn(t, {
				onclick: () => {
					a.editing = !0;
				},
				class: "big is-link",
				icon: "mdi:edit",
				label: "Edit"
			});
		};
		if_block(d, (t) => {
			a.editing ? t(f) : t(p, -1);
		}), reset(u);
		var m = sibling(u, 2), h = child(m);
		ClusterCSVExporter(h, { get clusters() {
			return get$2(c);
		} }), reset(m), reset(n), append(t, n);
	};
	if_block(A, (t) => {
		n.editable && t(j);
	}), reset(m), reset(p);
	var M = sibling(p, 2), N = child(M);
	each(N, 17, () => get$2(c), (t) => t.id, (t, n) => {
		var i = () => a.editingCluster == get$2(n).id, o = (t) => a.editingCluster = t ? get$2(n).id : null;
		ClusterElement(t, {
			get editing() {
				return i();
			},
			set editing(t) {
				o(t);
			},
			get cluster() {
				return get$2(n);
			},
			get editable() {
				return a.editing;
			}
		});
	}), next(10), reset(M);
	var P = sibling(M, 2), F = (t) => {
		ClusterAskModale(t, spread_props(() => a.askingCluster, { get clusters() {
			return get$2(c);
		} }));
	};
	if_block(P, (t) => {
		a.askingCluster !== null && t(F);
	}), reset(d);
	var I = sibling(d, 2);
	ImageMagnifier(I, {}), template_effect(() => {
		f = set_class(d, 1, "", null, f, { "cl-editor": a.editing }), set_text(g, `Cluster ${a.editing ? "Editor" : "Viewer"}`), set_class(M, 1, "cl-cluster-list cl-display-" + a.viewer_display);
	}), bind_select_value(b, () => a.viewer_sort, (t) => a.viewer_sort = t), bind_select_value(D, () => a.viewer_display, (t) => a.viewer_display = t), append(t, u), pop();
}
function unserializeImageInfo(t) {
	return {
		...t,
		id: t.path,
		num: t.id,
		url: t.raw_url
	};
}
function unserializeClusterFile(t) {
	return {
		clusters: Object.fromEntries(Object.entries(t.clusters).map(([t, n]) => [parseInt(t), {
			...n,
			images: n.images.map(unserializeImageInfo)
		}])),
		background_urls: t.background_urls
	};
}
var root_6$2 = /* @__PURE__ */ from_html("<div><span class=\"label\"> </span> <progress class=\"progress is-link bar\"></progress></div>"), root_5$3 = /* @__PURE__ */ from_html("<div class=\"tck-bar-list\"></div>"), root_4$4 = /* @__PURE__ */ from_html("<span> </span> <!> <pre> </pre>", 1), root$14 = /* @__PURE__ */ from_html("<div class=\"tck-progress\"><!></div>");
function ProgressTracker(t, n) {
	push(n, !0);
	let i = /* @__PURE__ */ state(null), a = /* @__PURE__ */ user_derived(() => get$2(i)?.log?.errors?.join("\n")), o;
	function s() {
		fetch(n.tracking_url).then((t) => t.json()).then((t) => {
			set(i, t, !0), get$2(i).is_finished ? window.location.reload() : o = setTimeout(s, 1e3);
		}).catch((t) => {
			t = t.toString(), o = setTimeout(s, 1e3);
		});
	}
	user_effect(() => (s(), () => clearTimeout(o)));
	var c = root$14(), l = child(c), u = (t) => {
		var n = text();
		template_effect(() => set_text(n, get$2(a))), append(t, n);
	}, d = (t) => {
		var n = text("Done!");
		append(t, n);
	}, f = (t) => {
		var n = text("Loading...");
		append(t, n);
	}, p = (t) => {
		var n = root_4$4(), a = first_child(n), o = child(a, !0);
		reset(a);
		var s = sibling(a, 2), c = (t) => {
			var n = root_5$3();
			each(n, 21, () => get$2(i).log.progress, index$1, (t, n) => {
				var i = root_6$2(), a = child(i), o = child(a);
				reset(a);
				var s = sibling(a, 2);
				reset(i), template_effect(() => {
					set_text(o, `${get$2(n).context ?? ""} ${get$2(n).current ?? ""}/${get$2(n).total ?? ""}`), set_value(s, get$2(n).current), set_attribute(s, "max", get$2(n).total);
				}), append(t, i);
			}), reset(n), append(t, n);
		};
		if_block(s, (t) => {
			get$2(i).log?.progress && t(c);
		});
		var l = sibling(s, 2), u = child(l, !0);
		reset(l), template_effect((t) => {
			set_class(a, 1, `mb-3 tag status status-${get$2(i).status ?? ""}`), set_text(o, get$2(i).status), set_text(u, t);
		}, [() => get$2(i).status == "PENDING" ? "Waiting for worker..." : get$2(i).log?.infos?.join("\n")]), append(t, n);
	};
	if_block(l, (t) => {
		get$2(a) ? t(u) : get$2(i)?.is_finished ? t(d, 1) : get$2(i) === null ? t(f, 2) : t(p, -1);
	}), reset(c), append(t, c), pop();
}
function unserializeSimilarityIndex(t) {
	let n = Object.fromEntries(Object.entries(t.sources).map(([t, n]) => [t, {
		name: n.metadata?.name || n.uid,
		...n
	}])), i = t.images.map((t, i) => ({
		id: t.id,
		num: i,
		src: t.src,
		url: t.url,
		document: n[t.doc_uid],
		metadata: t.metadata || {}
	}));
	return {
		sources: Object.values(n),
		images: i,
		transpositions: t.transpositions || ["none"]
	};
}
function unserializeSimilarityMatrix(t, n) {
	let i = unserializeSimilarityIndex(n), a = i.images.map(() => []);
	return t.forEach(([t, n, i]) => {
		a[n].push({
			similarity: i,
			best_source_flip: 0,
			best_query_flip: 0,
			query_index: n,
			source_index: t
		}), a[t].push({
			similarity: i,
			best_source_flip: 0,
			best_query_flip: 0,
			query_index: t,
			source_index: n
		});
	}), {
		matches: unserializeImageMatches(a, i, i),
		index: i
	};
}
function unserializeImageMatches(t, n, i) {
	let a = [];
	for (let o = 0; o < t.length; o++) {
		let s = i.images[o], c = t[o].map((t) => ({
			image: n.images[t.source_index],
			similarity: t.similarity,
			q_transposition: i.transpositions[t.best_query_flip],
			m_transposition: n.transpositions[t.best_source_flip]
		})).sort((t, n) => n.similarity - t.similarity), l = {}, u = [];
		c.forEach((t) => {
			if (!l[t.image.document.uid]) {
				let n = [];
				l[t.image.document.uid] = n, u.push(n);
			}
			l[t.image.document.uid].push(t);
		}), a.push({
			query: s,
			matches: c,
			matches_by_document: u
		});
	}
	return a.sort((t, n) => n.matches[0].similarity - t.matches[0].similarity);
}
function unserializeSearchResults(t, n) {
	console.log(n, t);
	let i = unserializeSimilarityIndex(t), a = unserializeSimilarityIndex(n.query), o = a.images.map(() => []);
	n.pairs.forEach(([t, n, i]) => {
		o[n].push({
			similarity: i,
			best_source_flip: 0,
			best_query_flip: 0,
			query_index: n,
			source_index: t
		});
	});
	let s = unserializeImageMatches(o, i, a);
	return {
		source_index: i,
		query_index: a,
		matches: s
	};
}
async function connectedComponents(t, n, i) {
	let a = /* @__PURE__ */ new Map();
	for (let i of t.edges) {
		if (i.weight < n) continue;
		let t = a.get(i.source) || a.get(i.target) || { id: i.source };
		for (; t?.merged;) t = t.merged;
		let o = a.get(i.target);
		for (; o?.merged;) o = o.merged;
		o && t !== o && (o.merged = t), a.set(i.source, t), a.set(i.target, t);
	}
	let o = /* @__PURE__ */ new Map(), s = [];
	for (let t = 0; t < i; t++) {
		let n = a.get(t);
		for (; n?.merged;) n = n.merged;
		if (!n) {
			s.push(t);
			continue;
		}
		o.has(n.id) || o.set(n.id, {
			id: o.size,
			members: []
		}), o.get(n.id).members.push(t);
	}
	return s.length > 0 && o.set(-1, {
		id: -1,
		members: s
	}), Array.from(o.values());
}
function graphFromSimilarityMatches(t, n) {
	let i = [], a = /* @__PURE__ */ new Map();
	for (let [n, i] of t.images.entries()) a.set(i.id, n);
	for (let t of n) {
		let n = a.get(t.query.id);
		for (let o of t.matches) {
			let t = a.get(o.image.id);
			i.push({
				source: n,
				target: t,
				weight: o.similarity
			});
		}
	}
	return { edges: i };
}
function convertToClusteringFile(t, n, i) {
	let a = /* @__PURE__ */ new Map();
	for (let t of i) a.set(t.id, t);
	let o = /* @__PURE__ */ new Map();
	for (let [n, i] of a) {
		let s = i.members.map((n) => {
			let i = t.images[n];
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
		background_urls: t.sources.map((t) => t.src)
	};
}
var root_1$12 = /* @__PURE__ */ from_html("<div class=\"cl-image card\"><!></div>"), root_2$7 = /* @__PURE__ */ from_html("<p>∅</p>"), root$13 = /* @__PURE__ */ from_html("<div class=\"cl-cluster box\"><div class=\"cl-anchor\"></div> <div class=\"cl-props\"><div class=\"cl-propcontent\"><div class=\"cl-propinfo\"><p class=\"cl-cluster-title\"><span> </span></p></div></div></div> <div class=\"cl-samples\"><div class=\"cl-images cl-limitheight\"></div></div></div>");
function ClusterPreviewBlock(t, n) {
	push(n, !0);
	var i = root$13(), a = sibling(child(i), 2), o = child(a), s = child(o), c = child(s), l = child(c), u = child(l);
	reset(l), reset(c), reset(s), reset(o), reset(a);
	var d = sibling(a, 2), f = child(d);
	each(f, 20, () => n.cluster.members, (t) => t, (t, i) => {
		var a = root_1$12(), o = child(a);
		ImageFileDisplay(o, { get image() {
			return n.index.images[i];
		} }), reset(a), append(t, a);
	}, (t) => {
		var n = root_2$7();
		append(t, n);
	}), reset(f), reset(d), reset(i), template_effect(() => set_text(u, `${n.cluster.id >= 0 ? `Cluster ${n.cluster.id}` : "Unclustered"} (${n.cluster.members.length ?? ""})`)), append(t, i), pop();
}
var root_3$5 = /* @__PURE__ */ from_html("<div class=\"toolbar-item\"><label class=\"label is-expanded\" for=\"clustering-threshold\">Clustering threshold:</label> <div class=\"field\"><div class=\"control\"><input type=\"range\"/></div> <div class=\"control\"><input type=\"number\" class=\"input\" id=\"clustering-threshold\"/></div></div></div>"), root_1$11 = /* @__PURE__ */ from_html("<div class=\"toolbar\"><div class=\"toolbar-content\"><!> <!> <div class=\"toolbar-item toolbar-btn\"><!></div></div></div>"), root_8$1 = /* @__PURE__ */ from_html("<p>Clustering in progress...</p>"), root_7$1 = /* @__PURE__ */ from_html("<!> <div class=\"cl-cluster-list cl-display-grid\"><!> <div class=\"cl-cluster box cl-filler\"></div> <div class=\"cl-cluster box cl-filler\"></div> <div class=\"cl-cluster box cl-filler\"></div> <div class=\"cl-cluster box cl-filler\"></div> <div class=\"cl-cluster box cl-filler\"></div></div>", 1), root$12 = /* @__PURE__ */ from_html("<!> <div><!></div> <div class=\"mt-4\"></div>", 1);
function ClusteringTool(t, n) {
	push(n, !0);
	let i = /* @__PURE__ */ state(!1), a = /* @__PURE__ */ user_derived(() => Math.min(...n.matches.map((t) => Math.min(...t.matches.map((t) => t.similarity))))), o = /* @__PURE__ */ user_derived(() => Math.max(...n.matches.map((t) => Math.max(...t.matches.map((t) => t.similarity))))), s = /* @__PURE__ */ state(get$2(a) + .8 * (get$2(o) - get$2(a))), c = graphFromSimilarityMatches(n.index, n.matches), l = /* @__PURE__ */ state(proxy([])), u = /* @__PURE__ */ state(null);
	user_effect(() => {
		get$2(s), untrack(() => {
			get$2(u) && clearTimeout(get$2(u)), set(u, setTimeout(() => {
				connectedComponents(c, get$2(s), n.index.images.length).then((t) => {
					set(l, t, !0), set(u, null);
				});
			}, 300), !0);
		});
	});
	var d = root$12(), f = first_child(d), p = (t) => {
		var c = root_1$11(), l = child(c), u = child(l), d = (t) => {
			var i = comment(), a = first_child(i);
			snippet(a, () => n.extra_toolbar_items), append(t, i);
		};
		if_block(u, (t) => {
			n.extra_toolbar_items && t(d);
		});
		var f = sibling(u, 2), p = (t) => {
			var n = root_3$5(), i = sibling(child(n), 2), c = child(i), l = child(c);
			remove_input_defaults(l), set_attribute(l, "step", .001), reset(c);
			var u = sibling(c, 2), d = child(u);
			remove_input_defaults(d), reset(u), reset(i), reset(n), template_effect(() => {
				set_attribute(l, "min", get$2(a)), set_attribute(l, "max", get$2(o));
			}), bind_value(l, () => get$2(s), (t) => set(s, t)), bind_value(d, () => get$2(s), (t) => set(s, t)), append(t, n);
		};
		if_block(f, (t) => {
			get$2(i) || t(p);
		});
		var m = sibling(f, 2), h = child(m), g = (t) => {
			IconBtn(t, {
				icon: "mdi:autorenew",
				onclick: () => set(i, !1),
				label: "Redo automatic clustering"
			});
		}, _ = (t) => {
			IconBtn(t, {
				class: "is-link",
				icon: "mdi:check-bold",
				onclick: () => set(i, !0),
				label: "Apply clustering"
			});
		};
		if_block(h, (t) => {
			get$2(i) ? t(g) : t(_, -1);
		}), reset(m), reset(l), reset(c), append(t, c);
	};
	if_block(f, (t) => {
		n.visible && t(p);
	});
	var m = sibling(f, 2);
	let h;
	var g = child(m), _ = (t) => {
		{
			let i = /* @__PURE__ */ user_derived(() => convertToClusteringFile(n.index, n.matches, get$2(l)));
			ClusterApp(t, {
				get clustering_data() {
					return get$2(i);
				},
				editable: !0
			});
		}
	}, v = (t) => {
		var i = root_7$1(), a = first_child(i), o = (t) => {
			var n = root_8$1();
			append(t, n);
		};
		if_block(a, (t) => {
			get$2(u) && t(o);
		});
		var s = sibling(a, 2), c = child(s);
		each(c, 17, () => get$2(l), (t) => t.id, (t, i) => {
			ClusterPreviewBlock(t, {
				get cluster() {
					return get$2(i);
				},
				get index() {
					return n.index;
				}
			});
		}), next(10), reset(s), append(t, i);
	};
	if_block(g, (t) => {
		get$2(i) ? t(_) : t(v, -1);
	}), reset(m), next(2), template_effect(() => h = set_class(m, 1, "cluster-viewer", null, h, {
		"viewer-table": !get$2(i),
		hidden: !n.visible
	})), append(t, d), pop();
}
var root_5$2 = /* @__PURE__ */ from_html("<div>...</div>"), root_3$4 = /* @__PURE__ */ from_html("<!> <!>", 1), root_1$10 = /* @__PURE__ */ from_html("<!> <!> <!>", 1);
function Pagination_1(t, n) {
	push(n, !0);
	let i = prop(n, "page", 15);
	var a = comment(), o = first_child(a);
	{
		let t = (t, n) => {
			let i = () => n?.().pages;
			var a = root_1$10(), o = first_child(a);
			component(o, () => Pagination_prev_button, (t, n) => {
				n(t, {
					class: "pagination-ctrl button",
					children: (t, n) => {
						Icon(t, { icon: "mdi:chevron-left" });
					},
					$$slots: { default: !0 }
				});
			});
			var s = sibling(o, 2);
			each(s, 17, i, (t) => t.key, (t, n, i, a) => {
				var o = root_3$4(), s = first_child(o), c = (t) => {
					var i = comment(), a = first_child(i);
					component(a, () => Pagination_page, (t, i) => {
						i(t, {
							get page() {
								return get$2(n);
							},
							class: "pagination-ctrl button"
						});
					}), append(t, i);
				};
				if_block(s, (t) => {
					get$2(n).type === "page" && t(c);
				});
				var l = sibling(s, 2), u = (t) => {
					var n = root_5$2();
					append(t, n);
				};
				if_block(l, (t) => {
					get$2(n).type === "ellipsis" && t(u);
				}), append(t, o);
			});
			var c = sibling(s, 2);
			component(c, () => Pagination_next_button, (t, n) => {
				n(t, {
					class: "pagination-ctrl button",
					children: (t, n) => {
						Icon(t, { icon: "mdi:chevron-right" });
					},
					$$slots: { default: !0 }
				});
			}), append(t, a);
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
				set page(t) {
					i(t);
				},
				children: t,
				$$slots: { default: !0 }
			});
		});
	}
	append(t, a), pop();
}
function MatchCSVExporter(t, n) {
	push(n, !0);
	let i = getNameProvider();
	async function* a() {
		let t = /* @__PURE__ */ new Set(), a = n.matches.matches.filter((t) => !n.threshold || t.similarity >= n.threshold);
		a.unshift({
			image: n.matches.query,
			similarity: 1,
			q_transposition: "none",
			m_transposition: "none"
		});
		let o = a.map((t) => i.getImageMetadata(t.image));
		o.forEach((n) => {
			Object.keys(n).forEach((n) => t.add(n));
		}), yield [
			"Image",
			"Source",
			"Similarity",
			"Document",
			"Document URL",
			...Array.from(t).map((t) => (t.charAt(0).toUpperCase() + t.slice(1)).replace(/[^\w\s]/g, " "))
		];
		for (let n of o.keys()) {
			let s = a[n], c = Array.from(t).map((t) => o[n][t] || "");
			yield [
				i.getImageTitle(s.image),
				s.image.src || s.image.id,
				s.similarity,
				i.getImageDescription(s.image),
				s.image.document?.src || "",
				...c
			];
		}
	}
	CSVExporter(t, {
		iterRows: a,
		filename: "similarity-matches.csv"
	}), pop();
}
var root_2$6 = /* @__PURE__ */ from_html("<!> ", 1), root_1$9 = /* @__PURE__ */ from_html("<div class=\"match-group\"><div><p><!></p> <div class=\"columns is-multiline match-items\"></div> <!></div></div>");
function MatchGroup(t, n) {
	push(n, !0);
	let i = /* @__PURE__ */ state(!1);
	var a = comment(), o = first_child(a), s = (t) => {
		var a = root_1$9(), o = child(a), s = child(o), c = child(s), l = (t) => {
			var i = root_2$6(), a = first_child(i);
			Icon(a, { icon: "mdi:folder" });
			var o = sibling(a);
			template_effect(() => set_text(o, ` ${(n.matches[0].image.document?.name || n.matches[0].image.document?.uid) ?? ""}`)), append(t, i);
		}, u = (t) => {
			ImageInfos(t, { get image() {
				return n.matches[0].image;
			} });
		};
		if_block(c, (t) => {
			n.grouped ? t(l) : t(u, -1);
		}), reset(s);
		var d = sibling(s, 2);
		each(d, 23, () => n.matches, (t) => t.image.id, (t, a, o) => {
			var s = comment(), c = first_child(s), l = (t) => {
				{
					let i = /* @__PURE__ */ user_derived(() => matchesHRef(get$2(a).image));
					ImageFileDisplay(t, spread_props({
						get comparison() {
							return n.wref;
						},
						get href() {
							return get$2(i);
						}
					}, () => get$2(a), { disable_pin: !0 }));
				}
			};
			if_block(c, (t) => {
				(get$2(i) || get$2(o) == 0) && (!n.threshold || get$2(a).similarity >= n.threshold) && t(l);
			}), append(t, s);
		}), reset(d);
		var f = sibling(d, 2), p = (t) => {
			{
				let a = /* @__PURE__ */ user_derived(() => get$2(i) ? "mdi:close" : "mdi:animation-plus"), o = /* @__PURE__ */ user_derived(() => get$2(i) ? "Collapse" : `+${n.matches.length - 1}`);
				IconBtn(t, {
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
		if_block(f, (t) => {
			n.matches.length > 1 && t(p);
		}), reset(o), reset(a), template_effect(() => set_class(o, 1, clsx$1(get$2(i) ? "match-expanded" : "match-excerpt"))), append(t, a);
	};
	if_block(o, (t) => {
		(!n.threshold || n.matches[0].similarity >= n.threshold) && t(s);
	}), append(t, a), pop();
}
var root_1$8 = /* @__PURE__ */ from_html("<p><a href=\"javascript:void(0)\"> </a></p>"), root$11 = /* @__PURE__ */ from_html("<div><div class=\"column match-query\"><!> <div class=\"columns is-multiline match-items is-centered\"><!></div> <!> <!></div> <div class=\"column columns match-results\"></div></div>");
function MatchRow(t, n) {
	push(n, !0);
	let i = /* @__PURE__ */ user_derived(() => n.group_by_source ? n.matches.matches_by_document : n.matches.matches.map((t) => [t])), a = /* @__PURE__ */ state(!1), o = /* @__PURE__ */ state(null);
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
	var m = sibling(f, 2), h = (t) => {
		var n = root_1$8(), i = child(n), o = child(i, !0);
		reset(i), reset(n), template_effect(() => set_text(o, get$2(a) ? "Show only 5 best" : "Show all results")), delegated("click", i, () => set(a, !get$2(a))), append(t, n);
	};
	if_block(m, (t) => {
		get$2(i).length > 5 && t(h);
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
	each(_, 21, () => get$2(i).slice(0, get$2(a) ? get$2(i).length : 5), index$1, (t, i) => {
		MatchGroup(t, {
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
	}), reset(_), reset(c), bind_this(c, (t) => set(o, t), () => get$2(o)), template_effect(() => l = set_class(c, 1, "match-row columns", null, l, { highlit: n.highlit })), append(t, c), pop();
}
delegate(["click"]);
function matchesHRef(t) {
	return `#match-${t.id}`;
}
var root_3$3 = /* @__PURE__ */ from_html("<option> </option>"), root_2$5 = /* @__PURE__ */ from_html("<div class=\"toolbar-item\"><label class=\"checkbox is-normal\"><input type=\"checkbox\" class=\"checkbox mr-2\" name=\"group-by-source\" id=\"group-by-source\"/> Group by source document</label></div> <div class=\"toolbar-item\"><label class=\"label\">Filter by document:</label> <div class=\"field is-narrow\"><div class=\"select is-fullwidth\"><select><option>All</option><!></select></div></div></div>", 1), root$10 = /* @__PURE__ */ from_html("<div class=\"toolbar\"><div class=\"toolbar-content\"><!> <div class=\"toolbar-item\"><label class=\"label is-expanded\">Similarity threshold:</label> <div class=\"field\"><input type=\"range\"/> <span class=\"m-3\"> </span></div></div> <!></div> <!></div> <div class=\"viewer-table\"></div> <div class=\"mt-4\"></div> <!>", 1);
function SimBrowser(t, n) {
	push(n, !0);
	let i = /* @__PURE__ */ state(!1), a = /* @__PURE__ */ state(null), o = /* @__PURE__ */ user_derived(() => get$2(a) ? n.matches.filter((t) => t.query.document === get$2(a)) : n.matches), s = /* @__PURE__ */ state(1), c = /* @__PURE__ */ user_derived(() => Math.ceil(n.matches.length / 30)), l = /* @__PURE__ */ user_derived(() => Math.min(...n.matches.map((t) => Math.min(...t.matches.map((t) => t.similarity))))), u = /* @__PURE__ */ user_derived(() => Math.max(...n.matches.map((t) => Math.max(...t.matches.map((t) => t.similarity))))), d = /* @__PURE__ */ state(get$2(l) + .5 * (get$2(u) - get$2(l))), f = /* @__PURE__ */ state(null);
	function p() {
		let t = window.location.hash;
		if (t.startsWith("#match-")) {
			let i = t.slice(7);
			set(f, i, !0);
			let a = n.matches.findIndex((t) => t.query.id === i);
			a !== -1 && set(s, Math.floor(a / 30) + 1);
			return;
		}
		set(f, null), t.startsWith("#page-") && set(s, parseInt(t.slice(6)), !0);
	}
	user_effect(() => (window.addEventListener("hashchange", p), p(), () => {
		window.removeEventListener("hashchange", p);
	}));
	var m = root$10(), h = first_child(m), g = child(h), _ = child(g), v = (t) => {
		var i = comment(), a = first_child(i);
		snippet(a, () => n.extra_toolbar_items), append(t, i);
	};
	if_block(_, (t) => {
		n.extra_toolbar_items && t(v);
	});
	var y = sibling(_, 2), b = sibling(child(y), 2), x = child(b);
	remove_input_defaults(x), set_attribute(x, "step", .01);
	var S = sibling(x, 2), C = child(S, !0);
	reset(S), reset(b), reset(y);
	var w = sibling(y, 2), T = (t) => {
		var o = root_2$5(), s = first_child(o), c = child(s), l = child(c);
		remove_input_defaults(l), next(), reset(c), reset(s);
		var u = sibling(s, 2), d = sibling(child(u), 2), f = child(d), p = child(f), m = child(p);
		m.value = m.__value = "";
		var h = sibling(m);
		each(h, 17, () => n.index.sources, (t) => t.uid, (t, n) => {
			var i = root_3$3(), a = child(i, !0);
			reset(i);
			var o = {};
			template_effect(() => {
				set_text(a, get$2(n).name || get$2(n).uid), o !== (o = get$2(n).uid) && (i.value = (i.__value = get$2(n).uid) ?? "");
			}), append(t, i);
		}), reset(p), reset(f), reset(d), reset(u), bind_checked(l, () => get$2(i), (t) => set(i, t)), bind_select_value(p, () => get$2(a)?.uid || "", (t) => set(a, n.index.sources.find((n) => n.uid === t) || null, !0)), append(t, o);
	};
	if_block(w, (t) => {
		n.index.sources.length > 1 && t(T);
	}), reset(g);
	var E = sibling(g, 2);
	Pagination_1(E, {
		get total_pages() {
			return get$2(c);
		},
		get page() {
			return get$2(s);
		},
		set page(t) {
			set(s, t, !0);
		}
	}), reset(h);
	var D = sibling(h, 2);
	each(D, 21, () => get$2(o).slice((get$2(s) - 1) * 30, get$2(s) * 30), (t) => t.query.id, (t, n, a, o) => {
		{
			let a = /* @__PURE__ */ user_derived(() => get$2(f) == get$2(n).query.id);
			MatchRow(t, {
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
		set page(t) {
			set(s, t, !0);
		}
	}), template_effect((t) => {
		set_attribute(x, "min", get$2(l)), set_attribute(x, "max", get$2(u)), set_text(C, t);
	}, [() => get$2(d).toPrecision(4)]), bind_value(x, () => get$2(d), (t) => set(d, t)), append(t, m), pop();
}
var root_1$7 = /* @__PURE__ */ from_html("<p>Loading...</p>"), root_4$3 = /* @__PURE__ */ from_html("<div class=\"toolbar-item toolbar-btn\"><!></div>"), root_6$1 = /* @__PURE__ */ from_html("<div class=\"toolbar-item toolbar-btn\"><!></div>"), root_2$4 = /* @__PURE__ */ from_html("<!> <!>", 1), root$9 = /* @__PURE__ */ from_html("<!> <!>", 1);
function SimilarityApp(t, n) {
	push(n, !0);
	let i = prop(n, "mode", 7), a = /* @__PURE__ */ state({
		sources: [],
		images: [],
		transpositions: []
	}), o = /* @__PURE__ */ state([]), s = /* @__PURE__ */ state(!0), c = /* @__PURE__ */ state(i() == "cluster"), l = proxy({});
	setMagnifyingContext(l);
	let u = new NameProvider();
	setNameProvider(u), onMount(() => {
		Promise.all([fetch(n.source_index_url).then((t) => t.json()), fetch(n.sim_matrix_url).then((t) => t.json())]).then(([t, n]) => {
			let i = unserializeSimilarityMatrix(n, t);
			((t) => {
				var n = to_array(t, 2);
				set(a, n[0]), set(o, n[1]);
			})([i.index, i.matches]), u.fetchIIIFNames(get$2(a).sources), set(s, !1);
		}), n.metadata_url && n.metadata_url !== "" && n.metadata_url != "None" && u.fetchMetadataNames(n.metadata_url);
	}), user_effect(() => {
		i() == "cluster" && set(c, !0);
	});
	var d = root$9(), f = first_child(d), p = (t) => {
		var n = root_1$7();
		append(t, n);
	}, m = (t) => {
		var n = root_2$4(), s = first_child(n), l = (t) => {
			{
				let n = (t) => {
					var n = root_4$3(), a = child(n);
					IconBtn(a, {
						icon: "mdi:folder",
						onclick: () => i("browse"),
						label: "Switch to Browse Mode"
					}), reset(n), append(t, n);
				}, s = /* @__PURE__ */ user_derived(() => i() == "cluster");
				ClusteringTool(t, {
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
		if_block(s, (t) => {
			get$2(c) && t(l);
		});
		var u = sibling(s, 2), d = (t) => {
			SimBrowser(t, {
				get index() {
					return get$2(a);
				},
				get matches() {
					return get$2(o);
				},
				extra_toolbar_items: (t) => {
					var n = root_6$1(), a = child(n);
					IconBtn(a, {
						icon: "mdi:graph",
						onclick: () => i("cluster"),
						label: "Cluster the results"
					}), reset(n), append(t, n);
				},
				$$slots: { extra_toolbar_items: !0 }
			});
		};
		if_block(u, (t) => {
			i() == "browse" && t(d);
		}), append(t, n);
	};
	if_block(f, (t) => {
		get$2(s) ? t(p) : t(m, -1);
	});
	var h = sibling(f, 2);
	ImageMagnifier(h, spread_props(() => l)), append(t, d), pop();
}
var root$8 = /* @__PURE__ */ from_html("<div class=\"image-generic-outer-wrapper svelte-1xln4oe\"><div class=\"image-generic-inner-wrapper\"><div class=\"image-generic-title\"><!></div> <div class=\"image-generic-content mb-1\"><!></div></div></div>");
function ImageGeneric(t, n) {
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
	} }), reset(u), reset(s), reset(a), template_effect(() => o = set_style(a, "", o, { opacity: get$2(i) ? 1 : 0 })), append(t, a), pop();
}
var root_1$6 = /* @__PURE__ */ from_html("<li class=\"column is-one-fourth is-flex\"><!></li>"), root$7 = /* @__PURE__ */ from_html("<ul class=\"columns is-mobile is-multiline list-invisible\"></ul>");
function ImageGenericList(t, n) {
	var i = root$7();
	each(i, 21, () => n.image_array, (t) => t.id, (t, n) => {
		var i = root_1$6(), a = child(i);
		ImageGeneric(a, { get image() {
			return get$2(n);
		} }), reset(i), append(t, i);
	}), reset(i), append(t, i);
}
function toImageInfo(t, n) {
	return {
		id: t.id,
		num: n,
		url: t.url,
		src: t.src
	};
}
function nonIIIFToDatasetContentsItemInterface(t) {
	let n = (t) => t.split("/").slice(0, -1).join("/"), i = Object.values(t)[0];
	return [...new Set(Object.entries(i).map(([t, i]) => n(i.url)))].map((t) => ({
		name: t,
		images: Object.entries(i).filter(([i, a]) => n(a.url) === t).map(([t, n], i) => toImageInfo(n, i))
	}));
}
function IIIFToDatasetContentsItemInterface(t) {
	return Object.entries(t).map(([t, n]) => ({
		name: t,
		images: Object.entries(n).map(([t, n], i) => toImageInfo(n, i))
	}));
}
function toDatasetImageBrowserInterface(t, n) {
	return {
		datasetFormat: n,
		datasetHierarchy: n === "iiif" ? "document" : "folder",
		datasetContents: n === "iiif" ? IIIFToDatasetContentsItemInterface(t) : nonIIIFToDatasetContentsItemInterface(t)
	};
}
var root$6 = /* @__PURE__ */ from_html("<div class=\"dci-wrapper\"><div class=\"dci-title is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center\"><h3 class=\"id-suffix m-0\"> </h3> <!></div> <!></div>");
function DatasetContentItem(t, n) {
	push(n, !0);
	let i = /* @__PURE__ */ state(4), a = () => set(i, get$2(i) === 4 ? n.datasetContentsItem.images.length : 4, !0);
	function o(t) {
		return t.split("/").slice(5).join("/") + "/";
	}
	var s = root$6(), c = child(s), l = child(c), u = child(l);
	reset(l);
	var d = sibling(l, 2), f = (t) => {
		{
			let n = /* @__PURE__ */ user_derived(() => get$2(i) === 4 ? "mdi:plus" : "mdi:minus"), o = /* @__PURE__ */ user_derived(() => get$2(i) === 4 ? "See more items" : "See less items");
			IconBtn(t, {
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
	if_block(d, (t) => {
		n.datasetContentsItem.images.length > 4 && t(f);
	}), reset(c);
	var p = sibling(c, 2);
	{
		let t = /* @__PURE__ */ user_derived(() => n.datasetContentsItem.images.slice(0, get$2(i)));
		ImageGenericList(p, { get image_array() {
			return get$2(t);
		} });
	}
	reset(s), template_effect((t) => set_text(u, `Images in ${t ?? ""}`), [() => n.datasetFormat === "iiif" ? `document #${n.itemIndex + 1}` : `folder ${o(n.datasetContentsItem.name)}`]), append(t, s), pop();
}
var root$5 = /* @__PURE__ */ from_html("<div></div> <!>", 1);
function DatasetImageBrowser(t, n) {
	push(n, !0);
	let i = new NameProvider();
	setNameProvider(i);
	let a = toDatasetImageBrowserInterface(n.dataset, n.datasetFormat), o = proxy({});
	setMagnifyingContext(o), onMount(() => {
		n.metadataURL && n.metadataURL !== "" && n.metadataURL != "None" && i.fetchMetadataNames(n.metadataURL);
	});
	var s = root$5(), c = first_child(s);
	each(c, 21, () => a.datasetContents, index$1, (t, i, a) => {
		DatasetContentItem(t, {
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
	ImageMagnifier(l, {}), append(t, s), pop();
}
var root_1$5 = /* @__PURE__ */ from_html("<p>Loading...</p>"), root$4 = /* @__PURE__ */ from_html("<!> <!>", 1);
function SearchResults(t, n) {
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
		Promise.all([fetch(n.source_index_url).then((t) => t.json()), fetch(n.query_result_url).then((t) => t.json())]).then(([t, n]) => {
			console.log(t, n);
			let c = unserializeSearchResults(t, n);
			((t) => {
				var n = to_array(t, 3);
				set(i, n[0], !0), set(a, n[1], !0), set(o, n[2], !0);
			})([
				c.source_index,
				c.query_index,
				c.matches
			]), l.fetchIIIFNames(get$2(i).sources), set(s, !1);
		}), n.metadata_url && n.metadata_url !== "" && n.metadata_url != "None" && l.fetchMetadataNames(n.metadata_url);
	});
	var u = root$4(), d = first_child(u), f = (t) => {
		var n = root_1$5();
		append(t, n);
	}, p = (t) => {
		SimBrowser(t, {
			get index() {
				return get$2(i);
			},
			get matches() {
				return get$2(o);
			}
		});
	};
	if_block(d, (t) => {
		get$2(s) ? t(f) : t(p, -1);
	});
	var m = sibling(d, 2);
	ImageMagnifier(m, spread_props(() => c)), append(t, u), pop();
}
var root_1$4 = /* @__PURE__ */ from_html("<span contenteditable=\"true\" role=\"textbox\" tabindex=\"0\"></span>"), root_2$3 = /* @__PURE__ */ from_html("<span> </span>");
function EditableSpan(t, n) {
	push(n, !0);
	let i = prop(n, "value", 15), a = prop(n, "placeholder", 7), o = prop(n, "required", 3, !1), s = prop(n, "editable", 3, !0), c = /* @__PURE__ */ state(proxy(n.editing || !1)), l = /* @__PURE__ */ state(null), u = /* @__PURE__ */ state(proxy(i()));
	user_effect(() => {
		set(u, i(), !0);
	}), o() && a("*" + a());
	function d() {
		i((i() || "").trim()), set(u, (get$2(u) || "").trim(), !0);
	}
	function f(t) {
		t.key === "Enter" && (t.preventDefault(), set(c, !1), n.onenter && n.onenter());
	}
	function p() {
		set(c, !0);
	}
	function m() {
		set(c, !1), d(), i(get$2(u)), n.onblur && n.onblur();
	}
	function h() {
		set(c, !0);
	}
	let g = /* @__PURE__ */ user_derived(() => !get$2(u) || get$2(u).trim() == "");
	user_effect(() => {
		n.focus && get$2(l) && setTimeout(() => {
			if (!get$2(l)) return;
			let t = window.getSelection();
			if (t) {
				let n = document.createRange();
				n.setStart(get$2(l), 0), n.collapse(!0), t.removeAllRanges(), t.addRange(n);
			}
		}, 100);
	});
	var _ = comment(), v = first_child(_), y = (t) => {
		var i = root_1$4();
		let s;
		bind_this(i, (t) => set(l, t), () => get$2(l)), template_effect(() => {
			s = set_class(i, 1, clsx$1(n.class), "svelte-1vvgwho", s, {
				"editable-clickable": !get$2(c),
				empty: get$2(g),
				required: o()
			}), set_attribute(i, "placeholder", a()), set_attribute(i, "spellcheck", get$2(c));
		}), event("blur", i, m), event("focus", i, h), event("keypress", i, f), delegated("click", i, p), bind_content_editable("innerText", i, () => get$2(u), (t) => set(u, t)), append(t, i);
	}, b = (t) => {
		var i = root_2$3();
		let s;
		var c = child(i, !0);
		reset(i), template_effect(() => {
			s = set_class(i, 1, clsx$1(n.class), "svelte-1vvgwho", s, {
				empty: get$2(g),
				required: o()
			}), set_attribute(i, "placeholder", a()), set_text(c, get$2(u));
		}), append(t, i);
	};
	if_block(v, (t) => {
		s() ? t(y) : t(b, -1);
	}), append(t, _), pop();
}
delegate(["click"]);
var root$3 = /* @__PURE__ */ from_html("<div><!> <div class=\"actions\"><button class=\"delete\"></button></div></div>");
function IIIFURLItem(t, n) {
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
		set value(t) {
			i(t);
		}
	});
	var u = sibling(l, 2), d = child(u);
	reset(u), reset(s), template_effect(() => c = set_class(s, 1, "urllist-item mb-2 svelte-95nsll", null, c, { valid: get$2(o) })), delegated("click", d, (t) => {
		n.onChange(""), t.preventDefault();
	}), append(t, s), pop();
}
delegate(["click"]);
var root$2 = /* @__PURE__ */ from_html("<div><!> <input class=\"input\" type=\"text\" placeholder=\"Type or paste URLs to append to the list above\"/></div>");
function IIIFURLListInput(t, n) {
	push(n, !0);
	let i = prop(n, "field", 7), a = prop(n, "value", 31, () => proxy([]));
	onMount(() => {
		a(JSON.parse(i().value));
	});
	function o(t) {
		return (n) => {
			n == "" ? a().splice(t, 1) : a(a()[t] = [n], !0), i().value = JSON.stringify(a());
		};
	}
	function s(t) {
		t.key == "Enter" && (t.preventDefault(), t.currentTarget.value != "" && (a().push([t.currentTarget.value.trim()]), i().value = JSON.stringify(a())), t.currentTarget.value = "");
	}
	function c(t) {
		let n = (t.clipboardData?.getData("text/plain"))?.split(/\s+/);
		n && (a().push(...n.map((t) => [t.trim()]).filter((t) => t[0] != "")), i().value = JSON.stringify(a()));
	}
	var l = root$2(), u = child(l);
	each(u, 17, a, index$1, (t, n, i) => {
		{
			let a = /* @__PURE__ */ user_derived(() => o(i));
			IIIFURLItem(t, {
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
	reset(l), delegated("keydown", d, s), event("paste", d, c), append(t, l), pop();
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
		return function t(n, i, a) {
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
					n[c][0].call(p.exports, function(t) {
						var i = n[c][1][t];
						return o(i || t);
					}, p, p.exports, t, n, i, a);
				}
				return i[c].exports;
			}
			for (var s = typeof __require == "function" && __require, c = 0; c < a.length; c++) o(a[c]);
			return o;
		}({
			1: [function(t, n, i) {
				var a = t("./utils"), o = t("./support"), s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
				i.encode = function(t) {
					for (var n, i, o, c, l, u, d, f = [], p = 0, m = t.length, h = m, g = a.getTypeOf(t) !== "string"; p < t.length;) h = m - p, o = g ? (n = t[p++], i = p < m ? t[p++] : 0, p < m ? t[p++] : 0) : (n = t.charCodeAt(p++), i = p < m ? t.charCodeAt(p++) : 0, p < m ? t.charCodeAt(p++) : 0), c = n >> 2, l = (3 & n) << 4 | i >> 4, u = 1 < h ? (15 & i) << 2 | o >> 6 : 64, d = 2 < h ? 63 & o : 64, f.push(s.charAt(c) + s.charAt(l) + s.charAt(u) + s.charAt(d));
					return f.join("");
				}, i.decode = function(t) {
					var n, i, a, c, l, u, d = 0, f = 0, p = "data:";
					if (t.substr(0, p.length) === p) throw Error("Invalid base64 input, it looks like a data url.");
					var m, h = 3 * (t = t.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
					if (t.charAt(t.length - 1) === s.charAt(64) && h--, t.charAt(t.length - 2) === s.charAt(64) && h--, h % 1 != 0) throw Error("Invalid base64 input, bad content length.");
					for (m = o.uint8array ? new Uint8Array(0 | h) : Array(0 | h); d < t.length;) n = s.indexOf(t.charAt(d++)) << 2 | (c = s.indexOf(t.charAt(d++))) >> 4, i = (15 & c) << 4 | (l = s.indexOf(t.charAt(d++))) >> 2, a = (3 & l) << 6 | (u = s.indexOf(t.charAt(d++))), m[f++] = n, l !== 64 && (m[f++] = i), u !== 64 && (m[f++] = a);
					return m;
				};
			}, {
				"./support": 30,
				"./utils": 32
			}],
			2: [function(t, n, i) {
				var a = t("./external"), o = t("./stream/DataWorker"), s = t("./stream/Crc32Probe"), c = t("./stream/DataLengthProbe");
				function l(t, n, i, a, o) {
					this.compressedSize = t, this.uncompressedSize = n, this.crc32 = i, this.compression = a, this.compressedContent = o;
				}
				l.prototype = {
					getContentWorker: function() {
						var t = new o(a.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new c("data_length")), n = this;
						return t.on("end", function() {
							if (this.streamInfo.data_length !== n.uncompressedSize) throw Error("Bug : uncompressed data size mismatch");
						}), t;
					},
					getCompressedWorker: function() {
						return new o(a.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
					}
				}, l.createWorkerFrom = function(t, n, i) {
					return t.pipe(new s()).pipe(new c("uncompressedSize")).pipe(n.compressWorker(i)).pipe(new c("compressedSize")).withStreamInfo("compression", n);
				}, n.exports = l;
			}, {
				"./external": 6,
				"./stream/Crc32Probe": 25,
				"./stream/DataLengthProbe": 26,
				"./stream/DataWorker": 27
			}],
			3: [function(t, n, i) {
				var a = t("./stream/GenericWorker");
				i.STORE = {
					magic: "\0\0",
					compressWorker: function() {
						return new a("STORE compression");
					},
					uncompressWorker: function() {
						return new a("STORE decompression");
					}
				}, i.DEFLATE = t("./flate");
			}, {
				"./flate": 7,
				"./stream/GenericWorker": 28
			}],
			4: [function(t, n, i) {
				var a = t("./utils"), o = function() {
					for (var t, n = [], i = 0; i < 256; i++) {
						t = i;
						for (var a = 0; a < 8; a++) t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
						n[i] = t;
					}
					return n;
				}();
				n.exports = function(t, n) {
					return t !== void 0 && t.length ? a.getTypeOf(t) === "string" ? function(t, n, i, a) {
						var s = o, c = a + i;
						t ^= -1;
						for (var l = a; l < c; l++) t = t >>> 8 ^ s[255 & (t ^ n.charCodeAt(l))];
						return -1 ^ t;
					}(0 | n, t, t.length, 0) : function(t, n, i, a) {
						var s = o, c = a + i;
						t ^= -1;
						for (var l = a; l < c; l++) t = t >>> 8 ^ s[255 & (t ^ n[l])];
						return -1 ^ t;
					}(0 | n, t, t.length, 0) : 0;
				};
			}, { "./utils": 32 }],
			5: [function(t, n, i) {
				i.base64 = !1, i.binary = !1, i.dir = !1, i.createFolders = !0, i.date = null, i.compression = null, i.compressionOptions = null, i.comment = null, i.unixPermissions = null, i.dosPermissions = null;
			}, {}],
			6: [function(t, n, i) {
				var a = null;
				a = typeof Promise < "u" ? Promise : t("lie"), n.exports = { Promise: a };
			}, { lie: 37 }],
			7: [function(t, n, i) {
				var a = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", o = t("pako"), s = t("./utils"), c = t("./stream/GenericWorker"), l = a ? "uint8array" : "array";
				function u(t, n) {
					c.call(this, "FlateWorker/" + t), this._pako = null, this._pakoAction = t, this._pakoOptions = n, this.meta = {};
				}
				i.magic = "\b\0", s.inherits(u, c), u.prototype.processChunk = function(t) {
					this.meta = t.meta, this._pako === null && this._createPako(), this._pako.push(s.transformTo(l, t.data), !1);
				}, u.prototype.flush = function() {
					c.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
				}, u.prototype.cleanUp = function() {
					c.prototype.cleanUp.call(this), this._pako = null;
				}, u.prototype._createPako = function() {
					this._pako = new o[this._pakoAction]({
						raw: !0,
						level: this._pakoOptions.level || -1
					});
					var t = this;
					this._pako.onData = function(n) {
						t.push({
							data: n,
							meta: t.meta
						});
					};
				}, i.compressWorker = function(t) {
					return new u("Deflate", t);
				}, i.uncompressWorker = function() {
					return new u("Inflate", {});
				};
			}, {
				"./stream/GenericWorker": 28,
				"./utils": 32,
				pako: 38
			}],
			8: [function(t, n, i) {
				function a(t, n) {
					var i, a = "";
					for (i = 0; i < n; i++) a += String.fromCharCode(255 & t), t >>>= 8;
					return a;
				}
				function o(t, n, i, o, c, f) {
					var p, m, h = t.file, g = t.compression, _ = f !== l.utf8encode, v = s.transformTo("string", f(h.name)), y = s.transformTo("string", l.utf8encode(h.name)), b = h.comment, x = s.transformTo("string", f(b)), S = s.transformTo("string", l.utf8encode(b)), C = y.length !== h.name.length, w = S.length !== b.length, T = "", E = "", D = "", O = h.dir, k = h.date, A = {
						crc32: 0,
						compressedSize: 0,
						uncompressedSize: 0
					};
					n && !i || (A.crc32 = t.crc32, A.compressedSize = t.compressedSize, A.uncompressedSize = t.uncompressedSize);
					var j = 0;
					n && (j |= 8), _ || !C && !w || (j |= 2048);
					var M = 0, N = 0;
					O && (M |= 16), c === "UNIX" ? (N = 798, M |= function(t, n) {
						var i = t;
						return t || (i = n ? 16893 : 33204), (65535 & i) << 16;
					}(h.unixPermissions, O)) : (N = 20, M |= function(t) {
						return 63 & (t || 0);
					}(h.dosPermissions)), p = k.getUTCHours(), p <<= 6, p |= k.getUTCMinutes(), p <<= 5, p |= k.getUTCSeconds() / 2, m = k.getUTCFullYear() - 1980, m <<= 4, m |= k.getUTCMonth() + 1, m <<= 5, m |= k.getUTCDate(), C && (E = a(1, 1) + a(u(v), 4) + y, T += "up" + a(E.length, 2) + E), w && (D = a(1, 1) + a(u(x), 4) + S, T += "uc" + a(D.length, 2) + D);
					var P = "";
					return P += "\n\0", P += a(j, 2), P += g.magic, P += a(p, 2), P += a(m, 2), P += a(A.crc32, 4), P += a(A.compressedSize, 4), P += a(A.uncompressedSize, 4), P += a(v.length, 2), P += a(T.length, 2), {
						fileRecord: d.LOCAL_FILE_HEADER + P + v + T,
						dirRecord: d.CENTRAL_FILE_HEADER + a(N, 2) + P + a(x.length, 2) + "\0\0\0\0" + a(M, 4) + a(o, 4) + v + T + x
					};
				}
				var s = t("../utils"), c = t("../stream/GenericWorker"), l = t("../utf8"), u = t("../crc32"), d = t("../signature");
				function f(t, n, i, a) {
					c.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = n, this.zipPlatform = i, this.encodeFileName = a, this.streamFiles = t, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
				}
				s.inherits(f, c), f.prototype.push = function(t) {
					var n = t.meta.percent || 0, i = this.entriesCount, a = this._sources.length;
					this.accumulate ? this.contentBuffer.push(t) : (this.bytesWritten += t.data.length, c.prototype.push.call(this, {
						data: t.data,
						meta: {
							currentFile: this.currentFile,
							percent: i ? (n + 100 * (i - a - 1)) / i : 100
						}
					}));
				}, f.prototype.openedSource = function(t) {
					this.currentSourceOffset = this.bytesWritten, this.currentFile = t.file.name;
					var n = this.streamFiles && !t.file.dir;
					if (n) {
						var i = o(t, n, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
						this.push({
							data: i.fileRecord,
							meta: { percent: 0 }
						});
					} else this.accumulate = !0;
				}, f.prototype.closedSource = function(t) {
					this.accumulate = !1;
					var n = this.streamFiles && !t.file.dir, i = o(t, n, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
					if (this.dirRecords.push(i.dirRecord), n) this.push({
						data: function(t) {
							return d.DATA_DESCRIPTOR + a(t.crc32, 4) + a(t.compressedSize, 4) + a(t.uncompressedSize, 4);
						}(t),
						meta: { percent: 100 }
					});
					else for (this.push({
						data: i.fileRecord,
						meta: { percent: 0 }
					}); this.contentBuffer.length;) this.push(this.contentBuffer.shift());
					this.currentFile = null;
				}, f.prototype.flush = function() {
					for (var t = this.bytesWritten, n = 0; n < this.dirRecords.length; n++) this.push({
						data: this.dirRecords[n],
						meta: { percent: 100 }
					});
					var i = this.bytesWritten - t, o = function(t, n, i, o, c) {
						var l = s.transformTo("string", c(o));
						return d.CENTRAL_DIRECTORY_END + "\0\0\0\0" + a(t, 2) + a(t, 2) + a(n, 4) + a(i, 4) + a(l.length, 2) + l;
					}(this.dirRecords.length, i, t, this.zipComment, this.encodeFileName);
					this.push({
						data: o,
						meta: { percent: 100 }
					});
				}, f.prototype.prepareNextSource = function() {
					this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
				}, f.prototype.registerPrevious = function(t) {
					this._sources.push(t);
					var n = this;
					return t.on("data", function(t) {
						n.processChunk(t);
					}), t.on("end", function() {
						n.closedSource(n.previous.streamInfo), n._sources.length ? n.prepareNextSource() : n.end();
					}), t.on("error", function(t) {
						n.error(t);
					}), this;
				}, f.prototype.resume = function() {
					return !!c.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
				}, f.prototype.error = function(t) {
					var n = this._sources;
					if (!c.prototype.error.call(this, t)) return !1;
					for (var i = 0; i < n.length; i++) try {
						n[i].error(t);
					} catch {}
					return !0;
				}, f.prototype.lock = function() {
					c.prototype.lock.call(this);
					for (var t = this._sources, n = 0; n < t.length; n++) t[n].lock();
				}, n.exports = f;
			}, {
				"../crc32": 4,
				"../signature": 23,
				"../stream/GenericWorker": 28,
				"../utf8": 31,
				"../utils": 32
			}],
			9: [function(t, n, i) {
				var a = t("../compressions"), o = t("./ZipFileWorker");
				i.generateWorker = function(t, n, i) {
					var s = new o(n.streamFiles, i, n.platform, n.encodeFileName), c = 0;
					try {
						t.forEach(function(t, i) {
							c++;
							var o = function(t, n) {
								var i = t || n, o = a[i];
								if (!o) throw Error(i + " is not a valid compression method !");
								return o;
							}(i.options.compression, n.compression), l = i.options.compressionOptions || n.compressionOptions || {}, u = i.dir, d = i.date;
							i._compressWorker(o, l).withStreamInfo("file", {
								name: t,
								dir: u,
								date: d,
								comment: i.comment || "",
								unixPermissions: i.unixPermissions,
								dosPermissions: i.dosPermissions
							}).pipe(s);
						}), s.entriesCount = c;
					} catch (t) {
						s.error(t);
					}
					return s;
				};
			}, {
				"../compressions": 3,
				"./ZipFileWorker": 8
			}],
			10: [function(t, n, i) {
				function a() {
					if (!(this instanceof a)) return new a();
					if (arguments.length) throw Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
					this.files = Object.create(null), this.comment = null, this.root = "", this.clone = function() {
						var t = new a();
						for (var n in this) typeof this[n] != "function" && (t[n] = this[n]);
						return t;
					};
				}
				(a.prototype = t("./object")).loadAsync = t("./load"), a.support = t("./support"), a.defaults = t("./defaults"), a.version = "3.10.1", a.loadAsync = function(t, n) {
					return new a().loadAsync(t, n);
				}, a.external = t("./external"), n.exports = a;
			}, {
				"./defaults": 5,
				"./external": 6,
				"./load": 11,
				"./object": 15,
				"./support": 30
			}],
			11: [function(t, n, i) {
				var a = t("./utils"), o = t("./external"), s = t("./utf8"), c = t("./zipEntries"), l = t("./stream/Crc32Probe"), u = t("./nodejsUtils");
				function d(t) {
					return new o.Promise(function(n, i) {
						var a = t.decompressed.getContentWorker().pipe(new l());
						a.on("error", function(t) {
							i(t);
						}).on("end", function() {
							a.streamInfo.crc32 === t.decompressed.crc32 ? n() : i(/* @__PURE__ */ Error("Corrupted zip : CRC32 mismatch"));
						}).resume();
					});
				}
				n.exports = function(t, n) {
					var i = this;
					return n = a.extend(n || {}, {
						base64: !1,
						checkCRC32: !1,
						optimizedBinaryString: !1,
						createFolders: !1,
						decodeFileName: s.utf8decode
					}), u.isNode && u.isStream(t) ? o.Promise.reject(/* @__PURE__ */ Error("JSZip can't accept a stream when loading a zip file.")) : a.prepareContent("the loaded zip file", t, !0, n.optimizedBinaryString, n.base64).then(function(t) {
						var i = new c(n);
						return i.load(t), i;
					}).then(function(t) {
						var i = [o.Promise.resolve(t)], a = t.files;
						if (n.checkCRC32) for (var s = 0; s < a.length; s++) i.push(d(a[s]));
						return o.Promise.all(i);
					}).then(function(t) {
						for (var o = t.shift(), s = o.files, c = 0; c < s.length; c++) {
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
			12: [function(t, n, i) {
				var a = t("../utils"), o = t("../stream/GenericWorker");
				function s(t, n) {
					o.call(this, "Nodejs stream input adapter for " + t), this._upstreamEnded = !1, this._bindStream(n);
				}
				a.inherits(s, o), s.prototype._bindStream = function(t) {
					var n = this;
					(this._stream = t).pause(), t.on("data", function(t) {
						n.push({
							data: t,
							meta: { percent: 0 }
						});
					}).on("error", function(t) {
						n.isPaused ? this.generatedError = t : n.error(t);
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
			13: [function(t, n, i) {
				var a = t("readable-stream").Readable;
				function o(t, n, i) {
					a.call(this, n), this._helper = t;
					var o = this;
					t.on("data", function(t, n) {
						o.push(t) || o._helper.pause(), i && i(n);
					}).on("error", function(t) {
						o.emit("error", t);
					}).on("end", function() {
						o.push(null);
					});
				}
				t("../utils").inherits(o, a), o.prototype._read = function() {
					this._helper.resume();
				}, n.exports = o;
			}, {
				"../utils": 32,
				"readable-stream": 16
			}],
			14: [function(t, n, i) {
				n.exports = {
					isNode: typeof Buffer < "u",
					newBufferFrom: function(t, n) {
						if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(t, n);
						if (typeof t == "number") throw Error("The \"data\" argument must not be a number");
						return new Buffer(t, n);
					},
					allocBuffer: function(t) {
						if (Buffer.alloc) return Buffer.alloc(t);
						var n = new Buffer(t);
						return n.fill(0), n;
					},
					isBuffer: function(t) {
						return Buffer.isBuffer(t);
					},
					isStream: function(t) {
						return t && typeof t.on == "function" && typeof t.pause == "function" && typeof t.resume == "function";
					}
				};
			}, {}],
			15: [function(t, n, i) {
				function a(t, n, i) {
					var a, o = s.getTypeOf(n), l = s.extend(i || {}, u);
					l.date = l.date || /* @__PURE__ */ new Date(), l.compression !== null && (l.compression = l.compression.toUpperCase()), typeof l.unixPermissions == "string" && (l.unixPermissions = parseInt(l.unixPermissions, 8)), l.unixPermissions && 16384 & l.unixPermissions && (l.dir = !0), l.dosPermissions && 16 & l.dosPermissions && (l.dir = !0), l.dir && (t = _(t)), l.createFolders && (a = g(t)) && v.call(this, a, !0);
					var p = o === "string" && !1 === l.binary && !1 === l.base64;
					i && i.binary !== void 0 || (l.binary = !p), (n instanceof d && n.uncompressedSize === 0 || l.dir || !n || n.length === 0) && (l.base64 = !1, l.binary = !0, n = "", l.compression = "STORE", o = "string");
					var y = null;
					y = n instanceof d || n instanceof c ? n : m.isNode && m.isStream(n) ? new h(t, n) : s.prepareContent(t, n, l.binary, l.optimizedBinaryString, l.base64);
					var b = new f(t, y, l);
					this.files[t] = b;
				}
				var o = t("./utf8"), s = t("./utils"), c = t("./stream/GenericWorker"), l = t("./stream/StreamHelper"), u = t("./defaults"), d = t("./compressedObject"), f = t("./zipObject"), p = t("./generate"), m = t("./nodejsUtils"), h = t("./nodejs/NodejsStreamInputAdapter"), g = function(t) {
					t.slice(-1) === "/" && (t = t.substring(0, t.length - 1));
					var n = t.lastIndexOf("/");
					return 0 < n ? t.substring(0, n) : "";
				}, _ = function(t) {
					return t.slice(-1) !== "/" && (t += "/"), t;
				}, v = function(t, n) {
					return n = n === void 0 ? u.createFolders : n, t = _(t), this.files[t] || a.call(this, t, null, {
						dir: !0,
						createFolders: n
					}), this.files[t];
				};
				function y(t) {
					return Object.prototype.toString.call(t) === "[object RegExp]";
				}
				n.exports = {
					load: function() {
						throw Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
					},
					forEach: function(t) {
						var n, i, a;
						for (n in this.files) a = this.files[n], (i = n.slice(this.root.length, n.length)) && n.slice(0, this.root.length) === this.root && t(i, a);
					},
					filter: function(t) {
						var n = [];
						return this.forEach(function(i, a) {
							t(i, a) && n.push(a);
						}), n;
					},
					file: function(t, n, i) {
						if (arguments.length !== 1) return t = this.root + t, a.call(this, t, n, i), this;
						if (y(t)) {
							var o = t;
							return this.filter(function(t, n) {
								return !n.dir && o.test(t);
							});
						}
						var s = this.files[this.root + t];
						return s && !s.dir ? s : null;
					},
					folder: function(t) {
						if (!t) return this;
						if (y(t)) return this.filter(function(n, i) {
							return i.dir && t.test(n);
						});
						var n = this.root + t, i = v.call(this, n), a = this.clone();
						return a.root = i.name, a;
					},
					remove: function(t) {
						t = this.root + t;
						var n = this.files[t];
						if (n ||= (t.slice(-1) !== "/" && (t += "/"), this.files[t]), n && !n.dir) delete this.files[t];
						else for (var i = this.filter(function(n, i) {
							return i.name.slice(0, t.length) === t;
						}), a = 0; a < i.length; a++) delete this.files[i[a].name];
						return this;
					},
					generate: function() {
						throw Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
					},
					generateInternalStream: function(t) {
						var n, i = {};
						try {
							if ((i = s.extend(t || {}, {
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
						} catch (t) {
							(n = new c("error")).error(t);
						}
						return new l(n, i.type || "string", i.mimeType);
					},
					generateAsync: function(t, n) {
						return this.generateInternalStream(t).accumulate(n);
					},
					generateNodeStream: function(t, n) {
						return (t ||= {}).type || (t.type = "nodebuffer"), this.generateInternalStream(t).toNodejsStream(n);
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
			16: [function(t, n, i) {
				n.exports = t("stream");
			}, { stream: void 0 }],
			17: [function(t, n, i) {
				var a = t("./DataReader");
				function o(t) {
					a.call(this, t);
					for (var n = 0; n < this.data.length; n++) t[n] = 255 & t[n];
				}
				t("../utils").inherits(o, a), o.prototype.byteAt = function(t) {
					return this.data[this.zero + t];
				}, o.prototype.lastIndexOfSignature = function(t) {
					for (var n = t.charCodeAt(0), i = t.charCodeAt(1), a = t.charCodeAt(2), o = t.charCodeAt(3), s = this.length - 4; 0 <= s; --s) if (this.data[s] === n && this.data[s + 1] === i && this.data[s + 2] === a && this.data[s + 3] === o) return s - this.zero;
					return -1;
				}, o.prototype.readAndCheckSignature = function(t) {
					var n = t.charCodeAt(0), i = t.charCodeAt(1), a = t.charCodeAt(2), o = t.charCodeAt(3), s = this.readData(4);
					return n === s[0] && i === s[1] && a === s[2] && o === s[3];
				}, o.prototype.readData = function(t) {
					if (this.checkOffset(t), t === 0) return [];
					var n = this.data.slice(this.zero + this.index, this.zero + this.index + t);
					return this.index += t, n;
				}, n.exports = o;
			}, {
				"../utils": 32,
				"./DataReader": 18
			}],
			18: [function(t, n, i) {
				var a = t("../utils");
				function o(t) {
					this.data = t, this.length = t.length, this.index = 0, this.zero = 0;
				}
				o.prototype = {
					checkOffset: function(t) {
						this.checkIndex(this.index + t);
					},
					checkIndex: function(t) {
						if (this.length < this.zero + t || t < 0) throw Error("End of data reached (data length = " + this.length + ", asked index = " + t + "). Corrupted zip ?");
					},
					setIndex: function(t) {
						this.checkIndex(t), this.index = t;
					},
					skip: function(t) {
						this.setIndex(this.index + t);
					},
					byteAt: function() {},
					readInt: function(t) {
						var n, i = 0;
						for (this.checkOffset(t), n = this.index + t - 1; n >= this.index; n--) i = (i << 8) + this.byteAt(n);
						return this.index += t, i;
					},
					readString: function(t) {
						return a.transformTo("string", this.readData(t));
					},
					readData: function() {},
					lastIndexOfSignature: function() {},
					readAndCheckSignature: function() {},
					readDate: function() {
						var t = this.readInt(4);
						return new Date(Date.UTC(1980 + (t >> 25 & 127), (t >> 21 & 15) - 1, t >> 16 & 31, t >> 11 & 31, t >> 5 & 63, (31 & t) << 1));
					}
				}, n.exports = o;
			}, { "../utils": 32 }],
			19: [function(t, n, i) {
				var a = t("./Uint8ArrayReader");
				function o(t) {
					a.call(this, t);
				}
				t("../utils").inherits(o, a), o.prototype.readData = function(t) {
					this.checkOffset(t);
					var n = this.data.slice(this.zero + this.index, this.zero + this.index + t);
					return this.index += t, n;
				}, n.exports = o;
			}, {
				"../utils": 32,
				"./Uint8ArrayReader": 21
			}],
			20: [function(t, n, i) {
				var a = t("./DataReader");
				function o(t) {
					a.call(this, t);
				}
				t("../utils").inherits(o, a), o.prototype.byteAt = function(t) {
					return this.data.charCodeAt(this.zero + t);
				}, o.prototype.lastIndexOfSignature = function(t) {
					return this.data.lastIndexOf(t) - this.zero;
				}, o.prototype.readAndCheckSignature = function(t) {
					return t === this.readData(4);
				}, o.prototype.readData = function(t) {
					this.checkOffset(t);
					var n = this.data.slice(this.zero + this.index, this.zero + this.index + t);
					return this.index += t, n;
				}, n.exports = o;
			}, {
				"../utils": 32,
				"./DataReader": 18
			}],
			21: [function(t, n, i) {
				var a = t("./ArrayReader");
				function o(t) {
					a.call(this, t);
				}
				t("../utils").inherits(o, a), o.prototype.readData = function(t) {
					if (this.checkOffset(t), t === 0) return new Uint8Array();
					var n = this.data.subarray(this.zero + this.index, this.zero + this.index + t);
					return this.index += t, n;
				}, n.exports = o;
			}, {
				"../utils": 32,
				"./ArrayReader": 17
			}],
			22: [function(t, n, i) {
				var a = t("../utils"), o = t("../support"), s = t("./ArrayReader"), c = t("./StringReader"), l = t("./NodeBufferReader"), u = t("./Uint8ArrayReader");
				n.exports = function(t) {
					var n = a.getTypeOf(t);
					return a.checkSupport(n), n !== "string" || o.uint8array ? n === "nodebuffer" ? new l(t) : o.uint8array ? new u(a.transformTo("uint8array", t)) : new s(a.transformTo("array", t)) : new c(t);
				};
			}, {
				"../support": 30,
				"../utils": 32,
				"./ArrayReader": 17,
				"./NodeBufferReader": 19,
				"./StringReader": 20,
				"./Uint8ArrayReader": 21
			}],
			23: [function(t, n, i) {
				i.LOCAL_FILE_HEADER = "PK", i.CENTRAL_FILE_HEADER = "PK", i.CENTRAL_DIRECTORY_END = "PK", i.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", i.ZIP64_CENTRAL_DIRECTORY_END = "PK", i.DATA_DESCRIPTOR = "PK\x07\b";
			}, {}],
			24: [function(t, n, i) {
				var a = t("./GenericWorker"), o = t("../utils");
				function s(t) {
					a.call(this, "ConvertWorker to " + t), this.destType = t;
				}
				o.inherits(s, a), s.prototype.processChunk = function(t) {
					this.push({
						data: o.transformTo(this.destType, t.data),
						meta: t.meta
					});
				}, n.exports = s;
			}, {
				"../utils": 32,
				"./GenericWorker": 28
			}],
			25: [function(t, n, i) {
				var a = t("./GenericWorker"), o = t("../crc32");
				function s() {
					a.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
				}
				t("../utils").inherits(s, a), s.prototype.processChunk = function(t) {
					this.streamInfo.crc32 = o(t.data, this.streamInfo.crc32 || 0), this.push(t);
				}, n.exports = s;
			}, {
				"../crc32": 4,
				"../utils": 32,
				"./GenericWorker": 28
			}],
			26: [function(t, n, i) {
				var a = t("../utils"), o = t("./GenericWorker");
				function s(t) {
					o.call(this, "DataLengthProbe for " + t), this.propName = t, this.withStreamInfo(t, 0);
				}
				a.inherits(s, o), s.prototype.processChunk = function(t) {
					if (t) {
						var n = this.streamInfo[this.propName] || 0;
						this.streamInfo[this.propName] = n + t.data.length;
					}
					o.prototype.processChunk.call(this, t);
				}, n.exports = s;
			}, {
				"../utils": 32,
				"./GenericWorker": 28
			}],
			27: [function(t, n, i) {
				var a = t("../utils"), o = t("./GenericWorker");
				function s(t) {
					o.call(this, "DataWorker");
					var n = this;
					this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, t.then(function(t) {
						n.dataIsReady = !0, n.data = t, n.max = t && t.length || 0, n.type = a.getTypeOf(t), n.isPaused || n._tickAndRepeat();
					}, function(t) {
						n.error(t);
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
					var t = null, n = Math.min(this.max, this.index + 16384);
					if (this.index >= this.max) return this.end();
					switch (this.type) {
						case "string":
							t = this.data.substring(this.index, n);
							break;
						case "uint8array":
							t = this.data.subarray(this.index, n);
							break;
						case "array":
						case "nodebuffer": t = this.data.slice(this.index, n);
					}
					return this.index = n, this.push({
						data: t,
						meta: { percent: this.max ? this.index / this.max * 100 : 0 }
					});
				}, n.exports = s;
			}, {
				"../utils": 32,
				"./GenericWorker": 28
			}],
			28: [function(t, n, i) {
				function a(t) {
					this.name = t || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = {
						data: [],
						end: [],
						error: []
					}, this.previous = null;
				}
				a.prototype = {
					push: function(t) {
						this.emit("data", t);
					},
					end: function() {
						if (this.isFinished) return !1;
						this.flush();
						try {
							this.emit("end"), this.cleanUp(), this.isFinished = !0;
						} catch (t) {
							this.emit("error", t);
						}
						return !0;
					},
					error: function(t) {
						return !this.isFinished && (this.isPaused ? this.generatedError = t : (this.isFinished = !0, this.emit("error", t), this.previous && this.previous.error(t), this.cleanUp()), !0);
					},
					on: function(t, n) {
						return this._listeners[t].push(n), this;
					},
					cleanUp: function() {
						this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
					},
					emit: function(t, n) {
						if (this._listeners[t]) for (var i = 0; i < this._listeners[t].length; i++) this._listeners[t][i].call(this, n);
					},
					pipe: function(t) {
						return t.registerPrevious(this);
					},
					registerPrevious: function(t) {
						if (this.isLocked) throw Error("The stream '" + this + "' has already been used.");
						this.streamInfo = t.streamInfo, this.mergeStreamInfo(), this.previous = t;
						var n = this;
						return t.on("data", function(t) {
							n.processChunk(t);
						}), t.on("end", function() {
							n.end();
						}), t.on("error", function(t) {
							n.error(t);
						}), this;
					},
					pause: function() {
						return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
					},
					resume: function() {
						if (!this.isPaused || this.isFinished) return !1;
						var t = this.isPaused = !1;
						return this.generatedError && (this.error(this.generatedError), t = !0), this.previous && this.previous.resume(), !t;
					},
					flush: function() {},
					processChunk: function(t) {
						this.push(t);
					},
					withStreamInfo: function(t, n) {
						return this.extraStreamInfo[t] = n, this.mergeStreamInfo(), this;
					},
					mergeStreamInfo: function() {
						for (var t in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, t) && (this.streamInfo[t] = this.extraStreamInfo[t]);
					},
					lock: function() {
						if (this.isLocked) throw Error("The stream '" + this + "' has already been used.");
						this.isLocked = !0, this.previous && this.previous.lock();
					},
					toString: function() {
						var t = "Worker " + this.name;
						return this.previous ? this.previous + " -> " + t : t;
					}
				}, n.exports = a;
			}, {}],
			29: [function(t, n, i) {
				var a = t("../utils"), o = t("./ConvertWorker"), s = t("./GenericWorker"), c = t("../base64"), l = t("../support"), u = t("../external"), d = null;
				if (l.nodestream) try {
					d = t("../nodejs/NodejsStreamOutputAdapter");
				} catch {}
				function f(t, n) {
					return new u.Promise(function(i, o) {
						var s = [], l = t._internalType, u = t._outputType, d = t._mimeType;
						t.on("data", function(t, i) {
							s.push(t), n && n(i);
						}).on("error", function(t) {
							s = [], o(t);
						}).on("end", function() {
							try {
								var t = function(t, n, i) {
									switch (t) {
										case "blob": return a.newBlob(a.transformTo("arraybuffer", n), i);
										case "base64": return c.encode(n);
										default: return a.transformTo(t, n);
									}
								}(u, function(t, n) {
									var i, a = 0, o = null, s = 0;
									for (i = 0; i < n.length; i++) s += n[i].length;
									switch (t) {
										case "string": return n.join("");
										case "array": return Array.prototype.concat.apply([], n);
										case "uint8array":
											for (o = new Uint8Array(s), i = 0; i < n.length; i++) o.set(n[i], a), a += n[i].length;
											return o;
										case "nodebuffer": return Buffer.concat(n);
										default: throw Error("concat : unsupported type '" + t + "'");
									}
								}(l, s), d);
								i(t);
							} catch (t) {
								o(t);
							}
							s = [];
						}).resume();
					});
				}
				function p(t, n, i) {
					var c = n;
					switch (n) {
						case "blob":
						case "arraybuffer":
							c = "uint8array";
							break;
						case "base64": c = "string";
					}
					try {
						this._internalType = c, this._outputType = n, this._mimeType = i, a.checkSupport(c), this._worker = t.pipe(new o(c)), t.lock();
					} catch (t) {
						this._worker = new s("error"), this._worker.error(t);
					}
				}
				p.prototype = {
					accumulate: function(t) {
						return f(this, t);
					},
					on: function(t, n) {
						var i = this;
						return t === "data" ? this._worker.on(t, function(t) {
							n.call(i, t.data, t.meta);
						}) : this._worker.on(t, function() {
							a.delay(n, arguments, i);
						}), this;
					},
					resume: function() {
						return a.delay(this._worker.resume, [], this._worker), this;
					},
					pause: function() {
						return this._worker.pause(), this;
					},
					toNodejsStream: function(t) {
						if (a.checkSupport("nodestream"), this._outputType !== "nodebuffer") throw Error(this._outputType + " is not supported by this method");
						return new d(this, { objectMode: this._outputType !== "nodebuffer" }, t);
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
			30: [function(t, n, i) {
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
					i.nodestream = !!t("readable-stream").Readable;
				} catch {
					i.nodestream = !1;
				}
			}, { "readable-stream": 16 }],
			31: [function(t, n, i) {
				for (var a = t("./utils"), o = t("./support"), s = t("./nodejsUtils"), c = t("./stream/GenericWorker"), l = Array(256), u = 0; u < 256; u++) l[u] = 252 <= u ? 6 : 248 <= u ? 5 : 240 <= u ? 4 : 224 <= u ? 3 : 192 <= u ? 2 : 1;
				l[254] = l[254] = 1;
				function d() {
					c.call(this, "utf-8 decode"), this.leftOver = null;
				}
				function f() {
					c.call(this, "utf-8 encode");
				}
				i.utf8encode = function(t) {
					return o.nodebuffer ? s.newBufferFrom(t, "utf-8") : function(t) {
						var n, i, a, s, c, l = t.length, u = 0;
						for (s = 0; s < l; s++) (64512 & (i = t.charCodeAt(s))) == 55296 && s + 1 < l && (64512 & (a = t.charCodeAt(s + 1))) == 56320 && (i = 65536 + (i - 55296 << 10) + (a - 56320), s++), u += i < 128 ? 1 : i < 2048 ? 2 : i < 65536 ? 3 : 4;
						for (n = o.uint8array ? new Uint8Array(u) : Array(u), s = c = 0; c < u; s++) (64512 & (i = t.charCodeAt(s))) == 55296 && s + 1 < l && (64512 & (a = t.charCodeAt(s + 1))) == 56320 && (i = 65536 + (i - 55296 << 10) + (a - 56320), s++), i < 128 ? n[c++] = i : (i < 2048 ? n[c++] = 192 | i >>> 6 : (i < 65536 ? n[c++] = 224 | i >>> 12 : (n[c++] = 240 | i >>> 18, n[c++] = 128 | i >>> 12 & 63), n[c++] = 128 | i >>> 6 & 63), n[c++] = 128 | 63 & i);
						return n;
					}(t);
				}, i.utf8decode = function(t) {
					return o.nodebuffer ? a.transformTo("nodebuffer", t).toString("utf-8") : function(t) {
						var n, i, o, s, c = t.length, u = Array(2 * c);
						for (n = i = 0; n < c;) if ((o = t[n++]) < 128) u[i++] = o;
						else if (4 < (s = l[o])) u[i++] = 65533, n += s - 1;
						else {
							for (o &= s === 2 ? 31 : s === 3 ? 15 : 7; 1 < s && n < c;) o = o << 6 | 63 & t[n++], s--;
							1 < s ? u[i++] = 65533 : o < 65536 ? u[i++] = o : (o -= 65536, u[i++] = 55296 | o >> 10 & 1023, u[i++] = 56320 | 1023 & o);
						}
						return u.length !== i && (u.subarray ? u = u.subarray(0, i) : u.length = i), a.applyFromCharCode(u);
					}(t = a.transformTo(o.uint8array ? "uint8array" : "array", t));
				}, a.inherits(d, c), d.prototype.processChunk = function(t) {
					var n = a.transformTo(o.uint8array ? "uint8array" : "array", t.data);
					if (this.leftOver && this.leftOver.length) {
						if (o.uint8array) {
							var s = n;
							(n = new Uint8Array(s.length + this.leftOver.length)).set(this.leftOver, 0), n.set(s, this.leftOver.length);
						} else n = this.leftOver.concat(n);
						this.leftOver = null;
					}
					var c = function(t, n) {
						var i;
						for ((n ||= t.length) > t.length && (n = t.length), i = n - 1; 0 <= i && (192 & t[i]) == 128;) i--;
						return i < 0 || i === 0 ? n : i + l[t[i]] > n ? i : n;
					}(n), u = n;
					c !== n.length && (o.uint8array ? (u = n.subarray(0, c), this.leftOver = n.subarray(c, n.length)) : (u = n.slice(0, c), this.leftOver = n.slice(c, n.length))), this.push({
						data: i.utf8decode(u),
						meta: t.meta
					});
				}, d.prototype.flush = function() {
					this.leftOver && this.leftOver.length && (this.push({
						data: i.utf8decode(this.leftOver),
						meta: {}
					}), this.leftOver = null);
				}, i.Utf8DecodeWorker = d, a.inherits(f, c), f.prototype.processChunk = function(t) {
					this.push({
						data: i.utf8encode(t.data),
						meta: t.meta
					});
				}, i.Utf8EncodeWorker = f;
			}, {
				"./nodejsUtils": 14,
				"./stream/GenericWorker": 28,
				"./support": 30,
				"./utils": 32
			}],
			32: [function(t, n, i) {
				var a = t("./support"), o = t("./base64"), s = t("./nodejsUtils"), c = t("./external");
				function l(t) {
					return t;
				}
				function u(t, n) {
					for (var i = 0; i < t.length; ++i) n[i] = 255 & t.charCodeAt(i);
					return n;
				}
				t("setimmediate"), i.newBlob = function(t, n) {
					i.checkSupport("blob");
					try {
						return new Blob([t], { type: n });
					} catch {
						try {
							var a = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
							return a.append(t), a.getBlob(n);
						} catch {
							throw Error("Bug : can't construct the Blob.");
						}
					}
				};
				var d = {
					stringifyByChunk: function(t, n, i) {
						var a = [], o = 0, s = t.length;
						if (s <= i) return String.fromCharCode.apply(null, t);
						for (; o < s;) n === "array" || n === "nodebuffer" ? a.push(String.fromCharCode.apply(null, t.slice(o, Math.min(o + i, s)))) : a.push(String.fromCharCode.apply(null, t.subarray(o, Math.min(o + i, s)))), o += i;
						return a.join("");
					},
					stringifyByChar: function(t) {
						for (var n = "", i = 0; i < t.length; i++) n += String.fromCharCode(t[i]);
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
				function f(t) {
					var n = 65536, a = i.getTypeOf(t), o = !0;
					if (a === "uint8array" ? o = d.applyCanBeUsed.uint8array : a === "nodebuffer" && (o = d.applyCanBeUsed.nodebuffer), o) for (; 1 < n;) try {
						return d.stringifyByChunk(t, a, n);
					} catch {
						n = Math.floor(n / 2);
					}
					return d.stringifyByChar(t);
				}
				function p(t, n) {
					for (var i = 0; i < t.length; i++) n[i] = t[i];
					return n;
				}
				i.applyFromCharCode = f;
				var m = {};
				m.string = {
					string: l,
					array: function(t) {
						return u(t, Array(t.length));
					},
					arraybuffer: function(t) {
						return m.string.uint8array(t).buffer;
					},
					uint8array: function(t) {
						return u(t, new Uint8Array(t.length));
					},
					nodebuffer: function(t) {
						return u(t, s.allocBuffer(t.length));
					}
				}, m.array = {
					string: f,
					array: l,
					arraybuffer: function(t) {
						return new Uint8Array(t).buffer;
					},
					uint8array: function(t) {
						return new Uint8Array(t);
					},
					nodebuffer: function(t) {
						return s.newBufferFrom(t);
					}
				}, m.arraybuffer = {
					string: function(t) {
						return f(new Uint8Array(t));
					},
					array: function(t) {
						return p(new Uint8Array(t), Array(t.byteLength));
					},
					arraybuffer: l,
					uint8array: function(t) {
						return new Uint8Array(t);
					},
					nodebuffer: function(t) {
						return s.newBufferFrom(new Uint8Array(t));
					}
				}, m.uint8array = {
					string: f,
					array: function(t) {
						return p(t, Array(t.length));
					},
					arraybuffer: function(t) {
						return t.buffer;
					},
					uint8array: l,
					nodebuffer: function(t) {
						return s.newBufferFrom(t);
					}
				}, m.nodebuffer = {
					string: f,
					array: function(t) {
						return p(t, Array(t.length));
					},
					arraybuffer: function(t) {
						return m.nodebuffer.uint8array(t).buffer;
					},
					uint8array: function(t) {
						return p(t, new Uint8Array(t.length));
					},
					nodebuffer: l
				}, i.transformTo = function(t, n) {
					if (n ||= "", !t) return n;
					i.checkSupport(t);
					var a = i.getTypeOf(n);
					return m[a][t](n);
				}, i.resolve = function(t) {
					for (var n = t.split("/"), i = [], a = 0; a < n.length; a++) {
						var o = n[a];
						o === "." || o === "" && a !== 0 && a !== n.length - 1 || (o === ".." ? i.pop() : i.push(o));
					}
					return i.join("/");
				}, i.getTypeOf = function(t) {
					return typeof t == "string" ? "string" : Object.prototype.toString.call(t) === "[object Array]" ? "array" : a.nodebuffer && s.isBuffer(t) ? "nodebuffer" : a.uint8array && t instanceof Uint8Array ? "uint8array" : a.arraybuffer && t instanceof ArrayBuffer ? "arraybuffer" : void 0;
				}, i.checkSupport = function(t) {
					if (!a[t.toLowerCase()]) throw Error(t + " is not supported by this platform");
				}, i.MAX_VALUE_16BITS = 65535, i.MAX_VALUE_32BITS = -1, i.pretty = function(t) {
					var n, i, a = "";
					for (i = 0; i < (t || "").length; i++) a += "\\x" + ((n = t.charCodeAt(i)) < 16 ? "0" : "") + n.toString(16).toUpperCase();
					return a;
				}, i.delay = function(t, n, i) {
					setImmediate(function() {
						t.apply(i || null, n || []);
					});
				}, i.inherits = function(t, n) {
					function i() {}
					i.prototype = n.prototype, t.prototype = new i();
				}, i.extend = function() {
					var t, n, i = {};
					for (t = 0; t < arguments.length; t++) for (n in arguments[t]) Object.prototype.hasOwnProperty.call(arguments[t], n) && i[n] === void 0 && (i[n] = arguments[t][n]);
					return i;
				}, i.prepareContent = function(t, n, s, l, d) {
					return c.Promise.resolve(n).then(function(t) {
						return a.blob && (t instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(t)) !== -1) && typeof FileReader < "u" ? new c.Promise(function(n, i) {
							var a = new FileReader();
							a.onload = function(t) {
								n(t.target.result);
							}, a.onerror = function(t) {
								i(t.target.error);
							}, a.readAsArrayBuffer(t);
						}) : t;
					}).then(function(n) {
						var f = i.getTypeOf(n);
						return f ? (f === "arraybuffer" ? n = i.transformTo("uint8array", n) : f === "string" && (d ? n = o.decode(n) : s && !0 !== l && (n = function(t) {
							return u(t, a.uint8array ? new Uint8Array(t.length) : Array(t.length));
						}(n))), n) : c.Promise.reject(/* @__PURE__ */ Error("Can't read the data of '" + t + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
					});
				};
			}, {
				"./base64": 1,
				"./external": 6,
				"./nodejsUtils": 14,
				"./support": 30,
				setimmediate: 54
			}],
			33: [function(t, n, i) {
				var a = t("./reader/readerFor"), o = t("./utils"), s = t("./signature"), c = t("./zipEntry"), l = t("./support");
				function u(t) {
					this.files = [], this.loadOptions = t;
				}
				u.prototype = {
					checkSignature: function(t) {
						if (!this.reader.readAndCheckSignature(t)) {
							this.reader.index -= 4;
							var n = this.reader.readString(4);
							throw Error("Corrupted zip or bug: unexpected signature (" + o.pretty(n) + ", expected " + o.pretty(t) + ")");
						}
					},
					isSignature: function(t, n) {
						var i = this.reader.index;
						this.reader.setIndex(t);
						var a = this.reader.readString(4) === n;
						return this.reader.setIndex(i), a;
					},
					readBlockEndOfCentral: function() {
						this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
						var t = this.reader.readData(this.zipCommentLength), n = l.uint8array ? "uint8array" : "array", i = o.transformTo(n, t);
						this.zipComment = this.loadOptions.decodeFileName(i);
					},
					readBlockZip64EndOfCentral: function() {
						this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
						for (var t, n, i, a = this.zip64EndOfCentralSize - 44; 0 < a;) t = this.reader.readInt(2), n = this.reader.readInt(4), i = this.reader.readData(n), this.zip64ExtensibleData[t] = {
							id: t,
							length: n,
							value: i
						};
					},
					readBlockZip64EndOfCentralLocator: function() {
						if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw Error("Multi-volumes zip are not supported");
					},
					readLocalFiles: function() {
						var t, n;
						for (t = 0; t < this.files.length; t++) n = this.files[t], this.reader.setIndex(n.localHeaderOffset), this.checkSignature(s.LOCAL_FILE_HEADER), n.readLocalPart(this.reader), n.handleUTF8(), n.processAttributes();
					},
					readCentralDir: function() {
						var t;
						for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);) (t = new c({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(t);
						if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0) throw Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
					},
					readEndOfCentral: function() {
						var t = this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);
						if (t < 0) throw this.isSignature(0, s.LOCAL_FILE_HEADER) ? /* @__PURE__ */ Error("Corrupted zip: can't find end of central directory") : /* @__PURE__ */ Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
						this.reader.setIndex(t);
						var n = t;
						if (this.checkSignature(s.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === o.MAX_VALUE_16BITS || this.diskWithCentralDirStart === o.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === o.MAX_VALUE_16BITS || this.centralDirRecords === o.MAX_VALUE_16BITS || this.centralDirSize === o.MAX_VALUE_32BITS || this.centralDirOffset === o.MAX_VALUE_32BITS) {
							if (this.zip64 = !0, (t = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
							if (this.reader.setIndex(t), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, s.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw Error("Corrupted zip: can't find the ZIP64 end of central directory");
							this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
						}
						var i = this.centralDirOffset + this.centralDirSize;
						this.zip64 && (i += 20, i += 12 + this.zip64EndOfCentralSize);
						var a = n - i;
						if (0 < a) this.isSignature(n, s.CENTRAL_FILE_HEADER) || (this.reader.zero = a);
						else if (a < 0) throw Error("Corrupted zip: missing " + Math.abs(a) + " bytes.");
					},
					prepareReader: function(t) {
						this.reader = a(t);
					},
					load: function(t) {
						this.prepareReader(t), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
					}
				}, n.exports = u;
			}, {
				"./reader/readerFor": 22,
				"./signature": 23,
				"./support": 30,
				"./utils": 32,
				"./zipEntry": 34
			}],
			34: [function(t, n, i) {
				var a = t("./reader/readerFor"), o = t("./utils"), s = t("./compressedObject"), c = t("./crc32"), l = t("./utf8"), u = t("./compressions"), d = t("./support");
				function f(t, n) {
					this.options = t, this.loadOptions = n;
				}
				f.prototype = {
					isEncrypted: function() {
						return (1 & this.bitFlag) == 1;
					},
					useUTF8: function() {
						return (2048 & this.bitFlag) == 2048;
					},
					readLocalPart: function(t) {
						var n, i;
						if (t.skip(22), this.fileNameLength = t.readInt(2), i = t.readInt(2), this.fileName = t.readData(this.fileNameLength), t.skip(i), this.compressedSize === -1 || this.uncompressedSize === -1) throw Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
						if ((n = function(t) {
							for (var n in u) if (Object.prototype.hasOwnProperty.call(u, n) && u[n].magic === t) return u[n];
							return null;
						}(this.compressionMethod)) === null) throw Error("Corrupted zip : compression " + o.pretty(this.compressionMethod) + " unknown (inner file : " + o.transformTo("string", this.fileName) + ")");
						this.decompressed = new s(this.compressedSize, this.uncompressedSize, this.crc32, n, t.readData(this.compressedSize));
					},
					readCentralPart: function(t) {
						this.versionMadeBy = t.readInt(2), t.skip(2), this.bitFlag = t.readInt(2), this.compressionMethod = t.readString(2), this.date = t.readDate(), this.crc32 = t.readInt(4), this.compressedSize = t.readInt(4), this.uncompressedSize = t.readInt(4);
						var n = t.readInt(2);
						if (this.extraFieldsLength = t.readInt(2), this.fileCommentLength = t.readInt(2), this.diskNumberStart = t.readInt(2), this.internalFileAttributes = t.readInt(2), this.externalFileAttributes = t.readInt(4), this.localHeaderOffset = t.readInt(4), this.isEncrypted()) throw Error("Encrypted zip are not supported");
						t.skip(n), this.readExtraFields(t), this.parseZIP64ExtraField(t), this.fileComment = t.readData(this.fileCommentLength);
					},
					processAttributes: function() {
						this.unixPermissions = null, this.dosPermissions = null;
						var t = this.versionMadeBy >> 8;
						this.dir = !!(16 & this.externalFileAttributes), t == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), t == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0);
					},
					parseZIP64ExtraField: function() {
						if (this.extraFields[1]) {
							var t = a(this.extraFields[1].value);
							this.uncompressedSize === o.MAX_VALUE_32BITS && (this.uncompressedSize = t.readInt(8)), this.compressedSize === o.MAX_VALUE_32BITS && (this.compressedSize = t.readInt(8)), this.localHeaderOffset === o.MAX_VALUE_32BITS && (this.localHeaderOffset = t.readInt(8)), this.diskNumberStart === o.MAX_VALUE_32BITS && (this.diskNumberStart = t.readInt(4));
						}
					},
					readExtraFields: function(t) {
						var n, i, a, o = t.index + this.extraFieldsLength;
						for (this.extraFields ||= {}; t.index + 4 < o;) n = t.readInt(2), i = t.readInt(2), a = t.readData(i), this.extraFields[n] = {
							id: n,
							length: i,
							value: a
						};
						t.setIndex(o);
					},
					handleUTF8: function() {
						var t = d.uint8array ? "uint8array" : "array";
						if (this.useUTF8()) this.fileNameStr = l.utf8decode(this.fileName), this.fileCommentStr = l.utf8decode(this.fileComment);
						else {
							var n = this.findExtraFieldUnicodePath();
							if (n !== null) this.fileNameStr = n;
							else {
								var i = o.transformTo(t, this.fileName);
								this.fileNameStr = this.loadOptions.decodeFileName(i);
							}
							var a = this.findExtraFieldUnicodeComment();
							if (a !== null) this.fileCommentStr = a;
							else {
								var s = o.transformTo(t, this.fileComment);
								this.fileCommentStr = this.loadOptions.decodeFileName(s);
							}
						}
					},
					findExtraFieldUnicodePath: function() {
						var t = this.extraFields[28789];
						if (t) {
							var n = a(t.value);
							return n.readInt(1) === 1 && c(this.fileName) === n.readInt(4) ? l.utf8decode(n.readData(t.length - 5)) : null;
						}
						return null;
					},
					findExtraFieldUnicodeComment: function() {
						var t = this.extraFields[25461];
						if (t) {
							var n = a(t.value);
							return n.readInt(1) === 1 && c(this.fileComment) === n.readInt(4) ? l.utf8decode(n.readData(t.length - 5)) : null;
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
			35: [function(t, n, i) {
				function a(t, n, i) {
					this.name = t, this.dir = i.dir, this.date = i.date, this.comment = i.comment, this.unixPermissions = i.unixPermissions, this.dosPermissions = i.dosPermissions, this._data = n, this._dataBinary = i.binary, this.options = {
						compression: i.compression,
						compressionOptions: i.compressionOptions
					};
				}
				var o = t("./stream/StreamHelper"), s = t("./stream/DataWorker"), c = t("./utf8"), l = t("./compressedObject"), u = t("./stream/GenericWorker");
				a.prototype = {
					internalStream: function(t) {
						var n = null, i = "string";
						try {
							if (!t) throw Error("No output type specified.");
							var a = (i = t.toLowerCase()) === "string" || i === "text";
							i !== "binarystring" && i !== "text" || (i = "string"), n = this._decompressWorker();
							var s = !this._dataBinary;
							s && !a && (n = n.pipe(new c.Utf8EncodeWorker())), !s && a && (n = n.pipe(new c.Utf8DecodeWorker()));
						} catch (t) {
							(n = new u("error")).error(t);
						}
						return new o(n, i, "");
					},
					async: function(t, n) {
						return this.internalStream(t).accumulate(n);
					},
					nodeStream: function(t, n) {
						return this.internalStream(t || "nodebuffer").toNodejsStream(n);
					},
					_compressWorker: function(t, n) {
						if (this._data instanceof l && this._data.compression.magic === t.magic) return this._data.getCompressedWorker();
						var i = this._decompressWorker();
						return this._dataBinary || (i = i.pipe(new c.Utf8EncodeWorker())), l.createWorkerFrom(i, t, n);
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
			36: [function(t, n, i) {
				(function(t) {
					var i, a, o = t.MutationObserver || t.WebKitMutationObserver;
					if (o) {
						var s = 0, c = new o(f), l = t.document.createTextNode("");
						c.observe(l, { characterData: !0 }), i = function() {
							l.data = s = ++s % 2;
						};
					} else if (t.setImmediate || t.MessageChannel === void 0) i = "document" in t && "onreadystatechange" in t.document.createElement("script") ? function() {
						var n = t.document.createElement("script");
						n.onreadystatechange = function() {
							f(), n.onreadystatechange = null, n.parentNode.removeChild(n), n = null;
						}, t.document.documentElement.appendChild(n);
					} : function() {
						setTimeout(f, 0);
					};
					else {
						var u = new t.MessageChannel();
						u.port1.onmessage = f, i = function() {
							u.port2.postMessage(0);
						};
					}
					var d = [];
					function f() {
						var t, n;
						a = !0;
						for (var i = d.length; i;) {
							for (n = d, d = [], t = -1; ++t < i;) n[t]();
							i = d.length;
						}
						a = !1;
					}
					n.exports = function(t) {
						d.push(t) !== 1 || a || i();
					};
				}).call(this, typeof global < "u" ? global : typeof self < "u" ? self : typeof window < "u" ? window : {});
			}, {}],
			37: [function(t, n, i) {
				var a = t("immediate");
				function o() {}
				var s = {}, c = ["REJECTED"], l = ["FULFILLED"], u = ["PENDING"];
				function d(t) {
					if (typeof t != "function") throw TypeError("resolver must be a function");
					this.state = u, this.queue = [], this.outcome = void 0, t !== o && h(this, t);
				}
				function f(t, n, i) {
					this.promise = t, typeof n == "function" && (this.onFulfilled = n, this.callFulfilled = this.otherCallFulfilled), typeof i == "function" && (this.onRejected = i, this.callRejected = this.otherCallRejected);
				}
				function p(t, n, i) {
					a(function() {
						var a;
						try {
							a = n(i);
						} catch (n) {
							return s.reject(t, n);
						}
						a === t ? s.reject(t, /* @__PURE__ */ TypeError("Cannot resolve promise with itself")) : s.resolve(t, a);
					});
				}
				function m(t) {
					var n = t && t.then;
					if (t && (typeof t == "object" || typeof t == "function") && typeof n == "function") return function() {
						n.apply(t, arguments);
					};
				}
				function h(t, n) {
					var i = !1;
					function a(n) {
						i || (i = !0, s.reject(t, n));
					}
					function o(n) {
						i || (i = !0, s.resolve(t, n));
					}
					var c = g(function() {
						n(o, a);
					});
					c.status === "error" && a(c.value);
				}
				function g(t, n) {
					var i = {};
					try {
						i.value = t(n), i.status = "success";
					} catch (t) {
						i.status = "error", i.value = t;
					}
					return i;
				}
				(n.exports = d).prototype.finally = function(t) {
					if (typeof t != "function") return this;
					var n = this.constructor;
					return this.then(function(i) {
						return n.resolve(t()).then(function() {
							return i;
						});
					}, function(i) {
						return n.resolve(t()).then(function() {
							throw i;
						});
					});
				}, d.prototype.catch = function(t) {
					return this.then(null, t);
				}, d.prototype.then = function(t, n) {
					if (typeof t != "function" && this.state === l || typeof n != "function" && this.state === c) return this;
					var i = new this.constructor(o);
					return this.state === u ? this.queue.push(new f(i, t, n)) : p(i, this.state === l ? t : n, this.outcome), i;
				}, f.prototype.callFulfilled = function(t) {
					s.resolve(this.promise, t);
				}, f.prototype.otherCallFulfilled = function(t) {
					p(this.promise, this.onFulfilled, t);
				}, f.prototype.callRejected = function(t) {
					s.reject(this.promise, t);
				}, f.prototype.otherCallRejected = function(t) {
					p(this.promise, this.onRejected, t);
				}, s.resolve = function(t, n) {
					var i = g(m, n);
					if (i.status === "error") return s.reject(t, i.value);
					var a = i.value;
					if (a) h(t, a);
					else {
						t.state = l, t.outcome = n;
						for (var o = -1, c = t.queue.length; ++o < c;) t.queue[o].callFulfilled(n);
					}
					return t;
				}, s.reject = function(t, n) {
					t.state = c, t.outcome = n;
					for (var i = -1, a = t.queue.length; ++i < a;) t.queue[i].callRejected(n);
					return t;
				}, d.resolve = function(t) {
					return t instanceof this ? t : s.resolve(new this(o), t);
				}, d.reject = function(t) {
					var n = new this(o);
					return s.reject(n, t);
				}, d.all = function(t) {
					var n = this;
					if (Object.prototype.toString.call(t) !== "[object Array]") return this.reject(/* @__PURE__ */ TypeError("must be an array"));
					var i = t.length, a = !1;
					if (!i) return this.resolve([]);
					for (var c = Array(i), l = 0, u = -1, d = new this(o); ++u < i;) f(t[u], u);
					return d;
					function f(t, o) {
						n.resolve(t).then(function(t) {
							c[o] = t, ++l !== i || a || (a = !0, s.resolve(d, c));
						}, function(t) {
							a || (a = !0, s.reject(d, t));
						});
					}
				}, d.race = function(t) {
					var n = this;
					if (Object.prototype.toString.call(t) !== "[object Array]") return this.reject(/* @__PURE__ */ TypeError("must be an array"));
					var i = t.length, a = !1;
					if (!i) return this.resolve([]);
					for (var c = -1, l = new this(o); ++c < i;) u = t[c], n.resolve(u).then(function(t) {
						a || (a = !0, s.resolve(l, t));
					}, function(t) {
						a || (a = !0, s.reject(l, t));
					});
					var u;
					return l;
				};
			}, { immediate: 36 }],
			38: [function(t, n, i) {
				var a = {};
				(0, t("./lib/utils/common").assign)(a, t("./lib/deflate"), t("./lib/inflate"), t("./lib/zlib/constants")), n.exports = a;
			}, {
				"./lib/deflate": 39,
				"./lib/inflate": 40,
				"./lib/utils/common": 41,
				"./lib/zlib/constants": 44
			}],
			39: [function(t, n, i) {
				var a = t("./zlib/deflate"), o = t("./utils/common"), s = t("./utils/strings"), c = t("./zlib/messages"), l = t("./zlib/zstream"), u = Object.prototype.toString, d = 0, f = -1, p = 0, m = 8;
				function h(t) {
					if (!(this instanceof h)) return new h(t);
					this.options = o.assign({
						level: f,
						method: m,
						chunkSize: 16384,
						windowBits: 15,
						memLevel: 8,
						strategy: p,
						to: ""
					}, t || {});
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
				function g(t, n) {
					var i = new h(n);
					if (i.push(t, !0), i.err) throw i.msg || c[i.err];
					return i.result;
				}
				h.prototype.push = function(t, n) {
					var i, c, l = this.strm, f = this.options.chunkSize;
					if (this.ended) return !1;
					c = n === ~~n ? n : !0 === n ? 4 : 0, typeof t == "string" ? l.input = s.string2buf(t) : u.call(t) === "[object ArrayBuffer]" ? l.input = new Uint8Array(t) : l.input = t, l.next_in = 0, l.avail_in = l.input.length;
					do {
						if (l.avail_out === 0 && (l.output = new o.Buf8(f), l.next_out = 0, l.avail_out = f), (i = a.deflate(l, c)) !== 1 && i !== d) return this.onEnd(i), !(this.ended = !0);
						l.avail_out !== 0 && (l.avail_in !== 0 || c !== 4 && c !== 2) || (this.options.to === "string" ? this.onData(s.buf2binstring(o.shrinkBuf(l.output, l.next_out))) : this.onData(o.shrinkBuf(l.output, l.next_out)));
					} while ((0 < l.avail_in || l.avail_out === 0) && i !== 1);
					return c === 4 ? (i = a.deflateEnd(this.strm), this.onEnd(i), this.ended = !0, i === d) : c !== 2 || (this.onEnd(d), !(l.avail_out = 0));
				}, h.prototype.onData = function(t) {
					this.chunks.push(t);
				}, h.prototype.onEnd = function(t) {
					t === d && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg;
				}, i.Deflate = h, i.deflate = g, i.deflateRaw = function(t, n) {
					return (n ||= {}).raw = !0, g(t, n);
				}, i.gzip = function(t, n) {
					return (n ||= {}).gzip = !0, g(t, n);
				};
			}, {
				"./utils/common": 41,
				"./utils/strings": 42,
				"./zlib/deflate": 46,
				"./zlib/messages": 51,
				"./zlib/zstream": 53
			}],
			40: [function(t, n, i) {
				var a = t("./zlib/inflate"), o = t("./utils/common"), s = t("./utils/strings"), c = t("./zlib/constants"), l = t("./zlib/messages"), u = t("./zlib/zstream"), d = t("./zlib/gzheader"), f = Object.prototype.toString;
				function p(t) {
					if (!(this instanceof p)) return new p(t);
					this.options = o.assign({
						chunkSize: 16384,
						windowBits: 0,
						to: ""
					}, t || {});
					var n = this.options;
					n.raw && 0 <= n.windowBits && n.windowBits < 16 && (n.windowBits = -n.windowBits, n.windowBits === 0 && (n.windowBits = -15)), !(0 <= n.windowBits && n.windowBits < 16) || t && t.windowBits || (n.windowBits += 32), 15 < n.windowBits && n.windowBits < 48 && !(15 & n.windowBits) && (n.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new u(), this.strm.avail_out = 0;
					var i = a.inflateInit2(this.strm, n.windowBits);
					if (i !== c.Z_OK) throw Error(l[i]);
					this.header = new d(), a.inflateGetHeader(this.strm, this.header);
				}
				function m(t, n) {
					var i = new p(n);
					if (i.push(t, !0), i.err) throw i.msg || l[i.err];
					return i.result;
				}
				p.prototype.push = function(t, n) {
					var i, l, u, d, p, m, h = this.strm, g = this.options.chunkSize, _ = this.options.dictionary, v = !1;
					if (this.ended) return !1;
					l = n === ~~n ? n : !0 === n ? c.Z_FINISH : c.Z_NO_FLUSH, typeof t == "string" ? h.input = s.binstring2buf(t) : f.call(t) === "[object ArrayBuffer]" ? h.input = new Uint8Array(t) : h.input = t, h.next_in = 0, h.avail_in = h.input.length;
					do {
						if (h.avail_out === 0 && (h.output = new o.Buf8(g), h.next_out = 0, h.avail_out = g), (i = a.inflate(h, c.Z_NO_FLUSH)) === c.Z_NEED_DICT && _ && (m = typeof _ == "string" ? s.string2buf(_) : f.call(_) === "[object ArrayBuffer]" ? new Uint8Array(_) : _, i = a.inflateSetDictionary(this.strm, m)), i === c.Z_BUF_ERROR && !0 === v && (i = c.Z_OK, v = !1), i !== c.Z_STREAM_END && i !== c.Z_OK) return this.onEnd(i), !(this.ended = !0);
						h.next_out && (h.avail_out !== 0 && i !== c.Z_STREAM_END && (h.avail_in !== 0 || l !== c.Z_FINISH && l !== c.Z_SYNC_FLUSH) || (this.options.to === "string" ? (u = s.utf8border(h.output, h.next_out), d = h.next_out - u, p = s.buf2string(h.output, u), h.next_out = d, h.avail_out = g - d, d && o.arraySet(h.output, h.output, u, d, 0), this.onData(p)) : this.onData(o.shrinkBuf(h.output, h.next_out)))), h.avail_in === 0 && h.avail_out === 0 && (v = !0);
					} while ((0 < h.avail_in || h.avail_out === 0) && i !== c.Z_STREAM_END);
					return i === c.Z_STREAM_END && (l = c.Z_FINISH), l === c.Z_FINISH ? (i = a.inflateEnd(this.strm), this.onEnd(i), this.ended = !0, i === c.Z_OK) : l !== c.Z_SYNC_FLUSH || (this.onEnd(c.Z_OK), !(h.avail_out = 0));
				}, p.prototype.onData = function(t) {
					this.chunks.push(t);
				}, p.prototype.onEnd = function(t) {
					t === c.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg;
				}, i.Inflate = p, i.inflate = m, i.inflateRaw = function(t, n) {
					return (n ||= {}).raw = !0, m(t, n);
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
			41: [function(t, n, i) {
				var a = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
				i.assign = function(t) {
					for (var n = Array.prototype.slice.call(arguments, 1); n.length;) {
						var i = n.shift();
						if (i) {
							if (typeof i != "object") throw TypeError(i + "must be non-object");
							for (var a in i) i.hasOwnProperty(a) && (t[a] = i[a]);
						}
					}
					return t;
				}, i.shrinkBuf = function(t, n) {
					return t.length === n ? t : t.subarray ? t.subarray(0, n) : (t.length = n, t);
				};
				var o = {
					arraySet: function(t, n, i, a, o) {
						if (n.subarray && t.subarray) t.set(n.subarray(i, i + a), o);
						else for (var s = 0; s < a; s++) t[o + s] = n[i + s];
					},
					flattenChunks: function(t) {
						var n, i, a, o, s, c;
						for (n = a = 0, i = t.length; n < i; n++) a += t[n].length;
						for (c = new Uint8Array(a), n = o = 0, i = t.length; n < i; n++) s = t[n], c.set(s, o), o += s.length;
						return c;
					}
				}, s = {
					arraySet: function(t, n, i, a, o) {
						for (var s = 0; s < a; s++) t[o + s] = n[i + s];
					},
					flattenChunks: function(t) {
						return [].concat.apply([], t);
					}
				};
				i.setTyped = function(t) {
					t ? (i.Buf8 = Uint8Array, i.Buf16 = Uint16Array, i.Buf32 = Int32Array, i.assign(i, o)) : (i.Buf8 = Array, i.Buf16 = Array, i.Buf32 = Array, i.assign(i, s));
				}, i.setTyped(a);
			}, {}],
			42: [function(t, n, i) {
				var a = t("./common"), o = !0, s = !0;
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
				function u(t, n) {
					if (n < 65537 && (t.subarray && s || !t.subarray && o)) return String.fromCharCode.apply(null, a.shrinkBuf(t, n));
					for (var i = "", c = 0; c < n; c++) i += String.fromCharCode(t[c]);
					return i;
				}
				c[254] = c[254] = 1, i.string2buf = function(t) {
					var n, i, o, s, c, l = t.length, u = 0;
					for (s = 0; s < l; s++) (64512 & (i = t.charCodeAt(s))) == 55296 && s + 1 < l && (64512 & (o = t.charCodeAt(s + 1))) == 56320 && (i = 65536 + (i - 55296 << 10) + (o - 56320), s++), u += i < 128 ? 1 : i < 2048 ? 2 : i < 65536 ? 3 : 4;
					for (n = new a.Buf8(u), s = c = 0; c < u; s++) (64512 & (i = t.charCodeAt(s))) == 55296 && s + 1 < l && (64512 & (o = t.charCodeAt(s + 1))) == 56320 && (i = 65536 + (i - 55296 << 10) + (o - 56320), s++), i < 128 ? n[c++] = i : (i < 2048 ? n[c++] = 192 | i >>> 6 : (i < 65536 ? n[c++] = 224 | i >>> 12 : (n[c++] = 240 | i >>> 18, n[c++] = 128 | i >>> 12 & 63), n[c++] = 128 | i >>> 6 & 63), n[c++] = 128 | 63 & i);
					return n;
				}, i.buf2binstring = function(t) {
					return u(t, t.length);
				}, i.binstring2buf = function(t) {
					for (var n = new a.Buf8(t.length), i = 0, o = n.length; i < o; i++) n[i] = t.charCodeAt(i);
					return n;
				}, i.buf2string = function(t, n) {
					var i, a, o, s, l = n || t.length, d = Array(2 * l);
					for (i = a = 0; i < l;) if ((o = t[i++]) < 128) d[a++] = o;
					else if (4 < (s = c[o])) d[a++] = 65533, i += s - 1;
					else {
						for (o &= s === 2 ? 31 : s === 3 ? 15 : 7; 1 < s && i < l;) o = o << 6 | 63 & t[i++], s--;
						1 < s ? d[a++] = 65533 : o < 65536 ? d[a++] = o : (o -= 65536, d[a++] = 55296 | o >> 10 & 1023, d[a++] = 56320 | 1023 & o);
					}
					return u(d, a);
				}, i.utf8border = function(t, n) {
					var i;
					for ((n ||= t.length) > t.length && (n = t.length), i = n - 1; 0 <= i && (192 & t[i]) == 128;) i--;
					return i < 0 || i === 0 ? n : i + c[t[i]] > n ? i : n;
				};
			}, { "./common": 41 }],
			43: [function(t, n, i) {
				n.exports = function(t, n, i, a) {
					for (var o = 65535 & t | 0, s = t >>> 16 & 65535 | 0, c = 0; i !== 0;) {
						for (i -= c = 2e3 < i ? 2e3 : i; s = s + (o = o + n[a++] | 0) | 0, --c;);
						o %= 65521, s %= 65521;
					}
					return o | s << 16 | 0;
				};
			}, {}],
			44: [function(t, n, i) {
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
			45: [function(t, n, i) {
				var a = function() {
					for (var t, n = [], i = 0; i < 256; i++) {
						t = i;
						for (var a = 0; a < 8; a++) t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
						n[i] = t;
					}
					return n;
				}();
				n.exports = function(t, n, i, o) {
					var s = a, c = o + i;
					t ^= -1;
					for (var l = o; l < c; l++) t = t >>> 8 ^ s[255 & (t ^ n[l])];
					return -1 ^ t;
				};
			}, {}],
			46: [function(t, n, i) {
				var a, o = t("../utils/common"), s = t("./trees"), c = t("./adler32"), l = t("./crc32"), u = t("./messages"), d = 0, f = 4, p = 0, m = -2, h = -1, g = 4, _ = 2, v = 8, y = 9, b = 286, x = 30, S = 19, C = 2 * b + 1, w = 15, T = 3, E = 258, D = E + T + 1, O = 42, k = 113, A = 1, j = 2, M = 3, N = 4;
				function P(t, n) {
					return t.msg = u[n], n;
				}
				function F(t) {
					return (t << 1) - (4 < t ? 9 : 0);
				}
				function I(t) {
					for (var n = t.length; 0 <= --n;) t[n] = 0;
				}
				function L(t) {
					var n = t.state, i = n.pending;
					i > t.avail_out && (i = t.avail_out), i !== 0 && (o.arraySet(t.output, n.pending_buf, n.pending_out, i, t.next_out), t.next_out += i, n.pending_out += i, t.total_out += i, t.avail_out -= i, n.pending -= i, n.pending === 0 && (n.pending_out = 0));
				}
				function R(t, n) {
					s._tr_flush_block(t, 0 <= t.block_start ? t.block_start : -1, t.strstart - t.block_start, n), t.block_start = t.strstart, L(t.strm);
				}
				function z(t, n) {
					t.pending_buf[t.pending++] = n;
				}
				function B(t, n) {
					t.pending_buf[t.pending++] = n >>> 8 & 255, t.pending_buf[t.pending++] = 255 & n;
				}
				function V(t, n) {
					var i, a, o = t.max_chain_length, s = t.strstart, c = t.prev_length, l = t.nice_match, u = t.strstart > t.w_size - D ? t.strstart - (t.w_size - D) : 0, d = t.window, f = t.w_mask, p = t.prev, m = t.strstart + E, h = d[s + c - 1], g = d[s + c];
					t.prev_length >= t.good_match && (o >>= 2), l > t.lookahead && (l = t.lookahead);
					do
						if (d[(i = n) + c] === g && d[i + c - 1] === h && d[i] === d[s] && d[++i] === d[s + 1]) {
							s += 2, i++;
							do							;
while (d[++s] === d[++i] && d[++s] === d[++i] && d[++s] === d[++i] && d[++s] === d[++i] && d[++s] === d[++i] && d[++s] === d[++i] && d[++s] === d[++i] && d[++s] === d[++i] && s < m);
							if (a = E - (m - s), s = m - E, c < a) {
								if (t.match_start = n, l <= (c = a)) break;
								h = d[s + c - 1], g = d[s + c];
							}
						}
					while ((n = p[n & f]) > u && --o != 0);
					return c <= t.lookahead ? c : t.lookahead;
				}
				function H(t) {
					var n, i, a, s, u, d, f, p, m, h, g = t.w_size;
					do {
						if (s = t.window_size - t.lookahead - t.strstart, t.strstart >= g + (g - D)) {
							for (o.arraySet(t.window, t.window, g, g, 0), t.match_start -= g, t.strstart -= g, t.block_start -= g, n = i = t.hash_size; a = t.head[--n], t.head[n] = g <= a ? a - g : 0, --i;);
							for (n = i = g; a = t.prev[--n], t.prev[n] = g <= a ? a - g : 0, --i;);
							s += g;
						}
						if (t.strm.avail_in === 0) break;
						if (d = t.strm, f = t.window, p = t.strstart + t.lookahead, m = s, h = void 0, h = d.avail_in, m < h && (h = m), i = h === 0 ? 0 : (d.avail_in -= h, o.arraySet(f, d.input, d.next_in, h, p), d.state.wrap === 1 ? d.adler = c(d.adler, f, h, p) : d.state.wrap === 2 && (d.adler = l(d.adler, f, h, p)), d.next_in += h, d.total_in += h, h), t.lookahead += i, t.lookahead + t.insert >= T) for (u = t.strstart - t.insert, t.ins_h = t.window[u], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[u + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[u + T - 1]) & t.hash_mask, t.prev[u & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = u, u++, t.insert--, !(t.lookahead + t.insert < T)););
					} while (t.lookahead < D && t.strm.avail_in !== 0);
				}
				function U(t, n) {
					for (var i, a;;) {
						if (t.lookahead < D) {
							if (H(t), t.lookahead < D && n === d) return A;
							if (t.lookahead === 0) break;
						}
						if (i = 0, t.lookahead >= T && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + T - 1]) & t.hash_mask, i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), i !== 0 && t.strstart - i <= t.w_size - D && (t.match_length = V(t, i)), t.match_length >= T) if (a = s._tr_tally(t, t.strstart - t.match_start, t.match_length - T), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= T) {
							for (t.match_length--; t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + T - 1]) & t.hash_mask, i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart, --t.match_length != 0;);
							t.strstart++;
						} else t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
						else a = s._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
						if (a && (R(t, !1), t.strm.avail_out === 0)) return A;
					}
					return t.insert = t.strstart < T - 1 ? t.strstart : T - 1, n === f ? (R(t, !0), t.strm.avail_out === 0 ? M : N) : t.last_lit && (R(t, !1), t.strm.avail_out === 0) ? A : j;
				}
				function W(t, n) {
					for (var i, a, o;;) {
						if (t.lookahead < D) {
							if (H(t), t.lookahead < D && n === d) return A;
							if (t.lookahead === 0) break;
						}
						if (i = 0, t.lookahead >= T && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + T - 1]) & t.hash_mask, i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = T - 1, i !== 0 && t.prev_length < t.max_lazy_match && t.strstart - i <= t.w_size - D && (t.match_length = V(t, i), t.match_length <= 5 && (t.strategy === 1 || t.match_length === T && 4096 < t.strstart - t.match_start) && (t.match_length = T - 1)), t.prev_length >= T && t.match_length <= t.prev_length) {
							for (o = t.strstart + t.lookahead - T, a = s._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - T), t.lookahead -= t.prev_length - 1, t.prev_length -= 2; ++t.strstart <= o && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + T - 1]) & t.hash_mask, i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), --t.prev_length != 0;);
							if (t.match_available = 0, t.match_length = T - 1, t.strstart++, a && (R(t, !1), t.strm.avail_out === 0)) return A;
						} else if (t.match_available) {
							if ((a = s._tr_tally(t, 0, t.window[t.strstart - 1])) && R(t, !1), t.strstart++, t.lookahead--, t.strm.avail_out === 0) return A;
						} else t.match_available = 1, t.strstart++, t.lookahead--;
					}
					return t.match_available &&= (a = s._tr_tally(t, 0, t.window[t.strstart - 1]), 0), t.insert = t.strstart < T - 1 ? t.strstart : T - 1, n === f ? (R(t, !0), t.strm.avail_out === 0 ? M : N) : t.last_lit && (R(t, !1), t.strm.avail_out === 0) ? A : j;
				}
				function G(t, n, i, a, o) {
					this.good_length = t, this.max_lazy = n, this.nice_length = i, this.max_chain = a, this.func = o;
				}
				function K() {
					this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = v, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new o.Buf16(2 * C), this.dyn_dtree = new o.Buf16(2 * (2 * x + 1)), this.bl_tree = new o.Buf16(2 * (2 * S + 1)), I(this.dyn_ltree), I(this.dyn_dtree), I(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new o.Buf16(w + 1), this.heap = new o.Buf16(2 * b + 1), I(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new o.Buf16(2 * b + 1), I(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
				}
				function q(t) {
					var n;
					return t && t.state ? (t.total_in = t.total_out = 0, t.data_type = _, (n = t.state).pending = 0, n.pending_out = 0, n.wrap < 0 && (n.wrap = -n.wrap), n.status = n.wrap ? O : k, t.adler = n.wrap === 2 ? 0 : 1, n.last_flush = d, s._tr_init(n), p) : P(t, m);
				}
				function J(t) {
					var n = q(t);
					return n === p && function(t) {
						t.window_size = 2 * t.w_size, I(t.head), t.max_lazy_match = a[t.level].max_lazy, t.good_match = a[t.level].good_length, t.nice_match = a[t.level].nice_length, t.max_chain_length = a[t.level].max_chain, t.strstart = 0, t.block_start = 0, t.lookahead = 0, t.insert = 0, t.match_length = t.prev_length = T - 1, t.match_available = 0, t.ins_h = 0;
					}(t.state), n;
				}
				function Y(t, n, i, a, s, c) {
					if (!t) return m;
					var l = 1;
					if (n === h && (n = 6), a < 0 ? (l = 0, a = -a) : 15 < a && (l = 2, a -= 16), s < 1 || y < s || i !== v || a < 8 || 15 < a || n < 0 || 9 < n || c < 0 || g < c) return P(t, m);
					a === 8 && (a = 9);
					var u = new K();
					return (t.state = u).strm = t, u.wrap = l, u.gzhead = null, u.w_bits = a, u.w_size = 1 << u.w_bits, u.w_mask = u.w_size - 1, u.hash_bits = s + 7, u.hash_size = 1 << u.hash_bits, u.hash_mask = u.hash_size - 1, u.hash_shift = ~~((u.hash_bits + T - 1) / T), u.window = new o.Buf8(2 * u.w_size), u.head = new o.Buf16(u.hash_size), u.prev = new o.Buf16(u.w_size), u.lit_bufsize = 1 << s + 6, u.pending_buf_size = 4 * u.lit_bufsize, u.pending_buf = new o.Buf8(u.pending_buf_size), u.d_buf = 1 * u.lit_bufsize, u.l_buf = 3 * u.lit_bufsize, u.level = n, u.strategy = c, u.method = i, J(t);
				}
				a = [
					new G(0, 0, 0, 0, function(t, n) {
						var i = 65535;
						for (i > t.pending_buf_size - 5 && (i = t.pending_buf_size - 5);;) {
							if (t.lookahead <= 1) {
								if (H(t), t.lookahead === 0 && n === d) return A;
								if (t.lookahead === 0) break;
							}
							t.strstart += t.lookahead, t.lookahead = 0;
							var a = t.block_start + i;
							if ((t.strstart === 0 || t.strstart >= a) && (t.lookahead = t.strstart - a, t.strstart = a, R(t, !1), t.strm.avail_out === 0) || t.strstart - t.block_start >= t.w_size - D && (R(t, !1), t.strm.avail_out === 0)) return A;
						}
						return t.insert = 0, n === f ? (R(t, !0), t.strm.avail_out === 0 ? M : N) : (t.strstart > t.block_start && (R(t, !1), t.strm.avail_out), A);
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
				], i.deflateInit = function(t, n) {
					return Y(t, n, v, 15, 8, 0);
				}, i.deflateInit2 = Y, i.deflateReset = J, i.deflateResetKeep = q, i.deflateSetHeader = function(t, n) {
					return t && t.state && t.state.wrap === 2 ? (t.state.gzhead = n, p) : m;
				}, i.deflate = function(t, n) {
					var i, o, c, u;
					if (!t || !t.state || 5 < n || n < 0) return t ? P(t, m) : m;
					if (o = t.state, !t.output || !t.input && t.avail_in !== 0 || o.status === 666 && n !== f) return P(t, t.avail_out === 0 ? -5 : m);
					if (o.strm = t, i = o.last_flush, o.last_flush = n, o.status === O) if (o.wrap === 2) t.adler = 0, z(o, 31), z(o, 139), z(o, 8), o.gzhead ? (z(o, (o.gzhead.text ? 1 : 0) + (o.gzhead.hcrc ? 2 : 0) + (o.gzhead.extra ? 4 : 0) + (o.gzhead.name ? 8 : 0) + (o.gzhead.comment ? 16 : 0)), z(o, 255 & o.gzhead.time), z(o, o.gzhead.time >> 8 & 255), z(o, o.gzhead.time >> 16 & 255), z(o, o.gzhead.time >> 24 & 255), z(o, o.level === 9 ? 2 : 2 <= o.strategy || o.level < 2 ? 4 : 0), z(o, 255 & o.gzhead.os), o.gzhead.extra && o.gzhead.extra.length && (z(o, 255 & o.gzhead.extra.length), z(o, o.gzhead.extra.length >> 8 & 255)), o.gzhead.hcrc && (t.adler = l(t.adler, o.pending_buf, o.pending, 0)), o.gzindex = 0, o.status = 69) : (z(o, 0), z(o, 0), z(o, 0), z(o, 0), z(o, 0), z(o, o.level === 9 ? 2 : 2 <= o.strategy || o.level < 2 ? 4 : 0), z(o, 3), o.status = k);
					else {
						var h = v + (o.w_bits - 8 << 4) << 8;
						h |= (2 <= o.strategy || o.level < 2 ? 0 : o.level < 6 ? 1 : o.level === 6 ? 2 : 3) << 6, o.strstart !== 0 && (h |= 32), h += 31 - h % 31, o.status = k, B(o, h), o.strstart !== 0 && (B(o, t.adler >>> 16), B(o, 65535 & t.adler)), t.adler = 1;
					}
					if (o.status === 69) if (o.gzhead.extra) {
						for (c = o.pending; o.gzindex < (65535 & o.gzhead.extra.length) && (o.pending !== o.pending_buf_size || (o.gzhead.hcrc && o.pending > c && (t.adler = l(t.adler, o.pending_buf, o.pending - c, c)), L(t), c = o.pending, o.pending !== o.pending_buf_size));) z(o, 255 & o.gzhead.extra[o.gzindex]), o.gzindex++;
						o.gzhead.hcrc && o.pending > c && (t.adler = l(t.adler, o.pending_buf, o.pending - c, c)), o.gzindex === o.gzhead.extra.length && (o.gzindex = 0, o.status = 73);
					} else o.status = 73;
					if (o.status === 73) if (o.gzhead.name) {
						c = o.pending;
						do {
							if (o.pending === o.pending_buf_size && (o.gzhead.hcrc && o.pending > c && (t.adler = l(t.adler, o.pending_buf, o.pending - c, c)), L(t), c = o.pending, o.pending === o.pending_buf_size)) {
								u = 1;
								break;
							}
							u = o.gzindex < o.gzhead.name.length ? 255 & o.gzhead.name.charCodeAt(o.gzindex++) : 0, z(o, u);
						} while (u !== 0);
						o.gzhead.hcrc && o.pending > c && (t.adler = l(t.adler, o.pending_buf, o.pending - c, c)), u === 0 && (o.gzindex = 0, o.status = 91);
					} else o.status = 91;
					if (o.status === 91) if (o.gzhead.comment) {
						c = o.pending;
						do {
							if (o.pending === o.pending_buf_size && (o.gzhead.hcrc && o.pending > c && (t.adler = l(t.adler, o.pending_buf, o.pending - c, c)), L(t), c = o.pending, o.pending === o.pending_buf_size)) {
								u = 1;
								break;
							}
							u = o.gzindex < o.gzhead.comment.length ? 255 & o.gzhead.comment.charCodeAt(o.gzindex++) : 0, z(o, u);
						} while (u !== 0);
						o.gzhead.hcrc && o.pending > c && (t.adler = l(t.adler, o.pending_buf, o.pending - c, c)), u === 0 && (o.status = 103);
					} else o.status = 103;
					if (o.status === 103 && (o.gzhead.hcrc ? (o.pending + 2 > o.pending_buf_size && L(t), o.pending + 2 <= o.pending_buf_size && (z(o, 255 & t.adler), z(o, t.adler >> 8 & 255), t.adler = 0, o.status = k)) : o.status = k), o.pending !== 0) {
						if (L(t), t.avail_out === 0) return o.last_flush = -1, p;
					} else if (t.avail_in === 0 && F(n) <= F(i) && n !== f) return P(t, -5);
					if (o.status === 666 && t.avail_in !== 0) return P(t, -5);
					if (t.avail_in !== 0 || o.lookahead !== 0 || n !== d && o.status !== 666) {
						var g = o.strategy === 2 ? function(t, n) {
							for (var i;;) {
								if (t.lookahead === 0 && (H(t), t.lookahead === 0)) {
									if (n === d) return A;
									break;
								}
								if (t.match_length = 0, i = s._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++, i && (R(t, !1), t.strm.avail_out === 0)) return A;
							}
							return t.insert = 0, n === f ? (R(t, !0), t.strm.avail_out === 0 ? M : N) : t.last_lit && (R(t, !1), t.strm.avail_out === 0) ? A : j;
						}(o, n) : o.strategy === 3 ? function(t, n) {
							for (var i, a, o, c, l = t.window;;) {
								if (t.lookahead <= E) {
									if (H(t), t.lookahead <= E && n === d) return A;
									if (t.lookahead === 0) break;
								}
								if (t.match_length = 0, t.lookahead >= T && 0 < t.strstart && (a = l[o = t.strstart - 1]) === l[++o] && a === l[++o] && a === l[++o]) {
									c = t.strstart + E;
									do									;
while (a === l[++o] && a === l[++o] && a === l[++o] && a === l[++o] && a === l[++o] && a === l[++o] && a === l[++o] && a === l[++o] && o < c);
									t.match_length = E - (c - o), t.match_length > t.lookahead && (t.match_length = t.lookahead);
								}
								if (t.match_length >= T ? (i = s._tr_tally(t, 1, t.match_length - T), t.lookahead -= t.match_length, t.strstart += t.match_length, t.match_length = 0) : (i = s._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++), i && (R(t, !1), t.strm.avail_out === 0)) return A;
							}
							return t.insert = 0, n === f ? (R(t, !0), t.strm.avail_out === 0 ? M : N) : t.last_lit && (R(t, !1), t.strm.avail_out === 0) ? A : j;
						}(o, n) : a[o.level].func(o, n);
						if (g !== M && g !== N || (o.status = 666), g === A || g === M) return t.avail_out === 0 && (o.last_flush = -1), p;
						if (g === j && (n === 1 ? s._tr_align(o) : n !== 5 && (s._tr_stored_block(o, 0, 0, !1), n === 3 && (I(o.head), o.lookahead === 0 && (o.strstart = 0, o.block_start = 0, o.insert = 0))), L(t), t.avail_out === 0)) return o.last_flush = -1, p;
					}
					return n === f ? o.wrap <= 0 ? 1 : (o.wrap === 2 ? (z(o, 255 & t.adler), z(o, t.adler >> 8 & 255), z(o, t.adler >> 16 & 255), z(o, t.adler >> 24 & 255), z(o, 255 & t.total_in), z(o, t.total_in >> 8 & 255), z(o, t.total_in >> 16 & 255), z(o, t.total_in >> 24 & 255)) : (B(o, t.adler >>> 16), B(o, 65535 & t.adler)), L(t), 0 < o.wrap && (o.wrap = -o.wrap), o.pending === 0 ? 1 : p) : p;
				}, i.deflateEnd = function(t) {
					var n;
					return t && t.state ? (n = t.state.status) !== O && n !== 69 && n !== 73 && n !== 91 && n !== 103 && n !== k && n !== 666 ? P(t, m) : (t.state = null, n === k ? P(t, -3) : p) : m;
				}, i.deflateSetDictionary = function(t, n) {
					var i, a, s, l, u, d, f, h, g = n.length;
					if (!t || !t.state || (l = (i = t.state).wrap) === 2 || l === 1 && i.status !== O || i.lookahead) return m;
					for (l === 1 && (t.adler = c(t.adler, n, g, 0)), i.wrap = 0, g >= i.w_size && (l === 0 && (I(i.head), i.strstart = 0, i.block_start = 0, i.insert = 0), h = new o.Buf8(i.w_size), o.arraySet(h, n, g - i.w_size, i.w_size, 0), n = h, g = i.w_size), u = t.avail_in, d = t.next_in, f = t.input, t.avail_in = g, t.next_in = 0, t.input = n, H(i); i.lookahead >= T;) {
						for (a = i.strstart, s = i.lookahead - (T - 1); i.ins_h = (i.ins_h << i.hash_shift ^ i.window[a + T - 1]) & i.hash_mask, i.prev[a & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = a, a++, --s;);
						i.strstart = a, i.lookahead = T - 1, H(i);
					}
					return i.strstart += i.lookahead, i.block_start = i.strstart, i.insert = i.lookahead, i.lookahead = 0, i.match_length = i.prev_length = T - 1, i.match_available = 0, t.next_in = d, t.input = f, t.avail_in = u, i.wrap = l, p;
				}, i.deflateInfo = "pako deflate (from Nodeca project)";
			}, {
				"../utils/common": 41,
				"./adler32": 43,
				"./crc32": 45,
				"./messages": 51,
				"./trees": 52
			}],
			47: [function(t, n, i) {
				n.exports = function() {
					this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
				};
			}, {}],
			48: [function(t, n, i) {
				n.exports = function(t, n) {
					var i = t.state, a = t.next_in, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T, E, D = t.input, O;
					o = a + (t.avail_in - 5), s = t.next_out, O = t.output, c = s - (n - t.avail_out), l = s + (t.avail_out - 257), u = i.dmax, d = i.wsize, f = i.whave, p = i.wnext, m = i.window, h = i.hold, g = i.bits, _ = i.lencode, v = i.distcode, y = (1 << i.lenbits) - 1, b = (1 << i.distbits) - 1;
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
									t.msg = "invalid literal/length code", i.mode = 30;
									break e;
								}
								C = 65535 & x, (S &= 15) && (g < S && (h += D[a++] << g, g += 8), C += h & (1 << S) - 1, h >>>= S, g -= S), g < 15 && (h += D[a++] << g, g += 8, h += D[a++] << g, g += 8), x = v[h & b];
								r: for (;;) {
									if (h >>>= S = x >>> 24, g -= S, !(16 & (S = x >>> 16 & 255))) {
										if (!(64 & S)) {
											x = v[(65535 & x) + (h & (1 << S) - 1)];
											continue r;
										}
										t.msg = "invalid distance code", i.mode = 30;
										break e;
									}
									if (w = 65535 & x, g < (S &= 15) && (h += D[a++] << g, (g += 8) < S && (h += D[a++] << g, g += 8)), u < (w += h & (1 << S) - 1)) {
										t.msg = "invalid distance too far back", i.mode = 30;
										break e;
									}
									if (h >>>= S, g -= S, (S = s - c) < w) {
										if (f < (S = w - S) && i.sane) {
											t.msg = "invalid distance too far back", i.mode = 30;
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
					a -= C = g >> 3, h &= (1 << (g -= C << 3)) - 1, t.next_in = a, t.next_out = s, t.avail_in = a < o ? o - a + 5 : 5 - (a - o), t.avail_out = s < l ? l - s + 257 : 257 - (s - l), i.hold = h, i.bits = g;
				};
			}, {}],
			49: [function(t, n, i) {
				var a = t("../utils/common"), o = t("./adler32"), s = t("./crc32"), c = t("./inffast"), l = t("./inftrees"), u = 1, d = 2, f = 0, p = -2, m = 1, h = 852, g = 592;
				function _(t) {
					return (t >>> 24 & 255) + (t >>> 8 & 65280) + ((65280 & t) << 8) + ((255 & t) << 24);
				}
				function v() {
					this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new a.Buf16(320), this.work = new a.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
				}
				function y(t) {
					var n;
					return t && t.state ? (n = t.state, t.total_in = t.total_out = n.total = 0, t.msg = "", n.wrap && (t.adler = 1 & n.wrap), n.mode = m, n.last = 0, n.havedict = 0, n.dmax = 32768, n.head = null, n.hold = 0, n.bits = 0, n.lencode = n.lendyn = new a.Buf32(h), n.distcode = n.distdyn = new a.Buf32(g), n.sane = 1, n.back = -1, f) : p;
				}
				function b(t) {
					var n;
					return t && t.state ? ((n = t.state).wsize = 0, n.whave = 0, n.wnext = 0, y(t)) : p;
				}
				function x(t, n) {
					var i, a;
					return t && t.state ? (a = t.state, n < 0 ? (i = 0, n = -n) : (i = 1 + (n >> 4), n < 48 && (n &= 15)), n && (n < 8 || 15 < n) ? p : (a.window !== null && a.wbits !== n && (a.window = null), a.wrap = i, a.wbits = n, b(t))) : p;
				}
				function S(t, n) {
					var i, a;
					return t ? (a = new v(), (t.state = a).window = null, (i = x(t, n)) !== f && (t.state = null), i) : p;
				}
				var C, w, T = !0;
				function E(t) {
					if (T) {
						var n;
						for (C = new a.Buf32(512), w = new a.Buf32(32), n = 0; n < 144;) t.lens[n++] = 8;
						for (; n < 256;) t.lens[n++] = 9;
						for (; n < 280;) t.lens[n++] = 7;
						for (; n < 288;) t.lens[n++] = 8;
						for (l(u, t.lens, 0, 288, C, 0, t.work, { bits: 9 }), n = 0; n < 32;) t.lens[n++] = 5;
						l(d, t.lens, 0, 32, w, 0, t.work, { bits: 5 }), T = !1;
					}
					t.lencode = C, t.lenbits = 9, t.distcode = w, t.distbits = 5;
				}
				function D(t, n, i, o) {
					var s, c = t.state;
					return c.window === null && (c.wsize = 1 << c.wbits, c.wnext = 0, c.whave = 0, c.window = new a.Buf8(c.wsize)), o >= c.wsize ? (a.arraySet(c.window, n, i - c.wsize, c.wsize, 0), c.wnext = 0, c.whave = c.wsize) : (o < (s = c.wsize - c.wnext) && (s = o), a.arraySet(c.window, n, i - o, s, c.wnext), (o -= s) ? (a.arraySet(c.window, n, i - o, o, 0), c.wnext = o, c.whave = c.wsize) : (c.wnext += s, c.wnext === c.wsize && (c.wnext = 0), c.whave < c.wsize && (c.whave += s))), 0;
				}
				i.inflateReset = b, i.inflateReset2 = x, i.inflateResetKeep = y, i.inflateInit = function(t) {
					return S(t, 15);
				}, i.inflateInit2 = S, i.inflate = function(t, n) {
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
					if (!t || !t.state || !t.output || !t.input && t.avail_in !== 0) return p;
					(i = t.state).mode === 12 && (i.mode = 13), y = t.next_out, g = t.output, x = t.avail_out, v = t.next_in, h = t.input, b = t.avail_in, S = i.hold, C = i.bits, w = b, T = x, R = f;
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
								t.msg = "incorrect header check", i.mode = 30;
								break;
							}
							if ((15 & S) != 8) {
								t.msg = "unknown compression method", i.mode = 30;
								break;
							}
							if (C -= 4, L = 8 + (15 & (S >>>= 4)), i.wbits === 0) i.wbits = L;
							else if (L > i.wbits) {
								t.msg = "invalid window size", i.mode = 30;
								break;
							}
							i.dmax = 1 << L, t.adler = i.check = 1, i.mode = 512 & S ? 10 : 12, C = S = 0;
							break;
						case 2:
							for (; C < 16;) {
								if (b === 0) break e;
								b--, S += h[v++] << C, C += 8;
							}
							if (i.flags = S, (255 & i.flags) != 8) {
								t.msg = "unknown compression method", i.mode = 30;
								break;
							}
							if (57344 & i.flags) {
								t.msg = "unknown header flags set", i.mode = 30;
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
									t.msg = "header crc mismatch", i.mode = 30;
									break;
								}
								C = S = 0;
							}
							i.head && (i.head.hcrc = i.flags >> 9 & 1, i.head.done = !0), t.adler = i.check = 0, i.mode = 12;
							break;
						case 10:
							for (; C < 32;) {
								if (b === 0) break e;
								b--, S += h[v++] << C, C += 8;
							}
							t.adler = i.check = _(S), C = S = 0, i.mode = 11;
						case 11:
							if (i.havedict === 0) return t.next_out = y, t.avail_out = x, t.next_in = v, t.avail_in = b, i.hold = S, i.bits = C, 2;
							t.adler = i.check = 1, i.mode = 12;
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
								case 3: t.msg = "invalid block type", i.mode = 30;
							}
							S >>>= 2, C -= 2;
							break;
						case 14:
							for (S >>>= 7 & C, C -= 7 & C; C < 32;) {
								if (b === 0) break e;
								b--, S += h[v++] << C, C += 8;
							}
							if ((65535 & S) != (S >>> 16 ^ 65535)) {
								t.msg = "invalid stored block lengths", i.mode = 30;
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
								t.msg = "too many length or distance symbols", i.mode = 30;
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
								t.msg = "invalid code lengths set", i.mode = 30;
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
											t.msg = "invalid bit length repeat", i.mode = 30;
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
										t.msg = "invalid bit length repeat", i.mode = 30;
										break;
									}
									for (; O--;) i.lens[i.have++] = L;
								}
							}
							if (i.mode === 30) break;
							if (i.lens[256] === 0) {
								t.msg = "invalid code -- missing end-of-block", i.mode = 30;
								break;
							}
							if (i.lenbits = 9, z = { bits: i.lenbits }, R = l(u, i.lens, 0, i.nlen, i.lencode, 0, i.work, z), i.lenbits = z.bits, R) {
								t.msg = "invalid literal/lengths set", i.mode = 30;
								break;
							}
							if (i.distbits = 6, i.distcode = i.distdyn, z = { bits: i.distbits }, R = l(d, i.lens, i.nlen, i.ndist, i.distcode, 0, i.work, z), i.distbits = z.bits, R) {
								t.msg = "invalid distances set", i.mode = 30;
								break;
							}
							if (i.mode = 20, n === 6) break e;
						case 20: i.mode = 21;
						case 21:
							if (6 <= b && 258 <= x) {
								t.next_out = y, t.avail_out = x, t.next_in = v, t.avail_in = b, i.hold = S, i.bits = C, c(t, T), y = t.next_out, g = t.output, x = t.avail_out, v = t.next_in, h = t.input, b = t.avail_in, S = i.hold, C = i.bits, i.mode === 12 && (i.back = -1);
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
								t.msg = "invalid literal/length code", i.mode = 30;
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
								t.msg = "invalid distance code", i.mode = 30;
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
								t.msg = "invalid distance too far back", i.mode = 30;
								break;
							}
							i.mode = 25;
						case 25:
							if (x === 0) break e;
							if (O = T - x, i.offset > O) {
								if ((O = i.offset - O) > i.whave && i.sane) {
									t.msg = "invalid distance too far back", i.mode = 30;
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
								if (T -= x, t.total_out += T, i.total += T, T && (t.adler = i.check = i.flags ? s(i.check, g, T, y - T) : o(i.check, g, T, y - T)), T = x, (i.flags ? S : _(S)) !== i.check) {
									t.msg = "incorrect data check", i.mode = 30;
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
									t.msg = "incorrect length check", i.mode = 30;
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
					return t.next_out = y, t.avail_out = x, t.next_in = v, t.avail_in = b, i.hold = S, i.bits = C, (i.wsize || T !== t.avail_out && i.mode < 30 && (i.mode < 27 || n !== 4)) && D(t, t.output, t.next_out, T - t.avail_out) ? (i.mode = 31, -4) : (w -= t.avail_in, T -= t.avail_out, t.total_in += w, t.total_out += T, i.total += T, i.wrap && T && (t.adler = i.check = i.flags ? s(i.check, g, T, t.next_out - T) : o(i.check, g, T, t.next_out - T)), t.data_type = i.bits + (i.last ? 64 : 0) + (i.mode === 12 ? 128 : 0) + (i.mode === 20 || i.mode === 15 ? 256 : 0), (w == 0 && T === 0 || n === 4) && R === f && (R = -5), R);
				}, i.inflateEnd = function(t) {
					if (!t || !t.state) return p;
					var n = t.state;
					return n.window &&= null, t.state = null, f;
				}, i.inflateGetHeader = function(t, n) {
					var i;
					return t && t.state && 2 & (i = t.state).wrap ? ((i.head = n).done = !1, f) : p;
				}, i.inflateSetDictionary = function(t, n) {
					var i, a = n.length;
					return t && t.state ? (i = t.state).wrap !== 0 && i.mode !== 11 ? p : i.mode === 11 && o(1, n, a, 0) !== i.check ? -3 : D(t, n, a, a) ? (i.mode = 31, -4) : (i.havedict = 1, f) : p;
				}, i.inflateInfo = "pako inflate (from Nodeca project)";
			}, {
				"../utils/common": 41,
				"./adler32": 43,
				"./crc32": 45,
				"./inffast": 48,
				"./inftrees": 50
			}],
			50: [function(t, n, i) {
				var a = t("../utils/common"), o = [
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
				n.exports = function(t, n, i, u, d, f, p, m) {
					var h, g, _, v, y, b, x, S, C, w = m.bits, T = 0, E = 0, D = 0, O = 0, k = 0, A = 0, j = 0, M = 0, N = 0, P = 0, F = null, I = 0, L = new a.Buf16(16), R = new a.Buf16(16), z = null, B = 0;
					for (T = 0; T <= 15; T++) L[T] = 0;
					for (E = 0; E < u; E++) L[n[i + E]]++;
					for (k = w, O = 15; 1 <= O && L[O] === 0; O--);
					if (O < k && (k = O), O === 0) return d[f++] = 20971520, d[f++] = 20971520, m.bits = 1, 0;
					for (D = 1; D < O && L[D] === 0; D++);
					for (k < D && (k = D), T = M = 1; T <= 15; T++) if (M <<= 1, (M -= L[T]) < 0) return -1;
					if (0 < M && (t === 0 || O !== 1)) return -1;
					for (R[1] = 0, T = 1; T < 15; T++) R[T + 1] = R[T] + L[T];
					for (E = 0; E < u; E++) n[i + E] !== 0 && (p[R[n[i + E]]++] = E);
					if (b = t === 0 ? (F = z = p, 19) : t === 1 ? (F = o, I -= 257, z = s, B -= 257, 256) : (F = c, z = l, -1), T = D, y = f, j = E = P = 0, _ = -1, v = (N = 1 << (A = k)) - 1, t === 1 && 852 < N || t === 2 && 592 < N) return 1;
					for (;;) {
						for (x = T - j, C = p[E] < b ? (S = 0, p[E]) : p[E] > b ? (S = z[B + p[E]], F[I + p[E]]) : (S = 96, 0), h = 1 << T - j, D = g = 1 << A; d[y + (P >> j) + (g -= h)] = x << 24 | S << 16 | C | 0, g !== 0;);
						for (h = 1 << T - 1; P & h;) h >>= 1;
						if (h === 0 ? P = 0 : (P &= h - 1, P += h), E++, --L[T] == 0) {
							if (T === O) break;
							T = n[i + p[E]];
						}
						if (k < T && (P & v) !== _) {
							for (j === 0 && (j = k), y += D, M = 1 << (A = T - j); A + j < O && !((M -= L[A + j]) <= 0);) A++, M <<= 1;
							if (N += 1 << A, t === 1 && 852 < N || t === 2 && 592 < N) return 1;
							d[_ = P & v] = k << 24 | A << 16 | y - f | 0;
						}
					}
					return P !== 0 && (d[y + P] = T - j << 24 | 4194304), m.bits = k, 0;
				};
			}, { "../utils/common": 41 }],
			51: [function(t, n, i) {
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
			52: [function(t, n, i) {
				var a = t("../utils/common"), o = 0, s = 1;
				function c(t) {
					for (var n = t.length; 0 <= --n;) t[n] = 0;
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
				function I(t, n, i, a, o) {
					this.static_tree = t, this.extra_bits = n, this.extra_base = i, this.elems = a, this.max_length = o, this.has_stree = t && t.length;
				}
				function L(t, n) {
					this.dyn_tree = t, this.max_code = 0, this.stat_desc = n;
				}
				function R(t) {
					return t < 256 ? k[t] : k[256 + (t >>> 7)];
				}
				function z(t, n) {
					t.pending_buf[t.pending++] = 255 & n, t.pending_buf[t.pending++] = n >>> 8 & 255;
				}
				function B(t, n, i) {
					t.bi_valid > _ - i ? (t.bi_buf |= n << t.bi_valid & 65535, z(t, t.bi_buf), t.bi_buf = n >> _ - t.bi_valid, t.bi_valid += i - _) : (t.bi_buf |= n << t.bi_valid & 65535, t.bi_valid += i);
				}
				function V(t, n, i) {
					B(t, i[2 * n], i[2 * n + 1]);
				}
				function H(t, n) {
					for (var i = 0; i |= 1 & t, t >>>= 1, i <<= 1, 0 < --n;);
					return i >>> 1;
				}
				function U(t, n, i) {
					var a, o, s = Array(g + 1), c = 0;
					for (a = 1; a <= g; a++) s[a] = c = c + i[a - 1] << 1;
					for (o = 0; o <= n; o++) {
						var l = t[2 * o + 1];
						l !== 0 && (t[2 * o] = H(s[l]++, l));
					}
				}
				function W(t) {
					var n;
					for (n = 0; n < f; n++) t.dyn_ltree[2 * n] = 0;
					for (n = 0; n < p; n++) t.dyn_dtree[2 * n] = 0;
					for (n = 0; n < m; n++) t.bl_tree[2 * n] = 0;
					t.dyn_ltree[2 * y] = 1, t.opt_len = t.static_len = 0, t.last_lit = t.matches = 0;
				}
				function G(t) {
					8 < t.bi_valid ? z(t, t.bi_buf) : 0 < t.bi_valid && (t.pending_buf[t.pending++] = t.bi_buf), t.bi_buf = 0, t.bi_valid = 0;
				}
				function K(t, n, i, a) {
					var o = 2 * n, s = 2 * i;
					return t[o] < t[s] || t[o] === t[s] && a[n] <= a[i];
				}
				function q(t, n, i) {
					for (var a = t.heap[i], o = i << 1; o <= t.heap_len && (o < t.heap_len && K(n, t.heap[o + 1], t.heap[o], t.depth) && o++, !K(n, a, t.heap[o], t.depth));) t.heap[i] = t.heap[o], i = o, o <<= 1;
					t.heap[i] = a;
				}
				function J(t, n, i) {
					var a, o, s, c, l = 0;
					if (t.last_lit !== 0) for (; a = t.pending_buf[t.d_buf + 2 * l] << 8 | t.pending_buf[t.d_buf + 2 * l + 1], o = t.pending_buf[t.l_buf + l], l++, a === 0 ? V(t, o, n) : (V(t, (s = A[o]) + d + 1, n), (c = C[s]) !== 0 && B(t, o -= j[s], c), V(t, s = R(--a), i), (c = w[s]) !== 0 && B(t, a -= F[s], c)), l < t.last_lit;);
					V(t, y, n);
				}
				function Y(t, n) {
					var i, a, o, s = n.dyn_tree, c = n.stat_desc.static_tree, l = n.stat_desc.has_stree, u = n.stat_desc.elems, d = -1;
					for (t.heap_len = 0, t.heap_max = h, i = 0; i < u; i++) s[2 * i] === 0 ? s[2 * i + 1] = 0 : (t.heap[++t.heap_len] = d = i, t.depth[i] = 0);
					for (; t.heap_len < 2;) s[2 * (o = t.heap[++t.heap_len] = d < 2 ? ++d : 0)] = 1, t.depth[o] = 0, t.opt_len--, l && (t.static_len -= c[2 * o + 1]);
					for (n.max_code = d, i = t.heap_len >> 1; 1 <= i; i--) q(t, s, i);
					for (o = u; i = t.heap[1], t.heap[1] = t.heap[t.heap_len--], q(t, s, 1), a = t.heap[1], t.heap[--t.heap_max] = i, t.heap[--t.heap_max] = a, s[2 * o] = s[2 * i] + s[2 * a], t.depth[o] = (t.depth[i] >= t.depth[a] ? t.depth[i] : t.depth[a]) + 1, s[2 * i + 1] = s[2 * a + 1] = o, t.heap[1] = o++, q(t, s, 1), 2 <= t.heap_len;);
					t.heap[--t.heap_max] = t.heap[1], function(t, n) {
						var i, a, o, s, c, l, u = n.dyn_tree, d = n.max_code, f = n.stat_desc.static_tree, p = n.stat_desc.has_stree, m = n.stat_desc.extra_bits, _ = n.stat_desc.extra_base, v = n.stat_desc.max_length, y = 0;
						for (s = 0; s <= g; s++) t.bl_count[s] = 0;
						for (u[2 * t.heap[t.heap_max] + 1] = 0, i = t.heap_max + 1; i < h; i++) v < (s = u[2 * u[2 * (a = t.heap[i]) + 1] + 1] + 1) && (s = v, y++), u[2 * a + 1] = s, d < a || (t.bl_count[s]++, c = 0, _ <= a && (c = m[a - _]), l = u[2 * a], t.opt_len += l * (s + c), p && (t.static_len += l * (f[2 * a + 1] + c)));
						if (y !== 0) {
							do {
								for (s = v - 1; t.bl_count[s] === 0;) s--;
								t.bl_count[s]--, t.bl_count[s + 1] += 2, t.bl_count[v]--, y -= 2;
							} while (0 < y);
							for (s = v; s !== 0; s--) for (a = t.bl_count[s]; a !== 0;) d < (o = t.heap[--i]) || (u[2 * o + 1] !== s && (t.opt_len += (s - u[2 * o + 1]) * u[2 * o], u[2 * o + 1] = s), a--);
						}
					}(t, n), U(s, d, t.bl_count);
				}
				function X(t, n, i) {
					var a, o, s = -1, c = n[1], l = 0, u = 7, d = 4;
					for (c === 0 && (u = 138, d = 3), n[2 * (i + 1) + 1] = 65535, a = 0; a <= i; a++) o = c, c = n[2 * (a + 1) + 1], ++l < u && o === c || (l < d ? t.bl_tree[2 * o] += l : o === 0 ? l <= 10 ? t.bl_tree[2 * x]++ : t.bl_tree[2 * S]++ : (o !== s && t.bl_tree[2 * o]++, t.bl_tree[2 * b]++), s = o, d = (l = 0) === c ? (u = 138, 3) : o === c ? (u = 6, 3) : (u = 7, 4));
				}
				function Z(t, n, i) {
					var a, o, s = -1, c = n[1], l = 0, u = 7, d = 4;
					for (c === 0 && (u = 138, d = 3), a = 0; a <= i; a++) if (o = c, c = n[2 * (a + 1) + 1], !(++l < u && o === c)) {
						if (l < d) for (; V(t, o, t.bl_tree), --l != 0;);
						else o === 0 ? l <= 10 ? (V(t, x, t.bl_tree), B(t, l - 3, 3)) : (V(t, S, t.bl_tree), B(t, l - 11, 7)) : (o !== s && (V(t, o, t.bl_tree), l--), V(t, b, t.bl_tree), B(t, l - 3, 2));
						s = o, d = (l = 0) === c ? (u = 138, 3) : o === c ? (u = 6, 3) : (u = 7, 4);
					}
				}
				c(F);
				var Q = !1;
				function $(t, n, i, o) {
					B(t, (l << 1) + (o ? 1 : 0), 3), function(t, n, i, o) {
						G(t), o && (z(t, i), z(t, ~i)), a.arraySet(t.pending_buf, t.window, n, i, t.pending), t.pending += i;
					}(t, n, i, !0);
				}
				i._tr_init = function(t) {
					Q ||= (function() {
						var t, n, i, a, o, s = Array(g + 1);
						for (a = i = 0; a < u - 1; a++) for (j[a] = i, t = 0; t < 1 << C[a]; t++) A[i++] = a;
						for (A[i - 1] = a, a = o = 0; a < 16; a++) for (F[a] = o, t = 0; t < 1 << w[a]; t++) k[o++] = a;
						for (o >>= 7; a < p; a++) for (F[a] = o << 7, t = 0; t < 1 << w[a] - 7; t++) k[256 + o++] = a;
						for (n = 0; n <= g; n++) s[n] = 0;
						for (t = 0; t <= 143;) D[2 * t + 1] = 8, t++, s[8]++;
						for (; t <= 255;) D[2 * t + 1] = 9, t++, s[9]++;
						for (; t <= 279;) D[2 * t + 1] = 7, t++, s[7]++;
						for (; t <= 287;) D[2 * t + 1] = 8, t++, s[8]++;
						for (U(D, f + 1, s), t = 0; t < p; t++) O[2 * t + 1] = 5, O[2 * t] = H(t, 5);
						M = new I(D, C, d + 1, f, g), N = new I(O, w, 0, p, g), P = new I([], T, 0, m, v);
					}(), !0), t.l_desc = new L(t.dyn_ltree, M), t.d_desc = new L(t.dyn_dtree, N), t.bl_desc = new L(t.bl_tree, P), t.bi_buf = 0, t.bi_valid = 0, W(t);
				}, i._tr_stored_block = $, i._tr_flush_block = function(t, n, i, a) {
					var c, l, u = 0;
					0 < t.level ? (t.strm.data_type === 2 && (t.strm.data_type = function(t) {
						var n, i = 4093624447;
						for (n = 0; n <= 31; n++, i >>>= 1) if (1 & i && t.dyn_ltree[2 * n] !== 0) return o;
						if (t.dyn_ltree[18] !== 0 || t.dyn_ltree[20] !== 0 || t.dyn_ltree[26] !== 0) return s;
						for (n = 32; n < d; n++) if (t.dyn_ltree[2 * n] !== 0) return s;
						return o;
					}(t)), Y(t, t.l_desc), Y(t, t.d_desc), u = function(t) {
						var n;
						for (X(t, t.dyn_ltree, t.l_desc.max_code), X(t, t.dyn_dtree, t.d_desc.max_code), Y(t, t.bl_desc), n = m - 1; 3 <= n && t.bl_tree[2 * E[n] + 1] === 0; n--);
						return t.opt_len += 3 * (n + 1) + 5 + 5 + 4, n;
					}(t), c = t.opt_len + 3 + 7 >>> 3, (l = t.static_len + 3 + 7 >>> 3) <= c && (c = l)) : c = l = i + 5, i + 4 <= c && n !== -1 ? $(t, n, i, a) : t.strategy === 4 || l === c ? (B(t, 2 + (a ? 1 : 0), 3), J(t, D, O)) : (B(t, 4 + (a ? 1 : 0), 3), function(t, n, i, a) {
						var o;
						for (B(t, n - 257, 5), B(t, i - 1, 5), B(t, a - 4, 4), o = 0; o < a; o++) B(t, t.bl_tree[2 * E[o] + 1], 3);
						Z(t, t.dyn_ltree, n - 1), Z(t, t.dyn_dtree, i - 1);
					}(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, u + 1), J(t, t.dyn_ltree, t.dyn_dtree)), W(t), a && G(t);
				}, i._tr_tally = function(t, n, i) {
					return t.pending_buf[t.d_buf + 2 * t.last_lit] = n >>> 8 & 255, t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & n, t.pending_buf[t.l_buf + t.last_lit] = 255 & i, t.last_lit++, n === 0 ? t.dyn_ltree[2 * i]++ : (t.matches++, n--, t.dyn_ltree[2 * (A[i] + d + 1)]++, t.dyn_dtree[2 * R(n)]++), t.last_lit === t.lit_bufsize - 1;
				}, i._tr_align = function(t) {
					B(t, 2, 3), V(t, y, D), function(t) {
						t.bi_valid === 16 ? (z(t, t.bi_buf), t.bi_buf = 0, t.bi_valid = 0) : 8 <= t.bi_valid && (t.pending_buf[t.pending++] = 255 & t.bi_buf, t.bi_buf >>= 8, t.bi_valid -= 8);
					}(t);
				};
			}, { "../utils/common": 41 }],
			53: [function(t, n, i) {
				n.exports = function() {
					this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
				};
			}, {}],
			54: [function(t, n, i) {
				(function(t) {
					(function(t, n) {
						if (!t.setImmediate) {
							var i, a, o, s, c = 1, l = {}, u = !1, d = t.document, f = Object.getPrototypeOf && Object.getPrototypeOf(t);
							f = f && f.setTimeout ? f : t, i = {}.toString.call(t.process) === "[object process]" ? function(t) {
								process.nextTick(function() {
									m(t);
								});
							} : function() {
								if (t.postMessage && !t.importScripts) {
									var n = !0, i = t.onmessage;
									return t.onmessage = function() {
										n = !1;
									}, t.postMessage("", "*"), t.onmessage = i, n;
								}
							}() ? (s = "setImmediate$" + Math.random() + "$", t.addEventListener ? t.addEventListener("message", h, !1) : t.attachEvent("onmessage", h), function(n) {
								t.postMessage(s + n, "*");
							}) : t.MessageChannel ? ((o = new MessageChannel()).port1.onmessage = function(t) {
								m(t.data);
							}, function(t) {
								o.port2.postMessage(t);
							}) : d && "onreadystatechange" in d.createElement("script") ? (a = d.documentElement, function(t) {
								var n = d.createElement("script");
								n.onreadystatechange = function() {
									m(t), n.onreadystatechange = null, a.removeChild(n), n = null;
								}, a.appendChild(n);
							}) : function(t) {
								setTimeout(m, 0, t);
							}, f.setImmediate = function(t) {
								typeof t != "function" && (t = Function("" + t));
								for (var n = Array(arguments.length - 1), a = 0; a < n.length; a++) n[a] = arguments[a + 1];
								return l[c] = {
									callback: t,
									args: n
								}, i(c), c++;
							}, f.clearImmediate = p;
						}
						function p(t) {
							delete l[t];
						}
						function m(t) {
							if (u) setTimeout(m, 0, t);
							else {
								var i = l[t];
								if (i) {
									u = !0;
									try {
										(function(t) {
											var i = t.callback, a = t.args;
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
										p(t), u = !1;
									}
								}
							}
						}
						function h(n) {
							n.source === t && typeof n.data == "string" && n.data.indexOf(s) === 0 && m(+n.data.slice(s.length));
						}
					})(typeof self > "u" ? t === void 0 ? this : t : self);
				}).call(this, typeof global < "u" ? global : typeof self < "u" ? self : typeof window < "u" ? window : {});
			}, {}]
		}, {}, [10])(10);
	});
})))());
async function preprocessImage(t, n = 2048, i) {
	if (!t.type.startsWith("image/")) throw Error("File is not an image");
	let a = new FileReader();
	a.readAsArrayBuffer(t), a.onload = function(t) {
		if (!t.target?.result) throw Error("Failed to read file");
		let a = new Blob([t.target.result]);
		window.URL = window.URL || window.webkitURL;
		let o = window.URL.createObjectURL(a);
		var s = new Image();
		s.src = o, s.onload = function() {
			resizeImage(s, n, i);
		};
	};
}
function resizeImage(t, n = 2048, i) {
	let a = document.createElement("canvas"), o = a.getContext("2d");
	if (!o) throw Error("Failed to get canvas context");
	let s = t.width, c = t.height;
	if (s > n || c > n) {
		let i = Math.min(n / s, n / c);
		a.width = s * i, a.height = c * i, o.drawImage(t, 0, 0, a.width, a.height);
	} else a.width = s, a.height = c, o.drawImage(t, 0, 0, a.width, a.height);
	return a.toBlob(i, "image/jpeg", .85);
}
var root_1$3 = /* @__PURE__ */ from_html("<span class=\"mr-2\">Reuse existing dataset</span> <!>", 1), root_4$2 = /* @__PURE__ */ from_html("<option> </option>"), root_2$2 = /* @__PURE__ */ from_html("<div class=\"select\"><select><option>Use dataset from</option><!></select></div>"), root_6 = /* @__PURE__ */ from_html("<div class=\"notification dropper is-info is-overlay\">Drop files here</div>"), root_8 = /* @__PURE__ */ from_html("<div class=\"column is-3\"><!></div> <div class=\"column is-3\"><!></div> <div class=\"column is-3\"><!></div> <div class=\"column is-3\"><!></div>", 1), root_14 = /* @__PURE__ */ from_html("<li class=\"column is-3 is-flex\"><div class=\"image-generic-outer-wrapper\" style=\"opacity: 1;\"><div class=\"image-generic-inner-wrapper\"><div class=\"image-generic-title\"><!> <span class=\"title-identification\"><span class=\"tag is-light is-bold mb-3\"> </span> <span class=\"is-size-7\"> </span></span></div> <div class=\"image-generic-content mb-1\"><img/></div></div></div></li>"), root_13 = /* @__PURE__ */ from_html("<ul class=\"columns is-mobile is-multiline list-invisible\"></ul> <div class=\"file has-name is-fullwidth\" id=\"id_pdf_file-wrapper\"><label class=\"file-label\"><span class=\"file-cta\"><span class=\"file-icon\"><span class=\"iconify\" data-icon=\"mdi:upload\"></span></span> <span class=\"file-label\">Select files...</span></span> <span class=\"file-name\"> </span> <input type=\"file\" accept=\"image/*\" class=\"file-input\" style=\"display: none;\" multiple=\"\"/></label></div>", 1), root_15 = /* @__PURE__ */ from_html("<div class=\"file has-name is-fullwidth\" id=\"id_zip_file-wrapper\"><label class=\"file-label\"><span class=\"file-cta\"><span class=\"file-icon\"><span class=\"iconify\" data-icon=\"mdi:upload\"></span></span> <span class=\"file-label\">Select a file...</span></span> <span class=\"file-name\"> </span></label></div>"), root_17 = /* @__PURE__ */ from_html("<div class=\"file has-name is-fullwidth\" id=\"id_pdf_file-wrapper\"><label class=\"file-label\"><span class=\"file-cta\"><span class=\"file-icon\"><span class=\"iconify\" data-icon=\"mdi:upload\"></span></span> <span class=\"file-label\">Select a file...</span></span> <span class=\"file-name\"> </span></label></div>"), root_7 = /* @__PURE__ */ from_html("<!> <!> <!> <!> <!>", 1), root_5$1 = /* @__PURE__ */ from_html("<div class=\"has-background-light\"><div class=\"top-notification notification py-3 px-4\"><span class=\"iconify\" data-icon=\"mdi:info-outline\"></span> You can drag and drop files\n                here</div> <!> <!></div>"), root$1 = /* @__PURE__ */ from_html("<div class=\"dataset-compose-form is-relative\"><div class=\"dataset-reuse-toggle\"><!></div> <!></div>");
function DatasetComposeForm(t, n) {
	let i = props_id();
	push(n, !0);
	let a = "No file selected", o = prop(n, "ready", 15), s = n.form.querySelector("#id_reuse_dataset"), c = n.form.querySelector("#id_dataset"), l = n.form.querySelector("#id_format"), u = n.form.querySelector("#id_iiif_manifests"), d = n.form.querySelector("#id_zip_file"), f = n.form.querySelector("#id_pdf_file"), p = d.form, m = /* @__PURE__ */ state(proxy(s.checked)), h = /* @__PURE__ */ state(proxy(c.value)), g = /* @__PURE__ */ state(proxy([])), _ = /* @__PURE__ */ state(a), v = /* @__PURE__ */ state(a), y = /* @__PURE__ */ state(proxy([])), b = new import_jszip_min.default(), x = /* @__PURE__ */ state("zip"), S = /* @__PURE__ */ state(!1);
	onMount(() => (set(_, d.files?.[0]?.name ?? a, !0), d.onchange = () => {
		set(_, d.files?.[0]?.name ?? a, !0);
	}, set(v, f.files?.[0]?.name ?? a, !0), f.onchange = () => {
		set(v, f.files?.[0]?.name ?? a, !0);
	}, set(x, l.value, !0), p && (p.onsubmit = (t) => {
		get$2(x) !== "zip" && (d.files = null), get$2(x) !== "pdf" && (f.files = null), get$2(x) == "images" && (t.preventDefault(), b.generateAsync({ type: "blob" }).then((t) => {
			let n = new DataTransfer();
			n.items.add(new File([t], "dataset.zip", { type: "application/zip" })), d.files = n.files, p.submit();
		}));
	}), () => {
		d.onchange = null, f.onchange = null, p.onsubmit = null;
	}));
	function C(t) {
		console.log(t), t.forEach((t) => {
			preprocessImage(t, 2048, (n) => {
				if (n) {
					let i = get$2(y).map((t) => t.name), a = t.name;
					if (i.includes(a)) {
						let n = t.name.split(".").pop() || "", o = t.name.slice(0, -n.length - 1), s = 1;
						for (; i.includes(a);) a = `${o}+${s}.${n}`, s++;
					}
					b.file(a, n), set(y, [...get$2(y), {
						name: a,
						blob: n
					}], !0);
				}
			});
		}), set(x, "images");
	}
	function w(t) {
		return () => {
			let n = get$2(y)[t];
			b.remove(n.name), get$2(y).splice(t, 1);
		};
	}
	function T(t) {
		t.preventDefault(), t.stopPropagation(), set(S, !1);
		let n = t.dataTransfer?.files;
		n && (n[0].type.startsWith("image/") && C(Array.from(n).filter((t) => t.type.startsWith("image/"))), n[0].type.startsWith("application/zip") && (d.files = n, set(_, n[0].name, !0), set(x, "zip")), n[0].type.startsWith("application/pdf") && (f.files = n, set(v, n[0].name, !0), set(x, "pdf")));
	}
	function E(t) {
		l.value = t == "images" ? "zip" : t;
	}
	function D(t) {
		s.checked = t;
	}
	user_effect(() => {
		c.value = get$2(h);
	}), user_effect(() => {
		o(get$2(m) ? get$2(h) != "" : get$2(x) == "images" && get$2(y).length > 0 || get$2(x) == "zip" && get$2(_) !== a || get$2(x) == "iiif" && get$2(g).length > 0 || get$2(x) == "pdf" && get$2(v) !== a);
	});
	var O = root$1(), k = child(O), A = child(k);
	component(A, () => Toggle, (t, n) => {
		n(t, {
			onPressedChange: D,
			get pressed() {
				return get$2(m);
			},
			set pressed(t) {
				set(m, t, !0);
			},
			children: (t, n) => {
				var i = root_1$3(), a = sibling(first_child(i), 2);
				Icon(a, { icon: "mdi:sync" }), append(t, i);
			},
			$$slots: { default: !0 }
		});
	}), reset(k);
	var j = sibling(k, 2), M = (t) => {
		var n = root_2$2(), i = child(n), a = child(i);
		a.value = a.__value = "";
		var o = sibling(a);
		each(o, 17, () => c.children, index$1, (t, n) => {
			var i = comment(), a = first_child(i), o = (t) => {
				var i = root_4$2(), a = child(i, !0);
				reset(i);
				var o = {};
				template_effect(() => {
					set_text(a, get$2(n).text), o !== (o = get$2(n).value) && (i.value = (i.__value = get$2(n).value) ?? "");
				}), append(t, i);
			};
			if_block(a, (t) => {
				get$2(n) instanceof HTMLOptionElement && get$2(n).value != "" && t(o);
			}), append(t, i);
		}), reset(i), reset(n), bind_select_value(i, () => get$2(h), (t) => set(h, t)), append(t, n);
	}, N = (t) => {
		var n = root_5$1(), a = sibling(child(n), 2), o = (t) => {
			var n = root_6();
			append(t, n);
		};
		if_block(a, (t) => {
			get$2(S) && t(o);
		});
		var s = sibling(a, 2);
		component(s, () => Tabs, (t, n) => {
			n(t, {
				onValueChange: E,
				get value() {
					return get$2(x);
				},
				set value(t) {
					set(x, t, !0);
				},
				children: (t, n) => {
					var a = root_7(), o = first_child(a);
					component(o, () => Tabs_list, (t, n) => {
						n(t, {
							class: "columns gap-2",
							children: (t, n) => {
								var i = root_8(), a = first_child(i), o = child(a);
								component(o, () => Tabs_trigger, (t, n) => {
									n(t, {
										value: "images",
										class: "",
										children: (t, n) => {
											next();
											var i = text("Image files");
											append(t, i);
										},
										$$slots: { default: !0 }
									});
								}), reset(a);
								var s = sibling(a, 2), c = child(s);
								component(c, () => Tabs_trigger, (t, n) => {
									n(t, {
										value: "zip",
										class: "",
										children: (t, n) => {
											next();
											var i = text("Zip file");
											append(t, i);
										},
										$$slots: { default: !0 }
									});
								}), reset(s);
								var l = sibling(s, 2), u = child(l);
								component(u, () => Tabs_trigger, (t, n) => {
									n(t, {
										value: "iiif",
										class: "",
										children: (t, n) => {
											next();
											var i = text("IIIF manifests");
											append(t, i);
										},
										$$slots: { default: !0 }
									});
								}), reset(l);
								var d = sibling(l, 2), f = child(d);
								component(f, () => Tabs_trigger, (t, n) => {
									n(t, {
										value: "pdf",
										class: "",
										children: (t, n) => {
											next();
											var i = text("PDF file");
											append(t, i);
										},
										$$slots: { default: !0 }
									});
								}), reset(d), append(t, i);
							},
							$$slots: { default: !0 }
						});
					});
					var s = sibling(o, 2);
					component(s, () => Tabs_content, (t, n) => {
						n(t, {
							value: "images",
							children: (t, n) => {
								var a = root_13(), o = first_child(a);
								each(o, 22, () => get$2(y), (t) => t, (t, n, i) => {
									var a = root_14(), o = child(a), s = child(o), c = child(s), l = child(c);
									{
										let t = /* @__PURE__ */ user_derived(() => w(get$2(i)));
										IconBtn(l, {
											icon: "mdi:delete",
											get onclick() {
												return get$2(t);
											}
										});
									}
									var u = sibling(l, 2), d = child(u), f = child(d);
									reset(d);
									var p = sibling(d, 2), m = child(p, !0);
									reset(p), reset(u), reset(c);
									var h = sibling(c, 2), g = child(h);
									reset(h), reset(s), reset(o), reset(a), template_effect((t) => {
										set_attribute(u, "title", n.name), set_text(f, `Image #${get$2(i) ?? ""}`), set_text(m, n.name), set_attribute(g, "src", t), set_attribute(g, "alt", n.name);
									}, [() => URL.createObjectURL(n.blob)]), append(t, a);
								}), reset(o);
								var s = sibling(o, 2), c = child(s), l = sibling(child(c), 2), u = child(l);
								reset(l);
								var d = sibling(l, 2);
								reset(c), reset(s), template_effect(() => {
									set_attribute(c, "for", `${i}-img-input`), set_text(u, `Images (${get$2(y).length ?? ""})`), set_attribute(d, "id", `${i}-img-input`);
								}), delegated("change", d, (t) => C(Array.from(t.target.files ?? []))), append(t, a);
							},
							$$slots: { default: !0 }
						});
					});
					var c = sibling(s, 2);
					component(c, () => Tabs_content, (t, n) => {
						n(t, {
							value: "zip",
							children: (t, n) => {
								var i = root_15(), a = child(i), o = sibling(child(a), 2), s = child(o, !0);
								reset(o), reset(a), reset(i), template_effect(() => {
									set_attribute(a, "for", d.id), set_text(s, get$2(_));
								}), append(t, i);
							},
							$$slots: { default: !0 }
						});
					});
					var l = sibling(c, 2);
					component(l, () => Tabs_content, (t, n) => {
						n(t, {
							value: "iiif",
							children: (t, n) => {
								IIIFURLListInput(t, {
									get field() {
										return u;
									},
									get value() {
										return get$2(g);
									},
									set value(t) {
										set(g, t, !0);
									}
								});
							},
							$$slots: { default: !0 }
						});
					});
					var p = sibling(l, 2);
					component(p, () => Tabs_content, (t, n) => {
						n(t, {
							value: "pdf",
							children: (t, n) => {
								var i = root_17(), a = child(i), o = sibling(child(a), 2), s = child(o, !0);
								reset(o), reset(a), reset(i), template_effect(() => {
									set_attribute(a, "for", f.id), set_text(s, get$2(v));
								}), append(t, i);
							},
							$$slots: { default: !0 }
						});
					}), append(t, a);
				},
				$$slots: { default: !0 }
			});
		}), reset(n), event("drop", n, T), event("dragover", n, (t) => {
			t.preventDefault(), t.stopPropagation(), set(S, !0);
		}), event("dragleave", n, (t) => {
			t.preventDefault(), t.stopPropagation(), set(S, !1);
		}), append(t, n);
	};
	if_block(j, (t) => {
		get$2(m) ? t(M) : t(N, -1);
	}), reset(O), append(t, O), pop();
}
delegate(["change"]);
var root_2$1 = /* @__PURE__ */ from_html("<!> <span>I have <b>samples</b> and I want to <b>search</b> for similar watermarks in a <b>database</b></span>", 1), root_3$2 = /* @__PURE__ */ from_html("<!> <span>I have a <b>database</b> of watermarks that I want to make <b>searchable</b></span>", 1), root_4$1 = /* @__PURE__ */ from_html("<!> <span>I have a <b>set</b> of watermarks that I want to <b>compare</b> to each other</span>", 1), root_1$2 = /* @__PURE__ */ from_html("<!> <!> <!>", 1);
function AnalysisTypeSelect(t, n) {
	push(n, !0);
	let i = prop(n, "value", 15), a = prop(n, "field", 7);
	function o(t) {
		a().value = t;
	}
	onMount(() => {
		i(a().value);
	});
	var s = comment(), c = first_child(s);
	component(c, () => Toggle_group, (t, n) => {
		n(t, {
			type: "single",
			onValueChange: o,
			class: "columns toggle-analysis-type",
			get value() {
				return i();
			},
			set value(t) {
				i(t);
			},
			children: (t, n) => {
				var i = root_1$2(), a = first_child(i);
				component(a, () => Toggle_group_item, (t, n) => {
					n(t, {
						value: "query",
						class: "column is-3 has-text-centered",
						children: (t, n) => {
							var i = root_2$1(), a = first_child(i);
							Icon(a, { icon: "mdi:database-search" }), next(2), append(t, i);
						},
						$$slots: { default: !0 }
					});
				});
				var o = sibling(a, 2);
				component(o, () => Toggle_group_item, (t, n) => {
					n(t, {
						value: "indexing",
						class: "column is-3 has-text-centered",
						children: (t, n) => {
							var i = root_3$2(), a = first_child(i);
							Icon(a, { icon: "mdi:database-plus" }), next(2), append(t, i);
						},
						$$slots: { default: !0 }
					});
				});
				var s = sibling(o, 2);
				component(s, () => Toggle_group_item, (t, n) => {
					n(t, {
						value: "similarity",
						class: "column is-3 has-text-centered",
						children: (t, n) => {
							var i = root_4$1(), a = first_child(i);
							Icon(a, { icon: "mdi:compare-horizontal" }), next(2), append(t, i);
						},
						$$slots: { default: !0 }
					});
				}), append(t, i);
			},
			$$slots: { default: !0 }
		});
	}), append(t, s), pop();
}
function IndexSelect(t, n) {
	push(n, !0);
	let i = prop(n, "value", 15), a = /* @__PURE__ */ user_derived(() => n.options.map((t) => ({
		label: Array.from(t.childNodes).filter((t) => t.tagName !== "INPUT").map((t) => t.outerHTML || t.textContent).join(""),
		input: t.querySelector("input")
	})));
	function o(t) {
		get$2(a).forEach(({ input: n }) => {
			n.value === t ? n.checked = !0 : n.checked = !1;
		});
	}
	onMount(() => {
		get$2(a).forEach(({ input: t }) => {
			t.checked && i(t.value);
		});
	});
	var s = comment(), c = first_child(s);
	component(c, () => Toggle_group, (t, n) => {
		n(t, {
			type: "single",
			onValueChange: o,
			orientation: "vertical",
			class: "dataset-compose-form",
			get value() {
				return i();
			},
			set value(t) {
				i(t);
			},
			children: (t, n) => {
				var i = comment(), o = first_child(i);
				each(o, 17, () => get$2(a), index$1, (t, n) => {
					let i = () => get$2(n).input, a = () => get$2(n).label;
					var o = comment(), s = first_child(o);
					component(s, () => Toggle_group_item, (t, n) => {
						n(t, {
							get value() {
								return i().value;
							},
							class: "search-index-option",
							children: (t, n) => {
								var i = comment(), o = first_child(i);
								html(o, a), append(t, i);
							},
							$$slots: { default: !0 }
						});
					}), append(t, o);
				}, (t) => {
					var n = comment(), i = first_child(n);
					component(i, () => Toggle_group_item, (t, n) => {
						n(t, {
							value: "",
							class: "search-index-option",
							children: (t, n) => {
								next();
								var i = text("No index available");
								append(t, i);
							},
							$$slots: { default: !0 }
						});
					}), append(t, n);
				}), append(t, i);
			},
			$$slots: { default: !0 }
		});
	}), append(t, s), pop();
}
var root_2 = /* @__PURE__ */ from_html("<!> <span><b>Detect and crop</b> watermarks inside the full pages</span>", 1), root_3$1 = /* @__PURE__ */ from_html("<!> <span>Watermarks are already cropped, use <b>full images</b></span>", 1), root_5 = /* @__PURE__ */ from_html("<!> <span>Images are <b>black sketches on white background</b>, use <b>full images</b></span>", 1), root_1$1 = /* @__PURE__ */ from_html("<!> <!> <!>", 1);
function NeedRegionsToggle(t, n) {
	push(n, !0);
	let i = prop(n, "value", 15, !0), a = prop(n, "field", 7), o = prop(n, "are_sketches_field", 7), s = /* @__PURE__ */ state(proxy(i() ? "true" : "false"));
	function c(t) {
		set(s, t, !0), i(get$2(s) == "true"), a().checked = i(), o() && (o().checked = get$2(s) == "sketches");
	}
	onMount(() => {
		set(s, o()?.checked ? "sketches" : a().checked ? "true" : "false", !0), i(get$2(s) == "true");
	});
	var l = comment(), u = first_child(l);
	component(u, () => Toggle_group, (t, n) => {
		n(t, {
			get value() {
				return get$2(s);
			},
			type: "single",
			onValueChange: c,
			class: "columns toggle-analysis-type",
			children: (t, n) => {
				var i = root_1$1(), a = first_child(i);
				component(a, () => Toggle_group_item, (t, n) => {
					n(t, {
						value: "true",
						class: "column is-3 has-text-centered",
						children: (t, n) => {
							var i = root_2(), a = first_child(i);
							Icon(a, { icon: "mdi:image-size-select-large" }), next(2), append(t, i);
						},
						$$slots: { default: !0 }
					});
				});
				var s = sibling(a, 2);
				component(s, () => Toggle_group_item, (t, n) => {
					n(t, {
						value: "false",
						class: "column is-3 has-text-centered",
						children: (t, n) => {
							var i = root_3$1(), a = first_child(i);
							Icon(a, { icon: "mdi:fullscreen" }), next(2), append(t, i);
						},
						$$slots: { default: !0 }
					});
				});
				var c = sibling(s, 2), l = (t) => {
					var n = comment(), i = first_child(n);
					component(i, () => Toggle_group_item, (t, n) => {
						n(t, {
							value: "sketches",
							class: "column is-3 has-text-centered",
							children: (t, n) => {
								var i = root_5(), a = first_child(i);
								Icon(a, { icon: "lucide:flower" }), next(2), append(t, i);
							},
							$$slots: { default: !0 }
						});
					}), append(t, n);
				};
				if_block(c, (t) => {
					o() && t(l);
				}), append(t, i);
			},
			$$slots: { default: !0 }
		});
	}), append(t, l), pop();
}
var root_1 = /* @__PURE__ */ from_html("<div class=\"notification is-danger is-light py-3 px-4 mt-5 mb-2\"><p class=\"error\">Please fill in all the fields.</p> <!></div>"), root_3 = /* @__PURE__ */ from_html("<h4 class=\"mt-6 mb-5\">What index do you want to query?</h4> <!>", 1), root_4 = /* @__PURE__ */ from_html("<h4 class=\"mt-6 mb-5\"><!></h4> <div class=\"box has-background-light\"><!></div> <h4 class=\"mt-6 mb-5\">What kind of images is it?</h4> <!>", 1), root = /* @__PURE__ */ from_html("<!> <h4 class=\"mb-5\">What do you want to do?</h4> <!> <!> <!> <div class=\"mb-4\"></div>", 1);
function WatermarksForm(t, n) {
	push(n, !0);
	let i = n.originalForm.querySelector("#id_name"), a = n.originalForm.querySelector("#id_analysis_type"), o = /* @__PURE__ */ state(proxy(a.value)), s = Array.from(n.originalForm.querySelectorAll("[name=query_target_index]")).map((t) => t.parentElement), c = /* @__PURE__ */ state(""), l = n.originalForm.querySelector(".dataset-form"), u = n.originalForm.querySelector("#id_need_regions"), d = n.originalForm.querySelector("#id_are_sketches"), f = n.originalForm.querySelectorAll(".errorlist"), p = a.form.querySelector("input[type=submit]"), m = /* @__PURE__ */ state(!1);
	user_effect(() => {
		get$2(o) === "query" ? i.value = "Query on " + s.find((t) => t.querySelector("input").value === get$2(c))?.querySelector(".index-title")?.textContent.trim() : i.value = get$2(o).charAt(0).toUpperCase() + get$2(o).slice(1);
	}), user_effect(() => {
		p.disabled = get$2(o) === "" || get$2(o) === "query" && get$2(c) === "" || !get$2(m);
	});
	var h = root(), g = first_child(h), _ = (t) => {
		var n = root_1(), i = sibling(child(n), 2);
		each(i, 17, () => f, index$1, (t, n) => {
			var i = comment(), a = first_child(i);
			html(a, () => get$2(n).outerHTML), append(t, i);
		}), reset(n), append(t, n);
	};
	if_block(g, (t) => {
		f.length > 0 && t(_);
	});
	var v = sibling(g, 4);
	AnalysisTypeSelect(v, {
		get field() {
			return a;
		},
		get value() {
			return get$2(o);
		},
		set value(t) {
			set(o, t, !0);
		}
	});
	var y = sibling(v, 2), b = (t) => {
		var n = root_3(), i = sibling(first_child(n), 2);
		IndexSelect(i, {
			get options() {
				return s;
			},
			get value() {
				return get$2(c);
			},
			set value(t) {
				set(c, t, !0);
			}
		}), append(t, n);
	};
	if_block(y, (t) => {
		get$2(o) === "query" && t(b);
	});
	var x = sibling(y, 2), S = (t) => {
		var n = root_4(), i = first_child(n), a = child(i), s = (t) => {
			var n = text("What images do you want to use as a query?");
			append(t, n);
		}, c = (t) => {
			var n = text("What is your dataset?");
			append(t, n);
		};
		if_block(a, (t) => {
			get$2(o) === "query" ? t(s) : t(c, -1);
		}), reset(i);
		var f = sibling(i, 2), p = child(f);
		DatasetComposeForm(p, {
			get form() {
				return l;
			},
			get ready() {
				return get$2(m);
			},
			set ready(t) {
				set(m, t, !0);
			}
		}), reset(f);
		var h = sibling(f, 4);
		{
			let t = /* @__PURE__ */ user_derived(() => get$2(o) === "indexing" ? d : void 0);
			NeedRegionsToggle(h, {
				get field() {
					return u;
				},
				get are_sketches_field() {
					return get$2(t);
				}
			});
		}
		append(t, n);
	};
	if_block(x, (t) => {
		get$2(o) && (get$2(o) !== "query" || get$2(c) != "") && t(S);
	}), next(2), append(t, h), pop();
}
function initWatermarksForm(t) {
	let n = document.createElement("div");
	t.parentNode?.insertBefore(n, t.nextSibling), mount(WatermarksForm, {
		target: n,
		props: { originalForm: t }
	}), t.style.display = "none";
}
function initClusterViewer(t, n, i, a, o, s) {
	mount(ClusterApp, {
		target: t,
		props: {
			clustering_data: unserializeClusterFile(n),
			base_url: i,
			editable: a,
			editing: o,
			formfield: s
		}
	});
}
function initProgressTracker(t, n) {
	mount(ProgressTracker, {
		target: t,
		props: { tracking_url: n }
	});
}
function initSimilarityApp(t, n, i, a, o) {
	mount(SimilarityApp, {
		target: t,
		props: {
			source_index_url: n,
			sim_matrix_url: i,
			mode: a,
			metadata_url: o
		}
	});
}
function initSearchResults(t, n, i, a) {
	mount(SearchResults, {
		target: t,
		props: {
			source_index_url: n,
			query_result_url: i,
			metadata_url: a
		}
	});
}
function initImageGenericList(t, n) {
	mount(ImageGenericList, {
		target: t,
		props: { image_array: n }
	});
}
function initDatasetImageBrowser(t, n, i, a) {
	mount(DatasetImageBrowser, {
		target: t,
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
