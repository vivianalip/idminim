// Using strictEqual for a better comparison
assert.strictEqual(stripMentionsFromRepoDesc('Repo desc [maintainer=@abc]'), 'Repo desc ');
