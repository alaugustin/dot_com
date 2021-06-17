console.log("main.js executed");
/* -------------------- new JS template below -------------------- */
let aaaDotCom = {
    version: '1.0',
    author: 'Al Augustin',
    project: 'Cee-Lo web dice game',
    Date: '2021',

    // -------------------- INITIALIZATION --------------------
    init: function () {
        let context = this;

        // GLOBAL VARIABLES --------------------
        context.config = {
            abc: "var test passed",
        };

        // CALL DOM INVOKING FUNCTIONS HERE --------------------
        aaaDotCom.footerYear();
        aaaDotCom.eventHandlers();

        // FOR DEV PORPOSES --------------------
        console.log(context.config.abc);
        console.log(aaaDotCom.config);

    },



    // -------------------- footerYear() --------------------
    footerYear: () => {
        let yearHolder = document.getElementById("currentYear"),
            theCurrentYear = new Date().getFullYear();

            yearHolder.innerHTML = theCurrentYear;
        console.log(yearHolder);
        console.log(theCurrentYear);
    },



    // -------------------- HANDLE ALL PAGE LEVEL EVENTS --------------------
    eventHandlers: () => {
        console.log("eventHandlers() here");
    },
};

// -------------------- LOAD init() --------------------
window.addEventListener("load", () => {
    aaaDotCom.init();
});
