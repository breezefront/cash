
// @require core/cash.ts
// @require ./helpers/insert_content.ts

interface Cash {
  after ( ...selectors: Selector[] ): this;
}

fn.after = function ( this: Cash ) {

  return insertContent ( arguments, this, false, false, false, true, true );

};
