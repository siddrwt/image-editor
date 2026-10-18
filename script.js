let filters = {
    brightness: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    contrast: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    saturation: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    hueRotation: {
        value: 0,
        min: 0,
        max: 360,
        unit: "deg"
    },
    blur: {
        value: 0,
        min: 0,
        max: 20,
        unit: "px"
    },
    grayscale: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%"
    },
    sepia: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%"
    },
    opacity: {
        value: 100,
        min: 0,
        max: 100,
        unit: "%"
    },
    invert: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%"
    }
};

const imageCanvas = document.querySelector("#image-canvas");
const imgInput= document.querySelector("#image-input");

const filterContainer = document.querySelector(".filters");
const canvasCtx = imageCanvas.getContext("2d");
const resetButton = document.querySelector("#reset-btn");
const downloadButton = document.querySelector("#download-btn");
const presetContainer = document.querySelector(".presets");

let file = null;
let image =null;

function createFilterElement(name , unit ,value ,min, max){
    const div = document.createElement("div");
    div.classList.add("filter")
    const input= document.createElement("input");
    input.type="range"
    input.min= min;
    input.max= max;
    input.value= value;
    input.id = name;

    const p = document.createElement("p");
    p.innerText= name;

    div.appendChild(p);
    div.appendChild(input);

    input.addEventListener("input",(event) =>{
        filters[name].value = input.value;
        applyFilters();
    })

    return div;
}



function createFilters(){
    Object.keys(filters).forEach(key =>{
        const filterElement =createFilterElement(key, filters[key].unit, filters[key].value, filters[key].  min, filters[key].max);
        filterContainer.appendChild(filterElement);
    });
}
createFilters();

imgInput.addEventListener("change" ,(event)=>{

    file = event.target.files[0];
    const imagePlaceholder = document.querySelector(".placeholder");
    imageCanvas.style.display="block";
    imagePlaceholder.style.display = "none";
    
    const img = new Image();
    img.src=URL.createObjectURL(file);

    img.onload = () => {
        image = img;
        imageCanvas.width = img.width;
        imageCanvas.height = img.height;
        applyFilters();
    }
})

function applyFilters(){
    if (!image) {
        return;
    }

    canvasCtx.clearRect(0,0, imageCanvas.width,imageCanvas.height);
    canvasCtx.filter = `
        brightness(${filters.brightness.value}${filters.brightness.unit})
        contrast(${filters.contrast.value}${filters.contrast.unit})
        saturate(${filters.saturation.value}${filters.saturation.unit})
        hue-rotate(${filters.hueRotation.value}${filters.hueRotation.unit})
        blur(${filters.blur.value}${filters.blur.unit})
        grayscale(${filters.grayscale.value}${filters.grayscale.unit})
        sepia(${filters.sepia.value}${filters.sepia.unit})
        opacity(${filters.opacity.value}${filters.opacity.unit})
        invert(${filters.invert.value}${filters.invert.unit})
    `.trim();
    canvasCtx.drawImage(image,0,0);

}


resetButton.addEventListener("click",  () =>{
    filters = {
        brightness: {
            value: 100,
            min: 0,
            max: 200,
            unit: "%"
        },
        contrast: {
            value: 100,
            min: 0,
            max: 200,
            unit: "%"
        },
        saturation: {
            value: 100,
            min: 0,
            max: 200,
            unit: "%"
        },
        hueRotation: {
            value: 0,
            min: 0,
            max: 360,
            unit: "deg"
        },
        blur: {
            value: 0,
            min: 0,
            max: 20,
            unit: "px"
        },
        grayscale: {
            value: 0,
            min: 0,
            max: 100,
            unit: "%"
        },
        sepia: {
            value: 0,
            min: 0,
            max: 100,
            unit: "%"
        },
        opacity: {
            value: 100,
            min: 0,
            max: 100,
            unit: "%"
        },
        invert: {
            value: 0,
            min: 0,
            max: 100,
            unit: "%"
        }
    };
    applyFilters();
    filterContainer.innerHTML="";
    createFilters();
});

downloadButton.addEventListener("click", () =>{
    const link = document.createElement("a");
    link.download = "edited-image.png";
    link.href = imageCanvas.toDataURL();
    link.click();
});



