main();


function main() {
    const canvas = document.querySelector("#glCanvas");
    const gl = canvas.getContext("webgl");
    
    if (gl === null) {
        alert("Unable to initialize WebGL. Your browser or machine may not support it.");
        return;
    }

    gl.clearColor (0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}

function createShader (gl, type, source) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    var success = gl.getShaderParameter(gl.COMPILE_STATUS);
    if (success ){
        return shader;
    }
    console.log(gl.GetShaderInfoLog)(shader));
    gl.deleteShader(shader);

}