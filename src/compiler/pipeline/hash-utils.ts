/**
 * FNV-1a 32-bit hash. Same algorithm as id-allocator.ts but exposed for
 * general use (file content hashing, schema hashing).
 */
export function fnv1a32(input: string): number {
	let hash = 0x811c9dc5;
	for (let i = 0; i < input.length; i++) {
		hash ^= input.charCodeAt(i);
		hash = Math.imul(hash, 0x01000193);
	}
	return (hash >>> 0) & 0x7fffffff;
}

/**
 * Hash file content for incremental compilation cache invalidation.
 */
export function hashContent(content: string): number {
	return fnv1a32(content);
}
