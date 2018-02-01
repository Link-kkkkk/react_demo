import React from 'react';

// 在React中，所有DOM properties 和 attributes（包括event handle）都应该是驼峰命名法

class dom extends React.Component {
  render() {
    function createMarkup() {
      return { __html: 'First <<>> Second' };
    }

    return (
      // 因为class是Javascript的关键字，所以在指定CSS类时，使用className属性
      <div className='domelement'>
        {/* defaultChecked默认选中 */}
        {/* defaultValue用于一般的input */}
        <input type="checkbox" defaultChecked />
        {/* dangerouslySetInnerHTML类似innerHtml,接受一段__html的内容，因为innerHtml很容易被XSS，所以是故意搞得这么麻烦的 */}
        <div dangerouslySetInnerHTML={createMarkup()} />
        {/* htmlFor,类似for;onChanged,类似onChange */}
        {/* style属性接受一个驼峰命名法的JavaScript对象，而不是CSS字符串 */}
      </div>
    )
  }
}

export default dom