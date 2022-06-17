const toastTrigger = document.querySelectorAll('.liveToastBtn')
toastTrigger.forEach(function(item){
    const toastLiveExample = document.getElementById('liveToast')
    if (item) {
        item.addEventListener('click', () => {
        const toast = new bootstrap.Toast(toastLiveExample)
        toast.show()
      })
    }
})