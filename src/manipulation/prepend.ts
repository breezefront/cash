
// @require core/cash.ts
// @require ./helpers/insert_content.ts

interface Cash {
  prepend ( ...selectors: Selector[] ): this;
}

fn.prepend = function ( this: Cash ) {

  return insertContent ( arguments, this, false, true, true, true, true );

};
