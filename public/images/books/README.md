# 📁 Book Cover Images

Drop book cover images here. Each file maps to one book across all pages.

## Expected files:

| Filename                      | Book Title                        | Used In                                  |
|-------------------------------|-----------------------------------|------------------------------------------|
| `superhero-cover.jpg`         | What If You Are a Superhero       | Home teaser, Books featured, Books grid  |
| `marriage-dates-cover.jpg`    | My 50 Arranged Marriage Dates     | Home teaser, Books grid                  |
| `neural-narratives-cover.jpg` | Neural Narratives                 | Home teaser, Books grid                  |

## How to activate:

1. Add your cover images here with the exact filenames above
2. Open `src/lib/imageConfig.ts`
3. Update the values under `books:` to point to `/images/books/<filename>`

All pages (Home teaser + full Books page) will update automatically.
