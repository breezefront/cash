
// @require core/cash.ts
// @require ./helpers/insert_content.ts

interface Cash {
  before ( ...selectors: Selector[] ): this;
}

fn.before = function ( this: Cash ) {

  return insertContent ( arguments, this, false, true );

};
