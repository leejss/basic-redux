## RTK query

data fetching and caching

- loading state
- dedupe same requests
- optimistic updates
- managing caching lifetime

> adds a unique approach to its API design:

```ts
import { createApi } from "@reduxjs/toolkit/query/react";
```

> Instead, we now think about "managing cached data".

> "where is this data coming from?", "how should this update be sent?", "when should this cached data be re-fetched?", and "how should the cached data be updated?"

data soruce
data mutation
re fetching
revalidate

single api slice per app - the logic for managing chaced data centrallized
