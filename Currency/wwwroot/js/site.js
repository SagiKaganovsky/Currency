// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$.ajax({
    url: '/Home/Currencies',
    type: 'GET',
    dataType: 'json',
    success: function (data) {
        const filteredCurrencies = data.CURRENCIES.CURRENCY.filter((curr) => Number(curr.CHANGE) < 0);
        let table = new Tabulator('#currencies-table', {
            data: filteredCurrencies,
            autoColumns:true
        })
    },
    error: function (request, error) {
        alert("Request: " + JSON.stringify(request));
    }
});
