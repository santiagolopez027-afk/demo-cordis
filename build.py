#!/usr/bin/env python3
"""Arma dist/index.html (un solo archivo) a partir de src/."""
from pathlib import Path

root = Path(__file__).parent
src = root / "src"
dist = root  # la página se publica desde la raíz del repo (GitHub Pages)

tpl = (src / "index.template.html").read_text(encoding="utf-8")
out = (tpl.replace("/*__STYLE__*/", (src / "style.css").read_text(encoding="utf-8"))
          .replace("/*__DATA__*/", (src / "data.js").read_text(encoding="utf-8"))
          .replace("/*__APP__*/", (src / "app.js").read_text(encoding="utf-8")))
(dist / "index.html").write_text(out, encoding="utf-8")
(dist / "CNAME").write_text("demo-cordis.potenta.ai\n", encoding="utf-8")
(dist / ".nojekyll").write_text("", encoding="utf-8")
print(f"index.html: {len(out.encode('utf-8'))/1024:.1f} KB")
