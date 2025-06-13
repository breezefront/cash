
// @require core/cash.ts
// @require ./helpers/insert_content.ts

interface Cash {
  append ( ...selectors: Selector[] ): this;
}

fn.append = function ( this: Cash ) {

  return insertContent ( arguments, this, false, false, true );

};
