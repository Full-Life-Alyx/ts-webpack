import { Events } from './utils'

let config: Events = {
    "No file loaded": 1
}
export {
    config
}

jQuery(function() {
    $('#config').on("change", function () {
        const input = this;
        
        if (
            !(input instanceof HTMLInputElement)
            ||
            !(input.type === 'file')
            )
            return
            
        this.hidden = true
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const contents = e.target?.result;
                if (contents == null) {
                    config = {
                        "File reading error": 1
                    }
                    return
                }
                config = JSON.parse(contents.toString())
                console.log(config, contents)
            };
            reader.readAsText(input.files[0]);
        }
    });
})


