const setChildren = (htmlContents, payload) =>{
  const { data, content } = payload
  
  return htmlContents.map((el) => {
    const { children } = el
    if(el.id == data.id) {
      el.children = [...children, content]
    } else if (children && children.length > 0) {    
      el.children = setChildren(children, payload)
    }

    return el
  });
}

const setHtmlContent = (htmlContents, payload) =>{
  return htmlContents.map((el) => {
    const { children } = el
    if(el.id == payload.id) {
      el = payload
    } else if (children && children.length > 0) {    
      el.children = setHtmlContent(children, payload)
    }

    return el
  });
}

const state = {
  htmlContents: []
}

const getters = {
  getHtmlContents: (state) => state.htmlContents
}

const actions = {

}

const mutations = {
  addHtmlContent: (state, payload) => {
    state.htmlContents = [...state.htmlContents, payload]
  },
  addChildrenContent: (state, payload) => {
    state.htmlContents = setChildren(state.htmlContents, payload)    
  },
  updateHtmlContent: (state, payload) => {
    state.htmlContents = setHtmlContent(state.htmlContents, payload)
  }
}

const namespaced = true

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations,
}