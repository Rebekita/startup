var indexedDB;
var IDBTransaction;
var db;
(function() {
	function initDb() {
		var request = indexedDB.open("db", 1);
		request.onsuccess = function(evt) {
			db = request.result;
		};

		request.onerror = function(evt) {
			console.log("IndexedDB error: " + evt.target.errorCode);
		};

		request.onupgradeneeded = function(evt) {
			var objectStore = evt.currentTarget.result.createObjectStore("lista", {
				keyPath : "id",
				autoIncrement : true
			});

			objectStore.createIndex("texto", "texto", {
				unique : false
			});
			objectStore.createIndex("id", "id", {
				unique : true
			});

		};
	};

	function contentLoaded() {
		initDb();
		var saveIndex = document.getElementById("saveIndex");
		var clearIndex = document.getElementById("clearIndex");

		saveIndex.addEventListener("click", function() {
			var texto = document.getElementById("onlyTextIndex").value;

			var transaction = db.transaction("lista", "readwrite");
			var objectStore = transaction.objectStore("lista");
			var request = objectStore.add({
				texto : texto
			});
			request.onsuccess = function(evt) {
				$("#resultIndex").html('Guardado: ' + $("#onlyTextIndex").val());
				$("#onlyTextIndex").val('');
			};
		}, false);

		clearIndex.addEventListener("click", function() {
			var request = db.transaction('lista', 'readwrite');
			request.objectStore('lista').clear();

			request.oncomplete = function(evt) {
				console.log('listo');
			};
		}, false);
	};
	window.addEventListener("DOMContentLoaded", contentLoaded, false);
})(); 