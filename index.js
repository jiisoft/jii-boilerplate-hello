// В большинстве случаев класс-неймспейс Jii можно расположить глобально,
// чтобы не вызывать `require('jii')` в каждом файле
global.Jii = require('jii');

// Подгружаем npm зависимости
require('jii-httpserver');
require('jii-view');

// Подгружаем js файлы приложения (шаблоны подгрузятся автоматически)
require('./controllers/SiteController');

// Создаём экземпляр приложения, он будет доступен через Jii.app
Jii.createWebApplication({
	application: {
		basePath: __dirname,
		components: {
			urlManager: { // Роутер
				className: 'Jii.urlManager.UrlManager',
				rules: {
					'': 'site/index'
				}
			},
			http: { // HTTP сервер
				className: 'Jii.httpServer.HttpServer'
			},
			view: { // Компонент для генерации HTML
				className: 'Jii.view.ServerWebView'
			}
		}
	}
});

// Запускаем веб-сервер
Jii.app.http.start();
