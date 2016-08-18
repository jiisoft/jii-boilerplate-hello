/**
 * @class app.controllers.SiteController
 * @extends Jii.base.Controller
 */
Jii.defineClass('app.controllers.SiteController', {

	__extends: 'Jii.base.Controller',

	/**
	 *
	 * @param {Jii.base.Context} context
	 * @param {Jii.httpServer.Request} context.request
	 * @param {Jii.httpServer.Response} context.response
	 */
	actionIndex(context) {
		// Данный метод вызывается, когда происходит обращение к корню сайта. Это правило прописано
		// в конфигурации приложения (urlManager -> rules -> '': 'site/index')

		// При HTTP запросах, контекст имеет объекты запроса и ответа, через которые
		// можно получить GET, POST параметры и отправить данные клиенту

		// Генерируем HTML страницы: макет `layouts/main` + представление `site/index`
        return this.render('index', {
            text: 'Hello World!'
        });
	}

});