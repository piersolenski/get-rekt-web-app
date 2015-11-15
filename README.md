A simple boilerplate based on my own preferences involving SASS, Gulp, and a simple file structure. The idea is to leave as much of blank slate for maximum creativity as possible. Much of the CSS is commented out or takes advantage of SASS's placeholder selectors in order to reduce bloat if not used.

If you use Sublime Text, the following snippet may be useful to hide stuff you don't need cluttering your side bar using [project settings](http://net.tutsplus.com/tutorials/tools-and-tips/sublime-text-2-project-bliss/).

```
{
	"folders":
	[
		{
			"folder_exclude_patterns": [".sass-cache", "node_modules"],
			"file_exclude_patterns": ["package.json", ".gitignore", "*.min.*", "*.sublime-project"]
		}
	]
}
```

Currently a work in progress!
