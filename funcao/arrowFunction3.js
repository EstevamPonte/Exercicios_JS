let comparaComThis = function (param) { // em uma funcao normal, o contexto do "this" pode ser mudado
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // falso pq o contexto do "this" foi mudado com o "bind"
comparaComThis(obj) // verdaeiro pois o contexto foi mudado

let comparaComThisArrow = param => console.log(this === param) // com a funcao arrow o contexto do "this" nao muda
comparaComThisArrow(global) // falso
comparaComThisArrow(module.exports) // verdadeiro pois o "this" n é o this

comparaComThisArrow = comparaComThisArrow,bind(obj)
comparaComThisArrow(obj) // falso, pois na funcao arro o contexto do "this" n pode ser alterado, se mantem firme
comparaComThisArrow(module.exports)