const presets = {
    
    vintage: {
        name: "Vintage",
        category: "Classic",
        filters: {
            brightness: 105,
            contrast: 90,
            saturation: 75,
            hueRotation: 350,
            blur: 0.3,
            grayscale: 0,
            sepia: 35,
            opacity: 100,
            invert: 0
        }
    },

    oldSchool: {
        name: "Old School",
        category: "Classic",
        filters: {
            brightness: 95,
            contrast: 115,
            saturation: 65,
            hueRotation: 0,
            blur: 0,
            grayscale: 15,
            sepia: 45,
            opacity: 100,
            invert: 0
        }
    },

    cyberpunk: {
        name: "Cyberpunk",
        category: "Creative",
        filters: {
            brightness: 110,
            contrast: 135,
            saturation: 180,
            hueRotation: 280,
            blur: 0,
            grayscale: 0,
            sepia: 5,
            opacity: 100,
            invert: 0
        }
    },

    drama: {
        name: "Drama",
        category: "Cinematic",
        filters: {
            brightness: 90,
            contrast: 155,
            saturation: 115,
            hueRotation: 0,
            blur: 0,
            grayscale: 10,
            sepia: 0,
            opacity: 100,
            invert: 0
        }
    },

    blackAndWhite: {
        name: "Black & White",
        category: "Classic",
        filters: {
            brightness: 105,
            contrast: 125,
            saturation: 0,
            hueRotation: 0,
            blur: 0,
            grayscale: 100,
            sepia: 0,
            opacity: 100,
            invert: 0
        }
    },

    cinematic: {
        name: "Cinematic",
        category: "Cinematic",
        filters: {
            brightness: 95,
            contrast: 120,
            saturation: 80,
            hueRotation: 345,
            blur: 0,
            grayscale: 0,
            sepia: 12,
            opacity: 100,
            invert: 0
        }
    },

    warmGlow: {
        name: "Warm Glow",
        category: "Portrait",
        filters: {
            brightness: 115,
            contrast: 95,
            saturation: 115,
            hueRotation: 350,
            blur: 0,
            grayscale: 0,
            sepia: 18,
            opacity: 100,
            invert: 0
        }
    },

    coolTone: {
        name: "Cool Tone",
        category: "Portrait",
        filters: {
            brightness: 100,
            contrast: 110,
            saturation: 90,
            hueRotation: 190,
            blur: 0,
            grayscale: 0,
            sepia: 0,
            opacity: 100,
            invert: 0
        }
    },

    faded: {
        name: "Faded",
        category: "Classic",
        filters: {
            brightness: 115,
            contrast: 75,
            saturation: 70,
            hueRotation: 0,
            blur: 0,
            grayscale: 5,
            sepia: 10,
            opacity: 100,
            invert: 0
        }
    },

    vivid: {
        name: "Vivid",
        category: "Color",
        filters: {
            brightness: 105,
            contrast: 120,
            saturation: 165,
            hueRotation: 0,
            blur: 0,
            grayscale: 0,
            sepia: 0,
            opacity: 100,
            invert: 0
        }
    },

    matte: {
        name: "Matte",
        category: "Color",
        filters: {
            brightness: 110,
            contrast: 80,
            saturation: 85,
            hueRotation: 0,
            blur: 0,
            grayscale: 0,
            sepia: 8,
            opacity: 100,
            invert: 0
        }
    },

    noir: {
        name: "Film Noir",
        category: "Cinematic",
        filters: {
            brightness: 85,
            contrast: 165,
            saturation: 0,
            hueRotation: 0,
            blur: 0,
            grayscale: 100,
            sepia: 5,
            opacity: 100,
            invert: 0
        }
    },

    dreamy: {
        name: "Dreamy",
        category: "Creative",
        filters: {
            brightness: 115,
            contrast: 85,
            saturation: 110,
            hueRotation: 15,
            blur: 1.2,
            grayscale: 0,
            sepia: 5,
            opacity: 100,
            invert: 0
        }
    },

    retro: {
        name: "Retro",
        category: "Classic",
        filters: {
            brightness: 105,
            contrast: 110,
            saturation: 125,
            hueRotation: 330,
            blur: 0,
            grayscale: 0,
            sepia: 22,
            opacity: 100,
            invert: 0
        }
    },

    fadedFilm: {
        name: "Faded Film",
        category: "Cinematic",
        filters: {
            brightness: 110,
            contrast: 85,
            saturation: 60,
            hueRotation: 0,
            blur: 0.2,
            grayscale: 10,
            sepia: 20,
            opacity: 100,
            invert: 0
        }
    },

    inverted: {
        name: "Negative",
        category: "Creative",
        filters: {
            brightness: 100,
            contrast: 110,
            saturation: 100,
            hueRotation: 0,
            blur: 0,
            grayscale: 0,
            sepia: 0,
            opacity: 100,
            invert: 100
        }
    },

    softPortrait: {
        name: "Soft Portrait",
        category: "Portrait",
        filters: {
            brightness: 108,
            contrast: 92,
            saturation: 105,
            hueRotation: 0,
            blur: 0.4,
            grayscale: 0,
            sepia: 4,
            opacity: 100,
            invert: 0
        }
    },

    sunset: {
        name: "Sunset",
        category: "Color",
        filters: {
            brightness: 110,
            contrast: 115,
            saturation: 140,
            hueRotation: 340,
            blur: 0,
            grayscale: 0,
            sepia: 25,
            opacity: 100,
            invert: 0
        }
    },

    icy: {
        name: "Icy",
        category: "Creative",
        filters: {
            brightness: 110,
            contrast: 120,
            saturation: 80,
            hueRotation: 200,
            blur: 0,
            grayscale: 10,
            sepia: 0,
            opacity: 100,
            invert: 0
        }
    }
};

Object.keys(presets).forEach(presetName =>{
    const preset = presets[presetName];
    const presetButton = document.createElement("button");
    presetButton.classList.add("btn");
    presetButton.innerText = preset.name;
    presetContainer.appendChild(presetButton);

    presetButton.addEventListener("click", ()=> {
        Object.keys(preset.filters).forEach(filterName => {
            filters[filterName].value = preset.filters[filterName];
            filterContainer.querySelector(`#${filterName}`).value = preset.filters[filterName];
        });
        applyFilters();
    });
});