(function () {
    var doughnutData = [{
            value: 0,
            color: "#40ace1",
            highlight: "#5bc2f4",
            label: "可用余额"
        },
        {
            value: 0,
            color: "#F7464A",
            highlight: "#FF5A5E",
            label: "冻结总额"
        },
        {
            value: 0,
            color: "#7cc379",
            highlight: "#8ed98b",
            label: "待收总额"
        },

    ];

    window.onload = function () {
        $('#sp1').html('10');
        $('#sp2').html('20');
        $('#sp3').html('30');
        doughnutData[0].value = $('#sp1').html();
        doughnutData[1].value = $('#sp2').html();
        doughnutData[2].value = $('#sp3').html();
        var ctx = document.getElementById("chart-area").getContext("2d");
        window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {
            responsive: true
        });
    };

})();