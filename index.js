// В большинстве случаев класс-неймспейс Jii можно расположить глобально,
// чтобы не вызывать `require('jii')` в каждом файле
global.Jii = require('jii');

// Подгружаем js файлы приложения (шаблоны подгрузятся автоматически)
require('./controllers/SiteController');

// Создаём экземпляр приложения, он будет доступен через Jii.app
Jii.createWebApplication({
	application: {
		basePath: __dirname,
		components: {
			urlManager: { // Роутер
				className: 'Jii.request.UrlManager',
				rules: {
					'': 'site/index'
				}
			},
			http: { // HTTP сервер
				className: 'Jii.request.http.HttpServer'
			},
			view: { // Компонент для генерации HTML
				className: 'Jii.view.ServerWebView'
			}
		}
	}
});

// Запускаем веб-сервер
Jii.app.http.start();
