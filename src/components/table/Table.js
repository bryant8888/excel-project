import {ExcelComponent} from '@/core/ExcelComponent'
import { createTable } from '@/components/table/table.template'
import {$} from '@/core/dom'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    })
  }

  toHTML() {
    return createTable(100)
  }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      const $resizer = $(event.target)
      // const $parent = $resizer.$el.parentNode // bad
      // const $parent = $resizer.$el.closest('.column') //better but bad
      const $parent = $resizer.closest('[data-type="resizable"]')
      const coords = $parent.getCoords()
      console.log($parent.data.col)


      document.onmousemove = e => {
        const delta = e.pageX - coords.right
        const value = coords.width + delta
        $parent.$el.style.width = value + 'px'
      }

      document.onmouseup = () => {
        document.onmousemove = null
      }
    }

    // console.log(event.target.dataset?.resize)
    // const $el = event.target.parentElement
    // console.log('$EL.parentElement', $el)
    // const indexEl = [...$el.parentElement.children].indexOf($el)
    // console.log('index', indexEl)
    //
    // console.log('$root', this.$root)
    // const arr = [...this.$root.$el.children]
    // console.log('arr', arr)
    // const newArr = arr.map(el => {
    //   const element = el.children[1]
    //   console.log('element', element)
    //   return [...element.children]
    // })
    // console.log('newArr', newArr)
    // const delta = event.pageX
    //
    // document.onmousemove = e => {
    //   console.log('delte', delta)
    //   newArr.map(el => {
    //     el.map((curElement, index) => {
    //       const width = curElement.offsetWidth
    //       if (index === indexEl) {
    //         curElement.style.width = width + e.pageX-delta + 'px'
    //       }
    //     })
    //   })
    //   console.log('e', e)
    // }
    //
    // document.onmouseup = () => {
    //   document.onmousemove = null
    // }
  }

  // onMousemove(event) {
  //   console.log('mousemoveevent', event)
  // }

}


