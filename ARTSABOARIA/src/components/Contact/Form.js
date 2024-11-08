function CopyText() {
    navigator.clipboard.writeText('artsaboaria').then(() => {
        alert('Copied')
    })
}