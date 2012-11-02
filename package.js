Package.describe({
  summary: "UX/UI framework from Twitter FEAT. fontawesome"
});

Package.on_use(function (api) {
  api.add_files('css/bootstrap.css', 'client');
  api.add_files('css/bootstrap-responsive.css', 'client');
  api.add_files('js/bootstrap.js', 'client');

  api.add_files('font/fontawesome-webfont.eot', 'client');
  api.add_files('font/fontawesome-webfont.svg', 'client');
  api.add_files('font/fontawesome-webfont.ttf', 'client');
  api.add_files('font/fontawesome-webfont.woff', 'client');
});
