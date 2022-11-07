function HabiDsabi() {
    if (document.getElementById('termos').checked == true) {
        document.getElementById('bttSubmit').disabled = ""
    }
    if (document.getElementById('termos').checked == false) {
        document.getElementById('bttSubmit').disabled = "disabled"
    }
}
