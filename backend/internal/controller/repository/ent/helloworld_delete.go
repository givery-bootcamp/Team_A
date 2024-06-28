// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"
	"myapp/internal/controller/repository/ent/helloworld"
	"myapp/internal/controller/repository/ent/predicate"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
)

// HelloWorldDelete is the builder for deleting a HelloWorld entity.
type HelloWorldDelete struct {
	config
	hooks    []Hook
	mutation *HelloWorldMutation
}

// Where appends a list predicates to the HelloWorldDelete builder.
func (hwd *HelloWorldDelete) Where(ps ...predicate.HelloWorld) *HelloWorldDelete {
	hwd.mutation.Where(ps...)
	return hwd
}

// Exec executes the deletion query and returns how many vertices were deleted.
func (hwd *HelloWorldDelete) Exec(ctx context.Context) (int, error) {
	return withHooks(ctx, hwd.sqlExec, hwd.mutation, hwd.hooks)
}

// ExecX is like Exec, but panics if an error occurs.
func (hwd *HelloWorldDelete) ExecX(ctx context.Context) int {
	n, err := hwd.Exec(ctx)
	if err != nil {
		panic(err)
	}
	return n
}

func (hwd *HelloWorldDelete) sqlExec(ctx context.Context) (int, error) {
	_spec := sqlgraph.NewDeleteSpec(helloworld.Table, sqlgraph.NewFieldSpec(helloworld.FieldID, field.TypeInt))
	if ps := hwd.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	affected, err := sqlgraph.DeleteNodes(ctx, hwd.driver, _spec)
	if err != nil && sqlgraph.IsConstraintError(err) {
		err = &ConstraintError{msg: err.Error(), wrap: err}
	}
	hwd.mutation.done = true
	return affected, err
}

// HelloWorldDeleteOne is the builder for deleting a single HelloWorld entity.
type HelloWorldDeleteOne struct {
	hwd *HelloWorldDelete
}

// Where appends a list predicates to the HelloWorldDelete builder.
func (hwdo *HelloWorldDeleteOne) Where(ps ...predicate.HelloWorld) *HelloWorldDeleteOne {
	hwdo.hwd.mutation.Where(ps...)
	return hwdo
}

// Exec executes the deletion query.
func (hwdo *HelloWorldDeleteOne) Exec(ctx context.Context) error {
	n, err := hwdo.hwd.Exec(ctx)
	switch {
	case err != nil:
		return err
	case n == 0:
		return &NotFoundError{helloworld.Label}
	default:
		return nil
	}
}

// ExecX is like Exec, but panics if an error occurs.
func (hwdo *HelloWorldDeleteOne) ExecX(ctx context.Context) {
	if err := hwdo.Exec(ctx); err != nil {
		panic(err)
	}
}
