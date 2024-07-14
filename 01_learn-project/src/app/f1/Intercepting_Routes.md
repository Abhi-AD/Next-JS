# Intercepting Routes Conventions

When working with routes in our application, it's important to understand how to intercept and match segments at various levels within the directory structure. Below are the conventions we follow for intercepting routes:

## Conventions

### Same Level Segment Matching
- Use `(.)` to match segments on the same level.
- This is useful for routes that share the same parent directory.

### One Level Above Segment Matching
- Use `( .. )` to match segments one level above.
- This helps in scenarios where you need to reference routes that are in the parent directory.

### Two Levels Above Segment Matching
- Use `( .. )( .. )` to match segments two levels above.
- This is beneficial when you need to navigate to routes that are in the grandparent directory.

### Root App Directory Segment Matching
- Use `( ... )` to match segments from the root app directory.
- This allows you to reference routes starting from the root of the application, regardless of the current directory depth.


